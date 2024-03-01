"use client";

import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
// Styles
// import styles from "./styles.module.scss";

const CheckboxPage = () => {
  const [categoryItemFilter, setCategoryItemFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState([]);
  return (
    <div className="CheckboxPage_container">
      <Checkbox
        categoryFilter={categoryItemFilter}
        searchQuery={searchQuery}
        setCategoryItemFilter={setCategoryItemFilter}
        setSearchQuery={setSearchQuery}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
    </div>
  );
};

export default CheckboxPage;
