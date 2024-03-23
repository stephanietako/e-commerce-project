import Card from "../components/Card/Card";

export const getCardByType = (data) => {
  const { title, body, type, slug, ptComponents, description, bio, name } =
    data;
  console.log(type);
  switch (type) {
    case "post":
      return (
        <Card
          title={title}
          excerpt={body}
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );

    case "author":
      return (
        <Card
          title={name}
          excerpt={bio}
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );
    case "category":
      return (
        <Card
          title={title}
          excerpt={description}
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );

    default:
      return "hello";
  }
};

export default getCardByType;
