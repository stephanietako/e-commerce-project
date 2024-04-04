// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import SearchBar from "../../components/SearchBar/SearchBar";

// import { fetchDataSearchBarSlug } from "@/sanity/lib/api";
// import SearchAllPages from "../../components/SearchAllPages/SearchAllPages";

// const FiltersAll = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const searchQueryParam = searchParams.get("searchQuery");
//     if (searchQueryParam) setSearchQuery(searchQueryParam);
//   }, [searchParams]);

//   const { data, error, isLoading } = useSWR("/all", fetchDataSearchBarSlug);

//   if (error) throw new Error("Cannot fetch data");
//   if (typeof data === "undefined" && !isLoading)
//     throw new Error("Cannot fetch data");

//   const filterAll = (items, searchQuery) => {
//     return items.filter((item) => {
//       if (typeof item === "string") {
//         return item.toLowerCase().includes(searchQuery.toLowerCase());
//       } else {
//         return false;
//       }
//     });
//   };

//   const filteredItems = filterAll(data || []);

//   return (
//     <>
//       <div className={"container_filter_categories"}>
//         <div className="container">
//           <div>
//             <div className={"searchbar"}>
//               <SearchBar
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//               />
//             </div>
//           </div>
//           <div className="filtered_all">
//             {filteredItems.map((item) => (
//               <SearchAllPages key={item._id} all={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FiltersAll;
