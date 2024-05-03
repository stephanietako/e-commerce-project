"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoriesPages from "../CategoriesPages/CategoriesPages";
// Styles
import styles from "./styles.module.scss";

const FiltersSearchCategoriesCompt = ({ data }) => {
  // Définition du composant FiltersSearchCategoriesCompt avec la prop data
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const categoryType = searchParams.get("categoryType");

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const filteredCategories = data.filter((category) => {
    // Filtrage des catégories en fonction de searchQuery et categoryType
    const categoryName = (category.name || "").toLowerCase().trim(); // Conversion du nom de catégorie en minuscules et suppression des espaces
    const categoryTypeLowerCase = categoryType // Conversion de categoryType en minuscules et suppression des espaces
      ? categoryType.toLowerCase().trim()
      : "";
    const searchQueryLowerCase = searchQuery // Conversion de searchQuery en minuscules et suppression des espaces
      ? searchQuery.toLowerCase().trim()
      : "";

    if (category.type && typeof category.type === "string") {
      // Vérification du type de catégorie
      const categoryTypeLower = category.type.toLowerCase().trim(); // Conversion du type de catégorie en minuscules et suppression des espaces
      return categoryTypeLowerCase // Filtrage en fonction de categoryType et searchQuery
        ? categoryTypeLower.includes(categoryTypeLowerCase) &&
            categoryName.includes(searchQueryLowerCase)
        : categoryName.includes(searchQueryLowerCase);
    } else {
      return categoryName.includes(searchQueryLowerCase); // Filtrage basé uniquement sur searchQuery
    }
  });

  return (
    <div className={styles.search_components}>
      <h2>PAGE DE AFFICHAGE DES CATÉGORIES DE FLEURS</h2>
      <div className={styles.filteredCategories}>
        {filteredCategories.map((category) => (
          <CategoriesPages key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FiltersSearchCategoriesCompt;
