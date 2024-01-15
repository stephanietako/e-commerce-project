import clientConfig from "../../../sanity/config/client-config";
import { createClient, groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { getData as fetchProductData } from "../components/Newest/Newest";
async function getData(category) {
  console.log("La valeur de la variable category est :", category);

  const query = groq`*[_type == 'product' && category->name == "${category}"]{
  _id,
    "images": images[0].asset->url,
      price,
       name,
    "slug": slug.current,
    "categoryName": category->name,
}
`;
  console.log("La valeur de la variable $category est :", `${category}`);
  console.log("La requête Groq est :", query);
  const data = await createClient(clientConfig).fetch(query, {
    cache: "no-store",
  });
  console.log("La valeur de la variable data est ", data);
  console.log("La valeur de la variable category est :", category);
  console.log("La requête Groq est :", query);

  return data;
}

const Category = async ({ params }) => {
  const data = await fetchProductData(params.category);
  console.log("Data for category:", data);
  console.log("PARAMS !!!!!!!!", params);

  console.log("La valeur de la variable data est ?????????", data);

  return (
    <section className="newest_section">
      <div className="newest_container">
        <div className="bloc_link">
          <h2>Products of the category {params.category} !!!!</h2>
        </div>

        <div className="display_product">
          {data.map((product) => (
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
