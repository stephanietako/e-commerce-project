"use client";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const Search = ({
  categoryTypeFilter,
  searchQuery,
  setCategoryTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleCategoryTypeChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryTypeFilter(selectedCategory);
  };

  const handleSearchQuerychange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
  };

  const handleFilterClick = () => {
    router.push(
      `/categories?categoryType=${categoryTypeFilter}&searchQuery=${searchQuery}`
    );
    // console.log("CLICK !!!!!", handleFilterClick);
  };
  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>SEARCH CATEGORIES</h2>
        <div className={styles.__search_content}>
          <div className={styles.__label_search_select}>
            <label className={styles.__label_search}>Category Type</label>
            <select
              value={categoryTypeFilter}
              onChange={handleCategoryTypeChange}
              className={styles.__label_search_select_content}
            >
              <option value="All">All</option>
              <option value="Unique">Unique</option>
              <option value="Basic ">Basic </option>
              <option value="Medium">Medium </option>
              <option value="Large ">Large </option>
            </select>
          </div>
          <div className={styles.__searchbar}>
            <label className={styles.__search}> Search</label>
            <input
              type="search"
              id="search"
              placeholder="search..."
              className={styles.__search_input}
              value={searchQuery}
              onChange={handleSearchQuerychange}
            />
          </div>
          <button
            className={styles.__btn_search}
            type="button"
            onClick={handleFilterClick}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
