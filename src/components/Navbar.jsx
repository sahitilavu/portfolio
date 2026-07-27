import { useState } from "react";

const links = [
  { href: "#top", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="navbar-brand">
          Sahiti Lavu
        </a>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="navbar-cta" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
