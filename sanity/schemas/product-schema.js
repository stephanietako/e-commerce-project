// c'est par exemple pour une section produit du mois
const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    { name: "name", type: "string", title: "Name of Product" },
    // {
    //   name: "coverImage",
    //   title: "Cover Image",
    //   type: "image",
    //   options: { hotspot: true },
    //   fields: [
    //     {
    //       name: "alt",
    //       title: "Alt",
    //       type: "string",
    //     },
    //   ],
    //   validation: (Rule) => Rule.required().error("Cover Image is required"),
    // },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
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
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};

export default product;
