import Link from "next/link";

//import { getProductsByCategories } from "@/sanity/lib/client";
//import { getPages } from "@/sanity/lib/client";
import { getCategories } from "@/sanity/lib/client";
//import Categories from "./components/Categories/Categories";
import Bycategories from "./components/Bycategories/Bycategories";
import Products from "./components/Products/Products";
import { getDataProductsPages } from "@/sanity/lib/client";
import StarProducts from "./components/StarProducts/StarProducts";
import { getDataStarProducts } from "@/sanity/lib/client";
import { getDataProducts } from "@/sanity/lib/client";
import { getDataFlowers } from "@/sanity/lib/client";
import Flowers from "./components/Flowers/Flowers";

import HeroContainer from "./components/HeroContainer/HeroContainer";
// import All from "./components/All/All";
//import { fetchDataSearchBar } from "@/sanity/lib/api";

// import SearchBarAll from "./components/SearchBarAll/SearchBarAll";

const Home = async () => {
  // const projects = await getProjects();
  //about/contact
  // const pages = await getPages();
  //const category = await getProductsByCategories();
  const bycategory = await getCategories();
  const starproducts = await getDataStarProducts();
  const allproducts = await getDataProductsPages();
  const products = await getDataProducts();
  // const categories = await getCategories();
  const allflowers = await getDataFlowers();
  // const all = await fetchDataSearchBar();
  ///////////////
  // const categorypages = getProductsByCategories();
  /////////////////
  // Vos données de cartes
  const cards = [
    {
      imageUrl: "/assets/vibes.png", // Chemin de l'image corrigé
      title: "essai",
      subtitle: "Not Made of Jelly",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
  ];
  return (
    <>
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
      {/* //////////////////////////////////// */}
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
        {/* ////////////////HERO//////////////////// */}
        <section>
          <HeroContainer cards={cards} />
          {/* <Hero cards={cards} /> */}
        </section>

        {/* <section>
          <h2>Search bar de tout le shop</h2>
          <SearchBarAll />
        </section> */}

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
      <section className="starproducts_section">
        <StarProducts starproducts={starproducts} />
      </section>
      {/* ///////////////////// */}
      {/* <section>
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
      </section> */}
      {/* //////////////////////////////////////////// */}
      <section className="categories_section">
        <Flowers allflowers={allflowers} />
      </section>

      {/* <section>
        <All all={all} />
      </section> */}

      <section>
        <Products allproducts={allproducts} />
      </section>
      <section className="by_categories_section">
        <Bycategories bycategory={bycategory} />
      </section>
      {/* <section className="all_categories_section">
        <Categories category={category} />
      </section> */}
    </>
  );
};

export default Home;
