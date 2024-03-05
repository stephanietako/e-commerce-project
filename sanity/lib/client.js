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

//  STARPRODUCTS &  ALL PRODUCTS & PRODUCT CATEGORY & PRODUCT CATEGORY SLUG & PRODUCTS BY CATEGORIES //////////////////////
export async function getDataStarProducts() {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "product"][0...3]{
  _id,
      _createdAt,
  name,
    "slug": slug.current,
    "categories": *[_type == 'category' && references(^._id)][0...1] | order(_createdAt desc) {
_id,
  name,
    price,
    currency,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
     images,
    content,
    body,
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
      
    }`,
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
    "coverImages": images[0].asset->url,
    images,
  "categoryName": category->name,
      price,
    name,
    "slug": slug.current,
     "categories": categories[0]->name,
    content,
       body,
    }`,
    { slug },
    {
      cache: "no-store",
    }
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
  }`,
    {
      cache: "no-store",
    }
  );
}
// produits par categories
export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] {
  _id,
      _createdAt,
  name,
    "coverImages": images[0].asset->url,
  price,
   "slug": slug.current,
  "products": *[_type == 'product' && references(^._id)][0...25] | order(_createdAt desc) {
    _id,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
    categories,
   
  }
}`,
    {
      cache: "no-store",
    }
  );
}

export async function getBycategories() {
  return createClient(clientConfig).fetch(
    groq`  *[_type == "category"] {
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
      cache: "no-store",
    }
  );
}

export async function getCategory() {
  return createClient(clientConfig).fetch(
    groq` *[_type == "category" ]{
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
      cache: "no-store",
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
    "coverImages": images[0].asset->url,
    images,
      price,
    name,
    "slug": slug.current,
     "products": products[0]->name,
    content,
       type,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

export async function getCategoriesDetails(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug]][0] {
    _id,
    coverImages,
    images,
    name,
    price,
    slug,
    type,
    
}`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
