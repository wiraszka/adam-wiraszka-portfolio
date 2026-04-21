"use client";

import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: { icon: IconType; label: string; color: string }[] = [
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: SiFastapi, label: "FastAPI", color: "#009688" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiGit, label: "Git", color: "#F05032" },
];

export default function TechIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      {ICONS.map(({ icon: Icon, label, color }) => (
        <div key={label} className="group relative flex flex-col items-center">
          <Icon
            size={28}
            className="text-stone-500 transition-colors duration-200"
            style={{ color: undefined }}
            onMouseEnter={(e) => {
              (e.currentTarget as SVGElement).style.color = color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as SVGElement).style.color = "";
            }}
          />
          <span className="absolute top-full mt-1 text-xs text-stone-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
