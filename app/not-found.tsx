import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Accent } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

const links = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-site flex flex-col items-center gap-6 text-center">
        <svg aria-hidden="true" viewBox="0 0 300 120" className="w-[min(80vw,26rem)] text-brand-500/15">
          <text x="150" y="105" textAnchor="middle" fill="currentColor" fontSize="128" fontWeight="600">
            404
          </text>
        </svg>
        <h1 className="h-section -mt-6">
          This page <Accent>couldn’t be found</Accent>
        </h1>
        <p className="max-w-lg">
          The page you’re looking for may have moved. Try one of these pages instead.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex rounded-full border border-line bg-white px-5 py-2.5 font-medium text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink href="/" className="mt-2">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
