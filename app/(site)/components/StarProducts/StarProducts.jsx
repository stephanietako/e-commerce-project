import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
export const dynamic = "force-dynamic";

const StarProducts = ({ starproducts }) => {
  return (
    <>
      <header
        className="header_starproducts"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "33px",
          flexWrap: "wrap",
        }}
      >
        <h2 className="_bycategory_main_title">NOS PRODUITS STAR</h2>
      </header>
      {/* Section principale des produits */}
      <section
        className="starproducts_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <div
          className="__starproducts_bloc"
          style={{
            display: "flex",
            width: "auto",
            height: "auto",
            // border: "2px solid violet",
            alignItems: "center",
            flexWrap: "wrap",
            border: "3px solid black",
            borderRadius: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "2rem",
            padding: "2rem",
          }}
        >
          {/* Boucle EXTERNE à travers toutes les categories */}
          {starproducts.map((product) => (
            <div key={product._id}>
              <h2
                className="title_starproducts_products"
                style={{
                  paddingLeft: "2rem",
                }}
              >
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h2>

              {/* Vérification de la disponibilité de produits pour cette categorie */}
              {product.categories && product.categories.length > 0 ? (
                <div
                  className="display_infos_products"
                  style={{
                    display: "flex",
                    // border: "3px solid black",
                    flexWrap: "wrap",
                    borderRadius: "30px",
                    padding: "2rem",
                    justifyContent: "space-around",
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
                          borderRadius: "30px",
                          border: "2px solid #000",
                        }}
                      >
                        {/* Contenu détaillé de la sous-catégorie */}
                        <div
                          className="content_starproducts"
                          style={{
                            display: "flex",
                            // border: "3px solid pink",
                            flexDirection: "column",
                          }}
                        >
                          <div className="starproducts">
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
                                    borderRadius: "30px",
                                  }}
                                />
                              )}
                            </div>
                            <h3 className="title_starproducts_categories">
                              <Link href={`/categories/${subCategory.slug}`}>
                                {subCategory.name}
                              </Link>
                            </h3>
                            <p className="price_content">
                              €{subCategory.price.toFixed(2)}
                            </p>
                            <span>
                              <PortableText value={subCategory.content} />
                            </span>
                            <span className="ref_products_categories">
                              {" "}
                              <p
                                style={{
                                  color: "gray",
                                  fontSize: "10px",
                                }}
                              >
                                REF: {product._id}
                              </p>
                            </span>
                          </div>
                        </div>
                        {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                      </div>
                    </>
                  ))}

                  {/* fin boucle interne de map de data */}
                </div>
              ) : (
                <p>1No category available for this product.</p>
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
