import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";
// DISPLAY
const ProductsPages = ({ product }) => {
  return (
    <>
      <section
        className="container"
        style={{
          display: "flex",
          width: "100%",
          height: " auto",
          border: "3px solid #000",
          borderRadius: "30px",
          padding: "2rem",
        }}
      >
        <div
          className="productspages"
          style={{
            display: "flex",
            width: "100%",
            height: " auto",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <header
            className="productspages_header"
            style={{
              display: "flex",
              width: "100%",
              height: " auto",
              justifyContent: "center",
              position: "relative",
              zIndex: "1",
            }}
          >
            <div
              className="productspages"
              style={{
                display: "flex",
                width: "100%",
                height: " auto",
                justifyContent: "center",
                position: "absolute",
                top: "40%",
              }}
            >
              <h1>{product.name}</h1>
            </div>
            <div
              className="images"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
              }}
            >
              {product.coverImages ? (
                <Image
                  src={product.coverImages}
                  alt="les fleurs"
                  className="product__img"
                  width={1000}
                  height={200}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                    width: "100%",
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </header>
        </div>
        <div className="productspages_section">
          <div
            className="__productspages_bloc"
            style={{
              display: "flex",
              width: "100%",
              height: " auto",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="infos_product"
              style={{
                display: "flex",
                width: "auto",
                height: "auto",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <span>
                <PortableText value={product.content} />
              </span>
              <br />
              <span>
                <PortableText value={product.body} />
              </span>
            </div>

            <div
              className="productspages_display_categories"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                flexDirection: "column",
              }}
            >
              <ul
                className="productspages_display_content"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                {product.categories.map((category) => (
                  <div key={category._id}>
                    <>
                      <li
                        className="list_display_categories"
                        style={{
                          display: "flex",
                          border: "3px solid #000",
                          flexDirection: "column",
                          padding: "1rem",
                          margin: "1rem",
                          borderRadius: "30px",
                        }}
                      >
                        <h3>
                          <Link href={`/categories/${category.slug}`}>
                            {category.name}
                          </Link>
                        </h3>
                        <span>
                          {" "}
                          <div
                            className="images"
                            style={{
                              padding: "0.5rem",
                            }}
                          >
                            {category.coverImages ? (
                              <Image
                                src={category.coverImages}
                                alt="les fleurs"
                                className="product__img"
                                width={180}
                                height={180}
                                style={{
                                  objectFit: "cover",
                                  borderRadius: "30px",
                                }}
                              />
                            ) : (
                              <p>No image available</p>
                            )}
                          </div>
                        </span>
                        <span>
                          <p className="price_content">€{category.price}</p>
                        </span>
                        <span>
                          <Link
                            href={`/categories/${category.slug}`}
                            className="link"
                          >
                            View Details
                          </Link>
                        </span>
                        <span className="ref_products_categories">
                          <p
                            style={{
                              color: "gray",
                              fontSize: "10px",
                            }}
                          >
                            REF: {category._id}
                          </p>
                        </span>
                      </li>
                    </>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <hr
          style={{
            background: "lime",
            color: "lime",
            borderColor: "lime",
            height: "3px",
            width: "100%",
          }}
        /> */}
      </section>
    </>
  );
};

export default ProductsPages;
