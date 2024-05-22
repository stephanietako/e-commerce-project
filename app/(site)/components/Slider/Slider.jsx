"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getCategories } from "@/sanity/lib/client";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: categories, error } = useSWR("/categories", getCategories);

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
    <div className={styles.carousel}>
      <button
        onClick={prevSlide}
        className={`${styles.carousel__btn} ${styles.carousel__btn__prev}`}
      >
        &lt;
      </button>
      {categories && categories.length > 0 && (
        <Link href={`/categories/${categories[activeIndex].slug}`}>
          <Image
            src={categories[activeIndex].coverImages}
            alt={`Slide ${activeIndex}`}
            className={styles.carousel__img}
            width={800}
            height={400}
          />
        </Link>
      )}
      <button
        onClick={nextSlide}
        className={`${styles.carousel__btn} ${styles.carousel__btn__next}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
