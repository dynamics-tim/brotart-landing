"use client";

import { useEffect, useState } from "react";

export type SectionBackgroundConfig = {
  id: string;
  layers: {
    color: string;
    image: string;
  };
  grainOpacity?: number;
};

type ScrollBackgroundProps = {
  sections: ReadonlyArray<SectionBackgroundConfig>;
};

export default function ScrollBackground({ sections }: ScrollBackgroundProps) {
  const [activeSection, setActiveSection] = useState(() => sections[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || !sections.length) return undefined;

    const getSectionElements = () =>
      sections
        .map((section) => document.getElementById(section.id))
        .filter((node): node is HTMLElement => Boolean(node));

    let animationFrame = 0;

    const determineActiveSection = () => {
      const sectionElements = getSectionElements();
      if (!sectionElements.length) {
        return;
      }
      const viewportCenter = window.innerHeight / 2;
      let nextId = sectionElements[0].id;
      let minDistance = Number.POSITIVE_INFINITY;

      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          nextId = element.id;
        }
      });

      setActiveSection((prev) => (prev === nextId ? prev : nextId));
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        determineActiveSection();
      });
    };

    const handleResize = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      determineActiveSection();
    };

    determineActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [sections]);

  if (!sections.length) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#fdf7f0]" />
      {sections.map((section) => (
        <div
          key={section.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            activeSection === section.id ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: section.layers.color,
            backgroundImage: section.layers.image,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              opacity: section.grainOpacity ?? 0.18,
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12) 0%, transparent 55%), linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "140px 140px",
            }}
          />
        </div>
      ))}
    </div>
  );
}
