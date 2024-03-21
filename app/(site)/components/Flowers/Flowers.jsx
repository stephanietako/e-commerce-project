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
      <header
        className="header_products"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-evenly",
          border: "2px solid blue",
          alignItems: "center",
          padding: "33px",
        }}
      >
        <h2 className="_products">NOS FLEURS</h2>
      </header>

      {/* Section principale des produits */}
      <section
        className="products_section"
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
          className="products_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_products"
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
              className="products_content"
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
                className="products_cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                <h3
                  className="_bycategory_subtitle"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    height: "auto",
                    justifyContent: "center",
                  }}
                >
                  Toutes nos Fleurs
                </h3>
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
                          justifyContent: "center",
                          margin: "2rem",
                          borderRadius: "30px",
                        }}
                      >
                        <div
                          className="main_title_products"
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
                          <>
                            <div
                              key={category._id}
                              className="data_group_products"
                              style={{
                                padding: "20px",
                              }}
                            >
                              <div
                                className="content_products_categories"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="categories">
                                  <h3
                                    className="title_categories"
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <Link href={`/categories/${category.slug}`}>
                                      {category.name}
                                    </Link>
                                  </h3>
                                  <div className="_categories">
                                    {category.coverImages && (
                                      <Image
                                        src={category.coverImages}
                                        alt="les fleurs"
                                        className="product__img"
                                        width={300}
                                        height={300}
                                        style={{
                                          objectFit: "cover",
                                          borderRadius: "30px",
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
                                  }}
                                >
                                  <p className="price_content">
                                    €{category.price}
                                  </p>

                                  <span>
                                    <PortableText value={product.content} />
                                  </span>
                                  <Link
                                    href={`/categories/${category.slug}`}
                                    className="link_items"
                                  >
                                    View Details
                                  </Link>
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
                          </>
                        ))}
                        {/* fin boucle interne */}
                      </div>
                    ) : (
                      <p>No category available for this product.</p>
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
