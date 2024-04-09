"use client";

import Image from "next/image";
import AnimeCartFilter from "../AnimeCartFilter/AnimeCartFilter";
import styles from "./styles.module.scss";

function HeroCard({ imageUrl, title, subtitle, description }) {
  return (
    <div className={styles.herocard_container}>
      <div className={styles.herocard_bloc}>
        <div className={styles.herocard_bloc_text}>
          <h1>VIBES CBD SAINT-TROPEZ</h1>
          <p>
            Jellyfish are fascinating marine creatures known for their graceful
            and mesmerizing movements in the water. Belonging to the phylum
            Cnidaria, these gelatinous animals come in various shapes, sizes,
            and colors. One distinctive feature of jellyfish is their
            umbrella-shaped bell, which pulsates to propel them through the
            ocean.
          </p>
        </div>
        <div className={styles.__bloc_animecart}>
          {" "}
          <AnimeCartFilter />
        </div>
      </div>

      <figure className={styles.figure}>
        <div className={styles.card}>
          <Image
            src={imageUrl}
            alt="fish"
            className="hero__img"
            width={300}
            height={300}
            style={{
              display: "block",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <figcaption>
            <p>{description}</p>
          </figcaption>
          <a href="/" title="Continue Reading">
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
    </div>
  );
}

export default HeroCard;
