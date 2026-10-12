import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Mail, MapPin, Phone, Quote } from "lucide-react";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ui/Cards";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import type { HeroKey } from "@/content/images";
import { getService, services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import type { DetailSection } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site";
import { CTASection } from "./CTASection";
import { RelatedFaqs } from "./ContentSections";

export function serviceMetadata(slug: string) {
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ ...s.seo, path: `/services/${slug}`, image: s.image.src, absoluteTitle: true });
}

function Points({ section, index }: { section: DetailSection; index: number }) {
  if (!section.points?.length) return null;
  const titled = section.points.some((p) => p.title);
  if (!titled) {
    return (
      <ul className="mt-6 flex flex-wrap gap-3">
        {section.points.map((p, i) => (
          <li
            key={p.text}
            data-reveal="zoom"
            className="flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 text-[0.9375rem] font-medium text-ink shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <span className={`grid size-6 place-items-center rounded-full ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
              {p.icon ? <Icon name={p.icon} className="size-3.5" /> : <CheckCircle2 className="size-3.5" aria-hidden="true" />}
            </span>
            {p.text}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={`mt-8 grid gap-5 ${section.points.length >= 4 ? "sm:grid-cols-2" : section.points.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
      {section.points.map((p, i) => (
        <li key={p.text} data-reveal="flip" className="h-full">
          <TiltCard className="h-full" max={10}>
            <div className="group relative h-full overflow-clip rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card transition-shadow duration-500 hover:shadow-lift">
              <span aria-hidden="true" className="absolute -right-8 -top-8 size-24 rounded-full bg-brand-500/[0.06] transition-transform duration-700 group-hover:scale-[2.2]" />
              <div className="relative mb-5 flex items-center justify-between">
                <span className={`relative grid size-14 place-items-center rounded-full ${(i + index) % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                  <span className="absolute -inset-2 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/30" aria-hidden="true" />
                  {p.icon ? <Icon name={p.icon} className="size-6" /> : <CheckCircle2 className="size-6" aria-hidden="true" />}
                </span>
                <span data-num={`0${i + 1}`} className="text-4xl font-bold text-brand-500/10 before:content-[attr(data-num)]" aria-hidden="true" />
              </div>
              {p.title && <h3 className="relative mb-2 text-lg font-semibold">{p.title}</h3>}
              <p className="relative text-[0.9375rem]">{p.text}</p>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  );
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();
  const review = testimonials.find((t) => t.name === service.reviewName);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero image={service.slug as HeroKey} title={service.title} crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}>
        <ul className="word-in delay-5 flex flex-wrap justify-center gap-2">
          {service.tags.map((t) => (
            <li key={t} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur">
              {t}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Overview: original Services page copy + images */}
      <section className="section-pad relative overflow-clip">
        <FloatingShapes />
        <div data-stagger className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div data-stagger className="flex flex-col gap-5">
            <span className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.08em] text-brand-600">
              <span className="relative grid size-10 place-items-center rounded-full bg-brand-500 text-white">
                <Ripples />
                <Icon name={service.icon} className="relative size-5" />
              </span>
              Overview
            </span>
            {service.body.map((p, i) => (
              <p key={p.slice(0, 24)} className={i === 0 ? "text-lg font-medium leading-8 text-ink md:text-xl md:leading-9" : "leading-8"}>
                {p}
              </p>
            ))}
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]" data-reveal="right">
            <Rings className="w-[115%]" />
            <span className="absolute -right-4 top-4 size-40 animate-blob bg-accent/80" aria-hidden="true" />
            <TiltCard className="absolute inset-[4%_14%_22%_4%]" max={10}>
              <div className="relative size-full overflow-clip rounded-[2.5rem] border-8 border-white shadow-lift">
                <Image src={service.image.src} alt={service.image.alt} fill loading="eager" sizes="(min-width: 1024px) 460px, 85vw" className="animate-ken-burns object-cover" placeholder="blur" />
              </div>
            </TiltCard>
            <div className="absolute bottom-0 right-0 w-[52%] animate-float-tilt overflow-clip rounded-[2rem] border-8 border-white shadow-lift [--tilt:4deg]">
              <div className="relative aspect-[4/3]">
                <Image src={service.gallery[0].src} alt={service.gallery[0].alt} fill sizes="260px" className="object-cover" placeholder="blur" />
              </div>
            </div>
            <Globe3D className="absolute -left-2 bottom-2 size-24" />
          </div>
        </div>
      </section>

      {/* Deeper content from META's own articles */}
      <div className="relative overflow-clip pb-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-40 size-[40rem] animate-spin-slower rounded-full border border-dashed border-brand-500/15" />
        <div data-stagger className="container-site relative grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div data-stagger className="flex min-w-0 flex-col gap-20">
            {service.details.map((section, i) => (
              <section key={section.heading} aria-labelledby={`${slug}-d${i}`}>
                <div className="mb-5 flex items-center gap-4" data-reveal="left">
                  <span data-num={`0${i + 1}`} className="text-5xl font-bold leading-none text-brand-500/20 before:content-[attr(data-num)]" aria-hidden="true" />
                  <span className="h-px flex-1 origin-left animate-[draw-line_1.4s_ease-out_both] bg-gradient-to-r from-brand-500/40 to-transparent" aria-hidden="true" />
                </div>
                <h2 id={`${slug}-d${i}`} className="h-section mb-5 text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]" data-reveal>
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-[1.0625rem] leading-8" data-reveal>
                    {p}
                  </p>
                ))}
                <Points section={section} index={i} />
              </section>
            ))}

            {service.quote && (
              <figure data-reveal="zoom" className="relative isolate overflow-clip rounded-[var(--radius-panel)] bg-gradient-to-br from-brand to-brand-500 p-10 text-center text-white md:p-14">
                <Rings tone="light" className="w-[40rem] opacity-60" />
                <Quote className="relative mx-auto mb-5 size-12 fill-accent text-accent" aria-hidden="true" />
                <blockquote className="relative text-2xl font-medium leading-snug md:text-3xl">{service.quote}</blockquote>
              </figure>
            )}
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative isolate overflow-clip rounded-[var(--radius-card)] bg-ink p-7 text-white">
              <span className="absolute -right-12 -top-12 size-40 animate-spin-slow rounded-full border-2 border-dashed border-white/15" aria-hidden="true" />
              <h2 className="relative mb-2 text-xl font-semibold text-white">Get in Touch</h2>
              <p className="relative mb-6 text-[0.9375rem] text-white/80">{site.address.display}</p>
              <ButtonLink href="/contact-us" className="relative w-full justify-between">
                Contact Us
              </ButtonLink>
              <ul data-stagger className="relative mt-6 flex flex-col gap-3 border-t border-white/15 pt-6 text-[0.9375rem]">
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 [overflow-wrap:anywhere] hover:text-accent">
                    <Mail className="size-4 shrink-0" aria-hidden="true" /> {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phone.href} className="flex items-center gap-3 hover:text-accent">
                    <Phone className="size-4 shrink-0" aria-hidden="true" /> {site.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" /> {site.address.display}
                </li>
              </ul>
            </div>
            <nav aria-labelledby="other-services" className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card">
              <h2 id="other-services" className="mb-4 text-lg font-semibold">
                Other Services
              </h2>
              <ul data-stagger className="flex flex-col gap-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex items-center gap-3 rounded-xl p-2 font-medium text-ink transition-colors hover:bg-canvas hover:text-brand-600">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 transition-transform duration-500 group-hover:rotate-[360deg]">
                        <Icon name={s.icon} className="size-5" />
                      </span>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="relative aspect-[4/3] overflow-clip rounded-[var(--radius-card)] border-4 border-white shadow-card">
              <Image src={service.gallery[1].src} alt={service.gallery[1].alt} fill sizes="320px" className="object-cover transition-transform duration-[1.5s] hover:scale-110" placeholder="blur" />
            </div>
          </aside>
        </div>
      </div>

      {/* Who it's for */}
      <section className="section-pad relative overflow-clip" aria-labelledby="who-for">
        <FloatingShapes />
        <div className="container-site relative">
          <h2 id="who-for" className="h-section mb-12 text-center" data-reveal>
            Who It’s For
          </h2>
          <ul className={`grid gap-6 sm:grid-cols-2 ${service.audience.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {service.audience.map((a, i) => (
              <li key={a.title} data-reveal="flip" className="h-full">
                <TiltCard className="h-full" max={12}>
                  <div data-stagger className="group relative flex h-full flex-col gap-4 overflow-clip rounded-[2rem] border border-line bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift">
                    <span aria-hidden="true" className="absolute -right-10 -top-10 size-32 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/15" />
                    <span className={`relative grid size-14 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                      <Ripples />
                      <Icon name={a.icon} className="relative size-6" />
                    </span>
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="text-[0.9375rem]">{a.text}</p>
                  </div>
                </TiltCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {review && (
        <section className="section-pad relative overflow-clip" aria-labelledby="service-review">
          <div className="container-site relative max-w-4xl">
            <h2 id="service-review" className="h-section mb-10 text-center" data-reveal>
              Success Story
            </h2>
            <div data-reveal="flip">
              <ReviewCard review={review} />
            </div>
            <div className="mt-8 text-center">
              <ButtonLink href="/reviews" variant="outline">
                Read All Reviews
              </ButtonLink>
            </div>
          </div>
        </section>
      )}

      <RelatedFaqs group={service.faqGroup} />

      <CTASection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.body[0],
          url: absoluteUrl(`/services/${slug}`),
          provider: { "@type": "EducationalOrganization", name: site.name, url: absoluteUrl("/") },
        }}
      />
    </>
  );
}
