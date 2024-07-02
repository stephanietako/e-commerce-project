import { fetchData } from "@/sanity/lib/apis";
import FiltersSearchCategoriesCompt from "../components/FiltersSearchCategoriesCompt/FiltersSearchCategoriesCompt";

const SelectCategories = async ({ searchQuery }) => {
  try {
    const data = await fetchData();
    const filterCategories = (categories, categoryType, searchQuery) => {
      return categories.filter((el) => {
        const categoryName = (el.name || "").toLowerCase().trim();
        const categoryTypeLowerCase = categoryType
          ? categoryType.toLowerCase().trim()
          : "";
        const searchQueryLowerCase = searchQuery
          ? searchQuery.toLowerCase().trim()
          : "";

        if (el.type && typeof el.type === "string") {
          const categoryTypeLower = el.type.toLowerCase().trim();
          return categoryTypeLowerCase
            ? categoryTypeLower.includes(categoryTypeLowerCase) &&
                categoryName.includes(searchQueryLowerCase)
            : categoryName.includes(searchQueryLowerCase);
        } else {
          return categoryName.includes(searchQueryLowerCase);
        }
      });
    };

    const filteredCategories = filterCategories(data || [], "", searchQuery);

    return (
      <>
        <FiltersSearchCategoriesCompt
          data={data}
          filteredCategories={filteredCategories}
        />
      </>
    );
  } catch (error) {
    return <p>Erreur dans la récupération des données</p>;
  }
};

export default SelectCategories;
