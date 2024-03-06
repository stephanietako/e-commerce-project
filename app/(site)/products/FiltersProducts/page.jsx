"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataProduct } from "../../../../sanity/lib/api";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.css";

const FiltersProducts = ({ defaultChecked }) => {
  // Utilisation de useState pour gérer l'état de la case à cocher et du total
  const [checkedState, setCheckedState] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const productType = searchParams.get("productType");
    // console.log("SEARCHQUERY", searchQuery);
    // console.log("PRODUCTFILTER", productType);
    if (productType) setProductTypeFilter(productType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);
  ////
  // Utilisation de useSWR pour récupérer les données avec fetchData
  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);
  // Gestion de l'erreur
  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    // Mise à jour de l'état de checkedState avec le nouveau tableau mis à jour
    setCheckedState(updatedCheckedState);
  };

  ////////////////
  // Filtrage des produits
  //Our search filter function
  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };
  /////////////////////////
  //Applying our search filter function to our array of countries recieved from the API
  //const filtered = searchFilter(countries);
  const filteredProducts = filterProducts(data || []);
  //Handling the input on our search bar
  const handleChange = (e, index) => {
    const { value, checked } = e.target;
    setSearchQuery(checked ? value : "");

    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? checked : item
    );
    setCheckedState(updatedCheckedState);
  };

  console.log(setSelectedProducts);
  return (
    <div className={styles.container}>
      <h3>Select Products</h3>
      <ul className={styles.products_list}>
        {/* Mapping à travers la liste de garnitures */}
        {filteredProducts.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className={styles.products_list_tem}>
                {/* Case à cocher et libellé */}
                <div className={styles.left_section}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}
                    // onChange={(e) => handleChange(e, index)}
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
              filteredProducts.map((products) => {
                console.log("product !!!!!:", products);
                console.log("product ID !!!!!:", products._id);
                return <ProductsPages key={products._id} product={products} />;
              })
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FiltersProducts;
