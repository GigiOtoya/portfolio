import { AboutData, Project } from "@/types/types";
import path from "path";
import fs from "fs";

export const getProjectData = () => {
  const dataPath = path.join(process.cwd(), "posts", "projects.json");
  const data = fs.readFileSync(dataPath, "utf-8");
  const projects: Project = JSON.parse(data);

  const imagesDir = path.join(process.cwd(), "public", "images", "projects");
  const images = fs.readdirSync(imagesDir);

  const projectCardsData = images.map((image) => {
    const id = path.parse(image).name as keyof Project;

    if (id in projects) {
      projects[id].image = `/images/projects/${image}`;
    }
    return projects[id];
  });

  return projectCardsData;
};

export const getAboutData = () => {
  const dataPath = path.join(process.cwd(), "posts", "about.json");
  const data = fs.readFileSync(dataPath, "utf-8");
  const about: AboutData = JSON.parse(data);

  return about;
};
