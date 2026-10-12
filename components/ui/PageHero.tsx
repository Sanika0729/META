import Image from "next/image";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Rings } from "@/components/motion/Rings";
import { heroImages, type HeroKey } from "@/content/images";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/**
 * Inner-page banner with a page-specific HD background, slow Ken Burns zoom,
 * brand overlay, rotating rings and floating shapes.
 */
export function PageHero({
  title,
  crumbs,
  image,
  focus = "center",
  zoom = true,
  children,
}: {
  title: string;
  crumbs: Crumb[];
  /** Which themed background to show — every page has its own. */
  image: HeroKey;
  /** CSS object-position for the background photo. */
  focus?: string;
  /** Slow Ken Burns zoom; turn off when the whole photo must stay in frame. */
  zoom?: boolean;
  children?: React.ReactNode;
}) {
  const words = title.split(" ");
  return (
    <section className="px-3 pt-4 md:px-5">
      <div className="relative isolate mx-auto max-w-[90rem] overflow-clip rounded-[var(--radius-panel)] px-4 py-20 text-center md:py-28">
        <Image src={heroImages[image]} alt="" fill loading="eager" fetchPriority="high" quality={90} sizes="(min-width: 1440px) 1440px, 100vw" className={`-z-20 object-cover ${zoom ? "animate-ken-burns" : ""}`} style={{ objectPosition: focus }} placeholder="blur" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/50 to-brand/30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(18_29_53/0.45),transparent_70%)]" />
        <Rings tone="light" className="w-[42rem] opacity-70" />
        <FloatingShapes tone="light" />
        <div className="relative flex flex-col items-center gap-5">
          <div className="word-in rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm [&_a]:text-white/80 [&_li]:text-white/80 [&_span]:text-white">
            <Breadcrumbs items={crumbs} />
          </div>
          <h1 className="h-display max-w-4xl text-white [perspective:600px]">
            {words.map((w, i) => (
              <span key={i} className="word-in mr-[0.25em] inline-block last:mr-0" style={{ animationDelay: `${120 + i * 90}ms` }}>
                {w}
              </span>
            ))}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
