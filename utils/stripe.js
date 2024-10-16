import { loadStripe } from "@stripe/stripe-js";

console.log("Stripe API Key:", process.env.NEXT_PUBLIC_STRIPE_API_KEY); // Vérifiez la clé API

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);
