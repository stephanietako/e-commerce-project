"use client";

import { useState } from "react";
import FiltersCategories from "../../categories/FiltersCategories/page";
import FiltersProducts from "../../products/FiltersProducts/page";
// Styles
// import styles from "./styles.module.scss";

const CheckboxPage = () => {
  const [productItemFilter, setProductTypeFilter] = useState("");
  const [categoryItemFilter, setCategoryItemFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState([]);

  return (
    <div className="checkboxPage_container">
      <div className="filtersproducts_container">
        <FiltersProducts
          productFilter={productItemFilter}
          searchQuery={searchQuery}
          setProductTypeFilter={setProductTypeFilter}
          setSearchQuery={setSearchQuery}
          checkedState={checkedState}
          setCheckedState={setCheckedState}

          // onCheckChange={sortedProducts}
        />
      </div>
      {/* // Ce que je veux ici c est faire le tri des categories par produits */}
      {/* // ensuite faire le display des produits par categories */}
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
