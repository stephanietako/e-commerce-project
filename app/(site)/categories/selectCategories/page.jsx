// import ByCategories from "../../components/Bycategories/Bycategories";
import { getCategories } from "@/sanity/lib/client";
// import Image from "next/image";
// import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.scss";

const SelectCategories = async () => {
  const bycategory = await getCategories();
  return (
    <>
      <div className={styles.select_categories}>
        {/* <ByCategories bycategory={bycategory} /> */}
      </div>
      {/* <div className={styles.select_categories__bloc_content}></div> */}
    </>
  );
};

export default SelectCategories;
