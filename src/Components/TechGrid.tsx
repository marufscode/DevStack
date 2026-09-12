import { Loader2 } from "lucide-react";
import { useTechnologies } from "../hooks/useTechnologies";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

export default function TechGrid() {
  const { technologies, loading, error } = useTechnologies();

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          {loading && (
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 py-24 text-slate-500">
              <Loader2 className="animate-spin text-slate-400" size={28} />
              <p className="text-sm font-medium">Loading technologies…</p>
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center text-sm font-medium text-rose-600">
              Couldn't load technologies: {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </div>
          )}
        </div>

        <StackSidebar />
      </div>
    </section>
  );
}
