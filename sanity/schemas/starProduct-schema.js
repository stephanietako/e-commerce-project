// c'est par exemple pour une section produit du mois

const starProduct = {
  name: "starProduct",
  type: "document",
  title: "star Product",
  fields: [
    { name: "name", type: "string", title: "Name of Star Product" },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      options: { hotspot: true },
      of: [{ type: "image" }],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 images required"),
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
      title: "Slug",
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
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    { name: "currency", title: "Currency", type: "string" },
    {
      name: "categories",
      title: "Product Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
  initialValue: {
    currency: "EUR",
  },
};

export default starProduct;
