// pages/api/create-payment-intent.js
import Stripe from "stripe";

// Assurez-vous d'installer la bibliothèque Stripe
// npm install stripe

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY); // Initialiser Stripe avec votre clé API

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Vérifier si la méthode de requête est POST
    const { amount } = req.body; // Extraire le montant du corps de la requête

    try {
      // Créer une intention de paiement avec Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // Montant en cents
        currency: "eur", // Devise
      });

      // Renvoyer la réponse avec l'intention de paiement
      res.status(200).json({ intent: paymentIntent });
    } catch (error) {
      // Gérer les erreurs et renvoyer un message d'erreur
      res.status(500).json({ error: error.message });
    }
  } else {
    // Gérer les méthodes non autorisées
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
