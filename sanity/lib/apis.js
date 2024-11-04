import { client } from "./sanity";
import { groq } from "next-sanity";

export async function fetchData() {
  return await client.fetch(
    groq` *[_type == "category"] | order(_createdAt desc){
  _id,
      _createdAt,
  name,
  _type,
    type,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content,
             price,
    currency,
  "products": products[]{
_ref,
  "products": *[_type == 'product' && references(^._id)][0...50]  | order(_createdAt desc){
    _id,
    price,
    currency,
      _type,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
  }
  }
}`,
    {
      cache: "no-cache",
    }
  );
}
///////////
export async function fetchDataProduct() {
  return await client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc){
  _id,
      _createdAt,
  name,
    _type,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content,
            body,
  "categories": *[_type == 'category' && references(^._id)][0...20] | order(name asc) {
    _id,
    _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
   
}
}`,
    {
      cache: "no-cache",
    }
  );
}
//////////////////////////
export async function fetchDataSearchBarSlug(slug) {
  return await client.fetch(
    groq`*[_type in ["product", "category"] && defined(slug.current)]  {
  _id,
  _createdAt,
  name,
    _type,
  "slug": slug.current,
  "coverImages": images[0].asset->url,
       "images": images[0].asset->url,
  content,
  "body": pt::text(body),
    "ref": categories[]{
    _ref
  }     
    }`,
    { slug },
    {
      cache: "no-cache",
    }
  );
}
////////
export async function fetchDataSearchBar() {
  return await client.fetch(
    groq`*[_type in ['product', 'category'] && (
  _type match "product" + "*" || _type match "category" + "*"
) && !(_id in path('drafts.**'))] | order(name asc){
_id,
   _createdAt,
  _type,
  name,
  currency,
  price,
  content,
   "body": pt::text(body),
  "slug": slug.current,
  "coverImages": images[0].asset->url,
  "images": images[0].asset->url,
  content,
   "refprod": products[] {
    _ref,
    "refcat": categories[] {
      _ref
    }
}

}`,
    {
      cache: "no-cache",
    }
  );
}

/////////////:
// export async function getOrdersByEmail(email) {
//   try {
//     // Query orders from Sanity with a GROQ query
//     const orders = await client.fetch(
//       groq`*[_type == 'order' && email == $email] | order(createdAt desc)`,
//       { email },
//       {
//         next: {
//           revalidate: 1, //revalidate every 30 days
//         },
//       }
//     );

//     // Return the sorted orders
//     return orders;
//   } catch (error) {
//     // Handle errors appropriately
//     console.error("Error getting orders:", error.message);
//     throw new Error("Failed to get orders");
//   }
// }
// export async function createOrder(email, cart) {
//   try {
//     const createdOrders = await Promise.all(
//       cart.map(async (orderData) => {
//         const { name, quantity, price } = orderData;

//         const createdOrder = await client.create({
//           _type: "order",
//           name,
//           qty: quantity,
//           price,
//           paid: true,
//           delivered: false,
//           email: email,
//           createdAt: new Date().toISOString(),
//         });

//         return createdOrder;
//       })
//     );

//     return createdOrders;
//   } catch (error) {
//     console.error("Error creating order:", error.message);
//     throw new Error("Failed to create order");
//   }
// }
