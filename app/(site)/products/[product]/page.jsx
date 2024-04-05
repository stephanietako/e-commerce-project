import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
//import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { getCategories } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";
// single page
const ProductsDetails = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);
  const display = await getCategories();
  // console.log("TITLE SLUG Product", slug);
  // console.log("Product!!!!!!!!!!!!", product);

  return (
    <>
      <div className="title_slug_singlepage_product">
        <h1>{product.name} ICI C EST PRODUCT !!!!!</h1>
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
        <p>
          ICI JE VAIS CREER UN DISPLAY DE CHAQUE PRODUIT AVEC TOUTES LES
          CATEGORIES PAR PRODUIT
        </p>
        <div
          className="categories_cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "auto",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <h3
            className="_bycategory_subtitle"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "auto",
              justifyContent: "center",
            }}
          >
            Toutes nos categories de produits
          </h3>

          {/* Boucle EXTERNE à travers toutes les categories */}
          {display.map((categories) => (
            <div key={categories._id}>
              {/* Vérification de la disponibilité de produits pour cette categorie */}
              {categories.products && categories.products.length > 0 ? (
                <div
                  className="display_infos_products"
                  style={{
                    display: "flex",
                    border: "3px solid black",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "2rem",
                    borderRadius: "30px",
                    padding: "2rem",
                  }}
                >
                  <div
                    className="main_title_categories"
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "auto",
                      alignItems: "center",
                      padding: "14px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h2>
                      <Link href={`/categories/${categories.slug}`}>
                        {categories.name}
                      </Link>
                    </h2>
                  </div>
                  {/*  Boucle INTERNE  à travers toutes les sous-produits de la categorie */}
                  {categories.products.map((product) => (
                    <>
                      <div
                        key={product._id}
                        className="data_group"
                        style={{
                          padding: "20px",
                        }}
                      >
                        {/* Contenu détaillé de la sous-catégorie */}
                        <div
                          className="content_categories"
                          style={{
                            display: "flex",
                            // border: "3px solid pink",
                            flexDirection: "column",
                          }}
                        >
                          <div className="product">
                            <h3
                              className="title_products"
                              style={{
                                color: "#fff",
                              }}
                            >
                              <Link href={`/products/${product.slug}`}>
                                {product.name}
                              </Link>
                            </h3>
                            <div className="images_products_categories">
                              {categories.coverImages && (
                                <Image
                                  src={categories.coverImages}
                                  alt="les fleurs"
                                  className="product__img"
                                  width={180}
                                  height={180}
                                  style={{
                                    objectFit: "cover",
                                    borderRadius: "30px",
                                  }}
                                />
                              )}
                            </div>
                            <div
                              className="content"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <p className="price_content">
                                €{categories.price.toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <PortableText value={categories.content} />
                            </div>
                            <span className="ref_products_categories">
                              <p
                                style={{
                                  color: "gray",
                                  fontSize: "10px",
                                }}
                              >
                                REF: {categories._id}
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ) : (
                <p>No products available for this category.</p>
              )}
            </div>
          ))}
          {/* fin boucle externe */}
        </div>
      </div>
    </>
  );
};
export default ProductsDetails;
