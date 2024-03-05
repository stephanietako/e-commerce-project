// api.js
//import { getCategory, getData } from "@/sanity/lib/client";
import sanityClient from "./sanity";
import { groq } from "next-sanity";
//import { getProductsByCategories } from "@/sanity/lib/client";
// import { getCategories } from "@/sanity/lib/client";
export async function fetchDataCategory() {
  return await sanityClient.fetch(
    groq` *[_type == "category"] {
   _id,
       _createdAt,
   name,
      price,
     currency,
      "coverImages": images[0].asset->url,
   "products": *[_type == 'product' && references(^._id)][0...15] | order(_createdAt desc) {
     _id,
     price,
     currency,
     name,
     "slug": slug.current,
     "images": images[0].asset->url,
     content,
   }
 }`,
    {
      cache: "no-cache",
    }
  );
}

export async function fetchDataProduct() {
  return await sanityClient.fetch(
    groq`*[_type == "product"] {
  _id,
      _createdAt,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content,
  "categories": *[_type == 'category' && references(^._id)][0...15] | order(_createdAt desc) {
    _id,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
    "categories": categories[0]->name,
  }
}`,
    {
      cache: "no-cache",
    }
  );
}
