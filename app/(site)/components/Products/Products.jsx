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

            <div className={styles.display_allproducts__container}>
              <div className={styles.display_allproducts__first_bloc}>
                <div className={styles.display_allproducts__text}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis ! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis !
                  </p>
                </div>

                <div className={styles.display_allproducts__content}>
                  <div className={styles.display_allproducts__cards}>
                    {allproducts.map((product) => (
                      <div key={product._id}>
                        {product.categories && product.categories.length > 0 ? (
                          <div className={styles.display_allproducts__infos}>
                            {product.categories.map((category) => (
                              <React.Fragment key={category._id}>
                                <div className={styles.data_group_products}>
                                  <div
                                    className={
                                      styles.data_group_products__categories
                                    }
                                  >
                                    <h3 className={styles.subtitle__categories}>
                                      <Link
                                        href={`/categories/${category.slug}`}
                                      >
                                        {category.name}
                                      </Link>
                                    </h3>

                                    <div className={styles.content__categories}>
                                      <div className={styles.bloc_img_products}>
                                        {category.coverImages && (
                                          <Image
                                            src={category.coverImages}
                                            alt="les fleurs"
                                            className="product__img"
                                            width={150}
                                            height={150}
                                            style={{
                                              objectFit: "cover",
                                              borderRadius: "30px",
                                            }}
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div className={styles.infos_content}>
                                      <span>
                                        {" "}
                                        <p
                                          className="price_content"
                                          style={{
                                            fontSize: "1rem",
                                            textAlign: "end",
                                          }}
                                        >
                                          {/* {category.price.toFixed(2)}€ */}
                                          {category.price}€
                                        </p>
                                      </span>
                                      <span>
                                        <PortableText
                                          value={category.content}
                                        />
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
                                            fontSize: "8px",
                                          }}
                                        >
                                          REF: {product._id}
                                        </p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                        ) : (
                          <p>3No category available for this product.</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.display_allproducts__second_bloc}>
                <div className={styles.__checkbox}>
                  <Suspense fallback={<h2>In Progress...</h2>}>
                    <CheckboxProducts />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
