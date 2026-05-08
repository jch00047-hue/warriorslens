// src/data/mock.js

// Warriors Lens portfolio data
// Imagery sourced from the existing Wix portfolio + DVIDS public portfolio (storyteller ID 1685082)

// Public folder helpers
const pershing = (file) =>
  `${process.env.PUBLIC_URL}/pershing/${file}`;

const chargers = (file) =>
  `${process.env.PUBLIC_URL}/chargers-2021/${file}`;


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
    pershing("F64A1072.jpg"),
    pershing("F64A1079.jpg"),
    pershing("F64A1080.jpg"),
    pershing("F64A1101.jpg"),
    pershing("F64A1104.jpg"),
    pershing("F64A1113.jpg"),
    pershing("F64A1117.jpg"),
    pershing("F64A1133.jpg"),
    pershing("F64A1189.jpg"),
    pershing("F64A1190.jpg"),
    pershing("F64A1207.jpg"),
    pershing("F64A1214.jpg"),
    pershing("F64A1220.jpg"),
    pershing("F64A1225.jpg"),
    pershing("F64A1226.jpg"),
    pershing("F64A1230.jpg"),

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
  hero: pershing("F64A1072.jpg")
};


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
export const POSTS = [
  {
    slug: "trading-steel-for-carbon-mirrorless-transition",
    title: "Trading Steel for Carbon: Jumping From the 5D Mark III to Mirrorless",
    date: "2026-04-29",
    category: "Gear Review",
    dek: "A combat camera / PA specialist talks through retiring a Canon 5D Mark III, flirting with a GH5 II, and eyeing a modern full-frame workhorse.",
    image: `${process.env.PUBLIC_URL}/uploads/5d-mark-iv-after-a-really-muddy-cave-trip-and-after-v0-u5tp2qa5tafa1.jpg`,
    caption: "",
    paragraphs: [
      "For years, my workhorse was a Canon 5D Mark III with a rotating cast of lenses and a few weird vintage primes that somehow kept ending up in my bag. It covered volunteer work, unit events, and a lot of life in between without complaining.",
      "But mirrorless is no longer a fad. It is the new baseline for hybrid shooters, and even a stubborn camera nerd and combat camera / PA specialist has to adapt. This post kicks off a series on Warriors Lens about what it really looks like to move from an old DSLR legend into the modern mirrorless world.",
      "The 5D Mark III still earns its respect. It delivers clean files, that classic full-frame look, and a rugged body that takes field conditions in stride. Paired with a 58 mm vintage Japanese prime—soft wide open, wild character, and beautiful bokeh—it turned routine coverage into a chance to be more intentional and artistic.",
      "Where it struggles is exactly where today’s missions are headed: hybrid work. The autofocus and codecs feel dated for modern video, and the workflow lags behind what newer mirrorless bodies offer for fast PA turnaround and DVIDS-ready content. That is what pushed me to experiment with a very different path: Micro Four Thirds and the Panasonic GH5 II.",
      "On paper, the GH5 II is almost the opposite of the 5D Mark III. The sensor is smaller, depth of field is not as shallow, but the stabilization, video tools, and all-day carry weight are built for real-world hybrid shooters. In the field, it gives me lighter gear, better handheld footage, and more modern video features without feeling fragile.",
      "At the same time, full-frame still calls my name. Cameras like the Canon R6 II, Nikon Z6 III, and Panasonic S5 II keep popping up as capable, weather-sealed hybrids with strong low-light performance and fast autofocus. They look like true successors to what the 5D Mark III did for stills, while finally taking video seriously.",
      "Right now, I am in the middle of that decision space. Do I fully embrace Micro Four Thirds for practicality and stabilization, or trade my 5D Mark III kit through Adorama and jump into a modern full-frame mirrorless system with one solid 24–105-style zoom? This series will document that process honestly—what I gain, what I lose, and what actually matters in the field.",
      "If you are another camera nerd, a military shooter, or someone stuck between your old DSLR and the mirrorless world, I want these posts to feel like a realistic, boots-on-the-ground review. No sponsored unboxings, just real gear decisions from someone who has to live with the consequences on mission and at home."
    ],
    references: [
      { text: "Adorama — Sell Your Used Gear", url: "https://www.adorama.com/sell-your-used-gear" },
      { text: "Adorama — Trade Used Cameras, Lenses, Video Equipment & Get Cash", url: "https://www.adorama.com/g/sell-your-used-gear-abs" },
      { text: "Adorama — Buying & Selling Used", url: "https://www.adorama.com/help/usedMarketplace" },
      { text: "Amateur Photographer — The Best Full Frame Mirrorless Cameras in 2026", url: "https://amateurphotographer.com/buying-advice/best-full-frame-mirrorless-cameras/" },
      { text: "Photography Life — The Best Mirrorless Cameras of 2026", url: "https://photographylife.com/best-mirrorless-camera" }
    ]
  }
];

