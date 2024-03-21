"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchData } from "@/sanity/lib/api";
import CategoriesPages from "../components/CategoriesPages/CategoriesPages";

const FiltersSearchCategories = () => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();
  const categoryType = searchParams.get("categoryType");

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    if (categoryType) setCategoryTypeFilter(categoryType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  // Filtrage des categories
  const filterCategories = (categories) => {
    // console.log(categoryType);
    // console.log(categories);
    return categories.filter((el) =>
      categoryType
        ? el.type.toLowerCase().includes(categoryType.toLowerCase())
        : el.name.includes(searchQuery)
    );
  };

  //////////////////////
  const filteredCategories = filterCategories(data || []);
  console.log(filteredCategories);
  return (
    <div className="search_components">
      <h2> PAGE DE L AFFICHAGE DES CATEGORIESDE FLEURS</h2>
      <div className="filteredCategories">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredCategories.map((category) => {
            //console.log("Category !!!!!:", category);
            // console.log("Category ID !!!!!:", category._id);
            return <CategoriesPages key={category._id} category={category} />;
          })
        )}
      </div>
    </div>
  );
};

export default FiltersSearchCategories;
