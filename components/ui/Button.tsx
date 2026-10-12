import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

type Variant = "primary" | "dark" | "outline" | "light";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-semibold leading-none transition-all duration-300 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Porbe's yellow pill with a dark circular arrow
  primary: "shine bg-accent text-ink py-2.5 pl-6 pr-2.5 hover:-translate-y-0.5 hover:bg-[#ffd83d] hover:shadow-lift",
  // Porbe's dark pill with a yellow circular arrow
  dark: "shine bg-ink text-white py-2.5 pl-6 pr-2.5 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lift",
  outline: "border border-ink/15 bg-white text-ink py-3.5 px-6 hover:border-brand hover:text-brand",
  light: "shine bg-white text-ink py-2.5 pl-6 pr-2.5 hover:-translate-y-0.5 hover:bg-accent",
};

const circle: Record<Variant, string> = {
  primary: "bg-ink text-white",
  dark: "bg-accent text-ink",
  outline: "",
  light: "bg-brand text-white",
};

function Inner({ children, variant }: { children: React.ReactNode; variant: Variant }) {
  if (variant === "outline") {
    return (
      <>
        <span>{children}</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </>
    );
  }
  return (
    <>
      <span className="relative z-[2] py-1">{children}</span>
      <span
        className={`relative z-[2] grid size-8 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${circle[variant]}`}
        aria-hidden="true"
      >
        <ChevronRight className="size-4" strokeWidth={2.5} />
      </span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  const external = /^(mailto:|tel:|https?:)/.test(href);
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        <Inner variant={variant}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: { variant?: Variant } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}

/** Porbe's text link: "Read More →" */
export function ArrowLink({
  href,
  children,
  className = "",
  tone = "brand",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "accent";
}) {
  return (
    <Link
      href={href}
      className={`group/link inline-flex items-center gap-2 font-semibold ${
        tone === "accent" ? "text-accent" : "text-brand-600"
      } ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
