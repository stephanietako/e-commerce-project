"use client";

import { useState } from "react";
// import FiltersCategories from "../../categories/FiltersCategories/page";
import FiltersProducts from "../../products/FiltersProducts/page";
// Styles
// import styles from "./styles.module.scss";

const CheckboxProducts = () => {
  const [productTypeFilter, setProductTypeFilter] = useState("");
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState([]);

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
          // checkedState={checkedState}
          // setCheckedState={setCheckedState}

          // onCheckChange={sortedProducts}
        />
      </div>
      {/* // Ce que je veux ici c est faire le tri des categories par produits */}
      {/* // ensuite faire le display des produits par categories */}
      {/* <div className="categoriespages_container">
        <FiltersCategories
          categoryTypeFilter={categoryTypeFilter}
          searchQuery={searchQuery}
          setCategoryTypeFilter={setCategoryTypeFilter}
          setSearchQuery={setSearchQuery}
          // checkedState={checkedState}
          // setCheckedState={setCheckedState}
        />
      </div> */}
    </div>
  );
};

export default CheckboxProducts;
