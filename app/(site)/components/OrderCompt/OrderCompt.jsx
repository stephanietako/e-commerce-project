"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Assurez-vous que cette importation est correcte
import styles from "./styles.module.scss";
import { getOrdersByEmail } from "@/sanity/lib/apis";

const OrderCompt = () => {
  const { data: session, status } = useSession(); // Utiliser useSession pour obtenir l'état de la session
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (session?.user?.email) {
        try {
          const fetchedOrders = await getOrdersByEmail(session.user.email); // Utiliser session.user.email pour récupérer les commandes par email
          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
          setOrders([]); // Gérer les erreurs de manière appropriée
        }
      }
    };

    fetchOrders();
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not logged in</div>;
  }

  return (
    <>
      <div className={styles.orderCompt_container}>
        <div className={styles.boxone}>
          <h1 className={styles.boxtone_header}>Vos Achats</h1>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Product</th>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Quantity</th>
                <th className={styles.th}>Paid</th>
                <th className={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className={styles.tr}>
                  <td className={styles.td}>
                    <span> {order.name}</span>
                  </td>
                  <td className={styles.td}>
                    <span> {order.email}</span>
                  </td>
                  <td className={styles.td}>{order.qty}</td>
                  <td className={`${styles.td} ${styles.paid}`}>
                    {order.price}€
                  </td>
                  <td className={styles.td}>
                    {order.delivered ? (
                      <span className="delivered">Delivered</span>
                    ) : (
                      <span className="intransit">In transit</span>
                    )}
                  </td>
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
