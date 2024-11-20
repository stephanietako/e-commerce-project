import { getOrdersByEmail, createOrder } from "../../../utils/order-utils"; // Importer la logique depuis utils/order-utils

// Cette fonction gère les requêtes GET et POST
export async function GET(req) {
  // Récupérer l'email depuis les paramètres de la requête
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response("Email is required", { status: 400 });
  }

  try {
    const orders = await getOrdersByEmail(email);
    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to fetch orders: " + error.message, {
      status: 500,
    });
  }
}

export async function POST(req) {
  const { email, cart } = await req.json();

  if (!email || !cart || !Array.isArray(cart)) {
    return new Response("Invalid request data", { status: 400 });
  }

  try {
    const createdOrders = await createOrder(email, cart);
    return new Response(JSON.stringify(createdOrders), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to create orders: " + error.message, {
      status: 500,
    });
  }
}
