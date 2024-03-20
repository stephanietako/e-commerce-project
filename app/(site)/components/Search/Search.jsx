"use client";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const Search = ({
  flowerTypeFilter,
  searchQuery,
  setFlowerTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();
  // const handleChange = (event) => {
  //   const checkedId = event.target.value;
  //   const isChecked = event.target.checked;

  //   if (isChecked) {
  //     setSelectedCategories([...selectedCategories, checkedId]);
  //   } else {
  //     setSelectedCategories(
  //       selectedCategories.filter((id) => id !== checkedId)
  //     );
  //   }
  // };
  const handleCategoryTypeChange = (event) => {
    const selectedCategory = event.target.value;
    setFlowerTypeFilter(selectedCategory);
  };

  const handleSearchQuerychange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
  };

  const handleFilterClick = () => {
    router.push(
      `/categories?categoryType=${flowerTypeFilter}&searchQuery=${searchQuery}`
    );
    // console.log("CLICK !!!!!", handleFilterClick);
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
              value={flowerTypeFilter[0]}
              onChange={handleCategoryTypeChange}
              className={styles.__label_search_select_content}
              style={{
                background: "gray",
                borderRadius: "30px",
              }}
            >
              <option value="All">All</option>
              <option value="Sativa">Sativa</option>
              <option value="Indica">Indica </option>
              <option value="Indoor">Indoor </option>
              <option value="Outdoor">Outdoor </option>
            </select>
          </div>
        </div>

        <div
          className={styles.__label_search_select_flowers}
          style={{ textAlign: "center", margin: "auto" }}
        >
          <label className={styles.__label_search}>Selection...</label>
          <select
            value={searchQuery}
            onChange={handleSearchQuerychange}
            className={styles.__label_search_select_content}
          >
            <option value="All">All</option>
            <option value="Haze">Haze</option>
            <option value="Orange">Orange </option>
            <option value="Purple">Purple </option>
            <option value="tropicale">tropicale </option>
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
