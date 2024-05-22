import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const ProductsPages = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // Ajouter une vérification de sécurité
  }

  return (
    <div className={styles.container_productspages}>
      <div className={styles.productspages__header}>
        <header className={styles.__header}>
          <div className={styles.productspages__title}>
            <h1>{product.name}</h1>
          </div>
        </header>
      </div>
      <div className={styles.productspages__section}>
        <div className={styles.productspages__bloc}>
          <div className={styles.productspages_display__categories}>
            <ul className={styles.productspages_display__content}>
              {product.categories.map((category) => (
                <li
                  key={category._id}
                  className={styles.list_display__categories}
                >
                  <Link href={`/categories/${category.slug}`} className="link">
                    <div
                      className="images"
                      style={{
                        display: "flex",
                        width: "auto",
                        height: "auto",
                        justifyContent: "center",
                        padding: "0.5rem",
                        flexDirection: "column",
                      }}
                    >
                      {category.coverImages ? (
                        <Image
                          src={category.coverImages}
                          alt={`Image de ${category.name}`}
                          className="product__img"
                          width={350}
                          height={220}
                          style={{
                            objectFit: "cover",
                            borderRadius: "17px",
                          }}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                      <div className={styles.__infos}>
                        <h3>{category.name}</h3>
                        <p>A partir de...</p>
                        <p
                          className="price_content"
                          style={{
                            fontSize: "1rem",
                          }}
                        >
                          {category.price.toFixed(2)}€
                        </p>
                        <span className="ref_products_categories">
                          <p
                            style={{
                              color: "gray",
                              fontSize: "8px",
                            }}
                          >
                            REF: {category._id}
                          </p>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPages;
