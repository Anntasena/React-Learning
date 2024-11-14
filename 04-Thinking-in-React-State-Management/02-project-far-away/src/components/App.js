import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
//=========================================

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

  const handleClearItem = function () {
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
