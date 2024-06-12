import { ReactNode } from "react";

type ProjectProps = {
  children: ReactNode[];
};

export default function ProjectCard({ children }: ProjectProps) {
  const [left, right] = children;
  return (
    <div className="flex flex-col-reverse gap-y-4 sm:flex-row py-4 gap-x-4">
      <div className="flex items-center sm:w-2/4">{left}</div>
      <div className="flex items-center sm:w-2/4">{right}</div>
    </div>
  );
}
