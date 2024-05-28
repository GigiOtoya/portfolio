import { ReactNode } from "react";

type ProjectProps = {
  children: ReactNode[];
};

export default function ProjectCard({ children }: ProjectProps) {
  const [left, right] = children;
  return (
    <div className="flex flex-col gap-y-4 sm:flex-row py-4 gap-x-4">
      <div className="sm:w-2/4 m-auto">{left}</div>
      <div className="sm:w-2/4 m-auto">{right}</div>
    </div>
  );
}
