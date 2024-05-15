"use client";
import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

const SearchFlowers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchQueryChange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
    router.push(`/categories?searchQuery=${selectedQuery}`);
  };

  return (
    <div className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Fleurs</h2>
        <label className={styles.__label_search}>
          <p>Selection...</p>
        </label>
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
              background:
                "linear-gradient(135deg, #ff1e9c99, #ff1ea499, #ff1fbc99, #ff1fde99, #f620ff99, #c721ff99, #9723ff99, #6a24ff99, #4125ff99, #252aff99, #2641ff99, #2649ff99)",
              borderRadius: "30px",
              pointerEvents: "all",
              width: "10rem",
              height: "1.5rem",
              color: "#ffff",
            }}
          >
            <option value="">Select...</option>
            <option value="Tropical">Tropical</option>
            <option value="White Russian">White Russian </option>
            <option value="Amnesia XXL">Amnesia XXL</option>
            <option value="Lemoncello">Lemoncello </option>
            <option value="Gorilla Mandarine">Gorilla Mandarine </option>
            <option value="Durban Poison Weed">Durban Poison Weed</option>
            <option value="Straw Mango">Straw Mango</option>
            <option value="Lemon Super">Lemon Super</option>
            <option value="Lifter">Lifter</option>
            <option value="Gelato">Gelato </option>
            <option value="Purple Haze">Purple Haze</option>
            <option value="Cryo">Cryo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFlowers;
