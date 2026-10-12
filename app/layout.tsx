import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

// Porbe and the original META site both use Poppins.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Merit Education & Training Academy (META) | Global Pathways",
    template: "%s | META",
  },
  description: site.description,
  applicationName: site.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.shortName,
    url: "/",
    title: "Merit Education & Training Academy (META) | Global Pathways",
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Students studying together" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merit Education & Training Academy (META) | Global Pathways",
    description: site.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    apple: "/brand/apple-icon-72x72.png",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f0f5ff",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${absoluteUrl("/")}#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: absoluteUrl("/"),
  logo: absoluteUrl(site.logo.src),
  description: site.description,
  email: site.email,
  telephone: "+919041469720",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.countryCode,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
