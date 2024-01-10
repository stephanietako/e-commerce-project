import Image from "next/image";
import { getProjects } from "@/sanity/lib/client";
import Link from "next/link";
import Newest from "./components/Newest/Newest";

const Home = async () => {
  const projects = await getProjects();
  // console.log("PROJECTS!!!!", projects);
  return (
    <>
      <section className="first_section">
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
