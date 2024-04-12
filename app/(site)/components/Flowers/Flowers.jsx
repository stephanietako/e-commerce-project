import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SearchFlowers from "../SearchFlowers/SearchFlowers";
import SearchTypeFlowers from "../SearchTypeFlowers/SearchTypeFlowers";
export const dynamic = "force-dynamic";
// DISPLAY
const Flowers = ({ allflowers }) => {
  return (
    <>
      <section
        className="flowers_section"
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
          className="flowers_container"
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
              className="flowers_content"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="flowers_cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                {/* Boucle EXTERNE à travers tous les produits, cette boucle extérieure parcourt tous les produits disponibles. */}
                {allflowers.map((product) => (
                  <div key={product._id}>
                    {/* Vérification de la disponibilité de catégories pour ce produit */}
                    {product.categories && product.categories.length > 0 ? (
                      <div
                        className="display_infos_products"
                        style={{
                          display: "flex",
                          border: "3px solid black",
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                          margin: "2rem",
                          borderRadius: "30px",
                          padding: "2rem",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        <header
                          className="header_flowers"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <h1 className="_flowers"> TOUTES NOS FLEURS</h1>
                        </header>
                        <div
                          className="section_searchbox_flowers"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <div
                            className="_searchbox_flowers"
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
                            className="_searchbox_flowers_type"
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
                        <div
                          className="main_title_flowers"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "auto",
                            alignItems: "center",
                            padding: "14px",
                            flexWrap: "wrap",
                          }}
                        >
                          <h2>
                            <Link href={`/products/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h2>
                        </div>

                        {/*  Boucle INTERNE SUBCATEGORIES à travers toutes les sous-catégories du produit */}
                        {product.categories.map((category) => (
                          <React.Fragment key={category._id}>
                            <div
                              className="data_group_products"
                              style={{
                                padding: "20px",
                                borderRadius: "30px",
                                border: "2px solid #000",
                              }}
                            >
                              <div
                                className="content_flowers"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="flowers">
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
                                  <div className="_flowers_images">
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
                                        }}
                                      />
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="content"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "12rem",
                                  }}
                                >
                                  <p className="price_content">
                                    €{category.price}
                                  </p>

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
                {/* // FIN BOUCLE EXTERIEURE EN DESSOUS DE LA DIV EN DESSOUS DE LA DIV */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flowers;
