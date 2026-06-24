import AboutMe from "../../components/home/AboutMe";
import CTA from "../../components/home/CTA";
import Footer from "../../components/home/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#050D1E] text-white">
      <section className="border-b border-slate-800/80 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
            Building thoughtful products with a full stack mindset.
          </h1>
        </div>
      </section>
      <AboutMe />
      <CTA />
      <Footer />
    </main>
  );
}
