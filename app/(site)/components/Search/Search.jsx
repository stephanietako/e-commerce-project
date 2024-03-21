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
  };
  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Nos Fleurs</h2>
        <div className={styles.__search_content}>
          <label className={styles.__label_search}>Product Type</label>
          <div
            className={styles.search_select_type_flowers}
            style={{
              textAlign: "center",
              margin: "auto",
              position: "relative",
            }}
          >
            <select
              value={categoryTypeFilter}
              onChange={handleCategoryTypeChange}
              className={styles.__label_search_select_content}
              style={{
                textAlign: "center",
                margin: "auto",
                background: "gray",
                borderRadius: "30px",
              }}
            >
              <option value="All">All</option>
              <option value="Sativa">Sativa</option>
              <option value="Indica">Indica </option>
              <option value="Indoor">Indoor </option>
              <option value="Outdoor">Outdoor </option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>

        <label className={styles.__label_search}>Selection...</label>
        <div
          className={styles.__label_search_select_flowers}
          style={{
            textAlign: "center",
            margin: "auto",
            position: "relative",
          }}
        >
          <select
            value={searchQuery}
            onChange={handleSearchQuerychange}
            // onClick={handleFilterClick}
            className={styles.__label_search_select_content}
            style={{
              textAlign: "center",
              margin: "auto",
              background: "gray",
              borderRadius: "30px",
            }}
          >
            <option value="All">All</option>
            <option value="Haze">Haze</option>
            <option value="Orange">Orange </option>
            <option value="Purple">Purple </option>
            <option value="Tropicale">tropicale </option>
          </select>
        </div>
        <br />
        <div className={styles.__searchbar}>
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
