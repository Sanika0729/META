/** Business details exactly as published on https://merittalentacademy.com */
export const site = {
  name: "Merit Education & Training Academy",
  shortName: "META",
  description:
    "Australian-based with 15+ years in VET. META delivers skill assessments, pathway programs and vocational training for global workforce mobility.",
  mission: "Our mission is to raise global education standards, empower students, and build workforce readiness across borders.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://merittalentacademy.com").replace(/\/$/, ""),
  email: "metacontactus@gmail.com",
  phone: {
    display: "+91 90414 69720",
    href: "tel:+919041469720",
  },
  address: {
    locality: "Richmond",
    region: "VIC",
    postcode: "3121",
    country: "Australia",
    countryCode: "AU",
    display: "Richmond, VIC, Australia 3121",
  },
  logo: {
    src: "/brand/meta-logo.png",
    width: 305,
    height: 100,
    alt: "META — Merit Education & Training Academy",
  },
  // Updated manually; avoids reading the clock during prerendering.
  copyrightYear: 2026,
} as const;

export type NavLink = { label: string; href: string };

/** Main menu. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
