import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 14, packed: true },
  ]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={(newItem) => setItems([...items, newItem])} />
      <PackingList renderItem={items} />
      <Stats />
    </div>
  );
}

//= LOGO COMPONENT
//= ==============
function Logo() {
  return <h1>👜 Holiday Note 🌴</h1>;
}

//= FORM COMPONENT
//= ==============
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantitiy(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What🙄 do you need🤔 for your trip🏝️?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantitiy(Number(e.target.value))}
      >
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

//= PACKING LIST COMPONENT
//= ======================
function PackingList({ renderItem }) {
  return (
    <div className="list">
      <ul>
        {renderItem.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

//= STATS COMPONENT
//= ===============
function Stats() {
  return (
    <footer className="stats">
      <em>✅ You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

//= ITEM COMPONENT
//= ==============
function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
