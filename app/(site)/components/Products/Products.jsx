import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import canaIcon from "@/public/assets/canaleaf.png";
import CheckboxProducts from "../CheckboxProducts/CheckboxProducts";
import { Suspense } from "react";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
// DISPLAY
const Products = ({ allproducts }) => {
  return (
    <>
      <section className={styles.products_section}>
        <div className={styles.products_container}>
          <div className={styles.display_allproducts}>
            <header className={styles.title}>
              <h1>
                Selection de nos produits
                <span className={styles.icon}>
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
            <div className={styles.display_allproducts__text}>
              <p
                style={{
                  fontSize: "2rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis ! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis !
              </p>
            </div>
            <div className={styles.products__container}>
              <div className={styles.products__content}>
                <div className={styles.products__cards}>
                  {allproducts.map((product) => (
                    <div key={product._id}>
                      {/* Vérification de la disponibilité de catégories pour ce produit */}
                      {product.categories && product.categories.length > 0 ? (
                        <div className={styles.display_infos_products}>
                          <div className={styles.main_title_products}>
                            <h2>
                              <Link href={`/products/${product.slug}`}>
                                {product.name}
                              </Link>
                            </h2>
                          </div>

                          {/*  Boucle INTERNE SUBCATEGORIES à travers toutes les sous-catégories du produit */}
                          {product.categories.map((category) => (
                            <React.Fragment key={category._id}>
                              <div className={styles.data_group_products}>
                                <div
                                  className={
                                    styles.content_products__categories
                                  }
                                >
                                  <div className={styles.categories}>
                                    <h3 className={styles.title_categories}>
                                      <Link
                                        href={`/categories/${category.slug}`}
                                      >
                                        {category.name}
                                      </Link>
                                    </h3>
                                    <div className={styles._categories}>
                                      <div className={styles.bloc_img_products}>
                                        {category.coverImages && (
                                          <Image
                                            src={category.coverImages}
                                            alt="les fleurs"
                                            className="product__img"
                                            width={170}
                                            height={170}
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
              <div className={styles.section_checkbox_products}>
                <div className={styles.__checkbox}>
                  <Suspense fallback={<h2>In Progress...</h2>}>
                    <CheckboxProducts />
                  </Suspense>
                </div>
              </div>
            </div>
            {/* <div className={styles.section_checkbox_products}>
              <div className={styles.__checkbox}>
                <Suspense fallback={<h2>In Progress...</h2>}>
                  <CheckboxProducts />
                </Suspense>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
