import { ReactNode } from "react";
import ProjectDetail from "./projectDetail";

type ProjectProps = {
  children: ReactNode[];
};

export default function ProjectCard({ children }: ProjectProps) {
  const [left, right] = children;
  return (
    <div className="flex">
      <div className="w-2/4">{left}</div>
      <div className="w-2/4">{right}</div>
    </div>
  );
}