export const COURSEWORK = {
  eyebrow: "Academic / WVU IMC",
  title: "Accelerated BS+MS Coursework",
  subtitle: "Strategy, branded content, and applied social media.",
  body:
    "Selected work from my accelerated B.S.+M.S. (4+1) in Integrated Marketing Communications at West Virginia University—currently completing the undergraduate phase, with shared 400-level courses already feeding the graduate track. The portfolio spans social media strategy, branded content & narrative, applied social media, and AR/VR—with case studies grounded in real organizations and IPs (55th Public Affairs Company, Randy's Army Navy, Escape from Tarkov, Rainbow Six Siege, Salesforce x MrBeast, IKEA Place).",
  courses: [
    { code: "JRL 432", title: "Social Media Strategy", instructor: "Jeri Knowlton" },
    { code: "JRL 433", title: "Social Media Application & Journalism", instructor: "Kelly Greathouse" },
    { code: "MDIA 438", title: "Branded Content & Narrative", instructor: "Michael DeLong" },
    { code: "MDIA 348", title: "Branded Content (Foundational)", instructor: "Michael DeLong" }
  ],
  filters: ["All", "Strategy", "Branded Content", "Social Media", "AR / VR", "Extra Credit"],
  items: [
    {
      id: "jrl432-u12",
      tag: "Strategy",
      course: "JRL 432",
      unit: "Unit 12",
      title: "55th Public Affairs Company — Social Strategy",
      summary:
        "Six-month integrated social plan for the 55th PAC during its rebrand from a Combat Camera signal unit to a public-affairs mission set. SWOT, audience laddering, OPSEC review, and a content cadence built around real Combat Camera assets.",
      file: "files/JRL432_Unit12_55thPAC-SocialStrategy.docx",
      year: "2026"
    },
    {
      id: "jrl432-u8",
      tag: "Strategy",
      course: "JRL 432",
      unit: "Unit 8",
      title: "Randy's Army Navy — Social Audit",
      summary:
        "Audit and growth strategy for a veteran-owned military surplus shop near Fort Meade. Channel mix recommendations, content pillars, and a 90-day calendar focused on the military / first-responder community.",
      file: "files/JRL432_Unit8_RandysArmyNavy-SocialAudit.docx",
      year: "2026"
    },
    {
      id: "jrl432-ec",
      tag: "Extra Credit",
      course: "JRL 432",
      unit: "Extra Credit",
      title: "AI Tools for Social Media Managers",
      summary:
        "Critical look at how generative AI—ChatGPT, image models, and analytics copilots—are reshaping the day-to-day of social media practitioners, with guardrails for ethics and disclosure.",
      file: "files/JRL432_ExtraCredit_AI-SocialMedia.docx",
      year: "2026"
    },
    {
      id: "jrl433-u7",
      tag: "Social Media",
      course: "JRL 433",
      unit: "Unit 7",
      title: "Live Sports & Second-Screen Behavior",
      summary:
        "Analysis of mobile / second-screen engagement during live sports and recommendations for sports brands building real-time social activations alongside the broadcast.",
      file: "files/JRL433_Unit7_LiveSports-SecondScreen.docx",
      year: "2026"
    },
    {
      id: "jrl433-u9",
      tag: "Social Media",
      course: "JRL 433",
      unit: "Unit 9",
      title: "User-Generated Content for Hardware Brands",
      summary:
        "How gaming peripheral and PC hardware companies (Razer, Logitech, NZXT) can systematize creator UGC and citizen reporting into editorial pipelines without losing brand voice.",
      file: "files/JRL433_Unit9_UGC-Hardware.docx",
      year: "2026"
    },
    {
      id: "jrl433-u11",
      tag: "Social Media",
      course: "JRL 433",
      unit: "Unit 11",
      title: "Rainbow Six Siege — Esports Community",
      summary:
        "Case study of Ubisoft's Rainbow Six Siege esports ecosystem: operator-based meta, community programs, and how editorial / livestream content reinforces a deeply invested player base.",
      file: "files/JRL433_Unit11_RainbowSix-Esports.docx",
      year: "2026"
    },
    {
      id: "mdia438-u8",
      tag: "Branded Content",
      course: "MDIA 438",
      unit: "Unit 8",
      title: "Escape from Tarkov — Promotion Plan",
      summary:
        "Owned, earned, and paid promotion targeting hardcore FPS / extraction-shooter players ages 18–34 in NA & EU. Channel-by-channel narrative around Tarkov's high-stakes loop.",
      file: "files/MDIA438_Unit8_EscapeFromTarkov-Promotion.docx",
      year: "2026"
    },
    {
      id: "mdia438-u10",
      tag: "Branded Content",
      course: "MDIA 438",
      unit: "Unit 10",
      title: "Tarkov — Launch Trailer Breakdown",
      summary:
        "Shot-by-shot read of the Escape from Tarkov v1.0 storyline launch trailer as a marketing artifact—cinematic conventions, audience targeting, and how it sets up post-launch CRM.",
      file: "files/MDIA438_Unit10_Tarkov-LaunchTrailer.docx",
      year: "2026"
    },
    {
      id: "mdia438-u12",
      tag: "Branded Content",
      course: "MDIA 438",
      unit: "Unit 12",
      title: "Tarkov — Six-Month Campaign Deck",
      summary:
        "Full presentation deck (PPTX) defining success metrics and measurement tools for a six-month owned, paid, and earned media plan around Escape from Tarkov.",
      file: "files/MDIA438_Unit12_Tarkov-CampaignDeck.pptx",
      year: "2026"
    },
    {
      id: "mdia348-ec",
      tag: "Extra Credit",
      course: "MDIA 348",
      unit: "Extra Credit",
      title: "Salesforce x MrBeast — Super Bowl LX",
      summary:
        "Analysis of 'The Vault'—Salesforce's Super Bowl LX collaboration with MrBeast—as a model of branded content that uses live broadcast as a launchpad for an owned media flywheel.",
      file: "files/MDIA348_ExtraCredit_Salesforce-MrBeast.docx",
      year: "2026"
    },
    {
      id: "u9-arvr",
      tag: "AR / VR",
      course: "JRL 433",
      unit: "Unit 9 (AR/VR)",
      title: "AR / VR in Brand Experience — IKEA Place",
      summary:
        "How AR (IKEA Place) and VR are reshaping retail and consumer marketing—trade-offs between novelty, utility, and conversion lift.",
      file: "files/Unit9_AR-VR-IKEA.docx",
      year: "2026"
    }
  ]
};

