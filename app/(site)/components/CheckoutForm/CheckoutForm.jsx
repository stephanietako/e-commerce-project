// components/CheckoutForm.js
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const amount = 1000; // Montant en cents

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.message || "An error occurred");
      }

      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded:", result.paymentIntent);
        }
      }
    } catch (err) {
      console.error("Error during payment:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;
