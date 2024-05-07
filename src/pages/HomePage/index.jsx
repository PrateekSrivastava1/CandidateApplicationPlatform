import React, { useEffect, useState } from "react";

import Card from "../../components/Card";

import { getJobOpeningsData } from "./api";
import Filters from "../../components/Filters";
import { getFilteredData } from "../../utils";
import { HomePageStyles } from "../../constants";

const HomePage = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});

  const fetchData = async (offset) => {
    setLoading(true);
    if (totalCount != 0 && offset >= totalCount) {
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

  useEffect(() => {
    setFilteredData(getFilteredData(jobData, selectedFilters));
  }, [selectedFilters, jobData]);

  return (
    <div style={HomePageStyles.parentContainer}>
      <div style={HomePageStyles.filtersContainer}>
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>

      <div style={HomePageStyles.cardsContainer}>
        {filteredData.map((job, index) => (
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
            minExp={job.minExp}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
