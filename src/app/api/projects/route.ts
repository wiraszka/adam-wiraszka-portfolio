import { NextResponse } from "next/server";

const PROJECTS = [
  {
    id: 1,
    name: "Invest Hub",
    description:
      "Personal investment research platform integrating live market data, SEC filings, and LLM-driven analysis into a structured MongoDB pipeline.",
    url: "https://github.com/wiraszka/invest-hub",
    tags: ["Next.js", "FastAPI", "MongoDB", "Python"],
  },
  {
    id: 2,
    name: "AW Piano Studio",
    description:
      "Professional business website featuring instructor profiles, downloadable resources, and an integrated contact form with Google Maps.",
    url: "https://awpianostudio.com",
    tags: ["Next.js", "Vercel"],
  },
  {
    id: 3,
    name: "Portfolio Site",
    description:
      "This portfolio website — built with Next.js and a FastAPI backend, deployed on Vercel with a custom domain.",
    url: "https://adamwiraszka.com",
    tags: ["Next.js", "FastAPI", "Tailwind CSS", "Vercel"],
  },
  {
    id: 4,
    name: "Placeholder Project",
    description: "A brief description of what this project does and why it is interesting.",
    url: "https://example.com",
    tags: ["Python", "FastAPI"],
  },
  {
    id: 5,
    name: "Placeholder Project",
    description: "A brief description of what this project does and why it is interesting.",
    url: "https://example.com",
    tags: ["React", "TypeScript"],
  },
  {
    id: 6,
    name: "Placeholder Project",
    description: "A brief description of what this project does and why it is interesting.",
    url: "https://example.com",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

export function GET() {
  return NextResponse.json(PROJECTS);
}
