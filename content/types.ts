import type { SiteImage } from "./images";

export type IconName =
  | "badge-check"
  | "route"
  | "chef-hat"
  | "shield-check"
  | "graduation-cap"
  | "layers"
  | "globe"
  | "book-open"
  | "award"
  | "users"
  | "file-check"
  | "search"
  | "clipboard"
  | "target"
  | "map-pin"
  | "handshake"
  | "cake"
  | "utensils"
  | "briefcase"
  | "sparkles";

/** A titled block of copy on a service detail page. */
export type DetailSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet points taken from the same source text. */
  points?: { title?: string; text: string; icon?: IconName }[];
};

export type Service = {
  slug: string;
  /** Title used on the homepage service cards */
  cardTitle: string;
  /** Text used on the homepage service cards */
  cardText: string;
  /** Title used on the Services page */
  title: string;
  body: string[];
  icon: IconName;
  image: SiteImage;
  gallery: SiteImage[];
  /** Short labels lifted from the service text, shown as chips. */
  tags: string[];
  /** Deeper content, drawn from META's own published articles. */
  details: DetailSection[];
  quote?: string;
  /** Who the service is for, from the service text. */
  audience: { icon: IconName; title: string; text: string }[];
  /** Matching FAQ group title in content/faqs.ts. */
  faqGroup: string;
  /** Name of the related published testimonial. */
  reviewName?: string;
  seo: { title: string; description: string };
};

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  /** Topic the review talks about, used for filtering on the Reviews page. */
  topic: "Pathway Programs" | "Skill Assessments" | "Vocational Training";
  rating: number;
};

export type Faq = { question: string; answer: string };

export type FaqGroup = { title: string; icon: IconName; faqs: Faq[] };
