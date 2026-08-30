// ============================================================================
// ⚠ SAMPLE DATA FILE — REVIEW & CORRECT
// ----------------------------------------------------------------------------
// Every value below is PLACEHOLDER SAMPLE DATA chosen to demonstrate the site.
// The website renders exactly what is in this file. Replace each value with
// real AK Precision data, then search for "⚠ SAMPLE" to confirm nothing was
// missed. Remove the ⚠ marker comments when a value is finalized.
// ============================================================================

export const site = {
  company: "AK Precision Components",
  tagline: "Manufacturing. Software. Industrial Expertise.",
  contactEmail: "info@akprecision.com", // TODO: replace with real email
  contactPhone: "+91 98XXX XXXXX", // TODO: replace with real phone
  location: "Rudrapur, Uttarakhand, India",
  metaTitle:
    "AK Precision Components | Precision Manufacturing & Factory Software",
  metaDescription:
    "AK Precision Components combines precision manufacturing, factory software and an industrial partner network for manufacturers in Rudrapur, Pantnagar and beyond.",
};

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: "Precision Manufacturing",
  headline: [
    [{ text: "We make the parts.", color: "forest" }],
    [{ text: "We are building what", color: "deep-forest" }],
    [{ text: "makes factories better.", color: "sage-hero" }],
  ],
  cta: "Talk to AKPC",
  ctaHref: "/contact",
  ctaSecondary: "See What We Build",
  ctaSecondaryHref: "/manufacturing",
};

// ---------------------------------------------------------------------------
// HERO RIGHT PANEL — machining capabilities showcase
// ---------------------------------------------------------------------------
export const machiningCapabilities = {
  label: "Machining Capabilities",
  brand: "AK Precision Components",
  rows: [
    {
      tile: "CNC",
      gradient: "from-forest to-action-green",
      name: "JYOTI DX 200", // ⚠ SAMPLE — real machine
      type: "CNC Turning Center",
      line: "Max turning dia 200 mm · ±0.005 mm accuracy", // ⚠ SAMPLE — verify from datasheet
    },
    {
      tile: "VMC",
      gradient: "from-forest to-action-green",
      name: "ACE VMC 740 PRO", // ⚠ SAMPLE — real machine
      type: "Vertical Machining Center",
      line: "Table 800 × 500 mm · 4-axis capability", // ⚠ SAMPLE — verify from datasheet
    },
    {
      tile: "PC",
      gradient: "from-emerald-400 to-emerald-300",
      name: "Precision Components",
      type: "CNC + VMC Machining",
      line: "Production & custom components",
    },
  ],
  bottom: [
    { label: "CNC Turning", sub: "JYOTI DX 200" },
    { label: "VMC Machining", sub: "ACE VMC 740 PRO" },
    { label: "Precision Parts", sub: "CNC + VMC" },
  ],
};

// ---------------------------------------------------------------------------
// WHAT WE DO — section right after the hero
// ---------------------------------------------------------------------------
export const whatWeDo = {
  eyebrow: "What We Do",
  heading: "What We Do.",
  subhead:
    "We make the parts. We build the software. We connect the expertise. AKPC started with precision component manufacturing and is extending that experience into digital factory systems and an industrial partner network.",
  items: [
    {
      number: "01",
      title: "Manufacturing",
      desc: "Precision components produced through CNC turning, VMC machining and controlled inspection.",
      cta: "Explore",
      href: "/manufacturing",
    },
    {
      number: "02",
      title: "Factory Software",
      desc: "Digital systems for production, quality, maintenance, inspection and factory workflows.",
      cta: "Explore",
      href: "/software",
    },
    {
      number: "03",
      title: "Industrial Partner Network",
      desc: "Local technical support and specialized industrial expertise, connected through AKPC.",
      cta: "Explore",
      href: "/partner-network",
    },
    {
      number: "04",
      title: "AK Smart Factory Lite",
      desc: "Practical factory monitoring, traceability and production visibility for CNC and VMC machine shops.",
      cta: "Explore",
      href: "/smart-factory",
    },
  ],
  equation: {
    left: "Precision Manufacturing",
    plus: "+",
    right: "Factory Software",
    equals: "=",
    result: "One Engineering Partner",
  },
};

