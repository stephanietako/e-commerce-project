"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

// Styles
import styles from "./styles.module.scss";

const CartCompt = ({ onClose }) => {
  const router = useRouter();
  // console.log(cart);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // Stripe
  const stripe = useStripe();
  const elements = useElements();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!stripe || !elements) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  ///////////
  // const handleCheckoutClick = async (event) => {
  //   console.log("Bouton 'Acheter maintenant' cliqué");
  //   event.preventDefault();
  //   router.push("/order");
  // };
  const handleReturn = async (event) => {
    console.log("Bouton 'Retour' cliqué");
    event.preventDefault();
    onClose(); // Close the modal
    router.push("/");
  };

  return (
    <div className={styles.cartCompt_container}>
      <div className={styles.box_one}>
        {totalItems === 0 ? (
          <h3>Vous n&apos;avez aucun article dans votre panier</h3>
        ) : (
          <h3 className={styles.box_one_header}>
            {totalItems} est le nombre d&apos;article dans votre panier
          </h3>
        )}

        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Product</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item?._id} className={styles.tr}>
                <td className={styles.td}>
                  {item.coverImages ? (
                    <Image
                      src={item?.coverImages}
                      alt="illustration du produit"
                      className="product__img"
                      width={90}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <span className={styles.product_name}>{item?.name}</span>
                </td>
                <td className={styles.td}>{item?.quantity}</td>
                <td className={`${styles.td} ${styles.price}`}>
                  {item?.price}€
                </td>
                <td className={styles.td}>
                  <FaTrash
                    onClick={() => handleRemoveFromCart(item?._id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Total session */}
        <div className={styles.total}>Total: {cartTotal.toFixed(2)}€</div>

        {cartTotal > 0 && (
          <>
            <CardElement />
          </>
        )}

        <div className={styles.btns}>
          {cartTotal > 0 && (
            <>
              <Button onClick={onSubmit} text="CHECKOUT">
                {loading ? "Loading..." : "CHECKOUT"}
              </Button>
            </>
          )}
          <Button
            onClick={handleReturn}
            text="Continuer vos achats"
            className={styles.returnShopping}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCompt;
