import Link from "next/link";
import { Suspense } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { home } from "@/content/home";
import { Logo } from "./Logo";
import { NavMenu, NavMenuWithPath } from "./NavMenu";

/** Top strip from the original site: "Are you interested in Online Learning? Contact Us" · About Us | Membership */
function TopBar() {
  return (
    <aside aria-label="Site notice" className="relative overflow-hidden bg-ink text-[0.8125rem] text-white/85">
      <div aria-hidden="true" className="absolute inset-0 animate-gradient bg-[linear-gradient(110deg,#121d35,#223e92,#121d35,#2a4bb3)] opacity-60" />
      <div className="container-site relative flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2">
        <p>
          {home.topBar.text}{" "}
          <Link href="/contact-us" className="font-semibold text-accent underline-offset-4 hover:underline">
            Contact Us
          </Link>
        </p>
        <p className="hidden sm:block">
          <Link href="/about-us" className="hover:text-accent">
            About Us
          </Link>
          <span className="mx-2 text-white/40">|</span>
          <Link href="/contact-us" className="hover:text-accent">
            Membership
          </Link>
        </p>
      </div>
    </aside>
  );
}

/** Porbe-style floating navigation bar. */
export function Header() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ink px-5 py-3 font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="scroll-progress fixed inset-x-0 top-0 z-[80] h-1 bg-gradient-to-r from-accent via-brand-500 to-accent" />
      <TopBar />
      <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div className="mx-auto flex max-w-[84.375rem] items-center justify-between gap-3 rounded-full border border-white/70 bg-white/90 py-2 pl-4 pr-2 shadow-[0_8px_30px_-12px_rgb(34_62_146/0.25)] backdrop-blur-md md:pl-6">
          <Logo eager className="h-11 md:h-12 xl:h-14" />
          <Suspense fallback={<NavMenu activePath="" />}>
            <NavMenuWithPath />
          </Suspense>
          <div className="hidden lg:block">
            <ButtonLink href="/contact-us" variant="dark" className="whitespace-nowrap text-[0.9375rem]">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </header>
    </>
  );
}
