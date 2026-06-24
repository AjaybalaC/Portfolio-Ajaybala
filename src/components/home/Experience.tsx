const journey = [
  {
    period: "2023 - Present",
    role: "MERN Developer (Freelance)",
    copy:
      "Working directly with international and local clients to deliver custom web solutions, management systems, and business portfolios.",
  },
  {
    period: "2022 - 2023",
    role: "Web Development Intern",
    copy:
      "Contributed to front-end development using React and mastered responsive design principles in a collaborative team environment.",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#081225] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-semibold tracking-tight text-[#eef3ff]">
          Professional Journey
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            {journey.map((item) => (
              <div key={item.role} className="border-l border-[#3f62c7] pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7695ff]">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#eef3ff]">
                  {item.role}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.8rem] border border-white/5 bg-[#162136] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="mb-6 flex gap-1 text-lg text-[#ffb26a]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-2xl font-medium leading-10 text-[#eef3ff]">
              &quot;Ajaybala delivered our management application ahead of
              schedule. The code quality is top-notch, and the dashboard he
              built has significantly improved our operations.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#233350] text-sm font-semibold text-[#b5c9ff]">
                CF
              </div>
              <div>
                <p className="font-semibold text-[#eef3ff]">Operations Manager</p>
                <p className="text-sm text-slate-400">Craft Fund Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
