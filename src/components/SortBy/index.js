import React from "react";
import { Option, StyledContainer } from "./styles.css";

const SortBy = ({ sortBy, setSortBy, options }) => {
  return (
    <StyledContainer>
      <span>Sort By</span>
      <div>
        {options.map(({ value, label }) => (
          <Option
            key={value}
            selected={value === sortBy}
            onClick={() => setSortBy(value)}
          >
            {label}
          </Option>
        ))}
      </div>
    </StyledContainer>
  );
};

export default SortBy;
