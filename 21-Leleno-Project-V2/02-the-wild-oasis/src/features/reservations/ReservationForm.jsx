import styled from "styled-components";
import { useState, useEffect } from "react";
import { HiMiniHomeModern, HiMiniUser } from "react-icons/hi2";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import Select from "../../ui/Select";

import { useCabins } from "../cabins/useCabins";

import Checkbox from "../../ui/Checkbox";
import Textarea from "../../ui/Textarea";

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

//= Components ==========================
function ReservationForm() {
  const { cabins, isLoading } = useCabins();
  const [date, setDate] = useState("");
  const [selectedCabinId, setSelectedCabinId] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (cabins && cabins.length > 0) {
      setSelectedCabinId(cabins[0].id);
    }
  }, [cabins]);

  if (!cabins || cabins.length === 0) return <Spinner />;

  const selectedCabin = cabins.find(
    (cabin) => cabin.id === Number(selectedCabinId)
  );

  if (isLoading || !selectedCabin) return <Spinner />;

  const handleSelectChange = (e) => {
    setSelectedCabinId(Number(e.target.value));
  };

  return (
    <Form>
      <TitleForm>
        <HiMiniUser />
        <p as="h2">Guest register</p>
      </TitleForm>

      <FormRow label="Full name">
        <Input type="text" id="fullName" />
      </FormRow>

      <FormRow label="Email">
        <Input type="email" id="email" />
      </FormRow>

      <FormRow label="National ID">
        <Input type="text" id="nationalID" />
      </FormRow>

      <FormRow label="Nationality">
        <Input type="text" id="nationality" />
      </FormRow>

      <TitleForm>
        <HiMiniHomeModern />
        <p as="h2">Cabin reservation</p>
      </TitleForm>

      <FormRow label="Cabin room">
        <Select
          value={selectedCabinId}
          onChange={handleSelectChange}
          options={cabins.map((cabin) => ({
            value: cabin.id,
            label: cabin.name,
          }))}
        />
      </FormRow>

      <FormRow
        label={`Persons (${selectedCabin.maxCapacity || ""} person capacity )`}
      >
        {selectedCabin && <Input />}
      </FormRow>

      <FormRow label="Check-in dates">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
        />
      </FormRow>

      <FormRow label="Check-out dates">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
        />
      </FormRow>

      <FormRow label="Breakfast">
        <Checkbox>
          <P>Check if guest want breakfast</P>
        </Checkbox>
      </FormRow>

      <FormRow label="Guest notes">
        <Textarea />
      </FormRow>
    </Form>
  );
}

export default ReservationForm;
