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

// export default OrderCompt;
// import React, { useEffect, useState } from "react";
// import { useSession } from "next-auth/react"; // Importer useSession depuis next-auth/react
// import styles from "./styles.module.scss";
// import { getOrdersByEmail } from "@/sanity/order-util"; // Assurez-vous d'avoir le chemin correct pour getOrdersByEmail

// const OrderCompt = () => {
//   const { data: session, status } = useSession(); // Utiliser useSession pour obtenir l'état de la session
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (session?.user?.email) {
//         try {
//           const fetchedOrders = await getOrdersByEmail(session.user.email); // Utiliser session.user.email pour récupérer les commandes par email
//           setOrders(fetchedOrders);
//         } catch (error) {
//           console.error("Error fetching orders:", error);
//           setOrders([]); // Gérer les erreurs de manière appropriée
//         }
//       }
//     };

//     fetchOrders();
//   }, [session]); // Exécuter useEffect à chaque changement de session

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return <div>Not logged in</div>;
//   }

//   return (
//     <>
//       <div className={styles.orderCompt_container}>
//         <div className={styles.boxone}>
//           <h1 className={styles.boxtone_header}>Vos Achats</h1>
//           <table className={styles.table}>
//             <thead>
//               <tr className={styles.tr}>
//                 <th className={styles.th}>Product</th>
//                 <th className={styles.th}>Quantity</th>
//                 <th className={styles.th}>Paid</th>
//                 <th className={styles.th}>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id} className={styles.tr}>
//                   <td className={styles.td}>
//                     <span> {order.name}</span>
//                   </td>
//                   <td className={styles.td}>{order.quantity}</td>
//                   <td className={`${styles.td} ${styles.paid}`}>
//                     {order.price}€
//                   </td>
//                   <td className={styles.td}>
//                     {order.delivered ? (
//                       <span className="text-green-500">Delivered</span>
//                     ) : (
//                       <span className="text-red-500">In transit</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderCompt;
