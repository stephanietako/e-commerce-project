"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoriesPages from "../CategoriesPages/CategoriesPages";

// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const FiltersSearchCategoriesCompt = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const categoryType = searchParams.get("categoryType");

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const filteredCategories = data.filter((category) => {
    const categoryName = (category.name || "").toLowerCase().trim();
    const categoryTypeLowerCase = categoryType
      ? categoryType.toLowerCase().trim()
      : "";
    const searchQueryLowerCase = searchQuery
      ? searchQuery.toLowerCase().trim()
      : "";

    if (category.type && typeof category.type === "string") {
      const categoryTypeLower = category.type.toLowerCase().trim();
      return categoryTypeLowerCase
        ? categoryTypeLower.includes(categoryTypeLowerCase) &&
            categoryName.includes(searchQueryLowerCase)
        : categoryName.includes(searchQueryLowerCase);
    } else {
      return categoryName.includes(searchQueryLowerCase);
    }
  });

  return (
    <div className={styles.search_components}>
      <div className={styles.filteredCategories}>
        {filteredCategories.map((category) => (
          <CategoriesPages key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FiltersSearchCategoriesCompt;
