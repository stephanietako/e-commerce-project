import { getBycategories } from "@/sanity/lib/client";
import { getProductsByCategories } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ByCategory = async () => {
  const data = await getBycategories();
  const subdata = await getProductsByCategories();
  console.log("DATA !!!!!!!!", data);
  console.log("SUBDATA !!!!!!!!", subdata);

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
          flexWrap: "wrap",
        }}
      >
        <h2 className="_bycategory_title">BY CATEGORIES</h2>
      </header>
      {/* /////////// BOUCLE EXTERNE SUBDATA SLUG SLUG & DISPLAY CATEGORIES//////////*/}
      <div className="_bycategories_bloc">
        {subdata.map((categories) => (
          <>
            <div key={categories._id}>
              <p>
                <Link href={`/categories/${categories.slug}`}>
                  {categories.name}
                </Link>
              </p>

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
                <p className="price_content">€{categories.price.toFixed(2)}</p>
              </div>

              <div
                className="display_products_content_bycategories"
                style={{
                  display: "flex",
                  border: "5px solid yellow",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {/* /////////// BOUCLE INTERNE DATA SLUG & DISPLAY PRODUCTS //////////*/}
                {data.map((products) => (
                  <div
                    key={products._id}
                    className="data_group"
                    style={{
                      padding: "20px",
                    }}
                  >
                    {products.products && products.products.length > 0 ? (
                      <div
                        className="display_infos"
                        style={{
                          display: "flex",
                          border: "3px solid red",
                        }}
                      >
                        {products.products.map((product) => (
                          <div
                            key={product._id}
                            className="data_group"
                            style={{
                              padding: "20px",
                            }}
                          >
                            <div>
                              <h3 className="title_products">
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

                    {/* Contenu détaillé de la sous-catégorie */}
                    <div
                      className="content_products"
                      style={{
                        display: "flex",
                        border: "3px solid pink",
                        flexDirection: "column",
                      }}
                    >
                      <div className="product">
                        <h3 className="title_products">{products.name}</h3>
                        <p className="category_name">{products.categories}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* /////////// FIN DATA //////////*/}
              </div>
            </div>
          </>
        ))}
        {/* /////////// FIN SUBDATA //////////*/}
      </div>

      {/* <div
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
      </div> */}
    </>
  );
};
export default ByCategory;
