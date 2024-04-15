import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
// DISPLAY
const CategoriesPages = ({ category }) => {
  return (
    <>
      <section className={styles.categoriespages__section}>
        <div className={styles.categoriespages__container}>
          <h2 className={styles.categoriespages__title}>{category.name}</h2>
          <div className={styles.images}>
            {category.coverImages ? (
              <>
                <Image
                  src={category.coverImages}
                  alt="les fleurs"
                  className="category__img"
                  width={180}
                  height={180}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className={styles.categoriespages__content}>
            <div className={styles.categoriespages__infos}>
              <p className={styles.infos_type}>{category.type} </p>
              <span>
                {" "}
                <p
                  className="price_content"
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {category.price.toFixed(2)}€
                </p>
              </span>

              <span>
                <PortableText value={category.content} />
              </span>
              <div className={styles.categoriespages__link}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="link_items"
                >
                  View Details
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