// ---------------------------------------------------------------------------
// WHAT WE DO SHOWCASE — interactive banner showcase below the What We Do grid
// ---------------------------------------------------------------------------
export const showcase = {
  eyebrow: "What We Do",
  heading: "Manufacturing. Factory software. Industrial partner network.",
  subhead:
    "Precision manufacturing, digital factory solutions and a growing industrial partner network — built around the problems factories face every day.",
  closing: {
    left: "Precision Manufacturing",
    plus: "+",
    right: "Factory Software",
    equals: "=",
    result: "One Engineering Partner",
  },
  slides: [
    {
      id: "manufacturing",
      label: "Manufacturing",
      title: "Precision Manufacturing",
      subtitle: "We make components for production environments where accuracy and repeatability matter.",
      image: "/images/banner-manufacturing.jpg",
      imageAlt: "Precision manufacturing at AK Precision Components",
      href: "/manufacturing",
      cta: "Explore Manufacturing",
    },
    {
      id: "software",
      label: "Factory Software",
      title: "Factory Software",
      subtitle: "We turn production, quality, maintenance and inspection workflows into connected digital systems.",
      image: "/images/banner-software.jpg",
      imageAlt: "AK Smart Factory Lite live production dashboard",
      href: "/software",
      cta: "Explore Software",
    },
    {
      id: "partner-network",
      label: "Industrial Partner Network",
      title: "Industrial Partner Network",
      subtitle: "Your equipment may come from somewhere else. Your service problem is happening here.",
      image: "/images/banner-partner-network.jpg",
      imageAlt: "AKPC industrial partner network and local service support",
      href: "/partner-network",
      cta: "Explore Network",
    },
  ],
};

// ---------------------------------------------------------------------------
// SOFTWARE PAGE
// ---------------------------------------------------------------------------
export const softwarePage = {
  hero: {
    eyebrow: "Factory Software",
    heading: [
      [{ text: "Your factory already produces", color: "" }],
      [{ text: "the data. The problem is", color: "" }],
      [{ text: "where that data goes.", color: "forest" }],
    ],
    subhead:
      "Production records, quality checks, maintenance logs, inspection readings and job information often live in different places. We build software that brings those workflows together around the way your factory actually works.",
    cta: "Talk to AKPC",
    ctaHref: "/contact",
    ctaSecondary: "See What We Build",
    ctaSecondaryHref: "#projects",
    image: "/images/dashboard.jpg",
    imageAlt: "AKPC factory software dashboard",
  },
  capabilities: {
    heading: "Software that fits your factory.",
    items: [
      {
        number: "01",
        title: "Production Management",
        desc: "Track jobs, production, targets and shop-floor progress in one place.",
      },
      {
        number: "02",
        title: "Inventory & Material Management",
        desc: "Know what material, component, tool and consumable is available, where it is and what needs attention.",
      },
      {
        number: "03",
        title: "Quality & Traceability",
        desc: "Record inspections, defects and production history without relying on disconnected paper records.",
      },
      {
        number: "04",
        title: "Maintenance Management",
        desc: "Keep machine history, preventive schedules, breakdowns and service records together.",
      },
      {
        number: "05",
        title: "Dashboards & Analytics",
        desc: "Turn operational data into information management can actually use.",
      },
      {
        number: "06",
        title: "Custom Factory Systems",
        desc: "When an existing system does not fit the workflow, we build around the workflow.",
      },
    ],
  },
  projects: {
    heading: "Built for real operations.",
    subhead:
      "Good factory software starts with understanding the work. We build systems around the processes people already follow, then make those processes easier to see, manage and improve.",
    items: [
      {
        title: "Production Management System",
        category: "Manufacturing · Web Application",
        desc: "End-to-end production tracking from job assignment to completion, with real-time shop floor visibility.",
      },
    ],
  },
  process: {
    heading: "From problem to production.",
    steps: [
      {
        number: "01",
        title: "Understand",
        desc: "Understand the workflow, the people using it and where information gets lost.",
      },
      {
        number: "02",
        title: "Design",
        desc: "Turn the actual process into a system that is clear and practical.",
      },
      {
        number: "03",
        title: "Build",
        desc: "Develop the software around the agreed workflow.",
      },
      {
        number: "04",
        title: "Deploy",
        desc: "Put it into use, learn from the first version and improve from there.",
      },
    ],
  },
  cta: {
    heading: "Your factory already has a way of working. Your software should fit it.",
    cta: "Talk to AKPC",
    ctaHref: "/contact",
  },
};

