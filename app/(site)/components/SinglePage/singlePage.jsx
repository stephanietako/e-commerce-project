// "use client";

import Image from "next/image";
export const dynamic = "force-dynamic";
const SinglePage = ({ data }) => {
  return (
    <>
      <h2>Nos Types dans single page</h2>
      <h3>NOM:{data.name}</h3>
      <p>TYPE:{data._type}</p>
      <p>REF:{data._id}</p>

      <div className="images_products_categories">
        {data.coverImages && (
          <Image
            src={data.coverImages}
            alt="les fleurs"
            className="product__img"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        )}
      </div>
      {/* Contenu de votre composant SinglePage */}
    </>
  );
};

export default SinglePage;
