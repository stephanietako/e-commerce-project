import React from "react";
// Styles
import styles from "./styles.module.scss";
const OrderCompt = () => {
  const products = [
    { id: 1, name: "Product 1", quantity: 2, paid: 18, status: "in transit" },
    { id: 2, name: "Product 1", quantity: 1, paid: 18, status: "delivered" },
  ];
  return (
    <>
      <div className={styles.orderCompt_container}>
        <div className={styles.boxone}>
          <h1 className={styles.boxtone_header}>Vos Achats</h1>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Product</th>
                <th className={styles.th}>Quantity</th>
                <th className={styles.th}>Paid</th>
                <th className={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={styles.tr}>
                  <td className={styles.td}>
                    <span> {product.name}</span>
                  </td>
                  <td className={styles.td}>{product.quantity}</td>
                  <td className={`${styles.td} ${styles.paid}`}>
                    {product.paid}€
                  </td>
                  <td className={styles.td}>{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderCompt;
