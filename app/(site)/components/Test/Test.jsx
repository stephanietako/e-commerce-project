import { getBycategories } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export const dynamic = "force-dynamic";

const Test = async () => {
  const data = await getBycategories();
  console.log("PARAMS CATEGORY !!!!!!!!", data);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/categories/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Test;
