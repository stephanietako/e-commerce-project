"use client";

import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
// Styles
// import styles from "./styles.module.scss";

const SearchBarAll = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  );
};

export default SearchBarAll;
