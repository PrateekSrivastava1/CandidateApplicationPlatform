import React, { useEffect } from "react";

import { getJobOpeningsData } from "./api";
import Card from "../../components/Card";

const HomePage = () => {
  useEffect(() => {
    getJobOpeningsData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "50px",
        width: "100%",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "80%",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
