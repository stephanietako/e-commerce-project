import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const StarProducts = ({ starproducts }) => {
  return (
    <>
      <section className={styles.starproducts__section}>
        <div className={styles.starproducts__container}>
          <div className={styles.display_starproducts}>
            <header className={styles.title__bloc}>
              <div className={styles.title__content}>
                <h1 className={styles.title}>
                  <span className={styles.icon}>
                    <Image
                      src={canaIcon}
                      alt="les produits de la boutiques vibes cbd"
                      className="cana_icon__img"
                      width={100}
                      height={100}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </span>
                  Nos Séléctions
                </h1>
              </div>
            </header>
            <div className={styles.display_all_starproducts}>
              <div className={styles.starproducts__cards}>
                {/* Boucle EXTERNE à travers toutes les categories */}
                {starproducts.map((product) => (
                  <div key={product._id}>
                    <h2
                      className={styles.title_starproducts_products}
                      // style={{
                      //   paddingLeft: "2rem",
                      // }}
                    >
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>

                    {/* Vérification de la disponibilité de produits pour cette categorie */}
                    {product.categories && product.categories.length > 0 ? (
                      <div className={styles.display_infos__products}>
                        {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                        {product.categories.map((category) => (
                          <React.Fragment key={category._id}>
                            <div className={styles.data_group_starproducts}>
                              {/* Contenu détaillé de la sous-catégorie */}
                              <div className={styles.content_starproducts}>
                                <div
                                  className={styles.starproducts__cards_infos}
                                >
                                  <div className={styles.images_starproducts}>
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
                                  <h3
                                    className={
                                      styles.title_starproducts_categories
                                    }
                                  >
                                    <Link href={`/categories/${category.slug}`}>
                                      {category.name}
                                    </Link>
                                  </h3>{" "}
                                  <span className={styles.price_content}>
                                    <p>{category.price.toFixed(2)}€</p>
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
                                  <span className="ref_products_flowers">
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
                              {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                            </div>
                          </React.Fragment>
                        ))}

                        {/* fin boucle interne de map de data */}
                      </div>
                    ) : (
                      <p>1No category available for this product.</p>
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

export default StarProducts;
