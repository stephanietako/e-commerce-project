"use client";

import { useState } from "react";
import Image from "next/image";
import backgroundImg from "@/public/assets/notorious.webp";
import styles from "./styles.module.scss";

const HeaderImg = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`${styles.container} ${imageLoaded ? styles.loaded : ""}`}>
      <Image
        src={backgroundImg}
        alt="biggie small"
        className={styles.bg_img}
        fill={true}
        onLoad={() => setImageLoaded(true)}
        style={{
          objectFit: "cover",
        }}
      />
      <div className={styles.overlay} />
    </div>
  );
};

export default HeaderImg;
