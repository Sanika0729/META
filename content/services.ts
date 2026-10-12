import { images } from "./images";
import type { Service } from "./types";

/**
 * Service copy is verbatim from https://merittalentacademy.com (homepage cards and
 * /services). The `details` sections reuse META's own published article text:
 *  - "Skill Assessments: The Often-Overlooked Step That Unlocks Global Careers"
 *  - "From Indian Kitchens to Global Careers: Why Patisserie and Commercial Cookery…"
 *  - "Welcome to the New META…"
 */
export const services: Service[] = [
  {
    slug: "skill-assessments",
    cardTitle: "Skills, Training & Workforce Solutions",
    cardText:
      "Ensuring employee eligibility for migration/sponsorship, meeting Australian immigration & labour market requirements, and enabling global workforce mobility.",
    title: "Skill Assessments for Workforce Mobility",
    icon: "badge-check",
    image: images.assessment,
    gallery: [images.adviser, images.lectureStudents],
    tags: ["Skill assessments", "Documentation", "Migration & sponsorship", "Overseas employment", "Workforce mobility"],
    body: [
      "META provides comprehensive workforce mobility and skill development solutions designed to help individuals, institutions, and businesses align with international education and employment standards. We support aspiring professionals in navigating skill assessments, documentation processes, and career pathways that enhance opportunities for migration, sponsorship, and overseas employment.",
      "Our approach focuses on bridging the gap between existing talent and global workforce requirements through industry-relevant guidance, personalised support, and internationally aligned processes. Whether you are an individual seeking global career opportunities or an organisation looking to build a future-ready workforce, META delivers practical solutions tailored to evolving international market demands.",
      "By combining expertise, compliance-focused systems, and client-centric support, we help create smoother pathways toward global employability and workforce mobility.",
    ],
    details: [
      {
        heading: "The often-overlooked step that unlocks global careers",
        paragraphs: [
          "If you’re a tradesperson, technician, or industry professional thinking about working overseas, there’s a piece of paperwork that can quietly make or break your plans: the skill assessment.",
          "It’s not the most glamorous part of the migration journey. Visas get the headlines. Job offers get the celebrations. But behind almost every successful international placement in trades and industrial sectors sits a recognised skill assessment — and applicants who underestimate it often pay for that mistake in lost time, lost money, and lost opportunities.",
        ],
      },
      {
        heading: "What is a skill assessment, exactly?",
        paragraphs: [
          "A skill assessment is a formal evaluation of your qualifications, work experience, and practical competencies against the standards of the country you’re applying to work in. For Australia, that means demonstrating that your existing skills align with the relevant Australian occupational standards — whether you’re a chef, a carpenter, an electrician, or any of dozens of other trades on the skilled occupation lists.",
          "It typically involves submitting documented evidence of your training and employment history, sometimes a technical interview, and in many cases a practical assessment. The work is carried out by an authorised assessing body, and the outcome — a positive skills assessment — is what many skilled migration visas require before they can even be lodged.",
        ],
        points: [
          { icon: "file-check", title: "Documented evidence", text: "Evidence of your training and employment history." },
          { icon: "users", title: "Technical interview", text: "Sometimes part of the assessment." },
          { icon: "clipboard", title: "Practical assessment", text: "Required in many cases." },
        ],
      },
      {
        heading: "Why so many applicants get it wrong",
        paragraphs: [
          "The most common mistake we see is treating the skill assessment as a form-filling exercise. It isn’t. The assessing authority is looking for genuine, verifiable evidence that you can do the work to the standard expected — not just paperwork that says you can.",
          "Each of these can lead to a negative assessment, and a negative assessment is far harder to overturn than a careful first submission is to get right.",
        ],
        points: [
          { icon: "file-check", text: "Incomplete employment references" },
          { icon: "target", text: "Qualifications that don’t quite map to the right occupation code" },
          { icon: "search", text: "Gaps in documentation" },
          { icon: "clipboard", text: "Evidence of training that doesn’t meet the hours or units required" },
        ],
      },
      {
        heading: "How META supports the process",
        paragraphs: [
          "We’ve spent fifteen years helping people navigate skill recognition for the Australian market. That means we know what assessing authorities look for, what trips applicants up, and how to present a strong case from the start.",
          "For businesses sponsoring overseas talent, we work alongside HR and migration teams to make sure incoming employees meet eligibility requirements before contracts are signed.",
        ],
        points: [
          { icon: "file-check", title: "Organise", text: "We help candidates organise their documentation." },
          { icon: "search", title: "Identify gaps", text: "We identify gaps before they become problems." },
          { icon: "clipboard", title: "Prepare", text: "We prepare candidates for practical and technical assessments." },
          { icon: "target", title: "Align", text: "We align everything to the specific occupational standards in question." },
        ],
      },
    ],
    quote:
      "A skill assessment isn’t just paperwork. It’s the bridge between what you can do and where you can do it. Get it right, and the world opens up.",
    audience: [
      { icon: "briefcase", title: "Tradespeople & technicians", text: "Thinking about working overseas, where a recognised skill assessment can make or break your plans." },
      { icon: "users", title: "Industry professionals", text: "Seeking global career opportunities through migration, sponsorship, or overseas employment." },
      { icon: "handshake", title: "Businesses", text: "Sponsoring overseas talent and building a future-ready workforce." },
      { icon: "book-open", title: "Institutions", text: "Aligning with international education and employment standards." },
    ],
    faqGroup: "Skill Assessments",
    reviewName: "Vikram S.",
    seo: {
      title: "Skill Assessments for Workforce Mobility | META",
      description:
        "META helps tradespeople, technicians and industry professionals organise documentation, identify gaps and prepare for skill assessments against Australian occupational standards.",
    },
  },
  {
    slug: "pathway-programs",
    cardTitle: "Pathway Programs",
    cardText:
      "Collaborating with leading institutions with ongoing partnerships in development with universities and colleges worldwide.",
    title: "Pathway Programs",
    icon: "route",
    image: images.studying,
    gallery: [images.libraryHall, images.academicsGraduates],
    tags: ["Baxter", "AApoly", "Universities & colleges worldwide", "Structured progression", "Global education systems"],
    body: [
      "META collaborates with leading educational institutions and industry partners to create pathway programs that connect students and professionals with international learning and career opportunities. These pathways are designed to provide structured progression routes into globally recognised education programs and professional development opportunities.",
      "Through strategic partnerships with institutions such as Baxter and AApoly, along with ongoing collaborations under development with universities and colleges worldwide, we help learners access quality education aligned with international standards and industry expectations.",
      "Our pathway programs are built to support long-term growth by enabling students to gain exposure to global education systems, industry-focused learning, and enhanced career prospects. META’s commitment is to simplify access to international opportunities while ensuring guidance and support at every stage of the journey.",
    ],
    details: [
      {
        heading: "What our pathway programs offer",
        paragraphs: [
          "Pathway programs connect students and professionals with international learning and career opportunities, aligned with international standards and industry expectations.",
        ],
        points: [
          { icon: "route", title: "Structured progression", text: "Routes into globally recognised education programs and professional development opportunities." },
          { icon: "globe", title: "Global exposure", text: "Exposure to global education systems, industry-focused learning, and enhanced career prospects." },
          { icon: "users", title: "Guidance at every stage", text: "Simplified access to international opportunities, with guidance and support at every stage of the journey." },
        ],
      },
      {
        heading: "Institutional collaborations",
        paragraphs: [
          "META works through strategic partnerships with institutions such as Baxter and AApoly, along with ongoing collaborations under development with universities and colleges worldwide.",
        ],
        points: [
          { icon: "handshake", title: "Baxter", text: "Pathway program partner." },
          { icon: "handshake", title: "AApoly", text: "Pathway program partner." },
          { icon: "graduation-cap", title: "Universities & colleges worldwide", text: "Ongoing collaborations under development." },
        ],
      },
      {
        heading: "What’s next",
        paragraphs: [
          "Over the coming months we’ll be rolling out new pathway partnerships, expanding our vocational training portfolio, and sharing more stories from the students and institutions we work with.",
        ],
      },
    ],
    audience: [
      { icon: "graduation-cap", title: "Students", text: "Seeking structured progression routes into globally recognised education programs." },
      { icon: "briefcase", title: "Professionals", text: "Looking for international learning and professional development opportunities." },
      { icon: "book-open", title: "Educational institutions", text: "Collaborating to create pathways aligned with international standards." },
    ],
    faqGroup: "Pathway Programs",
    reviewName: "Anjali Mehta",
    seo: {
      title: "Pathway Programs | META",
      description:
        "META pathway programs connect students and professionals with international learning through partnerships with institutions such as Baxter and AApoly.",
    },
  },
  {
    slug: "vocational-training",
    cardTitle: "Specialised Vocational Training",
    cardText:
      "Delivering Patissier and Commercial Cookery programs in India through our partnership with reputed training institutes across India, with more skill-focused programs to come.",
    title: "Specialised Vocational Training",
    icon: "chef-hat",
    image: images.chefTrainees,
    gallery: [images.culinaryStudents, images.studentsClassroom],
    tags: ["Patissier", "Commercial Cookery", "In partnership with IBCA", "Delivered in India", "More programs to come"],
    body: [
      "META delivers specialised vocational training programs focused on practical skills, industry readiness, and international career alignment. Our training approach combines hands-on learning, professional development, and globally relevant standards to prepare learners for real-world opportunities.",
      "In partnership with IBCA, META currently offers Patissier and Commercial Cookery programs in India, designed to equip aspiring professionals with technical expertise and industry-oriented training. As we continue to grow, additional skill-focused programs across multiple sectors will be introduced to support the changing needs of global industries and workforce demands.",
      "Our vocational training programs are developed to create confident, capable, and career-ready professionals who can compete successfully in both domestic and international environments. At META, we believe vocational education is not just about learning a skill — it is about creating sustainable career opportunities and empowering individuals for long-term success.",
    ],
    details: [
      {
        heading: "From Indian kitchens to global careers",
        paragraphs: [
          "Hospitality has quietly become one of the most reliable global skill exports of the last decade. Hotels, restaurants, cruise lines, and resorts across Australia, the Middle East, Europe, and North America are short on trained chefs — particularly pastry chefs and commercial cooks with strong technical foundations. For ambitious young Indians with the right training, that gap is an opportunity.",
          "It’s also why META, in partnership with IBCA, delivers Patissier and Commercial Cookery programs in India: to prepare the next generation of culinary professionals not just to work, but to compete internationally.",
        ],
        points: [
          { icon: "cake", title: "Patissier", text: "Delivered in India in partnership with IBCA." },
          { icon: "utensils", title: "Commercial Cookery", text: "Delivered in India in partnership with IBCA." },
        ],
      },
      {
        heading: "The global shortage is real",
        paragraphs: [
          "You don’t have to look hard to find the numbers. Hospitality industry reports from Australia, the UK, Canada, and the Gulf states have flagged persistent skilled chef shortages for years. Pastry, in particular, is a specialised craft that struggles to attract domestic trainees in many Western markets — opening clear pathways for trained international talent.",
          "What employers want, though, is not just willing workers. They want chefs who can step into a professional kitchen and perform to international standards: who understand food safety regulations, recipe scaling, allergen management, plating, and the rhythm of service. That’s where training quality becomes everything.",
        ],
        points: [
          { text: "Food safety regulations" },
          { text: "Recipe scaling" },
          { text: "Allergen management" },
          { text: "Plating" },
          { text: "The rhythm of service" },
        ],
      },
      {
        heading: "What makes a program internationally relevant",
        paragraphs: [
          "A vocational program is only as useful as the doors it opens. When the Patissier and Commercial Cookery programs were designed with IBCA, three things stayed at the centre of every decision — the same three things international employers consistently ask about:",
        ],
        points: [
          { icon: "chef-hat", title: "Practical hours", text: "Real time in real kitchens, working with real ingredients and real pressure. Theory alone doesn’t make a chef." },
          { icon: "globe", title: "Industry-aligned standards", text: "The techniques, terminology, and workflows taught are aligned with what international kitchens actually use — not a parallel system that has to be relearned on arrival." },
          { icon: "route", title: "Pathway clarity", text: "Students finish the program knowing what their next steps could look like: further qualifications, skill assessments, employer sponsorship, or direct application to international roles." },
        ],
      },
      {
        heading: "More than a qualification",
        paragraphs: [
          "The students we work with aren’t just looking for a certificate. They’re looking for a career that lets them build a life — often, the first person in their family to consider working abroad. That’s a serious decision, and it deserves serious training.",
          "It also deserves honest guidance. Not every student is suited to international hospitality, and not every program leads where it claims to lead. We talk openly with applicants about what the work involves, what the lifestyle demands, and what the realistic timelines look like. The ones who choose to commit do so with their eyes open — and they’re the ones who tend to succeed.",
        ],
      },
      {
        heading: "What’s next for META’s vocational programs",
        paragraphs: [
          "Patisserie and Commercial Cookery are the start. Over the coming year, we’ll be expanding into other skill areas where international demand is strong and Indian talent is ready to meet it. If you’re a student, a parent, or a training partner curious about what’s coming, get in touch — we’d love to talk.",
        ],
      },
    ],
    quote: "Not just to work, but to compete internationally.",
    audience: [
      { icon: "chef-hat", title: "Aspiring culinary professionals", text: "Ready for technical expertise and industry-oriented training." },
      { icon: "graduation-cap", title: "Students & parents", text: "Curious about international hospitality careers — often the first in the family to consider working abroad." },
      { icon: "handshake", title: "Training partners", text: "Interested in what’s coming next as META expands into other skill areas." },
    ],
    faqGroup: "Vocational Training",
    reviewName: "Priya R.",
    seo: {
      title: "Specialised Vocational Training — Patissier & Commercial Cookery | META",
      description:
        "In partnership with IBCA, META offers Patissier and Commercial Cookery programs in India — practical hours, industry-aligned standards and pathway clarity.",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
