"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "HRMS Management System",
    desc: "Enterprise HRMS platform with employee management, payroll, attendance, and leave tracking. Built secure role-based authentication, scalable REST APIs.",
    tags: ["React", "TypeScript", "Express.js", "MySQL"],
    category: "Enterprise Application",
    viewproject: "",
  },
  {
    title: "Track Nutrition",
    desc: "AI-powered nutrition tracking platform providing real-time nutritional analysis, personalized meal recommendations, and interactive dashboards.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    category: "Health Tech",
    viewproject: "",
  },
  {
    title: "Chit Fund Company Portfolio",
    desc: "Professional business website for a chit fund company to showcase services, schemes, and company information with responsive design and optimized UX.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "Client Project",
    viewproject: "https://chit-fund-qfvc.vercel.app/",
  },
  {
    title: "Syncner Portfolio Website",
    desc: "Designed and developed a modern company portfolio website from requirement gathering to deployment, focusing on branding, performance, and responsiveness.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Business Website",
    viewproject: "",
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const [busy, setBusy] = useState(false);

  const go = useCallback(
    (idx: number) => {
      if (busy) return;
      setBusy(true);
      setActive((idx + projects.length) % projects.length);
    },
    [busy]
  );

  useEffect(() => {
    const t = setTimeout(() => setBusy(false), 400);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(active - 1);
      if (e.key === "ArrowRight") go(active + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, go]);

  // Build the visible window: [prev, active, next]
  const prev = (active - 1 + projects.length) % projects.length;
  const next = (active + 1) % projects.length;

  const visible = [
    { project: projects[prev], pos: "prev", idx: prev },
    { project: projects[active], pos: "active", idx: active },
    { project: projects[next], pos: "next", idx: next },
  ] as const;

  return (
    <section className="bg-[#071224] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8da7ff]">
              <span className="h-px w-10 bg-[#5b74b8]" />
              Work
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              A selection of my best work delivering value to clients.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/4 text-slate-400 transition hover:border-white/16 hover:bg-white/8 hover:text-white disabled:opacity-30"
              disabled={busy}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/4 text-slate-400 transition hover:border-white/16 hover:bg-white/8 hover:text-white disabled:opacity-30"
              disabled={busy}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-10 h-px w-full bg-white/5" />

        {/* 3-card view */}
        <div className="grid grid-cols-[1fr_1.45fr_1fr] gap-4 items-stretch">
          {visible.map(({ project, pos, idx }) => {
            const isActive = pos === "active";
            return (
              <div
                key={project.title}
                onClick={() => !isActive && go(idx)}
                className={`
                  relative flex flex-col rounded-2xl border p-6 transition-all duration-400
                  ${isActive
                    ? "border-[#4f82ff]/25 bg-[#0d1829] opacity-100 scale-100 cursor-default"
                    : "border-white/5 bg-[#090f1e] opacity-40 scale-[0.97] cursor-pointer hover:opacity-60"
                  }
                `}
              >
                {/* Watermark index */}
                <span className="pointer-events-none absolute right-5 top-4 select-none text-6xl font-black leading-none tabular-nums text-white/[0.04]">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Category */}
                <span className="mb-4 inline-block self-start rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className={`font-semibold leading-snug text-[#eef3ff] ${isActive ? "text-xl" : "text-base"} transition-all duration-400`}>
                  {project.title}
                </h3>

                {/* Description — only active */}
                {isActive && (
                  <p className="mt-3 text-sm leading-7 text-slate-400 line-clamp-3">
                    {project.desc}
                  </p>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {(isActive ? project.tags : project.tags.slice(0, 2)).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-[#111d33] px-2.5 py-1 text-[11px] font-medium text-[#c8d6ff]"
                    >
                      {tag}
                    </span>
                  ))}
                  {!isActive && project.tags.length > 2 && (
                    <span className="rounded-md border border-white/5 bg-[#111d33] px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* CTA — only active */}
                {isActive && (
                  <div className="mt-auto border-t border-white/5 pt-5 mt-6">
                    {project.viewproject ? (
                      <Link
                        href={project.viewproject}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#b8ccff] px-5 py-2.5 text-xs font-semibold text-[#081225] transition hover:bg-white"
                      >
                        View Live Project
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs italic text-slate-600">
                        <Lock className="h-3 w-3" />
                        Private project
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="mt-7 flex justify-center gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-[#4f82ff]" : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#89a8ff] transition hover:text-white"
          >
            View Full Portfolio →
          </Link>
        </div>

      </div>
    </section>
  );
}