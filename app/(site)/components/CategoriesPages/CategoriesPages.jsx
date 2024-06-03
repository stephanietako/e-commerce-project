import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/sanity";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";
// DISPLAY
const CategoriesPages = ({ category }) => {
  return (
    <>
      <section className={styles.categoriespages__section}>
        <div className={styles.categoriespages__container}>
          {/* <h2 className={styles.categoriespages__title}>{category.name}</h2> */}
          <div className={styles.title__content}>
            <h2 className={styles.title}>{category.name}</h2>
          </div>
          <div className={styles.images}>
            {category.coverImages ? (
              <>
                <Link href={`/categories/${category.slug}`}>
                  <Image
                    src={urlFor(category.coverImages).url()}
                    alt="les fleurs"
                    className="product__img"
                    width={370}
                    height={250}
                    style={{
                      objectFit: "cover",
                      borderRadius: "17px",
                      padding: "0.5rem",
                      cursor: "pointer", // Ajoutez un pointeur pour indiquer que l'image est cliquable
                    }}
                  />
                </Link>
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className={styles.categoriespages__content}>
            <div className={styles.categoriespages__infos}>
              <p className={styles.infos_type}>{category.type} </p>
              <span>
                <PortableText value={category.content} />
              </span>
              <span>
                {" "}
                <p
                  className="price_content"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {category.price}€
                </p>
              </span>
              <div className={styles.categoriespages__link}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="link_items"
                >
                  Acheter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPages;