export const PRESS = {
  eyebrow: "Press / Features",
  title: "Coverage & External Use",
  subtitle: "Selected publications, official releases, and outlets featuring imagery or credited work.",
  items: [
    {
      title: "CRDAMC Wraps Up Joint Emergency Medicine Exercise",
      publication: "Carl R. Darnall Army Medical Center",
      date: "2025-06",
      summary: "Official article on JEMX-25 exercise using Hernandez medical training photos.",
      url: "https://darnall.tricare.mil/News-Gallery/Articles/Article/4220131/crdamc-wraps-up-joint-emergency-medicine-exercise-testing-austere-environment-s"
    },
    {
      title: "Pentagon Announces Syria Force Consolidation Under Operation Inherent Resolve",
      publication: "Homeland Security Today",
      date: "2025-04-18",
      summary: "Coverage of Syria force consolidation under CJTF–OIR using Hernandez imagery.",
      url: "https://www.hstoday.us/subject-matter-areas/counterterrorism/pentagon-announces-syria-force-consolidation-under-operation-inherent-resolve/"
    },
    {
      title: "What to Expect in the Next Iteration of MREs",
      publication: "Joint Base San Antonio",
      date: "2025",
      summary: "Feature on next-gen MREs using Hernandez photo of rucksack with rations.",
      url: "https://www.jbsa.mil/News/News/Article/4314106/what-to-expect-in-the-next-iteration-of-mres/"
    },
    {
      title: "US, Gulf Nations Officials Discuss Regional Threats and Counter Capabilities",
      publication: "IR-IA News",
      date: "2024-02-13",
      summary: "Regional defense story tied to GCC working group meetings and defense integration coverage.",
      url: "https://www.ir-ia.com/news/us-gulf-nations-officials-discuss-regional-threats-and-counter-capabilities/"
    },
    {
      title: "Troops in Iraq, Syria Had Close Calls With Militia Attacks",
      publication: "Military Times",
      date: "2024-03-07",
      summary: "Military Times feature using CENTCOM/OIR-related imagery in coverage of militia attacks.",
      url: "https://www.militarytimes.com/news/your-military/2024/03/07/troops-in-iraq-syria-had-close-calls-with-militia-attacks/"
    },
    {
      title: "PATFORSWA Change-of-Command Ceremony",
      publication: "U.S. Coast Guard News",
      date: "2024-06-18",
      summary: "Official Coast Guard news record using Hernandez Bahrain change-of-command photo.",
      url: "https://www.news.uscg.mil/Doing-Business/Photos/igphoto/2003491130/"
    },
    {
      title: "Inspired Union 24",
      publication: "U.S. Navy",
      date: "2024-04-29",
      summary: "Official U.S. Navy photo gallery record featuring Hernandez imagery.",
      url: "https://www.navy.mil/Resources/Photo-Gallery/igphoto/2003455849/"
    },
    {
      title: "Coalition Welcomes New Command Team",
      publication: "CJTF-OIR",
      date: "2022-09-10",
      summary: "Official release on the CJTF–OIR command transfer ceremony featuring Hernandez photo of Gen. Kurilla.",
      url: "https://www.inherentresolve.mil/NEWSROOM/SOJTF-Releases/Article/3154425/coalition-welcomes-new-command-team/"
    }
  ]
};

