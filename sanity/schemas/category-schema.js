// const category = {
//   name: "category",
//   type: "document",
//   title: "Categories",
//   fields: [
//     {
//       name: "name",
//       title: "Name of Category",
//       type: "string",
//     },
//   ],
// };

// export default category;

import { defineField } from "sanity";
// c'est ce que je vais voir dans mon menu ex: men women teen
const cateroryTypes = [
  { title: "Basic", value: "basic" },
  { title: "Medium", value: "medium" },
  { title: "Large", value: "large" },
];

const category = {
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    defineField({
      name: "name",
      title: "Name of Category",
      type: "string",
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    defineField({
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
    }),
    defineField({
      name: "type",
      title: "Category Type",
      type: "string",
      options: {
        list: cateroryTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    }),
    defineField({
      name: "numberOfOrder",
      title: "Number of Order",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
  ],
};

export default category;
