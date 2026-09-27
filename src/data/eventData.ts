import { MultiverseTrack, InfinityStone, ScheduleItem, Speaker, FaqItem } from '../types';

export const EVENT_DETAILS = {
  name: "MULTIVERSE OF CODE",
  edition: "EDITION 2026",
  tagline: "Where Earth's Mightiest Geeks Assemble",
  host: "GeeksForGeeks Student Chapter",
  university: "Bennett University, Greater Noida",
  school: "School of Computer Science & Engineering (SCSE)",
  dates: "October 24–25, 2026",
  duration: "36 Hours of Non-stop Engineering",
  venue: "Auditorium Complex & Computing Labs, Bennett University, Plot 8-11, TechZone 2, Greater Noida, UP",
  prizePool: "₹2,50,000",
  targetDate: new Date('2026-10-24T09:00:00+05:30').getTime(),
};

export const MULTIVERSE_TRACKS: MultiverseTrack[] = [
  {
    id: "stark-ai",
    codename: "TRACK 01",
    alliance: "Stark Industries: Autonomous AI & Neural Agents",
    themeColor: "#00F0FF",
    accentBorder: "border-cyan-500/40 hover:border-cyan-400",
    description: "Engineer Jarvis-grade autonomous agent collectives, multimodal vision intelligence, and resilient edge machine learning architectures.",
    techStack: ["Gemini 2.5 API", "LangGraph", "PyTorch", "Ollama", "FastAPI"],
    bounty: "₹65,000 + GPU Compute Grants",
    image: "/src/assets/images/marvel_stark_lab_1790537957972.jpg",
    colSpan: "lg:col-span-2",
    featured: true
  },
  {
    id: "wakanda-ux",
    codename: "TRACK 02",
    alliance: "Wakanda Design Guild: Spatial & Kinetic Interfaces",
    themeColor: "#9D4EDD",
    accentBorder: "border-purple-500/40 hover:border-purple-400",
    description: "Craft next-generation immersive web environments, kinetic Three.js spatial layouts, and accessible hyper-responsive software experiences.",
    techStack: ["Three.js", "React 19", "WebGPU", "Tailwind CSS", "Motion"],
    bounty: "₹50,000 + Design Mentorship",
    image: "/src/assets/images/marvel_wakanda_tech_1790537970699.jpg",
    colSpan: "lg:col-span-1",
    featured: false
  },
  {
    id: "kamar-taj-cyber",
    codename: "TRACK 03",
    alliance: "Kamar-Taj Guild: Zero-Knowledge & Cyber Defense",
    themeColor: "#F59E0B",
    accentBorder: "border-amber-500/40 hover:border-amber-400",
    description: "Construct impenetrable cryptographic protocols, decentralized authentication fabrics, and resilient cloud firewall engines.",
    techStack: ["Rust", "ZK-SNARKs", "Solidity", "Go", "Docker Sandbox"],
    bounty: "₹50,000 + Security Audit Pass",
    colSpan: "lg:col-span-1",
    featured: false
  },
  {
    id: "webslingers-collab",
    codename: "TRACK 04",
    alliance: "Web-Slingers: Real-Time Systems & Distributed Mesh",
    themeColor: "#E62429",
    accentBorder: "border-red-500/40 hover:border-red-400",
    description: "Deploy ultra-low latency peer-to-peer communication, collaborative live canvases, and resilient cross-platform toolchains.",
    techStack: ["WebRTC", "Socket.io", "CRDTs", "Node.js", "Redis"],
    bounty: "₹45,000 + Cloud Infrastructure Credits",
    colSpan: "lg:col-span-1",
    featured: false
  },
  {
    id: "guardians-data",
    codename: "TRACK 05",
    alliance: "Guardians of Data: High-Throughput Quant & Scaled Systems",
    themeColor: "#10B981",
    accentBorder: "border-emerald-500/40 hover:border-emerald-400",
    description: "Tackle high-frequency streaming streams, financial predictive analytics, and petabyte-scale distributed database engines.",
    techStack: ["Apache Kafka", "DuckDB", "ClickHouse", "PostgreSQL", "Python"],
    bounty: "₹40,000 + FinTech Accelerator Access",
    colSpan: "lg:col-span-1",
    featured: false
  }
];

