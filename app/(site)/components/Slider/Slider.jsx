"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getCategories } from "@/sanity/lib/client";
import styles from "./styles.module.scss";

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { data: categories, error } = useSWR("/categories", getCategories);

  useEffect(() => {
    if (categories && categories.length === 0) {
      // Only on initial render or category changes
      const totalWidth = categories.length * 450;

      //Si le défilement complet n'est pas atteint, met à jour la position de défilement
      if (scrollPosition <= totalWidth) {
        const scrollSpeed = 10; // Vitesse de défilement
        //Mise à jour de la position de défilement
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollSpeed;
          // Si la nouvelle position dépasse ou atteint la largeur totale, revient à zéro pour un défilement infini
          return newPosition >= totalWidth ? 0 : newPosition;
        });
      }
    }
  }, [categories]);

  if (error) return <p>Error: {error.message}</p>;
  if (!categories) return <p>Loading...</p>;

  return (
    <div className={styles.sliderShow__container}>
      <div className={styles.carousel}>
        <div
          className={styles.carousel__track}
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {categories.map((category, index) => (
            <div key={index} className={styles.carousel__bloc__img}>
              <Link href={`/categories/${category.slug}`}>
                <Image
                  src={category.coverImages}
                  alt={`Slide ${index}`}
                  className={styles.carousel__img}
                  width={450}
                  height={450}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg..."
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <div className={styles.title__content}>
                <h1 className={styles.title}>
                  <p>{category.name}</p>
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
