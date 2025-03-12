import styled from "styled-components";
import { useState, useEffect } from "react";
import { HiMiniHomeModern, HiMiniUser } from "react-icons/hi2";
import toast from "react-hot-toast";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import Textarea from "../../ui/Textarea";

import ConfirmBookingAndRegister from "./ConfirmBookingAndRegister";

import { useCabins } from "../cabins/useCabins";
import { useCreateBooking } from "../bookings/useCreateBooking";
import { createGuest } from "../../services/apiGuest";
import { useSettings } from "../settings/useSettings";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";

//= Styles ==============================
const TitleForm = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: var(--color-indigo-700);
  font-size: 2rem;
  font-weight: 500;
  padding: 2.5rem 0rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-indigo-700);
    transition: all 0.3s;
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  color: var(--color-blue-700);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 4rem 4em 3rem 4rem;
`;

//= Components ==========================
function ReservationForm() {
  const { cabins, isLoading } = useCabins();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { createBooking, isCreateBooking } = useCreateBooking();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationalID: "",
    nationality: "",
    cabinId: "",
    numGuests: 1,
    startDate: "",
    endDate: "",
    hasBreakfast: false,
    observations: "",
    cabinPrice: 0,
    extrasPrice: 0,
    totalPrice: 0,
    isPaid: false,
  });

  // console.log(formData.fullName);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (cabins && cabins.length > 0) {
      setFormData((prev) => ({
        ...prev,
        cabinId: cabins[0].id,
        cabinPrice: cabins[0].regularPrice,
      }));
    }
  }, [cabins]);
  if (!cabins || cabins.length === 0) return <Spinner />;

  const selectedCabin = cabins.find(
    (cabin) => cabin.id === Number(formData.cabinId)
  );
  if (isLoading || !selectedCabin) return <Spinner />;

  if (isLoadingSettings) return <Spinner />;
  const breakfastPrice = settings.breakfastPrice;

  const numNights =
    formData.startDate && formData.endDate
      ? Math.ceil(
          (new Date(formData.endDate) - new Date(formData.startDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const extrasPrice = formData.hasBreakfast
    ? formData.numGuests * breakfastPrice * numNights
    : 0;

  const totalPrice = selectedCabin.regularPrice * numNights + extrasPrice;

  //+ HANDLER
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormComplete = () => {
    return Object.values(formData).every(
      (value) => value !== "" && value !== null
    );
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const guest = await createGuest({
        fullName: formData.fullName,
        email: formData.email,
        nationalID: formData.nationalID,
        nationality: formData.nationality,
      });

      await createBooking({
        guestId: guest.id,
        cabinId: formData.cabinId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        numNights,
        numGuests: formData.numGuests,
        status: "unconfirmed",
        hasBreakfast: formData.hasBreakfast,
        observations: formData.observations,
        cabinPrice: selectedCabin.regularPrice,
        extrasPrice,
        totalPrice,
        isPaid: formData.isPaid,
      });

      setFormData({
        fullName: "",
        email: "",
        nationalID: "",
        nationality: "",
        cabinId: cabins[0].id,
        numGuests: 1,
        startDate: "",
        endDate: "",
        hasBreakfast: false,
        observations: "",
        cabinPrice: cabins[0].regularPrice,
        extrasPrice: 0,
        totalPrice: 0,
        isPaid: false,
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Failed to create booking");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleForm>
        <HiMiniUser />
        <p as="h2">Guest register</p>
      </TitleForm>

      {/* //= FULL NAME */}
      <FormRow label="Full name">
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </FormRow>

      {/* //= EMAIL */}
      <FormRow label="Email">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormRow>

      {/* //= NATIONAL ID */}
      <FormRow label="National ID">
        <Input
          type="text"
          name="nationalID"
          value={formData.nationalID}
          onChange={handleChange}
          required
        />
      </FormRow>

      {/* //= NATIONALITY */}
      <FormRow label="Nationality">
        <Input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </FormRow>

      <TitleForm>
        <HiMiniHomeModern />
        <p as="h2">Cabin reservation</p>
      </TitleForm>

      {/* //= CABIN ROOM */}
      <FormRow label="Cabin room">
        <Select
          name="cabinId"
          value={formData.cabinId}
          onChange={handleChange}
          options={cabins.map((cabin) => ({
            value: cabin.id,
            label: cabin.name,
          }))}
        />
      </FormRow>

      {/* //= NUM GUEST */}
      <FormRow label={`Persons (${selectedCabin.maxCapacity} person capacity)`}>
        <Input
          type="number"
          name="numGuests"
          value={formData.numGuests}
          onChange={handleChange}
          min="1"
          max={selectedCabin.maxCapacity}
          required
        />
      </FormRow>

      {/* //= CHECKIN DATES */}
      <FormRow label="Check-in dates">
        <Input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          min={today}
          required
        />
      </FormRow>

      {/* //= CHECKOUT DATES */}
      <FormRow label="Check-out dates">
        <Input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          min={formData.startDate || today}
          required
        />
      </FormRow>

      {/* //= BREAKFAST */}
      <FormRow label="Breakfast">
        <Checkbox
          name="hasBreakfast"
          checked={formData.hasBreakfast}
          onChange={handleChange}
        >
          <P>Check if guest wants breakfast</P>
        </Checkbox>
      </FormRow>

      {/* //= OBSERVATION */}
      <FormRow label="Guest notes">
        <Textarea
          name="observations"
          value={formData.observations}
          onChange={handleChange}
        />
      </FormRow>

      {/* //= BUTTON MODAL */}
      <Div>
        <Modal>
          <Modal.Open opens="booking-register">
            <Button
              type="button"
              onClick={() => {
                if (!isFormComplete()) {
                  toast.error(
                    "Plese fill in all required field before proceding."
                  );
                  return;
                }
              }}
            >
              Booking & Register
            </Button>
          </Modal.Open>

          <Modal.Window name="booking-register">
            <ConfirmBookingAndRegister
              onConfirm={() => {
                handleSubmit();
                navigate("/dashboard");
              }}
              disabled={isCreateBooking}
            />
          </Modal.Window>
        </Modal>
      </Div>
    </Form>
  );
}

export default ReservationForm;
