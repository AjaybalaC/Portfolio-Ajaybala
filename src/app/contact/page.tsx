import CTA from "../../components/home/CTA";
import Footer from "../../components/home/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#050D1E] text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-[#0B1730] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
            Let&apos;s talk about your next build.
          </h1>
          <p className="mt-6 text-gray-400">
            I build business websites, product interfaces, and scalable MERN
            applications with a focus on clarity and performance.
          </p>
          <a
            href="mailto:ajaybala495@gmail.com"
            className="mt-8 inline-flex rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
          >
            ajaybala495@gmail.com
          </a>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
