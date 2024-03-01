"use client";
import { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import useSWR from "swr";
// import { fetchData } from "../../../sanity/lib/api";
import CategoriesPages from "../components/CategoriesPages/CategoriesPage";
// Composant Filters
const Filters = ({ sort, setSort }) => {
  const [categoryItemFilter, setCategoryItemFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const searchQuery = searchParams.get("searchQuery");
  //   const category = searchParams.get("category");
  //   console.log("SEARCHQUERY FILTERS", searchQuery);
  //   console.log("CATEGORYFILTER FILTER", category);
  //   if (category) setCategoryItemFilter(category);
  //   if (searchQuery) setSearchQuery(searchQuery);
  // }, [searchParams]);
  // Utilisation de useSWR pour récupérer les données avec fetchData
  // const { data, error, isLoading } = useSWR("/categories", fetchData);
  // // Gestion de l'erreur
  // if (error) throw new Error("Cannot fetch data");
  // if (typeof data === "undefined" && !isLoading)
  //   throw new Error("Cannot fetch data");

  const filterCategories = (categories) => {
    return categories.filter((category) => {
      if (
        categoryItemFilter &&
        categoryItemFilter.toLowerCase() !== "all" &&
        category.name.toLowerCase() !== categoryItemFilter.toLowerCase()
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
  const handleSort = (value) => setSort(value);

  return (
    <div>
      <h6> Categories</h6>
      <div className="filteredCategories">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredCategories.map((category) => {
            console.log("Category filters !!!!!:", category);
            console.log("Category ID filters !!!!!:", category._id);
            return <CategoriesPages key={category._id} category={category} />;
          })
        )}
      </div>

      <hr />

      <h6>Sort By</h6>
      <div>
        {/* Afficher les boutons de tri avec des boutons radio */}
        <label>
          <input
            type="radio"
            value="name"
            checked={sort === "name"}
            onChange={() => handleSort("name")}
          />
          Name
        </label>
      </div>
    </div>
  );
};

export default Filters;
// const filterCategories = (categories) => {
//   if (Array.isArray(categoryItemFilter)) {
//     if (categoryItemFilter.includes(categories)) {
//       const updatedCategories = categoryItemFilter.filter(
//         (id) => id !== categories
//       );
//       setCategoryItemFilter(updatedCategories);
//     } else {
//       setCategoryItemFilter([...categoryItemFilter, categories]);
//     }
//   } else {
//     setCategoryItemFilter([categories]);
//   }
// };
/////////////////////////////////////////////////////////
//  <div className="filteredCategories">
//    {/* Afficher les catégories avec des cases à cocher */}
//    {filteredCategories.map((category) => (
//      <label key={category._id}>
//        <input
//          type="checkbox"
//          value={category._id}
//          checked={
//            Array.isArray(categoryItemFilter) &&
//            categoryItemFilter.includes(category._id)
//          }
//          onChange={() => filterCategories(category._id)}
//        />
//        {category.name}
//      </label>
//    ))}
//  </div>;
