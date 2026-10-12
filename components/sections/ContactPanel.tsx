"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/content/types";

type Category = {
  id: string;
  title: string;
  icon: IconName;
  intro: string;
  points: string[];
  link?: { href: string; label: string };
};

/** Enquiry categories. Wording is drawn from META's own service pages and articles. */
const categories: Category[] = [
  {
    id: "skills",
    title: "Skill Assessments",
    icon: "badge-check",
    intro: "Navigating skill assessments, documentation processes, and career pathways for migration, sponsorship, and overseas employment.",
    points: [
      "Your trade, occupation or industry",
      "Your training and employment history",
      "Your employment references and qualifications",
      "Where you are in the assessment process",
    ],
    link: { href: "/services/skill-assessments", label: "About skill assessments" },
  },
  {
    id: "pathways",
    title: "Pathway Programs",
    icon: "route",
    intro: "Structured progression routes into globally recognised education programs, through institutions such as Baxter and AApoly.",
    points: ["Your study and career goals", "The education you have completed so far", "Any questions about our pathway partnerships"],
    link: { href: "/services/pathway-programs", label: "About pathway programs" },
  },
  {
    id: "training",
    title: "Vocational Training",
    icon: "chef-hat",
    intro: "Patissier and Commercial Cookery programs in India, in partnership with IBCA. Students, parents and training partners are all welcome to get in touch.",
    points: ["Which program interests you: Patissier or Commercial Cookery", "Whether you are a student, parent or training partner", "Your goals after training"],
    link: { href: "/services/vocational-training", label: "About vocational training" },
  },
  {
    id: "organisations",
    title: "Institutions & Businesses",
    icon: "handshake",
    intro: "Support for institutions aligning with global education standards, and for businesses sponsoring overseas talent.",
    points: ["Your organisation and its sector", "Whether you are sponsoring overseas talent", "The workforce or education outcomes you are working towards"],
    link: { href: "/about-us", label: "About META" },
  },
  {
    id: "membership",
    title: "Membership",
    icon: "users",
    intro: "Ask our team about membership.",
    points: ["Your name and organisation (if any)", "What you would like to know"],
  },
  {
    id: "experience",
    title: "Share Your Experience",
    icon: "sparkles",
    intro: "Worked with META? Tell us about your experience — with your permission, it may be shared on our Reviews page.",
    points: ["Which service you used", "What the experience was like", "Whether we may publish your words, and how you’d like to be named"],
    link: { href: "/reviews", label: "Read our reviews" },
  },
];

/** Category tiles with a detail box beside the contact form. */
export function ContactPanel() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div className="min-w-0">
        <h2 className="mb-2 text-2xl font-semibold md:text-3xl">What can we help with?</h2>
        <p className="mb-6 text-[0.9375rem]">Choose a topic to see what’s helpful to include.</p>
        <div role="tablist" aria-label="Enquiry topic" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {categories.map((c, i) => {
            const on = c.id === active.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="topic-detail"
                onClick={() => setActive(c)}
                className={`group relative flex min-h-28 flex-col items-start gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                  on ? "border-brand-500 bg-brand-500 text-white shadow-lift" : "border-line bg-white text-ink hover:-translate-y-1 hover:shadow-card"
                }`}
              >
                <span aria-hidden="true" className={`absolute -right-6 -top-6 size-16 rounded-full border-2 border-dashed transition-transform duration-[1.5s] group-hover:rotate-180 ${on ? "border-white/30" : "border-brand-500/20"}`} />
                <span className={`grid size-10 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${on ? "bg-accent text-ink" : i % 2 ? "bg-accent text-ink" : "bg-brand-500 text-white"}`}>
                  <Icon name={c.icon} className="size-5" />
                </span>
                <span className="text-sm font-semibold leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>

        <div id="topic-detail" role="tabpanel" key={active.id} className="word-in mt-6 rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card md:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-accent text-ink">
              <Icon name={active.icon} className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">{active.title}</h3>
          </div>
          <p className="mb-5 text-[0.9375rem]">{active.intro}</p>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-brand-600">Helpful to include</p>
          <ul className="flex flex-col gap-2.5">
            {active.points.map((p, i) => (
              <li key={p} className="word-in flex items-start gap-3 text-[0.9375rem]" style={{ animationDelay: `${120 + i * 80}ms` }}>
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          {active.link && (
            <Link href={active.link.href} className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-600">
              {active.link.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      <div className="relative min-w-0 self-start">
        <span className="absolute -inset-3 animate-gradient rounded-[2.3rem] bg-[linear-gradient(120deg,#3157d1,#fecd08,#223e92,#3157d1)] opacity-80 blur-[2px]" aria-hidden="true" />
        <div className="relative rounded-[var(--radius-panel)] bg-white p-5 shadow-lift sm:p-8 md:p-10">
          <h2 className="mb-1 text-2xl font-semibold">Send us a message</h2>
          <p className="mb-6 text-sm">
            Topic: <span className="font-semibold text-brand-600">{active.title}</span>
          </p>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
