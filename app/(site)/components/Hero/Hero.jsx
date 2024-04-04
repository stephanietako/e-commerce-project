import React from "react";

// Styles
import styles from "./styles.module.scss";
import Article from "../Article/Article";
const Hero = ({ cards }) => {
  return (
    <div className={styles.container_hero}>
      <Article cards={cards} />
    </div>
  );
};

export default Hero;
