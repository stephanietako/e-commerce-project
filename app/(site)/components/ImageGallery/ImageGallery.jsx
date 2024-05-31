"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
// Styles
import styles from "./styles.module.scss";

const ImageGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const [showLoupe, setShowLoupe] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };

  const handleMouseEnter = () => {
    setShowLoupe(true);
  };

  const handleMouseLeave = () => {
    setShowLoupe(false);
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePosition({ x, y });
  };

  return (
    <div className={styles.imageGallery__container}>
      <div
        className={styles.select_big_img}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={urlFor(bigImage).url()}
          alt="Produits CBD"
          width={350}
          height={250}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg..."
          className={styles.img}
        />
        {showLoupe && (
          <div
            className={styles.loupe}
            style={{
              top: mousePosition.y - 100,
              left: mousePosition.x - 100,
            }}
          >
            <Image
              src={urlFor(bigImage).url()}
              alt="Zoom"
              width={400}
              height={280}
              className={styles.zoomedImage}
              style={{
                top: -mousePosition.y * 2 + 100,
                left: -mousePosition.x * 2 + 100,
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleSmallImageClick(image)}>
            <Image
              src={urlFor(image).url()}
              alt={`Thumbnail ${index + 1}`}
              width={90}
              height={90}
              className={styles.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
