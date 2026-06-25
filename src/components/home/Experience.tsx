const journey = [
  {
    period: "Feb 2026 – Present",
    role: "Software Engineer",
    company: "Nubiznez Technology",
    type: "Full-time",
    bullets: [
      "Developed and maintained enterprise-grade HRMS modules using React, TypeScript, Express.js, and MySQL.",
      "Implemented multi-tenant architecture with secure tenant isolation and role-based access control.",
      "Designed and optimized RESTful APIs, reducing response latency and improving maintainability.",
      "Built reusable component libraries for employee, payroll, leave, and attendance management.",
    ],
    stack: ["React", "TypeScript", "Express.js", "MySQL"],
  },
  {
    period: "Sep 2025 – Jan 2026",
    role: "Junior Full Stack Developer",
    company: "One-to-Infinity",
    type: "Full-time",
    bullets: [
      "Developed end-to-end web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Led the development of the Syncner Portfolio project from requirement gathering to deployment.",
      "Designed RESTful APIs and integrated JWT-based authentication mechanisms.",
      "Implemented Git branching strategies and collaborated through pull requests and code reviews.",
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT"],
  },
  {
    period: "Nov 2024 – Jun 2025",
    role: "Software Developer Trainee",
    company: "Wise Work",
    type: "Trainee",
    bullets: [
      "Contributed to an AI-powered cloud migration platform focused on infrastructure assessment.",
      "Developed reusable Blazor and Mud-Blazor components following component-driven architecture.",
      "Assisted in CI/CD workflows, deployment validation, and release testing.",
      "Collaborated with product and engineering teams to troubleshoot production issues.",
    ],
    stack: ["Blazor", "C#", "ASP.NET", "MudBlazor"],
  },
];

const education = {
  degree: "B.Tech – AI & Data Science",
  institution: "SNS College of Engineering, Coimbatore",
  period: "2021 – 2025",
  cgpa: "8.39",
};

const certifications = ["Frontend Development (React.js)", "MERN Stack Development"];

export default function Experience() {
  return (
    <section className="bg-[#081225] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8da7ff]">
            <span className="h-px w-10 bg-[#5b74b8]" />
            Career
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#eef3ff]">
            Professional Journey
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Timeline ── */}
          <div className="relative">
            {/* Vertical rule */}
            <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-[#3f62c7] via-[#3f62c7]/40 to-transparent" />

            <div className="space-y-10">
              {journey.map((item, i) => (
                <div key={item.role + item.company} className="relative pl-6">
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                      i === 0
                        ? "border-[#4f82ff] bg-[#4f82ff]"
                        : "border-[#3f62c7] bg-[#081225]"
                    }`}
                  />

                  {/* Period + type */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7695ff]">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/4 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  {/* Role + company */}
                  <h3 className="mt-2 text-xl font-semibold text-[#eef3ff]">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[#89a8ff]">
                    {item.company}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-6 text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4f82ff]/60" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/5 bg-[#111d33] px-2.5 py-1 text-[11px] font-medium text-[#c8d6ff]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: testimonial + edu + certs ── */}
          <div className="flex flex-col gap-5">
            {/* Testimonial card */}
            <div className="rounded-[1.6rem] border border-white/5 bg-[#0e1e36] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-5 flex gap-0.5 text-[#ffb26a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-base">★</span>
                ))}
              </div>
              <p className="text-[15px] font-medium leading-8 text-[#d8e4ff]">
                &quot;Ajaybala delivered our management application ahead of
                schedule. The code quality is top-notch, and the dashboard he
                built has significantly improved our operations.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c2f4e] text-xs font-semibold text-[#b5c9ff]">
                  OM
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#eef3ff]">
                    Operations Manager
                  </p>
                  <p className="text-xs text-slate-500">Chit Fund Company</p>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="rounded-[1.6rem] border border-white/5 bg-[#0e1e36] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Education
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#eef3ff]">
                    {education.degree}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {education.institution}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{education.period}</p>
                </div>
                <div className="shrink-0 rounded-xl border border-[#4f82ff]/20 bg-[#4f82ff]/8 px-3 py-2 text-center">
                  <p className="text-lg font-semibold text-[#89a8ff]">
                    {education.cgpa}
                  </p>
                  <p className="text-[10px] text-slate-500">CGPA</p>
                </div>
              </div>
            </div>

            {/* Certifications card */}
            <div className="rounded-[1.6rem] border border-white/5 bg-[#0e1e36] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Certifications
              </p>
              <div className="space-y-2.5">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#4f82ff]/30 bg-[#4f82ff]/10 text-[10px] text-[#89a8ff]">
                      ✓
                    </span>
                    <span className="text-sm text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}