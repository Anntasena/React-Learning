import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = function (item) {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = function (id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        renderItem={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
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

//= PACKING LIST COMPONENT
//= ======================
function PackingList({ renderItem, onDeleteItems, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = renderItem;
  if (sortBy === "description")
    sortedItems = renderItem
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = renderItem
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by the description</option>
          <option value="packed">Sort by the packed status</option>
        </select>
      </div>
    </div>
  );
}

//= STATS COMPONENT
//= ===============
function Stats({ items }) {
  // Conditional Rendering
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const totalPackedPercent = Math.round((totalPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {totalPacked === totalItems
          ? "Your got everyting! Ready to go ✈️✈️"
          : `✅ You have ${totalItems} items on your list, and you
        already packed ${totalPacked} (${totalPackedPercent}%)`}
      </em>
    </footer>
  );
}

//= ITEM COMPONENT
//= ==============
function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
