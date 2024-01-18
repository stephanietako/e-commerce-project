import { getTest } from "@/sanity/lib/client";
import Image from "next/image";

export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const categoryName = params.category;
  const products = await getTest(categoryName);
  console.log("PARAMS CATEGORY !!!!!!!!", params.category);
  console.log(" products !!!!!!", products);

  return (
    <section
      className="section"
      style={{
        display: "flex",
        border: "3px solid red",
      }}
    >
      <div
        className="_container"
        style={{
          display: "flex",
          border: "3px solid blue",
          flexDirection: "column",
          width: " 100%",
          height: " auto",
        }}
      >
        <h1>{categoryName}</h1>
        <div className="bloc_link">
          <h2>GATEGORY PAGE</h2>
        </div>
        <div
          className="display_category_slug"
          style={{
            display: "flex",
            border: "3px solid green",
          }}
        >
          <h3 className="title_slug_category">
            Our Products for {categoryName}
          </h3>
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
          {products.map((category) => (
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
    </section>
  );
};

export default Category;
