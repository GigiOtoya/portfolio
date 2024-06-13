import { getAboutData } from "@/utils/parseUtils";

export default function Intro() {
  const intro = getAboutData().intro;
  return (
    <div className="w-full">
      <div className="w-2/4 float-end">
        <h1 className="text-5xl text-sky-400 font-bold">Luigi Otoya</h1>
        <p className="py-4">{intro}</p>
      </div>
    </div>
  );
}
