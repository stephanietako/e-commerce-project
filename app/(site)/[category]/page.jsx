import { getData } from "@/sanity/lib/client";
import ProductByCategory from "../components/Category/ProductByCategory";
export const dynamic = "force-dynamic";

const Category = async ({ params }) => {
  const category = await getData(params.category);
  console.log("PARAMS CATEGORY !!!!!!!!", params.category);
  console.log("PARAMS !!!!!!", params);

  return (
    <section className="section">
      <div className="_container">
        <h1>{category.name}</h1>
        <div className="bloc_link">
          <h2>Products of the category {params.category}</h2>
        </div>
        <div className="display_category_slug">
          <h2 className="title_slug_category">
            Our Products for {params.category}
          </h2>
        </div>

        <ProductByCategory />
      </div>
    </section>
  );
};

export default Category;
