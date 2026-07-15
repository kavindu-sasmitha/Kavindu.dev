import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0f0a] min-h-screen text-white font-sans">
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}