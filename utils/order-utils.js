import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
  apiVersion: "2023-05-03",
});

export async function getOrdersByEmail(email) {
  try {
    const orders = await client.fetch(
      groq`*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email },
      {
        next: {
          revalidate: 1, //revalidate every 30 days
        },
      }
    );

    // Return the sorted orders
    return orders;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error getting orders:", error.message);
    throw new Error("Failed to get orders");
  }
}
export async function createOrder(email, cart) {
  try {
    const createdOrders = await Promise.all(
      cart.map(async (orderData) => {
        const { name, quantity, price } = orderData;

        const createdOrder = await client.create({
          _type: "order",
          name,
          qty: quantity,
          price,
          paid: true,
          delivered: false,
          email: email,
          createdAt: new Date().toISOString(),
        });

        return createdOrder;
      })
    );

    return createdOrders;
  } catch (error) {
    console.error("Error creating order:", error.message);
    throw new Error("Failed to create order");
  }
}
