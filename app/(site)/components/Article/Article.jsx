"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import Card from "../Card/Card";
import "swiper/swiper-bundle.css"; // Importez le fichier CSS Swiper bundle

import vibesImage from "@/public/assets/vibes.png";
import styles from "./styles.module.scss";

function Article() {
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log("useEffect triggered !!!!!!!!!!!!");
    register(); // Enregistrement du Swiper
  }, []);

  const cards = [
    {
      imageUrl: vibesImage,
      title: "essai",
      subtitle: "Not Made of Jelly",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
    {
      imageUrl: vibesImage,
      title: "essai",
      subtitle: "Not Made of Jelly",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
    {
      imageUrl: vibesImage,
      title: "essai",
      subtitle: "Not Made of Jelly",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
  ];

  return (
    <article>
      <section className={styles.sectionWrapper}>
        <Swiper
          className={styles.swiper}
          {...{
            direction: "horizontal",
            loop: false,
            speed: 1500,
            slidesPerView: 4,
            spaceBetween: 60,
            mousewheel: true,
            parallax: true,
            centeredSlides: true,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 40,
              slideShadows: true,
            },
            autoplay: {
              delay: 2000,
              pauseOnMouseEnter: true,
            },
            scrollbar: {
              el: ".swiper_scrollbar",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 60,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              2300: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              2900: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            },
          }}
          ref={swiperRef}
        >
          <div
            className={styles.parallax_bg}
            data-swiper-parallax="600"
            data-swiper-parallax-scale="0.85"
          ></div>
          <div className="swiper_wrapper">
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </div>
          <div className={styles.swiper_scrollbar}></div>
        </Swiper>
      </section>
    </article>
  );
}

export default Article;
