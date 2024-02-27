import sanityClient from "./sanity";
import { groq } from "next-sanity";
export async function fetchCategories() {
  const query = groq`*[_type == "category" ]{
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
    }`;

  const data = await sanityClient.fetch(query);
  return data;
}
