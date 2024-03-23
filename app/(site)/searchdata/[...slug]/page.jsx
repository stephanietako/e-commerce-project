// le slug
import { fetchDataSearchBarSlug } from "@/sanity/lib/api";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const dynamic = "force-dynamic";
// single page
const AllDetails = async ({ params }) => {
  const slug = params;
  const data = await fetchDataSearchBarSlug(slug);

  console.log("PARAMS ALL !!!!!!!!", data);
  console.log("TITLE SLUG TO ALL", slug);
  return (
    <>
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
          {/* <h1>ICI C EST CATEGORY</h1> */}
          <h1>{data.name} All SINGLE PAGE</h1>
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
            {/* <ImageGallery images={data.images} /> */}
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
                  <h2>NAME:{data.name}</h2>
                  <p>TYPE:{data.type}</p>
                  {/* <p>{data._id}</p> */}
                </span>
                <span className="ref_products_categories">
                  <p
                    style={{
                      color: "gray",
                      fontSize: "10px",
                    }}
                  >
                    REF: {data._id}
                  </p>
                </span>
                <div
                  className="products_price"
                  style={{
                    border: "3px solid black",
                    marginTop: "25px",
                    fontSize: "3rem",
                    borderRadius: "30px",
                    padding: "2rem",
                  }}
                >
                  {/* <span>
                    {" "}
                    <p
                      className="price_content"
                      style={{
                        fontSize: "3rem",
                      }}
                    >
                      €{data.price.toFixed(2)}
                    </p>
                  </span> */}
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
    </>
  );
};
export default AllDetails;

// import { groq } from "next-sanity";
// import getQueryFromSlug from "@helpers/getQueryFromSlug";
// import { sanityClient } from "@lib/sanity.server";
// import SinglePage from "../../(site)/components/SinglePage/SinglePage";

// export async function generateStaticParams() {
//   const paths = await sanityClient.fetch(
//     groq`*[_type in ["product", "category"] && defined(slug.current)][].slug.current`
//   );

//   return paths.map((slug) => ({
//     slug: slug.split("/").filter((p) => p),
//   }));
// }

// /**
//  * Helper function to return the correct version of the document
//  * If we're in "preview mode" and have multiple documents, return the draft
//  */
// function filterDataToSingleItem(data, preview = false) {
//   if (!Array.isArray(data)) {
//     return data;
//   }

//   if (data.length === 1) {
//     return data[0];
//   }

//   if (preview) {
//     return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
//   }

//   return data[0];
// }

// export default async function Page({ params }) {
//   const { slug } = params;

//   const { query, queryParams, docType } = getQueryFromSlug(slug);

//   const pageData = await sanityClient.fetch(query, queryParams);

//   const data = filterDataToSingleItem(pageData, false);

//   return <>{docType === "page" && <SinglePage data={pageData} />}</>;
// }
