import React from "react";
import Slider from "../Slider/Slider";
// Styles
import styles from "./styles.module.scss";

const SliderCompt = ({ products }) => {
  return (
    <div className={styles.sliderCompt}>
      <div className={styles.sliderCompt__container}>
        <h1>Découvrez nos produits</h1>
        <Slider products={products} />
      </div>
    </div>
  );
};

export default SliderCompt;
