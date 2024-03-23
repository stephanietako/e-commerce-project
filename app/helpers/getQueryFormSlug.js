import { groq } from "next-sanity";

const getQueryFromSlug = (slugArray = []) => {
  const docQuery = {
    product: groq`*[_type == "product" && slug.current == $slug][0] {
         _id,
   _createdAt,
      title,
      _type,
      "slug": slug.current,
    }`,
    category: groq`*[_type == "category" && slug.current == $slug][0] {
         _id,
   _createdAt,
      title,
      _type,
      "slug": slug.current,
    }`,
  };

  let docType = "";

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `/${slugArray.join("/")}` };

  if (slugStart === "product" && slugArray.length === 2) {
    docType = `product`;
  } else {
    docType = `category`;
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
};

export default getQueryFromSlug;
