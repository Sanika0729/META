import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Rings } from "@/components/motion/Rings";
import { mainNav, site } from "@/lib/site";
import { Logo } from "./Logo";

/** Footer content from the original site: About Us, Quick Links, Address. */
export function Footer() {
  return (
    <footer className="relative mt-auto overflow-clip border-t border-line bg-canvas pt-16 md:pt-20">
      <Rings className="-right-40 left-auto top-10 w-[34rem] translate-x-0 opacity-60" />
      <div className="container-site relative grid gap-12 pb-12 md:grid-cols-3 lg:gap-16">
        <div className="flex flex-col gap-5" data-reveal="left">
          <Logo className="h-14" />
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="max-w-sm text-[0.9375rem]">{site.mission}</p>
        </div>

        <nav aria-labelledby="footer-links" data-reveal>
          <h2 id="footer-links" className="mb-5 text-lg font-semibold">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3 text-[0.9375rem]">
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group inline-flex items-center gap-2 transition-colors hover:text-brand-600">
                  <span className="h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-4" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal="right">
          <h2 className="mb-5 text-lg font-semibold">Address</h2>
          <address className="flex flex-col gap-4 text-[0.9375rem] not-italic">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden="true" />
              {site.address.display}
            </p>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors [overflow-wrap:anywhere] hover:text-brand-600">
              <Mail className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.phone.href} className="flex items-start gap-3 transition-colors hover:text-brand-600">
              <Phone className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden="true" />
              {site.phone.display}
            </a>
          </address>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="container-site py-6 text-center text-sm text-muted">
          <p>© Copyright {site.copyrightYear} Meta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
