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
        console.log("Slug généré !!!!!!! :", formatSlug(value, slugStart));
        const prefix = (doc._type = "category" ? "categories" : "products");
        console.log("doc _type", doc._type);
        return formatSlug(value, prefix, slugStart);
      },
    },
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
