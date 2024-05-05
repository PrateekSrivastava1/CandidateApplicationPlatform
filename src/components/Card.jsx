import React from "react";

import { convertFirstLetterToUpperCase } from "../utils";

const cardCSSStyle = {
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

const Card = ({
  jdLink,
  jobDetailsFromCompany,
  logoUrl,
  companyName,
  jobRole,
  location,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  minExp,
}) => {
  return (
    <div
      style={{
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
      }}
    >
      <p
        style={{
          borderRadius: "20px",
          fontSize: "x-small",
          padding: "0 0 2px 10px",
          width: "35%",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        Posted 10 days ago
      </p>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "15px" }}>
        <img
          src={logoUrl}
          alt="logo"
          height="50px"
          width="50px"
          style={{ marginTop: "10px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "0",
          }}
        >
          <p style={{ color: "#c2bebe", fontWeight: 700 }}>
            {convertFirstLetterToUpperCase(companyName)}
          </p>
          <p>{convertFirstLetterToUpperCase(jobRole)}</p>
          <p
            style={{
              fontSize: "x-small",
            }}
          >
            {convertFirstLetterToUpperCase(location)}
          </p>
        </div>
      </div>
      <p>
        <span style={{ color: "#636363", fontWeight: 700 }}>
          Estimated Salary:
        </span>{" "}
        {minJdSalary} - {maxJdSalary} &nbsp; {salaryCurrencyCode}
      </p>
      <div
        style={{
          lineHeight: "1",
        }}
      >
        <p style={{ fontSize: "17px" }}>About Company:</p>
        <p>
          <strong>About us</strong>
        </p>
        <p style={{ textAlign: "left" }}>
          {jobDetailsFromCompany.slice(0, 300)}
        </p>
        <p style={{ color: "#636363", fontWeight: 700 }}>Minimum Experience</p>
        <p>{minExp} years</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href={jdLink}>
          <button style={cardCSSStyle.applyButton}>Easy Apply</button>
        </a>
        <button style={cardCSSStyle.referralButton}>
          Unlock referral asks
        </button>
      </div>
    </div>
  );
};

export default Card;
