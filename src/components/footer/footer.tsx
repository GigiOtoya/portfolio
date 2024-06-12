import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full justify-center  bg-black">
      <div className="max-w-5xl w-full flex justify-end">
        <span className="p-2 font-semibold text-slate-500  text-right   py-8 sm:py-2">
          <div className="">
            Built with{" "}
            <Link className="text-sky-400" href="https://nextjs.org/">
              Next.JS
            </Link>
            {", "}
            <Link className="text-sky-400" href="https://threejs.org/">
              Three.JS
            </Link>
            {", "}
            <Link className="text-sky-400" href="https://tailwindcss.com/">
              Tailwind
            </Link>
            {", "}
            and deployed with{" "}
            <Link className="text-sky-400" href="https://vercel.com/">
              Vercel
            </Link>
            {"."}
          </div>
          <div>&#169; 2024, Luigi Otoya</div>
        </span>
      </div>
    </div>
  );
}
