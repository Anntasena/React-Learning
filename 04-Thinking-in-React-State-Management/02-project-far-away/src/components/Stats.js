export default function Stats({ items }) {
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
