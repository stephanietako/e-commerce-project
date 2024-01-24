import { getDataProducts } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/arrow.png";
export const dynamic = "force-dynamic";

const Newest = async () => {
  const data = await getDataProducts();
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
        <h2 className="_products"></h2>
        <p> ICI</p>
        {data.name}
      </header>
      <section
        className="newest_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          border: "2px solid violet",
          alignItems: "center",
        }}
      >
        <div
          className="newest_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="bloc_link"
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
            <h2>STAR PRODUCTS SELECTION</h2>
            <span>
              <h3>All Products</h3>{" "}
              <Link className="all_products" href="/all">
                <Image className="__img" src={arrow} alt="icon flêche" />
              </Link>
            </span>
          </div>
          <div
            className="display_product_newest"
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
            {/* // display des produits */}
            {data.map((product) => (
              <div
                key={product._id}
                className="newest_card_group"
                style={{
                  padding: "20px",
                }}
              >
                <div className="images">
                  {product.coverImages ? (
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
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <div className="newest_content">
                  <div className="product_content">
                    <div className="categories_map">
                      {data.map((category) => (
                        <div key={category._id}>
                          <h3 className="title_product_products">
                            <Link href={`/categories/${category.slug}`}>
                              product {category.name}
                            </Link>
                          </h3>
                          {/* <div>
                    <h3 className="title_product_newest">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3> */}
                          {/* DISPLAY DES CATEGORIES */}
                          {data.categories && data.categories.length > 0 ? (
                            <div
                              className="display_infos"
                              style={{
                                display: "flex",
                                border: "3px solid black",
                              }}
                            >
                              {data.categories.map((subCategory) => (
                                <div
                                  key={subCategory._id}
                                  className="data_group"
                                  style={{
                                    padding: "20px",
                                  }}
                                >
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
                    </div>
                  </div>

                  <p className="price_content">€{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Newest;
