// Banner.jsx
import React from "react";
import Image from "next/image";
import delivery from "@/public/assets/delivery.png";
import payment from "@/public/assets/payment.png";
import quality from "@/public/assets/quality.png";
// Styles
import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Première icône */}
      <div className={styles.iconWrapper}>
        <Image
          src={delivery}
          alt="biggie small"
          className="icon"
          width={50}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <p>Livraison rapide</p>
      </div>
      {/* Deuxième icône */}
      <div className={styles.iconWrapper}>
        <Image
          src={payment}
          alt="payment"
          className="icon"
          width={50}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <p>Paiement sécurisé et en toute discrétion</p>
      </div>
      {/* Troisième icône */}
      <div className={styles.iconWrapper}>
        <Image
          src={quality}
          alt="quality"
          className="icon"
          width={50}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <p>CBD de qualité supérieure</p>
      </div>
    </div>
  );
};

export default Banner;
