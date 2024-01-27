import { getBycategories } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export const dynamic = "force-dynamic";
const ByCategory = async () => {
  const data = await getBycategories();
  console.log("PARAMS CATEGORY !!!!!!!!", data);

  return (
    <>
      <header
        className="header_category"
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
        <h2 className="_category">BY CATEGORIES</h2>
      </header>
      <div>
        <PortableText value={data.content} />
      </div>

      <div
        className="display_category"
        style={{
          display: "flex",
          border: "3px solid violet",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((category) => (
          <div key={category._id}>
            {category.products && category.products.length > 0 ? (
              <>
                <div
                  className="display_infos"
                  style={{
                    display: "flex",
                    border: "3px solid yellow",
                  }}
                >
                  {category.products.map((product) => (
                    <div
                      key={product._id}
                      className="data_group"
                      style={{
                        padding: "20px",
                      }}
                    >
                      <div className="images">
                        {product.images && (
                          <Image
                            src={product.images}
                            alt="les fleurs"
                            className="product__img"
                            width={200}
                            height={200}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        )}
                      </div>
                      <h3 className="title">
                        <Link href={`/categories/${category.slug}`}>
                          {category.name}
                        </Link>
                      </h3>
                      <div
                        className="content"
                        style={{
                          display: "flex",
                          border: "3px solid pink",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <h4 className="title">
                            {/* // /categories/fleurs */}
                            <Link href={`/products/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h4>
                        </div>

                        <p className="price_content">
                          €{product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No products available for this category.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default ByCategory;