export const IMC_SECTION = {
  eyebrow: "IMC Strategy & Campaigns",
  kicker: "WVU — Integrated Marketing Communications",
  intro:
    "Three applied IMC campaigns from coursework in WVU's accelerated B.S.+M.S. program—translating audience research, brand positioning, and visual storytelling into deployable strategy, plus a featured field essay on what military photography actually does for the public record.",
  campaigns: [
    {
      code: "01",
      course: "JRL 433 — Integrated Marketing Communications",
      title: "Escape from Tarkov — IMC Launch Strategy",
      objective:
        "Develop a full-scale IMC launch strategy for Escape from Tarkov targeting the hardcore tactical shooter segment—military veterans, hardcore gamers (18–34), and tactical-sim enthusiasts.",
      pillars: ["Realism.", "Tension.", "Mastery."],
      deliverables: [
        "Market research & competitive analysis vs. Call of Duty and Arma III",
        "Brand positioning as the authentic tactical experience",
        "Multi-channel architecture across Twitch, YouTube, Reddit, Meta, Google",
        "Unified IMC message map applied to every touchpoint",
        "$500K hypothetical media plan with channel-level ROI projections"
      ],
      outcome:
        "Demonstrates the ability to translate complex audience insights into a cohesive brand narrative that drives both community engagement and conversion."
    },
    {
      code: "02",
      course: "JRL 432 — Marketing Research & Consumer Behavior",
      title: "Consumer Profile & Audience Segmentation",
      objective:
        "Build a comprehensive consumer profile and segmentation framework to identify high-value target markets for strategic communication planning.",
      pillars: ["Research.", "Segment.", "Activate."],
      deliverables: [
        "Primary research design — surveys and interview protocols",
        "VALS-based psychographic & behavioral profiling",
        "Three fully realized consumer personas",
        "Consumer journey maps and segmentation matrices",
        "Cross-platform media behavior analysis informing channel selection"
      ],
      outcome:
        "Demonstrates expertise in transforming raw market intelligence into actionable audience insights that drive targeted, resonant communication."
    },
    {
      code: "03",
      course: "MDIA 438 — Media Strategy & Production",
      title: "Media Strategy & Visual Storytelling Production",
      objective:
        "Develop and execute a comprehensive media production strategy integrating visual storytelling with strategic communication objectives for military and public-affairs audiences.",
      pillars: ["Plan.", "Produce.", "Distribute."],
      deliverables: [
        "Pre-production packages — shot lists, storyboards, schedules",
        "Scripted, shot, and edited video assignments",
        "Public Affairs doctrine applied to civilian media strategy",
        "Platform-specific cuts — YouTube, Reels, broadcast",
        "Content calendar & distribution framework end-to-end"
      ],
      outcome:
        "Bridges field-tested visual documentation—OIR, NAVCENT, and JEMX coverage—with academic media strategy. Military experience is a strategic advantage, not a backstory."
    }
  ],
  advantage: {
    title: "The Warrior Communicator Advantage",
    body:
      "SSG Julio C. Hernandez is not a photographer who learned marketing. He is a non-commissioned officer with 13 years of service—seven of them as a Military Police Soldier before reclassifying into Combat Documentation and Public Affairs. Every campaign in this portfolio reflects a core truth: the most powerful brand stories are built on authentic experience, disciplined research, and mission-focused execution.",
    cta:
      "Available for freelance contracts, consulting engagements, and full-time strategic communications roles."
  }
};