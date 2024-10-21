"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ProductsPages from "../../components/ProductsPages/ProductsPages";
// Styles
import styles from "./styles.module.scss";
//Assets
import bg from "@/public/assets/palmtrees_leaf.png";
export const dynamic = "force-dynamic";

const FiltersProductsCompt = ({ data, isLoading, error }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noSelectionMessage, setNoSelectionMessage] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      console.log("Produits disponibles:", data);

      // Sélectionne "Palmiers" par défaut si aucune sélection n'est faite
      if (selectedProducts.length === 0) {
        const defaultProduct = data.find(
          (product) => product.name.toLowerCase() === "palmiers"
        );
        if (defaultProduct) {
          setSelectedProducts([defaultProduct.name]);
          setNoSelectionMessage(false);
        } else {
          setNoSelectionMessage(true);
        }
      }
    }
    // eslint-disable-next-line
  }, [data]);

  const handleChange = (event) => {
    const checkedId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedProducts([...selectedProducts, checkedId]);
      setNoSelectionMessage(false);
    } else {
      const updatedSelectedProducts = selectedProducts.filter(
        (id) => id !== checkedId
      );
      setSelectedProducts(updatedSelectedProducts);

      // Afficher le message si aucun produit n'est sélectionné après la désélection
      if (updatedSelectedProducts.length === 0) {
        setNoSelectionMessage(true);
      }
    }
  };

  // Filtrage des produits
  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  // Produits filtrés en fonction de la sélection
  const getDisplayedProducts = () => {
    // Filtre les produits selon la sélection
    return data.filter((product) => selectedProducts.includes(product.name));
  };

  return (
    <div className={styles.container_filter_products_compt}>
      <ul className={styles.filter_products_compt__list}>
        <div className={styles.filter_products_compt__list__box}>
          {data &&
            data.map(({ name }, index) => {
              const isChecked = selectedProducts.includes(name);

              return (
                <li key={index}>
                  <div className={styles.filter_products_compt__item}>
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
      <div className={styles.__filtered_products_compt}>
        {isLoading ? (
          <div>Loading...</div>
        ) : noSelectionMessage ? (
          <div className={styles.__filtered_products_compt__empty_choice}>
            <Image
              src={bg}
              alt="Feuilles de palmiers"
              loading="lazy"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.bg__img}
            />

            <h2 id={styles.bg__img_title}>CHOISIR UN PRODUIT DANS LA LISTE</h2>
            <br />
            <p id={styles.bg__img_text}>
              Veuillez cocher un produit dans la liste
            </p>
          </div>
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
