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
  try {
    const client = createClient(clientConfig);
    const query = groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
  title,
      "slug":slug.current,
            content,

 
    }`;

    const params = { slug };
    const page = await client.fetch(query, params, {
      cache: "no-store",
    });

    console.log("Fetched page !!!!!:", page);
    return page;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
