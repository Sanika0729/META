import Image from "next/image";

import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { ButtonLink } from "@/components/ui/Button";
import { about } from "@/content/home";
import { images, type SiteImage } from "@/content/images";

const bubbles: { img: SiteImage; cls: string; delay: string }[] = [
  { img: images.studentsClassroom, cls: "left-[5%] top-[14%] size-20 md:size-28", delay: "0s" },
  { img: images.academicsGraduates, cls: "left-[20%] top-[4%] size-24 md:size-32 ring-4 ring-accent/80", delay: "-2s" },
  { img: images.lectureStudents, cls: "right-[22%] top-[5%] size-20 md:size-24", delay: "-4s" },
  { img: images.libraryHall, cls: "right-[5%] top-[16%] size-24 md:size-32", delay: "-1s" },
  { img: images.culinaryStudents, cls: "left-[10%] top-[50%] hidden size-24 lg:block", delay: "-3s" },
  { img: images.graduatesCaps, cls: "right-[11%] top-[52%] hidden size-20 lg:block", delay: "-5s" },
];

/** About page call-to-action ("Take the First Step Toward Your Future" · Get in Touch), reused site-wide. */
export function CTASection() {
  return (
    <section className="section-pad pt-0 lg:pt-0" aria-labelledby="cta-heading">
      <div className="container-site">
        <div
          data-reveal="zoom"
          className="relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-gradient-to-b from-[#dbe3ff] via-brand-500 to-brand px-6 pb-16 pt-56 text-center md:px-12 md:pb-20 md:pt-72"
        >
          <Rings tone="light" className="top-[78%] w-[52rem] opacity-80" />
          <Globe3D tone="light" className="absolute left-1/2 top-[10%] size-24 -translate-x-1/2 md:size-32" />
          {bubbles.map(({ img, cls, delay }, i) => (
            <div
              key={i}
              aria-hidden="true"
              className={`absolute animate-float overflow-hidden rounded-full border-4 border-white/70 shadow-lift ${cls}`}
              style={{ animationDelay: delay }}
            >
              <Image src={img.src} alt="" fill sizes="128px" className="object-cover" />
            </div>
          ))}
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
            <h2 id="cta-heading" className="h-section text-white">
              {about.cta.title}
            </h2>
            <span className="relative rounded-full">
              <Ripples tone="light" className="rounded-full" />
              <ButtonLink href="/contact-us" variant="primary" className="relative">
                {about.cta.button}
              </ButtonLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
