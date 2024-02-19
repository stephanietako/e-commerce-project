"client use";
import { useState } from "react";
import Search from "../Search/Search";
// Styles
import styles from "./styles.module.scss";

const PageSearch = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.pagesearch_container}>
      <Search
        categoryFilter={categoryFilter}
        searchQuery={searchQuery}
        setCategoryFilter={setCategoryFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default PageSearch;
