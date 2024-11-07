"use client";

import React, { useState, useEffect } from "react";
import { getDataPlus } from "@/sanity/lib/client";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
import { toast } from "react-hot-toast";
import useCartStore from "@/cartStore";
// Style
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const PlusDetails = ({ params }) => {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchData = async () => {
      const slug = params.plus;
      const fetchedData = await getDataPlus(slug);
      setData(fetchedData);
    };

    fetchData();
  }, [params.plus]);

  const handleQuantityChange = (event) => {
    const qty = Math.max(0, Number(event.target.value));
    setQuantity(qty); // Assurer que la quantité ne soit pas négative
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
                <span>
                  <p className={styles.products__price}>
                    {(data.price * quantity).toFixed(2)}€
                  </p>
                </span>
                <div className={styles.products__quantity}>
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

export default PlusDetails;
