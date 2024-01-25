import { getProductsByCategories } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export const dynamic = "force-dynamic";

const Category = async () => {
  const data = await getProductsByCategories();

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
        <h2 className="_category">OUR CATEGORIES</h2>
      </header>
      <div>
        <PortableText value={data.content} />
      </div>
      <div
        className="categories_container"
        style={{
          display: "flex",
          border: "3px solid blue",
          flexDirection: "column",
          width: " 100%",
          height: " auto",
        }}
      >
        {/* DISPLAY CATEGORY map categories avec ça j'ai tout mon contenu  */}
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
              <h2>Category {category.name}</h2>
              {category.products && category.products.length > 0 ? (
                <div
                  className="display_infos"
                  style={{
                    display: "flex",
                    border: "3px solid black",
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

                      <div
                        className="content"
                        style={{
                          display: "flex",
                          border: "3px solid pink",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <h3 className="title">{product.name}</h3>
                          <p className="category_name">
                            {product.categoryName}
                          </p>
                        </div>
                        <p className="price_content">
                          €{product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products available for this category.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
