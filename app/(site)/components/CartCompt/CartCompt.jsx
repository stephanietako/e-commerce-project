"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
//import { urlFor } from "@/sanity/lib/sanity";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
// Styles
import styles from "./styles.module.scss";

const CartCompt = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);

  const handleRemoveFromCart = (productId) => {
    console.log("Removing product with ID:", productId);
    removeFromCart(productId);
  };

  return (
    <>
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
              {cart.map((item) => (
                <tr key={item._id} className={styles.tr}>
                  <td className={styles.td}>
                    {item.coverImages ? (
                      <Image
                        src={item.coverImages}
                        alt="les fleurs"
                        className="product__img"
                        width={70}
                        height={40}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                    <span className={styles.product_name}> {item.name}</span>
                  </td>
                  <td className={styles.td}>{item.quantity}</td>
                  <td className={`${styles.td} ${styles.price}`}>
                    {item.price}€
                  </td>
                  <td className={styles.td}>
                    <FaTrash
                      onClick={() => {
                        handleRemoveFromCart(item._id);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.bottom_bar}></div>{" "}
          {/* Ajout de la barre grise */}
          <div className={styles.total}>Total: {cartTotal.toFixed(2)}€</div>
          <div className={styles.btns_products}>
            <Button
              text="Acheter maintenant"
              className={styles.checkoutNowBtn}
            />
            <Link className="" href="/">
              <Button
                text="Continuer vos achats"
                className={styles.returnShopping}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCompt;
