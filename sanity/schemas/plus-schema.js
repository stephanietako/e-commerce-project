const plusTypes = [
  { title: "Accessoires", value: "accessoires" },
  { title: "Goodies", value: "goodies" },
];

const plus = {
  name: "plus",
  title: "Plus",
  type: "document",
  fields: [
    { name: "name", title: "Name of Plus", type: "string" },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "images",
      title: "Plus Images",
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
      title: "Plus Type",
      type: "string",
      options: {
        list: plusTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    },
    {
      name: "quantity",
      title: "Quantity",
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
      name: "plusProduct",
      title: " PlusProduct",
      type: "array",
      of: [{ type: "reference", to: { type: "plusProduct" } }],
    },
  ],
  initialValue: {
    currency: "EUR",
  },
};

export default plus;
