import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
export const revalidate = 10;
// "categoryName": category->name,
// "images": images[0].asset->url,
//PROJECTS & PROJECT //////////////////////
export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
      name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
              "body": pt::text(body)
      
    }`,
    {
      cache: "no-store",
    }
  );
}

export async function getProject(slug) {
  try {
    const client = createClient(clientConfig);
    const query = groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
   name,
        "image": image.asset->url,
        url,
      "slug":slug.current,
      content,
        "body": pt::text(body)

    }`;

    const params = { slug };
    const project = await client.fetch(query, params, {
      cache: "no-store",
    });

    console.log("Fetched project !!!!!:", project);
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

// PAGES & PAGE ///////////////////////////
export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
     title,
        "slug": slug.current,
    }`,
    {
      cache: "no-store",
    }
  );
}

export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
       _id,
       _createdAt,
   title,
       "slug":slug.current,
             content,

    }`,
    { slug }
  );
}

//  STARPRODUCTS &  ALL PRODUCTS & PRODUCT CATEGORY & PRODUCT CATEGORY SLUG & PRODUCTS BY CATEGORIES //////////////////////
export async function getDataStarProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'starProduct'][0...3] | order(_createdAt desc){
  _id,
      _createdAt,
  name,
    price,
    currency,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
     images,
    content,
    "categories": categories[0]->name,
  }`
  );
}

export async function getDataProductPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "allproducts" && slug.current == $slug][0]{
 _id,
   _createdAt,
    "coverImages": images[0].asset->url,
    images,
      price,
    name,
    "slug": slug.current,
  categories,
    content,
    }`,
    { slug }
  );
}
///////////// ALL PRODUCTS ////////////////////
export async function getDataProductsPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"] {
  _id,
      _createdAt,
  name,
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
      cache: "no-store",
    }
  );
}
///////////////////
export async function getDataProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product'][0...10] | order(_createdAt desc){
  _id,
    price,
       currency,
    name,
    "slug":slug.current,
    "categoryName": category->name,
    "coverImages": images[0].asset->url,
 "images": images[0].asset->url,
    content,
      
    }`
  );
}

export async function getDataProduct(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
 _id,
   _createdAt,
    "coverImages": images[0].asset->url,
    images,
  "categoryName": category->name,
      price,
    name,
    "slug": slug.current,
     "categories": categories[0]->name,
    content,
    }`,
    { slug }
  );
}
// CATEGORY
// produits par categories
export async function getProductsByCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category'][0...20] | order(_createdAt desc){
  _id,
      _createdAt,
  name,
    price,
    currency,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    products,
  }`
  );
}
// produits par categories
export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] {
  _id,
      _createdAt,
  name,
  "products": *[_type == 'product' && references(^._id)][0...15] | order(_createdAt desc) {
    price,
    currency,
    name,
    "slug": slug.current,
    "images": images[0].asset->url,
    content
  }
}`
  );
}
// export async function getCategories() {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "category" ]{
//        _id,
//    _createdAt,
//        name,
//     "coverImages": images[0].asset->url,
//     images,
//       price,
//     "slug": slug.current,
//       "products": products[0]->name,

