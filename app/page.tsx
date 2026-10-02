import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0d0e1a] min-h-screen text-white font-sans">
      <Hero />
      <TechMarquee />
      <AboutMe />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}