export const colourOptions = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "purple",
    label: "Purple",
  },
];

export const roleOptions = [
  {
    value: "backend",
    label: "Backend",
  },
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "fullstack",
    label: "Fullstack",
  },
  {
    value: "ios",
    label: "iOS",
  },
  {
    value: "flutter",
    label: "Flutter",
  },
  {
    value: "react-native",
    label: "React Native",
  },
  {
    value: "android",
    label: "Android",
  },
  {
    value: "tech-lead",
    label: "Tech Lead",
  },
  {
    value: "devops",
    label: "DevOps",
  },
  {
    value: "data-engineer",
    label: "Data Engineer",
  },
  {
    value: "data-science",
    label: "Data Science",
  },
  {
    value: "computer-vision",
    label: "Computer Vision",
  },
  {
    value: "deep-learning",
    label: "Deep Learning",
  },
  {
    value: "test-qa",
    label: "Test / QA",
  },
  {
    value: "web3",
    label: "Web3",
  },
  {
    value: "sre",
    label: "SRE",
  },
  {
    value: "data-infrastructure",
    label: "Data Infrastructure",
  },
  {
    value: "designer",
    label: "Designer",
  },
  {
    value: "design-manager",
    label: "Design Manager",
  },
  {
    value: "graphic-designer",
    label: "Graphic Designer",
  },
  {
    value: "product-designer",
    label: "Product Designer",
  },
  {
    value: "product-manager",
    label: "Product Manager",
  },
  {
    value: "operations-manager",
    label: "Operations Manager",
  },
  {
    value: "sales-development",
    label: "Sales Development",
  },
];

export const numberOfEmployeeOptions = [
  {
    value: "1-10",
    label: "1-10",
  },
  {
    value: "11-20",
    label: "11-20",
  },
  {
    value: "21-50",
    label: "21-50",
  },
  {
    value: "51-100",
    label: "51-100",
  },
  {
    value: "101-200",
    label: "101-200",
  },
  {
    value: "201-500",
    label: "201-500",
  },
  {
    value: "500+",
    label: "500+",
  },
];

export const experienceOptions = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
];

export const minimumBaseSalaryOptions = [
  {
    value: "ol",
    label: "OL",
  },
  {
    value: "10l",
    label: "10L",
  },
  {
    value: "20l",
    label: "20L",
  },
  {
    value: "30l",
    label: "30L",
  },
  {
    value: "40l",
    label: "40L",
  },
  {
    value: "50l",
    label: "50L",
  },
  {
    value: "60l",
    label: "60L",
  },
  {
    value: "70l",
    label: "70L",
  },
];

export const dropdownConfigs = [
  {
    dropdownName: "jobRole",
    options: roleOptions,
    placeholder: "Roles",
  },
  {
    dropdownName: "numberOfEmployee",
    options: numberOfEmployeeOptions,
    placeholder: "Number of Employees",
  },
  {
    dropdownName: "yearsOfExperience",
    options: experienceOptions,
    placeholder: "Experience",
  },
  {
    dropdownName: "jobMode",
    options: [
      {
        value: "remote",
        label: "Remote",
      },
      {
        value: "hybrid",
        label: "Hybrid",
      },
      {
        value: "inOffice",
        label: "In-Office",
      },
    ],
    placeholder: "Job Mode",
  },
  {
    dropdownName: "minimumBaseSalary",
    options: minimumBaseSalaryOptions,
    placeholder: "Minimum Base Salary",
  },
];

export const CardCSSStyle = {
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "560px",
    backgroundColor: "white",
    borderBlockColor: "1px solid black",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "left",
    marginBottom: "40px",
  },
  postedText: {
    borderRadius: "20px",
    fontSize: "x-small",
    padding: "0 0 2px 10px",
    width: "35%",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  },
  applyButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "7px",
    border: "1px solid transparent",
    backgroundColor: "#82e8b8",
    fontWeight: 650,
    curson: "pointer",
  },
  referralButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "7px",
    border: "1px solid transparent",
    backgroundColor: "#4228c7",
    color: "white",
    curson: "pointer",
  },
};

export const HomePageStyles = {
  parentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
  },
  filtersContainer: {
    gap: "10px",
    display: "flex",
    flexDirection: "row",
    margin: "50px 0 50px 0",
    justifyContent: "center",
  },
  cardsContainer: {
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    width: "100%",
  },
};
