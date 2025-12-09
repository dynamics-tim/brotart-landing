"use client";

import { useState, useEffect } from "react";
import { MENU_CATEGORIES } from "@/content/site";
import ScrollReveal from "@/components/scroll-reveal";

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
  const [shouldWiggle, setShouldWiggle] = useState(false);
  
  const activeCategory = visibleCategories.find((cat) => cat.id === activeCategoryId) ?? visibleCategories[0];

  // Random wiggle effect for CTA button
  useEffect(() => {
    const scheduleNextWiggle = () => {
      const delay = 4000 + Math.random() * 4000; // 4-8 seconds
      return setTimeout(() => {
        setShouldWiggle(true);
        setTimeout(() => setShouldWiggle(false), 600); // Animation duration
        scheduleNextWiggle();
      }, delay);
    };

    const timeoutId = scheduleNextWiggle();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategoryId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategoryId(categoryId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
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
    <section id="speisekarte" className="section-anchor mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Speisekarte</p>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {activeCategory.header}
          </h2>
          <p className={`mx-auto max-w-2xl text-sm sm:text-base text-stone-600 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {activeCategory.subtitle}
          </p>
        </div>

        {/* Category Tabs - Stacked on Mobile, Inline on Desktop */}
        <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-center">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full sm:w-auto whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                category.id === activeCategory.id
                  ? "bg-brotart-600 text-white shadow-lg shadow-brotart-300/40"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-brotart-300 hover:text-brotart-600 active:scale-95"
              }`}
              aria-pressed={category.id === activeCategory.id}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className={`transition-all duration-300 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}>
          {/* Category Info Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brotart-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Zum Mitnehmen
              </span>
            </div>
            <a
              href="tel:+4973714095580"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold text-brotart-600 hover:text-brotart-700 transition-colors ${
                shouldWiggle ? "animate-wiggle" : ""
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Jetzt bestellen
            </a>
          </div>

          {/* Sections Grid */}
          <div className="space-y-6">
            {Object.entries(groupedItems).map(([sectionName, items]) => (
              <div key={sectionName} className="space-y-3">
                {/* Section Header */}
                <h3 className="text-base sm:text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-brotart-500 to-brotart-400 rounded-full"></span>
                  {sectionName}
                </h3>
                
                {/* Items Grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <article
                      key={item.name}
                      className="group relative rounded-xl border border-stone-200 bg-white p-3 sm:p-4 transition-all hover:border-brotart-300 hover:shadow-md hover:shadow-brotart-100/50"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0 my-auto">
                          <h4 className="text-sm sm:text-base font-semibold text-stone-900 leading-tight">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="mt-0.5 text-xs sm:text-sm text-stone-600 leading-snug">
                              {item.description}
                            </p>
                          )}
                          {item.note && (
                            <p className="mt-1 text-xs text-stone-500 italic">
                              {item.note}
                            </p>
                          )}
                          {activeCategory.allergensVisible && item.allergens && item.allergens.length > 0 && (
                            <p className="mt-1 text-[10px] uppercase tracking-wider text-stone-400">
                              {item.allergens.join(", ")}
                            </p>
                          )}
                        </div>
                        <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-brotart-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-brotart-700 group-hover:bg-brotart-100 transition-colors my-auto">
                          {item.price}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Allergen Legend */}
          {activeCategory.allergensVisible && (
            <div className="mt-6 rounded-xl border border-dashed border-stone-300 bg-stone-50/50 p-3 sm:p-4">
              <p className="text-xs font-semibold text-stone-700 mb-2">Zusatzstoffe</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-600">
                {Object.entries(ALLERGEN_LEGEND).map(([code, label]) => (
                  <span key={code}>
                    <span className="font-bold text-stone-800">{code}</span> {label}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Footer Note */}
          <p className="mt-4 text-center text-xs text-stone-400">
            Alle Preise in Euro inkl. MwSt. · Preise und Verfügbarkeit können sich ändern · Stand: Dezember 2025
          </p>
        </div>
      </div>
    </section>
  );
}
