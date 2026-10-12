import { GraduationCap } from "lucide-react";

/** Continuously scrolling ribbon of phrases taken from the site's own copy. */
export function Marquee({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "brand" }) {
  const row = [...items, ...items];
  return (
    <div
      className={`marquee-mask overflow-hidden py-5 ${tone === "dark" ? "bg-ink text-white" : "bg-brand-500 text-white"}`}
      aria-label={items.join(", ")}
      role="marquee"
    >
      <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]" aria-hidden="true">
        {row.map((text, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold tracking-wide md:text-2xl">
            <span>{text}</span>
            <GraduationCap className="size-6 text-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}
