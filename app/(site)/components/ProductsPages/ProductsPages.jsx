import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";
// DISPLAY
const ProductsPages = ({ product }) => {
  return (
    <>
      <header
        className="header_productspages"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-between",
          border: "2px solid turquoise",
          alignItems: "center",
          padding: "33px",
          flexWrap: "wrap",
        }}
      >
        <h2 className="_byproduct_title">PRODUCTS PAGES CHECKBOX SELECTION</h2>
      </header>
      <section
        className="productspages_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          border: "2px solid violet",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          className="__productspages_bloc"
          style={{
            display: "flex",
            border: "3px solid yellow",
            flexDirection: "column",
          }}
        >
          <div
            className="images"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {product.coverImages ? (
              <>
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
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className="infos_content">
            <div className="infos">
              <p>{product.name}</p>
            </div>

            <div
              className="productspages_display"
              style={{
                border: "4px solid black",
                display: "flex",
                width: "auto",
                height: "auto",
                justifyContent: "center",
              }}
            >
              <Link href={`/products/${product.slug}`} className="link_items">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPages;
