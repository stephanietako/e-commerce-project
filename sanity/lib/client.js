import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
export const revalidate = 10;

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
              "body": pt::text(body),
    }`,
    {
      cache: "no-store",
    }
  );
}

export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
   name,
        "image": image.asset->url,
        url,
      "slug":slug.current,
      content,
        "body": pt::text(body),
 
    }`,

    { slug },
    {
      cache: "no-store",
    }
  );
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
    { slug },
    {
      cache: "no-store",
    }
  );
}
//////////////////////////////////////////////////////////////////////////////
//  STARPRODUCTS &  ALL PRODUCTS & PRODUCT CATEGORY & PRODUCT CATEGORY SLUG & PRODUCTS BY CATEGORIES //////////////////////
export async function getDataStarProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"] [0...3] | order(name asc){
  _id,
      _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
   body,
           content, 
  "categories": *[_type == 'category' && references(^._id)][0...1] | order(name asc) {
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
      products,
       "ref": categories[]{
_ref,
    }
  }

}`,
    {
      cache: "no-store",
    }
  );
}

///////////// ALL PRODUCTS ////////////////////
export async function getDataProductsPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"] | order(name asc){
  _id,
    _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
  body,
           content,
  "categories": *[_type == 'category' && references(^._id)][0...30] | order(name asc) {
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
    groq`*[_type == 'product'][0...20] | order(name asc){
  _id,
   _createdAt,
      _type,
    price,
       currency,
    name,
    "slug":slug.current,
    "categoryName": category->name,
    "coverImages": images[0].asset->url,
 "images": images[0].asset->url,
body,
    content,
      "products": categories[]{
_ref,
  }
      
    }`,
    {
      cache: "no-store",
    }
  );
}

// CATEGORY
// produits par categories
export async function getProductsByCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category'][0...30] | order(name asc){
  _id,
    _createdAt,
      _type,
  name,
    price,
    currency,
    content,
    "slug": slug.current,
      "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
  "productName": products[0]->name,
    products,
      "products": categories[]{
_ref,
  }
  }`,
    {
      cache: "no-store",
    }
  );
}
// produits par categories
export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] | order(name asc){
  _id,
       _createdAt,
      _type,
  name,
    "coverImages": images[0].asset->url,
  price,
   "slug": slug.current,
   content,
  "products": *[_type == 'product' && references(^._id)][0...30] | order(name asc){
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
    categories,
    body,
      "products": categories[]{
_ref,
  }
  }
}`,
    {
      cache: "no-store",
    }
  );
}

export async function getBycategories() {
  return createClient(clientConfig).fetch(
    groq`  *[_type == "category"] [0...30] | order(name asc){
_id,
 _createdAt,
      _type,
  name,
  content,
      "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
  "productName": products[0]->name,
    products,
  "products": products[]{
_ref,
  }
}`,
    {
      cache: "no-store",
    }
  );
}

export async function getCategory() {
  return createClient(clientConfig).fetch(
    groq` *[_type == "category"] {
 _createdAt,
      _type,
  _id,
  name,
 "coverImages": images[0].asset->url,
    "images": images[0].asset->url,

}`,
    {
      cache: "no-store",
    }
  );
}
//////////////////////////
export async function getDataFlowers() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && name == "Fleurs"] [0...20] | order(name asc){
  _id,
       _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
            "body": pt::text(body),    
  "categories": *[_type == 'category' && references(^._id)][0...30] | order(name asc) {
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
      products,
       "ref": products[]{
_ref,
    }
  }
}`,
    {
      cache: "no-cache",
    }
  );
}
///////////////////////////////
//// slug CATEGORY single page
export async function getData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _type,
      "coverImages": images[0].asset->url,
      images,
      price,
      name,
      "slug": slug.current,
      content,
      type,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

//// slug PRODUCT single page
export async function getDataProduct(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
_id,
   _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
            "body": pt::text(body),    
  "categories": *[_type == 'category' && references(^._id)][0...30] | order(name asc) {
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
      products,
       "ref": products[]{
_ref,
    }
  }
}`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
/////////////////////////
export async function getAll() {
  return createClient(clientConfig).fetch(
    groq` *[_type in ['product', 'category' ]  ] | order(name asc){
  _id,
    _type,
  name,
    price,
        currency,
     "slug":slug.current,
  "images": images[0].asset->url,
 body,
     content,
         price,
     currency,
       "refProducts": products[]{
 _ref,
          "refCategories": categories[]{
_ref,
  }
     }
     }`,
    {
      cache: "no-store",
    }
  );
}
// *[_type in ['product', 'category'] && (
//   _type match "product" + "*" || _type match "category" + "*"
// ) && !(_id in path('drafts.**'))] | order(name asc){
// _id,
//    _createdAt,
//   _type,
//   name,
//   currency,
//   price,
//   "slug": slug.current,
//   "coverImages": images[0].asset->url,
//   "images": images[0].asset->url,
//   content,
//    "refprod": products[] {
//     _ref,
//     "refcat": categories[] {
//       _ref
//     }
// }

// }
//////////////////////////
// *[_type in ['product', 'category' ]  ] | order(name asc){
//   _id,
//     price,
//        currency,
//     name,
//     "slug":slug.current,
//  type,
//     "coverImages": images[0].asset->url,
//  "images": images[0].asset->url,
// body,
//     content,
//         price,
//     currency,
//       "refProducts": products[]{
// _ref,
//          "refCategories": categories[]{
// _ref,
//   }
//     }
//     }
//////////////////////////
// export async function getDataFlowersSlug(slug) {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "category" && name == "Orange"]{
//     _createdAt,
//   _id,
//   name,
//       type,
//    "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//            price,
//     currency,
//     content,
// }`,
//     { slug },
//     {
//       cache: "no-cache",
//     }
//   );
// }
///////////////
// *[_type == "product" && name == "fleurs"]{
//     _createdAt,
//   _id,
//   name,

//    "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//            price,
//     currency,
//     content,
//   "categories": categories[]{
// _ref,

// }

// }
//////////////////////
// *[_type == "category"] | order(name asc){
//   _id,
//       _createdAt,
//   name,
//     "coverImages": images[0].asset->url,
//   price,
//    "slug": slug.current,
//      "productsRef": products[]{
// _ref,
//   "products": *[_type == 'product' && references(^._id)][0...25] | order(name asc){
//     _id,
//     price,
//     currency,
//     name,
//     "slug": slug.current,
//      "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//     content,
//     categories,

//   }
// }
// }
//////////////
// export async function getDataProductSingle(slug) {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "product" && slug.current == "$slug"][0]{
//  _id,
//    _createdAt,
//       name,
//     "coverImages": images[0].asset->url,

//     "slug": slug.current,
//    content,
//        body,
//   "categories": *[_type == 'category' && references(^._id)][0...20] | order(name asc) {
//     _id,
//     price,
//     currency,
//     name,
//     "slug": slug.current,
//      "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//     content,
//       products,
//        "ref": products[]{
// _ref,
//     }
//     }
// }`,
//     { slug },
//     {
//       cache: "no-store",
//     }
//   );
// }
////////////
// *[_type == 'product' && "orange" in categories[]->slug.current ]{
//   _id,
//     name,
//      "categoriesName": categories[0]->name,
//     "categoriesPrice": categories[0]->price,
//   "categoriesImages": categories[0]->images,
//         currency,
//         content,
//         "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//          body,

// }
