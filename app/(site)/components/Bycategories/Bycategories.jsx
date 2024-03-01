// import { getCategories } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ByCategory = async ({ bycategory }) => {
  // const data = await getCategories();

  return (
    <>
      <header
        className="header_category"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-evenly",
          border: "2px solid blue",
          alignItems: "center",
          padding: "33px",
          flexWrap: "wrap",
        }}
      >
        <h2 className="_bycategory_title">BY CATEGORIES</h2>
        {/* <div
          className="nav_filter_radio"
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
        ></div> */}
      </header>
      {/* Section principale des produits */}
      <section
        className="products_section"
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
          className="__bycategories_bloc"
          style={{
            display: "flex",
            border: "3px solid yellow",
            flexDirection: "column",
          }}
        >
          {/* Boucle EXTERNE à travers toutes les categories */}
          {bycategory.map((categories) => (
            <div key={categories._id}>
              <h2>
                <Link href={`/categories/${categories.slug}`}>
                  {categories.name}
                </Link>
              </h2>

              {/* Vérification de la disponibilité de produits pour cette categorie */}
              {categories.products && categories.products.length > 0 ? (
                <div
                  className="display_infos_products"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                    flexWrap: "wrap",
                  }}
                >
                  {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                  {categories.products.map((subCategory) => (
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
                          className="content_products"
                          style={{
                            display: "flex",
                            border: "3px solid pink",
                            flexDirection: "column",
                          }}
                        >
                          <div className="product">
                            <h3
                              className="title_products"
                              style={{
                                color: "white",
                              }}
                            >
                              <Link href={`/products/${subCategory.slug}`}>
                                {subCategory.name}
                              </Link>
                            </h3>
                            <div className="images_products">
                              {categories.coverImages && (
                                <Image
                                  src={categories.coverImages}
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
                              €{categories.price.toFixed(2)}
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
                <p>No products available for this category.</p>
              )}
            </div>
          ))}
          {/* fin boucle externe */}
        </div>
      </section>
    </>
  );
};
export default ByCategory;
