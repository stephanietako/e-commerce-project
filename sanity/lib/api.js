// api.js
//import { getCategory, getData } from "@/sanity/lib/client";
import sanityClient from "./sanity";
import { groq } from "next-sanity";
//import { getProductsByCategories } from "@/sanity/lib/client";
// import { getCategories } from "@/sanity/lib/client";
export async function fetchData() {
  return await sanityClient.fetch(
    groq`*[_type == "category" ]{
    _id,
   _createdAt,
    "coverImages": images[0].asset->url,
    images,
      price,
    name,
    "slug": slug.current,
     "products": products[0]->name,
    content,
       type,
    }`,
    {
      cache: "no-cache",
    }
  );
}
// export async function fetchDataCat() {
//   const result = await sanityClient.fetch(
//     getProductsByCategories,
//     {},
//     { cache: "no-store" }
//   );
//   return result;
// }
// export async function fetchDataCat() {
//   return getProductsByCategories();
// }
// export async function fetchData(slug) {
//   const result = await sanityClient.fetch(
//     getCategoriesDetails,
//     { slug },
//     { cache: "no-store" }
//   );
//   return result;
// }
// export async function fetchData() {
//   const result = await sanityClient.fetch(
//     getCategories,
//     {},
//     { cache: "no-cache" }
//   );
//   return result;
// }
