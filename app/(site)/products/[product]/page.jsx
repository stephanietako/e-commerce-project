import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import canaIcon from "@/public/assets/canaleaf.png";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const ProductsDetails = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  return (
    <>
      <section
        className="products_details__section"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <div
          className="products_details__container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            position: "relative",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "none",
          }}
        >
          <div
            className="products_details__bloc"
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              position: "relative",
              justifyContent: "center",
              border: "4px solid red",
            }}
          >
            <div
              className="products_details__title"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                position: "absolute",
                top: "40%",
                zIndex: 2,
              }}
            >
              <h1
                style={{
                  color: "#fff",
                }}
              >
                {product && product.name}
              </h1>
            </div>
            <div
              className="images"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                position: "relative",
                borderRadius: "30px",
                justifyContent: "center",
              }}
            >
              {product.coverImages ? (
                <Image
                  src={product.coverImages}
                  alt="les fleurs"
                  className="darkened_image"
                  width={1500}
                  height={500}
                  style={{
                    objectFit: "contain",
                    borderRadius: "30px",
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>

          <div className="products_details__categories">
            <div
              className="display_categories"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                height: "auto",
                flexWrap: "wrap",
                margin: "2rem",
              }}
            >
              {product.categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category._id}>
                  <div
                    className="data_group__categories"
                    style={{
                      display: "flex",
                      padding: "2rem",
                      borderRadius: "30px",
                      width: "27 rem",
                      height: "auto",
                      justifyContent: "center",
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                      transition: "0.3s",
                      flexDirection: "column",
                      background: "#fff",
                      margin: "2rem",
                    }}
                  >
                    <div className="title__content">
                      <h3
                        className="title"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          height: "auto",
                          position: "relative",
                          zIndex: 1,
                          justifyContent: "center",
                          color: "#000",
                          fontSize: "27px",
                        }}
                      >
                        {category.name}
                      </h3>
                    </div>
                    <span>
                      <div
                        className="images"
                        style={{
                          display: "flex",
                          width: "auto",
                          height: "auto",
                          justifyContent: "center",
                          padding: "0.5rem",
                          borderRadius: "30px",
                        }}
                      >
                        {category.coverImages ? (
                          <Image
                            src={category.coverImages}
                            alt="les fleurs"
                            className="product__img"
                            width={450}
                            height={300}
                            style={{
                              objectFit: "cover",
                              borderRadius: "18px",
                            }}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                    </span>
                    <div className="productDetails__infos">
                      <span>
                        <PortableText value={category.content} />
                      </span>
                      <span>
                        <p
                          className="price_content"
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {category.price}€
                        </p>
                      </span>
                      <span>
                        {/* {" "}
                        <Link
                          href={`/categories/${category.slug}`}
                          className="link"
                        >
                          Découvrir
                        </Link> */}
                        <button
                          style={{
                            padding: "10px 20px",
                            backgroundColor: "transparent",
                            color: "#000",
                            border: "none",
                            outline: "none",
                            cursor: "none",
                          }}
                        >
                          Découvrir
                        </button>
                      </span>
                      <span>
                        <p
                          style={{
                            fontSize: "8px",
                            color: "gray",
                          }}
                        >
                          REF: {category._id}
                        </p>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;
