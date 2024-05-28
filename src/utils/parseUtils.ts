import { Project } from "@/types/types";
import path from "path";
import fs from "fs";

export const getProjectData = () => {
  const dataPath = path.join(process.cwd(), "posts", "projects.json");
  const data = fs.readFileSync(dataPath, "utf-8");
  const projects: Project = JSON.parse(data);

  const imagesDir = path.join(process.cwd(), "public", "images");
  const images = fs.readdirSync(imagesDir);

  const projectCardsData = images.map((image) => {
    const id = path.parse(image).name as keyof Project;

    if (id in projects) {
      projects[id].image = `/images/${image}`;
    }
    return projects[id];
  });

  return projectCardsData;
};
