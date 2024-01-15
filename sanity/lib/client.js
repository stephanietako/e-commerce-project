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

// PRODUCT & PRODUCT CATEGORY & PRODUCT SLUG//////////////////////
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
      
    }`,
    {
      cache: "no-store",
    }
  );
}
/////////////////////////
export async function getDataCategory(category) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product' && category->name == $category]{
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
////////////
export async function getData(slug) {
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
