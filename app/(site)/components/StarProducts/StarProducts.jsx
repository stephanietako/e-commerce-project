import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
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
              justifyContent: "center",
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
              }}
            >
              <header
                className="header_STARPRODUCTS"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  padding: "33px",
                }}
              >
                <h1 className="_STARPRODUCTS"> NOS PRODUITS STAR</h1>
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
                          padding: "2rem",
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
                                  <div className="images_starproducts">
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
                                  <p className="price_content">
                                    €{category.price.toFixed(2)}
                                  </p>
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
