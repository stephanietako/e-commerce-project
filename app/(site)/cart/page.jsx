// "use client";
// import React from "react";
// import CartCompt from "../components/CartCompt/CartCompt";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const Cart = () => {
//   const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
//   );
//   console.log("STRIPEPROMISE", stripePromise);
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//         <CartCompt />
//       </Elements>
//     </div>
//   );
// };

// export default Cart;

"use client";
import React from "react";
import CartCompt from "../components/CartCompt/CartCompt";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Chargez votre clé publique Stripe une seule fois
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CartCompt />
      </Elements>
    </div>
  );
};

export default Cart;