export const INFINITY_STONES: InfinityStone[] = [
  {
    id: "space",
    name: "Space Stone",
    color: "#00F0FF",
    glowClass: "stark-cyan-glow",
    bgHex: "rgba(0, 240, 255, 0.15)",
    lore: "Tesseract of Limitless Bandwidth",
    perk: "Unlocks $500 Cloud Credits across Google Cloud & DigitalOcean for deploying distributed clusters.",
    secretBonus: "HYPERSPACE-PROXY-2026",
    iconName: "Globe"
  },
  {
    id: "mind",
    name: "Mind Stone",
    color: "#FBBF24",
    glowClass: "infinity-gold-glow",
    bgHex: "rgba(251, 191, 36, 0.15)",
    lore: "Vision's Neural Matrix",
    perk: "Access to 1-on-1 private debug checkpoints with Principal Architects from Microsoft and Google.",
    secretBonus: "JARVIS-SYNAPSE-UNLOCKED",
    iconName: "Cpu"
  },
  {
    id: "reality",
    name: "Reality Stone",
    color: "#EF4444",
    glowClass: "marvel-red-glow",
    bgHex: "rgba(239, 68, 68, 0.15)",
    lore: "The Aether of Rapid Prototyping",
    perk: "Instant access to on-campus Bennett hardware laboratory kits: Raspberry Pi 5, ESP32, and Arduino rigs.",
    secretBonus: "AETHER-FAB-READY",
    iconName: "Sparkles"
  },
  {
    id: "power",
    name: "Power Stone",
    color: "#A855F7",
    glowClass: "wakanda-purple-glow",
    bgHex: "rgba(168, 85, 247, 0.15)",
    lore: "The Cosmic Orb of Compute",
    perk: "Dedicated NVIDIA A100 GPU compute pods provided for teams training or fine-tuning neural weights.",
    secretBonus: "TITAN-COMPUTE-BURST",
    iconName: "Zap"
  },
  {
    id: "time",
    name: "Time Stone",
    color: "#10B981",
    glowClass: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]",
    bgHex: "rgba(16, 185, 129, 0.15)",
    lore: "Eye of Agamotto",
    perk: "Official 'Emergency Time Rift': 1 optional 45-minute grace submission window for unforeseen merge conflicts.",
    secretBonus: "TEMPORAL-SHIELD-ACTIVE",
    iconName: "Clock"
  },
  {
    id: "soul",
    name: "Soul Stone",
    color: "#F97316",
    glowClass: "shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]",
    bgHex: "rgba(249, 115, 22, 0.15)",
    lore: "The Vormir Collective Spirit",
    perk: "People's Choice Multiverse Prize: ₹25,000 cash awarded entirely based on peer attendee live upvotes.",
    secretBonus: "AVENGERS-UNITED-SOUL",
    iconName: "Heart"
  }
];

