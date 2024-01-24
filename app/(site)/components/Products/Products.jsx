import { getDataProductsPages } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Products = async () => {
  const allProducts = await getDataProductsPages();
  console.log(" ALL PRODUCTS ", allProducts);

  return (
    <>
      <header
        className="header_products"
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
        <h2 className="_products">ALL PRODUCTS</h2>
        <p> ICI</p>
        <Link href={`/products/${allProducts.slug}`}>{allProducts.name}</Link>
      </header>
      <section
        className="products_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          border: "2px solid violet",
          alignItems: "center",
        }}
      >
        <div
          className="products_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_products"
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
            <div
              className="display_products"
              style={{
                display: "flex",
                border: "3px solid violet",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <div className="products_content">
                <h3 className="title_product_products">
                  <Link href={`/products/${allProducts.slug}`}>
                    {allProducts.name}
                  </Link>
                </h3>
                <div className="categories_map">
                  {allProducts.map((product) => (
                    <div key={product._id}>
                      <h3 className="title_products">{product.name}</h3>
                      <Link href={`/products/${product.name}`}>
                        {product.name}
                      </Link>
                      {/* // display des categories */}
                      {product.categories && product.categories.length > 0 ? (
                        <div
                          className="display_infos_products"
                          style={{
                            display: "flex",
                            border: "3px solid black",
                          }}
                        >
                          {product.categories.map((subCategory) => (
                            <div
                              key={subCategory._id}
                              className="data_group"
                              style={{
                                padding: "20px",
                              }}
                            >
                              <div className="images_products">
                                {subCategory.coverImages && (
                                  <Image
                                    src={subCategory.coverImages}
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
                                className="content_products"
                                style={{
                                  display: "flex",
                                  border: "3px solid pink",
                                  flexDirection: "column",
                                }}
                              >
                                <div>
                                  <h3 className="title_products">
                                    {subCategory.name}
                                  </h3>
                                  <p className="category_name">
                                    {subCategory.categories}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No category available for this product.</p>
                      )}
                    </div>
                  ))}
                  {/* Fin du display de categories */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
