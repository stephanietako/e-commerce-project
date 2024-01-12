import { getPage } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  console.log("TITLE SLUG PAGE", params);
  return (
    <>
      <div>
        <h1 className="titre_getpageslug">{page.slug}</h1>
      </div>
      <div>
        <PortableText value={page.content} />
      </div>
    </>
  );
}
