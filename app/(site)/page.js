import Image from "next/image";
import { getProjects } from "@/sanity/lib/client";
import Link from "next/link";
import Newest from "./components/Newest/Newest";
import { getPages } from "@/sanity/lib/client";

const Home = async () => {
  const projects = await getProjects();
  // console.log("PROJECTS!!!!", projects);
  // get all of our pages
  const pages = await getPages();
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
        {/* c'est page */}
        <div className="links">
          {pages.map((page) => (
            <Link key={page._id} href={`/pages/${page.slug}`} className="link">
              {page.title}
            </Link>
          ))}
        </div>
        {/* /////// */}
        <div className="bloc_text">
          <h1>This is the Home page</h1>{" "}
          <p>
            This is the starting project of ecommerce with next js 14 and Sanity
          </p>
        </div>
        <div className="container">
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
      </section>
      <section className="second_section">
        <Newest />
      </section>
    </>
  );
};

export default Home;
