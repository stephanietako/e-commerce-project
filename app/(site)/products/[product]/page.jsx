import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";
// single page
const ProductsDetails = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  return (
    <>
      <section
        className="productsDetails_section"
        style={{
          display: "flex",
          width: "100%",
          height: " auto",
          justifyContent: "center",
          margin: "4rem",
        }}
      >
        <div
          className="__productsDetails_bloc"
          style={{
            marginTop: "6rem",
          }}
        >
          {product ? (
            <div
              className="container_products_details"
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
                className="title_slug_singlepage_product"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  // border: "5px solid red",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>{product && product.name}</h1>
              </div>

              <div
                className="images"
                style={{
                  display: "flex",
                  width: "auto",
                  height: "auto",
                  padding: "1rem",
                }}
              >
                {product.coverImages ? (
                  <Image
                    src={product.coverImages}
                    alt="les fleurs"
                    className="product__img"
                    width={300}
                    height={300}
                    style={{
                      objectFit: "cover",
                      borderRadius: "30px",
                    }}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div
                className="products_content"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <div className="products_infos">
                  {/* <p>{product._type}</p> */}

                  <span>
                    <PortableText value={product.content} />
                  </span>
                  <span>{product.body}</span>
                  <span className="ref_products_categories">
                    <p
                      style={{
                        color: "gray",
                        fontSize: "10px",
                      }}
                    >
                      REF: {product._id}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p>Not found</p>
          )}
        </div>
        <div
          className="productspages_display_categories"
          style={{
            marginTop: "2rem",
          }}
        >
          <p>Toutes nos catégories de {product.name}:</p>
          <ul
            className="display_categories"
            style={{
              display: "flex",
              width: "100%",
              border: "2px solid green",
            }}
          >
            {product.categories.map((category) => (
              <>
                <li
                  className="__list_display_categories"
                  style={{
                    display: "flex",
                    border: "3px solid #000",
                    flexDirection: "column",
                    padding: "1rem",
                    margin: "1rem",
                    borderRadius: "30px",
                  }}
                  key={category._id}
                >
                  <h3>
                    <Link href={`/categories/${category.slug}`}>
                      {category.name}
                    </Link>
                  </h3>
                  <span>
                    {" "}
                    <div
                      className="images"
                      style={{
                        padding: "0.5rem",
                      }}
                    >
                      {category.coverImages ? (
                        <Image
                          src={category.coverImages}
                          alt="les fleurs"
                          className="product__img"
                          width={180}
                          height={180}
                          style={{
                            objectFit: "cover",
                            borderRadius: "30px",
                          }}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </div>
                  </span>
                  <span>
                    <p className="price_content">€{category.price}</p>
                  </span>
                  <span>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="link"
                    >
                      View Details
                    </Link>
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default ProductsDetails;
