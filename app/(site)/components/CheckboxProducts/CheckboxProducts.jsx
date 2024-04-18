"use client";

import { useState } from "react";
import FiltersProducts from "../../products/filtersProducts/page";
// Styles
import styles from "./styles.module.scss";

const CheckboxProducts = () => {
  // const [productTypeFilter, setProductTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState([]);

  return (
    <div className={styles.checkboxPage_container}>
      <div className={styles.productspages_container}>
        <FiltersProducts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxProducts;
