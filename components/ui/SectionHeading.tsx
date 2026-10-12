type Tone = "default" | "inverse";

/** Porbe's small square-bullet eyebrow label, e.g. "■ OUR SERVICES". */
export function SectionTag({ children, tone = "default" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] ${
        tone === "inverse" ? "text-white" : "text-brand-600"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-2.5 rounded-[2px] ${tone === "inverse" ? "bg-accent" : "bg-brand-500"}`}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  tone = "default",
  as: Heading = "h2",
  className = "",
}: {
  tag?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: Tone;
  as?: "h1" | "h2";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      data-reveal
      className={`flex flex-col gap-4 ${centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl"} ${className}`}
    >
      {tag && <SectionTag tone={tone}>{tag}</SectionTag>}
      <Heading className={`${Heading === "h1" ? "h-display" : "h-section"} ${tone === "inverse" ? "text-white" : ""}`}>
        {title}
      </Heading>
      {description && (
        <p className={`text-base md:text-lg ${tone === "inverse" ? "text-white/80" : "text-body"}`}>{description}</p>
      )}
    </div>
  );
}

/** Highlight part of a heading in brand blue, as Porbe does ("Explore Top Study Abroad <Destinations>"). */
export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-brand-500">{children}</span>;
}
