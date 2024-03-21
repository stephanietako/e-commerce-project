"use client";
import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const SearchFlowers = ({}) => {
  const [searchQuery, setSearchQuery] = useState([]);
  const router = useRouter();

  const handleSearchQueryChange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
    router.push(`/categories?searchQuery=${selectedQuery}`);
  };

  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Nos Fleurs</h2>
        <label className={styles.__label_search}>Selection...</label>
        <br />
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
            onChange={handleSearchQueryChange}
            className={styles.__label_search_select_content}
            style={{
              textAlign: "center",
              margin: "auto",
              background: "pink",
              borderRadius: "30px",
            }}
          >
            <option value="">Select...</option>
            <option value="Haze">Haze</option>
            <option value="Orange">Orange </option>
            <option value="Purple">Purple </option>
            <option value="Tropicale">tropicale </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchFlowers;
