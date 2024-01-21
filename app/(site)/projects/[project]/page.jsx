import { getProject } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export const dynamic = "force-dynamic";

// ici page individuelle get project
const Project = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  console.log("PROJECT!!!!", project);

  return (
    <div className="project_slug_getproject">
      <header>
        <h1>{project.name}</h1>
      </header>
      <div>
        <PortableText value={project.content} />
      </div>
      ici c est IMAGES
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={250}
          height={100}
          className="project_img"
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <div>
        <div>{project.body} ici c est le body !!!!!</div>
      </div>
    </div>
  );
};

export default Project;
