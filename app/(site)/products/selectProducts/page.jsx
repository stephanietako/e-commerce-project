import Products from "../../components/Products/Products";
import { fetchDataProduct } from "@/sanity/lib/api";

// Styles
import styles from "./styles.module.scss";

const SelectProducts = async () => {
  const allproducts = await fetchDataProduct();
  return (
    <>
      <div className={styles.select_products}>
        {/* <Products allproducts={allproducts} /> */}
        {/* <div className={styles.select_categories__bloc_content}></div> */}
      </div>
    </>
  );
};

export default SelectProducts;
