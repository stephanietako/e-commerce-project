import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

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
      amount: Number(amount) * 100, // Montant en centimes (EUR)
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
