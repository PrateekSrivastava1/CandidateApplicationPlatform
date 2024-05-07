import React from "react";

import { convertFirstLetterToUpperCase } from "../utils";
import { CardCSSStyle } from "../constants";

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
    <div style={CardCSSStyle.parentContainer}>
      <p style={CardCSSStyle.postedText}>Posted 10 days ago</p>
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
        <a href={jdLink} target="_blank">
          <button style={CardCSSStyle.applyButton}>Easy Apply</button>
        </a>
        <button style={CardCSSStyle.referralButton}>
          Unlock referral asks
        </button>
      </div>
    </div>
  );
};

export default Card;
