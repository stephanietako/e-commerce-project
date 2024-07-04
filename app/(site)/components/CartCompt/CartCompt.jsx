"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styles from "./styles.module.scss";
// Import des fonctions de commande
import { createOrder } from "@/sanity/order-utils";

const CartCompt = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [loading, setLoading] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const { data: session, status } = useSession();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  console.log(cart);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const onSubmit = async (event) => {
    console.log("Bouton 'Acheter maintenant' cliqué");
    event.preventDefault();

    if (status === "loading") {
      return toast.error("Chargement...");
    }

    if (!session) {
      return toast.error(
        "Vous devez être connecté pour effectuer un paiement."
      );
    }

    setLoading(true);

    try {
      console.log("Soumission du formulaire de paiement...");

      const { intent } = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { amount: cartTotal * 100 } }),
      }).then((res) => res.json());

      console.log("Client secret récupéré:", intent);

      const res = await stripe.confirmCardPayment(intent, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      const status = res?.paymentIntent?.status;
      if (status === "succeeded") {
        setLoading(false);
        console.log("success");
        const email = session.user?.email;
        const res = await createOrder(email, cart, session);
        console.log("email !!!!!!!:", session);

        console.log("cart !!!!!!!!:", cart);
        console.log("reponse!!!!!!!!:", res);
        if (res) {
          router.push("/order");
        }
      }

      /////////
    } catch (error) {
      console.error("Erreur lors du traitement du paiement:", error);
      toast.error("Échec du paiement");
    }
  };

  return (
    <div className={styles.cartCompt_container}>
      <div className={styles.boxone}>
        <h1 className={styles.boxtone_header}>{totalItems} items in Cart</h1>
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
                      alt="Product"
                      className="product__img"
                      width={70}
                      height={40}
                      style={{ objectFit: "contain" }}
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
                    onClick={() => handleRemoveFromCart(item._id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.total}>Total: {cartTotal.toFixed(2)}€</div>
        <div className={styles.credit_card__bloc}>
          {cartTotal > 0 && <CardElement />}
        </div>
        <div className={styles.btns_products}>
          {cartTotal > 0 && (
            <Button
              text={loading ? "Loading..." : "Acheter maintenant"}
              className={styles.checkoutNowBtn}
              onClick={onSubmit}
            />
          )}
          <Link href="/">
            <Button
              text="Continuer vos achats"
              className={styles.returnShopping}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCompt;
