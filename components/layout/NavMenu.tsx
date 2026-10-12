"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { mainNav, site } from "@/lib/site";

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

/** Reads the pathname for active states. */
export function NavMenuWithPath() {
  const pathname = usePathname();
  return <NavMenu activePath={pathname} />;
}

export function NavMenu({ activePath }: { activePath: string }) {
  return (
    <>
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-0.5 whitespace-nowrap rounded-full bg-canvas px-1.5 py-1.5 xl:gap-1 xl:px-2">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(activePath, item.href) ? "page" : undefined}
                className="group relative block rounded-full px-3 py-2 text-[0.9375rem] text-ink/80 transition-all duration-300 hover:bg-white hover:text-brand-600 hover:shadow-sm aria-[current=page]:bg-white aria-[current=page]:font-medium aria-[current=page]:text-brand-600 xl:px-4"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileNav activePath={activePath} />
    </>
  );
}

function MobileNav({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggle.current?.focus();
  }, []);

  // Close when the route changes (adjusting state during render).
  const [lastPath, setLastPath] = useState(activePath);
  if (lastPath !== activePath) {
    setLastPath(activePath);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && panel.current) {
        const focusables = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const current = document.activeElement;
        if (current === toggle.current || !panel.current.contains(current)) {
          e.preventDefault();
          (e.shiftKey ? last : first)?.focus();
        } else if ((e.shiftKey && current === first) || (!e.shiftKey && current === last)) {
          e.preventDefault();
          toggle.current?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => (open ? close(false) : setOpen(true))}
        className="relative z-[60] grid size-11 place-items-center rounded-full bg-ink text-white transition-all duration-300 hover:rotate-90 hover:bg-brand"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
        onClick={() => close(false)}
      />
      <div
        id={panelId}
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-x-3 top-24 z-50 max-h-[calc(100dvh-7rem)] origin-top animate-[menu-in_300ms_ease-out] overflow-y-auto rounded-3xl border border-line bg-white p-4 shadow-lift"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item, i) => (
              <li key={item.href} className="word-in" style={{ animationDelay: `${i * 60}ms` }}>
                <Link
                  href={item.href}
                  aria-current={isActive(activePath, item.href) ? "page" : undefined}
                  className="flex min-h-12 items-center rounded-xl px-4 text-base text-ink transition-colors hover:bg-canvas aria-[current=page]:bg-canvas aria-[current=page]:font-medium aria-[current=page]:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-1 rounded-2xl bg-canvas p-4 text-sm text-ink">
          <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 px-2">
            <Mail className="size-4 text-brand-500" aria-hidden="true" /> {site.email}
          </a>
          <a href={site.phone.href} className="flex min-h-11 items-center gap-3 px-2">
            <Phone className="size-4 text-brand-500" aria-hidden="true" /> {site.phone.display}
          </a>
          <p className="flex min-h-11 items-center gap-3 px-2">
            <MapPin className="size-4 text-brand-500" aria-hidden="true" /> {site.address.display}
          </p>
        </div>
      </div>
    </div>
  );
}
