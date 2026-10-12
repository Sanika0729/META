# META — Merit Education & Training Academy website

Rebuild of https://merittalentacademy.com in Next.js. **All text comes from the existing site** — presented in a Porbe-inspired academic design with a rich motion layer.

## Pages

| URL | Content |
| --- | --- |
| `/` | Porbe Home V1 layout: hero arc, service finder, Our Services, Education Benefits, Who We Are, How META Supports the Process, Where We Work, mission, programs, Why META?, Success Stories |
| `/about-us` | About Us, Mission, Vision, Core Values, services, Australia / India / UAE, our journey |
| `/services` + `/services/skill-assessments`, `/services/pathway-programs`, `/services/vocational-training` | Original service copy plus detail drawn from META's published articles |
| `/reviews` | Rating summary, carousel and topic-filtered list of the published success stories |
| `/faq` | Searchable FAQ — every answer comes from META's published text |
| `/contact-us` | Contact form (Name, Email, Phone, Subject, Message), address, email, phone |

The blog has been removed. Old article URLs redirect to the pages that now hold their content
(`/latest-news` → `/`, articles → About Us or the matching service page).

To add a genuine review, append it to `content/testimonials.ts`; to add an FAQ, edit `content/faqs.ts`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

## Where things live

| Path | Purpose |
| --- | --- |
| `content/home.ts` | Homepage, About and Services intro copy (verbatim from the original site) |
| `content/services.ts`, `content/posts.ts`, `content/testimonials.ts` | Services, articles, success stories |
| `content/images.ts` | Every image used, with alt text |
| `lib/site.ts` | Business name, email, phone, address, menu |
| `components/motion/` | Rotating rings and orbits, 3D globe, 3D tilt cards, counter, marquee, floating shapes |
| `components/sections/` | Hero, testimonial carousel, CTA band, article layout |
| `app/globals.css` | Design tokens, keyframes, scroll-linked reveal/parallax/progress animations |

## Motion

Rotating and orbiting rings, CSS 3D wireframe globes, pointer-driven 3D tilt cards, a 3D cover-flow
testimonial carousel, Ken Burns images, parallax backgrounds, scroll-linked reveals (up/left/right/zoom/flip),
a scroll progress bar, word-by-word heading animation, a marquee ribbon, shine sweeps on buttons and a page
transition on every navigation. Everything is CSS-first; visitors with "reduce motion" enabled get a static site.

## Contact form — configuration required before launch

The form validates input and has a honeypot spam trap. It only shows "Thank you" when delivery succeeds;
until a service is configured, visitors are told their message was **not** sent and shown META's email and phone.
Copy `.env.example` to `.env.local` (or set in your host) and configure one option:

| Variable | Purpose |
| --- | --- |
| `ENQUIRY_WEBHOOK_URL` | POST each enquiry as JSON (Zapier, Make, Formspree, CRM…) |
| `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` | Email each enquiry via Resend (verified sending domain required) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://merittalentacademy.com`) |

## Images

META's own images are used wherever the original site used them. Additional education photography
(graduates, library, lecture theatre, classrooms, culinary training) is from Unsplash and listed in
`public/images/CREDITS.md`; replace with META's own photography when available.
