import type { IconName } from "./types";

/** Homepage copy, verbatim from https://merittalentacademy.com (spelling of "More then" corrected to "More than"). */
export const home = {
  hero: {
    title: ["Empowering", "Global Education &", "Workforce Mobility"],
    text: "Empowering students, professionals, and institutions with globally aligned education, workforce mobility, and career opportunities",
    cta: "Get in Touch",
  },
  services: {
    tag: "Our Services",
    title: "Global Skill and International Pathway",
    text: "Empowering students, professionals, and institutions with globally aligned education, workforce mobility, and career opportunities",
  },
  benefits: {
    tag: "Education Benefits",
    title: "More than 15+ years in Australia working with Education sector.",
    cta: "Get in Touch",
  },
  whoWeAre: {
    title: "Who We Are",
    text: "Merit Education & Training Academy (META) is an Australian-registered business with over 15 years of demonstrated expertise in workforce development, skills assessment facilitation, and international recruitment support, specifically tailored for the industrial and trade sectors. We support both domestic and international clients by providing streamlined and efficient pathways to enhance employability and workforce readiness through skills recognition and visa support services.",
    cta: "Read More",
  },
  whyMeta: {
    tag: "Why META?",
    title: "Students and Education Institutions",
    text: "Built on Australia’s VET expertise, META delivers trusted education, training, and global pathway solutions for students and institutions.",
    items: [
      {
        icon: "shield-check" as IconName,
        title: "RTO Compliance",
        text: "Fully aligned with RTO standards, ensuring quality and trust in every program.",
      },
      {
        icon: "award" as IconName,
        title: "Proven VET Expertise",
        text: "15+ years of excellence in Vocational Education & Training with student-focused solutions.",
      },
      {
        icon: "layers" as IconName,
        title: "One Stop Shop",
        text: "Complete support for students and businesses - from skill assessments to global pathways.",
      },
    ],
  },
  stories: { title: "Success Stories" },
  /** From "How META supports the process" (META's skill assessments article). */
  process: {
    tag: "How It Works",
    title: "How META Supports the Process",
    text: "We know what assessing authorities look for, what trips applicants up, and how to present a strong case from the start.",
    steps: [
      { icon: "file-check" as IconName, title: "Organise", text: "We help candidates organise their documentation." },
      { icon: "search" as IconName, title: "Identify Gaps", text: "We identify gaps before they become problems." },
      { icon: "clipboard" as IconName, title: "Prepare", text: "We prepare candidates for practical and technical assessments." },
      { icon: "target" as IconName, title: "Align", text: "We align everything to the specific occupational standards in question." },
    ],
  },
  /** From About Us: "Expanding from Australia into India and the UAE". */
  regions: {
    tag: "Where We Work",
    title: "From Australia to India and the UAE",
    items: [
      {
        name: "Australia",
        label: "Australian-registered",
        text: "Built on over 15 years of expertise within Australia’s Vocational Education & Training (VET) sector, with skill assessments aligned to Australian occupational standards.",
        href: "/services/skill-assessments",
      },
      {
        name: "India",
        label: "Specialised vocational training",
        text: "In partnership with IBCA, META currently offers Patissier and Commercial Cookery programs in India.",
        href: "/services/vocational-training",
      },
      {
        name: "UAE",
        label: "Expanding",
        text: "Expanding from Australia into India and the UAE, META was created with a clear purpose — to bridge the gap between skills, education, and global opportunity.",
        href: "/about-us",
      },
    ],
  },
  /** "Empowering students, professionals, institutions, and businesses" (About / Mission). */
  audiences: {
    tag: "Who We Support",
    title: "Students, Professionals, Institutions & Businesses",
    text: "We support both domestic and international clients by providing streamlined and efficient pathways to enhance employability and workforce readiness.",
    items: [
      { icon: "graduation-cap" as IconName, title: "Students", text: "Pathway programs that connect students with international learning and career opportunities." },
      { icon: "briefcase" as IconName, title: "Professionals", text: "Support navigating skill assessments, documentation processes, and career pathways." },
      { icon: "book-open" as IconName, title: "Educational Institutions", text: "Help aligning with global education standards and industry expectations." },
      { icon: "handshake" as IconName, title: "Businesses", text: "Working alongside HR and migration teams so incoming employees meet eligibility requirements." },
    ],
  },
  /** From "From Indian Kitchens to Global Careers". */
  demand: {
    tag: "Global Demand",
    title: "Trained Chefs Are in Demand Worldwide",
    text: "Hotels, restaurants, cruise lines, and resorts across Australia, the Middle East, Europe, and North America are short on trained chefs — particularly pastry chefs and commercial cooks with strong technical foundations.",
    regions: ["Australia", "Middle East", "Europe", "North America"],
    venues: ["Hotels", "Restaurants", "Cruise lines", "Resorts"],
  },
  /** Programs and partnerships named on the Services page. */
  programs: {
    tag: "Programs & Partnerships",
    title: "Training and Pathways With Leading Institutions",
    items: [
      { title: "Patissier Program", partner: "IBCA", place: "India", text: "Designed to equip aspiring professionals with technical expertise and industry-oriented training.", href: "/services/vocational-training" },
      { title: "Commercial Cookery Program", partner: "IBCA", place: "India", text: "Designed with IBCA around practical hours, industry-aligned standards, and pathway clarity.", href: "/services/vocational-training" },
      { title: "Pathway Programs", partner: "Baxter & AApoly", place: "Worldwide", text: "Structured progression routes into globally recognised education programs, with collaborations under development with universities and colleges worldwide.", href: "/services/pathway-programs" },
    ],
  },
  topBar: {
    text: "Are you interested in Online Learning?",
  },
};

