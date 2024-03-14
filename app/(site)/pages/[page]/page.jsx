import { getPage } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const Page = async ({ params }) => {
  const slug = params.page;
  const page = await getPage(slug);

  // console.log("TITLE SLUG PAGE", params);
  // console.log("PAGE!!!!!!!!!!!!!", page);

  return (
    <>
      <div className="title_slug_page">
        <h1>{page.title}</h1>
      </div>
      <div>
        <PortableText value={page.content} />
      </div>
    </>
  );
};
export default Page;
