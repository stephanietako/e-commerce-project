"use client";

// Importation des styles
import styles from "./styles.module.css";

const Radiobtn = ({ label, value, isSelected, onRadioChange }) => {
  const handleRadioChange = () => {
    onRadioChange(value);
  };

  return (
    <div>
      <h4>Custom Radio Buttons</h4>
      <label className={styles.container}>
        {label}
        <input
          name="radio"
          type="radio"
          checked={isSelected}
          onChange={handleRadioChange}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default Radiobtn;
