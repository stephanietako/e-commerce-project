import { fetchDataProduct } from "@/sanity/lib/api";
import FiltersProductsCompt from "../../components/FiltersProductsCompt/FiltersProductsCompt";

const FiltersProducts = async ({ searchQuery }) => {
  try {
    const data = await fetchDataProduct();
    const filterProducts = (categories) => {
      return categories.filter((el) => el.name.includes(searchQuery));
    };
    const filteredProducts = filterProducts(data || []);

    return (
      <>
        <FiltersProductsCompt data={data} filteredProducts={filteredProducts} />
      </>
    );
  } catch (error) {
    return <p>erreur dans la récupération des données</p>;
  }
};

export default FiltersProducts;
