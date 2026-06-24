import Image from "next/image";
import Link from "next/link";
import Project1 from "@/public/project1.jpg";

const projects = [
  {
    title: "Portfolio Management App",
    image: Project1,
    desc: "CRM-style company customer management system with secure dashboards and real-time reporting.",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    title: "Company Portfolio Website",
    image: Project1,
    desc: "Responsive, SEO-optimized business website for a digital agency with high-speed performance scores.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Hotel Landing Page",
    image: Project1,
    desc: "Modern booking platform focused on customer engagement and high conversion rate optimization.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Weather Application",
    image: Project1,
    desc: "Location-detecting weather tracker with real-time updates and interactive forecast data.",
    tags: ["React", "API", "MongoDB"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#071224] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#eef3ff]">
              Featured Projects
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              A selection of my best work delivering value to clients.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#a8bdff] transition hover:text-white"
          >
            View Full Portfolio
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="h-72 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="px-1 pb-1 pt-5">
                <h3 className="text-2xl font-semibold text-[#edf2ff]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  {project.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/6 bg-[#121d33] px-2.5 py-1 text-[11px] font-medium text-[#bccdff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
