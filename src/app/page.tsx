import Hero from "../components/home/Hero";
import WhyChooseMe from "../components/home/WhyChooseMe";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AboutMe from "../components/home/AboutMe";
import Skills from "../components/home/Skills";
import Experience from "../components/home/Experience";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <main className="bg-[#050D1E] text-white">
      <Hero />
      <WhyChooseMe />
      <Services />
      <FeaturedProjects />
      <AboutMe />
      <Skills />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}