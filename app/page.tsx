import Image from "next/image";

import { Counter } from "@/components/motion/Counter";
import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Marquee } from "@/components/motion/Marquee";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { CTASection } from "@/components/sections/CTASection";
import { AudienceSection, DemandSection, ValuesSection } from "@/components/sections/ContentSections";
import { HomeHero } from "@/components/sections/HomeHero";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ButtonLink } from "@/components/ui/Button";
import { ProgramCard, RegionRow, ServiceCard, Stars } from "@/components/ui/Cards";
import { Icon } from "@/components/ui/Icon";
import { Accent, SectionHeading, SectionTag } from "@/components/ui/SectionHeading";
import { about, home } from "@/content/home";
import { images } from "@/content/images";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";

export const metadata = {
  alternates: { canonical: "/" },
};

const regionImages = [images.australiaStudents, images.culinaryStudents, images.slideGlobe];
const programImages = [images.chefTrainees, images.culinaryStudents, images.studying];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Our Services — Porbe "services-v1" */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="services-heading">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading
            tag={home.services.tag}
            title={
              <span id="services-heading">
                Global Skill and International <Accent>Pathway</Accent>
              </span>
            }
            description={home.services.text}
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.slug} data-reveal="flip" className="h-full">
                <ServiceCard service={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={services.map((s) => s.title).concat(["Global Education & Workforce Mobility"])} />

      {/* Education Benefits — Porbe blue "About" band with stat circles */}
      <section className="relative isolate overflow-hidden py-28 text-center text-white md:py-36" aria-labelledby="benefits-heading">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image data-parallax src={images.australiaStudents.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/95 via-brand-500/90 to-brand/95" />
        <Rings tone="light" className="w-[52rem] opacity-70" />
        <FloatingShapes tone="light" />
        <div className="container-site relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7">
            <SectionTag tone="inverse">{home.benefits.tag}</SectionTag>
            <h2 id="benefits-heading" className="h-section text-white" data-reveal>
              {home.benefits.title}
            </h2>
            <div data-reveal>
              <ButtonLink href="/contact-us">{home.benefits.cta}</ButtonLink>
            </div>
          </div>
          <div data-reveal="zoom" className="relative mx-auto mt-12 grid size-40 place-items-center rounded-full border-4 border-white/20 bg-ink text-center lg:absolute lg:left-4 lg:top-0 lg:mt-0 lg:size-48">
            <Ripples tone="light" />
            <span className="absolute -inset-4 animate-spin-slow rounded-full border-2 border-dashed border-accent/60" aria-hidden="true" />
            <span>
              <span className="block text-5xl font-semibold leading-none">
                <Counter to={15} suffix="+" />
              </span>
              <span className="mt-1 block px-5 text-xs leading-snug text-white/80">Years in Australia’s VET sector</span>
            </span>
          </div>
          <div data-reveal="zoom" className="absolute -bottom-6 right-4 hidden size-48 place-items-center rounded-full border-4 border-white/20 bg-accent text-center text-ink lg:grid">
            <span className="absolute -inset-4 animate-spin-rev rounded-full border-2 border-dashed border-white/50" aria-hidden="true" />
            <span>
              <span className="block text-3xl font-semibold leading-tight">One Stop</span>
              <span className="block px-6 text-xs leading-snug">Shop for Students and RTO</span>
            </span>
          </div>
        </div>
      </section>

      {/* Who We Are — original hpsec3 */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="who-heading">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-[32rem]" data-reveal="left">
            <Rings className="w-[118%]" />
            <span className="absolute inset-[6%] animate-blob bg-gradient-to-br from-brand-500 to-accent opacity-90" aria-hidden="true" />
            <TiltCard className="absolute inset-[11%]" max={12}>
              <div className="relative size-full overflow-hidden rounded-[2.5rem] border-8 border-white shadow-lift">
                <Image src={images.adviser.src} alt={images.adviser.alt} fill sizes="(min-width: 1024px) 420px, 80vw" className="object-cover" placeholder="blur" />
              </div>
            </TiltCard>
            <Globe3D className="absolute -right-2 -top-2 size-24" />
            <div className="absolute -bottom-2 right-0 flex animate-float items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lift">
              <span className="grid size-11 place-items-center rounded-full bg-brand-500 text-white">
                <Icon name="graduation-cap" className="size-5" />
              </span>
              <span className="text-sm font-semibold leading-tight text-ink">
                One Stop Shop
                <span className="block text-xs font-normal text-muted">for Students and RTO</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left" data-reveal="right">
            <h2 id="who-heading" className="h-section">
              {home.whoWeAre.title}
            </h2>
            <p className="text-[1.0625rem] leading-8">{home.whoWeAre.text}</p>
            <ul className="grid w-full gap-3 text-left sm:grid-cols-2">
              {["Skill Assessments", "Pathway Programs", "Vocational Training", "Workforce Mobility"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-4 py-3 font-medium text-ink">
                  <span className="grid size-7 place-items-center rounded-full bg-accent text-ink">
                    <Icon name="badge-check" className="size-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/about-us" variant="dark">
              {home.whoWeAre.cta}
              <span className="sr-only"> about Merit Education &amp; Training Academy</span>
            </ButtonLink>
          </div>
        </div>
      </section>

      <AudienceSection tone="tint" />

      {/* How it works — Porbe steps with connector */}
      <section className="relative overflow-hidden bg-white/60 py-20 md:py-28" aria-labelledby="process-heading">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading tag={home.process.tag} title={<span id="process-heading">{home.process.title}</span>} description={home.process.text} />
          <div className="relative mt-16">
            <svg aria-hidden="true" className="absolute left-[12%] right-[12%] top-10 hidden h-12 w-[76%] lg:block" viewBox="0 0 760 48" fill="none" preserveAspectRatio="none">
              <path d="M0 24 C 95 -8, 190 56, 253 24 S 412 -8, 506 24 S 665 56, 760 24" stroke="rgb(49 87 209 / 0.35)" strokeWidth="2" strokeDasharray="6 8" className="motion-safe:animate-[dash_3s_linear_infinite]" />
            </svg>
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {home.process.steps.map((step, i) => (
                <li key={step.title} data-reveal="zoom" className="group flex flex-col items-center text-center">
                  <div className="relative mb-6 size-20">
                    <span className="absolute -inset-2 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/35" aria-hidden="true" />
                    <span className={`relative grid size-20 place-items-center rounded-full shadow-card transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12 ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                      <Icon name={step.icon} className="size-8" />
                    </span>
                    <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-ink text-xs font-semibold text-white">{i + 1}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="max-w-60 text-[0.9375rem]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 text-center" data-reveal>
            <ButtonLink href="/services/skill-assessments" variant="outline">
              Skill Assessments
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Where we work — Porbe numbered destination rows */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="regions-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 size-[36rem] animate-spin-slower rounded-full border border-dashed border-brand-500/15" />
        <div className="container-site relative">
          <SectionHeading tag={home.regions.tag} title={<span id="regions-heading">{home.regions.title}</span>} />
          <div className="mt-14 flex flex-col gap-5">
            {home.regions.items.map((r, i) => (
              <RegionRow key={r.name} number={`00${i + 1}`} name={r.name} label={r.label} text={r.text} href={r.href} image={regionImages[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission — Porbe full-bleed image with quote */}
      <section className="relative isolate overflow-hidden py-32 md:py-44" aria-labelledby="mission-heading">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image data-parallax src={images.libraryHall.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/60 via-brand/80 to-brand-500/95" />
        <Rings tone="light" className="w-[44rem] opacity-70" />
        <div className="container-site relative">
          <figure className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center" data-reveal="zoom">
            <span className="relative grid size-16 place-items-center rounded-full bg-accent text-ink">
              <Ripples tone="light" />
              <Icon name="award" className="relative size-7" />
            </span>
            <h2 id="mission-heading" className="sr-only">
              Our Mission
            </h2>
            <blockquote className="text-2xl font-medium leading-snug text-white md:text-4xl md:leading-tight">“{about.mission}”</blockquote>
            <figcaption className="text-lg font-semibold text-accent">Our Mission</figcaption>
          </figure>
        </div>
      </section>

      {/* Programs & partnerships — Porbe event cards */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="programs-heading">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading tag={home.programs.tag} title={<span id="programs-heading">{home.programs.title}</span>} />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {home.programs.items.map((p, i) => (
              <div key={p.title} data-reveal={i === 0 ? "left" : i === 2 ? "right" : "up"} className="h-full">
                <ProgramCard {...p} image={programImages[i]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemandSection />

      {/* Why META? — Porbe "Why Choose Us" pill cards */}
      <section className="relative overflow-hidden bg-white/60 py-20 md:py-28" aria-labelledby="why-heading">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading tag={home.whyMeta.tag} title={<span id="why-heading">{home.whyMeta.title}</span>} description={home.whyMeta.text} />
          <ul className="mt-14 grid gap-7 md:grid-cols-3 lg:mt-16">
            {home.whyMeta.items.map((item, i) => (
              <li key={item.title} data-reveal="zoom" className="h-full">
                <TiltCard className="h-full" max={10}>
                  <div className="group relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-[6rem] bg-white px-8 py-14 text-center shadow-card transition-shadow duration-500 hover:shadow-lift">
                    <span aria-hidden="true" className="absolute -bottom-24 left-1/2 size-56 -translate-x-1/2 rounded-full bg-gradient-to-t from-brand-500/10 to-transparent transition-transform duration-700 group-hover:scale-150" />
                    <div className="relative size-24">
                      <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/40" aria-hidden="true" />
                      <span className="absolute inset-2 animate-spin-rev rounded-full border border-dotted border-accent" aria-hidden="true" />
                      <span className={`absolute inset-4 grid place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                        <Icon name={item.icon} className="size-7" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="max-w-xs text-[0.9375rem]">{item.text}</p>
                  </div>
                </TiltCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ValuesSection />

      {/* Success Stories — original hpsec5 (testi-bg.jpg) */}
      <section className="relative isolate overflow-hidden py-24 md:py-32" aria-labelledby="stories-heading">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image data-parallax src={images.graduationBg.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/90 via-brand/85 to-ink/90" />
        <Rings tone="light" className="w-[60rem] opacity-50" />
        <div className="container-site relative">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <Stars rating={5} />
            <h2 id="stories-heading" className="h-section text-white" data-reveal>
              {home.stories.title}
            </h2>
          </div>
          <TestimonialCarousel items={testimonials} />
          <div className="mt-10 text-center">
            <ButtonLink href="/reviews" variant="light">
              Read All Reviews
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CTASection />
      </div>
    </>
  );
}
