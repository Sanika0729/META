import Image from "next/image";
import Link from "next/link";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { TiltCard } from "@/components/motion/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accent, SectionTag } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { services } from "@/content/services";
import type { IconName } from "@/content/types";
import { ServiceFinder } from "./ServiceFinder";

/** Cards floating on Porbe's arc — META's regions and services. */
const chips: { label: string; href: string; icon: IconName; pos: string; delay: string }[] = [
  { label: "Skill Assessments", href: "/services/skill-assessments", icon: "badge-check", pos: "left-[13%] top-[3%]", delay: "0s" },
  { label: "Pathway Programs", href: "/services/pathway-programs", icon: "route", pos: "right-[13%] top-[3%]", delay: "-1.5s" },
  { label: "Australia", href: "/services/skill-assessments", icon: "map-pin", pos: "left-[3%] top-[28%]", delay: "-3s" },
  { label: "India", href: "/services/vocational-training", icon: "map-pin", pos: "right-[3%] top-[28%]", delay: "-4.5s" },
  { label: "Vocational Training", href: "/services/vocational-training", icon: "chef-hat", pos: "left-0 top-[56%]", delay: "-2s" },
  { label: "UAE", href: "/about-us", icon: "globe", pos: "right-0 top-[56%]", delay: "-5s" },
];

/**
 * Porbe Home V1 hero: a large arc carrying floating cards, a fanned stack of
 * photos, and a centred headline — with META's original headline and CTA.
 */
export function HomeHero() {
  const [l1, l2, l3] = home.hero.title;
  return (
    <section className="relative overflow-clip pt-8 md:pt-12">
      <FloatingShapes />
      <div className="container-site relative">
        {/* Arc + rotating rings */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 aspect-square w-[min(110%,68rem)] -translate-x-1/2">
          <div className="absolute inset-0 animate-spin-slower rounded-full border border-brand-500/20">
            <span className="absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_8px_rgb(254_205_8/0.2)]" />
            <span className="absolute bottom-[14%] left-[7%] size-2.5 rounded-full bg-brand-500" />
          </div>
          <div className="absolute inset-[7%] animate-spin-rev rounded-full border-2 border-dashed border-brand-500/15">
            <span className="absolute right-[6%] top-[22%] size-3 rounded-full bg-brand-500/60" />
          </div>
          <div className="absolute inset-[16%] animate-spin-slow rounded-full border border-dotted border-brand-500/25" />
          <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle,rgb(49_87_209/0.10),transparent_65%)]" />
        </div>

        {/* Floating cards on the arc (desktop) */}
        <ul className="pointer-events-none absolute inset-x-6 top-6 hidden h-[40rem] xl:block">
          {chips.map((c, i) => (
            <li key={c.label} className={`pointer-events-auto absolute ${c.pos} word-in`} style={{ animationDelay: `${300 + i * 90}ms` }}>
              <Link
                href={c.href}
                className="group flex w-40 animate-float flex-col items-center gap-2 rounded-2xl border border-white bg-white/90 px-4 py-4 text-center text-[0.8125rem] font-medium text-ink shadow-card backdrop-blur transition-shadow duration-300 hover:shadow-lift"
                style={{ animationDelay: c.delay }}
              >
                <span className="relative grid size-10 place-items-center rounded-full bg-brand-50 text-brand-500 transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={c.icon} className="size-5" />
                </span>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Fanned photo stack */}
        <div className="relative mx-auto flex h-64 max-w-2xl items-end justify-center sm:h-80 md:h-96">
          <Globe3D className="absolute -top-2 left-1/2 hidden size-20 -translate-x-[220%] md:block" />
          <div className="word-in absolute bottom-3 left-[1%] w-[33%] sm:left-[6%]" style={{ animationDelay: "150ms" }}>
            <TiltCard max={14}>
              <div className="relative aspect-[3/4] -rotate-[9deg] overflow-clip rounded-2xl border-[6px] border-white shadow-lift">
                <Image src={images.studying.src} alt={images.studying.alt} fill loading="eager" sizes="(min-width: 768px) 240px, 33vw" className="object-cover" placeholder="blur" />
              </div>
            </TiltCard>
          </div>
          <div className="word-in absolute bottom-3 right-[1%] w-[33%] sm:right-[6%]" style={{ animationDelay: "250ms" }}>
            <TiltCard max={14}>
              <div className="relative aspect-[3/4] rotate-[9deg] overflow-clip rounded-2xl border-[6px] border-white shadow-lift">
                <Image src={images.culinaryStudents.src} alt={images.culinaryStudents.alt} fill loading="eager" sizes="(min-width: 768px) 240px, 33vw" className="object-cover" placeholder="blur" />
              </div>
            </TiltCard>
          </div>
          <div className="word-in relative z-10 w-[38%]" style={{ animationDelay: "50ms" }}>
            <TiltCard max={14}>
              <div className="relative aspect-[3/4] overflow-clip rounded-2xl border-[6px] border-white shadow-lift">
                <Image src={images.academicsGraduates.src} alt={images.academicsGraduates.alt} fill loading="eager" fetchPriority="high" sizes="(min-width: 768px) 280px, 38vw" className="animate-ken-burns object-cover" placeholder="blur" />
              </div>
            </TiltCard>
            <span className="absolute -right-6 -top-6 z-20 grid size-20 animate-float place-items-center rounded-full bg-ink text-center text-white shadow-lift md:size-24" style={{ animationDelay: "-2s" }}>
              <span className="absolute -inset-2 animate-spin-slow rounded-full border-2 border-dashed border-accent/80" aria-hidden="true" />
              <span>
                <span className="block text-xl font-semibold leading-none md:text-2xl">15+</span>
                <span className="block text-[0.625rem] leading-tight text-white/80">Years</span>
              </span>
            </span>
          </div>
        </div>

        {/* Centred headline */}
        <div className="relative mx-auto mt-10 flex max-w-4xl flex-col items-center gap-6 text-center md:mt-12">
          <div className="word-in delay-1">
            <SectionTag>Merit Education &amp; Training Academy</SectionTag>
          </div>
          <h1 className="h-display [perspective:700px]">
            <span className="word-in delay-2 inline-block">{l1}&nbsp;</span>
            <span className="word-in delay-3 inline-block">{l2}</span>{" "}
            <span className="word-in delay-4 inline-block">
              <Accent>{l3}</Accent>
            </span>
          </h1>
          <p className="word-in delay-5 max-w-2xl text-base md:text-lg">{home.hero.text}</p>
          <div className="word-in delay-5 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact-us">{home.hero.cta}</ButtonLink>
            <ButtonLink href="/services" variant="dark">
              Our Services
            </ButtonLink>
          </div>
        </div>

        {/* Porbe's dark bar */}
        <div className="relative z-10 mx-auto mt-14 max-w-5xl md:mt-16" data-reveal="flip">
          <ServiceFinder options={services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))} />
        </div>
      </div>
    </section>
  );
}
