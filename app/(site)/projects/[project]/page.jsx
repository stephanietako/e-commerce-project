import { getProject } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Project = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  console.log("PROJECT!!!!", project);

  return (
    <div>
      <header>
        <h1>{project.name}</h1>
      </header>
      <div>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={250}
        height={100}
        className="project_img"
      />
      <div>
        <div>{project.body}</div>
      </div>
    </div>
  );
};

export default Project;
