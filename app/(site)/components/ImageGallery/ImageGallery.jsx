const ImageGallery = () => {
  return (
    <div className="imagegallery_container">
      {/*  5 colonnes */}
      {/* <div className="__container">
        {images.map((image, index) => (
          <div key={index} className="__images">
            <Image
              src={image.images}
              alt={image.alt}
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
      </div> */}
    </div>
  );
};

export default ImageGallery;
