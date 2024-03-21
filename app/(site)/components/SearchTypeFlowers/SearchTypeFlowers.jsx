"use client";
import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const SearchTypeFlowers = ({}) => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState([]);
  const router = useRouter();

  const handleCategoryTypeChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryTypeFilter(selectedCategory);
    router.push(`/categories?categoryType=${selectedCategory}`);
  };

  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Nos Types de Fleurs</h2>
        <label className={styles.__label_search}>Selection...</label>
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
            <option value="">Select...</option>
            <option value="Sativa">Sativa</option>
            <option value="Indica">Indica </option>
            <option value="Indoor">Indoor </option>
            <option value="Outdoor">Outdoor </option>
            <option value="Large">Large</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchTypeFlowers;
