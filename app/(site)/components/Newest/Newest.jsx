// ici c'est le composant de la section des propositions de produits genre les produits en vedette

import clientConfig from "../../../../sanity/config/client-config";
import { createClient, groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/arrow.png";

export async function getData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product'][0...7] | order(_createdAt desc){
  _id,
    price,
       currency,
    name,
    "slug":slug.current,
    "categoryName": category->name,
 "images": images[0].asset->url,
    content,
      
    }`,
    {
      cache: "no-store",
    }
  );
}
const Newest = async () => {
  const data = await getData();
  return (
    <section
      className="newest_section"
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        border: "2px solid violet",
        alignItems: "center",
      }}
    >
      <div
        className="newest_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          flexDirection: "column",
        }}
      >
        <div
          className="bloc_link"
          style={{
            display: "flex",
            width: "auto",
            height: "auto",
            justifyContent: "space-between",
            border: "2px solid blue",
            alignItems: "center",
            padding: "33px",
          }}
        >
          {" "}
          <h2>Our newest products !!!!</h2>
          <Link className="all_products" href="/all">
            {" "}
            <Image className="__img" src={arrow} alt="icon flêche" />
          </Link>
        </div>
        <div
          className="display_product"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid yellow",
            flexWrap: "wrap",
          }}
        >
          {data.map((product) => (
            <div
              key={product._id}
              className="product_card_group"
              style={{
                padding: "20px",
              }}
            >
              <div className="images_products">
                {/* j'évite les blocages d'erreurs du reload si j'ai fait des changements */}
                {product.images && (
                  <Image
                    src={product.images}
                    alt="les fleurs"
                    className="product__img"
                    width={200}
                    height={200}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>

              <div className="content">
                <div>
                  <h3 className="title">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="category_name">{product.categoryName}</p>
                </div>
                {/* <p className="price_content">${product.price}</p> */}
                <p className="price_content">€{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newest;
