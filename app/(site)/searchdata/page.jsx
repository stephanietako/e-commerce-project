"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataSearchBar } from "@/sanity/lib/api";
import All from "../components/All/All";

const FiltersSearchAll = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/categories", fetchDataSearchBar);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  //Filtrage des categories
  const filterCategories = (datas) => {
    return datas.filter((el) => el.name.includes(searchQuery));
  };

  const filteredCategories = filterCategories(data || []);
  console.log(filteredCategories);
  return (
    <div className="search_components">
      <h2> PAGE DE L AFFICHAGE DES TOUTES LES DATAS</h2>
      <div className="filteredCategories">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredCategories.map((all) => {
            return <All key={all._id} all={all} />;
          })
        )}
      </div>
    </div>
  );
};

export default FiltersSearchAll;
