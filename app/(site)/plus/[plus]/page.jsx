import { getDataPlus } from "@/sanity/lib/client";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";

// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const PlusDetails = async ({ params }) => {
  const slug = params.plus;
  console.log("Slug:", slug);
  console.log("params:", params);
  const data = await getDataPlus(slug);
  console.log("Data de plus !!!!!", data);
  return (
    <>
      {data ? (
        <div className={styles.plusDetails__container}>
          <div className={styles.plusDetails__content}>
            <div className={styles.plusDetails__title}>
              <h1>{data.name}</h1>
            </div>

            <div className={styles.gallery__container}>
              <div className={styles.gallery__content}>
                <ImageGallery images={data.images} />

                <div className={styles.products__content}>
                  <div className={styles.products__infos}>
                    <span>
                      <p>{data.type}</p>
                    </span>
                    <div className={styles.productsPrice}>
                      <span>
                        <p className={styles.products__price}>
                          {data.price.toFixed(2)}€
                        </p>
                      </span>
                      <p className={styles.products__text}>{data.body}</p>
                      <br />
                      <span>
                        <p>2-4 Day Shipping</p>
                      </span>
                      <span className={styles.refProducts_categories}>
                        REF: {data._id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btns_products}>
              <Button text="Ajouter au panier" className={styles.addToBagBtn} />
              <Button
                text="Commander maintenant"
                className={styles.checkoutNowBtn}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default PlusDetails;
