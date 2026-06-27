const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajaybala-c/" },
  { label: "GitHub", href: "https://github.com/AjaybalaC" },
  { label: "WhatsApp", href: "https://wa.me/916383366259" }, 
  { label: "Email", href: "mailto:ajaybala495@gmail.com" },
  // { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#081225] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-400 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-[#eef3ff]">Ajaybala C.</p>
          <p className="mt-3">© {new Date().getFullYear()} Ajaybala C. Built with precision.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Privacy Policy" ? "_self" : "_blank"}
              rel={link.label === "Privacy Policy" ? undefined : "noopener noreferrer"}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}