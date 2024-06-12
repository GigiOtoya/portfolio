import Image from "next/image";
import ProjectCard from "./projectCard";
import ProjectDetail from "./projectDetail";
import SectionLayout from "../sectionLayout";
import { getProjectData } from "@/utils/parseUtils";

export default function Projects() {
  const imageAttributes = {
    width: 464,
    height: 360,
    layout: "intrinsic",
  };

  const projectCards = getProjectData().map((project, id) => (
    <ProjectCard key={id}>
      <Image
        src={project.image}
        alt={project.name}
        className="w-full border-2  border-slate-700 rounded-md"
        {...imageAttributes}
      />
      <ProjectDetail
        name={project.name}
        stack={project.stack}
        description={project.description}
        versions={project.versions}
      />
    </ProjectCard>
  ));

  return (
    <SectionLayout id="projects" title="Projects">
      {projectCards}
    </SectionLayout>
  );
}
