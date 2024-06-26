import React from "react";

import Dropdown from "./Dropdown";
import { dropdownConfigs } from "../constants";

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  const handleDropdownSelect = ({ dropdownName, selectedOption }) => {
    setSelectedFilters((prevSelections) => ({
      ...prevSelections,
      [dropdownName]: selectedOption,
    }));
  };

  const handleCompanyNameChange = (event) => {
    const companyName = event.target.value;

    setSelectedFilters((prevSelections) => ({
      ...prevSelections,
      companyName: {
        value: companyName,
        label: companyName,
      },
    }));
  };

  return (
    <>
      {dropdownConfigs.map((config) => (
        <Dropdown
          key={config.dropdownName}
          dropdownName={config.dropdownName}
          options={config.options}
          onSelect={handleDropdownSelect}
          placeholder={config.placeholder}
        />
      ))}
      <input
        type="text"
        placeholder="Company name"
        value={
          selectedFilters.companyName ? selectedFilters.companyName.value : ""
        }
        onChange={handleCompanyNameChange}
        style={{
          border: "1px solid #D3D3D3",
          borderRadius: "3px",
          padding: "5px",
        }}
      />
    </>
  );
};

export default Filters;
