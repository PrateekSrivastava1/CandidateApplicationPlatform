import React from "react";
import Select from "react-select";

export default ({ options, onSelect, dropdownName, placeholder }) => {
  const handleChange = (selectedOption) => {
    if (onSelect) {
      onSelect({ dropdownName, selectedOption });
    }
  };

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
        name="color"
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </>
  );
};