// ---------------------------------------------------------------------------
// COLLABORATION PAGE
// ---------------------------------------------------------------------------
export const partnerNetworkPage = {
  hero: {
    eyebrow: "Industrial Partner Network",
    heading: "Your equipment may come from somewhere else.\nYour service problem is happening here.",
    subhead:
      "AKPC connects industrial companies with local technical support, service capabilities and specialized technology across Rudrapur, Pantnagar and the surrounding industrial region.",
    ctaPrimary: "Become a Partner",
    ctaPrimaryHref: "/contact",
    ctaSecondary: "Request Industrial Service",
    ctaSecondaryHref: "/contact",
  },
  forEquipmentCompanies: {
    heading: "Need someone on the ground?",
    subhead:
      "You manufacture or supply industrial equipment, but do not have a dedicated service presence in Rudrapur or Pantnagar. AKPC can provide local technical support and customer-site assistance.",
    items: [
      "Installation support",
      "Commissioning assistance",
      "Preventive maintenance",
      "Breakdown visits",
      "Troubleshooting",
      "Spare replacement",
      "Customer support",
      "Service reporting",
      "Local coordination",
    ],
    cta: "Become an AKPC Partner",
    ctaHref: "/contact",
  },
  forFactories: {
    heading: "Need technical support?",
    subhead:
      "Whether you need support for an existing industrial system or technical help with a new requirement, AKPC can connect you with the relevant capability through our network.",
    items: [
      "Industrial equipment service",
      "Automation & integration",
      "Gauging & inspection",
      "CNC / VMC / HMC support",
      "Electrical & control systems",
      "Pneumatics & hydraulics",
      "Machine vision",
      "Installation & commissioning",
    ],
    cta: "Tell Us What You Need",
    ctaHref: "/contact",
  },
  automation: {
    eyebrow: "Strategic Focus",
    heading: "Automation & Integration",
    subhead:
      "Automation is where we are going deeper. We are building our technical expertise around the connection between machines, measurement and software. Where specialist hardware is required, we work with the right technology partners.",
    capabilities: [
      "PLC programming & configuration",
      "Sensor & instrumentation",
      "Drive systems & motor control",
      "HMI development",
      "Pneumatic & hydraulic systems",
      "Machine interfaces & communication",
      "CNC & VMC integration",
      "Machine vision systems",
      "Digital gauging",
      "Data acquisition & connectivity",
    ],
  },
  whyPartner: {
    heading: "Why partner with AKPC?",
    reasons: [
      { title: "Local presence", desc: "Based in Rudrapur, within the SIDCUL industrial ecosystem." },
      { title: "Technical capability", desc: "Manufacturing experience with a growing focus on software and industrial technology." },
      { title: "Flexible engagement", desc: "Start with a pilot assignment and expand as the relationship proves itself." },
      { title: "Training ready", desc: "We are willing to undergo OEM training and certification requirements." },
    ],
  },
  cta: {
    heading: "Your customers are already here. Your service network can be too.",
    subhead:
      "Partner with AKPC for local industrial service and technical support across Rudrapur, Pantnagar and the surrounding region.",
    cta: "Become a Partner",
    ctaHref: "/contact",
  },
};

// ---------------------------------------------------------------------------
// MANUFACTURING CREDIBILITY — bridge into the Smart Factory story
// ---------------------------------------------------------------------------
export const credibility = {
  eyebrow: "Precision Manufacturing",
  heading: "We understand manufacturing because we do it ourselves.",
  paragraphs: [
    "AK Precision Components has been machining on CNC turning and VMC centers for years. Everything we build in AK Smart Factory Lite is tested against the realities of our own shop floor — tooling, cycle times, operators and inspection.",
    "That's why our software isn't written by someone who has only read about factories.",
  ],
  flow: ["Our Machines", "Our Components", "Our Data", "Our Software"],
  image: "/images/machining-action.jpg", // ⚠ SAMPLE — replace with real floor photo
  imageAlt: "Precision machining action on the AK Precision floor",
};

