import Image from "next/image";
import { getProjects } from "@/sanity/lib/client";
import Link from "next/link";
import Newest from "./components/Newest/Newest";
import { getPages } from "@/sanity/lib/client";
import { getDataProductsPages } from "@/sanity/lib/client";
// import ProductsPages from "./components/ProductsPages/ProductsPages";
const Home = async () => {
  const projects = await getProjects();
  const pages = await getPages();
  const products = await getDataProductsPages();
  console.log("PAGES !!!!!!", pages);
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
        {/* MENU de products */}
        <div className="links">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/shop/${product.slug}`}
              className="link"
            >
              {product.name}
            </Link>
          ))}
        </div>
        {/* MENU de page */}
        <div className="links">
          {pages.map((page) => (
            <Link key={page._id} href={`/pages/${page.slug}`} className="link">
              {page.title}
            </Link>
          ))}
        </div>

        <div className="bloc_text">
          <h1>This is the Home page</h1>{" "}
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
      <section className="newest_section">
        <Newest />
      </section>
      {/* <ProductsPages /> */}
    </>
  );
};

export default Home;
