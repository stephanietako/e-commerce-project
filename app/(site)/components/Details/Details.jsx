"use client";

import Cart from "../Cart/Cart";
import CarouselBeLike from "../CarouselBeLike/CarouselBeLike";
//Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const Details = ({ data, minipalms }) => {
  if (!data) {
    return <p>Not found</p>;
  }

  return (
    <div className={styles.categoryDetails__container}>
      <div className={styles.categoryDetails__content}>
        <div className={styles.categoryDetails__title}>
          <h1>{data.name}</h1>
        </div>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__content}>
            <Cart data={data} />
          </div>
        </div>
      </div>
      <div className={styles.carouselBelike_container}>
        <CarouselBeLike minipalms={minipalms} />
      </div>
    </div>
  );
};

export default Details;
