import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export const dynamic = "force-dynamic";
// DISPLAY
const ProductsPages = ({ product }) => {
  return (
    <>
      <section
        className="productspages_section"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        <div
          className="__productspages_bloc"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="images"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            coucou
            {product.coverImages ? (
              <>
                <Image
                  src={product.coverImages}
                  alt="les fleurs"
                  className="product__img"
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div
            className="infos_content"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="infos">
              <p>{product.name}</p>
            </div>
            <span>
              <PortableText value={product.content} />
            </span>
            <div
              className="productspages_display"
              style={{
                display: "flex",
                width: "auto",
                height: "auto",
                justifyContent: "center",
              }}
            >
              <Link href={`/products/${product.slug}`} className="link_items">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPages;
