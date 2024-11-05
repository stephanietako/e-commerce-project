"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createOrder } from "@/utils/order-utils";
import toast from "react-hot-toast";
// Styles
import styles from "./styles.module.scss";

const CartCompt = ({ onClose }) => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const stripe = useStripe();
  const elements = useElements();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Vérifier si l'utilisateur est connecté
    if (!session.user.email) {
      setLoading(false);
      toast.error("Vous devez être connecté pour effectuer un paiement.");
      return; // Sortir de la fonction si l'utilisateur n'est pas connecté
    }

    try {
      if (!stripe || !elements) {
        throw new Error("Stripe.js has not loaded yet.");
      }

      // Obtenir l'élément de la carte
      const cardElement = elements.getElement(CardElement);

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

      if (status === "succeeded") {
        console.log("success");
        toast.success("Paiement reussi");
        const email = session.user.email;
        console.log("email dans cartcompt:", email);

        //const orderResponse = await createOrder(email, cart);
        if (session.user.email) {
          const orderResponse = await createOrder(email, cart);
          console.log("Réponse de la création de commande :", orderResponse);
          if (session.user.email) {
            router.push("/order");
          }
        }
        console.log(
          "Contenu du panier avant la création de la commande :",
          cart
        );

        //console.log(" IF ORDER-RESPONSE PUSH !!!!!!!!:", orderResponse);

        // if (orderResponse) {
        //   router.push("/order");
        // } else {
        //   throw new Error("Order creation failed");
        // }
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors du paiement.");
    } finally {
      setLoading(false);
    }
  };

  const handleReturn = async (event) => {
    console.log("Bouton 'Retour' cliqué");
    event.preventDefault();
    onClose(); // Fermer la modal
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
