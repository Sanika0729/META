/** Decorative floating shapes (rings, dots, plus marks, blobs) scattered behind a section. */
export function FloatingShapes({ tone = "brand", className = "" }: { tone?: "brand" | "light"; className?: string }) {
  const stroke = tone === "light" ? "border-white/35" : "border-brand-500/30";
  const fill = tone === "light" ? "bg-white/25" : "bg-brand-500/20";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-clip ${className}`}>
      <span className={`absolute left-[6%] top-[14%] size-16 animate-float rounded-full border-4 ${stroke}`} />
      <span className={`absolute right-[8%] top-[22%] size-5 animate-float rounded-full ${fill}`} style={{ animationDelay: "1.2s" }} />
      <span className="absolute bottom-[16%] left-[12%] size-4 animate-float rounded-full bg-accent/70" style={{ animationDelay: "2s" }} />
      <span className={`absolute bottom-[10%] right-[16%] size-24 animate-spin-slow rounded-full border-2 border-dashed ${stroke}`} />
      <span className={`absolute left-[48%] top-[6%] text-3xl font-light leading-none animate-float ${tone === "light" ? "text-white/40" : "text-brand-500/35"}`} style={{ animationDelay: "0.6s" }}>
        +
      </span>
      <span className={`absolute right-[30%] bottom-[30%] text-2xl font-light leading-none animate-float ${tone === "light" ? "text-accent/70" : "text-accent"}`} style={{ animationDelay: "1.8s" }}>
        +
      </span>
      <span className={`absolute -right-24 -top-24 size-72 animate-blob ${tone === "light" ? "bg-white/5" : "bg-brand-500/[0.06]"}`} />
      <span className={`absolute -bottom-28 -left-20 size-80 animate-blob ${tone === "light" ? "bg-accent/10" : "bg-accent/10"}`} style={{ animationDelay: "-6s" }} />
    </div>
  );
}
