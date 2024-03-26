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
        <div className="products_container">
          <div className="display_all_products">
            <div className="products_content">
              <div className="products_cards">
                ICI !!!!!!!!!!!!!!!!
                {product.categories &&
                  product.categories.map((category) => (
                    <div key={category._id}>
                      <h3>
                        <Link href={`/categories/${category.slug}`}>
                          {category.name}
                        </Link>
                      </h3>
                      ICI !!!!!!!!!!!!!!!!
                      <div>
                        {category.coverImages && (
                          <Image
                            src={category.coverImages}
                            alt="les fleurs"
                            className="product__img"
                            width={300}
                            height={300}
                            style={{
                              objectFit: "cover",
                              borderRadius: "30px",
                            }}
                          />
                        )}
                      </div>
                      <p>Price: €{category.price}</p>
                      <PortableText value={category.content} />
                      <Link
                        href={`/categories/${category.slug}`}
                        className="link_items"
                        style={{
                          color: "turquoise",
                        }}
                      >
                        View Details
                      </Link>
                      <span className="ref_products_products">
                        <p
                          style={{
                            color: "gray",
                            fontSize: "10px",
                          }}
                        >
                          REF: {product._id}
                        </p>
                      </span>
                      {/* <span>{product.body}</span> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;
