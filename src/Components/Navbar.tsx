import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-text.png";


const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#contact" },
];

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <img src={Logo} alt="" />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-ml-2 grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop: brand on the left / Mobile: brand centered */}
        <div className="flex flex-1 justify-center md:flex-none md:justify-start">
          <BrandMark />
        </div>

        {/* Desktop center links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ink ${
                  i === 0 ? "text-pink-600 hover:text-pink-600" : "text-slate-500"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth actions (visible on mobile and desktop) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="text-xs font-semibold text-slate-600 hover:text-ink sm:text-sm"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn-gradient rounded-full px-3 py-2 text-xs font-semibold sm:px-5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-slate-50 ${
                    i === 0 ? "text-pink-600" : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
