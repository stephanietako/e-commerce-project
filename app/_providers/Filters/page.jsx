"use client";

import { createContext, useContext, useState } from "react";

// Définition du type d'objet de contexte
const FilterContext = createContext({
  categoryFilters: [],
  setCategoryFilters: () => {},
  sort: "",
  setSort: () => {},
});

// Composant fournisseur de contexte
export const FilterProvider = ({ children }) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [sort, setSort] = useState("_id");

  return (
    <FilterContext.Provider
      value={{ categoryFilters, setCategoryFilters, sort, setSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de filtre
export const useFilter = () => useContext(FilterContext);
