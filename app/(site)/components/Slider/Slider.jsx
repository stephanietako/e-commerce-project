"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./styles.module.scss";

const Slider = ({ allproducts }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //   console.log("handleMouseEnter !!!!!!!", handleMouseEnter());
  //   console.log("handleMouseLeave !!!!!!!", handleMouseLeave());
  //console.log("isHovered !!!!!:", isHovered);
  return (
    <div className={styles.sliderShow__container}>
      <div
        className={styles.carousel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.carousel__track}>
          {allproducts.map((product, index) => (
            <div key={product._id} className={styles.carousel__bloc__img}>
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.coverImages}
                  alt={`Slide ${index}`}
                  className={styles.carousel__img}
                  width={350}
                  height={350}
                  loading="lazy"
                  placeholder="blur"
                  quality={80}
                  blurDataURL="data:image/jpeg..."
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <div className={styles.title__content}>
                <h1 className={styles.title}>
                  <p>{product.name}</p>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
