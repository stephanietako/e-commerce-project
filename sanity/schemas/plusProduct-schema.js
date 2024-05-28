const plusProduct = {
  name: "plusProduct",
  type: "document",
  title: "PlusProduct",
  fields: [
    { name: "name", type: "string", title: "Name of PlusProduct" },
    {
      name: "images",
      type: "array",
      title: "PlusProduct Images",
      options: { hotspot: true },
      of: [{ type: "image" }],
      validation: (Rule) =>
        Rule.required().min(1).error("Minimum of 1 images required"),
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

    { name: "currency", title: "Currency", type: "string" },
    {
      name: "plus",
      title: "Plus",
      type: "array",
      of: [{ type: "reference", to: { type: "plus" } }],
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  initialValue: {
    currency: "EUR",
  },
};

export default plusProduct;
