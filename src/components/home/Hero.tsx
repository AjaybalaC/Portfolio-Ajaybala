import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const metrics = ["18+ Months Experience", "8+ Projects Delivered"];
const stacks = ["React", "Next.js", "Node.js", "MongoDB"];

const whyMetrics = [
  {
    icon: "⚡",
    label: "18+ months",
    sub: "Experience",
  },
  {
    icon: "🚀",
    label: "Startup &",
    sub: "Freelance Experience",
  },
  {
    icon: "💻",
    label: "Delivered business",
    sub: "websites",
  },
  {
    icon: "🛠",
    label: "Strong MERN skills",
  },
  {
    icon: "🌐",
    label: "SEO-friendly",
    sub: "solutions",
  },
];

// Mini dashboard card data
const dashStats = [
  { label: "Projects", value: "8+", change: "+3 this yr" },
  { label: "Clients", value: "6+", change: "Satisfied" },
];

const techBars = [
  { name: "React / Next.js", pct: 92 },
  { name: "Node.js / Express", pct: 85 },
  { name: "MongoDB", pct: 80 },
  { name: "TypeScript", pct: 78 },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5 bg-[#081225]">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(89,128,255,0.18),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-18 pt-6 lg:px-8 lg:pb-24 lg:pt-8">
          {/* ── Nav ── */}
          <header className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-white"
            >
              Ajaybala C.
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="rounded-xl border border-[#afc4ff]/30 bg-[#b8ccff] px-4 py-2 text-xs font-semibold text-[#081225] transition hover:bg-white"
            >
              Get In Touch
            </Link>
          </header>

          {/* ── Hero grid ── */}
          <div className="grid min-h-[calc(100vh-9rem)] items-center gap-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
            {/* Left: copy */}
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8da7ff]">
                <span className="h-px w-12 bg-[#5b74b8]" />
                Available For Hire
              </div>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#f4f7ff] sm:text-6xl lg:text-[4.6rem]">
                Full Stack
                <br />
                Developer |
                <span className="text-[#4f82ff]"> MERN</span>
                <br />
                <span className="text-[#4f82ff]">Stack</span> Developer
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                Building scalable web applications, business websites, and
                custom digital solutions that help startups and businesses grow
                online.
              </p>

              {/* Metric pills */}
              <div className="mt-7 flex flex-wrap gap-3">
                {metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/6 bg-white/4 px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Stack badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-md border border-white/5 bg-[#111d33] px-3 py-1.5 text-xs font-medium text-[#c8d6ff]"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#b8ccff] px-6 py-3 text-sm font-semibold text-[#081225] shadow-[0_12px_30px_rgba(131,162,255,0.18)] transition hover:bg-white"
                >
                  Let&apos;s Discuss Your Project
                </Link>
                <Link
                  href="/projects"
                  className="rounded-xl border border-white/10 bg-[#0d1830] px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-[#12203f]"
                >
                  View My Work
                </Link>
              </div>
            </div>

            {/* Right: mini dashboard card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(85,127,255,0.18),_transparent_55%)] blur-3xl" />

              <div className="relative mx-auto w-full max-w-[30rem] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(19,30,56,0.85),rgba(12,22,41,0.6))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_70px_rgba(0,0,0,0.35)]">
                {/* Inner border ring */}
                <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/[0.04]" />

                {/* Card header */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8da7ff]">
                    Developer Dashboard
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                {/* Stats row */}
                <div className="mb-5 grid grid-cols-2 gap-3">
                  {dashStats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/5 bg-white/3 px-4 py-3"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        {s.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-[#f4f7ff]">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[11px] text-emerald-400">
                        {s.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Core Stack Proficiency
                  </p>
                  {techBars.map((bar) => (
                    <div key={bar.name}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-xs text-slate-300">
                          {bar.name}
                        </span>
                        <span className="text-xs font-medium text-[#8da7ff]">
                          {bar.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#4f82ff] to-[#8da7ff]"
                          style={{ width: `${bar.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer tag */}
                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-[11px] text-slate-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4f82ff]" />
                  Tamil Nadu, India · Full-time freelance open
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Work With Me? bar ── */}
      {/* <section className="border-b border-white/5 bg-[#060f1e]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10">
            <p className="shrink-0 text-sm font-semibold text-white lg:text-base">
              Why Work With Me?
            </p>
            <div className="h-px w-full bg-white/5 lg:hidden" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {whyMetrics.map((m, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-base">{m.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {m.label}
                    </p>
                    {m.sub && (
                      <p className="text-[11px] text-slate-500">{m.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}