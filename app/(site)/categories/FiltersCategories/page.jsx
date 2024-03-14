"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
// import Search from "../components/Search/Search";
import { fetchData } from "@/sanity/lib/api";
import CategoriesPages from "../../components/CategoriesPages/CategoriesPages";
// Styles
import styles from "./styles.module.css";

const FiltersCategories = () => {
  // Utilisation de useState pour gérer l'état de la case à cocher et du total
  const [checkedState, setCheckedState] = useState([]);
  const [categoryTypeFilter, setCategoryTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    // console.log("SEARCHQUERY", searchQuery);
    // console.log("CATEGORYFILTER", categoryType);
    if (categoryType) setCategoryTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);
  ////
  // Utilisation de useSWR pour récupérer les données avec fetchData
  const { data, error, isLoading } = useSWR("/categories", fetchData);
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
  const filterCategories = (categories) => {
    return categories.filter((el) => el.name.includes(searchQuery));
  };
  /////////////////////////
  //Applying our search filter function to our array of countries recieved from the API
  //const filtered = searchFilter(countries);
  const filteredCategories = filterCategories(data || []);
  //Handling the input on our search bar
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3>Select Categories</h3>
      <ul className={styles.categories_list}>
        {/* Mapping à travers la liste de garnitures */}
        {filteredCategories.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className={styles.categories_list_tem}>
                {/* Case à cocher et libellé */}
                <div className={styles.left_section}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}
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
              filteredCategories.map((categories) => {
                // console.log("category !!!!!:", categories);
                // console.log("category ID !!!!!:", categories._id);
                return (
                  <CategoriesPages key={categories._id} category={categories} />
                );
              })
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FiltersCategories;
