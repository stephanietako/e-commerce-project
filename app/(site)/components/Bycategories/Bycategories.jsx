// import { getCategories } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import CheckboxCategories from "../CheckboxCategories/CheckboxCategories";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
// DISPLAY
const ByCategory = ({ bycategory }) => {
  return (
    <>
      <header
        className="header_category"
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
        <h2 className="_bycategory_title">TOUTES LES CATEGORIES</h2>
      </header>
      {/* Section principale des categories */}
      <section
        className="categories_section"
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
          className="bycategories_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_categories"
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
                className="section_checkbox_categories"
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
                    // border: "4px solid pink",
                  }}
                >
                  <Suspense fallback={<h2>In Progress...</h2>}>
                    <CheckboxCategories />
                  </Suspense>
                </div>
              </div>
              {/* ////////////////////////////////////////////// */}
              <div
                className="categories_cards"
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
                  Toutes nos categories de produits
                </h3>

                {/* Boucle EXTERNE à travers toutes les categories */}
                {bycategory.map((categories) => (
                  <div key={categories._id}>
                    {/* Vérification de la disponibilité de produits pour cette categorie */}
                    {categories.products && categories.products.length > 0 ? (
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
                          className="main_title_categories"
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
                            <Link href={`/categories/${categories.slug}`}>
                              {categories.name}
                            </Link>
                          </h2>
                        </div>
                        {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                        {categories.products.map((product) => (
                          <>
                            <div
                              key={product._id}
                              className="data_group"
                              style={{
                                padding: "20px",
                              }}
                            >
                              {/* Contenu détaillé de la sous-catégorie */}
                              <div
                                className="content_categories"
                                style={{
                                  display: "flex",
                                  // border: "3px solid pink",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="product">
                                  <h3
                                    className="title_products"
                                    style={{
                                      color: "#fff",
                                    }}
                                  >
                                    <Link href={`/products/${product.slug}`}>
                                      {product.name}
                                    </Link>
                                  </h3>
                                  <div className="images_products_categories">
                                    {categories.coverImages && (
                                      <Image
                                        src={categories.coverImages}
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
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    ) : (
                      <p>No products available for this category.</p>
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
export default ByCategory;
