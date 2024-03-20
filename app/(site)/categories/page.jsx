"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchData } from "@/sanity/lib/api";
import CategoriesPages from "../components/CategoriesPages/CategoriesPages";

const FiltersSearchCategories = () => {
  // const [value, setValues] = useState([]);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  const [flowerTypeFilter, setFlowerTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    if (categoryType) setFlowerTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  // Filtrage des categories
  const filterCategories = (categories) => {
    return categories.filter((el) => el.name.includes(searchQuery));
  };

  //////////////////////
  const filteredCategories = filterCategories(data || []);

  return (
    <div className="search_components">
      <h2> PAGE DE L AFFICHAGE DES CATEGORIES </h2>
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

export default FiltersSearchCategories;
