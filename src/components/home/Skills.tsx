const skills = {
  Frontend: ["React", "Next.js", "Tailwind", "JS/TS"],
  Backend: ["Node.js", "Express", "REST API"],
  Database: ["MongoDB", "MySQL", "Supabase"],
  Tools: ["Git", "Github", "Vercel", "Postman","Notion", "Figma"],
};

export default function Skills() {
  return (
    <section className="bg-[#101a2d] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#eef3ff]">
          Technical Arsenal
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          The tools I use to bring your ideas to life.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([title, values]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-[#162136] p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {values.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/6 bg-[#212c44] px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