// ---------------------------------------------------------------------------
// MACHINE FLEET — shown in hero panel, dashboard & "Built Around Real Machines"
// ---------------------------------------------------------------------------
export type MachineStatus = "RUNNING" | "IDLE" | "MAINTENANCE";

export const machineFleet = [
  {
    id: "CNC 01",
    name: "JYOTI DX 200", // ⚠ SAMPLE — real machine / model
    type: "CNC Turning Center",
    spec: "Max turning dia 200 mm · ±0.005 mm accuracy", // ⚠ SAMPLE — real spec
    image: "/images/cnc-machine.jpg", // ⚠ SAMPLE — replace with real photo
    status: "RUNNING" as MachineStatus,
    cycleTime: "42.8 sec", // ⚠ SAMPLE — seconds
    oee: 87, // ⚠ SAMPLE — percent
  },
  {
    id: "CNC 02",
    name: "CNC Turning Center 02", // ⚠ SAMPLE — machine being inducted
    type: "CNC Turning Center",
    spec: "Max turning dia 200 mm · live tooling", // ⚠ SAMPLE — real spec
    image: "/images/cnc-machine.jpg", // ⚠ SAMPLE — replace with real photo
    status: "RUNNING" as MachineStatus,
    cycleTime: "38.2 sec", // ⚠ SAMPLE — seconds
    oee: 84, // ⚠ SAMPLE — percent
  },
  {
    id: "VMC 01",
    name: "ACE VMC 740 PRO", // ⚠ SAMPLE — real machine / model
    type: "Vertical Machining Center",
    spec: "Table 800 × 500 mm · 4-axis capability", // ⚠ SAMPLE — real spec
    image: "/images/vmc-machine.jpg", // ⚠ SAMPLE — replace with real photo
    status: "IDLE" as MachineStatus,
    cycleTime: "—", // no live cycle when idle
    oee: 0, // ⚠ SAMPLE — percent this shift
  },
  {
    id: "VMC 02",
    name: "VMC Machining Center 02", // ⚠ SAMPLE — machine being inducted
    type: "Vertical Machining Center",
    spec: "Table 650 × 400 mm · 3-axis", // ⚠ SAMPLE — real spec
    image: "/images/vmc-machine.jpg", // ⚠ SAMPLE — replace with real photo
    status: "MAINTENANCE" as MachineStatus,
    cycleTime: "—",
    oee: 0,
  },
];

// ---------------------------------------------------------------------------
// LIVE DASHBOARD MOCKUP — "Meet AK Smart Factory Lite" section
// ---------------------------------------------------------------------------
export const dashboard = {
  title: "AK Smart Factory",
  shift: "Shift A — 10 Aug 2026", // ⚠ SAMPLE — date / shift name
  oee: "87.4%", // ⚠ SAMPLE — overall equipment effectiveness
  production: "1,284 pcs", // ⚠ SAMPLE — parts produced this shift
  downtime: "42 min", // ⚠ SAMPLE — logged downtime this shift
  efficiency: "92%", // ⚠ SAMPLE — schedule adherence
  targetVsActual: { target: "1,400 pcs", actual: "1,284 pcs" }, // ⚠ SAMPLE
};

// ---------------------------------------------------------------------------
// PROBLEM SECTION — pain points
// ---------------------------------------------------------------------------
export const problem = {
  eyebrow: "The Shop Floor Reality",
  heading: "What is happening on your shop floor right now?",
  points: [
    "Machines are running — but there's no live visibility of what's happening right now.",
    "Production data is still written by hand on paper registers.",
    "Downtime is noticed only after it has already hurt the shift.",
    "Cycle times are difficult to track against actual output.",
    "Inspection records are scattered across paper and Excel files.",
    "Management can't see the factory while away from the shop floor.",
  ],
  resolution: "AK Smart Factory Lite brings it all together.",
};

