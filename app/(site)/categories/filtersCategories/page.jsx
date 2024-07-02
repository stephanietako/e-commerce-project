import { fetchData } from "@/sanity/lib/apis";
import FiltersCategoriesCompt from "../../components/FiltersCategoriesCompt/FiltersCategoriesCompt";
export const dynamic = "force-dynamic";
const FiltersCategories = async ({ searchQuery }) => {
  try {
    const data = await fetchData();
    const filterCategories = (categories) => {
      return categories.filter((el) => el.name.includes(searchQuery));
    };
    const filteredCategories = filterCategories(data || []);

    return (
      <>
        <FiltersCategoriesCompt
          data={data}
          filteredCategories={filteredCategories}
        />
      </>
    );
  } catch (error) {
    return <p>erreur dans la récupération des données</p>;
  }
};

export default FiltersCategories;
