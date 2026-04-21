const links = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-end px-8 bg-outer-bg">
      <nav aria-label="Primary navigation" className="flex items-center gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-white/50 hover:text-white/90 transition-colors"
          >
            <span aria-hidden="true">· </span>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
