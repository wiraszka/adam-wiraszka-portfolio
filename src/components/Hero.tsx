"use client";

import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";
import TechIcons from "@/components/TechIcons";

const ROLES = ["Software Engineer", "Data Scientist", "Python Developer"];

const SUMMARY =
  "Software engineer and data scientist with end-to-end experience building data pipelines, analytics tools, and full-stack web applications.";

export default function Hero() {
  const { text } = useTypewriter(ROLES);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="max-w-md">
        <p className="text-stone-400 text-sm mb-2">Hi, I&apos;m</p>
        <h1 className="text-5xl font-bold text-stone-900 mb-4">Adam Wiraszka.</h1>
        <div className="h-8 mb-8">
          <span className="text-xl text-stone-500">{text}</span>
          <span className="cursor-blink text-stone-400">|</span>
        </div>
        <p className="text-stone-500 leading-relaxed mb-8 max-w-md">{SUMMARY}</p>
        <div className="flex gap-4 mb-8">
          <a
            href="#projects"
            className="bg-stone-900 text-white text-sm font-medium rounded-lg px-8 py-4 hover:bg-stone-700 transition-colors"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-300 text-stone-600 text-sm font-medium rounded-lg px-8 py-4 hover:border-stone-500 hover:text-stone-800 transition-colors"
          >
            Resume ↓
          </a>
        </div>
        <TechIcons />
      </div>

      <div className="flex-shrink-0">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image src="/profile.png" alt="Adam Wiraszka" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
}
