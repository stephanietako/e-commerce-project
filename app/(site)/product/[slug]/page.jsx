import clientConfig from "../../../../sanity/config/client-config";
import { createClient, groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const dynamic = "force-dynamic";

export async function getData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
       _id,
       _createdAt,
       images,
       price,
name,
   content,
       "slug":slug.current,
       "categoryName": category->name,
    }`,
    { slug }
  );
}

const ProductPage = async ({ params }) => {
  const data = await getData(params.slug);
  return (
    <>
      <div>
        <h1>{data.name} Page </h1>
      </div>
      <div
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
          <ImageGallery images={data.images} />
          <div
            className="category_text_container"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="category_content"
              style={{
                display: "flex",
                width: "auto",
                height: "100%",
                border: "3px solid white",
                flexDirection: "column",
              }}
            >
              <span>
                {data.categoryName}
                <h2>{data.name}</h2>
              </span>
              <div
                className="category_price"
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
                    €{data.price.toFixed(2)}
                  </p>
                </span>
                <span>
                  <p>2-4 Day Shipping</p>
                </span>
              </div>
              <div
                className="category_btns"
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
              <div className="category_description">
                <span>
                  {" "}
                  <PortableText value={data.content} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
