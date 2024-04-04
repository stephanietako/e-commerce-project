import Card from "../(site)/components/Card/Card";

export const getCardByType = (data) => {
  const { images, type, slug, ptComponents, content, name } = data;
  console.log(type);
  switch (type) {
    case "product":
      return (
        <Card
          title={name}
          images={images}
          excerpt={content}
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );

    case "category":
      return (
        <Card
          title={name}
          images={images}
          excerpt={content}
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
