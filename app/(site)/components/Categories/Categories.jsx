import { getProductsByCategories } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Category = async () => {
  const data = await getProductsByCategories();

  console.log("CATEGORY !!!!!!!!", data);

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
        <h2 className="_category">ALL CATEGORIES</h2>
      </header>

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
          {data.map((categories) => (
            <div key={categories._id}>
              <div>
                <p className="title_categories">
                  <Link href={`/categories/${categories.slug}`}>
                    {categories.name}
                  </Link>
                </p>
              </div>
              {categories.products && categories.products.length > 0 ? (
                <div
                  className="display_infos"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                  }}
                >
                  {categories.products.map((category) => (
                    <div
                      key={category._id}
                      className="data_group"
                      style={{
                        padding: "20px",
                      }}
                    >
                      <div className="images">
                        {categories.coverImages ? (
                          <>
                            <Image
                              src={categories.coverImages}
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

                      <div
                        className="content"
                        style={{
                          display: "flex",
                          border: "3px solid pink",
                          flexDirection: "column",
                        }}
                      >
                        <p className="price_content">€{categories.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products available for these categories.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;

{
  /* <div
        className="categories_container"
        style={{
          display: "flex",
          border: "3px solid green",
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
          {data.map((category) => (
            <div key={category._id}>
              {category.products && category.products.length > 0 ? (
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

                      <div
                        className="content"
                        style={{
                          display: "flex",
                          border: "3px solid pink",
                          flexDirection: "column",
                        }}
                      >
                        <p className="price_content">
                          €{product.price.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <h3 className="title_product_starproducts">
                          <Link href={`/products/${product.slug}`}>
                            {product.name}
                          </Link>
                        </h3>
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
      </div> */
}
