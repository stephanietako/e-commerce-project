"use client";

import { useState } from "react";
import FiltersCategories from "../../categories/FiltersCategories/page";
// Styles
// import styles from "./styles.module.scss";

const CheckboxCategories = () => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
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
        className="categoriespages_container"
        style={{
          display: "flex",
          width: "63rem",
          height: "auto",
          justifyContent: "flex-end",
          padding: "2rem",
        }}
      >
        <FiltersCategories
          categoryTypeFilter={categoryTypeFilter}
          searchQuery={searchQuery}
          setCategoryTypeFilter={setCategoryTypeFilter}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default CheckboxCategories;
