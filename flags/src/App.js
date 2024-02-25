import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [countries, setContries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setContries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <div className="cardStyles">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={{ width: "100px", height: "100px" }}
          />
          <h3>{country.name.common}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
