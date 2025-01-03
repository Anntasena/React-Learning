import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*
* --------------------------------------------
? --------------------------------------------
# --------------------------------------------
-> 2 peraturan membuat komponen as function
1. Nama function harus dimulai dengan huruf besar
2. function harus "return" berberapa "markup"
-> TIPS: nesting bukan berarti menulis function didalam function (jangan pernah lakukan itu direact)
*/

function App() {
  return (
    <React.Fragment className="container">
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza co.</h1>;
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* RENDERING LIST */}
      {numPizzas > 0 ? (
        <>
          <p>
            Autentic Italian menu, with six special dish and very really
            delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price}/>
              // cara diatas bukan cara yang sering digunakan
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, Please comeback later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} // mengubah dari string ke number bisa dengan masuk ke JS mode lewat tanda "{}"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// Destructuring props
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>pizzaObj.price</span>} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour < closeHour) alert("we're currently open!");
  // else alert("were close");

  // if (!isOpen) return <p>close</p>;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} - We're currently open */}
      {isOpen ? (
        <Order ch={closeHour} oh={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 - {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "were currently open");
}

// Extracting JSX into a New component
function Order({ ch, oh }) {
  return (
    <div className="order">
      <p>
        We're currently open fomr {oh}:00 until {ch}:00 Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
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
