"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
//import Search from "../components/Search/Search";
import { fetchData } from "../../../sanity/lib/api";
// import { getCategory } from "@/sanity/lib/client";
import CategoriesPages from "../components/CategoriesPages/CategoriesPages";
// import Categories from "../components/Categories/Categories";

const CategoriesPage = () => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    console.log("SEARCHQUERY", searchQuery);
    console.log("CATEGORYFILTER", categoryType);
    if (categoryType) setCategoryTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  // Utilisation de useSWR pour récupérer les données avec fetchData
  const { data, error, isLoading } = useSWR("/categories", fetchData);

  // Gestion de l'erreur
  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  // Filtrage des catégories
  const filterCategories = (categories) => {
    return categories.filter((category) => {
      if (
        categoryTypeFilter &&
        categoryTypeFilter.toLowerCase() !== "all" &&
        category.type.toLowerCase() !== categoryTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !category.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredCategories = filterCategories(data || []);
  console.log("filteredCategories!!!!!:", filteredCategories);
  return (
    <div className="search_components">
      <h2> PAGE DE L AFFICHAGE DES CATEGORIES </h2>
      {/* <Search
        categoryTypeFilter={categoryTypeFilter}
        searchQuery={searchQuery}
        setCategoryFilter={setCategoryTypeFilter}
        setSearchQuery={setSearchQuery}
      /> */}

      <div className="filteredCategories">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredCategories.map((category) => {
            console.log("Category !!!!!:", category);
            console.log("Category ID !!!!!:", category._id);
            return <CategoriesPages key={category._id} category={category} />;
          })
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
