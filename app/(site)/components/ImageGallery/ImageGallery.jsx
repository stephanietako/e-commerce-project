"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/config/client-config";
const ImageGallery = ({ images }) => {
  console.log("IMAGE GALLERY", images);

  return (
    <div className="imagegallery_container">
      {/*  5 colonnes */}
      <div className="__container">
        {images.map((image, index) => (
          <div key={index} className="__images">
            <Image
              src={urlFor(image).url()}
              alt="les fleurs"
              className="gallery__img"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
