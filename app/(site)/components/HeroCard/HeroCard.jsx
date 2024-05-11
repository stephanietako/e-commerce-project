import Image from "next/image";
import backgroundImg from "@/public/assets/vibes-shop1.webp";
// Styles
import styles from "./styles.module.scss";

function HeroCard({ imageUrl, title, subtitle, description }) {
  return (
    <div className={styles.herocard_container}>
      <Image
        src={backgroundImg}
        alt="palm trees"
        className={styles.__bg_img}
        fill={true}
        style={{
          borderRadius: "30px",
          objectFit: "cover",
        }}
      />
      <figure className={styles.figure}>
        <div className={styles.card}>
          <Image
            src={imageUrl}
            alt="logo vibes shop"
            className="hero__img"
            width={50}
            height={50}
            style={{
              display: "flex",
              objectFit: "cover",
            }}
          />
          <div className={styles.title_content}>
            <h1 className={styles.title}>{title}</h1>
          </div>
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
