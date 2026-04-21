import Hero from "@/components/Hero";
import About from "@/components/About";
import CertificatesGrid from "@/components/CertificatesGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main>
      <section id="hero" className="px-8 py-16">
        <Hero />
      </section>
      <section id="about" className="py-16">
        <SectionTitle name="About" />
        <div className="max-w-4xl mx-auto px-8">
          <About />
        </div>
      </section>
      <section id="certificates" className="py-16">
        <SectionTitle name="Certificates" />
        <div className="max-w-4xl mx-auto px-8">
          <CertificatesGrid />
        </div>
      </section>
      <section id="projects" className="py-16">
        <SectionTitle name="Projects" />
        <div className="max-w-4xl mx-auto px-8">
          <ProjectsGrid />
        </div>
      </section>
    </main>
  );
}
