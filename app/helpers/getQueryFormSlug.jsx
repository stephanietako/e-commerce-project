// Import de la fonction groq depuis next-sanity
import { groq } from "next-sanity";

// Définition de la fonction getQueryFromSlug prenant un tableau de slug en argument
const getQueryFromSlug = (slugArray = []) => {
  // Définition des requêtes pour récupérer les données en fonction du type de document
  const docQuery = {
    // Requête pour récupérer les données d'un produit en fonction de son slug
    product: groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
    _type,
      "slug": slug.current,
      
    }`,
    // Requête pour récupérer les données d'une catégorie en fonction de son slug
    category: groq`*[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
   _type,
      "slug": slug.current,
     
    }`,
  };

  // Initialisation de la variable docType qui va contenir le type de document
  let docType = "";

  // Récupération du premier élément du tableau de slug
  const [slugStart] = slugArray;

  // Construction des paramètres de requête pour le slug
  let queryParams = { slug: "" };

  if (Array.isArray(slugArray)) {
    // Si slugArray est un tableau, utilisez la méthode join()
    queryParams.slug = `/${slugArray.join("/")}`;
  } else {
    // Si slugArray n'est pas un tableau, affectez simplement le slug à queryParams.slug
    queryParams.slug = `/${slugArray}`;
  }
  if (slugStart === "products" && slugArray.length === 1) {
    docType = "product";
  } else if (slugStart === "categories" && slugArray.length === 1) {
    docType = "category";
  }

  // Retourne un objet contenant le type de document, les paramètres de requête et la requête correspondante
  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
};

// Export de la fonction getQueryFromSlug
export default getQueryFromSlug;
// if (slugStart === "products" && slugArray.length === 1) {
//   docType = "product";
// } else if (slugStart === "categories") {
//   docType = "category";
// } else if (slugArray.length === 1) {
//   // Check for single segment (category)
//   docType = "category"; // Assume category search for single segment
// }
