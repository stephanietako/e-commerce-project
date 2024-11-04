"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { getOrdersByEmail } from "@/utils/order-utils";

const OrderCompt = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const fetchedOrders = await getOrdersByEmail(session.user.email);

          // Vérification et traitement des valeurs NaN
          const ordersWithValidAmount = fetchedOrders.map((order) => ({
            ...order,
            amount: parseFloat(order.amount) || 0, // Convertit en nombre ou met 0 si NaN
          }));

          setOrders(ordersWithValidAmount);

          // Calculer le montant total
          const total = ordersWithValidAmount.reduce(
            (acc, order) => acc + order.price * order.quantity,
            0
          );
          setTotalAmount(total);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div className={styles.sign_in_for_order}>
        Veuillez vous connecter pour faire vos achats
      </div>
    );
  }

  return (
    <>
      <div className={styles.orderCompt_container}>
        <div className={styles.box_one_order}>
          <h1 className={styles.box_one_order__header}>Vos Achats</h1>
          <div className={styles.totalAmount}>
            Montant total des commandes : {totalAmount.toFixed(2)}€
          </div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Produit</th>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Quantité</th>
                <th className={styles.th}>Payé</th>
                <th className={styles.th}>Statut</th>
                <th className={styles.th}>Prix Total</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order._id} className={styles.tr}>
                  <td className={styles.td}>
                    <span>{order.name}</span>
                  </td>
                  <td className={styles.td}>
                    <span>{order.email}</span>
                  </td>
                  <td className={styles.td}>{order.quantity}</td>
                  <td className={styles.td}>
                    {order.paid ? (
                      <span className={styles.paid}>Montant payé</span>
                    ) : (
                      <span className={styles.not_paid}>Montant non payé</span>
                    )}
                  </td>
                  <td className={styles.td}>
                    {order.status ? (
                      <span className={styles.delivered}>Livré</span>
                    ) : (
                      <span className={styles.intransit}>
                        Livraison en cours
                      </span>
                    )}
                  </td>
                  <td className={styles.td}>
                    <span>{(order.price * order.quantity).toFixed(2)}€</span>
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
