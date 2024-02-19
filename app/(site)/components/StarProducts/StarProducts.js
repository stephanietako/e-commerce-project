// import { getDataStarProducts } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const StarProducts = async ({ starproducts }) => {
  // const data = await getDataStarProducts();
  // console.log("STAR PRODUCTS ", data);

  return (
    <>
      <header
        className="header_starproducts"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-between",
          border: "2px solid blue",
          alignItems: "center",
          padding: "33px",
          flexWrap: "wrap",
        }}
      >
        <h2 className="_bycategory_title">STARPRODUCTS SELECTION</h2>
      </header>
      {/* Section principale des produits */}
      <section
        className="starproducts_section"
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
          className="__starproducts_bloc"
          style={{
            display: "flex",
            border: "3px solid yellow",
          }}
        >
          {/* Boucle EXTERNE à travers toutes les categories */}
          {starproducts.map((product) => (
            <div key={product._id}>
              <h2>
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h2>

              {/* Vérification de la disponibilité de produits pour cette categorie */}
              {product.categories && product.categories.length > 0 ? (
                <div
                  className="display_infos_products"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                    flexWrap: "wrap",
                  }}
                >
                  {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                  {product.categories.map((subCategory) => (
                    <>
                      <div
                        key={subCategory._id}
                        className="data_group"
                        style={{
                          padding: "20px",
                        }}
                      >
                        {/* Contenu détaillé de la sous-catégorie */}
                        <div
                          className="content_starproducts"
                          style={{
                            display: "flex",
                            border: "3px solid pink",
                            flexDirection: "column",
                          }}
                        >
                          <div className="starproducts">
                            <h3
                              className="title_starproducts_categories"
                              style={{
                                color: "white",
                              }}
                            >
                              <Link href={`/categories/${subCategory.slug}`}>
                                {subCategory.name}
                              </Link>
                            </h3>
                            <div className="images_starproducts">
                              {subCategory.coverImages && (
                                <Image
                                  src={subCategory.coverImages}
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
                            <p className="price_content">
                              €{subCategory.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                      </div>
                    </>
                  ))}

                  {/* fin boucle interne de map de data */}
                </div>
              ) : (
                <p>No category available for this product.</p>
              )}
            </div>
          ))}
          {/* fin boucle externe */}
        </div>
      </section>
    </>
  );
};

export default StarProducts;
