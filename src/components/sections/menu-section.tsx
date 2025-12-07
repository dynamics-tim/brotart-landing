"use client";

import { useState } from "react";
import { MENU_CATEGORIES } from "@/content/site";

type MenuSectionProps = {
  categories: typeof MENU_CATEGORIES;
};

const ALLERGEN_LEGEND: Record<string, string> = {
  A: "Gluten",
  B: "Glutamat",
  C: "Pfeffer",
  D: "Salz",
  E: "Milch & Laktose",
  F: "Soja, Kartoffelstärke",
  H: "Knoblauch",
};

export default function MenuSection({ categories }: MenuSectionProps) {
  const visibleCategories = categories.filter((category) => category.visible !== false);
  const [activeCategoryId, setActiveCategoryId] = useState(visibleCategories[0]?.id ?? "");
  
  const activeCategory = visibleCategories.find((cat) => cat.id === activeCategoryId) ?? visibleCategories[0];

  if (!activeCategory) return null;

  return (
    <section id="speisekarte" className="section-anchor mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Speisekarte</p>
          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            {activeCategory.header}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-stone-600">
            {activeCategory.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-brotart-200 hover:bg-brotart-50/50 ${
                category.id === activeCategory.id
                  ? "border-brotart-300 bg-brotart-50 text-brotart-700"
                  : "border-stone-200 bg-white text-stone-600"
              }`}
              aria-pressed={category.id === activeCategory.id}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid gap-4 rounded-3xl border border-stone-100 bg-white/90 p-6 shadow-lg shadow-brotart-50">
          <div className="flex flex-col gap-2 border-b border-stone-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brotart-500">{activeCategory.title}</p>
            </div>
            <p className="text-sm font-semibold text-brotart-600">Alle Gerichte auch zum Mitnehmen!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {activeCategory.items.map((item) => (
              <article
                key={item.name}
                className="flex flex-col gap-1 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm shadow-brotart-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                    <p className="text-sm text-stone-600">{item.description}</p>
                    {item.note && <p className="text-xs text-stone-500">{item.note}</p>}
                  </div>
                  <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-brotart-50 px-3 py-1 text-sm font-semibold text-brotart-700">
                    {item.price}
                  </span>
                </div>
                {item.allergens && item.allergens.length > 0 && (
                  <p className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                    Zusätze: {item.allergens.join(", ")}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50/70 p-4 text-xs text-stone-500">
            <p className="font-semibold text-stone-700">Zusatzstoffe (Legende)</p>
            <p className="mt-1 flex flex-wrap gap-3">
              {Object.entries(ALLERGEN_LEGEND).map(([code, label]) => (
                <span key={code} className="inline-flex items-center gap-1">
                  <span className="font-semibold text-stone-700">{code}</span>
                  <span>{label}</span>
                </span>
              ))}
            </p>
            <p className="mt-2 text-stone-600">Hinweis: Alle Gerichte auch zum Mitnehmen! &quot;BrotART&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
