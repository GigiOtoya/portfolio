import { AboutData } from "@/types/types";
import StackItems from "../projects/stackItems";
import { getAboutData } from "@/utils/parseUtils";

export default function AboutDetail() {
  const aboutData: AboutData = getAboutData();
  const paragraphs = aboutData.about.map((p, index) => (
    <p key={index} className="tracking-wider leading-loose">
      {p}
    </p>
  ));

  return (
    <div className="flex flex-col gap-8">
      {paragraphs}
      <StackItems items={aboutData.stack} />
    </div>
  );
}
