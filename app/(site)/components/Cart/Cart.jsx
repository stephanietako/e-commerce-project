"use client";

import { useState } from "react";
import useCartStore from "@/cartStore";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";
import styles from "./styles.module.scss";

const Cart = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ product: data, quantity: quantity });
    toast.success("Added to cart");
  };

  return (
    <div className={styles.products__content}>
      <ImageGallery images={data.images} />
      <div className={styles.products__infos}>
        <span>
          <p>{data.type}</p>
        </span>
        <span>
          <p className={styles.products__price}>{data.price.toFixed(2)}€</p>
        </span>
        <div className={styles.products__quantity}>
          <label>Quantité</label>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setQuantity(value);
            }}
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
          <p>Livraison 2 à 4 jours</p>
        </span>
        <span className={styles.refProducts_categories}>REF: {data._id}</span>

        <div className={styles.btns_products}>
          <span id={styles.add_to_cart}>
            <Button text="Ajouter au panier" onClick={handleAddToCart} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
