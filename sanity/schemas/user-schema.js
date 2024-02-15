const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    {
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      // readOnly: true,
      // hidden: true,
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
      title: "image",
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
    },
    {
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    },
    {
      name: "about",
      title: "About",
      type: "text",
      description: "Description about the user",
    },
  ],
};

export default user;
