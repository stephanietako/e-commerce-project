import slugify from "slugify";

function formatSlug(input, prefix) {
  const slug = slugify(input, { lower: true });
  return `${prefix}/${slug}`;
}

export function slugWithType(prefix = ``, source = `_type`) {
  const slugStart = prefix ? `/${prefix}/` : `/`;
  return {
    name: `slug`,
    type: `slug`,
    options: {
      source,

      slugify: (value, doc) => {
        // ... Your logic to format the slug
        const formattedSlug = formatSlug(value, slugStart);
        return formattedSlug; // Return only the formatted slug
      },
    },
    // slugify: (value, doc) => {
    //   console.log("SLUG GÉNÉRÉ !!!!!!! :", formatSlug(value, slugStart));
    //   const prefix = source !== "category" ? "categories" : "products";
    //   console.log("doc _type", source);
    //   console.log("value, prefix, slugStart", value, prefix, slugStart);
    //   return formatSlug(value, prefix, slugStart);
    // },

    validation: (Rule) =>
      Rule.required().custom(({ current }) => {
        if (typeof current === "undefined") {
          return true;
        }

        const prefix = current.split("/")[1];
        if (!["categories", "products"].includes(prefix)) {
          return `Slug must have prefix "categories" or "products" based on document type.`;
        }

        return true;
      }),
  };
}
