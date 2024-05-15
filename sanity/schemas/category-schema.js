// c'est ce que je vais voir dans mon menu ex: men women teen
const categoryTypes = [
  { title: "Sativa", value: "sativa" },
  { title: "Indica", value: "indica" },
  { title: "Indoor", value: "indoor" },
  { title: "Outdoor", value: "outdoor" },
  { title: "Hybride", value: "hybride" },
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
        Rule.required().min(1).error("Minimum of 1 images required"),
    },

    {
      name: "type",
      title: "Category Type",
      type: "string",
      options: {
        list: categoryTypes,
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
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    },
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
