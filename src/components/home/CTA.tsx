import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0b1528] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[1.8rem] bg-[#b9ccff] px-6 py-16 text-center text-[#10203f] shadow-[0_24px_80px_rgba(3,9,24,0.24)] sm:px-10">
          <p className="text-sm font-medium text-[#3d568f]">Have a Project in Mind?</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Whether you&apos;re looking for a custom web app or a professional
            website, I&apos;m ready to help you build something amazing.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#11315f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b2448]"
          >
            <Sparkles className="h-4 w-4" />
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
