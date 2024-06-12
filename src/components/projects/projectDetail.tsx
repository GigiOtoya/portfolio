import { ProjectData } from "@/types/types";
import StackItems from "./stackItems";
import Link from "next/link";

type ProjectDetailProps = Omit<ProjectData, "image">;

export default function ProjectDetail(props: ProjectDetailProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-bold text-green-400">{props.name}</h1>
      <StackItems items={props.stack} />
      <p className="tracking-wider leading-loose">{props.description}</p>
      {props.versions.map((v) => (
        <div key={v.version} className="flex gap-2">
          <span className="text-green-400 font-semibold my-auto min-w-8 ">{v.version}:</span>
          <Link
            href={v.src}
            target="_blank"
            className="bg-slate-950 border-2 border-sky-800 rounded-sm p-1 hover:border-sky-600 duration-300"
          >
            Source
          </Link>
          {v.demo && (
            <Link
              href={v.demo}
              target="_blank"
              className="bg-slate-950 border-2 border-sky-800 rounded-sm p-1 hover:border-sky-600 duration-300"
            >
              Demo
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
