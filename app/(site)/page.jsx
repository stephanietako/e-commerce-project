import Link from "next/link";
// import Products from "./components/Products/Products";
// import { getDataProductsPages } from "@/sanity/lib/client";
import StarProducts from "./components/StarProducts/StarProducts";
import { getDataStarProducts } from "@/sanity/lib/client";
import { getDataProducts } from "@/sanity/lib/client";
import { getDataFlowers } from "@/sanity/lib/client";
import Flowers from "./components/Flowers/Flowers";
//import HeroContainer from "./components/HeroContainer/HeroContainer";
import AnimeCartFilter from "./components/AnimeCartFilter/AnimeCartFilter";
// import SelectCategories from "./categories/selectCategories/page";
// import SelectProducts from "./products/selectProducts/page";
import Banner from "./components/Banner/Banner";
// import All from "./components/All/All";
// import SearchBarAll from "./components/SearchBarAll/SearchBarAll";
import Image from "next/image";
import backgroundImg from "@/public/assets/notorious.webp";
import Hero from "./components/Hero/Hero";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import HeaderImg from "./components/HeaderImg/HeaderImg";
const Home = async () => {
  // const projects = await getProjects();
  const starproducts = await getDataStarProducts();
  // const allproducts = await getDataProductsPages();
  const products = await getDataProducts();
  const allflowers = await getDataFlowers();
  // const all = await fetchDataSearchBar();

  return (
    <>
      <div
        className="home_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          // border: "3px solid blue",
        }}
      >
        {/* <HeaderImg /> */}
        <div
          className="header_container_home__bg"
          style={{
            display: "flex",
            width: "auto",
            height: "auto",
            alignItems: "center",
            position: "absolute",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            alignSelf: "flex-start",
            top: 18,
            left: "2rem",
          }}
        >
          <HeaderImg />
        </div>
        <div
          className="menu"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent: "center",
            zIndex: 3,
            marginTop: "2rem",
          }}
        >
          <NavbarMenu />
        </div>
        <div
          className="home_page"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            // border: "3px solid pink",
          }}
        >
          {/* ////////////////HERO//////////////////// */}
          <div
            className="herocontainer_section"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <Hero />
          </div>
          <div>
            <Banner />
          </div>
          <section className="animefilter_section">
            <AnimeCartFilter />
          </section>

          <section className="categories_section">
            <Flowers allflowers={allflowers} />
          </section>
          <section className="starproducts_section">
            <StarProducts starproducts={starproducts} />
          </section>
          {/* <section className="all_products_section">
            <Products allproducts={allproducts} />
          </section> */}
          {/* <section>
            <SelectProducts />
          </section>
          <section>
            <SelectCategories />
          </section> */}

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
        </div>
      </div>
    </>
  );
};

export default Home;
