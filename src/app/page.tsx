import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

async function getProjects(): Promise<Project[]> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/projects`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto px-6 pb-16">
      <Hero />
      <hr className="border-gray-100 mb-12" />
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No projects found</p>
        )}
      </section>
    </main>
  );
}
