import { useState } from "react";
import { Check, Star } from "lucide-react";
import { useStack } from "../context/StackContext";
import { badgeStyle, categoryStyle } from "../utils/techMeta";
import type { Technology } from "../types";

function TechIcon({ tech }: { tech: Technology }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
        {tech.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={tech.icon}
      alt={tech.name}
      className="h-10 w-10 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function TechCard({ tech }: { tech: Technology }) {
  const { isInStack, addToStack } = useStack();
  const added = isInStack(tech.id);

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover">
      <div className="flex items-start justify-between">
        <TechIcon tech={tech} />
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyle(tech.badge)}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">{tech.name}</h3>
      <p className="mt-1.5 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryStyle(tech.category)}`}>
          {tech.category}
        </span>
        <span className="text-xs font-medium text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => addToStack(tech)}
        disabled={added}
        className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
          added
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-ink text-white hover:bg-ink/90"
        }`}
      >
        {added ? (
          <>
            <Check size={16} /> Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
}
