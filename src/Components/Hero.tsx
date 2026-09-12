import { ArrowRight } from "lucide-react";
import HeroLeftBanner from "../assets/banner-stack.png";

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