"use client";

import { FaTrash } from "react-icons/fa";
//import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
import { useRouter } from "next/navigation";
// Styles
import styles from "./styles.module.scss";

const CartCompt = ({ onClose }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);

  const router = useRouter();

  // console.log(cart);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  const handleCheckoutClick = async (event) => {
    console.log("Bouton 'Acheter maintenant' cliqué");
    event.preventDefault();
  };
  const handleReturn = async (event) => {
    console.log("Bouton 'Retour' cliqué");
    event.preventDefault();
    onClose(); // Close the modal
    router.push("/");
  };
  return (
    <div className={styles.cartCompt_container}>
      <div className={styles.boxone}>
        {totalItems === 0 ? (
          <h3>Vous n&apos;avez aucun article dans votre panier</h3>
        ) : (
          <h3 className={styles.boxtone_header}>
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

        <div className={styles.btns}>
          <Button text="CHECKOUT" onClick={handleCheckoutClick} />
        </div>

        <Button
          onClick={handleReturn}
          text="Continuer vos achats"
          className={styles.returnShopping}
        />
      </div>
    </div>
  );
};

export default CartCompt;
