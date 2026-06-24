import Image from "next/image";
import ajay from "@/public/ajay.jpg";

export default function AboutMe() {
  return (
    <section className="bg-[#0b1528] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#27406f] bg-[#101a2f] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
          <Image
            src={ajay}
            alt="Ajay"
            width={560}
            height={680}
            className="h-full w-full rounded-[1.4rem] object-cover"
          />
          <div className="absolute bottom-4 right-4 rounded-2xl border border-white/8 bg-[#18253d] px-4 py-3 text-right shadow-lg">
            <p className="text-xl font-semibold text-[#eef3ff]">1.5y</p>
            <p className="text-xs text-slate-400">Industry Exp.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#eef3ff] lg:text-5xl">
            Precision-Driven Development for Businesses
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            I&apos;m Ajaybala C., a dedicated Full Stack Developer based in Tamil
            Nadu. My approach goes beyond just writing code; I focus on
            understanding your business requirements to build user-friendly
            products that drive growth.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            With over 18 months of practical experience in both startup
            environments and freelance projects, I&apos;ve developed a keen eye for
            clean architecture and performant interfaces. Whether it&apos;s a
            complex management system or a high-converting landing page, I
            ensure every line of code serves your business goals.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#6f93ff]">Location</p>
              <p className="mt-2 text-sm text-slate-300">Tamil Nadu, India</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#6f93ff]">Focus</p>
              <p className="mt-2 text-sm text-slate-300">
                Business Growth &amp; Scalability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
