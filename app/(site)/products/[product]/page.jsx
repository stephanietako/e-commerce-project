import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";
// DISPLAY
const ProductsDetails = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  return (
    <>
      <header className="header_products">
        <h2 className="_products"> TOUTES NOS DATAS products</h2>
      </header>

      <section className="products_section">
        <h1>HELLO WORLD</h1>
      </section>
    </>
  );
};

export default ProductsDetails;
