import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Styles
import styles from "./styles.module.scss";

const StarProducts = ({ starproducts }) => {
  return (
    <section className={styles.starproducts__section}>
      <div className={styles.starproducts__container}>
        <div className={styles.display_starproducts}>
          <header className={styles.title__bloc}>
            <div className={styles.title__content}>
              <h1 className={styles.title}>LES PLUS POPULAIRES</h1>
            </div>
          </header>
          <div className={styles.display_all_starproducts}>
            <div className={styles.starproducts__cards}>
              {starproducts.map((product) => (
                <div key={product._id}>
                  {product.categories && product.categories.length > 0 ? (
                    <div className={styles.display_infos__products}>
                      {product.categories.map((category) => (
                        <div
                          key={category._id}
                          className={styles.data_group_starproducts}
                        >
                          <Link href={`/categories/${category.slug}`}>
                            <div className={styles.content_starproducts}>
                              <div className={styles.starproducts__cards_infos}>
                                <div className={styles.title__content}>
                                  <h3 className={styles.title}>
                                    {product.name}
                                  </h3>
                                </div>
                                <div className={styles.images_starproducts}>
                                  {category.coverImages && (
                                    <Image
                                      src={category.coverImages}
                                      alt="les fleurs"
                                      className="product__img"
                                      width={300}
                                      height={220}
                                      style={{
                                        objectFit: "cover",
                                        borderRadius: "17px",
                                        padding: "0.5rem",
                                      }}
                                    />
                                  )}
                                </div>
                                <div className={styles.starproducts__infos}>
                                  <h3
                                    className={
                                      styles.starproducts__infos_categories
                                    }
                                  >
                                    {category.name}
                                  </h3>
                                  <span>
                                    <PortableText value={category.content} />
                                  </span>
                                  <span className={styles.price_content}>
                                    <p>{category.price.toFixed(2)}€</p>
                                  </span>
                                  <span className="ref_products_starproducts">
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
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No category available for this product.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarProducts;
