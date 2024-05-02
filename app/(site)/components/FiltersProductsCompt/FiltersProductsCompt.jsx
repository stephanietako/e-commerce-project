"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.scss";

const FiltersProductsCompt = ({ data, isLoading, error }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Ajout de setSearchQuery
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const handleChange = (event) => {
    const checkedId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedProducts([...selectedProducts, checkedId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== checkedId));
    }
  };

  // Filtrage des categories
  const filterCategories = (categories) => {
    return categories.filter((el) => el.name.includes(searchQuery));
  };
  return (
    <div className={styles.container_filter_products}>
      <ul className={styles.filter_products__list}>
        <div className={styles.filter_products__list__box}>
          {data &&
            data.map(({ name }, index) => {
              const isChecked = selectedProducts.includes(name);

              return (
                <li key={index}>
                  <div className={styles.filter_products__item}>
                    <div className={styles.check_section}>
                      <input
                        type="checkbox"
                        id={`custom_checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={isChecked}
                        onChange={(event) => handleChange(event, index)}
                        // styles={customStyles}
                      />
                      <label
                        htmlFor={`custom_checkbox-${index}`}
                        style={{
                          color: "gray",
                          paddingLeft: "0.3rem",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {name}
                      </label>
                    </div>
                  </div>
                </li>
              );
            })}
          <li>
            <div className={styles.__filtered_products}>
              {isLoading ? (
                <div
                // style={{
                //   display: "flex",
                //   width: "100%",
                //   // height: "35rem",
                //   position: "relative",
                //   padding: "2rem",
                //   marginTop: "11rem",
                // }}
                >
                  Loading...
                </div>
              ) : (
                data
                  .filter(
                    ({ name }) =>
                      // Vérifie si le nom du produit est inclus dans les produits sélectionnés ET s'il correspond à la recherche
                      selectedProducts.includes(name) &&
                      name.includes(searchQuery)
                  )
                  .map((product) => (
                    <ProductsPages key={product._id} product={product} />
                  ))
              )}
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FiltersProductsCompt;
