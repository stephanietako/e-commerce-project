"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { slugWithType } from "@/app/helpers/slugWithType";
import { fetchDataSearchBarSlug } from "@/sanity/lib/api";
import styles from "./styles.module.scss";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQueryParam = searchParams.get("searchQuery");
    if (searchQueryParam) setSearchQuery(searchQueryParam);
  }, [searchParams]);

  const { data, error, isLoading } = useSWR("/all", fetchDataSearchBarSlug);

  if (error) {
    return (
      <div>Une erreur est survenue lors de la récupération des données</div>
    );
  }

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  for (const item of data || []) {
    console.log("Elément :", item);
    console.log("Type de l'élément :", item?._type);
  }
  // Use _type first, then name as fallback
  // Check if data exists and then access type

  console.log("DATA !!!!!", data);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = async (type) => {
    const searchTerm = searchQuery.trim();

    const newSlug = type ? slugWithType(type).options.slugify(searchTerm) : "/";
    console.log("TYPE", type);
    router.push(`/${newSlug}`);
    console.log("NEWSLUG !!!!!!", newSlug);
  };

  return (
    <section className={styles.section_search_all}>
      <div className={styles.search_container}>
        <h2>SEARCH ALL</h2>
        <div className={styles.__search_content}>
          <div className={styles.__searchbar}>
            <label className={styles.__search}>Search</label>
            <input
              type="search"
              id="search"
              placeholder="search..."
              className={styles.__search_input}
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
          <button
            className={styles.__btn_search}
            type="button"
            onClick={handleFilterClick}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
