import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";
// DISPLAY
const AllPages = ({ all }) => {
  return (
    <>
      <h3 className="_data"> TOUTES NOS DATAS SEARCH ALL BAR</h3>
      <>
        <section
          className="data_section"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <p>{all.name}</p>
          <p>{all._type}</p>
          <p>AllPages contenu !!!!!</p>
        </section>
      </>
    </>
  );
};

export default AllPages;
