import Image from "next/image";
import { getProjects } from "@/sanity/lib/client";
import Link from "next/link";
import { getProductsByCategories } from "@/sanity/lib/client";
import { getCategories } from "@/sanity/lib/client";
import { getPages } from "@/sanity/lib/client";
import Categories from "./components/Categories/Categories";
import Bycategories from "./components/Bycategories/Bycategories";
import Products from "./components/Products/Products";
import { getDataProductsPages } from "@/sanity/lib/client";
import StarProducts from "./components/StarProducts/StarProducts";
import { getDataStarProducts } from "@/sanity/lib/client";

const Home = async () => {
  const projects = await getProjects();
  const pages = await getPages();
  const category = await getProductsByCategories();
  const bycategory = await getCategories();
  const starproducts = await getDataStarProducts();
  const allproducts = await getDataProductsPages();
  console.log("PAGES !!!!!!", pages);
  console.log("PAGES !!!!!!", projects);

  return (
    <>
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
        {/* MENU de page */}
        <div className="links">
          {pages.map((page) => (
            <Link key={page._id} href={`/pages/${page.slug}`} className="link">
              {page.title}
            </Link>
          ))}
        </div>

        <div className="bloc_text">
          {/* <div>
            <Header />
          </div> */}
          <h1>This is the Home page </h1>{" "}
          <p>
            This is the starting project of ecommerce with next js 14 and Sanity
          </p>
        </div>
        {/* // MENU des projects get projects */}
        <div className="container__projects">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="box"
            >
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
          ))}
        </div>
        {/* ///////////////// */}
      </section>
      <section className="starproducts_section">
        <StarProducts starproducts={starproducts} />
      </section>
      <section>
        <Products allproducts={allproducts} />
      </section>
      <section className="categories_section">
        <Categories category={category} />
      </section>
      <section className="by_categories_section">
        <Bycategories bycategory={bycategory} />
      </section>
    </>
  );
};

export default Home;
