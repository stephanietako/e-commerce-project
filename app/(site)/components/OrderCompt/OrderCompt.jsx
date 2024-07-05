"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { getOrdersByEmail } from "@/sanity/order-utils";

const OrderCompt = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const fetchedOrders = await getOrdersByEmail(session.user.email);
          setOrders(fetchedOrders);
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
        <div className={styles.boxone}>
          <h1 className={styles.boxtone_header}>Vos Achats</h1>

          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Produit</th>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Quantité</th>
                <th className={styles.th}>Payé</th>
                <th className={styles.th}>Statut</th>
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
                  <td className={styles.td}>{order.qty}</td>
                  <td className={styles.td}>
                    {order.paid ? (
                      <span className={styles.paid}>Montant payé</span>
                    ) : (
                      <span className={styles.not_paid}>Montant non payé</span>
                    )}
                  </td>
                  <td className={styles.td}>
                    {order.delivered ? (
                      <span className={styles.delivered}>Livré</span>
                    ) : (
                      <span className={styles.intransit}>
                        Livraison en cours
                      </span>
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
