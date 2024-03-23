// import { getDataProductsPages } from "@/sanity/lib/client";
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
      <header
        className="header_products"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-between",
          border: "2px solid blue",
          alignItems: "center",
          padding: "33px",
        }}
      >
        <h2 className="_products">TOUS LES PRODUITS</h2>
      </header>

      {/* Section principale des produits */}
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
                  Tous nos produits
                </h3>
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
                                    <PortableText value={category.content} />
                                  </span>
                                  <Link
                                    href={`/categories/${category.slug}`}
                                    className="link_items"
                                    style={{
                                      color: "turquoise",
                                    }}
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

export default Products;
