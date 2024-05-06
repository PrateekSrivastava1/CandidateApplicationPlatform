import React, { useEffect, useState } from "react";

import { getJobOpeningsData } from "./api";
import Card from "../../components/Card";

const HomePage = () => {
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (offset) => {
    setLoading(true);
    if (offset >= totalCount) {
      return;
    }
    const data = await getJobOpeningsData(offset);
    if (data) {
      setJobData((prevJobData) => [...prevJobData, ...data.jdList]);
      setOffset((prevOffset) => prevOffset + 10);
      setTotalCount(data.totalCount);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(offset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
        fetchData(offset);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, loading]);

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
        {jobData.map((job, index) => (
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
