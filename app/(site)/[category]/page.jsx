import { getDataCategory } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const slug = params.category;
  const category = await getDataCategory(slug);

  console.log("CATEGORY !!!!!!", category);
  //////////////////////////////////////
  // console.log("PARAMS CATEGORY !!!!!!!!", params.category);
  // console.log("CATEGORY !!!!!!", category);
  // console.log("La valeur de la variable category est ?????????", category);
  return (
    <section className="newest_section">
      <div className="newest_container">
        <h1>{category.name}</h1>
        <div className="bloc_link">
          <h2>Products of the category {params.catagory}</h2>
        </div>

        <div className="display_product">
          {category.map((product) => (
            <div key={product._id} className="product_card_group">
              <div className="images_products">
                {product.images && (
                  <Image
                    src={product.images}
                    alt="les fleurs"
                    className="product__img"
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
                    {" "}
                    BLBLBLBLBLBLB
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
    </section>
  );
};

export default Category;
