import { getBycategories } from "@/sanity/lib/client";
import { getProductsByCategories } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ByCategory = async () => {
  const data = await getBycategories();
  const subdata = await getProductsByCategories();
  //   console.log("DATA !!!!!!!!", data);
  //   console.log("SUBDATA !!!!!!!!", subdata);

  return (
    <>
      <header
        className="header_category"
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
        <h2 className="_bycategory_title">BY CATEGORIES</h2>
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
          className="_bycategories_bloc"
          style={{
            display: "flex",
            border: "3px solid yellow",
            flexDirection: "column",
          }}
        >
          {/* Boucle EXTERNE à travers toutes les categories */}
          {subdata.map((categories) => (
            <div key={categories._id}>
              <h3
                className="title_products"
                style={{
                  color: "turquoise",
                }}
              >
                <Link href={`/categories/${categories.slug}`}>
                  {categories.name}
                </Link>
              </h3>
              {/* Vérification de la disponibilité de catégories pour cette categorie */}
              {categories.products && categories.products.length > 0 ? (
                <div
                  className="display_infos_categories"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                    flexWrap: "wrap",
                  }}
                >
                  {/*  Boucle INTERNE  à travers toutes les sous-cproduits de la categorie */}
                  {categories.products.map((product) => (
                    <div
                      key={product._id}
                      className="data_group"
                      style={{
                        padding: "20px",
                      }}
                    >
                      {data.map((products) => (
                        <div
                          key={products._id}
                          className="data_group"
                          style={{
                            padding: "20px",
                          }}
                        >
                          {/* Contenu détaillé de la sous-catégorie */}
                          <div
                            className="content_category"
                            style={{
                              display: "flex",
                              border: "3px solid pink",
                              flexDirection: "column",
                            }}
                          >
                            <div className="images_categories">
                              {categories.coverImages ? (
                                <>
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
                                </>
                              ) : (
                                <p>No image available</p>
                              )}
                            </div>
                            {/* Contenu détaillé de la sous-catégorie */}
                            <div
                              className="content_categories"
                              style={{
                                display: "flex",
                                border: "3px solid pink",
                                flexDirection: "column",
                              }}
                            >
                              <div className="product">
                                <h4 className="title_categories">
                                  {categories.name}
                                </h4>
                              </div>
                            </div>
                            {/* /////////////////////*/}
                            <div
                              className="category"
                              style={{
                                display: "flex",
                                border: "3px solid blue",
                                flexDirection: "column",
                              }}
                            >
                              <h3> CATEGORIES NAME {categories.name}</h3>
                              <div
                                className="content"
                                style={{
                                  display: "flex",
                                  border: "3px solid green",
                                  flexDirection: "column",
                                }}
                              >
                                <p className="price_content">
                                  €{categories.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="images_products">
                        {product.coverImages && (
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
                        )}
                      </div>
                    </div>
                  ))}
                  {/* fin boucle interne */}
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
