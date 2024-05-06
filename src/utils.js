export const convertFirstLetterToUpperCase = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getFilteredData = (data, filters) => {
  return data.filter((item) => {
    let matches = true;

    if (filters.jobRole) {
      matches = matches && item.jobRole === filters.jobRole.value;
    }
    if (filters.minimumBaseSalary) {
      const salaryRange = filters.minimumBaseSalary.value;
      let minSalary;
      if (salaryRange.includes("l")) {
        minSalary = parseFloat(salaryRange.replace("l", ""));
      }
      const jobMinSalary = item.minJdSalary;
      matches = matches && jobMinSalary >= minSalary;
    }

    if (filters.jobMode) {
      matches = matches && item.location === filters.jobMode.value;
    }

    if (filters.yearsOfExperience) {
      const yearsOfExperience = parseInt(filters.yearsOfExperience.value);
      matches =
        matches &&
        item.minExp <= yearsOfExperience &&
        item.maxExp >= yearsOfExperience;
    }

    if (filters.numberOfEmployee) {
      const employeeRange = filters.numberOfEmployee.value;
      let lowerLimit, upperLimit;

      if (employeeRange.includes("-")) {
        [lowerLimit, upperLimit] = employeeRange.split("-").map(Number);
      } else {
        lowerLimit = parseInt(employeeRange.replace("+", ""), 10);
        upperLimit = Infinity;
      }

      const numEmployees = item.numberOfEmployee;
      matches =
        matches && numEmployees >= lowerLimit && numEmployees <= upperLimit;
    }

    if (filters.companyName) {
      const filterCompanyName = filters.companyName.value.toLowerCase();
      const dataCompanyName = item.companyName.toLowerCase();
      matches = matches && dataCompanyName.includes(filterCompanyName);
    }

    return matches;
  });
};
