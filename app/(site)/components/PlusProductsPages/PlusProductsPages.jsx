import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const PlusProductsPages = ({ plusproduct }) => {
  if (!plusproduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container_plusProductsPages}>
        <div className={styles.plusProductsPages__header}>
          <header className={styles.__header}>
            <div className={styles.plusProductsPages__title}>
              <h2>{plusproduct.name}</h2>
            </div>
          </header>
        </div>
        <div className={styles.plusProductsPages__section}>
          <div className={styles.plusProductsPages__bloc}>
            <div className={styles.plusProductsPages_display__plus}>
              <ul className={styles.plusProductsPages_display__content}>
                {plusproduct.plus.map((plus) => (
                  <li key={plus._id} className={styles.list_display__plus}>
                    <Link href={`/plus/${plus.slug}`} className="link">
                      <div
                        className="images"
                        style={{
                          display: "flex",
                          width: "20rem",
                          height: "auto",
                          justifyContent: "center",
                          padding: "0.5rem",
                          flexDirection: "column",
                        }}
                      >
                        {plus.coverImages ? (
                          <Image
                            src={plus.coverImages}
                            alt={`Image de ${plus.name}`}
                            className="product__img"
                            width={300}
                            height={200}
                            style={{
                              objectFit: "cover",
                              borderRadius: "12px",
                            }}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                        <div className={styles.__infos}>
                          <h3>{plus.name}</h3>
                          <p>A partir de...</p>
                          <p
                            className="price_content"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                            }}
                          >
                            {plus.price.toFixed(2)}€
                          </p>
                          <span className="ref_products_plus">
                            <p
                              style={{
                                color: "gray",
                                fontSize: "8px",
                              }}
                            >
                              REF: {plus._id}
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
    </>
  );
};

export default PlusProductsPages;
