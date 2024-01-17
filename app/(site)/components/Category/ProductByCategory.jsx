import { getDataProduct } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

const ProductByCategory = async ({ products }) => {
  const data = await getDataProduct(products);
  console.log(" DATA RECUPERATION DES ELEMENTS DE PRODUIT PAR CATEGORY", data);

  if (!data) {
    return <div>Loading...</div>;
  }
  // regrouper les produits par catégorie
  const groupedProducts = {};
  data.forEach((product) => {
    const categoryName = product.categoryName;

    if (!groupedProducts[categoryName]) {
      groupedProducts[categoryName] = [];
    }

    groupedProducts[categoryName].push(product);
  });

  return (
    <div>
      {Object.keys(groupedProducts).map((categoryName) => (
        <div key={categoryName}>
          <h2>{categoryName}</h2>

          <div
            className="display_product_by_category"
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
            {groupedProducts[categoryName].map((product) => (
              <div
                key={product._id}
                className="category_card_group"
                style={{
                  padding: "20px",
                }}
              >
                <div className="images_categorys">
                  {product.images && (
                    <Image
                      src={product.images}
                      alt="les fleurs"
                      className="category__img"
                      width={200}
                      height={200}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                <div className="content">
                  <div>
                    <h3 className="title">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="category_name">{product.categoryName}</p>
                  </div>
                  <p className="price_content">€{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductByCategory;
