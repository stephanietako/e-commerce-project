import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
export const revalidate = 10;
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
      // Ajouter la ligne cache: "no-store" ici
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
      "slug":slug.current,
      "image":image.asset->url,
      url,
      content,
        "body": pt::text(body)

    }`;

    const params = { slug };
    const project = await client.fetch(query, params, {
      // Ajouter la ligne cache: "no-store" ici
      cache: "no-store",
    });

    console.log("Fetched project !!!!!:", project);
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
