"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getCategories } from "@/sanity/lib/client";
import styles from "./styles.module.scss";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: categories, error } = useSWR("/categories", getCategories);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [categories]);

  if (error) return <p>Error: {error.message}</p>;
  if (!categories) return <p>Loading...</p>;

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderShow__container}>
      <div className={styles.carousel}>
        <button
          onClick={prevSlide}
          className={`${styles.carousel__btn} ${styles.carousel__btn__prev}`}
        >
          &lt;
        </button>
        <div className={styles.carousel__bloc__img}>
          <Link href={`/categories/${categories[activeIndex].slug}`}>
            <Image
              src={categories[activeIndex].coverImages}
              alt={`Slide ${activeIndex}`}
              className={styles.carousel__img}
              width={450}
              height={550}
              //   quality={75}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg..."
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className={styles.title__content}>
          <h1 className={styles.title}>
            <p>{categories[activeIndex].name}</p>
          </h1>
        </div>
        <button
          onClick={nextSlide}
          className={`${styles.carousel__btn} ${styles.carousel__btn__next}`}
        >
          &gt;
        </button>
      </div>
      <div className={styles.title__content}>
        <h1 className={styles.title}>
          <p>{categories[activeIndex].name}</p>
        </h1>
      </div>
    </div>
  );
};

export default Slider;
