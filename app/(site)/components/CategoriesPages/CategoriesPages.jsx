"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetchCategories } from "@/sanity/lib/fetchCategories";

export const dynamic = "force-dynamic";

// AFFICHAGE
const CategoriesPages = () => {
  const { data, error, isLoading } = useSWR("/category", fetchCategories);

  console.log("CATEGORY !!!!!!!!", data); // Optional for debugging

  if (error) return <div>Error fetching data: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const category = data;

  return (
    <div className="container">
      <div className="images">
        {data.coverImages ? (
          <>
            <Image
              src={data.coverImages}
              alt="les fleurs"
              className="product__img"
              width={200}
              height={200}
              style={{
                objectFit: "cover",
              }}
            />
          </>
        ) : (
          <p>No image available</p>
        )}
      </div>

      <div className="p-4 bg-white">
        <div className="flex justify-between text-xl font-semibold">
          <p>{category.name}</p>
          <p>$ {category.price}</p>
        </div>

        <p className="pt-2 text-xs">{category.type} CATEGORY</p>

        <Link
          href={`/categories/${category.slug}`}
          className="bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
        ></Link>
      </div>
    </div>
  );
};

export default CategoriesPages;
