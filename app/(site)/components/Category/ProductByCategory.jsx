import { getDataSlug } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const ProductByCategory = async (data) => {
  return (
    <>
      HELLO !!!!!!!!!!!!
      {/* <div>
        <h1>{data.title}</h1>
      </div>
      <div>
        <PortableText value={data.content} />
      </div> */}
    </>
  );
};
export default ProductByCategory;
