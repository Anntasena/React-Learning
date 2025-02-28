import styled, { css } from "styled-components";

//= Styles ==============================
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

// const variations = {
//   primary: css`
//     font-weight: 500;
//   `,
//   secondary: css`
//     font-weight: 500;
//     color: var(--color-blue-700);
//   `,
// };
// const Label = styled.label`
//   ${(props) => variations[props.variation]}
// `;

// Label.defaultProps = {
//   variation: "primary",
// };

const Label = styled.label`
  font-weight: 500;
  ${({ variation }) =>
    variation === "secondary" &&
    css`
      color: var(--color-blue-700);
    `}
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

//= Component ============================
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
