import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import CheckboxCategories from "../CheckboxCategories/CheckboxCategories";
import { urlFor } from "@/sanity/lib/sanity";
import { Suspense } from "react";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
// DISPLAY
const ByCategory = ({ bycategory }) => {
  //  Afficher les catégories sans produits
  const categoriesWithoutProducts = bycategory.filter(
    (category) => !category.products || category.products.length === 0
  );
  console.log("Catégories sans produits :", categoriesWithoutProducts);
  return (
    <>
      <div className={styles.categories_section}>
        <div className={styles.bycategories_container}>
          <div className={styles.display_bycategories}>
            <div className={styles.__checkbox}>
              <Suspense fallback={<h2>In Progress...</h2>}>
                <CheckboxCategories />
              </Suspense>
            </div>

            {/* ////////////////////////////////////////////// */}
            <div className={styles.display_bycategories__cards}>
              {bycategory.map((categories) => (
                <div key={categories._id}>
                  {categories.products && categories.products.length > 0 ? (
                    <div className={styles.display_infos_products}>
                      <div className={styles.main_title_categories}>
                        <h2>
                          <Link href={`/categories/${categories.slug}`}>
                            {categories.name}
                          </Link>
                        </h2>
                      </div>

                      {categories.products.map((product) => (
                        <React.Fragment key={product._id}>
                          <div className={styles.images_products_categories}>
                            <div
                              className={styles.bloc_img_products__categories}
                            >
                              {categories.coverImages && (
                                <Image
                                  src={urlFor(categories.coverImages).url()}
                                  alt="les fleurs"
                                  className="product__img"
                                  width={250}
                                  height={200}
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                  }}
                                />
                              )}
                            </div>

                            <h3 className={styles.title_products}>
                              <Link href={`/products/${product.slug}`}>
                                {product.name}
                              </Link>
                            </h3>
                            <div className={styles.content}>
                              <span>
                                {" "}
                                <p
                                  className={styles.price_content}
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "right",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {/* {categories.price.toFixed(2)}€ */}
                                  {categories.price}€
                                </p>
                              </span>
                            </div>
                            <div>
                              <PortableText value={categories.content} />
                            </div>
                            <div className={styles.bycategories_link}>
                              <Link
                                href={`/categories/${categories.slug}`}
                                className="link"
                              >
                                Acheter
                              </Link>
                            </div>
                            <span className={styles.ref_products_categories}>
                              <p
                                style={{
                                  color: "gray",
                                  fontSize: "8px",
                                }}
                              >
                                REF: {categories._id}
                              </p>
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <p>No categories available for this product.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ByCategory;