//     }`
//   );
// }
//// slug CATEGORY single page
export async function getData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
    _id,
   _createdAt,
    "coverImages": images[0].asset->url,
    images,
      price,
    name,
    "slug": slug.current,
     "products": products[0]->name,
    content,
    }`,
    { slug }
  );
}
export async function getBycategories() {
  return createClient(clientConfig).fetch(
    groq` *[_type == "category"] {
   _id,
       _createdAt,
   name,
   "products": *[_type == 'product' && references(^._id)][0...15] | order(_createdAt desc) {
     _id,
     price,
     currency,
     name,
     "slug": slug.current,
     "images": images[0].asset->url,
     content,
   }
 }`
  );
}
///////////////////////////////

/////////////////////
//resultat de getCategoryData
// […] 1 item
// 0:{…} 6 properties
// price:45
// name:First
// slug:first
// categoryName:Fleurs roses
// _id:b89127d9-7dfa-4ed0-9686-714536ffed37
// images:https://cdn.sanity.io/images/bajw1buo/production/d400a7a4a0b710b5dac120a313e38162f74ed3d8-6000x4000.jpg
//////////////////////////CATEGORY UNIQUEMENT
// *[_type == "category"] [0...4]| order(_createdAt desc){
//   _id,
//     name,
//     "slug": slug.current
// }
/////
// […] 4 items
// 0:{…} 3 properties
// _id:fe2f6896-31fd-453d-a500-ffcb6b5fb393
// name:Category awards
// slug:null
// 1:{…} 3 properties
// _id:4eec7c03-f166-4c6f-a14d-add6c4b84b7d
// name:Fleurs roses
// slug:null
// 2:{…} 3 properties
// _id:92c07ab2-50d4-40a2-8a80-3a1b9b18ab94
// name:Fleurs jaunes
// slug:null
// 3:{…} 3 properties
// _id:14d101c2-e887-437b-8106-4faae7f9cc8d
// name:Fleurs bleues
// slug:null
//////////////////////////
// *[_type == "category"] {
//   ...,
//   "count": count(*[_type == "post" && references(^._id)])
// } | order(count desc) [0...4]
////
// […] 4 items
// 0:{…} 7 properties
// _rev:Ix9j2sEkmf1IMBHEJJPRhK
// _type:category
// name:Fleurs bleues
// _id:14d101c2-e887-437b-8106-4faae7f9cc8d
// count:0
// _updatedAt:2024-01-14T18:45:43Z
// _createdAt:2024-01-10T11:46:43Z
// 1:{…} 7 properties
// _createdAt:2024-01-10T11:59:05Z
// _rev:P1MV7DVvfGswgczEKmIsxW
// count:0
// _type:category
// name:Fleurs roses
// _id:4eec7c03-f166-4c6f-a14d-add6c4b84b7d
// _updatedAt:2024-01-14T18:45:30Z
// 2:{…} 7 properties
// _id:92c07ab2-50d4-40a2-8a80-3a1b9b18ab94
// _updatedAt:2024-01-14T18:45:25Z
// count:0
// _createdAt:2024-01-10T11:52:04Z
// _rev:Ix9j2sEkmf1IMBHEJJPOes
// _type:category
// name:Fleurs jaunes
// 3:{…} 7 properties
// name:Category awards
// _id:fe2f6896-31fd-453d-a500-ffcb6b5fb393
// _updatedAt:2024-01-14T18:46:04Z
// _createdAt:2024-01-11T12:38:17Z
// _rev:Ix9j2sEkmf1IMBHEJJPU8u
// _type:category
// count:0
////////////////////////////
// *[ _type == "category"]{ ..., "product": *[_type=="product" && references(^._id ) ]}{
//   _id,
//     _type,
//     name,
// }
/////
// […] 4 items
// 0:{…} 3 properties
// _id:14d101c2-e887-437b-8106-4faae7f9cc8d
// _type:category
// name:Fleurs bleues
// 1:{…} 3 properties
// _id:4eec7c03-f166-4c6f-a14d-add6c4b84b7d
// _type:category
// name:Fleurs roses
// 2:{…} 3 properties
// _id:92c07ab2-50d4-40a2-8a80-3a1b9b18ab94
// _type:category
// name:Fleurs jaunes
// 3:{…} 3 properties
// _id:fe2f6896-31fd-453d-a500-ffcb6b5fb393
// _type:category
// name:Category awards
// export async function getTest() {
//   return createClient(clientConfig).fetch(
//     groq`
//     *[_type == "product" && references($slug)] {
//         ...,
//         "id": _id,
//         "slug": slug.current,
//         "images": images.asset->url,
//         category->{ name, "image": image.asset->url  },
//     }
// `,
//     { slug }
//   );
// }
