import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pb-16">
      <Hero />
      <hr className="border-gray-100 mb-12" />
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>
        <ProjectsGrid />
      </section>
    </main>
  );
}
