import { getProductsByCategories } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const slug = params.category;
  const category = await getProductsByCategories(slug);

  console.log("PARAMS CATEGORY !!!!!!!!", params.category);
  console.log("PRODUCTS!!!!!!", category);

  return (
    <>
      <header>
        <h1>{category.name}</h1>
        <h2>GATEGORY PAGE</h2>
        <h3 className="title_slug_category">Our Products for {slug}</h3>
      </header>
      <div>
        <PortableText value={category.content} />
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
        <div
          className="display_category"
          style={{
            display: "flex",
            border: "3px solid violet",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {category.map((category) => (
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
