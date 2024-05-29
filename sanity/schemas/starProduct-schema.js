const starProduct = {
  name: "starProduct",
  type: "document",
  title: "StarProduct",
  fields: [
    { name: "name", type: "string", title: "Name of StarProduct" },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      options: { hotspot: true },
      of: [{ type: "image" }],
      validation: (Rule) =>
        Rule.required().min(1).error("Minimum of 1 image required"),
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
      validation: (Rule) => Rule.required(),
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
      name: "stars",
      title: "Stars Product",
      type: "array",
      of: [{ type: "reference", to: [{ type: "star" }] }],
    },
  ],
  initialValue: {
    currency: "EUR",
  },
};

export default starProduct;
