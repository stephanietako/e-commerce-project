"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataCategory } from "../../../../sanity/lib/api";
import CategoriesPages from "../../components/CategoriesPages/CategoriesPages";
// Styles
import styles from "./styles.module.css";

const FiltersCheckCategories = () => {
  // Utilisation de useState pour gérer l'état de la case à cocher et du total
  const [checkedState, setCheckedState] = useState([]);
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    // console.log("SEARCHQUERY", searchQuery);
    // console.log("CATEGORYFILTER", category);
    if (categoryType) setCategoryTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);
  ////
  // Utilisation de useSWR pour récupérer les données avec fetchData
  const { data, error, isLoading } = useSWR("/categories", fetchDataCategory);
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
  const filterCategories = (categories) => {
    return categories.filter((category) => {
      if (
        categoryTypeFilter &&
        categoryTypeFilter.toLowerCase() !== "all" &&
        category.name.toLowerCase() !== categoryTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !category.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };
  /////////////////////////

  const filteredCategories = filterCategories(data || []);
  // Rendu du composant
  return (
    <div className={styles.container}>
      <h3>Select Sort By Categories</h3>
      <ul className={styles.category_list}>
        {/* Mapping à travers la liste de garnitures */}
        {filteredCategories.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className={styles.categories_list_item}>
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
          <div className="filteredCategories">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              filteredCategories.map((category) => {
                // console.log("Category !!!!!:", category);
                // console.log("Category ID !!!!!:", category._id);
                return (
                  <CategoriesPages key={category._id} category={category} />
                );
              })
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FiltersCheckCategories;