// ---------------------------------------------------------------------------
// SEVEN CAPABILITIES — one platform, one ecosystem
// ---------------------------------------------------------------------------
export const capabilities = [
  {
    number: "01",
    title: "Machine Monitoring",
    desc: "Know what every machine is doing — running, idle, in maintenance — in real time.",
  },
  {
    number: "02",
    title: "OEE",
    desc: "Availability, performance and quality combined into one number — calculated automatically.",
  },
  {
    number: "03",
    title: "Cycle Time",
    desc: "Track expected vs actual production time for every job and operator.",
  },
  {
    number: "04",
    title: "QR Traceability",
    desc: "Follow jobs and components through production with simple QR tags.",
  },
  {
    number: "05",
    title: "Inspection Data",
    desc: "Digitize quality records — measurements, first-piece reports and rejections.",
  },
  {
    number: "06",
    title: "Mobile Dashboard",
    desc: "Monitor the factory from anywhere, on any phone.",
  },
  {
    number: "07",
    title: "Management Dashboard",
    desc: "Give management the complete picture — live, accurate and easy to read.",
  },
];

// ---------------------------------------------------------------------------
// FROM MACHINE TO MANAGEMENT — the flow diagram
// ---------------------------------------------------------------------------
export const machineToManagement = {
  eyebrow: "How It Works",
  heading: "From Machine to Management",
  floor: ["CNC 01", "CNC 02", "VMC 01"],
  connectivity: "Machine Connectivity",
  platform: "AK Smart Factory",
  platformSub: "Live machine data · OEE · Traceability · Inspection",
  intelligence: [
    { label: "OEE", icon: "GaugeIcon" },
    { label: "Production", icon: "CogIcon" },
    { label: "Quality", icon: "CheckBadgeIcon" },
  ],
  management: "Management",
};

// ---------------------------------------------------------------------------
// WHY AK — the equation
// ---------------------------------------------------------------------------
export const whyAK = {
  eyebrow: "Why AKPC",
  heading: "We understand factories because we run one.",
  subhead:
    "We manufacture components ourselves. That means we work with machines, tooling, tolerances, inspection, operators, production schedules and the everyday constraints of a real shop floor. That experience shapes the software we build and the industrial partnerships we develop.",
  pillars: [
    {
      title: "Manufacturing Experience",
      desc: "Years of running CNC and VMC machines, meeting tolerances and hitting delivery dates.",
    },
    {
      title: "Software Engineering",
      desc: "Products designed by engineers who build, ship and support production software.",
    },
    {
      title: "Industrial Technology",
      desc: "Machine connectivity, data collection and shop-floor integration experience.",
    },
    {
      title: "Automation Focus",
      desc: "Growing technical expertise in the connection between machines, measurement and software.",
    },
  ],
  result: "Practical Manufacturing Technology",
};

// ---------------------------------------------------------------------------
// BUILT AROUND REAL MACHINES
// ---------------------------------------------------------------------------
export const builtAroundMachines = {
  eyebrow: "Built Around Real Manufacturing",
  heading: "Tested on our own factory floor.",
  subhead:
    "We don't just build factory software. We run it on our own machines — every shift, every day. Our solutions are designed with real machine-shop workflows in mind.",
  cta: "See Our Manufacturing Floor",
  ctaHref: "/manufacturing/machines",
};

// ---------------------------------------------------------------------------
// MANUFACTURING CREDIBILITY SUBGRID
// ---------------------------------------------------------------------------
export const manufacturingLinks = [
  {
    title: "CNC Turning",
    desc: "High-precision turning with ±0.005 mm capability.", // ⚠ SAMPLE
    href: "/manufacturing/cnc-turning",
  },
  {
    title: "VMC Machining",
    desc: "3-axis and 4-axis vertical machining centers.", // ⚠ SAMPLE
    href: "/manufacturing/vmc",
  },
  {
    title: "Quality & Inspection",
    desc: "100% inspected parts with documented reports.", // ⚠ SAMPLE
    href: "/manufacturing/quality",
  },
  {
    title: "Our Machines",
    desc: "CNC, VMC and precision machinery on the floor.", // ⚠ SAMPLE
    href: "/manufacturing/machines",
  },
];

