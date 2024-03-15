// c'est ce que je vais voir dans mon menu ex: men women teen
const cateroryTypes = [
  { title: "Basic", value: "basic" },
  { title: "Medium", value: "medium" },
  { title: "Large", value: "large" },
];

const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "name", title: "Name of Category", type: "string" },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Category Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 images required"),
    },

    {
      name: "type",
      title: "Category Type",
      type: "string",
      options: {
        list: cateroryTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    },
    {
      name: "numberOfOrder",
      title: "Number of Order",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    },
    {
      name: "url",
      title: "URL",
      type: "url",
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
      name: "active",
      type: "boolean",
    },
    {
      name: "products",
      title: " Category Product",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
    },
  ],
  initialValue: {
    currency: "EUR",
  },
};

export default category;
