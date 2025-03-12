import styled from "styled-components";
import React from "react";

//= Styles ==============================
const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

//= Components ==========================
const Select = React.forwardRef(
  ({ options, value, onChange, ...props }, ref) => {
    return (
      <StyledSelect ref={ref} value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label ? option.label : option.name}
          </option>
        ))}
      </StyledSelect>
    );
  }
);

export default Select;
