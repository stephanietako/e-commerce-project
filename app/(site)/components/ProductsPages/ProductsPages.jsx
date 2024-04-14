import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";
// DISPLAY
const ProductsPages = ({ product }) => {
  return (
    <>
      <section
        className="productspages_section"
        style={{
          display: "flex",
          width: "100%",
          height: " auto",
          justifyContent: "center",
          margin: "4rem",
        }}
      >
        <div
          className="__productspages_bloc"
          style={{
            display: "flex",
            width: "100%",
            height: " auto",
            border: "3px solid blue",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>{product.name}</h3>
          <div
            className="images"
            style={{
              display: "flex",
              width: "100%",
              padding: "2rem",
              justifyContent: "center",
              border: "3px solid #000",
            }}
          >
            {product.coverImages ? (
              <Image
                src={product.coverImages}
                alt="les fleurs"
                className="product__img"
                width={1000}
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
            className="infos_product"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              padding: "1rem",
              border: "3px solid red",
              flexDirection: "column",
            }}
          >
            <span>
              <PortableText value={product.content} />
            </span>

            <span>
              <PortableText value={product.body} />
            </span>
          </div>

          <div className="productspages_display_categories">
            <p>Toutes nos catégories de {product.name}:</p>
            <ul
              className="productspages_display_content"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                justifyContent: "center",
              }}
            >
              {product.categories.map((category) => (
                <div key={category._id}>
                  <>
                    <li
                      className="list_display_categories"
                      style={{
                        display: "flex",
                        border: "3px solid #000",
                        flexDirection: "column",
                        padding: "1rem",
                        margin: "1rem",
                        borderRadius: "30px",
                      }}
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
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr
        style={{
          background: "lime",
          color: "lime",
          borderColor: "lime",
          height: "3px",
          width: "100%",
        }}
      />
    </>
  );
};

export default ProductsPages;
