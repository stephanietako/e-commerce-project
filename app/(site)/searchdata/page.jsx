"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchDataSearchBar } from "@/sanity/lib/api";
import SearchAllPages from "../components/SearchAllPages/SearchAllPages";

const FiltersSearchAll = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/searchdata", fetchDataSearchBar);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  //Filtrage des categories
  const filterAll = (alldata) => {
    return alldata.filter((el) =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  console.log("FILTERALL !!!!!", filterAll);
  const filteredAll = filterAll(data || []);
  console.log("FILTEREDALL !!!!!!", filteredAll);
  return (
    <div className="search_components">
      <h2> PAGE DE L AFFICHAGE DES TOUTES LES DATAS</h2>
      <div className="filteredAll">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredAll.map((all) => {
            return <SearchAllPages key={all._id} all={all} />;
          })
        )}
      </div>
    </div>
  );
};

export default FiltersSearchAll;
