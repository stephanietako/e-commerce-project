import { getDataPlusProductSlug } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";

export const dynamic = "force-dynamic";

const PlusProductsDetails = async ({ params }) => {
  const slug = params.plusProduct;
  const plusProduct = await getDataPlusProductSlug(slug);

  return (
    <>
      <section
        className="plusProducts_details__section"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <div
          className="plusProducts_details__container"
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
            className="plusProducts_details__bloc"
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
              className="plusProducts_details__title"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                top: "40%",
                zIndex: 2,
              }}
            >
              <h1>{plusProduct && plusProduct.name}</h1>
            </div>
          </div>

          <div className="plusProducts_details__categories">
            <div
              className="plusProducts__display_categories"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "2rem",
                marginBottom: "3rem",
              }}
            >
              {plusProduct.plus.map((item) => (
                <Link href={`/plus/${item.slug}`} key={item._id}>
                  <div
                    className="plusProducts__data_group_categories"
                    style={{
                      display: "flex",
                      width: "37rem",
                      height: "auto",
                      justifyContent: "center",
                      flexDirection: "column",
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
                          borderRadius: "17px",
                        }}
                      >
                        {item.coverImages ? (
                          <Image
                            src={urlFor(item.coverImages).url()}
                            alt="Les palmiers"
                            className="plusProducts__img"
                            width={550}
                            height={450}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                    </span>
                    <div
                      className="bloc_infos"
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "auto",
                        padding: "2rem",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div className="title__content">
                        <h3
                          className="title"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "auto",
                            position: "relative",
                            zIndex: 1,
                            fontSize: "27px",
                            justifyContent: "center",
                          }}
                        >
                          {item.name}
                        </h3>
                      </div>
                      <div className="plusProducts_details__infos">
                        <span>
                          <PortableText value={item.content} />
                        </span>
                        <span>
                          <p
                            className="price_content"
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {item.price}€
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
                            REF: {item._id}
                          </p>
                        </span>
                      </div>
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

export default PlusProductsDetails;
