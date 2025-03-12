import styled from "styled-components";
import Button from "./../../ui/Button";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";

const StyledConfirm = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmBookingAndRegister({ disabled, onCloseModal, onConfirm }) {
  return (
    <StyledConfirm>
      <Heading as="h3">Booking Confirmation Check</Heading>
      <p>
        Please confirm: Is the guest information and room booking correct?
        Please ensure the check-in, check-out, and room type details are
        accurate before proceeding.
      </p>
      <div>
        <Button
          onClick={onCloseModal}
          disabled={disabled}
          variation="secondary"
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} type="submit">
          Confirm
        </Button>
      </div>
    </StyledConfirm>
  );
}

export default ConfirmBookingAndRegister;
