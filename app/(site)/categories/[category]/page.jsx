import { getData } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

export const dynamic = "force-dynamic";
// single page route categories
const CategoryDetails = async ({ params }) => {
  const slug = params.category;
  const data = await getData(slug);

  console.log("PARAMS CATEGORY !!!!!!!!", data);
  // console.log("TITLE SLUG CATEGORY", slug);
  return (
    <>
      {data ? (
        <div
          className="container_categories_details"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            // border: "5px solid green",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="title_slug_singlepage_categoy"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              // border: "5px solid red",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1>{data && data.name}</h1>
          </div>
          <div
            className="gallery_container"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              // border: "5px solid pink",
              alignItems: "center",
            }}
          >
            <div
              className="gallery_content"
              style={{
                display: "flex",
                width: "100%",
                // flexDirection: "column",
              }}
            >
              <ImageGallery images={data.images} />
              <div
                className="products_text_container"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  marginTop: "10%",
                }}
              >
                <div
                  className="products_content"
                  style={{
                    display: "flex",
                    width: "32rem",
                    height: "100%",
                    // border: "3px solid white",
                    flexDirection: "column",
                  }}
                >
                  <span>
                    {data.products}
                    <h2>{data.name}</h2>
                    <p>{data.type}</p>
                    {/* <p>{data._id}</p> */}
                  </span>
                  <span className="ref_products_categories">
                    <p
                      style={{
                        color: "gray",
                        fontSize: "8px",
                      }}
                    >
                      REF: {data._id}
                    </p>
                  </span>
                  <div
                    className="products_price"
                    style={{
                      border: "3px solid #000",
                      marginTop: "25px",
                      fontSize: "3rem",
                      borderRadius: "30px",
                      padding: "2rem",
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
                        {data.price.toFixed(2)}€
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
                      <PortableText value={data.content} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};
export default CategoryDetails;
