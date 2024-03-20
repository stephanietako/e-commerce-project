"use client";

import { useState } from "react";
import Search from "../Search/Search";
// Styles
import styles from "./styles.module.scss";

const PageSearch = () => {
  const [flowerTypeFilter, setFlowerTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  return (
    <div className={styles.pagesearch_container}>
      <Search
        flowerTypeFilter={flowerTypeFilter}
        searchQuery={searchQuery}
        setFlowerTypeFilter={setFlowerTypeFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default PageSearch;
