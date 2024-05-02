"use client";

import { fetchData } from "@/sanity/lib/api";

import useSWR from "swr";

import FiltersCategoriesCompt from "../../components/FiltersCategoriesCompt/FiltersCategoriesCompt";

const FiltersCategories = ({ searchQuery }) => {
  const { data, error, isLoading } = useSWR("/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  // // Filtrage des categories
  const filterCategories = (categories) => {
    return categories.filter((el) => el.name.includes(searchQuery));
  };

  const filteredCategories = filterCategories(data || []);

  return (
    <>
      <FiltersCategoriesCompt
        data={data}
        isLoading={isLoading}
        error={error}
        filteredCategories={filteredCategories}
      />
    </>
  );
};

export default FiltersCategories;
