"use client";

import React, { useState, useEffect } from "react";
import { getDataStar } from "@/sanity/lib/client";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
import { toast } from "react-hot-toast";
import useCartStore from "@/cartStore";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const StarDetails = ({ params }) => {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart); // Utiliser le store du panier

  useEffect(() => {
    const fetchData = async () => {
      const slug = params.star;
      const fetchedData = await getDataStar(slug);
      setData(fetchedData);
    };

    fetchData();
  }, [params.star]);

  const handleQuantityChange = (event) => {
    const qty = Math.max(0, Number(event.target.value));
    setQuantity(qty);
  };

  const handleAddToCart = () => {
    if (data) {
      addToCart({ product: data, quantity: quantity });
      toast.success("Added to cart");
    }
  };

  if (!data) {
    return <p>Not found</p>;
  }

  return (
    <div className={styles.starDetails__container}>
      <div className={styles.starDetails__content}>
        <div className={styles.starDetails__title}>
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
                    flexDirection: "column",
                  }}
                >
                  <label>Quantité</label>
                  <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{
                      cursor: "pointer",
                      width: "4rem",
                      height: "2rem",
                      borderRadius: "10px",
                      padding: "4px",
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
            className={styles.addToBagBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default StarDetails;
