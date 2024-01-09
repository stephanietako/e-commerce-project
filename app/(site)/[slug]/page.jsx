import { getPage } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  return (
    <>
      <div>
        <h1>{page.title}</h1>
      </div>
      <div>
        <PortableText value={page.content} />
      </div>
    </>
  );
}
