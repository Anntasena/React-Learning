import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "syahrin";

  return (
    <>
      <h1>Hello react !!!</h1>
      <h2>{x}</h2>
    </>
  );
}

// Render root react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> = USE STRICT MODE IN REACT
  // Sebenarnya strict mode bukanlah masalah besar, karna satu2nya hal yang dilakukan selama pengembangan adalah ia merender semua komponen 2x untuk menemukan bug
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reander root react berfore v18
// import ReactDOM from "react-dom";
// root.render(<App />);
