import Image from "next/image";
import ProjectCard from "../projects/projectCard";
import SectionLayout from "../section/sectionLayout";
import AboutDetail from "./aboutDetail";

export default function About() {
  return (
    <SectionLayout id="about" title="About Me">
      <ProjectCard>
        <AboutDetail />
        <Image
          src={"/images/other/sitting.png"}
          width={"600"}
          height={400}
          alt="sitting"
          priority={true}
        />
      </ProjectCard>
    </SectionLayout>
  );
}
