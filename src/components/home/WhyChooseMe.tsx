import {
  BriefcaseBusiness,
  Rocket,
  MonitorSmartphone,
  Trophy,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: BriefcaseBusiness,
    label: "18+ months practical experience",
  },
  {
    icon: Rocket,
    label: "Startup & freelance experience",
  },
  {
    icon: MonitorSmartphone,
    label: "Delivered business websites",
  },
  {
    icon: Trophy,
    label: "Strong MERN skills",
  },
  {
    icon: ShieldCheck,
    label: "SEO-friendly solutions",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="border-y border-white/5 bg-[#0a1628]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-baseline gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Value
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-[#eaf0ff]">
            Why work with me?
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#101e35] p-4 transition hover:border-white/10 hover:bg-[#132040]"
            >
              {/* Icon tile */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-[#0d1830]">
                <Icon
                  className="h-4 w-4 text-[#89a8ff]"
                  strokeWidth={1.75}
                />
              </div>

              {/* Label */}
              <p className="text-[13px] font-medium leading-snug text-slate-200">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}