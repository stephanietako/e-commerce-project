import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

export const dynamic = "force-dynamic";
// single page
const Products = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  console.log("TITLE SLUG Product", slug);
  console.log("Product!!!!!!!!!!!!", product);

  return (
    <>
      <div className="title_slug_singlepage_product">
        <h1>{product.name} ICI C EST PRODUCTS PRODUCT</h1>
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
          <ImageGallery images={product.images} />
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
                {product.categoryName}
                <h2>{product.name}</h2>
              </span>
              <div className="products_description_body">
                <div>
                  <PortableText value={product.body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
