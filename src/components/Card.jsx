import React from "react";

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
        height: "650px",
        backgroundColor: "white",
        borderBlockColor: "1px solid black",
        borderRadius: "7px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", columnGap: "10px" }}>
        <img src={logoUrl} alt="logo" height="50px" width="50px" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{companyName}</p>
          <p>{jobRole}</p>
          <p>{location}</p>
        </div>
      </div>
      <p>
        Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode}
      </p>
      <p>About Company</p>
      <p>
        <strong>About us</strong>
      </p>
      <p style={{ textAlign: "left" }}>{jobDetailsFromCompany}</p>
      <p>Minimum Experience</p>
      <p>{minExp} years</p>

      <a href={jdLink}>
        <button>Easy Apply</button>
      </a>
      <button>Unlock referral asks</button>
    </div>
  );
};

export default Card;
