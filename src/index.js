import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Quantam Pizzeria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numberOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Quantastic Menu</h2>
      {numberOfPizzas > 0 ? (
        <>
          <p>
            The most amazing Taliano pizza in the world! It's one of a kind and
            can't be found anywhere else! All fresh ingredients, all new style
            of baking and a superb selection of seriously impactful pizzas.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    // Conditionally setting 'sold-out' css class onto elements when it's needed.
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closedHour={closedHour} />
      ) : (
        <p>We're currently closed. Please come back at {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ openHour, closedHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closedHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
