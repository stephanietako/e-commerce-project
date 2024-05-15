"use client";

import { useState } from "react";
import { getCategories } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.scss";

const FlipCard = ({ product }) => {
  const [isFlipped, setFlipped] = useState(false);

  const { data: categories, error } = useSWR("/categories", getCategories);

  if (error) return <p>Error: {error.message}</p>;

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <span className={styles.flipcart_container}>
        <div
          className={`${styles.flip_card} ${isFlipped ? styles.flipped : ""}`}
        >
          <div className={styles.__flip_card__inner}>
            {/* Carte recto*/}
            <div className={styles.__flip_card__front}>
              <div className={styles.__card__content}>
                <div className={styles.__flip_card__infos}>
                  <header className={styles.title__bloc}>
                    <div className={styles.title__content}>
                      <h1 className={styles.title}>
                        <span className={styles.icon}>
                          <Image
                            src={canaIcon}
                            alt="les produits de la boutiques vibes cbd"
                            className="cana_icon__img"
                            width={40}
                            height={40}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </span>
                        <p>{product.name}</p>
                      </h1>
                    </div>
                  </header>
                </div>
                <div className={styles.image}>
                  {product.coverImages ? (
                    <Image
                      src={product.coverImages}
                      alt="les produits de la boutiques vibes cbd"
                      className="product__img"
                      width={370}
                      height={270}
                      style={{
                        objectFit: "cover",
                        borderRadius: "30px",
                        padding: "1rem",
                      }}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default FlipCard;
