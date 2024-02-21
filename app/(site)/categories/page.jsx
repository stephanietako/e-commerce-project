"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Search from "../components/Search/Search";
// import { getProductsByCategories } from "@/sanity/lib/client";
import CategoriesPages from "../components/CategoriesPages/CategoriesPages";
import { fetchData } from "@/sanity/lib/api";
import useSWR from "swr";

const CategoriesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const categoryType = searchParams.get("categoryType");
    console.log("SEARCHQUERY", searchQuery);
    console.log("CATEGORYTYPE", categoryType);

    fetchData();
  }, [searchParams]);

  // async function fetchData() {
  //   return getProductsByCategories();
  // }
  ///////////////////////////////
  // useSWR est un hook React utilisé principalement pour le chargement de données à partir d'une source externe, comme une API. Il fait partie de la bibliothèque SWR (stale-while-revalidate), qui fournit une gestion simple de la mise en cache, de l'expiration des données et de leur rechargement.
  const { data, error, isLoading } = useSWR("get/categories", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  /////////////////////////

  const filterCategories = (categories) => {
    return categories.filter((category) => {
      // Apply room type filter

      if (
        categoryFilter &&
        categoryFilter.toLowerCase() !== "all" &&
        category.type.toLowerCase() !== categoryFilter.toLowerCase()
      ) {
        return false;
      }

      //   Apply search query filter
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

  return (
    <div className="search_components">
      <Search
        roomTypeFilter={categoryFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setCategoryFilter}
        setSearchQuery={setSearchQuery}
      />

      {/* <div className="filteredCategories">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredCategories.map((category) => (
            <Categories key={category._id} category={category} />
          ))
        )}
      </div> */}
      <div className="category_link">
        {filteredCategories.map((category) => (
          <CategoriesPages key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
