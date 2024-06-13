import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import About from "@/components/about/about";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Mask from "@/components/mask/mask";
import SpotLightScene from "@/components/spotlight/spotLightScene";
import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <>
      <Mask />
      <NavBar />
      <main className="flex min-h-screen max-w-5xl flex-col items-center justify-between bg-gray-950 m-auto px-8 sm:px-12">
        <SpotLightScene />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
