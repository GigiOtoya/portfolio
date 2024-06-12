import { AboutData } from "@/types/types";
import StackItems from "../projects/stackItems";
import { getAboutData } from "@/utils/parseUtils";

export default function AboutDetail() {
  const aboutData: AboutData = getAboutData();
  return (
    <div className="flex flex-col gap-8">
      <p className="tracking-wider leading-loose">{aboutData.about}</p>
      <StackItems items={aboutData.stack} />
    </div>
  );
}
