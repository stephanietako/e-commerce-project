import Card from "../(site)/components/Card/Card";

export const getCardByType = (data) => {
  const { name, body, type, slug, content } = data;
  // console.log(type);
  switch (type) {
    case "product":
      return (
        <Card name={name} body={body} type={type} slug={slug} key={slug} />
      );

    case "category":
      return <Card name={name} type={type} slug={slug} key={slug} />;
    case "category":
      return (
        <Card
          name={name}
          content={content}
          type={type}
          slug={slug}
          key={slug}
        />
      );

    default:
      return "hello";
  }
};

export default getCardByType;
