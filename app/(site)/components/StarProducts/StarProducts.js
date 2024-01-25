import { getDataStarProducts } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/arrow.png";

export const dynamic = "force-dynamic";

const StarProducts = async () => {
  const data = await getDataStarProducts();
  console.log("STAR PRODUCTS ", data);

  return (
    <section
      className="starproducts_section"
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        border: "2px solid violet",
        alignItems: "center",
      }}
    >
      <div
        className="starproducts_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          flexDirection: "column",
        }}
      >
        <div
          className="bloc_link"
          style={{
            display: "flex",
            width: "auto",
            height: "auto",
            justifyContent: "space-between",
            border: "2px solid blue",
            alignItems: "center",
            padding: "33px",
          }}
        >
          <h2>STARPRODUCTS PRODUCTS SECTION </h2>
          <span>
            <h3>All Products</h3>{" "}
            <Link className="all_products" href="/all">
              <Image className="__img" src={arrow} alt="icon flêche" />
            </Link>
          </span>
        </div>
        <div
          className="display_product_starproducts"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid yellow",
            flexWrap: "wrap",
          }}
        >
          {data.map((product) => (
            <div
              key={product._id}
              className="starproducts_card_group"
              style={{
                padding: "20px",
              }}
            >
              <div className="images">
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

              <div className="starproducts_content">
                <div>
                  <h3 className="title_product_starproducts">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p>{product.categories}</p>
                </div>
                <p className="price_content">€{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarProducts;
