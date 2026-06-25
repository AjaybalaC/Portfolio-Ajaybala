import Image from "next/image";
import Link from "next/link";
import Project1 from "@/public/project1.jpg";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/project3.png";

const projects = [
  {
    title: "HRMS Management System",
    image: Project2,
    desc: "Enterprise HRMS platform with employee management, payroll, attendance, and leave tracking. Built secure role-based authentication, scalable REST APIs, and optimized database operations for business workflows.",
    tags: ["React", "TypeScript", "Express.js", "MySQL"],
    category: "Enterprise Application",
    viewproject: "",
  },
  {
    title: "Track Nutrition",
    image: Project1,
    desc: "AI-powered nutrition tracking platform providing real-time nutritional analysis, personalized meal recommendations, and interactive dashboards for users and healthcare professionals.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    category: "Health Tech",
    viewproject: "",
  },
  {
    title: "Chit Fund Company Portfolio",
    image: Project3,
    desc: "Professional business website developed for a chit fund company to showcase services, schemes, and company information with responsive design and optimized user experience.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "Client Project",
    viewproject: "https://chit-fund-qfvc.vercel.app/",
  },
  {
    title: "Syncner Portfolio Website",
    image: Project1,
    desc: "Designed and developed a modern company portfolio website from requirement gathering to deployment, focusing on branding, performance, and responsive user experience.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Business Website",
    viewproject: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#071224] py-24 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Centered & Clean */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A selection of my best work delivering value to clients.
          </p>
        </div>

        {/* Projects List - Stacked "Testimonial" Style Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid gap-8 lg:grid-cols-2 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "" 
              }`}
            >
              
              {/* Visual Side - Floating Glass Card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1729] shadow-2xl">
                  <div className="aspect-video w-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient for Text Readability if needed, or just aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1729]/80 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Floating Category Badge inside Image Area */}
                  <div className="absolute top-4 left-4">
                    <span className="backdrop-blur-md rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side - Testimonial/Case Study Style */}
              <div className="flex flex-col justify-center h-full">
                <div className="mb-4 flex items-center gap-2 text-[#4f7cff]">
                   {/* Decorative Quote Icon or Star Rating equivalent */}
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                   <span className="text-xs font-bold uppercase tracking-wider">Case Study</span>
                </div>

                <h3 className="text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-400 border-l-2 border-white/10 pl-4">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#162849] px-2.5 py-1 text-xs font-medium text-[#9cb8ff] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                        AC
                     </div>
                     <div className="text-xs">
                        <p className="text-white font-medium">Ajaybala C.</p>
                        <p className="text-slate-500">Full Stack Developer</p>
                     </div>
                  </div>

                  {project.viewproject ? (
                    <Link
                      href={project.viewproject}
                      target="_blank"
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#4f7cff] border border-white/10"
                    >
                      View Live Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-slate-500 italic">
                      Private Client Project
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#a8bdff] transition hover:text-white group"
          >
            View Full Portfolio
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}