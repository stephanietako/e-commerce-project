import React from "react";
import Image from "next/image";
import backgroundImg from "@/public/assets/canaleafimg.jpg";
// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          <h1>VIBES CBD SHOP</h1>
          <h2>FRENCH EXPERT CANNABIS</h2>
        </div>

        <Image
          src={backgroundImg}
          alt="boutique Vibes Saint-tropez"
          className={styles.bg_img}
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
