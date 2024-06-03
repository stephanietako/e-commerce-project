"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const CarouselBeLike = ({ accessoires }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 2;
  const totalItems = accessoires.length;

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
    <div className={styles.carouselBeLike_container}>
      <button className={styles.prev_button} onClick={prevSlide}>
        &#8249;
      </button>

      <div className={styles.carouselBeLike}>
        <div
          className={styles.carouselBeLike_slide}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`, // Réglage pour afficher trois images par ligne
          }}
        >
          {accessoires.map((item, index) => (
            <div
              key={index}
              className={styles.carouselBeLike_item}
              style={{ flex: `0 0 calc(100% / ${itemsToShow})` }} // Réglage pour afficher trois images par ligne
            >
              <div className={styles.inner_container}>
                <div className={styles.image_container}>
                  <Link href={`/plus/${item.slug}`}>
                    <Image
                      src={urlFor(item.coverImages).url()}
                      alt={`Slide ${index}`}
                      className={styles.carouselBeLike_img}
                      width={250}
                      height={220}
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

export default CarouselBeLike;
