import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";
// single page
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
            width: "70%",
            height: " auto",
            position: "relative",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="products_details__bloc"
            style={{
              display: "flex",
              width: "100%",
              height: " auto",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <div
              className="products_details__title"
              style={{
                display: "flex",
                width: "100%",
                height: " auto",
                justifyContent: "center",
                position: "absolute",
                top: "40%",
                zIndex: 2,
              }}
            >
              <h1>{product && product.name}</h1>
            </div>
            <div
              className="images"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                position: "relative",
                borderRadius: "30px",
              }}
            >
              {product.coverImages ? (
                <Image
                  src={product.coverImages}
                  alt="les fleurs"
                  className="product__img"
                  width={2000}
                  height={300}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
              <span
                className="images_bg"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.7);",
                }}
              ></span>
            </div>
          </div>
          {product ? (
            <div
              className="products_details__infos"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                // border: "5px solid green",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="products_details__content"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                {/* <p>{product._type}</p> */}

                <span>
                  <PortableText value={product.content} />
                </span>
                <span>{product.body}</span>
                <span className="ref_products_categories">
                  <p
                    style={{
                      color: "gray",
                      fontSize: "10px",
                    }}
                  >
                    REF: {product._id}
                  </p>
                </span>
              </div>
            </div>
          ) : (
            <p>Not found</p>
          )}

          <div className="products_details__categories">
            <ul
              className="display_categories"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {product.categories.map((category) => (
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
                      justifyContent: "flex-end",
                    }}
                    key={category._id}
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
                      {" "}
                      <p
                        className="price_content"
                        style={{
                          fontSize: "1rem",
                        }}
                      >
                        {category.price.toFixed(2)}€
                      </p>
                    </span>
                    <span>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="link"
                      >
                        View Details
                      </Link>
                    </span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsDetails;
