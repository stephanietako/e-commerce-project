import { groq } from "next-sanity";
import getQueryFromSlug from "@/app/helpers/getQueryFormSlug";
import sanityClient from "@/sanity/lib/sanity";
import SinglePage from "../../components/SinglePage/SinglePage";

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(
    groq`*[_type in ["product", "category"] && defined(slug.current)][].slug.current`
  );
  console.log("paths!!!!!", paths);
  return paths.map((slug) => ({
    slug: slug.split("/").filter((p) => p),
  }));
}
/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview = true) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}
export default async function Page({ params }) {
  const { slug } = params;
  console.log("Slug !!!!!! :", slug);
  const { query, queryParams, docType } = getQueryFromSlug(slug);

  const pageData = await sanityClient.fetch(query, queryParams);
  console.log("pageData!!!!!", pageData);
  console.log("queryparams!!!!!", queryParams);
  console.log("query!!!!!", query);

  const data = filterDataToSingleItem(pageData, false);

  return (
    <>
      {(docType === "product" || docType === "category") && (
        <SinglePage key={data} data={data} />
      )}
    </>
  );
}
