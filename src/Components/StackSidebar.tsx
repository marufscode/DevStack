import { useState } from "react";
import { Trash2, X } from "lucide-react";
import { useStack } from "../context/StackContext";
import type { Technology } from "../types";

function StackItemIcon({ item }: { item: Technology }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
        {item.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={item.icon}
      alt={item.name}
      className="h-9 w-9 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function StackSidebar() {
  const { stack, removeFromStack, removeAll } = useStack();
  const count = stack.length;

  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h3 className="text-base font-bold text-ink">Your Stack</h3>
        <p className="mt-1 text-sm text-slate-500">
          {count} Technology Selected
        </p>

        {count === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 px-4 py-10 text-center">
            <p className="text-sm font-semibold text-slate-600">
              No technologies added yet
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Start adding technologies to build your stack
            </p>
          </div>
        ) : (
          <ul className="stack-scroll mt-4 flex max-h-80 flex-col gap-2 overflow-y-auto pr-1">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5"
              >
                <StackItemIcon item={item} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                  <p className="truncate text-xs text-slate-400">{item.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromStack(item.id, item.name)}
                  aria-label={`Remove ${item.name} from stack`}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-rose-50 hover:text-rose-500"
                >
                  <X size={15} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={removeAll}
          disabled={count === 0}
          className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
            count === 0
              ? "cursor-not-allowed border-slate-200 text-slate-300"
              : "border-rose-200 text-rose-600 hover:bg-rose-50"
          }`}
        >
          <Trash2 size={15} />
          Remove All
        </button>
      </div>
    </aside>
  );
}
