import Link from "next/link";
// import Products from "./components/Products/Products";
// import { getDataProductsPages } from "@/sanity/lib/client";
import StarProducts from "./components/StarProducts/StarProducts";
import { getDataStarProducts } from "@/sanity/lib/client";
import { getDataProducts } from "@/sanity/lib/client";
import { getDataFlowers } from "@/sanity/lib/client";
import Flowers from "./components/Flowers/Flowers";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import AnimeCartFilter from "./components/AnimeCartFilter/AnimeCartFilter";
import SelectCategories from "./categories/selectCategories/page";
import SelectProducts from "./products/selectProducts/page";
// import All from "./components/All/All";
// import SearchBarAll from "./components/SearchBarAll/SearchBarAll";

const Home = async () => {
  // const projects = await getProjects();
  const starproducts = await getDataStarProducts();
  // const allproducts = await getDataProductsPages();
  const products = await getDataProducts();
  const allflowers = await getDataFlowers();
  // const all = await fetchDataSearchBar();
  ////////////////
  const cards = [
    {
      imageUrl: "/assets/vibes.png",
      title: "essai",
      subtitle: "Not Made of Jelly",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
  ];

  return (
    <>
      <section
        className="home_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="menu_products">
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
        </div>
        {/* //////////////////////////////////// */}
        <div
          className="home_page"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {/* ////////////////HERO//////////////////// */}
          <section className="herocontainer_section">
            <HeroContainer cards={cards} />
          </section>

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
          <section>
            <SelectProducts />
          </section>
          <section>
            <SelectCategories />
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
        </div>
      </section>
    </>
  );
};

export default Home;
