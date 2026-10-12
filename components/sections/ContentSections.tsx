import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqGroups } from "@/content/faqs";
import { about, home } from "@/content/home";
import { images } from "@/content/images";
import { services } from "@/content/services";
import type { IconName } from "@/content/types";

/** Who We Support — four audience cards with orbiting icon rings. */
export function AudienceSection({ tone = "light" }: { tone?: "light" | "tint" }) {
  const a = home.audiences;
  return (
    <section className={`section-pad relative overflow-hidden ${tone === "tint" ? "bg-white/60" : ""}`} aria-labelledby="audiences-heading">
      <FloatingShapes />
      <div className="container-site relative">
        <SectionHeading tag={a.tag} title={<span id="audiences-heading">{a.title}</span>} description={a.text} />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.items.map((item, i) => (
            <li key={item.title} data-reveal="flip" className="h-full">
              <TiltCard className="h-full" max={12}>
                <div className="group relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-[2rem] border border-line bg-white p-7 text-center shadow-card transition-shadow duration-500 hover:shadow-lift">
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent transition-transform duration-700 group-hover:scale-x-100" />
                  <div className="relative size-24">
                    <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/35" aria-hidden="true" />
                    <span className="absolute inset-0 animate-spin-rev" aria-hidden="true">
                      <span className="absolute -top-1 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-accent" />
                    </span>
                    <span className={`absolute inset-3 grid place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                      <Icon name={item.icon} className="size-7" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-[0.9375rem]">{item.text}</p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Global demand for trained chefs — from META's vocational training article. */
export function DemandSection() {
  const d = home.demand;
  return (
    <section className="relative isolate overflow-hidden py-24 text-white md:py-32" aria-labelledby="demand-heading">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image data-parallax src={images.chefTrainees.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-brand/90 to-brand-500/75" />
      <Rings tone="light" className="left-[80%] w-[46rem] opacity-60" />
      <FloatingShapes tone="light" />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6" data-reveal="left">
          <SectionHeading align="left" tone="inverse" tag={d.tag} title={<span id="demand-heading">{d.title}</span>} description={d.text} />
          <div className="flex flex-wrap gap-3">
            {d.venues.map((v, i) => (
              <span key={v} className="word-in rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur" style={{ animationDelay: `${i * 120}ms` }}>
                {v}
              </span>
            ))}
          </div>
          <div>
            <ButtonLink href="/services/vocational-training">Specialised Vocational Training</ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md [container-type:inline-size]" data-reveal="zoom">
          <div className="absolute inset-[18%] grid place-items-center rounded-full bg-white/10 backdrop-blur-md">
            <Globe3D tone="light" className="size-[70%]" />
          </div>
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-white/30">
            {d.regions.map((r, i) => {
              const angle = (360 / d.regions.length) * i;
              return (
                <span key={r} className="absolute left-1/2 top-1/2 size-0" style={{ transform: `rotate(${angle}deg) translateY(-50cqw) rotate(${-angle}deg)` }}>
                  <span className="absolute -translate-x-1/2 -translate-y-1/2">
                    <span className="orbit-upright-slow block whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-lift">{r}</span>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mission and Vision side by side. */
export function MissionVision() {
  const items: { title: string; text: string; icon: IconName }[] = [
    { title: "Our Mission", text: about.mission, icon: "award" },
    { title: "Our Vision", text: about.vision, icon: "globe" },
  ];
  return (
    <section className="section-pad relative overflow-hidden" aria-label="Mission and vision">
      <FloatingShapes />
      <div className="container-site relative grid gap-7 md:grid-cols-2">
        {items.map((b, i) => (
          <TiltCard key={b.title} max={8}>
            <article data-reveal={i ? "right" : "left"} className="group relative h-full overflow-hidden rounded-[var(--radius-panel)] bg-gradient-to-br from-brand to-brand-500 p-8 text-white shadow-lift md:p-12">
              <Rings tone="light" className="left-[90%] top-[10%] w-[24rem] opacity-50" />
              <span className="relative mb-6 grid size-16 place-items-center rounded-full bg-accent text-ink">
                <Ripples tone="light" />
                <Icon name={b.icon} className="relative size-7" />
              </span>
              <h2 className="relative mb-4 text-2xl font-semibold text-white md:text-3xl">{b.title}</h2>
              <p className="relative text-white/85 md:text-lg md:leading-8">{b.text}</p>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

/** Core values as a row of flip-in cards. */
export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white/60 py-20 md:py-28" aria-labelledby="values-heading">
      <FloatingShapes />
      <div className="container-site relative">
        <SectionHeading tag="Our Core Values" title={<span id="values-heading">What Guides META</span>} />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.values.map((v, i) => (
            <li key={v.title} data-reveal="flip" className="h-full">
              <TiltCard className="h-full" max={12}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-[2rem] border border-line bg-white p-7 text-center shadow-card transition-shadow duration-500 hover:shadow-lift">
                  <div className="relative size-20">
                    <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/35" aria-hidden="true" />
                    <span className={`absolute inset-3 grid place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                      <Icon name={v.icon} className="size-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm">{v.text}</p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** A compact list of FAQs from one group, linking to the FAQ page (not used on the home page). */
export function RelatedFaqs({ group }: { group: string }) {
  const g = faqGroups.find((x) => x.title === group);
  if (!g) return null;
  return (
    <section className="section-pad relative overflow-hidden pt-0 lg:pt-0" aria-labelledby="related-faqs">
      <div className="container-site relative max-w-4xl">
        <SectionHeading tag="FAQ" title={<span id="related-faqs">Questions About {group}</span>} />
        <ul className="mt-12 flex flex-col gap-4">
          {g.faqs.map((f) => (
            <li key={f.question} data-reveal>
              <details className="group rounded-[1.5rem] border border-line bg-white shadow-sm transition-shadow open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 transition-colors group-open:bg-accent group-open:text-ink">
                    <MessageCircleQuestion className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1">{f.question}</span>
                  <span className="text-xl leading-none text-brand-500 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 pl-[4.25rem] text-[0.9375rem] leading-7">{f.answer}</p>
              </details>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <ButtonLink href="/faq" variant="outline">
            All FAQs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Quick links to the three service pages. */
export function ServiceLinks({ exclude }: { exclude?: string }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {services
        .filter((s) => s.slug !== exclude)
        .map((s, i) => (
          <li key={s.slug} data-reveal="zoom">
            <Link
              href={`/services/${s.slug}`}
              className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className={`grid size-12 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                <Icon name={s.icon} className="size-5" />
              </span>
              <span className="flex-1 font-semibold text-ink">{s.title}</span>
              <ArrowRight className="size-4 text-brand-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
    </ul>
  );
}
