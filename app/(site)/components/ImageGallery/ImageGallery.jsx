"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/config/client-config";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  console.log("IMAGE GALLERY", images);
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };
  return (
    <div
      className="imagegallery_container"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        border: "3px solid red",
        alignItems: "center",
      }}
    >
      {/*  5 colonnes */}
      <div
        className="__container"
        style={{
          display: "flex",
          width: "25%",
          height: "auto",
          border: "3px solid blue",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="__images">
            <Image
              src={urlFor(image).url()}
              alt="les fleurs"
              className="gallery__img"
              width={200}
              height={200}
              onClick={() => handleSmallImageClick(image)}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>
      <div className="main_img_productpage">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={300}
          height={300}
          className="__img"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
