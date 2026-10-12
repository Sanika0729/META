import Image from "next/image";
import { Mail, MapPin, MessageCircleQuestion, Phone } from "lucide-react";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { TiltCard } from "@/components/motion/TiltCard";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { AudienceSection, ServiceLinks } from "@/components/sections/ContentSections";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

// Title and description from the original Contact Us page (Yoast SEO).
export const metadata = pageMetadata({
  title: "Contact META | Education & Workforce Mobility Australia",
  description:
    "Get in touch with Merit Education & Training Academy in Richmond, VIC. Contact us for skill assessments, pathways and vocational training enquiries.",
  path: "/contact-us",
  absoluteTitle: true,
});

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, action: "Send an email" },
  { icon: Phone, label: "Phone", value: site.phone.display, href: site.phone.href, action: "Call us" },
  { icon: MapPin, label: "Address", value: site.address.display, action: "Richmond, Victoria" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero image="contact" title="Contact Us" crumbs={[{ label: "Contact Us" }]}>
        <p className="word-in delay-5 max-w-2xl text-white/85">
          Contact us for skill assessments, pathways and vocational training enquiries.
        </p>
      </PageHero>

      {/* Contact channels */}
      <section className="relative -mt-2 overflow-clip pt-14 md:pt-20">
        <div data-stagger className="container-site relative grid gap-6 md:grid-cols-3">
          {channels.map(({ icon: ChannelIcon, label, value, href, action }, i) => {
            const inner = (
              <div data-stagger className="group relative flex h-full flex-col items-center gap-4 overflow-clip rounded-[2rem] border border-line bg-white p-8 text-center shadow-card transition-shadow duration-500 hover:shadow-lift">
                <span aria-hidden="true" className="absolute -right-10 -top-10 size-32 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/15" />
                <span className={`relative grid size-16 place-items-center rounded-full ${i === 1 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                  <Ripples />
                  <ChannelIcon className="relative size-7 transition-transform duration-500 group-hover:rotate-12" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.08em] text-brand-600">{label}</span>
                <span className="text-lg font-semibold text-ink [overflow-wrap:anywhere]">{value}</span>
                <span className="text-sm text-muted">{action}</span>
              </div>
            );
            return (
              <div key={label} data-reveal="flip" className="h-full">
                <TiltCard className="h-full" max={10}>
                  {href ? (
                    <a href={href} className="block h-full rounded-[2rem]">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </TiltCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* Topic tiles + form */}
      <section className="relative overflow-clip py-20 md:py-28">
        <FloatingShapes />
        <div className="container-site relative">
          <ContactPanel />
        </div>
      </section>

      {/* Office */}
      <section className="relative isolate overflow-clip py-24 text-white md:py-32" aria-labelledby="office-heading">
        <div className="absolute inset-0 -z-20 overflow-clip">
          <Image data-parallax quality={90} src={images.australiaStudents.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-brand/90 to-brand-500/80" />
        <FloatingShapes tone="light" />
        <div data-stagger className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div data-stagger className="flex flex-col gap-6">
            <SectionHeading align="left" tone="inverse" tag="Our Office" title={<span id="office-heading">Australian-Registered, Working Across Borders</span>} />
            <p className="text-white/85 md:text-lg">
              Expanding from Australia into India and the UAE, META supports both domestic and international clients.
            </p>
            <address className="flex flex-col gap-3 not-italic">
              <span className="flex items-center gap-3">
                <MapPin className="size-5 text-accent" aria-hidden="true" /> {site.address.display}
              </span>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent">
                <Mail className="size-5 text-accent" aria-hidden="true" /> {site.email}
              </a>
              <a href={site.phone.href} className="flex items-center gap-3 hover:text-accent">
                <Phone className="size-5 text-accent" aria-hidden="true" /> {site.phone.display}
              </a>
            </address>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md" data-reveal="zoom">
            <Rings tone="light" className="w-full" />
            <div className="absolute inset-[16%] grid place-items-center rounded-full bg-white/10 backdrop-blur-md">
              <Globe3D tone="light" className="size-[72%]" />
            </div>
            {[
              { name: "Australia", cls: "left-0 top-[18%]" },
              { name: "India", cls: "right-0 top-[40%]" },
              { name: "UAE", cls: "bottom-[8%] left-[22%]" },
            ].map((r, i) => (
              <span key={r.name} className={`absolute flex animate-float items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lift ${r.cls}`} style={{ animationDelay: `${-i * 1.6}s` }}>
                <MapPin className="size-4 text-brand-500" aria-hidden="true" /> {r.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Before you get in touch */}
      <section className="section-pad relative overflow-clip" aria-labelledby="before-heading">
        <div className="container-site relative">
          <SectionHeading tag="Before You Get in Touch" title={<span id="before-heading">Read More About Our Services</span>} />
          <div className="mt-12">
            <ServiceLinks />
          </div>
          <div data-stagger className="mt-8 flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white/80 p-7 text-center shadow-card sm:flex-row sm:text-left">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-ink">
              <MessageCircleQuestion className="size-6" aria-hidden="true" />
            </span>
            <p className="flex-1">Answers about META, skill assessments, pathway programs and vocational training.</p>
            <ButtonLink href="/faq" variant="dark">
              Read the FAQ
            </ButtonLink>
          </div>
        </div>
      </section>

      <AudienceSection tone="tint" />
    </>
  );
}
