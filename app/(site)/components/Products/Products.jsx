import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import CheckboxProducts from "../CheckboxProducts/CheckboxProducts";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
// DISPLAY
const Products = ({ allproducts }) => {
  return (
    <>
      <section
        className="products_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
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
            className="display_allproducts"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: "30px",
              border: "3px solid #000",
              padding: "2rem",
            }}
          >
            <header
              className="header_products"
              style={{
                display: "flex",
                width: "auto",
                height: "auto",
                alignItems: "center",
                padding: "33px",
              }}
            >
              <h1 className="_products">TOUS LES PRODUITS</h1>
            </header>
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
                className="section_checkbox_products"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="_checkbox"
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    justifyContent: "center",
                  }}
                >
                  <Suspense fallback={<h2>In Progress...</h2>}>
                    <CheckboxProducts />
                  </Suspense>
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
                  marginTop: "4rem",
                }}
              >
                {/* <h3
                  className="_bycategory_subtitle"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    height: "auto",
                    justifyContent: "center",
                  }}
                >
                  Tous nos produits
                </h3> */}

                {/* Boucle EXTERNE à travers tous les produits, cette boucle extérieure parcourt tous les produits disponibles. */}
                {allproducts.map((product) => (
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
                          padding: "2rem",
                          width: "auto",
                          justifyContent: "space-around",
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
                                    <div
                                      className="bloc_img_products"
                                      style={{
                                        display: "flex",
                                        // border: "3px solid pink",
                                        width: "auto",
                                        height: "auto",
                                        justifyContent: "center",
                                        padding: "0.5rem",
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
                                  </div>
                                </div>
                                <div
                                  className="content"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <span>
                                    {" "}
                                    <p
                                      className="price_content"
                                      style={{
                                        fontSize: "1.5rem",
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
                        {/* fin boucle interne */}
                      </div>
                    ) : (
                      <p>3No category available for this product.</p>
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

export default Products;
