import { Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Logo from "../assets/logo-text.png";


const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com", Icon: FaGithub },
  { label: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
             
              <span className="text-lg font-extrabold text-ink">
                <img src={Logo} alt="" />
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-ink hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-ink">{group.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-500 hover:text-ink">Privacy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
