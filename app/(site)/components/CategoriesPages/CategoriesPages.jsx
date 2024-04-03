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
      <section className={styles.categoriespages_section}>
        <div className={styles.__categoriespages_bloc}>
          <div className={styles.images}>
            {category.coverImages ? (
              <>
                <Image
                  src={category.coverImages}
                  alt="les fleurs"
                  className="category__img"
                  width={300}
                  height={300}
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

          <div className={styles.infos_content}>
            <div className={styles.infos}>
              <p className={styles.infos_name}>{category.name}</p>
              <p className={styles.infos_type}>{category.type} </p>
              <div className={styles.content}>
                <p className={styles.price_content}>€{category.price}</p>
              </div>
            </div>
            <span>
              <PortableText value={category.content} />
            </span>
            <div className={styles.categoriespages_link}>
              <Link
                href={`/categories/${category.slug}`}
                className="link_items"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPages;
