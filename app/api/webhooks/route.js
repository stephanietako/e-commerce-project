import { NextResponse } from "next/server";
import Stripe from "stripe";

const payment_intent_succeeded = "payment_intent.succeeded";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const reqBody = await req.text();
  const sign = req.headers.get("stripe_signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (!sign || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sign, webhookSecret);
  } catch (error) {
    console.log("Payment failed", error);
    return new NextResponse(`Webhook error: ${error.message}`, { status: 500 });
  }

  // load our event
  switch (event.type) {
    case payment_intent_succeeded:
      const session = event.data.object;
      console.log("SESSION !!!!!", session);
      // create order
      return NextResponse.json("Order Successful", {
        status: 200,
        statusText: "Order Successful",
      });
    // console.log("PaymentIntent was successful!");
    //   break;
    // case "payment_method.attached":
    //   const paymentMethod = event.data.object;
    //   console.log("PaymentMethod was attached to a Customer!");
    //   break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  // Return a response to acknowledge receipt of the event
  // response.json({ received: true });
  return NextResponse.json("Event Received", {
    status: 200,
    statusText: "Event Received",
  });
}
