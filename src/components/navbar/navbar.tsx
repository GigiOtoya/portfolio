import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full py-2">
      <div className="flex justify-between font-bold">
        <span className="">Logo</span>
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
