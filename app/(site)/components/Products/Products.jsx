import { getDataProductsPages } from "@/sanity/lib/client";
// import ImageGallery from "../ImageGallery/ImageGallery";
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
        {allProducts.name}
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
              className="display_product"
              style={{
                display: "flex",
                border: "3px solid violet",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {allProducts.map((product) => (
                <div
                  key={product._id}
                  className="product_card_group"
                  style={{
                    padding: "20px",
                  }}
                >
                  {/* <div className="images">
                    {product.coverImages ? (
                      <>
                        <Image
                          src={product.coverImages}
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
                  </div> */}

                  <div className="product_content">
                    <div>
                      <h3 className="title_product_products">
                        <Link href={`/products/${product.slug}`}>
                          product {product.name}
                        </Link>
                      </h3>
                      {/* // display des categories */}
                      {allProducts.map((category) => (
                        <div key={category._id}>
                          <h4>categories {category.name}</h4>
                          {category.categories &&
                          category.categories.length > 0 ? (
                            <div
                              className="display_infos"
                              style={{
                                display: "flex",
                                border: "3px solid black",
                              }}
                            >
                              {category.categories.map((subCategory) => (
                                <div
                                  key={subCategory._id}
                                  className="data_group"
                                  style={{
                                    padding: "20px",
                                  }}
                                >
                                  <div className="images">
                                    {subCategory.images && (
                                      <Image
                                        src={subCategory.images}
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
                                      <h3 className="title">
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
                            <p>No products available for this category.</p>
                          )}
                        </div>
                      ))}
                      {/* Fin du display de categories */}
                      {/* <p> {product.categories}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
