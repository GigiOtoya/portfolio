import Projects from "@/components/projects/projects";
import Contact from "@/components/contact";
import About from "@/components/about/about";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Mask from "@/components/mask/mask";
import SpotLightScene from "@/components/spotlight/spotLightScene";

export default function Home() {
  return (
    <>
      <Mask />
      <NavBar />
      <main className="flex min-h-screen max-w-5xl flex-col items-center justify-between bg-gray-950 m-auto px-8 sm:px-12">
        <SpotLightScene />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
