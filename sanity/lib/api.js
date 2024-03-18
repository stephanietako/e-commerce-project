// api.js
//import { getCategory, getData } from "@/sanity/lib/client";
import sanityClient from "./sanity";
import { groq } from "next-sanity";
//import { getProductsByCategories } from "@/sanity/lib/client";
// import { getCategories } from "@/sanity/lib/client";
export async function fetchData() {
  return await sanityClient.fetch(
    groq` *[_type == "category"]| order(name asc){
  _id,
      _createdAt,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content,
  "products": *[_type == 'product' && references(^._id)][0...25] | order(name asc) {
    _id,
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
///////////
export async function fetchDataProduct() {
  return await sanityClient.fetch(
    groq`*[_type == "product"] | order(name asc){
  _id,
      _createdAt,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content,
  "categories": *[_type == 'category' && references(^._id)][0...15] | order(name asc) {
    _id,
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
