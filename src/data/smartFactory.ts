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
  tagline: "Precision Manufacturing. Practical Industry 4.0.",
  contactEmail: "info@akprecision.com", // ⚠ SAMPLE — real email
  contactPhone: "+91 98XXX XXXXX", // ⚠ SAMPLE — real phone
  location: "Pune, Maharashtra, India", // ⚠ SAMPLE — real address
  metaTitle:
    "AK Smart Factory Lite | Industry 4.0 for CNC & VMC Machine Shops",
  metaDescription:
    "AK Smart Factory Lite connects CNC, VMC and other machines to one platform for live production monitoring, OEE, cycle-time tracking, QR traceability and inspection data.",
};

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: "Precision Manufacturing + Industry 4.0",
  headline: [
    [{ text: "Precision parts, Smarter", color: "forest" }],
    [{ text: "manufacturing. Built for", color: "deep-forest" }],
    [{ text: "what's next.", color: "sage-hero" }],
  ],
  cta: "Book a Demo",
  ctaHref: "/contact",
  ctaSecondary: "Explore Manufacturing",
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
    "Precision components, machining capability and practical factory technology — one engineering partner.",
  items: [
    {
      number: "01",
      title: "CNC Turning",
      desc: "Precision turning for repeatable, production-ready components.",
      cta: "Explore",
      href: "/manufacturing/cnc-turning",
    },
    {
      number: "02",
      title: "VMC Machining",
      desc: "Accurate milling and machining for complex component geometries.",
      cta: "Explore",
      href: "/manufacturing/vmc",
    },
    {
      number: "03",
      title: "Precision Components",
      desc: "Manufacturing across materials and production requirements.",
      cta: "Explore",
      href: "/manufacturing",
    },
    {
      number: "04",
      title: "Industry 4.0",
      desc: "Practical factory monitoring, traceability and production visibility.",
      cta: "Explore",
      href: "/smart-factory",
    },
  ],
  equation: {
    left: "Precision Manufacturing",
    plus: "+",
    right: "Smart Factory",
    equals: "=",
    result: "One Engineering Partner",
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
  eyebrow: "Why AK",
  heading: "We understand the factory because we operate one.",
  subhead:
    "AK Precision Components combines real manufacturing experience with software and automation expertise. We design Industry 4.0 solutions around the realities of Indian manufacturing floors — not just theoretical digital transformation.",
  pillars: [
    {
      title: "Manufacturing Experience",
      desc: "Years of running CNC and VMC machines, meeting tolerances and hitting delivery dates.", // ⚠ SAMPLE — real years
    },
    {
      title: "Software Engineering",
      desc: "Products designed by engineers who build, ship and support production software.",
    },
    {
      title: "Automation",
      desc: "Machine connectivity, data collection and shop-floor integration experience.",
    },
    {
      title: "AI / Analytics",
      desc: "Turning raw production data into insights management can actually use.",
    },
  ],
  result: "Practical Industry 4.0",
};

// ---------------------------------------------------------------------------
// BUILT AROUND REAL MACHINES
// ---------------------------------------------------------------------------
export const builtAroundMachines = {
  eyebrow: "Built Around Real Manufacturing",
  heading: "Tested on our own factory floor.",
  subhead:
    "We don't just build factory software. We run it on our own machines — every shift, every day. Our Industry 4.0 solutions are designed with real machine-shop workflows in mind.",
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
export const caseStudies = {
  eyebrow: "Case Studies",
  heading: "Factories That Went Digital",
  note: "Real results coming soon.", // ⚠ SAMPLE — remove once real
  items: [
    {
      title: "Digitalizing a 24-Machine CNC Shop", // ⚠ SAMPLE
      customer: "Sample Customer #1", // ⚠ SAMPLE
      before: [
        "Paper production records",
        "Manual downtime tracking",
        "No real-time OEE",
        "Limited management visibility",
      ],
      after: [
        "Live machine monitoring",
        "Automated OEE",
        "QR traceability",
        "Digital inspection & remote dashboard",
      ],
      stats: [
        { label: "Production Visibility", value: "+18%" }, // ⚠ SAMPLE
        { label: "Untracked Downtime", value: "−32%" }, // ⚠ SAMPLE
        { label: "Job Traceability", value: "100%" }, // ⚠ SAMPLE
      ],
    },
  ],
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
  startingFrom: "₹2,00,000", // ⚠ SAMPLE — roadmap says ₹2–10 lakh per factory
  range: "₹2 to ₹10 lakh per factory", // ⚠ SAMPLE — depends on machine count, connectivity, sensors, PLC integration, deployment
  note: "Scope depends on machine count, connectivity, sensors, PLC integration, deployment model and customization.",
  cta: "Request a Factory Assessment",
};

// ---------------------------------------------------------------------------
// SMART FACTORY PRODUCT CTA — used at the end of the product page
// ---------------------------------------------------------------------------
export const finalCTA = {
  heading: "Ready to See Your Factory Differently?",
  subhead:
    "Let's connect your first machine and show you what your production data can tell you.",
  ctaPrimary: "Book a Factory Demo",
  ctaSecondary: "Talk to an Engineer",
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
  heading: "Let's Build Something Precise.",
  subhead:
    "Looking for precision components or practical Industry 4.0 solutions? Let's talk about your manufacturing requirements.",
  cta: "Contact Us",
  ctaHref: "/contact",
  ctaSecondary: "Book a Demo",
  ctaSecondaryHref: "/contact",
  contacts: [
    { label: "Phone", value: site.contactPhone }, // ⚠ SAMPLE — real phone
    { label: "Email", value: site.contactEmail }, // ⚠ SAMPLE — real email
    { label: "Location", value: site.location }, // ⚠ SAMPLE — real address
  ],
};

// ---------------------------------------------------------------------------
// PROJECTS PAGE — manufacturing capability showcases
// ---------------------------------------------------------------------------
export const projectsPage = {
  eyebrow: "Projects",
  heading: "Precision Manufacturing",
  subhead:
    "Machining capabilities built around accuracy, repeatability and dependable production.",
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
      category: "Industry 4.0 Platform",
      description:
        "Machine status, OEE, cycle times and inspection records in one live dashboard — built from our own shop floor.",
      image: "/images/dashboard.jpg",
      imageAlt: "AK Smart Factory Lite live production dashboard",
      specs: [
        { label: "OEE", value: "87.4%" },
        { label: "Production", value: "1,284 pcs" },
        { label: "Downtime", value: "42 min" },
        { label: "Efficiency", value: "92%" },
      ],
      rateLabel: "Subscription",
      rateValue: "On request",
      cta: "Book a Demo",
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
    heading: "The practical Industry 4.0 platform.",
    subhead:
      "Designed for CNC and VMC machine shops that want real visibility — without a six-month ERP project.",
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
    { step: "01", title: "Connect your first machine", desc: "We install the connectivity unit and pull live machine signals." }, // ⚠ SAMPLE
    { step: "02", title: "See live data on day one", desc: "Machine status, cycle time and output start flowing to the dashboard." },
    { step: "03", title: "Digitize quality & jobs", desc: "QR tags and digital inspection records replace paper." },
    { step: "04", title: "Scale to the whole factory", desc: "Add machines, users and reports as you grow." },
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