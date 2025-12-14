import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Personal Profile Card</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>

      <div className="card">
        <h2>{name || "Your Name"}</h2>
        <p>Age: {age || "--"}</p>
        <p>City: {city || "Your City"}</p>
      </div>
    </div>
  );
}

export default App;
