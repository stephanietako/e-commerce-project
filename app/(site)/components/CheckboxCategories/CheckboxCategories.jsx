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
        width: "84rem",
        border: "3px solid gray",
        borderRadius: "30px",
      }}
    >
      <div
        className="categoriespages_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          padding: "0 4rem",
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
