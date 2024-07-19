import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";

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
              // border: "4px solid red",
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
              <h1>{product && product.name}</h1>
            </div>
          </div>
          <h2
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "3rem",
            }}
          >
            {" "}
            Tous nos palmiers
          </h2>
          <div className="products_details__categories">
            <div
              className="display_categories"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                height: "auto",
                flexWrap: "wrap",
              }}
            >
              {product.categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category._id}>
                  <div
                    className="data_group__categories"
                    style={{
                      display: "flex",
                      margin: "3rem",
                      height: "auto",
                      flexDirection: "column",
                      background: "transparent",
                      width: "27rem",
                    }}
                  >
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
                            src={urlFor(category.coverImages).url()}
                            alt="les fleurs"
                            className="product__img"
                            width={450}
                            height={300}
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                    </span>
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
                          fontSize: "27px",
                        }}
                      >
                        {category.name}
                      </h3>
                    </div>
                    <div className="productDetails__infos">
                      <span>
                        <PortableText value={category.content} />
                      </span>
                      <span>
                        <p
                          className="price_content"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {category.price}€
                        </p>
                      </span>
                      <span>
                        <button
                          style={{
                            padding: "10px 0",
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