export const SCHEDULE_DAY_ONE: ScheduleItem[] = [
  {
    time: "08:30 AM",
    phase: "PHASE 01",
    title: "Security Clearance & Multiverse Check-in",
    description: "Participant badge verification, Bennett campus Wi-Fi allocation, and welcome swag box distribution.",
    tag: "Check-in",
    location: "Bennett University Auditorium Foyer",
  },
  {
    time: "10:00 AM",
    phase: "PHASE 02",
    title: "Opening Keynote: 'The Endgame Protocol'",
    description: "Welcome address by GFG Student Chapter Bennett University leads, SCSE Dean, and track challenge unveiling.",
    tag: "Keynote",
    location: "Main Auditorium",
    isMilestone: true
  },
  {
    time: "11:30 AM",
    phase: "PHASE 03",
    title: "Hacking Begins · The Quantum Sprint",
    description: "36-hour hackathon timer begins! Repositories initialized and team workstations locked.",
    tag: "Sprint",
    location: "Bennett Advanced Computing Labs & Hack Arena",
    isMilestone: true
  },
  {
    time: "04:00 PM",
    phase: "PHASE 04",
    title: "Stark Lab Architecture Checkpoint",
    description: "Round 1 mentor evaluations: validate project feasibility, data schema, and technical stack choices.",
    tag: "Mentorship",
    location: "Track Guild Pods",
  },
  {
    time: "09:30 PM",
    phase: "PHASE 05",
    title: "The Mid-Event Snap: Speed Bug Bounty",
    description: "Optional 45-minute rapid coding sprint to conquer 3 algorithmic anomalies for immediate cash prizes.",
    tag: "Challenge",
    location: "Live Terminal Stage",
  },
  {
    time: "11:45 PM",
    phase: "PHASE 06",
    title: "Midnight Shawarma & Red Bull Fueling",
    description: "Late night recharge session, acoustic gaming lounge, and mini Mario Kart tournaments.",
    tag: "Recharge",
    location: "Student Activity Center (SAC)",
  }
];

export const SCHEDULE_DAY_TWO: ScheduleItem[] = [
  {
    time: "08:00 AM",
    phase: "PHASE 07",
    title: "Dawn Breakfast & Deployment Testing",
    description: "Warm breakfast buffet, staging deployments, and mock pitch rehearsals with alumni mentors.",
    tag: "Logistics",
    location: "Mess Dining Hall",
  },
  {
    time: "11:00 AM",
    phase: "PHASE 08",
    title: "Code Freeze Warning · Final Commits",
    description: "1-hour notice prior to repository lockdown. Documentation, demo videos, and README checks.",
    tag: "Milestone",
    location: "Hack Arena",
  },
  {
    time: "12:00 PM",
    phase: "PHASE 09",
    title: "Official Code Freeze · Repository Lock",
    description: "Timer concludes at exactly 36 hours. All Git commits recorded; submissions sealed.",
    tag: "Deadline",
    location: "Hack Arena",
    isMilestone: true
  },
  {
    time: "01:30 PM",
    phase: "PHASE 10",
    title: "The Final Stand: Multiverse Jury Demos",
    description: "Top 12 qualifying squads pitch live before the industry jury panel in 5-minute lightning rounds.",
    tag: "Presentations",
    location: "Main Auditorium Stage",
    isMilestone: true
  },
  {
    time: "04:30 PM",
    phase: "PHASE 11",
    title: "Hall of Champions: Awards & ₹2,50,000 Bounty",
    description: "Grand announcement of Multiverse Champions, track winners, and closing address by Bennett GFG chapter.",
    tag: "Ceremony",
    location: "Main Auditorium",
    isMilestone: true
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "sp-1",
    name: "Dr. Vikramaditya Roy",
    superheroAlias: "The Systems Sorcerer",
    role: "Professor & Head of AI Research",
    company: "Bennett University (SCSE)",
    trackAffiliation: "Stark Industries AI",
    bio: "Pioneering distributed neural networks and autonomous agent architectures with 15+ years in academia and research.",
    avatarSeed: "Vikramaditya",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "sp-2",
    name: "Aanya Singhania",
    superheroAlias: "Vibranium Architect",
    role: "Staff Product Designer & WebGL Lead",
    company: "Figma Community Advocate / Ex-Uber",
    trackAffiliation: "Wakanda Design Guild",
    bio: "Specializing in kinetic 3D design systems and high-frame-rate interaction models for modern browsers.",
    avatarSeed: "Aanya",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
  },
  {
    id: "sp-3",
    name: "Kabir Malhotra",
    superheroAlias: "Quantum Cryptographer",
    role: "Principal Security Engineer",
    company: "Polygon Labs & Web3 Security Foundation",
    trackAffiliation: "Kamar-Taj Cyber",
    bio: "Authored formal verification frameworks for decentralized zero-knowledge bridges handling $200M+ TVL.",
    avatarSeed: "Kabir",
    socials: { github: "https://github.com", twitter: "https://twitter.com" }
  },
  {
    id: "sp-4",
    name: "Rhea Sen",
    superheroAlias: "Mesh Weaver",
    role: "Senior Engineering Manager",
    company: "Atlassian / GFG Bennett Alumni",
    trackAffiliation: "Web-Slingers Collab",
    bio: "Bennett University alumna who scaled real-time collaborative document synchronization to 50M+ active users.",
    avatarSeed: "Rhea",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  }
];