// ---------------------------------------------------------------------------
// AUDIENCES — who it's for
// ---------------------------------------------------------------------------
export const audiences = {
  eyebrow: "Built For Manufacturing Teams",
  heading: "Who AK Smart Factory Lite is for",
  note: "Start small. Digitize what matters. Scale when you're ready.",
  items: [
    {
      title: "CNC Machine Shops",
      scope: "10–100 machines", // ⚠ SAMPLE — roadmap target
      desc: "Shops losing shift output to unlogged downtime and handwritten registers.",
    },
    {
      title: "Auto Component Manufacturers",
      scope: "Production-focused factories", // ⚠ SAMPLE
      desc: "Factories that need batch traceability and digitized inspection records.",
    },
    {
      title: "MSME Manufacturers",
      scope: "Moving beyond paper & Excel", // ⚠ SAMPLE
      desc: "Factories ready to digitize operations without heavy ERP baggage.",
    },
  ],
};

// ---------------------------------------------------------------------------
// CASE STUDIES — SAMPLE ONLY, replace with 3–5 real stories per the roadmap
// ---------------------------------------------------------------------------
type CaseStudyItem = {
  title: string;
  customer: string;
  before: string[];
  after: string[];
  stats: { label: string; value: string }[];
};

export const caseStudies: {
  eyebrow: string;
  heading: string;
  note: string;
  items: CaseStudyItem[];
} = {
  eyebrow: "Case Studies",
  heading: "Factory Deployments",
  note: "More factory deployments coming soon.",
  items: [],
};

// ---------------------------------------------------------------------------
// ROADMAP — the layered build-out
// ---------------------------------------------------------------------------
export const roadmap = {
  eyebrow: "The Road Ahead",
  heading: "Building the Smart Factory, One Layer at a Time.",
  layers: [
    { year: "2026", items: ["Machine Monitoring", "OEE", "QR Traceability"] },
    { year: "2027", items: ["Inspection", "Energy Monitoring", "Mobile Dashboard"] },
    { year: "2028", items: ["Predictive Maintenance", "Tool Life", "Cloud Platform"] },
    { year: "2029", items: ["AI Quality Inspection", "Vision Systems"] },
    { year: "2030", items: ["Complete Smart Factory Solutions"] },
  ],
  closer:
    "We're building practical Industry 4.0 solutions for the factories that power India's manufacturing economy.",
};

// ---------------------------------------------------------------------------
// PRICING — no public price list, show starting point only
// ---------------------------------------------------------------------------
export const pricing = {
  eyebrow: "Pricing",
  heading: "Start with one machine. Grow from there.",
  startingFrom: "",
  range: "",
  note: "Pricing depends on machine count, connectivity, sensors, integration requirements, deployment model and customization. Contact us for a factory assessment.",
  cta: "Request a Factory Assessment",
};

// ---------------------------------------------------------------------------
// SMART FACTORY PRODUCT CTA — used at the end of the product page
// ---------------------------------------------------------------------------
export const finalCTA = {
  heading: "Have a manufacturing problem you want to solve?",
  subhead:
    "Whether you need precision components, factory software or local industrial support, tell us what you are working on.",
  ctaPrimary: "Talk to AKPC",
  ctaSecondary: "Request a Quote",
};

// ---------------------------------------------------------------------------
// VIDEO STORY — precision in motion
// ---------------------------------------------------------------------------
export const videoStory = {
  videoSrc: "/videos/cnc-to-vmc.mp4",
  steps: [
    "CNC Turning",
    "Precision Component",
    "VMC Machining",
    "Finished Part",
  ],
};

// ---------------------------------------------------------------------------
// READY TO BUILD — contact CTA
// ---------------------------------------------------------------------------
export const buildCTA = {
  heading: "Let's talk about what you are building.",
  subhead:
    "Whether you need precision components, factory software or local industrial support, give us the context. We will start from the requirement, not the pitch.",
  cta: "Talk to AKPC",
  ctaHref: "/contact",
  ctaSecondary: "Request a Quote",
  ctaSecondaryHref: "/contact",
  contacts: [
    { label: "Phone", value: site.contactPhone },
    { label: "Email", value: site.contactEmail },
    { label: "Location", value: site.location },
  ],
};

