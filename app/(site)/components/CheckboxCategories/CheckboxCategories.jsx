"use client";

import { useState } from "react";
import FiltersCategories from "../../categories/FiltersCategories/page";
// Styles
import styles from "./styles.module.scss";

const CheckboxCategories = () => {
  // const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.checkboxPage_container}>
      <div className={styles.categoriespages_container}>
        <FiltersCategories
          // categoryTypeFilter={categoryTypeFilter}
          searchQuery={searchQuery}
          // setCategoryTypeFilter={setCategoryTypeFilter}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxCategories;
