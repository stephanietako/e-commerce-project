import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
// DISPLAY
const ProductsPages = ({ product }) => {
  return (
    <>
      <section className={styles.container_productspages}>
        <div className={styles.productspages__header}>
          <header className={styles.__header}>
            <div className={styles.productspages__title}>
              <h1>{product.name}</h1>
            </div>
            <div className={styles.productspages__images}>
              {product.coverImages ? (
                <Image
                  src={product.coverImages}
                  alt="les fleurs"
                  className="product__img"
                  width={750}
                  height={300}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </header>
        </div>
        <div className={styles.productspages__section}>
          <div className={styles.productspages__bloc}>
            <div className={styles.infos_product}>
              <span>
                <PortableText value={product.content} />
              </span>
              <br />
              <span>
                <PortableText value={product.body} />
              </span>
            </div>

            <div className={styles.productspages_display__categories}>
              <ul className={styles.productspages_display__content}>
                {product.categories.map((category) => (
                  <div key={category._id}>
                    <>
                      <li className={styles.list_display__categories}>
                        <h3>
                          <Link href={`/categories/${category.slug}`}>
                            {category.name}
                          </Link>
                        </h3>
                        <span>
                          {""}
                          <div
                            className="images"
                            style={{
                              padding: "0.5rem",
                            }}
                          >
                            {category.coverImages ? (
                              <Image
                                src={category.coverImages}
                                alt="les fleurs"
                                className="product__img"
                                width={180}
                                height={180}
                                style={{
                                  objectFit: "cover",
                                  borderRadius: "30px",
                                }}
                              />
                            ) : (
                              <p>No image available</p>
                            )}
                          </div>
                        </span>
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
                          <Link
                            href={`/categories/${category.slug}`}
                            className="link"
                          >
                            View Details
                          </Link>
                        </span>
                        <span className="ref_products_categories">
                          <p
                            style={{
                              color: "gray",
                              fontSize: "10px",
                            }}
                          >
                            REF: {category._id}
                          </p>
                        </span>
                      </li>
                    </>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <hr
          style={{
            background: "lime",
            color: "lime",
            borderColor: "lime",
            height: "3px",
            width: "100%",
          }}
        /> */}
      </section>
    </>
  );
};

export default ProductsPages;
