"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
const FiltersProductsCompt = ({ data, isLoading, error }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Filtrage des produits
  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  // Produits filtrés en fonction de la sélection ou par défaut sur "Palmiers Tropicaux"
  const getDisplayedProducts = () => {
    if (selectedProducts.length === 0) {
      return data.filter((product) =>
        product.name.includes("Palmiers Tropicaux")
      );
    }
    return data.filter((product) => selectedProducts.includes(product.name));
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
                        onChange={(event) => handleChange(event)}
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
        </div>
      </ul>
      <div className={styles.__filtered_products}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filterProducts(getDisplayedProducts()).map((product) => (
            <ProductsPages key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default FiltersProductsCompt;
