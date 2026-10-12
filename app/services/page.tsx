import Image from "next/image";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { CTASection } from "@/components/sections/CTASection";
import { AudienceSection, DemandSection } from "@/components/sections/ContentSections";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { servicesIntro } from "@/content/home";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

// Title and description from the original Services page (Yoast SEO).
export const metadata = pageMetadata({
  title: "Skill Assessments, Pathways & Vocational Training | META",
  description:
    "META offers skill assessments for workforce mobility, international pathway programs and specialised vocational training in commercial cookery and patisserie.",
  path: "/services",
  absoluteTitle: true,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" crumbs={[{ label: "Services" }]}>
        <p className="word-in delay-4 max-w-3xl text-base text-white/85 md:text-lg">{servicesIntro}</p>
      </PageHero>

      <div className="relative flex flex-col gap-24 overflow-hidden py-20 md:gap-32 md:py-28">
        <FloatingShapes />
        {services.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={service.slug} id={service.slug} className="relative scroll-mt-28" aria-labelledby={`${service.slug}-title`}>
              <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div className={`relative mx-auto aspect-[5/4] w-full max-w-xl ${flip ? "lg:order-2" : ""}`} data-reveal={flip ? "right" : "left"}>
                  <Rings className={`w-[115%] ${flip ? "left-[60%]" : "left-[40%]"}`} />
                  <span className={`absolute ${flip ? "-left-6" : "-right-6"} -top-6 size-40 animate-blob bg-accent/80`} aria-hidden="true" />
                  <TiltCard className="absolute inset-0" max={10}>
                    <div className="relative size-full overflow-hidden rounded-[2.5rem] border-8 border-white shadow-lift">
                      <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1024px) 580px, 100vw" className="animate-ken-burns object-cover" placeholder="blur" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand/35 to-transparent" />
                    </div>
                  </TiltCard>
                  <span className={`absolute -bottom-8 ${flip ? "-left-4 md:-left-8" : "-right-4 md:-right-8"} grid size-24 animate-float place-items-center rounded-full border-4 border-canvas ${flip ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                    <Ripples />
                    <span className="absolute -inset-3 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/40" aria-hidden="true" />
                    <Icon name={service.icon} className="relative size-9" />
                  </span>
                </div>

                <div className="flex flex-col gap-5" data-reveal={flip ? "left" : "right"}>
                  <span data-num={`0${i + 1}`} className="text-6xl font-bold leading-none text-brand-500/15 before:content-[attr(data-num)]" aria-hidden="true" />
                  <h2 id={`${service.slug}-title`} className="h-section -mt-6">
                    {service.title}
                  </h2>
                  <span className="h-1 w-24 origin-left animate-[draw-line_1.2s_ease-out_both] rounded-full bg-gradient-to-r from-brand-500 to-accent" aria-hidden="true" />
                  {service.body.map((p) => (
                    <p key={p.slice(0, 24)} className="leading-8">
                      {p}
                    </p>
                  ))}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <ButtonLink href={`/services/${service.slug}`}>
                      Learn More<span className="sr-only"> about {service.title}</span>
                    </ButtonLink>
                    <ButtonLink href="/contact-us" variant="dark">
                      Get in Touch
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <AudienceSection tone="tint" />

      <DemandSection />

      <div className="pt-20 md:pt-28" />
      <CTASection />
    </>
  );
}
