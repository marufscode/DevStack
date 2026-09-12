import { useState } from "react";
import { ArrowRight } from "lucide-react";
import HeroLeftBanner from "../assets/banner-stack.png"

interface FloatingIconData {
  name: string;
  icon: string;
  top: string;
  left: string;
}

const FLOATING_ICONS: FloatingIconData[] = [
  { name: "React", icon: "https://icon.icepanel.io/Technology/svg/React.svg", top: "2%", left: "0%" },
  { name: "Node.js", icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg", top: "68%", left: "-4%" },
  { name: "Tailwind CSS", icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg", top: "-2%", left: "66%" },
  { name: "Docker", icon: "https://icon.icepanel.io/Technology/svg/Docker.svg", top: "72%", left: "82%" },
];

interface LayerData {
  z: number;
  size: number;
  className: string;
}

const LAYERS: LayerData[] = [
  { z: 0, size: 240, className: "bg-slate-900/90 border-slate-800" },
  { z: 26, size: 210, className: "bg-gradient-to-br from-violet-600 to-violet-500 border-violet-400/60" },
  { z: 52, size: 180, className: "bg-gradient-to-br from-pink-600 to-pink-500 border-pink-400/60" },
  { z: 78, size: 150, className: "bg-gradient-to-br from-orange-500 to-amber-400 border-orange-300/60" },
];

function FloatingIcon({ item }: { item: FloatingIconData }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{ top: item.top, left: item.left }}
      className="absolute hidden h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 shadow-card sm:flex"
    >
      {failed ? (
        <span className="text-xs font-bold text-slate-300">{item.name.charAt(0)}</span>
      ) : (
        <img
          src={item.icon}
          alt={item.name}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function StackIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-sm py-8">
      <img src={HeroLeftBanner} alt="" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-[32rem] bg-brand-gradient-soft blur-2xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-slate-500 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
            >
              Explore Technologies
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <StackIllustration />
      </div>
    </section>
  );
}
