const user = {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "url",
    },
    {
      name: "password",
      type: "string",
      hidden: true,
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) =>
        Rule.required()
          .email({ message: "Must be a valid email address" })
          .unique(),
    },
    {
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    },

    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
};

export default user;
