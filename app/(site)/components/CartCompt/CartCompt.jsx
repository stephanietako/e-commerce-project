import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button/Button";
import useCartStore from "@/cartStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { createOrder } from "@/sanity/order-utils";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styles from "./styles.module.scss";

const CartCompt = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [loading, setLoading] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const { data: session, status } = useSession(); // Utilisation de useSession pour récupérer la session utilisateur
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  console.log(cart);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Fonction pour gérer la soumission du formulaire de paiement
  const onSubmit = async (event) => {
    event.preventDefault();

    // Vérification de la session utilisateur avant de permettre le paiement
    if (status === "loading") {
      return <p>Chargement...</p>;
    }

    if (!session) {
      return <p>Vous devez être connecté pour accéder à cette page.</p>;
    }

    try {
      // Récupérez `clientSecret` de votre backend, assurez-vous qu'il est correctement défini
      const { intent } = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { amount: cartTotal * 100 } }), // Envoyez le montant total du panier au backend
      }).then((res) => res.json());

      // Assurez-vous que `intent` contient bien le client_secret
      console.log(intent);

      // Utilisez `clientSecret` pour confirmer le paiement
      const { error } = await stripe.confirmCardPayment(intent, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // Ajoutez des détails de facturation si nécessaire
          },
        },
      });

      if (error) {
        console.error("Erreur de paiement:", error.message);
        // Gérez l'erreur de paiement
      } else {
        console.log("Paiement réussi!");
        // Traitez le paiement réussi
      }
    } catch (error) {
      console.error("Erreur lors du traitement du paiement:", error);
      // Gérez les erreurs générales du traitement du paiement
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
                      alt="les fleurs"
                      className="product__img"
                      width={70}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <span className={styles.product_name}> {item?.name}</span>
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
        <div className={styles.bottom_bar}></div>
        <div className={styles.total}>Total: {cartTotal.toFixed(2)}€</div>
        <div className={styles.credit_card__bloc}>
          {cartTotal > 0 && <CardElement />}
        </div>
        <div className={styles.btns_products}>
          {cartTotal > 0 && (
            <Button
              text="Acheter maintenant"
              className={styles.checkoutNowBtn}
              onClick={onSubmit}
            >
              {loading ? "Loading..." : "Acheter maintenant"}
            </Button>
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

// "use client";
// import React, { useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import { toast } from "react-hot-toast";
// import Link from "next/link";
// import Image from "next/image";
// import Button from "../../components/Button/Button";
// import useCartStore from "@/cartStore";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// // Styles
// import styles from "./styles.module.scss";
// import { createOrder } from "@/sanity/order-utils";

// const CartCompt = () => {
//   const { data: session } = useSession();
//   const cart = useCartStore((state) => state.cart);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const totalItems = useCartStore((state) => state.totalItems);
//   const cartTotal = useCartStore((state) => state.cartTotal);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleRemoveFromCart = (productId) => {
//     console.log("Removing product with ID:", productId);
//     removeFromCart(productId);
//   };

//   const onSubmit = async () => {
//     const cardElement = elements?.getElement(CardElement);
//     setLoading(true);

//     try {
//       if (!stripe || !cardElement) return;

//       const response = await fetch("/api/stripe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: cartTotal.toFixed(0) }), // Ensure cartTotal is defined
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();

//       if (!data.intent) {
//         throw new Error("Payment intent not received");
//       }

//       const res = await stripe.confirmCardPayment(data.intent, {
//         payment_method: { card: cardElement },
//       });

//       const status = res?.paymentIntent?.status;
//       if (status === "succeeded") {
//         setLoading(false);
//         toast.success("Payment Successful");
//         const email = session?.user?.email;

//         if (email) {
//           const orderRes = await createOrder(email, cart);
//           if (orderRes) {
//             router.push("/order");
//           }
//         }
//       } else {
//         setLoading(false);
//         toast.error("Payment Failed");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       toast.error("Payment Failed");
//     }
//   };

//   if (!session) {
//     return <p>Please sign in to proceed with the payment</p>;
//   }

//   return (
//     <div className={styles.cartCompt_container}>
//       <div className={styles.boxone}>
//         <h1 className={styles.boxtone_header}>{totalItems} items in Cart</h1>
//         <table className={styles.table}>
//           <thead>
//             <tr className={styles.tr}>
//               <th className={styles.th}>Product</th>
//               <th className={styles.th}>Quantity</th>
//               <th className={styles.th}>Price</th>
//               <th className={styles.th}>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item._id} className={styles.tr}>
//                 <td className={styles.td}>
//                   {item.coverImages ? (
//                     <Image
//                       src={item.coverImages}
//                       alt="les fleurs"
//                       className="product__img"
//                       width={70}
//                       height={40}
//                       style={{ objectFit: "contain" }}
//                     />
//                   ) : (
//                     <p>No image available</p>
//                   )}
//                   <span className={styles.product_name}>{item.name}</span>
//                 </td>
//                 <td className={styles.td}>{item.quantity}</td>
//                 <td className={`${styles.td} ${styles.price}`}>
//                   {item.price}€
//                 </td>
//                 <td className={styles.td}>
//                   <FaTrash
//                     onClick={() => handleRemoveFromCart(item._id)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className={styles.bottom_bar}></div>
//         <div className={styles.total}>Total: {cartTotal.toFixed(2)}€</div>
//         <div className={styles.credit_card__bloc}>
//           {cartTotal > 0 && <CardElement />}
//         </div>
//         <div className={styles.btns_products}>
//           {cartTotal > 0 && (
//             <Button
//               text="Acheter maintenant"
//               className={styles.checkoutNowBtn}
//               onClick={onSubmit}
//             >
//               {loading ? "Loading..." : "Acheter maintenant"}
//             </Button>
//           )}
//           <Link href="/">
//             <Button
//               text="Continuer vos achats"
//               className={styles.returnShopping}
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartCompt;
