import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/content/types";

type Tone = "brand" | "light";

/**
 * Concentric rotating rings (dashed, dotted and solid) with small orbiting dots.
 * Purely decorative; sized by the parent (absolute, centred).
 */
export function Rings({ tone = "brand", className = "" }: { tone?: Tone; className?: string }) {
  const c = tone === "light" ? "border-white/30" : "border-brand-500/25";
  const c2 = tone === "light" ? "border-white/15" : "border-brand-500/15";
  const dot = tone === "light" ? "bg-accent" : "bg-brand-500";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <div className={`absolute inset-0 animate-spin-slower rounded-full border ${c2}`}>
        <span className={`absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full ${dot} shadow-[0_0_0_6px_rgb(49_87_209/0.12)]`} />
      </div>
      <div className={`absolute inset-[9%] animate-spin-rev rounded-full border-2 border-dashed ${c}`}>
        <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-accent" />
      </div>
      <div className={`absolute inset-[19%] animate-spin-slow rounded-full border border-dotted ${c}`}>
        <span className={`absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full ${dot}`} />
      </div>
      <div className={`absolute inset-[29%] rounded-full border ${c2}`} />
    </div>
  );
}

/** Pulsing ripple rings, e.g. behind an icon or a call-to-action. */
export function Ripples({ className = "", tone = "brand" }: { className?: string; tone?: Tone }) {
  const c = tone === "light" ? "border-white/40" : "border-brand-500/40";
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`absolute inset-0 animate-ripple rounded-full border-2 ${c}`} />
      <span className={`absolute inset-0 animate-ripple rounded-full border-2 ${c}`} style={{ animationDelay: "1.1s" }} />
      <span className={`absolute inset-0 animate-ripple rounded-full border-2 ${c}`} style={{ animationDelay: "2.2s" }} />
    </span>
  );
}

/**
 * A rotating orbit carrying icon badges; each badge counter-rotates so it stays upright.
 */
export function Orbit({
  items,
  className = "",
  reverse = false,
}: {
  items: { icon: IconName; label: string }[];
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-500/30 ${
        reverse ? "animate-spin-rev" : "animate-spin-slow"
      } ${className}`}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={item.label}
            className="absolute left-1/2 top-1/2 size-0"
            style={{ transform: `rotate(${angle}deg) translateY(calc(var(--orbit-r) * -1)) rotate(${-angle}deg)` }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2">
              <div className={reverse ? "orbit-upright-rev" : "orbit-upright-slow"}>
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white bg-white/95 py-1.5 pl-1.5 pr-3.5 text-[0.8125rem] font-medium text-ink shadow-card">
                <span className={`grid size-7 place-items-center rounded-full ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                  <Icon name={item.icon} className="size-3.5" />
                </span>
                {item.label}
              </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
