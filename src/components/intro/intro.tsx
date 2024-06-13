import { getAboutData } from "@/utils/parseUtils";

export default function Intro() {
  const intro = getAboutData().intro;
  return (
    <div className="w-full">
      <div className=" w-full sm:pl-2 sm:w-2/4 float-end">
        <h1 className="overflow-hidden min-h-14 text-5xl text-sky-400 font-bold animate-tracking-in-contract whitespace-nowrap">
          Luigi Otoya
        </h1>
        <p className="tracking-wider leading-loose">{intro}</p>
      </div>
    </div>
  );
}
