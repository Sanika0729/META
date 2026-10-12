import Image from "next/image";

import { Counter } from "@/components/motion/Counter";
import { FloatingShapes } from "@/components/motion/FloatingShapes";
import { Globe3D } from "@/components/motion/Globe3D";
import { Ripples, Rings } from "@/components/motion/Rings";
import { CTASection } from "@/components/sections/CTASection";
import { MissionVision, ServiceLinks } from "@/components/sections/ContentSections";
import { ReviewsExplorer } from "@/components/sections/ReviewsExplorer";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Cards";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Reviews & Success Stories",
  description:
    "Success stories from students, professionals and institutions who have worked with Merit Education & Training Academy (META).",
  path: "/reviews",
});

export default function ReviewsPage() {
  const total = testimonials.length;
  const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / total;
  const topicOf: Record<string, string> = {
    "skill-assessments": "Skill Assessments",
    "pathway-programs": "Pathway Programs",
    "vocational-training": "Vocational Training",
  };
  const byTopic = services.map((s) => ({
    service: s,
    count: testimonials.filter((t) => t.topic === topicOf[s.slug]).length,
  }));

  return (
    <>
      <PageHero title="Reviews" crumbs={[{ label: "Reviews" }]}>
        <p className="word-in delay-4 text-lg font-medium text-white">Success Stories</p>
      </PageHero>

      {/* Rating summary */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <FloatingShapes />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm" data-reveal="zoom">
            <Rings className="w-[120%]" />
            <Globe3D className="absolute -right-4 top-0 size-20" />
            <div className="absolute inset-[14%] grid place-items-center rounded-full bg-gradient-to-br from-brand to-brand-500 text-center text-white shadow-lift">
              <Ripples tone="light" />
              <span className="relative">
                <span className="block text-6xl font-bold leading-none md:text-7xl">{average.toFixed(1)}</span>
                <span className="mt-3 flex justify-center">
                  <Stars rating={Math.round(average)} />
                </span>
                <span className="mt-2 block text-sm text-white/85">
                  from <Counter to={total} /> published {total === 1 ? "review" : "reviews"}
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6" data-reveal="right">
            <SectionHeading align="left" tag="What People Say" title="Students and Education Institutions" />
            <p className="text-[1.0625rem] leading-8">
              Built on Australia’s VET expertise, META delivers trusted education, training, and global pathway solutions for students and institutions.
            </p>
            <ul className="flex flex-col gap-4">
              {byTopic.map(({ service, count }, i) => (
                <li key={service.slug} className="flex items-center gap-4">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-full ${i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="mb-1.5 flex justify-between text-sm font-medium text-ink">
                      <span>{service.title}</span>
                      <span>
                        {count} {count === 1 ? "review" : "reviews"}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-canvas-2">
                      <div
                        className="h-full origin-left animate-[draw-line_1.6s_cubic-bezier(0.22,1,0.36,1)_both] rounded-full bg-gradient-to-r from-brand-500 to-accent"
                        style={{ width: `${(count / total) * 100}%`, animationDelay: `${300 + i * 200}ms` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="relative isolate overflow-hidden py-24 md:py-28" aria-labelledby="featured-reviews">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image data-parallax src={images.graduationBg.src} alt="" fill sizes="100vw" className="object-cover" placeholder="blur" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/90 via-brand/85 to-ink/90" />
        <Rings tone="light" className="w-[60rem] opacity-50" />
        <div className="container-site relative">
          <h2 id="featured-reviews" className="h-section mb-12 text-center text-white" data-reveal>
            Success Stories
          </h2>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* All reviews with topic filter */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="all-reviews">
        <FloatingShapes />
        <div className="container-site relative">
          <SectionHeading title={<span id="all-reviews">All Reviews</span>} />
          <div className="mt-12">
            <ReviewsExplorer reviews={testimonials} />
          </div>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-[var(--radius-panel)] border border-line bg-white/80 p-8 text-center shadow-card md:p-12" data-reveal="flip">
            <h2 className="text-2xl font-semibold md:text-3xl">Worked with META?</h2>
            <p className="max-w-xl">We’d love to hear about your experience — get in touch with our team.</p>
            <ButtonLink href="/contact-us">Get in Touch</ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/60 py-20 md:py-24" aria-labelledby="reviews-services">
        <div className="container-site">
          <SectionHeading tag="Our Services" title={<span id="reviews-services">Explore What META Offers</span>} />
          <div className="mt-12">
            <ServiceLinks />
          </div>
        </div>
      </section>

      <MissionVision />

      <CTASection />
    </>
  );
}
