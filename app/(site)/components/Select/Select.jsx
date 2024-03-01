"use client";
import { useState } from "react";

// Styles
// import styles from "./styles.module.css";

function Select() {
  const [value, setValue] = useState("HTML");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h4 style={{ color: "blue" }}>Select</h4>
      <h3>Exemple for React onChange Event Handler</h3>
      <select value={value} onChange={handleChange}>
        <option value={"HTML"}>HTML</option>
        <option value={"CSS"}>CSS</option>
        <option value={"JavaScript"}>JavaScript</option>
      </select>
      <br />
      <div>User Input:- {value}</div>
    </div>
  );
}

export default Select;
