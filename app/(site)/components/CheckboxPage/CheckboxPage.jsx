"use client";

import { useState } from "react";
import FiltersCategories from "../../categories/FiltersCategories/page";
import FiltersProducts from "../../products/FiltersProducts/page";
// Styles
// import styles from "./styles.module.scss";

const CheckboxPage = () => {
  const [productItemFilter, setProductItemFilter] = useState("");
  const [categoryItemFilter, setCategoryItemFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState([]);
  return (
    <div className="checkboxPage_container">
      <div className="filtersproducts_container">
        <FiltersProducts
          categoryFilter={productItemFilter}
          searchQuery={searchQuery}
          setCategoryItemFilter={setProductItemFilter}
          setSearchQuery={setSearchQuery}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
        />
      </div>
      <div className="categoriespages_container">
        <FiltersCategories
          categoryFilter={categoryItemFilter}
          searchQuery={searchQuery}
          setCategoryItemFilter={setCategoryItemFilter}
          setSearchQuery={setSearchQuery}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
        />
      </div>
    </div>
  );
};

export default CheckboxPage;
