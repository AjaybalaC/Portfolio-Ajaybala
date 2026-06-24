import CTA from "../../components/home/CTA";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import Footer from "../../components/home/Footer";

export default function ProjectsPage() {
  return (
    <main className="bg-[#050D1E] text-white">
      <section className="border-b border-slate-800/80 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>
          <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
            Selected work focused on product polish and business value.
          </h1>
        </div>
      </section>
      <FeaturedProjects />
      <CTA />
      <Footer />
    </main>
  );
}
