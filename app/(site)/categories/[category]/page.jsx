import { getData } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const dynamic = "force-dynamic";
// single page
const Category = async ({ params }) => {
  const slug = params.category;
  const data = await getData(slug);

  console.log("PARAMS CATEGORY !!!!!!!!", data);
  console.log("TITLE SLUG CATEGORY", slug);
  return (
    <>
      <div className="title_slug_singlepage_categoy">
        <h1>{data.name}ICI C EST CATEGORY</h1>
      </div>
      {/* <div
        className="gallery_container"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          border: "5px solid green",
          alignItems: "center",
        }}
      >
        <div
          className="gallery_content"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <ImageGallery images={category.images} />
          <div
            className="products_text_container"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="products_content"
              style={{
                display: "flex",
                width: "auto",
                height: "100%",
                border: "3px solid white",
                flexDirection: "column",
              }}
            >
              <span>
                {category.categoryName}
                <h2>{category.name}</h2>
              </span>
              <div
                className="products_price"
                style={{
                  border: "3px solid black",
                  marginTop: "25px",
                  fontSize: "3rem",
                }}
              >
                <span>
                  {" "}
                  <p
                    className="price_content"
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    €{category.price.toFixed(2)}
                  </p>
                </span>
                <span>
                  <p>2-4 Day Shipping</p>
                </span>
              </div>
              <div
                className="products_btns"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "30px",
                }}
              >
                <button
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Add to Bag
                </button>
                <button
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Checkout now
                </button>
              </div>
              <div className="products_description">
                <div>
                  <PortableText value={category.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Category;
