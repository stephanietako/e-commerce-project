import { getData } from "@/sanity/lib/client";
import { getDataAccessoires } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
// Styles
import styles from "./styles.module.scss";
import CarouselBeLike from "../../components/CarouselBeLike/CarouselBeLike";

export const dynamic = "force-dynamic";

const CategoryDetails = async ({ params }) => {
  const slug = params.category;
  const data = await getData(slug);
  const accessoires = await getDataAccessoires();

  return (
    <>
      {data ? (
        <div className={styles.categoryDetails__container}>
          <div className={styles.categoryDetails__content}>
            <div className={styles.categoryDetails__title}>
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
                  <div className={styles.btns_products}>
                    <Button
                      text="Ajouter au panier"
                      className={styles.addToBagBtn}
                    />
                    <Button
                      text="Commander maintenant"
                      className={styles.checkoutNowBtn}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}

      <div
        className={styles.carouselBelike_box}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <CarouselBeLike accessoires={accessoires} />
      </div>
    </>
  );
};

export default CategoryDetails;
