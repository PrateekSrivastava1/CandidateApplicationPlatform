import React, { useEffect } from "react";
import { getJobOpeningsData } from "./api";

const HomePage = () => {
  useEffect(() => {
    getJobOpeningsData();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ backgroundColor: "red" }}>content will be here</div>
    </div>
  );
};

export default HomePage;
