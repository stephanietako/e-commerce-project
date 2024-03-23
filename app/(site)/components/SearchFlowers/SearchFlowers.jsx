"use client";
import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";
const SearchFlowers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchQueryChange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
    router.push(`/categories?searchQuery=${selectedQuery}`);
  };

  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Nos Fleurs</h2>
        <label className={styles.__label_search}>Selection...</label>
        <br />
        <div
          className={styles.__label_search_select_flowers}
          style={{
            textAlign: "center",
            margin: "auto",
            position: "relative",
          }}
        >
          <select
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className={styles.__label_search_select_content}
            style={{
              textAlign: "center",
              margin: "auto",
              background: "pink",
              borderRadius: "30px",
            }}
          >
            <option value="">Select...</option>
            <option value="Haze">Haze</option>
            <option value="Orange">Orange </option>
            <option value="Purple">Purple </option>
            <option value="Tropicale">tropicale </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchFlowers;
// "use client";

// // Importation des styles
// import styles from "./styles.module.scss";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Radiobtn from "../Radiobtn/Radiobtn"; // Importez le composant de bouton radio

// const SearchFlowers = ({}) => {
//   const [searchQuery, setSearchQuery] = useState(""); // Mettez à jour l'état initial
//   const router = useRouter();

//   // Mettez à jour la fonction de gestion du changement
//   const handleSearchQueryChange = (value) => {
//     setSearchQuery(value);
//     router.push(`/categories?searchQuery=${value}`);
//   };

//   return (
//     <section className={styles.section_search_categories}>
//       <div className={styles.search_container}>
//         <h2>Nos Fleurs</h2>
//         <label className={styles.__label_search}>Selection...</label>
//         <br />
//         <div className={styles.radio_container}>
//           {/* Remplacez le select par des boutons radio */}
//           <Radiobtn
//             label="Haze"
//             value="Haze"
//             isSelected={searchQuery === "Haze"}
//             onRadioChange={handleSearchQueryChange}
//             className={styles.radio_option}
//           />
//           <Radiobtn
//             label="Orange"
//             value="Orange"
//             isSelected={searchQuery === "Orange"}
//             onRadioChange={handleSearchQueryChange}
//             className={styles.radio_option}
//           />
//           <Radiobtn
//             label="Purple"
//             value="Purple"
//             isSelected={searchQuery === "Purple"}
//             onRadioChange={handleSearchQueryChange}
//             className={styles.radio_option}
//           />
//           <Radiobtn
//             label="Tropicale"
//             value="Tropicale"
//             isSelected={searchQuery === "Tropicale"}
//             onRadioChange={handleSearchQueryChange}
//             className={styles.radio_option}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchFlowers;
