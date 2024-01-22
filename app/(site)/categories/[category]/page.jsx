import { getData } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const slug = params.category;
  const categories = await getData(slug);

  console.log("PARAMS CATEGORY !!!!!!!!", categories);

  return (
    <div className="project_slug_getproject">
      <header>
        <h1>{categories.name}</h1>
      </header>
      <div>
        <PortableText value={categories.content} />
      </div>
      ici c est IMAGES
      {categories.image && (
        <Image
          src={categories.image}
          alt={categories.name}
          width={250}
          height={100}
          className="categories_img"
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <div>
        <div>{categories.body} ici c est le body !!!!!</div>
      </div>
    </div>
  );
};

export default Category;
