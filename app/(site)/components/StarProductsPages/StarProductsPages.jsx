import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import { PortableText } from "@portabletext/react";

// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const StarProductsPages = ({ starproducts }) => {
  console.log("starproducts:", starproducts);
  if (!starproducts || !Array.isArray(starproducts)) {
    console.log("starproducts is not defined or is not an array");
    return <div>Loading...</div>;
  }

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
              {starproducts.map((product) => {
                if (!product.stars || !Array.isArray(product.stars)) {
                  console.log("star product is not defined or is not an array");
                  return (
                    <div key={product._id}>
                      <p>Pas de produits disponibles</p>
                    </div>
                  );
                }

                return (
                  <div key={product._id}>
                    {product.stars && product.stars.length > 0 ? (
                      <div className={styles.display_infos__products}>
                        {product.stars.map((item) => {
                          console.log("item:", item);

                          return (
                            <div
                              key={item._id}
                              className={styles.data_group_starproducts}
                            >
                              <Link href={`/stars/${item.slug}`}>
                                <div className={styles.content_starproducts}>
                                  <div
                                    className={styles.starproducts__cards_infos}
                                  >
                                    <div className={styles.images_starproducts}>
                                      {item.coverImages && (
                                        <Image
                                          src={urlFor(item.coverImages).url()}
                                          className="product__img"
                                          width={350}
                                          height={250}
                                          loading="lazy"
                                          placeholder="blur"
                                          quality={80}
                                          blurDataURL="data:image/jpeg..."
                                          alt="Notre selection de palmiers"
                                        />
                                      )}
                                    </div>
                                    <div className={styles.starproducts__infos}>
                                      <h2 className={styles.title}>
                                        {product.name}
                                      </h2>
                                      <h3
                                        className={
                                          styles.starproducts__infos_categories
                                        }
                                      >
                                        {item.name}
                                      </h3>
                                      <span>
                                        <PortableText value={item.content} />
                                      </span>
                                      <span className={styles.price_content}>
                                        <p>A partir de:</p>
                                        <p>{item.price.toFixed(2)}€</p>
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
                          );
                        })}
                      </div>
                    ) : (
                      <p>No item available for this product.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarProductsPages;
