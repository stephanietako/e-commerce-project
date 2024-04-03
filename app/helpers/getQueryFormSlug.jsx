function getQueryFromSlug(slugArray = []) {
  const docQuery = {
    product: groq`*[_id == "product"][0]`,
    category: groq`*[_type == "category" && slug.current == $slug][0]`,
  };

  if (slugArray.length === 0) {
    return {
      docType: "category",
      queryParams: {},
      query: docQuery.category,
    };
  }

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `/${slugArray.join("/")}` };

  // Keep extending this section to match the slug against the docQuery object keys
  if (docQuery.hasOwnProperty(slugStart)) {
    docType = slugStart;
  } else {
    docType = `product`;
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
}
