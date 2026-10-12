import type { StaticImageData } from "next/image";

// Images published on the existing META website
import slideGlobe from "@/public/images/meta/slide1.jpg";
import australiaStudents from "@/public/images/meta/hpsec2-bg.jpg";
import graduationBg from "@/public/images/meta/testi-bg.jpg";
import booksGlobe from "@/public/images/meta/inner-bg.jpg";
import adviser from "@/public/images/meta/hpimg1.jpg";
import studying from "@/public/images/meta/abtimg1.jpg";
import lectureHall from "@/public/images/meta/abtimg2.jpg";
import assessment from "@/public/images/meta/img3.jpg";
import coaching from "@/public/images/meta/blog-1.jpg";

// Education photography (Unsplash licence) — see public/images/CREDITS.md
import academicsGraduates from "@/public/images/stock/academics-graduates.jpg";
import graduatesCaps from "@/public/images/stock/graduates-caps.jpg";
import libraryHall from "@/public/images/stock/library-hall.jpg";
import lectureStudents from "@/public/images/stock/lecture-students.jpg";
import lectureTheatre from "@/public/images/stock/lecture-theatre.jpg";
import studentsClassroom from "@/public/images/stock/students-classroom.jpg";
import chefTrainees from "@/public/images/stock/chef-trainees.jpg";
import culinaryStudents from "@/public/images/stock/culinary-students.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

const img = (src: StaticImageData, alt: string): SiteImage => ({ src, alt });

export const images = {
  slideGlobe: img(slideGlobe, "Graduation cap resting on a globe beside a stack of books"),
  australiaStudents: img(australiaStudents, "Students walking in an Australian city beside an Australian flag"),
  graduationBg: img(graduationBg, "Graduate in a gown celebrating in front of an audience"),
  booksGlobe: img(booksGlobe, "Books, a globe and coloured pencils on a classroom desk"),
  adviser: img(adviser, "Smiling education adviser working at a laptop"),
  studying: img(studying, "Students taking notes together over open books"),
  lectureHall: img(lectureHall, "Student with a backpack standing in a lecture hall"),
  assessment: img(assessment, "Hands on a laptop keyboard with skills assessment icons"),
  coaching: img(coaching, "Presenter coaching a group around a meeting table"),

  academicsGraduates: img(academicsGraduates, "Graduates raising their caps beneath an archway marked Academics"),
  graduatesCaps: img(graduatesCaps, "Graduates in academic gowns throwing their caps in the air"),
  libraryHall: img(libraryHall, "Students studying in a grand university library reading room"),
  lectureStudents: img(lectureStudents, "Students attending a lecture with a projector screen"),
  lectureTheatre: img(lectureTheatre, "Large audience of students seated in a lecture theatre"),
  studentsClassroom: img(studentsClassroom, "Students working in a classroom while one holds textbooks"),
  chefTrainees: img(chefTrainees, "Culinary trainees in chef whites cooking in a training kitchen"),
  culinaryStudents: img(culinaryStudents, "Students in uniform practising cooking in a training kitchen"),
} satisfies Record<string, SiteImage>;
