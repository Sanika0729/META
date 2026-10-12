"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Phone } from "lucide-react";

import { site } from "@/lib/site";

/** Porbe's dark search bar, adapted to jump straight to one of META's three services. */
export function ServiceFinder({ options }: { options: { href: string; label: string }[] }) {
  const router = useRouter();
  const id = useId();
  const [value, setValue] = useState(options[0].href);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-5 text-white shadow-lift md:p-7 lg:p-8">
      <span aria-hidden="true" className="absolute -right-20 -top-20 size-56 animate-spin-slow rounded-full border-2 border-dashed border-white/10" />
      <span aria-hidden="true" className="absolute -bottom-24 left-1/3 size-48 animate-blob bg-brand-500/25" />
      <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:gap-8">
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(value);
          }}
        >
          <label htmlFor={id} className="text-lg font-semibold">
            Explore our services
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <select
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-12 w-full appearance-none rounded-full border border-white/15 bg-white/10 pl-5 pr-11 text-[0.9375rem] text-white outline-none transition-colors focus:border-accent [&>option]:text-ink"
              >
                {options.map((o) => (
                  <option key={o.href} value={o.href}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white/70" aria-hidden="true" />
            </div>
            <button
              type="submit"
              className="shine inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold transition-colors hover:bg-accent hover:text-ink"
            >
              <span className="relative z-[2]">Explore</span>
              <ArrowRight className="relative z-[2] size-4" aria-hidden="true" />
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <p className="text-lg font-semibold">Get in Touch</p>
          <div className="flex flex-wrap gap-3">
            <a href={site.phone.href} className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/15 px-5 text-[0.9375rem] transition-colors hover:border-accent hover:text-accent">
              <Phone className="size-4" aria-hidden="true" /> {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/15 px-5 text-[0.9375rem] transition-colors hover:border-accent hover:text-accent">
              <Mail className="size-4" aria-hidden="true" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
