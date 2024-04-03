import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
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
        }}
      >
        <div
          className="__productspages_bloc"
          style={{
            display: "flex",
            width: "100%",
            height: " auto",
            border: "2px solid red",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="infos_product"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              padding: "4rem",
              border: "4px solid Green",
              flexDirection: "column",
            }}
          >
            <h3>{product.name}</h3>
            <span>
              <PortableText value={product.content} />
            </span>
            <div
              className="images"
              style={{
                display: "flex",
                width: "100%",
                padding: "4rem",
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
            <span>
              <PortableText value={product.body} />
            </span>
          </div>

          <div
            className="infos_content"
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              justifyContent: "space-around",
              padding: "2rem",
            }}
          >
            {/* <div className="infos">
              <p>{product.name}</p>
            </div> */}
            {/* <span>
              <PortableText value={product.content} />
            </span> */}
            <div className="productspages_display_categories">
              <p>Categories:</p>
              <ul>
                {product.categories.map((category) => (
                  <li
                    className="list_display_categories"
                    style={{
                      display: "flex",
                      border: "3px solid black",
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
                    </span>
                    <span>
                      <p className="price_content">€{category.price}</p>
                    </span>
                    <span>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="link_items"
                      >
                        View Details
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPages;
