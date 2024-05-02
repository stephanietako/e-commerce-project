import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import CheckboxCategories from "../CheckboxCategories/CheckboxCategories";

import { Suspense } from "react";

export const dynamic = "force-dynamic";
// DISPLAY
const ByCategory = ({ bycategory }) => {
  return (
    <>
      <div
        className="categories_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <div
          className="bycategories_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_categories"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="products_content"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="section_checkbox_categories"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="_checkbox"
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    // justifyContent: "center",
                    // border: "4px solid pink",
                  }}
                >
                  <Suspense fallback={<h2>In Progress...</h2>}>
                    <CheckboxCategories />
                  </Suspense>
                </div>
              </div>
              {/* ////////////////////////////////////////////// */}
              <div
                className="categories_cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "85%",
                  height: "auto",
                  justifyContent: "flex-start",
                }}
              >
                {bycategory.map((categories) => (
                  <div key={categories._id}>
                    {categories.products && categories.products.length > 0 ? (
                      <div
                        className="display_infos_products"
                        style={{
                          display: "flex",
                          border: "3px solid black",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          margin: "0.5rem",
                          borderRadius: "30px",
                          padding: "1rem",

                          width: "12rem",
                          height: "24rem",
                        }}
                      >
                        <div
                          className="main_title_categories"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "auto",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <h2>
                            <Link href={`/categories/${categories.slug}`}>
                              {categories.name}
                            </Link>
                          </h2>
                        </div>

                        {categories.products.map((product) => (
                          <React.Fragment key={product._id}>
                            <div
                              className="data_group"
                              style={{
                                padding: "9px",
                              }}
                            >
                              <div
                                className="content_categories"
                                style={{
                                  display: "flex",
                                  // border: "3px solid pink",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="product">
                                  <div className="images_products_categories">
                                    <div
                                      className="bloc_img_products__categories"
                                      style={{
                                        display: "flex",
                                        width: "auto",
                                        height: "auto",
                                        justifyContent: "center",
                                        padding: "0.5rem",
                                      }}
                                    >
                                      {categories.coverImages && (
                                        <Image
                                          src={categories.coverImages}
                                          alt="les fleurs"
                                          className="product__img"
                                          width={150}
                                          height={150}
                                          style={{
                                            display: "block",
                                            objectFit: "cover",
                                            borderRadius: "30px",
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <h3 className="title_products">
                                    <Link href={`/products/${product.slug}`}>
                                      {product.name}
                                    </Link>
                                  </h3>
                                  <div
                                    className="content"
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <span>
                                      {" "}
                                      <p
                                        className="price_content"
                                        style={{
                                          fontSize: "1rem",
                                          textAlign: "right",
                                        }}
                                      >
                                        {categories.price.toFixed(2)}€
                                      </p>
                                    </span>
                                  </div>
                                  <div>
                                    <PortableText value={categories.content} />
                                  </div>
                                  <div className="bycategories_link">
                                    <Link
                                      href={`/categories/${categories.slug}`}
                                      className="link"
                                    >
                                      View Details
                                    </Link>
                                  </div>
                                  <span className="ref_products_categories">
                                    <p
                                      style={{
                                        color: "gray",
                                        fontSize: "8px",
                                      }}
                                    >
                                      REF: {categories._id}
                                    </p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <p>No products available for this category.</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ByCategory;
