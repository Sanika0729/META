import Image from "next/image";
import Link from "next/link";
import { MapPin, Quote, Star } from "lucide-react";

import { Ripples } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import type { SiteImage } from "@/content/images";
import type { Service, Testimonial } from "@/content/types";
import { Icon } from "./Icon";

/** Homepage service card: 3D tilt, rotating dashed ring around a pulsing icon. */
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const yellow = index % 2 === 1;
  return (
    <TiltCard className="h-full" max={9}>
      <article className="group relative flex h-full flex-col overflow-clip rounded-[var(--radius-card)] border border-line bg-white p-7 text-left shadow-card transition-shadow duration-500 hover:shadow-lift md:p-8">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent transition-transform duration-700 group-hover:scale-x-100" />
        <div aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/[0.06] transition-transform duration-700 group-hover:scale-150" />
        <div className="relative mb-8 size-20">
          <span className="absolute -inset-3 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/30" aria-hidden="true" />
          <span className={`relative grid size-20 place-items-center rounded-full ${yellow ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
            <Ripples />
            <Icon name={service.icon} className="relative size-8 transition-transform duration-700 group-hover:rotate-[360deg]" />
          </span>
        </div>
        <span
          data-num={`0${index + 1}`}
          className="absolute right-7 top-7 text-5xl font-bold text-brand-500/10 transition-colors duration-500 before:content-[attr(data-num)] group-hover:text-brand-500/25"
          aria-hidden="true"
        />
        <h3 className="h-card mb-3">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:z-10 after:rounded-[inherit]">
            {service.cardTitle}
          </Link>
        </h3>
        <p className="relative mb-6 flex-1 text-[0.9375rem]">{service.cardText}</p>
        <span className="relative inline-flex items-center gap-2 font-semibold text-brand-600" aria-hidden="true">
          Read More <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
        </span>
      </article>
    </TiltCard>
  );
}

/** Porbe "Discover Your Ideal Study Destination" row: number pill, title, tilted image, copy, link. */
export function RegionRow({
  number,
  name,
  label,
  text,
  href,
  image,
}: {
  number: string;
  name: string;
  label: string;
  text: string;
  href: string;
  image: SiteImage;
}) {
  return (
    <article
      data-reveal="flip"
      className="group relative grid items-center gap-6 overflow-clip rounded-[1.75rem] border border-line bg-white/60 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-lift md:grid-cols-[1fr_auto_1fr] md:gap-10 md:p-8 lg:p-10"
    >
      <span aria-hidden="true" className="absolute -left-10 -top-10 size-40 rounded-full border-2 border-dashed border-brand-500/15 transition-transform duration-[2s] group-hover:rotate-180" />
      <div className="relative flex h-full flex-col justify-between gap-6 md:min-h-44">
        <span className="w-fit rounded-full border border-ink/20 px-3 py-0.5 text-xs font-medium text-ink/70 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
          {number}
        </span>
        <div>
          <p className="mb-1 text-sm font-medium text-brand-600">{label}</p>
          <h3 className="text-3xl font-semibold md:text-4xl">{name}</h3>
        </div>
      </div>
      <div className="relative mx-auto aspect-[4/3] w-full max-w-72 -rotate-3 overflow-clip rounded-2xl border-4 border-white shadow-lift transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105 md:w-72">
        <Image src={image.src} alt={image.alt} fill sizes="300px" className="object-cover" placeholder="blur" />
      </div>
      <div className="relative flex flex-col gap-4 md:max-w-sm md:justify-self-end">
        <p className="text-[0.9375rem]">{text}</p>
        <Link href={href} className="group/link inline-flex items-center gap-2 font-semibold text-brand-600 after:absolute after:inset-0 after:z-10">
          Read More <span className="transition-transform group-hover/link:translate-x-1">→</span>
          <span className="sr-only">: {name}</span>
        </Link>
      </div>
    </article>
  );
}

/** Porbe event-style card for a program or partnership. */
export function ProgramCard({
  title,
  partner,
  place,
  text,
  href,
  image,
}: {
  title: string;
  partner: string;
  place: string;
  text: string;
  href: string;
  image: SiteImage;
}) {
  return (
    <TiltCard className="h-full" max={8}>
      <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-3 shadow-card transition-shadow duration-500 hover:shadow-lift">
        <div className="relative aspect-[16/11] overflow-clip rounded-2xl">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" placeholder="blur" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-sm">
            <MapPin className="size-3.5 text-brand-500" aria-hidden="true" /> {place}
          </span>
        </div>
        <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
          <span className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">With {partner}</span>
          <h3 className="h-card mb-2">
            <Link href={href} className="after:absolute after:inset-0 after:z-10 after:rounded-[inherit]">
              {title}
            </Link>
          </h3>
          <p className="mb-5 flex-1 text-[0.9375rem]">{text}</p>
          <span className="inline-flex items-center gap-2 font-semibold text-brand-600" aria-hidden="true">
            View Details <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </span>
        </div>
      </article>
    </TiltCard>
  );
}

export function Stars({ rating, className = "size-5" }: { rating: number; className?: string }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: rating }, (_, s) => (
        <Star key={s} className={`${className} fill-[#ffb900] text-[#ffb900]`} aria-hidden="true" />
      ))}
    </span>
  );
}

/** Full review card used on the Reviews page. */
export function ReviewCard({ review }: { review: Testimonial }) {
  const initials = review.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .replace(/[^A-Z]/gi, "")
    .slice(0, 2);
  return (
    <TiltCard className="h-full" max={6}>
      <figure className="group relative flex h-full flex-col overflow-clip rounded-[var(--radius-panel)] border border-line bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift md:p-8 xl:p-9">
        <span aria-hidden="true" className="absolute -right-12 -top-12 size-40 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/15" />
        <div className="mb-6 flex items-center justify-between gap-4">
          <Stars rating={review.rating} />
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">{review.topic}</span>
        </div>
        <Quote className="mb-4 size-10 fill-accent text-accent transition-transform duration-500 group-hover:-rotate-12" aria-hidden="true" />
        <blockquote className="flex-1 text-base leading-7 text-ink/85 xl:text-[1.0625rem] xl:leading-8">
          <p>{review.quote}</p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
          <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand text-lg font-semibold text-white" aria-hidden="true">
            <Ripples />
            {initials}
          </span>
          <span>
            <span className="block text-lg font-semibold text-ink">{review.name}</span>
            {review.role && <span className="block text-sm text-muted">{review.role}</span>}
          </span>
        </figcaption>
      </figure>
    </TiltCard>
  );
}
