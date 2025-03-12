import styled from "styled-components";
import { forwardRef } from "react";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

// Menggunakan forwardRef agar bisa menerima ref dari register()
const Checkbox = forwardRef(
  (
    { name, checked, onChange, disabled = false, id, children, ...props },
    ref
  ) => {
    return (
      <StyledCheckbox>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref} // Menambahkan ref agar bisa bekerja dengan React Hook Form
          {...props}
        />
        <label htmlFor={!disabled ? id : ""}>{children}</label>
      </StyledCheckbox>
    );
  }
);

// Menambahkan display name agar mudah didiagnosis di DevTools
Checkbox.displayName = "Checkbox";

export default Checkbox;
