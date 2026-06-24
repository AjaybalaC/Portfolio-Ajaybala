import CTA from "../../components/home/CTA";
import Footer from "../../components/home/Footer";
import Services from "../../components/home/Services";

export default function ServicesPage() {
  return (
    <main className="bg-[#050D1E] text-white">
      <section className="border-b border-slate-800/80 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
            Product development support from landing pages to full stack apps.
          </h1>
        </div>
      </section>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
