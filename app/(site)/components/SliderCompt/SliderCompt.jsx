import Slider from "../Slider/Slider";
export const dynamic = "force-dynamic";
// Styles
import styles from "./styles.module.scss";

function SliderCompt() {
  return (
    <div className={styles.sliderCompt}>
      <div className={styles.sliderCompt__container}>
        <h1>Découvrez nos produits</h1>
        <Slider />
      </div>
    </div>
  );
}

export default SliderCompt;
