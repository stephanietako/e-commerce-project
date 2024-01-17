import { getTest } from "@/sanity/lib/client";
import Image from "next/image";

export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const categoryName = params.category;
  const products = await getTest(categoryName);
  console.log("PARAMS CATEGORY !!!!!!!!", params.category);
  console.log(" products !!!!!!", products);

  return (
    <section className="section">
      <div className="_container">
        <h1>{categoryName}</h1>
        <div className="bloc_link">
          <h2>HELLO WORLD !!! ICI [category]/pages.jsx</h2>
        </div>
        <div className="display_category_slug">
          <h2 className="title_slug_category">
            Our Products for {categoryName}
          </h2>
        </div>
        {/* ////////////////////////////////// */}

        {products.map((category) => (
          <div key={category._id}>
            <h2>{category.name}</h2>
            {category.products && category.products.length > 0 ? (
              <div className="display_product">
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

                    <div className="content">
                      <div>
                        <h3 className="title">{product.name}</h3>
                        <p className="category_name">{product.categoryName}</p>
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

        {/* <ProductByCategory category={category} /> */}
      </div>
    </section>
  );
};

export default Category;
