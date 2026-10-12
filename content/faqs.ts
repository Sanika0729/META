import type { FaqGroup } from "./types";

/**
 * Every answer below is quoted or condensed from text META has published on
 * https://merittalentacademy.com (About Us, Services, homepage, footer and its
 * articles). No new services, claims or figures are introduced.
 */
export const faqGroups: FaqGroup[] = [
  {
    title: "About META",
    icon: "graduation-cap",
    faqs: [
      {
        question: "What is META?",
        answer:
          "META (Merit Education & Training Academy) is a globally focused education and workforce mobility organisation built on over 15 years of expertise within Australia’s Vocational Education & Training (VET) sector.",
      },
      {
        question: "How long has META been working in education?",
        answer:
          "META has more than 15 years of experience in Australia, working with the education sector — with demonstrated expertise in workforce development, skills assessment facilitation, and international recruitment support.",
      },
      {
        question: "Where is META based?",
        answer:
          "META is an Australian-registered business. Our address is Richmond, VIC, Australia 3121. Expanding from Australia into India and the UAE, META was created to bridge the gap between skills, education, and global opportunity.",
      },
      {
        question: "Who does META support?",
        answer:
          "META empowers students, professionals, institutions, and businesses. We support both domestic and international clients by providing streamlined and efficient pathways to enhance employability and workforce readiness.",
      },
      {
        question: "What is META’s mission?",
        answer:
          "To empower students, professionals, institutions, and businesses with globally aligned education, training, and workforce mobility solutions that create meaningful international opportunities.",
      },
      {
        question: "What does “One Stop Shop” mean?",
        answer:
          "At META, we operate as a One Stop Shop for students and organisations — complete support for students and businesses, from skill assessments to global pathways, including Pathway Programs, Vocational Training, and workforce mobility solutions.",
      },
      {
        question: "What values guide META?",
        answer:
          "Excellence, Integrity, Innovation, Collaboration, and Student & Client Focus. META’s commitment to ASQA compliance and continuous improvement ensures that every service we provide reflects professionalism, credibility, and global relevance.",
      },
    ],
  },
  {
    title: "Skill Assessments",
    icon: "badge-check",
    faqs: [
      {
        question: "What is a skill assessment?",
        answer:
          "A skill assessment is a formal evaluation of your qualifications, work experience, and practical competencies against the standards of the country you’re applying to work in. For Australia, that means demonstrating that your existing skills align with the relevant Australian occupational standards.",
      },
      {
        question: "What does a skill assessment typically involve?",
        answer:
          "It typically involves submitting documented evidence of your training and employment history, sometimes a technical interview, and in many cases a practical assessment.",
      },
      {
        question: "Who carries out skill assessments?",
        answer:
          "The work is carried out by an authorised assessing body. The outcome — a positive skills assessment — is what many skilled migration visas require before they can even be lodged.",
      },
      {
        question: "Why do applicants receive negative assessments?",
        answer:
          "Applicants stumble in predictable ways: incomplete employment references, qualifications that don’t quite map to the right occupation code, gaps in documentation, or evidence of training that doesn’t meet the hours or units required. A negative assessment is far harder to overturn than a careful first submission is to get right.",
      },
      {
        question: "How does META help with skill assessments?",
        answer:
          "We help candidates organise their documentation, identify gaps before they become problems, prepare for practical and technical assessments, and align everything to the specific occupational standards in question.",
      },
      {
        question: "Can META help businesses sponsoring overseas talent?",
        answer:
          "Yes. For businesses sponsoring overseas talent, we work alongside HR and migration teams to make sure incoming employees meet eligibility requirements before contracts are signed.",
      },
    ],
  },
  {
    title: "Pathway Programs",
    icon: "route",
    faqs: [
      {
        question: "What are META’s pathway programs?",
        answer:
          "META collaborates with leading educational institutions and industry partners to create pathway programs that connect students and professionals with international learning and career opportunities, providing structured progression routes into globally recognised education programs.",
      },
      {
        question: "Which institutions does META work with?",
        answer:
          "META has strategic partnerships with institutions such as Baxter and AApoly, along with ongoing collaborations under development with universities and colleges worldwide.",
      },
      {
        question: "Will META add new pathway partnerships?",
        answer:
          "Yes. META is rolling out new pathway partnerships and expanding its vocational training portfolio.",
      },
    ],
  },
  {
    title: "Vocational Training",
    icon: "chef-hat",
    faqs: [
      {
        question: "Which vocational programs does META offer?",
        answer:
          "In partnership with IBCA, META currently offers Patissier and Commercial Cookery programs in India, designed to equip aspiring professionals with technical expertise and industry-oriented training.",
      },
      {
        question: "Why patisserie and commercial cookery?",
        answer:
          "Hotels, restaurants, cruise lines, and resorts across Australia, the Middle East, Europe, and North America are short on trained chefs — particularly pastry chefs and commercial cooks with strong technical foundations.",
      },
      {
        question: "What makes META’s programs internationally relevant?",
        answer:
          "Three things: practical hours (real time in real kitchens), industry-aligned standards (techniques, terminology, and workflows aligned with what international kitchens actually use), and pathway clarity (students finish knowing what their next steps could look like).",
      },
      {
        question: "Is international hospitality right for every student?",
        answer:
          "Not every student is suited to international hospitality. We talk openly with applicants about what the work involves, what the lifestyle demands, and what the realistic timelines look like.",
      },
      {
        question: "Will more programs be introduced?",
        answer:
          "Yes. Patisserie and Commercial Cookery are the start. Additional skill-focused programs across multiple sectors will be introduced, in skill areas where international demand is strong.",
      },
    ],
  },
  {
    title: "Contact",
    icon: "map-pin",
    faqs: [
      {
        question: "How can I contact META?",
        answer:
          "Email metacontactus@gmail.com, call +91 90414 69720, or use the form on our Contact Us page. Our address is Richmond, VIC, Australia 3121.",
      },
      {
        question: "Can I ask META a question that isn’t covered here?",
        answer:
          "Yes. If there’s a topic you’d like us to write about, or a question we can help answer, please get in touch.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);
