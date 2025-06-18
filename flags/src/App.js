import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setContries] = useState([]);

  useEffect(() => {
    axios
      .get("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => setContries(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error.message || error);
      });
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
