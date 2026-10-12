import type { StaticImageData } from "next/image";

// Image published on the existing META website (homepage banner)
import slideGlobe from "@/public/images/meta/slide1.jpg";

// High-resolution education photography (Unsplash licence, 2560px) — see public/images/CREDITS.md
import academicsGraduates from "@/public/images/stock/academics-graduates.jpg";
import graduatesCaps from "@/public/images/stock/graduates-caps.jpg";
import libraryHall from "@/public/images/stock/library-hall.jpg";
import lectureStudents from "@/public/images/stock/lecture-students.jpg";
import lectureTheatre from "@/public/images/stock/lecture-theatre.jpg";
import studentsClassroom from "@/public/images/stock/students-classroom.jpg";
import chefTrainees from "@/public/images/stock/chef-trainees.jpg";
import culinaryStudents from "@/public/images/stock/culinary-students.jpg";
import adviser from "@/public/images/stock/adviser.jpg";
import studying from "@/public/images/stock/studying.jpg";
import lectureHall from "@/public/images/stock/lecture-hall.jpg";
import tradesAssessment from "@/public/images/stock/trades-assessment.jpg";

// Page header backgrounds — one per page, matched to its theme
import heroAbout from "@/public/images/hero/about.jpg";
import heroServices from "@/public/images/hero/services.jpg";
import heroSkills from "@/public/images/hero/skill-assessments.jpg";
import heroPathways from "@/public/images/hero/pathway-programs.jpg";
import heroVocational from "@/public/images/hero/vocational-training.jpg";
import heroReviews from "@/public/images/hero/reviews.jpg";
import heroFaq from "@/public/images/hero/faq.jpg";
import heroContact from "@/public/images/hero/contact.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

const img = (src: StaticImageData, alt: string): SiteImage => ({ src, alt });

export const images = {
  slideGlobe: img(slideGlobe, "Graduation cap resting on a globe beside a stack of books"),
  australiaStudents: img(heroPathways, "Sandstone quadrangle of an Australian university"),
  graduationBg: img(graduatesCaps, "Graduates in academic gowns throwing their caps in the air"),
  adviser: img(adviser, "Education adviser in conversation with a student"),
  studying: img(studying, "Student writing notes beside open books"),
  lectureHall: img(lectureHall, "Students seated in a modern university lecture hall"),
  assessment: img(tradesAssessment, "Electrician in a hard hat carrying out practical electrical work"),

  academicsGraduates: img(academicsGraduates, "Graduates raising their caps beneath an archway marked Academics"),
  graduatesCaps: img(graduatesCaps, "Graduates in academic gowns throwing their caps in the air"),
  libraryHall: img(libraryHall, "Students studying in a grand university library reading room"),
  lectureStudents: img(lectureStudents, "Students attending a lecture with a projector screen"),
  lectureTheatre: img(lectureTheatre, "Large audience of students seated in a lecture theatre"),
  studentsClassroom: img(studentsClassroom, "Students working in a classroom while one holds textbooks"),
  chefTrainees: img(chefTrainees, "Culinary trainees in chef whites cooking in a training kitchen"),
  culinaryStudents: img(culinaryStudents, "Students in uniform practising cooking in a training kitchen"),
} satisfies Record<string, SiteImage>;

/** Page header backgrounds. */
export const heroImages = {
  about: heroAbout,
  services: heroServices,
  "skill-assessments": heroSkills,
  "pathway-programs": heroPathways,
  "vocational-training": heroVocational,
  reviews: heroReviews,
  faq: heroFaq,
  contact: heroContact,
} satisfies Record<string, StaticImageData>;

export type HeroKey = keyof typeof heroImages;
