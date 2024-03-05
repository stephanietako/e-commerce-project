"use client";
import { useRouter } from "next/navigation";
// Importation des styles
import styles from "./styles.module.css";

const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  searchQuery,
  setSearchQuery,
  productTypeFilter,
  setProductTypeFilter,
}) => {
  const router = useRouter();
  // store values in area

  const handleProductTypeChange = (event) => {
    const selectedProduct = event.target.value;
    setProductTypeFilter(selectedProduct);
  };

  const handleSearchQuerychange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
  };

  const handleFilterClick = () => {
    router.push(
      `/products?productType=${productTypeFilter}&searchQuery=${searchQuery}`
    );
    console.log("CLICK !!!!!", handleFilterClick);
  };
  //   const [select, isSelected] = useState([]);
  return (
    <>
      <div className={styles.left_section}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          value={productTypeFilter}
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <div className={styles.right_section}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          value={searchQuery}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
};

export default Checkbox;
