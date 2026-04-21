"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  { ssr: false }
);

const EXPERTISE =
  "Data science professional with end-to-end experience across the data lifecycle — pipelines, analytics, dashboards, and LLM tooling. Clear communicator who can translate technical findings for any audience.";

const TECH_STACK = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Chart.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"],
  },
  {
    category: "DevOps",
    items: ["Git", "GitHub Actions", "Vercel", "CI/CD"],
  },
];

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="md:w-1/2 flex flex-col gap-16">
        <p data-testid="expertise-text" className="text-stone-600 leading-relaxed">
          {EXPERTISE}
        </p>
        <div>
          <p className="text-xs font-mono text-stone-400 mb-4">github.com/wiraszka</p>
          <GitHubCalendar
            username="wiraszka"
            colorScheme="light"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            showColorLegend={false}
            showMonthLabels={true}
          />
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-8">
        {TECH_STACK.map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-stone-600 bg-stone-100 rounded-md px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
