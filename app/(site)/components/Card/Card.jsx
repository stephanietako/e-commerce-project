import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
// les classes semblent être ok
function Card({ imageUrl, title, subtitle, description }) {
  return (
    <figure className={styles.swiper_slide}>
      <div
        className={styles.cardPopout}
        data-swiper-parallax-opacity={0.8}
        data-swiper-parallax-duration={1000}
      >
        {/* Utilisation de Image de next/image pour l'affichage des images */}
        <Image
          src={imageUrl}
          alt="fish"
          className="hero__img"
          width={800}
          height={400}
          data-swiper-parallax={80}
          data-swiper-parallax-duration={2000}
          style={{
            display: "block",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />
        <h2
          className={styles.title}
          data-swiper-parallax={80}
          data-swiper-parallax-duration={1000}
        >
          {title}
        </h2>
        <h4
          className={styles.subtitle}
          data-swiper-parallax={80}
          data-swiper-parallax-duration={1500}
        >
          {subtitle}
        </h4>
        <figcaption
          data-swiper-parallax={80}
          data-swiper-parallax-duration={1250}
        >
          <p>{description}</p>
        </figcaption>
        <a
          href="/"
          title="Continue Reading"
          data-swiper-parallax={80}
          data-swiper-parallax-opacity={0.2}
          data-swiper-parallax-duration={1750}
        >
          Continue Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </a>
      </div>
    </figure>
  );
}

export default Card;
