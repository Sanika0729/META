import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    { url: absoluteUrl("/about-us"), priority: 0.8 },
    { url: absoluteUrl("/services"), priority: 0.9 },
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), priority: 0.8 })),
    { url: absoluteUrl("/reviews"), priority: 0.7 },
    { url: absoluteUrl("/faq"), priority: 0.7 },
    { url: absoluteUrl("/contact-us"), priority: 0.8 },
  ];
}
