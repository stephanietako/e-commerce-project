import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
export const revalidate = 10;

// PROJECTS & PROJECT //////////////////////
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
/////////////////////
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

// PRODUCT & PRODUCT CATEGORY & PRODUCT CATEGORY SLUG//////////////////////
export async function getDataProduct() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product'][0...7] | order(_createdAt desc){
  _id,
    price,
       currency,
    name,
    "slug":slug.current,
    "categoryName": category->name,
 "images": images[0].asset->url,
    content,
      
    }`
  );
}
/////////////////////////
export async function getData(category) {
  try {
    const client = createClient(clientConfig);
    const query = groq`*[_type == 'product' && category->name == $category]{
  _id,
    "images": images[0].asset->url,
      price,
       name,
    "slug": slug.current,
    "categoryName": category->name,
}`;

    const params = { category };
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
///////////////////////////////
export async function getDataSlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
 _id,
    "coverImages": images[0].asset->url,
    images,
      price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    }`,
    { slug }
  );
}
/////////////
// Exemple de fonction pour récupérer les produits par catégorie
export async function getCategoryData(category) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && category->name == "Fleurs roses"]{
    _id,
    "images": images[0].asset->url,
      price,
       name,
    "slug": slug.current,
    "categoryName": category->name,
    }`,
    { category }
  );
}
//Resultat
// […] 1 item
// 0:{…} 6 properties
// price:45
// name:First
// slug:first
// categoryName:Fleurs roses
// _id:b89127d9-7dfa-4ed0-9686-714536ffed37
// images:https://cdn.sanity.io/images/bajw1buo/production/d400a7a4a0b710b5dac120a313e38162f74ed3d8-6000x4000.jpg
