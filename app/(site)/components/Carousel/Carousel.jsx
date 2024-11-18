"use client";

import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
import styles from "./styles.module.scss";

const Carousel = ({ items, renderItem, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  const itemsToShow = 1;
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel_wrapper}>
      {title && <h2 className={styles.carousel_title}>{title}</h2>}
      <div className={styles.carousel_container}>
        <button className={styles.prev_button} onClick={prevSlide}>
          &#8249;
        </button>
        <div className={styles.carousel}>
          <div
            className={styles.carousel_slide}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={styles.carousel_item}
                style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
              >
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        </div>
        <button className={styles.next_button} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
