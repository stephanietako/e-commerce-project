"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { slugWithType } from "@/app/helpers/slugWithType";
import { fetchDataSearchBarSlug } from "@/sanity/lib/api";

import styles from "./styles.module.scss";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // Déclaration du state searchQuery et de sa fonction de mise à jour setSearchQuery à l'aide de useState
  const [searchQuery, setSearchQuery] = useState("");
  // Utilisation du hook useRouter pour accéder à l'objet router de Next.js
  const router = useRouter();
  // Utilisation du hook useSearchParams pour récupérer les paramètres de recherche de l'URL
  const searchParams = useSearchParams();

  useEffect(() => {
    // Récupération de la valeur du paramètre "searchQuery" de l'URL
    const searchQueryParam = searchParams.get("searchQuery");
    // Mise à jour du state searchQuery si la valeur existe dans les searchParams
    if (searchQueryParam) setSearchQuery(searchQueryParam);
  }, [searchParams]);

  // Utilisation du hook useSWR pour récupérer les données via l'API avec la fonction fetchDataSearchBarSlug
  const { data, error, isLoading } = useSWR("/all", fetchDataSearchBarSlug);

  // Gestion des erreurs de chargement des données
  if (error) {
    return (
      <div>Une erreur est survenue lors de la récupération des données</div>
    );
  }

  // Affichage d'un indicateur de chargement pendant que les données sont récupérées
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  // Fonction pour gérer le changement de la valeur de la recherche
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Fonction pour récupérer les types d'éléments à partir des données
  const getTypesFromData = () => {
    const types = new Set();
    for (const item of data || []) {
      if (item?._type) {
        types.add(item._type);
      }
    }
    return Array.from(types);
  };

  // Fonction pour gérer le clic sur un bouton de recherche
  // Fonction pour gérer le clic sur un bouton de recherche
  const handleFilterClick = async (type) => {
    // Récupération et nettoyage de la valeur de recherche
    const searchTerm = searchQuery.trim();
    // Détermination du préfixe à utiliser en fonction du type (catégorie ou produit)
    const prefix = type === "category" ? "categories" : "products";
    // Création du slug à partir du terme de recherche à l'aide de la fonction slugWithType
    const newSlug = searchTerm
      ? slugWithType(prefix).options.slugify(searchTerm) // Slugification du terme de recherche avec le préfixe approprié
      : "/"; // Si le terme de recherche est vide, le slug par défaut est "/"

    // Redirection vers la nouvelle URL construite avec le préfixe et le slug
    router.push(`/${prefix}/${searchTerm}`);
  };

  // Récupération des types d'éléments à partir des données
  const types = getTypesFromData();

  // Affichage du composant SearchBar
  return (
    <section className={styles.section_search_all}>
      <div className={styles.search_container}>
        <h2>SEARCH ALL</h2>
        <div className={styles.__search_content}>
          <div className={styles.__searchbar}>
            <label className={styles.__search}>Search</label>
            {/* Input pour saisir la chaîne de recherche */}
            <input
              type="search"
              id="search"
              placeholder="search..."
              className={styles.__search_input}
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
          {/* Boutons pour déclencher la recherche pour chaque type */}
          {types.map((type) => (
            <button
              key={type}
              className={styles.__btn_search}
              type="button"
              onClick={() => handleFilterClick(type)}
            >
              Rechercher {type}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
