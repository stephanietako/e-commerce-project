"use client";

import { useState } from "react";
import FiltersCategories from "../../categories/filtersCategories/page";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

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
