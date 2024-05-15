"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/config/client-config";

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
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePosition({ x, y });
  };

  return (
    <div className="imagegallery_container">
      {/* <div className="__container">
        {images.map((image, index) => (
          <div key={index} onClick={() => handleSmallImageClick(image)}>
            <Image
              src={urlFor(image).url()}
              alt="Thumbnail"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div> */}
      <div
        className="selectBig_img_productpage"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          borderRadius: "30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={800}
          height={550}
          className="__img"
          style={{
            objectFit: "cover",
            padding: "1rem",
            borderRadius: "30px",
          }}
        />
        {showLoupe && (
          <div
            className="loupe"
            style={{
              position: "absolute",
              top: mousePosition.y - 100, // ajustement pour centrer la loupe sur le curseur
              left: mousePosition.x - 100, // ajustement pour centrer la loupe sur le curseur
              width: "350px", // largeur et hauteur augmentées
              height: "350px", // largeur et hauteur augmentées
              border: "1px solid black",
              borderRadius: "50%",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            <Image
              src={urlFor(bigImage).url()}
              alt="Zoom"
              width={750}
              height={550}
              style={{
                position: "absolute",
                top: -mousePosition.y * 2 + 100,
                left: -mousePosition.x * 2 + 100,
                transform: "scale(2)",
                transformOrigin: "top left",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
