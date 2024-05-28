import Projects from "@/components/projects";
import Contact from "@/components/contact";
import About from "@/components/about";
import NavBar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center justify-between bg-gray-900 m-auto px-8 sm:px-12">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
