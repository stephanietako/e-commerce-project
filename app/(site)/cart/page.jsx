"use client";
import React from "react";
import CartCompt from "../components/CartCompt/CartCompt";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const Cart = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLICHABLE_KEY
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CartCompt />
      </Elements>
    </div>
  );
};

export default Cart;
