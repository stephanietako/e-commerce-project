"use client";

import { useState } from "react";
import useCartStore from "@/cartStore";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
import CarouselBeLike from "../CarouselBeLike/CarouselBeLike";
import { toast } from "react-hot-toast";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const Details = ({ data, minipalms }) => {
  console.log("Details minipalms:", minipalms);
  console.log("data:", data);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ product: data, quantity: quantity });
    toast.success("Added to cart");
  };

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
                <div
                  className={styles.products__quantity}
                  style={{
                    display: "flex",
                    width: "4rem",
                    height: "auto",
                    flexDirection: "column",
                  }}
                >
                  <label>Quantité</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
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
        <div className={styles.btns_products}>
          <Button
            text="Ajouter au panier"
            onClick={handleAddToCart}
            className={styles.addToCartBtn}
            style={{
              cursor: "pointer",
            }}
          />
          <Button
            text="Commander maintenant"
            className={styles.checkoutNowBtn}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className={styles.carouselBelike_container}>
        <div className={styles.carouselBelike_box}>
          <CarouselBeLike minipalms={minipalms} />
        </div>
      </div>
    </div>
  );
};

export default Details;
