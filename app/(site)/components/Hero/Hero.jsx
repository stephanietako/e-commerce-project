import Image from "next/image";
import backgroundImg from "@/public/assets/canaleafimg.jpg";
import Button from "../Button/Button";
// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <Image
        src={backgroundImg}
        alt="boutique Vibes Saint-tropez"
        className={styles.heroImage}
        priority
        fill={true}
        placeholder="blur"
      />
      <div className={styles.heroContent}>
        <h1>VIBES CBD SHOP</h1>
        <h2>FRENCH EXPERT CANNABIS</h2>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
