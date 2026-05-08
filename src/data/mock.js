// src/data/mock.js

// Pershing / Creating Smiles local assets (JPG masters)
import ph1072 from "../../assets/pershing/F64A1072.jpg";
import ph1079 from "../../assets/pershing/F64A1079.jpg";
import ph1080 from "../../assets/pershing/F64A1080.jpg";
import ph1101 from "../../assets/pershing/F64A1101.jpg";
import ph1104 from "../../assets/pershing/F64A1104.jpg";
import ph1113 from "../../assets/pershing/F64A1113.jpg";
import ph1117 from "../../assets/pershing/F64A1117.jpg";
import ph1133 from "../../assets/pershing/F64A1133.jpg";
import ph1189 from "../../assets/pershing/F64A1189.jpg";
import ph1190 from "../../assets/pershing/F64A1190.jpg";
import ph1207 from "../../assets/pershing/F64A1207.jpg";
import ph1214 from "../../assets/pershing/F64A1214.jpg";
import ph1220 from "../../assets/pershing/F64A1220.jpg";
import ph1225 from "../../assets/pershing/F64A1225.jpg";
import ph1226 from "../../assets/pershing/F64A1226.jpg";
import ph1230 from "../../assets/pershing/F64A1230.jpg";

// Warriors Lens portfolio data
// Imagery sourced from the existing Wix portfolio + DVIDS public portfolio (storyteller ID 1685082)

export const SITE = {
  brand: "Warriors Lens",
  owner: "Julio C. Hernandez",
  rank: "SSG",
  branch: "U.S. Army",
  role: "Combat Photographer & Public Affairs Specialist",
  tagline: "Mission-focused operational visual narratives.",
  location: "Fort Meade, MD — 55th Combat Camera",
  email: "juliochernandez18@gmail.com",
  emailMil: "julio.c.hernandez45.mil@army.mil",
  socials: {
    linkedin: "https://www.linkedin.com/in/julio-hernandez-634229282",
    dvids: "https://www.dvidshub.net/portfolio/1685082/julio-hernandez"
  }
};

