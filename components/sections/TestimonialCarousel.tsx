"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import type { Testimonial } from "@/content/types";

/**
 * 3D cover-flow carousel for the "Success Stories" (the original site used a
 * slider with previous/next arrows). Autoplays, pauses on hover/focus.
 */
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const go = useCallback((d: number) => setActive((a) => (a + d + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Success stories carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative mx-auto h-[33rem] max-w-5xl [perspective:1400px] sm:h-[28rem] md:h-[26rem]">
        {items.map((t, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const isActive = offset === 0;
          return (
            <figure
              key={t.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              aria-hidden={!isActive}
              className={`absolute inset-x-0 top-0 mx-auto flex w-full max-w-2xl flex-col ${isActive ? "" : "max-md:opacity-0!"} rounded-[var(--radius-panel)] border border-white/25 bg-white/12 p-7 text-white shadow-lift backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-10`}
              style={{
                transform: `translateX(${offset * 62}%) translateZ(${isActive ? 0 : -260}px) rotateY(${offset * -32}deg)`,
                opacity: isActive ? 1 : Math.abs(offset) <= 1 ? 0.35 : 0,
                zIndex: isActive ? 2 : 1,
                pointerEvents: isActive ? "auto" : "none",
                visibility: Math.abs(offset) <= 1 ? "visible" : "hidden",
              }}
            >
              <Quote className="mb-5 size-10 fill-accent text-accent" aria-hidden="true" />
              <blockquote className="flex-1 text-[0.9375rem] leading-7 md:text-lg md:leading-8">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">{t.name}</p>
                  {t.role && <p className="text-sm text-white/75">{t.role}</p>}
                </div>
                <p className="flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }, (_, s) => (
                    <Star key={s} className="size-5 fill-[#ffb900] text-[#ffb900]" aria-hidden="true" />
                  ))}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous story"
          className="grid size-12 place-items-center rounded-full border border-white/40 text-white transition-all hover:-translate-x-0.5 hover:bg-white hover:text-brand"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="flex flex-wrap justify-center gap-2 max-w-full px-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show story ${i + 1}`}
              aria-current={i === active}
              className="group grid h-6 min-w-6 place-items-center"
            >
              <span className={`block h-2.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-accent" : "w-2.5 bg-white/50 group-hover:bg-white"}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next story"
          className="grid size-12 place-items-center rounded-full border border-white/40 text-white transition-all hover:translate-x-0.5 hover:bg-white hover:text-brand"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
