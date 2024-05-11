"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/config/client-config";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  // console.log("IMAGE GALLERY", images);
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
        // border: "3px solid red",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div
        className="__container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          // border: "3px solid blue",
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
                display: "flex",
                objectFit: "cover",
                cursor: "none",
                padding: "1rem",
                borderRadius: "30px",
              }}
            />
          </div>
        ))}
      </div>
      <div
        className="selectBig_img_productpage"
        style={{
          border: "3px solid gray",
          borderRadius: "30px",
        }}
      >
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={350}
          height={350}
          className="__img"
          style={{
            display: "flex",
            objectFit: "cover",
            // border: "3px solid yellow",
            padding: "1rem",
            borderRadius: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
