"use client";

import { useState } from "react";
import FiltersProducts from "../../products/FiltersProducts/page";
// Styles
// import styles from "./styles.module.scss";

const CheckboxProducts = () => {
  const [productTypeFilter, setProductTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
          width: "63rem",
          height: "auto",
          justifyContent: "flex-end",
          padding: "2rem",
        }}
      >
        <FiltersProducts
          productTypeFilter={productTypeFilter}
          searchQuery={searchQuery}
          setProductTypeFilter={setProductTypeFilter}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxProducts;
