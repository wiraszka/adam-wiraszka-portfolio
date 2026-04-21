"use client";

import { useFetch } from "@/hooks/useFetch";
import ProjectCard from "./ProjectCard";
import SkeletonGrid from "./SkeletonGrid";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export default function ProjectsGrid() {
  const { data: projects, loading } = useFetch<Project>("/api/projects");

  if (loading) return <SkeletonGrid />;
  if (projects.length === 0) return <p className="text-stone-400">No projects found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
