import ProjectCard from "./projects/projectCard";
import Project from "./projects/projectCard";
import ProjectDetail from "./projects/projectDetail";
import SectionLayout from "./sectionLayout";

export default function Projects() {
  return (
    <SectionLayout id="projects" title="Projects">
      <ProjectCard>
        <div>image</div>
        <ProjectDetail
          name="Algorithm Visualizer"
          stack={["JavaScript, TypeScript, React"]}
          description="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cupiditate alias dicta
        velit? Atque quisquam inventore distinctio, sapiente in velit corporis at adipisci ab
        dicta dolorem, perferendis deleniti? Asperiores, laudantium."
          demo="https://pathfinder-v2-rho.vercel.app/"
          src="https://github.com/GigiOtoya/pathfinder-v2"
        />
      </ProjectCard>

      {/* <ProjectCard />
      <></>
      <ProjectCard /> */}
    </SectionLayout>
  );
}
