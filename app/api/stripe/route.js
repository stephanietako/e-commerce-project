import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export async function POST(req) {
  try {
    const { data } = await req.json();

    // Vérifier la présence et la validité des données
    if (!data || !data.amount) {
      return NextResponse.json({ status: 400, message: "Invalid data format" });
    }

    const { amount } = data;

    // Créer une intention de paiement avec Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: "EUR",
    });

    // Récupérer le client_secret de l'intention de paiement
    const clientSecret = paymentIntent.client_secret;

    // Retourner la réponse avec le client_secret
    return NextResponse.json({
      intent: clientSecret,
      status: 200,
    });
  } catch (error) {
    // En cas d'erreur, retourner une réponse d'erreur
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
