"use client";

import { useState } from "react";
import FiltersProducts from "../FiltersProducts/page";
// Styles
//import styles from "./styles.module.scss";

const CheckboxProducts = () => {
  // const [productTypeFilter, setProductTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState([]);

  return (
    <div
      className="checkboxPage_container"
      style={{
        display: "flex",
        height: "auto",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="filtersproducts_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
        }}
      >
        <FiltersProducts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxProducts;
