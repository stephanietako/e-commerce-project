import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
// import { urlFor } from "@/sanity/config/client-config";
import Image from "next/image";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const dynamic = "force-dynamic";
// single page
const Product = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  console.log("TITLE SLUG Product", params);
  console.log("Product!!!!!!!!!!!!", product);

  return (
    <>
      <div className="title_slug_page">
        <h1>{product.name} ICI C EST PRODUCTS PRODUCT</h1>
      </div>
      <div
        className="gallery_container"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          border: "5px solid green",
          alignItems: "center",
        }}
      >
        <div
          className="gallery_content"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={250}
              height={250}
              className="project_img"
              style={{
                objectFit: "cover",
              }}
            />
          )}
          <ImageGallery images={product.images} />
          <div
            className="category_text_container"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="category_content"
              style={{
                display: "flex",
                width: "auto",
                height: "100%",
                border: "3px solid white",
                flexDirection: "column",
              }}
            >
              <span>
                {product.categoryName}
                <h2>{product.name}</h2>
              </span>
              <div
                className="category_price"
                style={{
                  border: "3px solid black",
                  marginTop: "25px",
                  fontSize: "3rem",
                }}
              >
                <span>
                  {" "}
                  <p
                    className="price_content"
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    €{product.price.toFixed(2)}
                  </p>
                </span>
                <span>
                  <p>2-4 Day Shipping</p>
                </span>
              </div>
              <div
                className="category_btns"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "30px",
                }}
              >
                <button
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Add to Bag
                </button>
                <button
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Checkout now
                </button>
              </div>
              <div className="category_description">
                <div>
                  <PortableText value={product.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
