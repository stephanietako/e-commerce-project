// "use client";
"use client";
import { useState } from "react";
import { slugWithType } from "@/app/helpers/slugWithType";
// Styles
import styles from "./style.modules.scss";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchQueryChange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
  };

  const handleFilterClick = async () => {
    // Utilisez la fonction getQueryFromSlug pour obtenir le type de document
    const slugArray = searchQuery.split("/");
    const [slugStart] = slugArray;

    let docType = "";
    if (slugStart === "products" && slugArray.length === 1) {
      docType = "product";
    } else if (slugStart === "categories") {
      docType = "category";
    } else if (slugArray.length === 1) {
      // Check for single segment (category)
      docType = "product"; // Assume category search for single segment
    }

    console.log("slugStart !!!!!", slugStart); // repond bien
    console.log("SLUGARRAY", slugArray); // repond bien
    console.log("SEARCHQUERY", searchQuery); // repond bien

    // Utilisez slugWithType pour générer le nouveau slug avec le bon préfixe
    const prefix = "";
    const newSlug = slugWithType(prefix, docType).options.slugify(searchQuery);
    console.log("DocType:", docType);
    console.log("Prefix:", prefix);
    console.log("PREFIX", prefix); // PROBLEME PREFIX

    router.push(`/${newSlug}`);
  };

  return (
    <section className={styles.section_search_all}>
      <div className={styles.search_container}>
        <h2>SEARCH ALL</h2>
        <div className={styles.__search_content}>
          <div className={styles.__searchbar}>
            <label className={styles.__search}> Search</label>
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
// import { useRef } from "react";
// export const dynamic = "force-dynamic";
// const SearchBar = () => {
//   const clickPoint = useRef();
//   const handleFocus = () => {
//     clickPoint.current.style.display = "none";
//   };

//   const handleBlur = () => {
//     clickPoint.current.style.display = "block";
//   };

//   return (
//     <div
//       className="container_searchbar"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         width: "100%",
//         height: "100%",
//         alignItem: "center",
//         position: "relative",
//       }}
//     >
//       <div
//         className="__content_searchbar"
//         style={{
//           display: "flex",
//           width: "auto",
//           height: "auto",
//           justifyContent: "flex-end",
//           border: "2px solid red",
//         }}
//       >
//         <div
//           className="__svg_img"
//           style={{
//             display: "block",
//             position: "absolute",
//             alignItems: "center",
//             top: "3px",
//             border: "5px solid yellow",
//             width: "2rem",
//             height: "auto",
//           }}
//           ref={clickPoint}
//         >
//           <svg
//             className="__svg_glass"
//             style={{
//               color: "gray",
//             }}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </div>
//         <input
//           type="text"
//           className="searchbar"
//           style={{
//             display: "block",
//             width: "19rem",
//             height: "2.5rem",
//             color: "gray",
//             backgroundColor: "pink",
//             borderRadius: "30px",
//             border: "4px solid blue",
//             padding: "0.5rem",
//           }}
//           placeholder="Search Here..."
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
