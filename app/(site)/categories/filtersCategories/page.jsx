"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchData } from "@/sanity/lib/api";
import CategoriesPages from "../../components/CategoriesPages/CategoriesPages";
// Styles
import styles from "./styles.module.scss";

const FiltersCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
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

  return (
    <div className={styles.container_filter_categories}>
      COUCOU !!!!
      <ul className={styles.categories__list}>
        <div className={styles.categories__box}>
          {filteredCategories.map(({ name }, index) => {
            const isChecked = selectedCategories.includes(name);

            return (
              <li key={index}>
                <div className={styles.categories__item}>
                  <div className={styles.check_section}>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={isChecked}
                      onChange={(event) => handleChange(event, index)}
                    />
                    <label
                      htmlFor={`custom-checkbox-${index}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "gray",
                        paddingLeft: "0.3rem",
                        alignContent: "center",
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
            <div className={styles.__filtered_categories}>
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
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FiltersCategories;
