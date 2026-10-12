import type { Testimonial } from "./types";

/**
 * Reproduced as published in "Success Stories" on the merittalentacademy.com homepage
 * (each shown with 5 stars). Add new, genuine reviews to this list — they appear on
 * the homepage carousel and the Reviews page automatically. Never add invented reviews.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our partnership with META has been instrumental in opening international pathways for our students. Their understanding of both the Indian education landscape and Australian VET standards is rare, and they bring the two together with professionalism and genuine care. What stood out for us was how seriously they take compliance and how invested they are in student outcomes — not just enrolment numbers.",
    name: "Anjali Mehta",
    topic: "Pathway Programs",
    rating: 5,
  },
  {
    quote:
      "When I started the skill assessment process, I was overwhelmed by the documentation requirements and worried about gaps in my paperwork. META’s team walked me through every step — they spotted issues in my employment references before I submitted, prepared me for the practical assessment, and made the whole process feel manageable. I received a positive outcome on my first attempt and am now working in Melbourne. I recommend them to anyone considering the same journey.",
    name: "Vikram S.",
    topic: "Skill Assessments",
    rating: 5,
  },
  {
    quote:
      "Joining the Patissier program through META and IBCA changed what I thought was possible for my career. The training was practical and intense — exactly what international kitchens demand. More than the technical skills, the program gave me clarity about my next steps and the confidence to take them. I’m now preparing for opportunities abroad and feel genuinely ready.",
    name: "Priya R.",
    role: "Patissier Program Graduate",
    topic: "Vocational Training",
    rating: 5,
  },
];
