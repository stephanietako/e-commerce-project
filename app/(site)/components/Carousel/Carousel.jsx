"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
// Styles
import styles from "./styles.module.scss";

const Carousel = ({ plusproduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 1;
  const totalItems = plusproduct.length;

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
    <div className={styles.carousel_container}>
      <button className={styles.prev_button} onClick={prevSlide}>
        &#8249;
      </button>
      <div className={styles.carousel}>
        <div
          className={styles.carousel_slide}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {plusproduct.map((item, index) => (
            <div
              key={index}
              className={styles.carousel_item}
              style={{ flex: `0 0 100%` }}
            >
              <div className={styles.inner_container}>
                <div className={styles.image_container}>
                  <Link href={`/plusProducts/${item.slug}`}>
                    <Image
                      src={urlFor(item.coverImages).url()}
                      // alt={`Slide ${index}`}
                      alt="Palm trees Affair la ferme des palmiers"
                      className={styles.carousel_img}
                      width={350}
                      height={350}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg..."
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                </div>
                <div className={styles.title_content}>
                  <h3 className={styles.title}>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.next_button} onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