export const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "volunteer", label: "Volunteer" },
  { id: "chargers", label: "Chargers 2021" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const HERO_STATS = [
  { value: "13+", label: "Years In Service" },
  { value: "2", label: "Deployments" },
  { value: "Multi", label: "TDY Missions" },
  { value: "456", label: "DVIDS Assets" }
];

export const HERO_IMAGE =
  "https://static.wixstatic.com/media/9f2b42_4f77d2e9c6ac4c5c9bffb37e106d3ab3~mv2.jpg/v1/fill/w_1905,h_900,fp_0.50_0.50,q_90,enc_avif,quality_auto/hero.jpg";

export const PORTRAIT_IMAGE =
  "https://static.wixstatic.com/media/9f2b42_026831cb883e4b079dfb509cf68bfd81~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/portrait.jpg";

export const ABOUT = {
  eyebrow: "About",
  heading: "From patrol leader to combat camera — telling the Army’s story.",
  body: [
    "I am Staff Sgt. Julio C. Hernandez, U.S. Army. I enlisted in March 2013 as a Military Police Soldier, beginning my career at Fort Polk (now Fort Johnson), Louisiana, in roles from assistant gunner to senior patrol officer and team leader.",
    "I served in Korea in 2016 as a patrol and radiotelephone operator, then at Fort Bliss, Texas, leading patrol teams. In 2018 I mobilized to the southern border in support of national defense operations — the experience that sharpened my eye for documentation in the field.",
    "In 2020 I realigned with my real passion: visual storytelling. I attended the Mass Communications Foundations Course and the Graphic Design Course at DINFOS, then joined the 55th Signal Company (Combat Camera) at Fort Meade as a squad leader and Visual Information Specialist.",
    "I deployed to Iraq and Syria as Combat Camera Team Lead for CJTF–Operation Inherent Resolve, and most recently served as Combat Camera Team Lead for Navy Central Command (NAVCENT) Public Affairs across joint and multinational operations. Now reclassified as a Public Affairs Specialist, I’m completing my B.S. in Integrated Marketing Communications at West Virginia University."
  ],
  highlights: [
    "Combat Camera Team Lead — CJTF–OIR",
    "Combat Camera Team Lead — NAVCENT PA",
    "55th Signal Company (Combat Camera)",
    "DINFOS — Mass Comm & Graphic Design"
  ]
};

export const CATEGORIES = ["All", "Combat Camera", "Joint Ops", "Maritime", "Training", "Portrait"];

const D = (yymm, id) =>
  `https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/${yymm}/${id}/600x375_q95.jpg`;

export const PROJECTS = [
  {
    id: "p1",
    title: "Operation Inherent Resolve",
    category: "Combat Camera",
    location: "Iraq / Syria",
    year: "2022–23",
    span: "col-span-2 row-span-2",
    src: "https://static.wixstatic.com/media/9f2b42_a99c89243e07420ca7bbfb9570d0c0bc~mv2.jpg/v1/fit/w_1600,h_1067,q_90,enc_avif,quality_auto/p1.jpg"
  },
  {
    id: "p2",
    title: "JEMX–25 Joint Medical Exercise",
    category: "Joint Ops",
    location: "U.S. 5th Fleet AOR",
    year: "2025",
    span: "",
    src: D("2506", "9104995")
  },
  {
    id: "p3",
    title: "Realistic Medic Scenarios",
    category: "Joint Ops",
    location: "JEMX–25",
    year: "2025",
    span: "",
    src: D("2506", "9101672")
  },
  {
    id: "p4",
    title: "Tactical Lanes Training",
    category: "Training",
    location: "JEMX–25",
    year: "2025",
    span: "",
    src: D("2506", "9098581")
  },
  {
    id: "p5",
    title: "Joint Air-Lift Operations",
    category: "Joint Ops",
    location: "JEMX–25",
    year: "2025",
    span: "row-span-2",
    src: D("2506", "9095523")
  },
  {
    id: "p6",
    title: "Water Survival Training",
    category: "Maritime",
    location: "PATFORSWA, SW Asia",
    year: "2024",
    span: "",
    src: D("2407", "8560553")
  },
  {
    id: "p7",
    title: "FASTCENT TCCC Training",
    category: "Training",
    location: "5th Fleet AOR",
    year: "2024",
    span: "col-span-2",
    src: D("2407", "8555578")
  },
  {
    id: "p8",
    title: "VBSS — Pakistan Navy",
    category: "Maritime",
    location: "NAVCENT",
    year: "2024",
    span: "",
    src: D("2408", "8562887")
  },
  {
    id: "p9",
    title: "USCGC Glen Harris — Pyrotechnics",
    category: "Maritime",
    location: "5th Fleet AOR",
    year: "2024",
    span: "",
    src: D("2407", "8542442")
  },
  {
    id: "p10",
    title: "Trilateral Exercise — Iraq & Kuwait",
    category: "Joint Ops",
    location: "5th Fleet AOR",
    year: "2024",
    span: "col-span-2",
    src: D("2407", "8542416")
  },
  {
    id: "p11",
    title: "Egypt Assumes CTF–154 Command",
    category: "Joint Ops",
    location: "Combined Maritime Forces",
    year: "2024",
    span: "",
    src: D("2407", "8513141")
  },
  {
    id: "p12",
    title: "Compass Rose III — Day Four",
    category: "Maritime",
    location: "5th Fleet AOR",
    year: "2024",
    span: "",
    src: D("2406", "8482806")
  },
  {
    id: "p13",
    title: "Inspired Union 2024",
    category: "Joint Ops",
    location: "NAVCENT",
    year: "2024",
    span: "",
    src: D("2405", "8382302")
  },
  {
    id: "p14",
    title: "ANZAC Day — NSA Bahrain",
    category: "Portrait",
    location: "Bahrain",
    year: "2024",
    span: "",
    src: D("2404", "8362019")
  },
  {
    id: "p15",
    title: "Coalition Fire Support",
    category: "Combat Camera",
    location: "CJTF–OIR",
    year: "2023",
    span: "",
    src: "https://static.wixstatic.com/media/9f2b42_deee7915d9fe4618b5227abd0eb9f767~mv2.jpg/v1/fit/w_1200,h_675,q_90,enc_avif,quality_auto/p2.jpg"
  },
  {
    id: "p16",
    title: "Rotary Wing Insertion",
    category: "Combat Camera",
    location: "CENTCOM AOR",
    year: "2022",
    span: "col-span-2",
    src: "https://static.wixstatic.com/media/9f2b42_a584f74a975a4fdf9469e44583330604~mv2.jpg/v1/fit/w_1600,h_900,q_90,enc_avif,quality_auto/p7.jpg"
  },
  {
    id: "p17",
    title: "Operator Portrait",
    category: "Portrait",
    location: "FOB Union III",
    year: "2023",
    span: "",
    src: "https://static.wixstatic.com/media/9f2b42_1518e55d8b89412ca02ad972c2987b0e~mv2.jpg/v1/fit/w_1200,h_1588,q_90,enc_avif,quality_auto/p5.jpg"
  },
  {
    id: "p18",
    title: "After Action",
    category: "Portrait",
    location: "Iraq",
    year: "2022",
    span: "",
    src: "https://static.wixstatic.com/media/9f2b42_b3735c6af77841aa954ca8f5b5d9fecb~mv2.jpg/v1/fit/w_1200,h_800,q_90,enc_avif,quality_auto/p11.jpg"
  },
  {
    id: "p19",
    title: "Leadership In Focus — The Platoon Sergeant",
    category: "Portrait",
    location: "Fort Meade, MD",
    year: "2024",
    span: "",
    src: "https://static.wixstatic.com/media/9f2b42_e3850b3ff46045bda5fb835bf1b4eba1~mv2.jpg/v1/fit/w_1200,h_1200,q_90,enc_avif,quality_auto/p19.jpg"
  },
  {
    id: "p20",
    title: "Deployed Designs — Unit Graphics",
    category: "Combat Camera",
    location: "CJTF–OIR",
    year: "2023",
    span: "",
    src: "https://static.wixstatic.com/media/9f2b42_3413648e57ab4e05963081c4aef41184~mv2.png/v1/fit/w_1200,h_1200,q_90,enc_avif,quality_auto/p20.png"
  }
];

export const CAPABILITIES = [
  {
    code: "01",
    title: "Combat Camera",
    desc: "Documenting kinetic and contingency operations across austere environments — imagery that supports commander’s intent and the historical record.",
    items: ["Operational documentation", "Aerial / rotary platforms", "Low-light & night ops", "Embedded coverage"]
  },
  {
    code: "02",
    title: "Public Affairs",
    desc: "Strategic visual storytelling aligned with theater-level themes and messages — from coalition coverage to media engagements.",
    items: ["Theater messaging", "Press / engagement support", "Joint & multinational PA", "Crisis communications"]
  },
  {
    code: "03",
    title: "Multimedia & IMC",
    desc: "Integrated Marketing Communications applied to military storytelling — cohesive campaigns across photo, video, and graphic deliverables.",
    items: ["Video production", "Motion graphics", "Print & digital design", "Campaign strategy"]
  },
  {
    code: "04",
    title: "Portraiture",
    desc: "Editorial-grade portraits of Soldiers, leaders, and units — capturing readiness, resilience, and the human dimension of military service.",
    items: ["Command portraits", "Unit identity", "Editorial features", "Recruitment imagery"]
  }
];

export const EXPERIENCE = [
  {
    year: "2024 — 2025",
    role: "Combat Camera Team Lead, NAVCENT PA",
    org: "Navy Central Command — Public Affairs",
    location: "Bahrain / 5th Fleet AOR",
    body: "Led joint Combat Camera support across Army, Navy, and Air Force PA elements. Documented multinational maritime operations, exercises, and command-level engagements throughout the Combined Maritime Forces AOR."
  },
  {
    year: "2022 — 2023",
    role: "Combat Camera Team Lead, CJTF–OIR",
    org: "Combined Joint Task Force — Operation Inherent Resolve",
    location: "Iraq / Syria",
    body: "Led Combat Camera teams in support of theater-level Public Affairs themes and messages. Planned and executed visual documentation aligned with operational objectives and coalition messaging."
  },
  {
    year: "2021 — 2022",
    role: "Squad Leader / Visual Information Specialist",
    org: "55th Signal Company (Combat Camera), Fort Meade",
    location: "Fort Meade, MD",
    body: "Led a Combat Camera squad and served as company Webmaster — redesigned the AFPIMS site, streamlined mission support, and supported JPMRC 1–22 in Honolulu, Hawaii. Graduated the Advanced Leadership Course as a fully qualified VI Specialist."
  },
  {
    year: "2020",
    role: "Realignment — DINFOS",
    org: "Defense Information School",
    location: "Fort Meade, MD",
    body: "Completed the Mass Communications Foundations Course and the Graphic Design Course — transitioning from law enforcement to visual communications and strategic messaging."
  },
  {
    year: "2018",
    role: "MP Mobilization — Southern Border",
    org: "U.S. Army Military Police",
    location: "U.S. Southern Border",
    body: "Mobilized in support of national defense operations along the southern border. Augmented patrol and force-protection missions — the assignment that sharpened my eye for documentation under pressure."
  },
  {
    year: "2017 — 2019",
    role: "Patrol Team Leader / Supervisor (31B)",
    org: "U.S. Army — Fort Bliss",
    location: "El Paso, TX",
    body: "Led patrol teams and served as patrol supervisor. Conducted multiple TDY missions supporting law-enforcement and force-protection operations across CONUS."
  },
  {
    year: "2016",
    role: "Patrol & RTO Operator (31B)",
    org: "U.S. Army — Korea",
    location: "Republic of Korea",
    body: "Served as patrol and radiotelephone operator on the peninsula. Foundational tour in joint security operations and tactical reporting."
  },
  {
    year: "2013 — 2016",
    role: "Military Police Soldier (31B)",
    org: "U.S. Army — Fort Polk (now Fort Johnson)",
    location: "Louisiana",
    body: "Enlisted March 2013. Served from assistant gunner to senior patrol officer and team leader — the discipline that still shapes how I work in the field today."
  }
];

const wix = (slug) =>
  `https://static.wixstatic.com/media/${slug}/v1/fit/w_1440,h_960,q_90,enc_avif,quality_auto/img.jpg`;

export const VOLUNTEER = {
  eyebrow: "Featured Project / Off-Duty",
  title: "Creating Smiles",
  subtitle: "A Project for Pursuing Hill Elementary",
  heading: "Lens for the <em>community.</em>",
  meta: [
    { k: "PROJECT TYPE", v: "Volunteer / School Interior Rebeautification" },
    { k: "DATE", v: "Aug — Sep 2025" },
    { k: "LOCATION", v: "Fort George G. Meade, MD" },
    { k: "ROLE", v: "Parent Volunteer Photographer" }
  ],
  body: [
    "As a dedicated parent volunteer, I support Pursuing Hill Elementary by documenting major school ceremonies and events. This was a special initiative to bring fresh, vibrant visuals to the school’s interior — working directly with the principal over two days to photograph and edit images that replaced outdated posters and rebeautified the school’s halls.",
    "All children featured were photographed with the explicit consent of their parents. The goal was to capture genuine smiles and cement those happy memories into the very halls they walk every day."
  ],
  stats: [
    { value: "2", label: "Days On Site" },
    { value: "30+", label: "Frames Curated" },
    { value: "1", label: "Principal Brief" },
    { value: "0", label: "Cost To School" }
  ],
  images: [
    ph1072,
    ph1079,
    ph1080,
    ph1101,
    ph1104,
    ph1113,
    ph1117,
    ph1133,
    ph1189,
    ph1190,
    ph1207,
    ph1214,
    ph1220,
    ph1225,
    ph1226,
    ph1230,

    wix("9f2b42_b241861028274ac193775a9481a9f544~mv2.jpg"),
    wix("9f2b42_9dd5671d4a7b49bcb1244d060f74b429~mv2.jpg"),
    wix("9f2b42_7c196c6008554e6e858469099607a7e6~mv2.jpg"),
    wix("9f2b42_61a8216861af4b83914ff27fbb392b83~mv2.jpg"),
    wix("9f2b42_c7342bfe404f488a9a5269235e59c4de~mv2.jpg"),
    wix("9f2b42_622deb46f2b2428287c4583ebf7ab10d~mv2.jpg"),
    wix("9f2b42_4849984c6173427fbb5215e74a2b66b1~mv2.jpg"),
    wix("9f2b42_376d5ce174d24f379c189700af1727ca~mv2.jpg"),
    wix("9f2b42_ad178b1ac4c543cc93130d66a63f1675~mv2.jpg"),
    wix("9f2b42_ac75c99264f2414e84ee4dc1bbe22b0b~mv2.jpg"),
    wix("9f2b42_977e00c8b64644c5a4d450ca8c0ebd07~mv2.jpg"),
    wix("9f2b42_3cddd0b4244d4abc8a2db5dcab85e815~mv2.jpg"),
    wix("9f2b42_a4f973beba5d49368bf1c9d4f367efba~mv2.jpg"),
    wix("9f2b42_9ece6a7988ec44c9a86c613c7704c9fa~mv2.jpg"),
    wix("9f2b42_3c210efb0a424187be9e9503ac627df5~mv2.jpg"),
    wix("9f2b42_64c7924c685947a1b3b65db5f6c4436a~mv2.jpg")
  ],
  hero: ph1072
};

const chargers = (file) =>
  `${process.env.PUBLIC_URL}/chargers-2021/${file}`;

export const CHARGERS = {
  eyebrow: "Featured Project / Off-Duty",
  title: "Chargers 2021",
  subtitle: "Personal Photography • FedExField",
  heading: "Game day through <em>my lens.</em>",
  meta: [
    { k: "PROJECT TYPE", v: "Personal Photography / Sports Documentary" },
    { k: "DATE", v: "September 2021" },
    { k: "LOCATION", v: "FedExField, Landover, MD" },
    { k: "ROLE", v: "Photographer" }
  ],
  body: [
    "September 2021 — FedExField, Landover, Maryland. I photographed the Chargers season opener against Washington, documenting the atmosphere, fan energy, and key moments from the game.",
    "This gallery captures the pace and emotion of NFL game day while keeping the same visual tone and storytelling style used throughout the rest of the portfolio."
  ],
  stats: [
    { value: "17", label: "Frames Curated" },
    { value: "1", label: "Season Opener" },
    { value: "NFL", label: "Game Day" },
    { value: "MD", label: "Landover" }
  ],
  images: [
    chargers("DSC_0414.jpg"),
    chargers("DSC_0415.jpg"),
    chargers("DSC_0430.jpg"),
    chargers("DSC_0443.jpg"),
    chargers("DSC_0486.jpg"),
    chargers("DSC_0498.jpg"),
    chargers("DSC_0613.jpg"),
    chargers("DSC_0697.jpg"),
    chargers("DSC_0712.jpg"),
    chargers("DSC_0729.jpg"),
    chargers("DSC_0746.jpg"),
    chargers("DSC_0756.jpg"),
    chargers("DSC_0769.jpg"),
    chargers("DSC_0805.jpg"),
    chargers("DSC_0848.jpg"),
    chargers("DSC_0964.jpg"),
    chargers("DSC_0998.jpg")
  ],
  hero: chargers("DSC_0414.jpg")
};

export const CLIENT_LOGOS = [
  "U.S. ARMY",
  "DEPT. OF DEFENSE",
  "CJTF–OIR",
  "NAVCENT",
  "55TH COMCAM",
  "DVIDS",
  "DINFOS",
  "PUBLIC AFFAIRS"
];