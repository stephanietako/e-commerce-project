"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataProduct } from "../../../../sanity/lib/api";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.css";

const FiltersProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const productType = searchParams.get("productType");
    if (productType) setProductTypeFilter(productType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  // Filtrage des produits
  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  const filteredProducts = filterProducts(data || []);

  const handleChange = (event) => {
    const checkedId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedProducts([...selectedProducts, checkedId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== checkedId));
    }
  };

  console.log("filteredProducts !!!!!!!!!!!!!!!!!!", filteredProducts);

  return (
    <div className={styles.container}>
      <h3>Select Products</h3>
      <ul className={styles.products_list}>
        {filteredProducts.map(({ name }, index) => {
          const isChecked = selectedProducts.includes(name);
          console.log("isChecked !!!!!!!!!!!!!!!!!!", isChecked);
          return (
            <li key={index}>
              <div className={styles.products_list_tem}>
                <div className={styles.left_section}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={isChecked}
                    onChange={(event) => handleChange(event, index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="filteredProducts">
            {isLoading ? (
              <div>Loading...</div>
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
      </ul>
    </div>
  );
};

export default FiltersProducts;
