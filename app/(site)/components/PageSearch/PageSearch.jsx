"use client";

import { useState } from "react";
import Search from "../Search/Search";
// Styles
import styles from "./styles.module.scss";

const PageSearch = () => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.pagesearch_container}>
      <Search
        categoryTypeFilter={categoryTypeFilter}
        searchQuery={searchQuery}
        setCategoryTypeFilter={setCategoryTypeFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default PageSearch;
