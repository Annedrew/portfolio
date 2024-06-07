import Intro from "@/app/components/intro";
import SectionDivider from "@/app/components/section-divider";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Contact from "@/app/components/contact";
import Certification from "@/app/components/certification/certification";
import Footer from "@/app/components/footer";

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
