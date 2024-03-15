"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchData } from "@/sanity/lib/api";
import CategoriesPages from "../../components/CategoriesPages/CategoriesPages";
// Styles
import styles from "./styles.module.css";

const FiltersCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryTypeFilter, setCategoryTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    if (categoryType) setCategoryTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  ///////////////
  // Filtrage des categories
  const filterCategories = (categories) => {
    return categories.filter((el) => el.name.includes(searchQuery));
  };

  const filteredCategories = filterCategories(data || []);

  const handleChange = (event) => {
    const checkedId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, checkedId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== checkedId)
      );
    }
  };

  console.log("filteredCategories !!!!!!!!!!!!!!!!!!", filteredCategories);

  return (
    <div className={styles.container}>
      <h3>Select Categories</h3>
      <ul className={styles.categories_list}>
        {filteredCategories.map(({ name }, index) => {
          const isChecked = selectedCategories.includes(name);
          console.log("isChecked for categories !!!!!!!!!!!!!!!!!!", isChecked);
          return (
            <li key={index}>
              <div className={styles.categories_list_tem}>
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
          <div className="filteredCategories">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              data
                .filter(
                  ({ name }) =>
                    // Vérifie si le nom du produit est inclus dans les produits sélectionnés ET s'il correspond à la recherche
                    selectedCategories.includes(name) &&
                    name.includes(searchQuery)
                )
                .map((category) => (
                  <CategoriesPages key={category._id} category={category} />
                ))
            )}
          </div>
          {/* <div className="filteredCategories">
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
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default FiltersCategories;
