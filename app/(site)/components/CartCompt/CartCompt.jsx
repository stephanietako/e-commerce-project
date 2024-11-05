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
        throw new Error("Stripe.js has not loaded yet.");
      }

      // Obtenir l'élément de la carte
      const cardElement = elements.getElement(CardElement);

      // Remplacez cartTotal par la valeur réelle que vous souhaitez envoyer
      //const cartTotal = 100; // Exemple de total du panier

      // Envoyer la requête à l'API /api/stripe
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { amount: cartTotal.toFixed(0) },
        }),
      });

      // Vérifier si la requête a réussi
      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la création de l'intention de paiement."
        );
      }

      // Analyser la réponse JSON
      const data = await response.json();

      // Confirmer le paiement avec Stripe
      const res = await stripe.confirmCardPayment(data.intent, {
        payment_method: {
          card: cardElement,
        },
      });

      const status = res?.paymentIntent?.status;
      console.log(status);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const onSubmit = async (e) => {
  //   const cardElement = elements.getElement(CardElement);
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     if (!stripe || !elements) {
  //       return;
  //     }
  //     // const cardElement = elements.getElement(CardElement);
  //     //const cartTotal = 100; // Exemple de total du panier

  //     const response = await fetch("/api/stripe", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         data: { amount: cartTotal.toFixed(0) },
  //       }),
  //     });

  //     // Vérifier si la requête a réussi
  //     if (!response.ok) {
  //       throw new Error(
  //         "Une erreur est survenue lors de la création de l'intention de paiement."
  //       );
  //     }
  //     const res = await stripe.confirmCardPayment(data?.data?.intent, {
  //       payment_method: {
  //         card: cardElement,
  //       },
  //     });

  //     const status = res?.paymentIntent?.status;
  //     console.log(status);
  //     // Analyser la réponse JSON
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

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
        <div
          className={styles.payement}
          style={{ background: "#f2f2f2", padding: "1rem" }}
        >
          {cartTotal > 0 && (
            <>
              <CardElement />
            </>
          )}
        </div>
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
