const links = ["LinkedIn", "GitHub", "WhatsApp", "Email", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#081225] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-400 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-[#eef3ff]">Ajaybala C.</p>
          <p className="mt-3">© 2024 Ajaybala C. Built with precision.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {links.map((label) => (
            <a key={label} href="#" className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
