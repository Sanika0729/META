import Image from "next/image";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { CTASection } from "@/components/sections/CTASection";
import { AudienceSection } from "@/components/sections/ContentSections";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RegionRow, ServiceCard } from "@/components/ui/Cards";
import { ButtonLink } from "@/components/ui/Button";
import { about, home } from "@/content/home";
import { images } from "@/content/images";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

// Title and description from the original About Us page (Yoast SEO).
export const metadata = pageMetadata({
  title: "About META | 15+ Years in Australia's VET Sector",
  description:
    "Learn about Merit Education & Training Academy — an Australian education and workforce mobility partner serving students and institutions globally.",
  path: "/about-us",
  absoluteTitle: true,
});

export default function AboutPage() {
  const [p1, p2, p3, p4] = about.intro;
  return (
    <>
      <PageHero image="about" title="About Us" crumbs={[{ label: "About Us" }]} />

      {/* Introduction + abtimg1.jpg */}
      <section className="section-pad relative overflow-clip">
        <FloatingShapes />
        <div data-stagger className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-stagger className="flex flex-col gap-5 text-[1.0625rem] leading-8">
            <p className="text-lg font-medium text-ink md:text-xl md:leading-9">{p1}</p>
            <p>{p2}</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[32rem]" data-reveal="right">
            <Rings className="w-[120%]" />
            <span className="absolute inset-[4%] animate-blob bg-gradient-to-br from-accent to-brand-500 opacity-90" aria-hidden="true" />
            <TiltCard className="absolute inset-[10%]" max={12}>
              <div className="relative size-full overflow-clip rounded-full border-8 border-white shadow-lift">
                <Image src={images.studying.src} alt={images.studying.alt} fill sizes="(min-width: 1024px) 420px, 80vw" className="animate-ken-burns object-cover" placeholder="blur" />
              </div>
            </TiltCard>
            <Globe3D className="absolute -left-4 bottom-0 size-28" />
          </div>
        </div>
        <div data-stagger className="container-site relative mt-14 grid gap-6 md:grid-cols-2">
          {[p3, p4].map((p) => (
            <p key={p.slice(0, 20)} data-reveal="flip" className="rounded-[var(--radius-card)] border border-line bg-white/80 p-7 text-[1.0625rem] leading-8 shadow-card backdrop-blur md:p-9">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Our Mission / Our Vision + abtimg2.jpg */}
      <section className="relative isolate overflow-clip py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-20 overflow-clip">
          <Image data-parallax quality={90} src={images.lectureTheatre.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/92 via-brand/88 to-brand-500/80" />
        <Rings tone="light" className="left-[85%] w-[44rem] opacity-60" />
        <FloatingShapes tone="light" />
        <div data-stagger className="container-site relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div data-stagger className="flex flex-col gap-6">
            {[
              { title: "Our Mission", text: about.mission, icon: "award" as const },
              { title: "Our Vision", text: about.vision, icon: "globe" as const },
            ].map((b, i) => (
              <TiltCard key={b.title} max={8}>
                <article data-reveal={i ? "right" : "left"} className="relative overflow-clip rounded-[var(--radius-card)] border border-white/15 bg-white/10 p-8 backdrop-blur-md md:p-10">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="relative grid size-14 place-items-center rounded-full bg-accent text-ink">
                      <Ripples tone="light" />
                      <Icon name={b.icon} className="relative size-6" />
                    </span>
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">{b.title}</h2>
                  </div>
                  <p className="text-white/85 md:text-lg md:leading-8">{b.text}</p>
                </article>
              </TiltCard>
            ))}
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md" data-reveal="zoom">
            <span className="absolute -inset-6 animate-spin-slow rounded-[3rem] border-2 border-dashed border-white/30" aria-hidden="true" />
            <div className="relative size-full overflow-clip rounded-[2.5rem] border-8 border-white/90 shadow-lift">
              <Image src={images.lectureHall.src} alt={images.lectureHall.alt} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" placeholder="blur" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="section-pad relative overflow-clip">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading title="Our Core Values" />
          <ul data-stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {about.values.map((v, i) => (
              <li key={v.title} data-reveal="flip" className="h-full">
                <TiltCard className="h-full" max={12}>
                  <div data-stagger className="group flex h-full flex-col items-center gap-4 rounded-[2rem] border border-line bg-white p-7 text-center shadow-card transition-shadow duration-500 hover:shadow-lift">
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
          <p className="mx-auto mt-14 max-w-4xl text-center text-[1.0625rem] leading-8" data-reveal>
            {about.closing}
          </p>
        </div>
      </section>

      {/* What we do — the three services */}
      <section className="section-pad relative overflow-clip bg-white/60" aria-labelledby="what-we-do">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading tag="One Stop Shop" title={<span id="what-we-do">Skill Assessments, Pathway Programs &amp; Vocational Training</span>} />
          <div data-stagger className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.slug} data-reveal="flip" className="h-full">
                <ServiceCard service={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AudienceSection tone="tint" />

      {/* Where we work */}
      <section className="section-pad relative overflow-clip" aria-labelledby="where-we-work">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 size-[36rem] animate-spin-slower rounded-full border border-dashed border-brand-500/15" />
        <div className="container-site relative">
          <SectionHeading tag={home.regions.tag} title={<span id="where-we-work">{home.regions.title}</span>} />
          <div data-stagger className="mt-14 flex flex-col gap-5">
            {home.regions.items.map((r, i) => (
              <RegionRow key={r.name} number={`00${i + 1}`} name={r.name} label={r.label} text={r.text} href={r.href} image={[images.australiaStudents, images.culinaryStudents, images.slideGlobe][i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Our journey — from META's launch announcement */}
      <section className="relative isolate overflow-clip py-24 md:py-32" aria-labelledby="journey">
        <div className="absolute inset-0 -z-20 overflow-clip">
          <Image data-parallax quality={90} src={images.graduatesCaps.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-brand/90 to-brand-500/80" />
        <Rings tone="light" className="left-[15%] w-[40rem] opacity-60" />
        <div data-stagger className="container-site relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-stagger className="flex flex-col items-start gap-6 text-white">
            <span className="relative grid size-20 place-items-center rounded-full bg-accent text-ink">
              <Ripples tone="light" />
              <Icon name="sparkles" className="relative size-8" />
            </span>
            <h2 id="journey" className="h-section text-white">
              More than 15 years — and a new chapter
            </h2>
            <ButtonLink href="/contact-us">Get in Touch</ButtonLink>
          </div>
          <ol data-stagger className="relative flex flex-col gap-6 border-l-2 border-dashed border-white/30 pl-8">
            {about.journey.map((p, i) => (
              <li key={p.slice(0, 20)} data-reveal="right" className="relative rounded-[var(--radius-card)] border border-white/15 bg-white/10 p-6 text-white/90 backdrop-blur-md md:p-7">
                <span className="absolute -left-[2.85rem] top-6 grid size-9 place-items-center rounded-full bg-accent text-sm font-semibold text-ink ring-4 ring-brand/60">{i + 1}</span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
