import { getDataProductsPages } from "@/sanity/lib/client";
// import ImageGallery from "../ImageGallery/ImageGallery";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Products = async () => {
  const allProducts = await getDataProductsPages();
  console.log(" ALL PRODUCTS ", allProducts);

  return (
    <section
      className="products_section"
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        border: "2px solid violet",
        alignItems: "center",
      }}
    >
      <div
        className="title_slug_page"
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
        <h2>{allProducts.name} ICI C EST ALL PRODUCTS </h2>
      </div>
      <div
        className="products_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          flexDirection: "column",
        }}
      >
        <div
          className="display_all_products"
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
          <div
            className="display_product"
            style={{
              display: "flex",
              border: "3px solid violet",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {allProducts.map((product) => (
              <div
                key={product._id}
                className="product_card_group"
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

                <div className="product_content">
                  <div>
                    <h3 className="title_product_products">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p> {product.categoryName}</p>
                  </div>

                  <p className="price_content">€{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
