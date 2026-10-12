import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

/** The original META logo file, rendered at its native aspect ratio (305 × 100). */
export function Logo({ className = "h-11 md:h-12", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center rounded-md" aria-label={`${site.shortName} — ${site.name}, home`}>
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        loading={eager ? "eager" : undefined}
        unoptimized
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
