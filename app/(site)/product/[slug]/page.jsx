import clientConfig from "../../../../sanity/config/client-config";
import { createClient, groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const dynamic = "force-dynamic";

export async function getData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
       _id,
       _createdAt,
       images,
       price,
name,
   content,
       "slug":slug.current,
       "categoryName": category->name,
    }`,
    { slug }
  );
}

const ProductPage = async ({ params }) => {
  const data = await getData(params.slug);
  return (
    <>
      <div>
        <h1>{data.name}</h1>
      </div>
      <div>
        {" "}
        <ImageGallery images={data.images} />
      </div>
      <div>
        <PortableText value={data.content} />
      </div>
    </>
  );
};
export default ProductPage;
