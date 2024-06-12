import { ReactNode } from "react";

type SectionLayoutProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export default function SectionLayout({ id, title, children }: SectionLayoutProps) {
  return (
    <div id={id} className="w-full py-2">
      <h1 className="text-4xl font-bold"> {title} </h1>
      <div className="py-4">{children}</div>
    </div>
  );
}
