"use client";

import { useState } from "react";
import FiltersCategories from "../../FiltersCategories/page";
// Styles
import styles from "./styles.module.scss";

const CheckboxCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.checkboxPage_container}>
      <div className={styles.categoriespages_container}>
        <FiltersCategories
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxCategories;
