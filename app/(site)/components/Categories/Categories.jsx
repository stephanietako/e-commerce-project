// import { getProductsByCategories } from "@/sanity/lib/client";

import Image from "next/image";
import Link from "next/link";
// import { getProductsByCategories } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";
// AFFICHAGE
const Categories = ({ category }) => {
  // const data = await getProductsByCategories();
  // console.log("CATEGORY !!!!!!!!", data);

  return (
    <>
      <header
        className="header_category"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          alignItems: "center",
        }}
      >
        <h2 className="_category">ALL CATEGORIES OF PRODUCTS</h2>
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
        <div
          className="display_category"
          style={{
            display: "flex",
            border: "3px solid violet",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {category.map((categories) => (
            <div key={categories._id}>
              <div>
                <h2 className="title_categories">
                  <Link href={`/categories/${categories.slug}`}>
                    {categories.name}
                  </Link>
                </h2>
              </div>
              {categories.products && categories.products.length > 0 ? (
                <div
                  className="display_infos"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                    borderRadius: "30px",
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
                      llllllllllll
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
                                borderRadius: "30px",
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
                        <span>
                          {" "}
                          <p
                            className="price_content"
                            style={{
                              fontSize: "1.5rem",
                            }}
                          >
                            {categories.price.toFixed(2)}€
                          </p>
                        </span>
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

export default Categories;
