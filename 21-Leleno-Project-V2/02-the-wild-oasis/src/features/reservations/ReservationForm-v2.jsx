import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";
import { HiMiniHomeModern, HiMiniUser } from "react-icons/hi2";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
      isPaid: false,
    },
  });

  if (!cabins || cabins.length === 0) return <p>No cabins available.</p>;
  if (isLoading || isLoadingSettings) return <Spinner />;

  const formData = watch();
  const selectedCabin = cabins.find(
    (cabin) => cabin.id === Number(formData.cabinId) || null
  );

  console.log(selectedCabin);

  if (!selectedCabin) return <Spinner />;

  const today = new Date().toISOString().split("T")[0];

  const numNights =
    formData.startDate && formData.endDate
      ? Math.ceil(
          (new Date(formData.endDate) - new Date(formData.startDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const extrasPrice = formData.hasBreakfast
    ? formData.numGuests * settings.breakfastPrice * numNights
    : 0;
  const totalPrice = selectedCabin.regularPrice * numNights + extrasPrice;

  const onSubmit = async (data) => {
    try {
      const guest = await createGuest({
        fullName: data.fullName,
        email: data.email,
        nationalID: data.nationalID,
        nationality: data.nationality,
      });

      await createBooking({
        guestId: guest.id,
        cabinId: data.cabinId,
        startDate: data.startDate,
        endDate: data.endDate,
        numNights,
        numGuests: data.numGuests,
        status: "unconfirmed",
        hasBreakfast: data.hasBreakfast,
        observations: data.observations,
        cabinPrice: selectedCabin.regularPrice,
        extrasPrice,
        totalPrice,
        isPaid: data.isPaid,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to create booking.");
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
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </FormRow>

      {/* //= EMAIL */}
      <FormRow label="Email">
        <Input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </FormRow>

      {/* //= NATIONAL ID */}
      <FormRow label="National ID">
        <Input
          type="text"
          {...register("nationalID", { required: "National ID is required" })}
        />
        {errors.nationalID && <p>{errors.nationalID.message}</p>}
      </FormRow>

      {/* //= NATIONALITY */}
      <FormRow label="Nationality">
        <Input
          type="text"
          {...register("nationality", { required: "Nationality is required" })}
        />
        {errors.nationality && <p>{errors.nationality.message}</p>}
      </FormRow>

      <TitleForm>
        <HiMiniHomeModern />
        <p as="h2">Cabin reservation</p>
      </TitleForm>

      {/* //= CABIN ROOM */}
      <FormRow label="Cabin room">
        <Select
          {...register("cabinId", { required: "Cabin selection is required" })}
          options={cabins.map(({ id, name }) => ({ value: id, label: name }))}
        />
        {errors.cabinId && <p>{errors.cabinId.message}</p>}
      </FormRow>

      {/* //= NUM GUEST */}
      <FormRow
        label={`Persons (${selectedCabin.maxCapacity} max person capacity)`}
      >
        <Input
          type="number"
          {...register("numGuests", {
            required: "Number of guest is required",
            min: 1,
            max: selectedCabin.maxCapacity,
          })}
        />
        {errors.numGuests && <p>{errors.numGuests.message}</p>}
      </FormRow>

      {/* //= CHECKIN DATES */}
      <FormRow label="Check-in dates">
        <Input
          type="date"
          {...register("startDate", {
            required: "Check-in date is required",
            min: today,
          })}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
      </FormRow>

      {/* //= CHECKOUT DATES */}
      <FormRow label="Check-out dates">
        <Input
          type="date"
          {...register("endDate", {
            required: "Check-out date is required",
            min: formData.startDate || today,
          })}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
      </FormRow>

      {/* //= BREAKFAST */}
      <FormRow label="Breakfast">
        <Checkbox {...register("hasBreakfast")}>
          <P>Check if guest wants breakfast</P>
        </Checkbox>
      </FormRow>

      {/* //= OBSERVATION */}
      <FormRow label="Guest notes">
        <Textarea {...register("observations")} />
      </FormRow>

      {/* //= BUTTON MODAL */}
      <Div>
        <Modal>
          <Modal.Open opens="booking-register">
            <Button type="submit" disabled={isCreateBooking}>
              Booking & Register
            </Button>
          </Modal.Open>

          <Modal.Window name="booking-register">
            <ConfirmBookingAndRegister
              onConfirm={handleSubmit(onSubmit)}
              disabled={isCreateBooking}
            />
          </Modal.Window>
        </Modal>
      </Div>
    </Form>
  );
}

export default ReservationForm;
