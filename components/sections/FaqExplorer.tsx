"use client";

import { useId, useMemo, useState } from "react";
import { Plus, Search, X } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import type { FaqGroup } from "@/content/types";

/** Searchable, filterable FAQ accordion with smooth open/close transitions. */
export function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const [group, setGroup] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(groups[0]?.faqs[0]?.question ?? null);
  const searchId = useId();

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .filter((g) => group === "All" || g.title === group)
      .flatMap((g) => g.faqs.map((f) => ({ ...f, group: g.title, icon: g.icon })))
      .filter((f) => !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [groups, group, query]);

  return (
    <div className="grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-14">
      {/* Category rail */}
      <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
        <div className="relative">
          <label htmlFor={searchId} className="sr-only">
            Search questions
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions"
            className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-10 text-[0.9375rem] text-ink outline-none transition-all focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-canvas">
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>
        <div role="tablist" aria-label="Question categories" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
          {[{ title: "All", icon: "sparkles" as const, faqs: groups.flatMap((g) => g.faqs) }, ...groups].map((g) => {
            const active = g.title === group;
            return (
              <button
                key={g.title}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="faq-panel"
                onClick={() => setGroup(g.title)}
                className={`group flex min-h-12 shrink-0 items-center gap-3 rounded-2xl px-4 text-left text-[0.9375rem] font-medium transition-all duration-300 ${
                  active ? "bg-brand-500 text-white shadow-card" : "bg-white/70 text-ink hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
                }`}
              >
                <span className={`grid size-8 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${active ? "bg-white/20" : "bg-brand-50 text-brand-500"}`}>
                  <Icon name={g.icon} className="size-4" />
                </span>
                <span className="flex-1 whitespace-nowrap">{g.title}</span>
                <span className={`rounded-full px-2 text-xs ${active ? "bg-white/20" : "bg-canvas text-muted"}`}>{g.faqs.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions */}
      <div id="faq-panel" role="tabpanel" aria-live="polite">
        <p className="mb-5 text-sm text-muted">
          Showing {items.length} {items.length === 1 ? "question" : "questions"}
          {group !== "All" ? ` in ${group}` : ""}
          {query ? ` matching “${query}”` : ""}
        </p>
        {items.length === 0 ? (
          <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-white/70 p-10 text-center">
            <p className="font-medium text-ink">No questions match your search.</p>
            <p className="mt-1 text-sm">Try another word, or get in touch with our team.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {items.map((f, i) => {
              const isOpen = open === f.question;
              const panelId = `faq-a-${i}-${f.group}`.replace(/\W+/g, "-");
              return (
                <li
                  key={`${group}-${query}-${f.question}`}
                  className={`word-in overflow-hidden rounded-[1.5rem] border bg-white transition-all duration-500 ${isOpen ? "border-brand-500/40 shadow-lift" : "border-line shadow-sm hover:shadow-card"}`}
                  style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                >
                  <h2>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : f.question)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
                    >
                      <span className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-500 ${isOpen ? "bg-accent text-ink" : "bg-brand-50 text-brand-500"}`}>
                        <Icon name={f.icon} className="size-5" />
                      </span>
                      <span className="flex-1 text-base font-semibold text-ink md:text-lg">{f.question}</span>
                      <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-[135deg] border-brand-500 bg-brand-500 text-white" : "border-line text-ink"}`}>
                        <Plus className="size-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <p className="px-5 pb-6 pl-[4.75rem] text-[0.9375rem] leading-7 md:px-7 md:pl-[5.25rem]">{f.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
