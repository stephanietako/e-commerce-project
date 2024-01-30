import { getDataProductsPages } from "@/sanity/lib/client";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Products = async () => {
  const allProducts = await getDataProductsPages();
  console.log(" ALL PRODUCTS ", allProducts);
  // ALL PRODUCTS : CATEGORIES PAR PRODUITS
  return (
    <>
      <header
        className="header_products"
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
        <h2 className="_products">ALL PRODUCTS</h2>
        <p> ICI</p>
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
        {/* Conteneur des produits */}
        <div
          className="products_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          {/* Affichage de tous les produits disponibles */}
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
              className="products_content"
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Boucle EXTERNE à travers tous les produits, cette boucle extérieure parcourt tous les produits disponibles. */}
              {allProducts.map((product) => (
                <div key={product._id}>
                  <h3 className="title_products">{product.name}</h3>
                  {/* Vérification de la disponibilité de catégories pour ce produit */}
                  {product.categories && product.categories.length > 0 ? (
                    <div
                      className="display_infos_products"
                      style={{
                        display: "flex",
                        border: "3px solid black",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* DATA GROUP key - Boucle INTERNE SUBCATEGORIES à travers toutes les sous-catégories du produit */}
                      {product.categories.map((subCategory) => (
                        <div
                          key={subCategory._id}
                          className="data_group"
                          style={{
                            padding: "20px",
                          }}
                        >
                          <div className="images_products">
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
                              <h3 className="title_products">
                                {subCategory.name}
                              </h3>
                              <p className="category_name">
                                {subCategory.categories}
                              </p>
                            </div>
                          </div>
                          {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No category available for this product.</p>
                  )}
                </div>
              ))}
              {/* // FIN PRODUCT KEY CLASS PRODUCT CONTENT BOUCLE EXTERIEURE EN DESSOUS DE LA DIV EN DESSOUS DE LA DIV */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// En résumé, la boucle externe traverse tous les produits, et la boucle interne traverse toutes les sous-catégories pour chaque produit. Cela permet de traiter les informations liées aux sous-catégories de chaque produit de manière structurée et d'afficher les détails de chaque sous-catégorie associée à un produit particulier.
export default Products;
