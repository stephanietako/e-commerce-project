"use client";

import { useState } from "react";
import FiltersAll from "../../all/FiltersAll/page";
export const dynamic = "force-dynamic";
//DISPLAY
const SearchAllPages = () => {
  const [searchQuery, setSearchQuery] = useState([]);
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
        className="filtersproducts_container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          padding: "0 4rem",
        }}
      >
        <FiltersAll searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default SearchAllPages;
