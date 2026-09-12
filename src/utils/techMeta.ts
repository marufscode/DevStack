import type { Category } from "../types";

// Pill colors for the category chip shown on each card / stack item.
export const CATEGORY_STYLES: Record<Category, string> = {
  Frontend: "bg-violet-50 text-violet-700",
  Backend: "bg-blue-50 text-blue-700",
  Database: "bg-emerald-50 text-emerald-700",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-pink-50 text-pink-700",
  DevOps: "bg-sky-50 text-sky-700",
  Tools: "bg-slate-100 text-slate-600",
};

export function categoryStyle(category: Category): string {
  return CATEGORY_STYLES[category] ?? "bg-slate-100 text-slate-600";
}

// Pill colors for the small colored badge in the top-right of each card
// (Popular, Fast, Essential, Containers, etc). Keyed by the badge label
// itself so every distinct badge gets its own accent color.
export const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Flexible: "bg-emerald-50 text-emerald-600",
  "Widely Used": "bg-amber-50 text-amber-600",
  Essential: "bg-indigo-50 text-indigo-600",
  Robust: "bg-rose-50 text-rose-600",
  Modern: "bg-violet-50 text-violet-600",
  Containers: "bg-sky-50 text-sky-600",
};

export function badgeStyle(badge: string): string {
  return BADGE_STYLES[badge] ?? "bg-pink-50 text-pink-600";
}
