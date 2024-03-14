"use client";
import { useRouter } from "next/navigation";
// Styles
import styles from "./styles.module.css";

const Checkbox = ({
  id,
  name,
  checkedState,
  onChange,
  searchQuery,
  setSearchQuery,
  productTypeFilter,
  setProductTypeFilter,
}) => {
  const router = useRouter();

  // const handleProductTypeChange = (event) => {
  //   const selectedProduct = event.target.value;
  //   setProductTypeFilter(selectedProduct);
  // };

  // const handleSearchQuerychange = (event) => {
  //   const selectedQuery = event.target.value;
  //   setSearchQuery(selectedQuery);
  // };

  const handleFilterClick = () => {
    router.push(
      `/products?productType=${productTypeFilter}&searchQuery=${searchQuery}`
    );
    // console.log("CLICK !!!!!", handleFilterClick);
  };

  return (
    <>
      <div className={styles.left_section}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checkedState}
          onChange={onChange}
          value={productTypeFilter}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
};

export default Checkbox;
