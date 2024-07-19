// Banner.jsx
import React from "react";
import Image from "next/image";
import delivery from "@/public/assets/delivery.png";
import payment from "@/public/assets/payment.png";
import quality from "@/public/assets/palmtrees_leaf.png";
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
        <p>Paiement sécurisé</p>
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
        <p>Palmiers de qualité supérieure</p>
      </div>
    </div>
  );
};

export default Banner;
