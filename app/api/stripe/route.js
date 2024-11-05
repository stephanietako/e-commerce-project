import { NextResponse } from "next/server";
import Stripe from "stripe";
// ce fichier définit une route API dans Next.js qui interagit avec l'API Stripe pour créer une intention de paiement
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { data } = await req.json();
  const { amount } = data;
  console.log(amount);
  try {
    // Créer une intention de paiement avec Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Montant en cents
      currency: "eur", // Devise
    });
    return NextResponse.json({
      intent: paymentIntent.client_secret,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ status: 400 });
  }
}
