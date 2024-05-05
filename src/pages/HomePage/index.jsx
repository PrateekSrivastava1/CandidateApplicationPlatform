import React, { useEffect, useState } from "react";

import { getJobOpeningsData } from "./api";
import Card from "../../components/Card";

const HomePage = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJobOpeningsData();
      if (data) setJobData(data.jdList);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "50px",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {jobData &&
          jobData.map((job, index) => (
            <Card
              key={index}
              jdLink={job.jdLink}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              logoUrl={job.logoUrl}
              companyName={job.companyName}
              jobRole={job.jobRole}
              location={job.location}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
              salaryCurrencyCode={job.salaryCurrencyCode}
              minExp={job.minJdSalary}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
