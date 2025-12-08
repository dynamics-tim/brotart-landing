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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  
  const activeCategory = visibleCategories.find((cat) => cat.id === activeCategoryId) ?? visibleCategories[0];

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategoryId) return;
    setIsTransitioning(true);
    setCollapsedSections(new Set()); // Reset collapsed sections when changing category
    setTimeout(() => {
      setActiveCategoryId(categoryId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const toggleSection = (sectionName: string) => {
    setCollapsedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionName)) {
        newSet.delete(sectionName);
      } else {
        newSet.add(sectionName);
      }
      return newSet;
    });
  };

  const toggleAllSections = () => {
    const allSections = Object.keys(groupedItems);
    if (collapsedSections.size === allSections.length) {
      // All collapsed, expand all
      setCollapsedSections(new Set());
    } else {
      // Some or none collapsed, collapse all
      setCollapsedSections(new Set(allSections));
    }
  };

  // Group items by section
  const groupedItems = activeCategory.items.reduce((acc, item) => {
    const section = item.section || "Weitere";
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {} as Record<string, typeof activeCategory.items>);

  if (!activeCategory) return null;

  return (
    <section id="speisekarte" className="section-anchor mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Speisekarte</p>
          <h2 className={`text-3xl font-semibold text-stone-900 transition-opacity duration-200 sm:text-4xl ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {activeCategory.header}
          </h2>
          <p className={`mx-auto max-w-3xl text-lg text-stone-600 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {activeCategory.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:border-brotart-200 hover:bg-brotart-50/50 hover:scale-105 ${
                category.id === activeCategory.id
                  ? "border-brotart-300 bg-brotart-50 text-brotart-700 shadow-md shadow-brotart-100"
                  : "border-stone-200 bg-white text-stone-600"
              }`}
              aria-pressed={category.id === activeCategory.id}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className={`grid gap-4 rounded-3xl border border-stone-100 bg-white/90 p-6 shadow-lg shadow-brotart-50 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          <button
            type="button"
            onClick={toggleAllSections}
            className="flex flex-col gap-2 border-b border-stone-100 pb-3 text-left transition-opacity hover:opacity-70 sm:flex-row sm:items-center sm:justify-between"
            title={collapsedSections.size === Object.keys(groupedItems).length ? "Alle aufklappen" : "Alle zuklappen"}
          >
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brotart-500">{activeCategory.title}</p>
              <div className="flex items-center gap-1.5 rounded-full border border-brotart-200 bg-brotart-50 px-3 py-1.5 text-xs font-semibold text-brotart-600 shadow-sm transition-all hover:border-brotart-300 hover:bg-brotart-100 hover:shadow-md">
                <div className={`flex flex-col gap-0 transition-transform duration-300 ${collapsedSections.size === Object.keys(groupedItems).length ? "" : "rotate-180"}`}>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5 -mb-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </div>
                <span className="hidden sm:inline">{collapsedSections.size === Object.keys(groupedItems).length ? "Alle aufklappen" : "Alle zuklappen"}</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-brotart-600">Alle Gerichte auch zum Mitnehmen!</p>
          </button>

          <div className="space-y-8">
            {Object.entries(groupedItems).map(([sectionName, items], index) => {
              const isCollapsed = collapsedSections.has(sectionName);
              return (
                <div key={sectionName} className="space-y-4">
                  <button
                    type="button"
                    onClick={() => toggleSection(sectionName)}
                    className="flex w-full items-center gap-4 text-left transition-opacity hover:opacity-70"
                    aria-expanded={!isCollapsed}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brotart-400 to-brotart-500 text-sm font-bold text-white shadow-md shadow-brotart-200 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold tracking-wide text-stone-800">{sectionName}</h3>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-brotart-200 to-transparent"></div>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 flex-shrink-0 text-brotart-500 transition-transform duration-300 ${isCollapsed ? "" : "rotate-180"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    className={`grid gap-4 overflow-hidden transition-all duration-500 ease-in-out md:grid-cols-2 ${
                      isCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
                    }`}
                  >
                    <div className="min-h-0 space-y-4 md:col-span-2">
                      <div className="grid gap-4 md:grid-cols-2">
                        {items.map((item) => (
                          <article
                            key={item.name}
                            className="flex flex-col gap-1 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm shadow-brotart-100"
                          >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-semibold text-stone-900">{item.name}</h4>
                        <p className="text-sm text-stone-600">{item.description}</p>
                        {item.note && <p className="text-xs text-stone-500">{item.note}</p>}
                      </div>
                      <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-brotart-50 px-3 py-1 text-sm font-semibold text-brotart-700">
                        {item.price}
                      </span>
                    </div>
                    {activeCategory.allergensVisible && item.allergens && item.allergens.length > 0 && (
                      <p className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                        Zusätze: {item.allergens.join(", ")}
                      </p>
                    )}
                  </article>
                ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {activeCategory.allergensVisible && (
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
            </div>
          )}
          
          <p className="text-center text-xs text-stone-400">
            Alle Preise verstehen sich in Euro inkl. MwSt. Preise und Verfügbarkeit können sich ändern. Stand: Dezember 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
