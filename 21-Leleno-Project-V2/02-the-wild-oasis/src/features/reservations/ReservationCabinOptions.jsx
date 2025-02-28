import { useState } from "react";
import styled from "styled-components";
import Select from "../../ui/Select";

// const Select = styled.select`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-50);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

const Img = styled.img`
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

function ReservationCabinOptions({ cabins, isLoading }) {
  const [selectedCabinId, setSelectedCabinId] = useState(cabins[0]?.id || "");

  const selectedCabin = cabins.find(
    (cabin) => cabin.id === Number(selectedCabinId)
  );

  const handleSelectChange = (e) => {
    setSelectedCabinId(e.target.value);
    console.log("ganti", e.target.value);
  };

  if (isLoading) return null;

  return (
    <>
      <Select value={selectedCabinId} onChange={handleSelectChange}>
        {cabins.map((cabin) => (
          <option value={cabin.id} key={cabin.id}>
            {cabin.name}
          </option>
        ))}
      </Select>

      {selectedCabin && (
        <Img src={selectedCabin.image} alt={selectedCabin.name} />
      )}
    </>
  );
}

export default ReservationCabinOptions;