export const PRIZE_TIERS = [
  {
    rank: "01",
    title: "Grand Multiverse Champion",
    reward: "₹1,00,000",
    color: "from-amber-400 to-yellow-600",
    border: "border-amber-500/50",
    perks: [
      "Custom Titanium Infinity Gauntlet Trophy",
      "Direct Fast-Track Interview with Sponsor Partners",
      "Full 1-Year JetBrains All-Products Licenses",
      "Exclusive GFG Bennett Hall of Fame Induction"
    ]
  },
  {
    rank: "02",
    title: "Multiverse Vanguard Runner-Up",
    reward: "₹60,000",
    color: "from-slate-200 to-slate-400",
    border: "border-slate-400/50",
    perks: [
      "Vibranium Shield Commemorative Plaque",
      "Sponsor Incubator Mentorship Access",
      "Annual GitHub Copilot Pro Subscriptions",
      "Full Marvel Swag Collector Box"
    ]
  },
  {
    rank: "03",
    title: "Third Sector Sovereign",
    reward: "₹40,000",
    color: "from-amber-700 to-amber-900",
    border: "border-amber-700/50",
    perks: [
      "Arc Reactor Desk Memorial",
      "Cloud Infrastructure Vouchers",
      "Marvel Graphic Novels Box Set",
      "Certificate of High Distinction"
    ]
  }
];

export const SPECIAL_BOUNTIES = [
  { title: "Best All-Girls Superhero Squad", prize: "₹25,000", sponsor: "Bennett Women In Tech" },
  { title: "Best Freshman / First-Time Hackers", prize: "₹15,000", sponsor: "GFG Student Chapter" },
  { title: "Top Open-Source Contribution", prize: "₹10,000", sponsor: "GitHub Campus Experts" },
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "Who is eligible to participate in MULTIVERSE OF CODE?",
    answer: "Any registered undergraduate or postgraduate student currently enrolled in any accredited university or college worldwide is eligible! We welcome both Bennett University students and external college squads across India and beyond."
  },
  {
    category: "General",
    question: "Is there any registration or entry fee?",
    answer: "Zero! Admission to MULTIVERSE OF CODE is 100% free of charge. Selected teams receive complimentary access to all computing labs, mentor sessions, 24/7 catering, red bulls, sleeping zones, and swag packs."
  },
  {
    category: "Logistics",
    question: "What are the accommodation and food arrangements at Bennett University?",
    answer: "For all 36 hours of the in-person sprint, Bennett University provides high-speed campus Wi-Fi, air-conditioned hacking arenas, designated separate rest and sleeping pods for boys and girls, 24/7 security, breakfast/lunch/dinner/midnight snacks, and on-campus paramedic support."
  },
  {
    category: "Hacking",
    question: "What are the allowed team configurations?",
    answer: "Teams may consist of 2 to 4 members. You can either assemble a pre-formed squad or register as a Solo Avenger and use our Discord #avengers-assemble team matching lounge to team up before Day 1."
  },
  {
    category: "Hacking",
    question: "Can we use pre-existing code or third-party APIs?",
    answer: "All prototype source code must be written during the 36-hour sprint starting October 24 at 11:30 AM. You are completely free to leverage public libraries, open-source models, UI kits, and authorized sponsor APIs."
  },
  {
    category: "Prizes",
    question: "How are projects evaluated by the Multiverse Jury?",
    answer: "Scoring is distributed across 4 key criteria: Technical Depth & Complexity (30%), Practical Impact & Relevance (25%), Design & User Experience (25%), and Presentation & Polish (20%)."
  }
];
