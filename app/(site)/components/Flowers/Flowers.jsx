import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SearchFlowers from "../SearchFlowers/SearchFlowers";
import canaIcon from "@/public/assets/canaleaf.png";
import SearchTypeFlowers from "../SearchTypeFlowers/SearchTypeFlowers";
export const dynamic = "force-dynamic";
// DISPLAY
const Flowers = ({ allflowers }) => {
  return (
    <>
      <section
        className="flowers__section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {/* Conteneur des produits */}
        <div
          className="flowers__container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_flowers"
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="flowers__cards"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "75%",
                height: "auto",
                justifyContent: "center",
                border: "2px solid #000",
                borderRadius: "30px",
              }}
            >
              <>
                {/* Boucle EXTERNE à travers tous les produits, cette boucle extérieure parcourt tous les produits disponibles. */}
                {allflowers.map((product) => (
                  <div key={product._id}>
                    {/* Vérification de la disponibilité de catégories pour ce produit */}
                    {product.categories && product.categories.length > 0 ? (
                      <div
                        className="flowers__cards_display"
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          borderRadius: "30px",
                          padding: "2rem",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        <header
                          className="title"
                          style={{
                            display: "flex",
                            position: "relative",
                            zIndex: 1,
                            padding: "2rem",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <h1>
                            Toutes nos fleurs
                            <span
                              className="icon"
                              style={{
                                display: "block",
                                position: "absolute",
                                left: " -21px",
                                zIndex: -1,
                                transform: " translateY(-76%) rotate(-29deg)",
                              }}
                            >
                              {" "}
                              <Image
                                src={canaIcon}
                                alt="les produits de la boutiques vibes cbd"
                                className="cana_icon__img"
                                width={100}
                                height={0}
                                style={{
                                  objectFit: "cover",
                                }}
                              />
                            </span>
                          </h1>
                        </header>
                        <div
                          className="flower__bloc"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <div
                            className="flower__searchflowers"
                            style={{
                              display: "flex",
                              width: "auto",
                              height: "auto",
                              justifyContent: "center",
                            }}
                          >
                            <SearchFlowers />
                          </div>
                          <div
                            className="flower__searchtypeflowers"
                            style={{
                              display: "flex",
                              width: "auto",
                              height: "auto",
                              justifyContent: "center",
                            }}
                          >
                            <SearchTypeFlowers />
                          </div>
                        </div>
                        {product.categories.map((category) => (
                          <React.Fragment key={category._id}>
                            <div
                              className="data_group_products"
                              style={{
                                display: "flex",
                                padding: "20px",
                                borderRadius: "30px",
                                border: "2px solid #000",
                                width: "17rem",
                                height: "auto",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                className="content_flowers"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="flower__categories">
                                  <h3
                                    className="title_flowers_categories"
                                    // style={{
                                    //   color: "white",
                                    // }}
                                  >
                                    <Link href={`/categories/${category.slug}`}>
                                      {category.name}
                                    </Link>
                                  </h3>
                                  <div
                                    className="_flowers_images"
                                    // style={{
                                    //   display: "flex",
                                    //   justifyContent: "center",
                                    // }}
                                  >
                                    {category.coverImages && (
                                      <Image
                                        src={category.coverImages}
                                        alt="les fleurs"
                                        className="product__img"
                                        width={200}
                                        height={200}
                                        style={{
                                          objectFit: "cover",
                                          borderRadius: "30px",
                                          padding: "0.5rem",
                                          // justifyContent: "center",
                                        }}
                                      />
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="flower__infos"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "12rem",
                                  }}
                                >
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
                                    <PortableText value={category.content} />
                                  </span>
                                  <Link
                                    href={`/categories/${category.slug}`}
                                    className="link"
                                  >
                                    View Details
                                  </Link>
                                  <span className="ref_products_flowers">
                                    {" "}
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
                              {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                            </div>
                          </React.Fragment>
                        ))}
                        {/* fin boucle interne */}
                      </div>
                    ) : (
                      <p>2No category available for this product.</p>
                    )}
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flowers;