// ---------------------------------------------------------------------------
// PROJECTS PAGE — manufacturing capability showcases
// ---------------------------------------------------------------------------
export const projectsPage = {
  eyebrow: "Projects",
  heading: "What we build starts with what needs solving.",
  subhead:
    "From precision-machined components to factory software, our work is shaped by real production requirements.",
  statement: {
    text: "Precision machining is only one part of what we build.",
    linkText: "Explore our manufacturing capabilities",
    href: "/manufacturing",
  },
  projects: [
    {
      number: "01",
      tab: "CNC Turning",
      name: "JYOTI DX 200",
      category: "CNC Turning Center",
      description:
        "High-precision CNC turning for consistent, repeatable component production.",
      image: "/images/cnc-machine.jpg",
      imageAlt: "JYOTI DX 200 CNC turning center",
      specs: [
        { label: "Max Turning Diameter", value: "200 mm" },
        { label: "Accuracy", value: "±0.005 mm" },
        { label: "Production", value: "CNC Turning" },
        { label: "Machine Type", value: "CNC Turning Center" },
      ],
      rateLabel: "Hourly rate",
      rateValue: "On request",
      cta: "Enquire for Machining",
      href: "/contact",
    },
    {
      number: "02",
      tab: "VMC Machining",
      name: "ACE VMC 740 PRO",
      category: "Vertical Machining Center",
      description:
        "Precision milling for complex components, accurate profiles and repeatable production.",
      image: "/images/vmc-machine.jpg",
      imageAlt: "ACE VMC 740 PRO vertical machining center",
      specs: [
        { label: "Table Size", value: "800 × 500 mm" },
        { label: "Axes", value: "4-axis" },
        { label: "Production", value: "VMC Machining" },
        { label: "Machine Type", value: "Vertical Machining Center" },
      ],
      rateLabel: "Hourly rate",
      rateValue: "On request",
      cta: "Enquire for Machining",
      href: "/contact",
    },
    {
      number: "03",
      tab: "Software",
      name: "AK Smart Factory Lite",
      category: "Factory Monitoring Platform",
      description:
        "Machine status, OEE, cycle times and inspection records in one live dashboard — built from our own shop floor.",
      image: "/images/dashboard.jpg",
      imageAlt: "AK Smart Factory Lite live production dashboard",
      specs: [
        { label: "OEE", value: "Demo data" },
        { label: "Production", value: "Demo data" },
        { label: "Downtime", value: "Demo data" },
        { label: "Efficiency", value: "Demo data" },
      ],
      rateLabel: "Subscription",
      rateValue: "On request",
      cta: "Talk to AKPC",
      href: "/software",
    },
  ],
};

// ---------------------------------------------------------------------------
// SMART FACTORY PRODUCT PAGE — details
// ---------------------------------------------------------------------------
export const productPage = {
  hero: {
    eyebrow: "AK Smart Factory Lite",
    heading: "Start with one machine. See what your factory is actually doing.",
    subhead:
      "A practical factory monitoring and traceability platform for CNC and VMC machine shops that want live production visibility without starting with a large ERP implementation.",
    ctaPrimary: "Book a Factory Demo",
    ctaSecondary: "Request a Factory Assessment",
  },
  included: [
    "Machine connectivity (CNC, VMC & other machines)",
    "Live production dashboard",
    "OEE and cycle-time reports",
    "QR job tagging & traceability",
    "Digital inspection records",
    "Mobile app for operators & management",
  ],
  deployment: [
    { step: "01", title: "Connect your first machine", desc: "We install the connectivity unit and pull live machine signals." },
    { step: "02", title: "See live data", desc: "Machine status, cycle time and output start flowing to the dashboard." },
    { step: "03", title: "Digitize jobs and quality", desc: "QR tags and digital inspection records replace paper." },
    { step: "04", title: "Expand across the factory", desc: "Add machines, users and reports as you grow." },
  ],
  architecture: {
    label: "Architecture",
    layers: [
      "Shop Floor Devices",
      "Machine Connectivity",
      "AK Smart Factory Platform",
      "Mobile + Management Dashboards",
    ],
  },
};