import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [countries, setContries] = useState([]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        fetch("https://xcountries-backend.azurewebsites.net/all")
          .then((response) => response.json())
          .then((data) => setContries(data))
          .catch((error) => console.error("Error fetching data: ", error));
      }, 100); // Delay slightly so Cypress can attach console.error spy
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="container">
      {countries.map((country, index) => (
        <div className="cardStyles" key={index}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={{ width: "100px", height: "100px" }}
          />
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
