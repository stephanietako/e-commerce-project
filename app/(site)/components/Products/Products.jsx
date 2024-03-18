// import { getDataProductsPages } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import CheckboxProducts from "../CheckboxProducts/CheckboxProducts";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

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
                  // justifyContent: "center",
                  // border: "4px solid red",
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
                }}
              >
                <h3>Tous nos produits</h3>
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
                          {" "}
                          <h2>
                            <Link href={`/products/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h2>
                        </div>

                        {/* DATA GROUP key - Boucle INTERNE SUBCATEGORIES à travers toutes les sous-catégories du produit */}
                        {product.categories.map((subCategory) => (
                          <div
                            key={subCategory._id}
                            className="data_group_products"
                            style={{
                              padding: "20px",
                            }}
                          >
                            <div className="images_products">
                              {subCategory.coverImages && (
                                <Image
                                  src={subCategory.coverImages}
                                  alt="les fleurs"
                                  className="product__img"
                                  width={200}
                                  height={200}
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              )}
                            </div>

                            {/* Contenu détaillé de la sous-catégorie */}
                            <div
                              className="content_products_categories"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div className="product">
                                <h3>
                                  <Link
                                    href={`/categories/${subCategory.slug}`}
                                  >
                                    {subCategory.name}
                                  </Link>
                                </h3>
                                <p className="category_name">
                                  {subCategory.categories}
                                </p>
                              </div>
                              <div
                                className="content"
                                style={{
                                  display: "flex",

                                  flexDirection: "column",
                                }}
                              >
                                <p className="price_content">
                                  €{subCategory.price}
                                </p>
                              </div>
                            </div>
                            {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                          </div>
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

// En résumé, la boucle externe traverse tous les produits, et la boucle interne traverse toutes les sous-catégories pour chaque produit. Cela permet de traiter les informations liées aux sous-catégories de chaque produit de manière structurée et d'afficher les détails de chaque sous-catégorie associée à un produit particulier.
export default Products;
