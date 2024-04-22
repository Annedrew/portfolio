import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Certification from "@/components/certification/certification";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
