import Link from "next/link";

type ProjectDetailProps = {
  name: string;
  stack: string[];
  description: string;
  demo: string;
  src: string;
};

export default function ProjectDetail(props: ProjectDetailProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className=" text-2xl font-bold">{props.name}</h1>
      <div>{props.stack}</div>
      <p>{props.description}</p>
      <div className="flex justify-end gap-2">
        <Link href={props.src} target="_blank" className="bg-slate-500 border-2 rounded-sm p-1 ">
          <div>SRC</div>
        </Link>
        <Link href={props.demo} target="_blank" className="bg-slate-500 border-2 rounded-sm p-1">
          <div>DEMO</div>
        </Link>
      </div>
    </div>
  );
}
