import Link from "next/link";
import { SpotLight } from "../spotlight/spotLight";

export default function NavBar() {
  return (
    <div className="flex max-w-5xl px-8 py-2 m-auto sticky top-0 bg-black sm:px-12 z-10">
      <div className="flex w-full justify-between font-bold py-1 rounded-md">
        <span className="">
          <Link href={"#home"}>LGO</Link>
        </span>
        <span className="flex ml-auto gap-6 sm:gap-12">
          <span>
            <Link href={"#about"}>About</Link>
          </span>
          <span>
            <Link href={"#projects"}>Projects</Link>
          </span>
          <span>
            <Link href={"#contact"}>Contact</Link>
          </span>
        </span>
      </div>
    </div>
  );
}
