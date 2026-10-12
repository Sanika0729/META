"use client";

import { useState } from "react";

import { ReviewCard } from "@/components/ui/Cards";
import type { Testimonial } from "@/content/types";

/** Topic filter tabs with an animated grid of review cards. */
export function ReviewsExplorer({ reviews }: { reviews: Testimonial[] }) {
  const topics = ["All", ...Array.from(new Set(reviews.map((r) => r.topic)))];
  const [topic, setTopic] = useState("All");
  const shown = topic === "All" ? reviews : reviews.filter((r) => r.topic === topic);

  return (
    <div>
      <div role="tablist" aria-label="Filter reviews by topic" className="mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-line bg-white/80 p-1.5 shadow-card backdrop-blur">
        {topics.map((t) => {
          const count = t === "All" ? reviews.length : reviews.filter((r) => r.topic === t).length;
          const active = t === topic;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="reviews-panel"
              onClick={() => setTopic(t)}
              className={`relative flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-300 ${
                active ? "bg-brand-500 text-white shadow-card" : "text-ink/75 hover:bg-canvas hover:text-brand-600"
              }`}
            >
              {t}
              <span className={`grid min-w-6 place-items-center rounded-full px-1.5 text-xs ${active ? "bg-white/25" : "bg-canvas"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div id="reviews-panel" role="tabpanel" className="grid gap-7 lg:grid-cols-2">
        {shown.map((r, i) => (
          <div key={`${topic}-${r.name}`} className="word-in h-full" style={{ animationDelay: `${i * 110}ms` }}>
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
