// import Image from "next/image";
// import { Suspense } from "react";
// import { getProjects } from "@/sanity/lib/client";
import Link from "next/link";
import { getProductsByCategories } from "@/sanity/lib/client";
import { getPages } from "@/sanity/lib/client";
import { getCategories } from "@/sanity/lib/client";
import Categories from "./components/Categories/Categories";
import Bycategories from "./components/Bycategories/Bycategories";
import Products from "./components/Products/Products";
import { getDataProductsPages } from "@/sanity/lib/client";
import StarProducts from "./components/StarProducts/StarProducts";
import { getDataStarProducts } from "@/sanity/lib/client";
import { getDataProducts } from "@/sanity/lib/client";
import SearchTypeFlowers from "./components/SearchTypeFlowers/SearchTypeFlowers";
//////////////////////
// import CheckboxPage from "./components/CheckboxPage/CheckboxPage";
import Select from "./components/Select/Select";
import SearchFlowers from "./components/SearchFlowers/SearchFlowers";

const Home = async () => {
  // const projects = await getProjects();
  const pages = await getPages();
  const category = await getProductsByCategories();
  const bycategory = await getCategories();
  const starproducts = await getDataStarProducts();
  const allproducts = await getDataProductsPages();
  const products = await getDataProducts();
  const categories = await getCategories();
  // const categoryitem = await getCategory();
  ///////////////
  // const categorypages = getProductsByCategories();
  /////////////////
  return (
    <>
      {/* MENU de page about contact*/}
      <div className="links">
        {pages.map((page) => (
          <Link key={page._id} href={`/pages/${page.slug}`} className="link">
            {page.title}
          </Link>
        ))}
      </div>
      <section>
        <div className="links">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className="link"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </section>

      <section
        className="first_section"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Suspense fallback={<LoadingSpinner />}> */}

        <div className="bloc_text">
          <h1>This is the Home page </h1>{" "}
          <p>
            This is the starting project of ecommerce with next js 14 and Sanity
          </p>
        </div>
        {/* // MENU des projects get projects */}
        {/* <div className="container__projects">
          {projects.map((project) => (
            <div key={project._id}>
              <h2>
                <Link href={`/projects/${project.slug}`} className="box">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={250}
                      height={100}
                      className="project_img"
                    />
                  )}
                  <div className="project_name">{project.name}</div>
                </Link>
              </h2>
            </div>
          ))}
        </div> */}
        {/* </Suspense> */}
      </section>
      {/* ///////////////////// */}
      <section>
        <div className="links">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category.slug}`}
              className="link"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
      {/* //////////////////////////////////////////// */}
      <section>
        {/* <PageSearch /> */}
        <SearchTypeFlowers />
      </section>
      <section>
        <SearchFlowers />
      </section>
      <section className="starproducts_section">
        <StarProducts starproducts={starproducts} />
      </section>
      <section>
        <Products allproducts={allproducts} />
      </section>
      {/* <section className="categories_section">
        <Categories category={category} />
      </section> */}
      <section className="by_categories_section">
        <Bycategories bycategory={bycategory} />
      </section>
      <section className="all_categories_section">
        <Categories category={category} />
      </section>
    </>
  );
};

export default Home;
