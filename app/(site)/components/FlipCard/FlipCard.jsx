"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
// Styles
import styles from "./styles.module.css";

const FlipCard = ({ product }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={styles.app}>
      <div className={`${styles.flip_card} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
            <div className={styles.card_content}>
              {/* Afficher les données du produit */}
              <p>NAME:{product.name}</p>
              <span>
                <PortableText value={product.content} />
              </span>
              <div
                className="images"
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                {product.coverImages ? (
                  <Image
                    src={product.coverImages}
                    alt="les fleurs"
                    className="product__img"
                    width={170}
                    height={170}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>
            <button className={styles.flip_button} onClick={handleFlip}>
              Flip
            </button>
          </div>
          {/* Carte verso */}
          <div className={styles.flip_card_back}>
            <div className={styles.flip_card_back_fetch}>
              {/* Afficher les données supplémentaires du produit */}
              <p>{product.additionalInfo}</p>
            </div>
            <div className={styles.card_content}>
              {/* Afficher les données du produit */}
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <button className={styles.flip_button} onClick={handleFlip}>
              Flip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
