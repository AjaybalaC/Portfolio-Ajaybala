import {
  Boxes,
  Code2,
  Gauge,
  Headphones,
  LayoutPanelTop,
  SquareTerminal,
} from "lucide-react";

const services = [
  {
    title: "MERN Stack Apps",
    desc: "End-to-end full stack applications built with MongoDB, Express, React, and Node.js for high performance.",
    icon: Boxes,
  },
  {
    title: "React/Next.js Interfaces",
    desc: "High-speed, SEO-optimized frontends with seamless user experiences and modern design patterns.",
    icon: LayoutPanelTop,
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused landing pages designed to turn visitors into customers with fast load times.",
    icon: SquareTerminal,
  },
  {
    title: "API Development",
    desc: "Secure, scalable RESTful APIs built to handle complex business logic and third-party integrations.",
    icon: Code2,
  },
  {
    title: "Optimization",
    desc: "Comprehensive performance audits and speed optimizations to ensure your web app runs flawlessly.",
    icon: Gauge,
  },
  {
    title: "Maintenance",
    desc: "Reliable support and regular updates to keep your digital products secure and modern.",
    icon: Headphones,
  },
];

export default function Services() {
  return (
    <section className="bg-[#0b1528] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#eef3ff]">
          Specialized Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-400">
          Comprehensive development solutions tailored to modern business
          needs, from concept to deployment.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/5 bg-[#162136] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:-translate-y-1 hover:border-[#537eff]/30"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d1830] text-[#5c84ff]">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#ecf2ff]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
