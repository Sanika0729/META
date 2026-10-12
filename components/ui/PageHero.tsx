import Image from "next/image";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Rings } from "@/components/motion/Rings";
import { images } from "@/content/images";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/**
 * Inner-page banner. The original site used `inner-bg.jpg` behind the page title;
 * here it gets a slow Ken Burns zoom, a brand overlay, rotating rings and floating shapes.
 */
export function PageHero({ title, crumbs, children }: { title: string; crumbs: Crumb[]; children?: React.ReactNode }) {
  const words = title.split(" ");
  return (
    <section className="px-3 pt-4 md:px-5">
      <div className="relative isolate mx-auto max-w-[90rem] overflow-hidden rounded-[var(--radius-panel)] px-4 py-20 text-center md:py-28">
        <Image src={images.booksGlobe.src} alt="" fill loading="eager" sizes="100vw" className="-z-20 animate-ken-burns object-cover" placeholder="blur" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/85 via-brand/80 to-brand-500/70" />
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
