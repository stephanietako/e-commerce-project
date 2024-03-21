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
  // const [categoryTypeFilter, setCategoryTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  /////////////////////////
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    // const categoryType = searchParams.get("categoryType");
    // if (categoryType) setCategoryTypeFilter(categoryType);
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

  //console.log("filteredCategories !!!!!!!!!!!!!!!!!!", filteredCategories);

  return (
    <div className={styles.container_filter_categories}>
      <ul className={styles.categories_list}>
        <div className={styles.__box}>
          <div className={styles.categories_text}>
            {" "}
            <h2
              className={styles.title_select_categories}
              style={{
                display: "block",
                paddingBottom: "1rem",
              }}
            >
              Select Categories
            </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis !
            </p>
          </div>
          {filteredCategories.map(({ name }, index) => {
            const isChecked = selectedCategories.includes(name);
            console.log(
              "isChecked for categories !!!!!!!!!!!!!!!!!!",
              isChecked
            );
            return (
              <li key={index}>
                <div className={styles.categories_list_item}>
                  <div className={styles.check_section}>
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
            <div className={styles.__filtered_categories}>
              {isLoading ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    // height: "35rem",
                    position: "relative",
                    padding: "2rem",
                    marginTop: "11rem",
                  }}
                >
                  Loading...
                </div>
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
