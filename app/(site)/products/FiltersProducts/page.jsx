"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataProduct } from "../../../../sanity/lib/api";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.css";

const FiltersProducts = () => {
  const [checkedState, setCheckedState] = useState(false);
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
  const handleChange = (e, index) => {
    e.preventDefault();
    const { checked } = e.target;

    // Mettre à jour l'état de la recherche
    setSearchQuery(checked ? filteredProducts[index].name : "");
    // Mettre à jour les produits sélectionnés
    if (checked) {
      setSelectedProducts([...selectedProducts, filteredProducts[index].name]);
    } else {
      if (checkedState) {
        setSearchQuery(checked ? filteredProducts[index].name : "");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h3>Select Products</h3>
      <ul className={styles.products_list}>
        {filteredProducts.map(({ name }, index) => {
          console.log("filteredProducts !!!!!", filteredProducts);
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
                    checked={selectedProducts.includes(name)}
                    onChange={(e) => handleChange(e, index)}

                    // defaultChecked="true"
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
