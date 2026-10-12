import { Mail, Phone } from "lucide-react";

import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { CTASection } from "@/components/sections/CTASection";
import { AudienceSection, ServiceLinks } from "@/components/sections/ContentSections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqExplorer } from "@/components/sections/FaqExplorer";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { allFaqs, faqGroups } from "@/content/faqs";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about META, skill assessments, pathway programs, Patissier and Commercial Cookery training in India, and how to contact Merit Education & Training Academy.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" crumbs={[{ label: "FAQ" }]}>
        <p className="word-in delay-5 text-white/85">{allFaqs.length} answers about META and our services</p>
      </PageHero>

      <section className="section-pad relative overflow-hidden">
        <FloatingShapes />
        <div aria-hidden="true" className="pointer-events-none absolute -right-60 top-24 size-[44rem] animate-spin-slower rounded-full border border-dashed border-brand-500/15" />
        <div className="container-site relative">
          <FaqExplorer groups={faqGroups} />
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-labelledby="faq-services">
        <div className="container-site">
          <SectionHeading tag="Our Services" title={<span id="faq-services">Read More About Each Service</span>} />
          <div className="mt-12">
            <ServiceLinks />
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-[var(--radius-panel)] bg-ink p-8 text-white md:grid-cols-[auto_1fr_auto] md:p-12" data-reveal="flip">
            <Rings tone="light" className="left-[10%] w-[30rem] opacity-50" />
            <div className="relative mx-auto grid size-28 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand">
              <Ripples tone="light" />
              <Globe3D tone="light" className="size-16" />
            </div>
            <div className="relative">
              <h2 className="mb-2 text-2xl font-semibold text-white md:text-3xl">Have another question?</h2>
              <p className="text-white/80">If there’s a question we can help answer, please get in touch.</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent">
                  <Mail className="size-4" aria-hidden="true" /> {site.email}
                </a>
                <a href={site.phone.href} className="inline-flex items-center gap-2 hover:text-accent">
                  <Phone className="size-4" aria-hidden="true" /> {site.phone.display}
                </a>
              </div>
            </div>
            <ButtonLink href="/contact-us" className="relative w-fit">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>

      <AudienceSection tone="tint" />

      <div className="pt-20 md:pt-28" />
      <CTASection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  );
}
