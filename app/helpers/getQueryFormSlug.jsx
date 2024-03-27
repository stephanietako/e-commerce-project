import { groq } from "next-sanity";

const getQueryFromSlug = (slugArray = []) => {
  const docQuery = {
    product: groq`*[_type == "product" && slug.current == $slug][0] {
     name,
      _type,
      "slug": slug.current,
    }`,
    category: groq`*[_type == "category" && slug.current == $slug][0] {
     name,
      _type,
      "slug": slug.current,
    }`,
  };

  let docType = "";

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `/${slugArray.join("/")}` };

  if (slugStart === "products" && slugArray.length === 2) {
    docType = `product`;
  } else {
    slugStart === "categories" && slugArray.length === 2;
    docType = `category`;
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
};

export default getQueryFromSlug;
