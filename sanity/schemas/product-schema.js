// c'est par exemple pour une section produit du mois

const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    { name: "name", type: "string", title: "Name of Product" },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      options: { hotspot: true },
      of: [{ type: "image" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      options: { prefix: "€ " },
    },

    { name: "currency", title: "Currency", type: "string" },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
  initialValue: {
    currency: "USD",
  },
};

export default product;