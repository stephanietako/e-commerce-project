import useSWR from "swr";
import { fetchDataProduct } from "@/sanity/lib/api";

import FiltersProductsCompt from "../../components/FiltersProductsCompt/FiltersProductsCompt";
const FiltersProducts = ({ searchQuery }) => {
  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  ///////////////
  // Filtrage des produits
  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  const filteredProducts = filterProducts(data || []);

  return (
    <>
      <FiltersProductsCompt
        data={data}
        isLoading={isLoading}
        error={error}
        filteredCategories={filteredProducts}
      />
    </>
  );
};

export default FiltersProducts;