/** About page copy, verbatim from https://merittalentacademy.com/about-us */
export const about = {
  intro: [
    "META (Merit Education & Training Academy) is a globally focused education and workforce mobility organisation built on over 15 years of expertise within Australia’s Vocational Education & Training (VET) sector. With a strong foundation in quality, compliance, and industry-driven solutions, META has established itself as a trusted partner for students, educational institutions, and businesses seeking international education pathways and workforce readiness solutions.",
    "Expanding from Australia into India and the UAE, META was created with a clear purpose — to bridge the gap between skills, education, and global opportunity. We believe that talent should never be limited by geography, and that the right guidance, training, and international alignment can transform careers, institutions, and industries.",
    "At META, we operate as a One Stop Shop for students, and organisations by providing comprehensive support in areas such as Skill Assessments, Pathway Programs, Vocational Training, and workforce mobility solutions. Our services are designed to help individuals gain internationally recognised qualifications and assist institutions in aligning with global education standards and industry expectations.",
    "Our expertise lies not only in understanding education systems, but also in understanding people — their aspirations, career goals, migration pathways, and the evolving demands of the international workforce. Through strategic collaborations and a client-focused approach, we deliver solutions that are practical, ethical, and outcome-oriented.",
  ],
  mission:
    "To empower students, professionals, institutions, and businesses with globally aligned education, training, and workforce mobility solutions that create meaningful international opportunities.",
  vision:
    "To become a globally trusted education and workforce mobility partner, enabling skills, talent, and learning to move confidently across borders.",
  cta: { title: "Take the First Step Toward Your Future", button: "Get in Touch" },
  /** From "Welcome to the New META". */
  journey: [
    "After more than 15 years of working quietly behind the scenes with students, institutions, and businesses across Australia and beyond, it felt like the right time to give our online presence the same care and clarity we put into our programs.",
    "This launch is a beginning, not an end. Over the coming months we’ll be rolling out new pathway partnerships, expanding our vocational training portfolio, and sharing more stories from the students and institutions we work with.",
    "To everyone who has worked with META over the past fifteen years — thank you. Your trust is what made this next chapter possible. And to anyone meeting us for the first time: welcome. We’re glad you’re here.",
  ],
  values: [
    { icon: "award" as IconName, title: "Excellence", text: "Upholding the highest standards in quality, compliance, and service delivery." },
    { icon: "shield-check" as IconName, title: "Integrity", text: "Building relationships based on transparency, trust, and mutual respect." },
    { icon: "globe" as IconName, title: "Innovation", text: "Continuously evolving our programs and services to meet changing global demands." },
    { icon: "users" as IconName, title: "Collaboration", text: "Creating strong partnerships with institutions, and industry leaders worldwide." },
    { icon: "graduation-cap" as IconName, title: "Student & Client Focus", text: "Delivering personalised, outcome-driven solutions that support long-term success." },
  ],
  closing:
    "META’s commitment to ASQA compliance, and continuous improvement ensures that every service we provide reflects professionalism, credibility, and global relevance. As the world of education and employment continues to evolve, META remains dedicated to helping individuals and organisations move forward with confidence — locally and internationally.",
};

/** Services page intro, verbatim from https://merittalentacademy.com/services */
export const servicesIntro =
  "With 15+ years in Australia’s education sector, META is a trusted partner for institutions, businesses, and students. We deliver quality, compliance, and customer-focused solutions in the Vocational Education & Training (VET) sector.";
