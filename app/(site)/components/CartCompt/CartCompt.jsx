"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
// import { urlFor } from "@/sanity/lib/sanity";
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
    removeFromCart(productId);
  };
  // const product = [
  //   {
  //     id: 1,
  //     name: "Gandalf",
  //     price: 18,
  //     image: "/assets/background.webp",
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Charas",
  //     price: 18,
  //     image: "/assets/background.webp",
  //     quantity: 2,
  //   },
  // ];

  // const total = product.reduce((a, b) => a + b.price * b.quantity, 0);
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
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>
                    <span>
                      {" "}
                      <Image
                        //src={urlFor(item.image).url()}
                        src={item.image}
                        alt="les fleurs"
                        className="product__img"
                        width={50}
                        height={50}
                        style={{
                          display: "block",
                          objectFit: "contain",
                        }}
                      />
                    </span>
                    <span> {item.name}</span>
                  </td>
                  <td className={styles.td}>{item.quantity}</td>
                  <td className={`${styles.td} ${styles.price}`}>
                    {item.price}€
                  </td>

                  <td className={styles.td}>
                    <FaTrash />
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
            <Button
              text="Continuer vos achats"
              className={styles.returnShopping}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCompt;
