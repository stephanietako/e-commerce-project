"use client";

// Importation de la liste des garnitures depuis le fichier utils
// import { toppings } from "../../../utils/utils";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataProduct } from "../../../../sanity/lib/api";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Importation des styles
import styles from "./styles.module.css";

const FiltersProducts = () => {
  // Utilisation de useState pour gérer l'état de la case à cocher et du total
  const [checkedState, setCheckedState] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const product = searchParams.get("product");
    // console.log("SEARCHQUERY", searchQuery);
    // console.log("CATEGORYFILTER", product);
    if (product) setProductTypeFilter(product);
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
  // Filtrage des catégories
  const filterProducts = (allproducts) => {
    return allproducts.filter((product) => {
      if (
        productTypeFilter &&
        productTypeFilter.toLowerCase() !== "all" &&
        product.name.toLowerCase() !== productTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };
  /////////////////////////

  const filteredProducts = filterProducts(data || []);
  // Rendu du composant
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
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
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
              filteredProducts.map((product) => {
                console.log("product !!!!!:", product);
                console.log("product ID !!!!!:", product._id);
                return <ProductsPages key={product._id} product={product} />;
              })
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FiltersProducts;
