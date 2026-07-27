import Link from "next/link";

export type Page = "home" | "research" | "publications" | "systems" | "cv";

const pages: { key: Page; label: string; href: string }[] = [
  { key: "research", label: "Research", href: "/research" },
  { key: "publications", label: "Publications", href: "/publications" },
  { key: "systems", label: "Systems", href: "/systems" },
  { key: "cv", label: "CV", href: "/cv" },
];

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Download() {
  return (
    <svg className="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 3v9m0 0 4-4m-4 4L6 8M4 16h12"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function Header({ active }: { active: Page }) {
  return (
    <header className="header">
      <div className="shell header-in">
        <Link className="brand" href="/">
          <span className="mark">TR</span>
          <span>
            <strong>Tawsif Rahman</strong>
            <small>Academic portfolio</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          {pages.map((page) => (
            <Link
              key={page.key}
              href={page.href}
              className={active === page.key ? "active" : ""}
              aria-current={active === page.key ? "page" : undefined}
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-in">
        <div>
          <strong>Kazi Md. Tawsif Rahman</strong>
          <p>Privacy-preserving machine learning for network security.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/tawsif113" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link href="/research">Research</Link>
          <a
            href="/Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
            download="Kazi_Md_Tawsif_Rahman_Academic_CV.pdf"
          >
            Download CV
          </a>
        </div>
        <p>© 2026 · Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}

export function Intro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
