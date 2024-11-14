import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);
    onAddItems(newItem);
    setDescription(""); // reset
    setQuantitiy(1); // reset
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What🙄 do you need🤔 for your trip🏝️?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantitiy(Number(e.target.value))}
      >
        {/* MAKING OPTION  WITH LOOPING */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
