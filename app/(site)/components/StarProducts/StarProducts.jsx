import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import canaIcon from "@/public/assets/canaleaf.png";
export const dynamic = "force-dynamic";

const StarProducts = ({ starproducts }) => {
  return (
    <>
      <section
        className="starproducts_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
        }}
      >
        <div
          className="__starproducts_bloc"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_starproducts"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              alignItems: "center",
              justifyContent: "flex-end",
              borderRadius: "30px",
            }}
          >
            <div
              className="display_infos"
              style={{
                display: "flex",
                width: "auto",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "3px solid #000",
                borderRadius: "30px",
                padding: "2rem",
              }}
            >
              <header
                className="title"
                style={{
                  display: "flex",
                  position: "relative",
                  zIndex: 1,
                  padding: "2rem",
                  width: "77rem",
                  height: "auto",
                }}
              >
                <h1>
                  Nos produits star
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
                className="starproducts_cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                {/* Boucle EXTERNE à travers toutes les categories */}
                {starproducts.map((product) => (
                  <div key={product._id}>
                    <h2
                      className="title_starproducts_products"
                      style={{
                        paddingLeft: "2rem",
                      }}
                    >
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>

                    {/* Vérification de la disponibilité de produits pour cette categorie */}
                    {product.categories && product.categories.length > 0 ? (
                      <div
                        className="display_infos_products"
                        style={{
                          display: "flex",
                          // border: "3px solid black",
                          flexWrap: "wrap",
                          borderRadius: "30px",
                          padding: "1rem",
                          justifyContent: "space-around",
                        }}
                      >
                        {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                        {product.categories.map((category) => (
                          <React.Fragment key={category._id}>
                            <div
                              className="data_group"
                              style={{
                                padding: "20px",
                                borderRadius: "30px",
                                border: "2px solid #000",
                              }}
                            >
                              {/* Contenu détaillé de la sous-catégorie */}
                              <div
                                className="content_starproducts"
                                style={{
                                  display: "flex",
                                  // border: "3px solid pink",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="starproducts">
                                  <div
                                    className="images_starproducts"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
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
                                        }}
                                      />
                                    )}
                                  </div>
                                  <h3 className="title_starproducts_categories">
                                    <Link href={`/categories/${category.slug}`}>
                                      {category.name}
                                    </Link>
                                  </h3>
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
                                  <span className="ref_products_categories">
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

                        {/* fin boucle interne de map de data */}
                      </div>
                    ) : (
                      <p>1No category available for this product.</p>
                    )}
                  </div>
                ))}
                {/* fin boucle externe */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StarProducts;
