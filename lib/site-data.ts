import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CandlestickChart,
  ChartColumnIncreasing,
  CircleDollarSign,
  FileBadge2,
  Gem,
  GraduationCap,
  HandCoins,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  PiggyBank,
  ReceiptIndianRupee,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  eyebrow?: string;
};

export type ServiceCard = IconCard & {
  cta: string;
  href: string;
};

export type Testimonial = {
  name: string;
  role: string;
  result: string;
  quote: string;
  rating: number;
  initials: string;
  location: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  highlight: string;
  body: string[];
};

export type MarketQuote = {
  symbol: string;
  label: string;
  price: number;
  change: number;
  unit?: string;
};

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "advisor@scalealpha.in";
const consultationEmail =
  process.env.NEXT_PUBLIC_CONSULTATION_EMAIL ?? contactEmail;
const officeAddress =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
  "Bandra Kurla Complex, Mumbai, Maharashtra";
const officeLabel =
  process.env.NEXT_PUBLIC_OFFICE_LABEL ?? "By-appointment advisory desk";
const sebiRegistration =
  process.env.NEXT_PUBLIC_SEBI_REGISTRATION ??
  "SEBI registration number to be added before go-live";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scalealpha.in";

export const siteConfig = {
  name: "Scale Alpha",
  tagline: "Smart Financial Planning for a Secure Future",
  description:
    "SEBI Registered Financial Advisor helping individuals and families grow wealth through Mutual Funds, SIPs, Insurance and Financial Planning.",
  longDescription:
    "Scale Alpha is a premium wealth advisory frontend crafted to convert trust into consultations with a modern fintech aesthetic, clear compliance cues, and interactive planning tools.",
  whatsappNumber,
  contactEmail,
  consultationEmail,
  officeAddress,
  officeLabel,
  sebiRegistration,
  siteUrl,
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ??
    "https://www.google.com/maps?q=Bandra%20Kurla%20Complex%20Mumbai&output=embed",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "X", href: "https://x.com" },
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Calculators", href: "/calculators" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blogs", href: "/blogs" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
};

export const heroMetrics: Metric[] = [
  {
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    detail: "Across salaried professionals, founders, and families.",
  },
  {
    value: 25,
    prefix: "₹",
    suffix: " Cr+",
    label: "Assets Guided",
    detail: "Structured for disciplined long-term growth journeys.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
    detail: "Combining advisory discipline with planning-first execution.",
  },
  {
    value: 1,
    label: "SEBI Registered",
    detail: "Compliance-led communication, disclosure, and process design.",
  },
];

export const trustPillars: IconCard[] = [
  {
    eyebrow: "Regulated trust",
    title: "SEBI Registered Advisory",
    description:
      "Every client journey is anchored in compliance, suitability, and transparent communication.",
    icon: FileBadge2,
  },
  {
    eyebrow: "Clear process",
    title: "Transparent Advisory",
    description:
      "We structure recommendations around goals, risk tolerance, timelines, and full visibility into the plan.",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Tailored planning",
    title: "Personalized Planning",
    description:
      "No generic product pushes. Portfolios are aligned to income profile, liquidity needs, and life stage.",
    icon: Target,
  },
  {
    eyebrow: "Disciplined growth",
    title: "Risk-Managed Wealth Building",
    description:
      "Allocation, rebalancing, and insurance cover work together to reduce noise and improve outcomes.",
    icon: Landmark,
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Mutual Fund Advisory",
    description:
      "Portfolio construction across equity, debt, and hybrid funds for goal-based compounding.",
    icon: ChartColumnIncreasing,
    cta: "Explore Strategy",
    href: "/services#mutual-fund-advisory",
  },
  {
    title: "SIP Planning",
    description:
      "Build systematic investment plans aligned to cash flow, target corpus, and market cycles.",
    icon: PiggyBank,
    cta: "Plan My SIP",
    href: "/services#sip-planning",
  },
  {
    title: "Stock Market Guidance",
    description:
      "High-conviction framework guidance for investors who want structure instead of speculation.",
    icon: CandlestickChart,
    cta: "Understand Risk",
    href: "/services#stock-market-guidance",
  },
  {
    title: "Health Insurance",
    description:
      "Modern risk protection design for individuals, parents, and young families.",
    icon: HeartPulse,
    cta: "Review Cover",
    href: "/services#health-insurance",
  },
  {
    title: "Term Insurance",
    description:
      "Human life value aligned protection with claim-focused insurer screening.",
    icon: ShieldPlus,
    cta: "Calculate Need",
    href: "/services#term-insurance",
  },
  {
    title: "Motor Insurance",
    description:
      "Clean coverage comparisons with premium efficiency and claims support readiness.",
    icon: Building2,
    cta: "Compare Options",
    href: "/services#motor-insurance",
  },
  {
    title: "Retirement Planning",
    description:
      "Future income planning that blends inflation awareness, withdrawal strategy, and asset allocation.",
    icon: HandCoins,
    cta: "Retire Confidently",
    href: "/services#retirement-planning",
  },
  {
    title: "Tax Saving Investments",
    description:
      "Tax-aware investment structures that protect liquidity while working toward long-term targets.",
    icon: ReceiptIndianRupee,
    cta: "Optimize Taxes",
    href: "/services#tax-saving-investments",
  },
  {
    title: "Child Education Planning",
    description:
      "Goal-specific funding strategies for domestic and global education milestones.",
    icon: GraduationCap,
    cta: "Fund the Goal",
    href: "/services#child-education-planning",
  },
  {
    title: "Wealth Management",
    description:
      "Integrated advisory covering investments, insurance, liquidity, and long-term strategy.",
    icon: Gem,
    cta: "Book a Review",
    href: "/services#wealth-management",
  },
];

export const whyChooseUs: IconCard[] = [
  {
    title: "Expert Guidance",
    description:
      "Planning frameworks designed to simplify complex financial decisions without sacrificing depth.",
    icon: Sparkles,
  },
  {
    title: "Goal Based Investing",
    description:
      "Every rupee is assigned a role, from emergency reserves to long-horizon wealth creation.",
    icon: Target,
  },
  {
    title: "Trusted Advisory",
    description:
      "Relationship-first advisory designed to feel more like a long-term CFO than a product intermediary.",
    icon: BadgeCheck,
  },
  {
    title: "Personalized Planning",
    description:
      "Plans adapt to your income growth, family stage, and evolving life goals.",
    icon: Layers3,
  },
  {
    title: "Long-term Relationship",
    description:
      "Quarterly reviews, milestone tracking, and ongoing decision support keep the plan alive.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Tax Efficient Strategies",
    description:
      "Portfolio recommendations account for post-tax outcomes instead of headline return alone.",
    icon: WalletCards,
  },
];

export const successMetrics: Metric[] = [
  {
    value: 100,
    suffix: "+",
    label: "Clients",
    detail: "A focused practice built on long-term retention and referrals.",
  },
  {
    value: 25,
    prefix: "₹",
    suffix: " Cr+",
    label: "Managed",
    detail: "Illustrative guided assets showcase scale without compromising advice quality.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
    detail: "Market cycles navigated with planning-led discipline.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    detail: "Built around clarity, responsiveness, and goal alignment.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Riya Mehta",
    role: "Senior Product Lead",
    result: "Built a disciplined SIP + emergency reserve plan",
    quote:
      "Scale Alpha made my finances feel elegant instead of overwhelming. The recommendations were practical, calm, and mapped directly to my goals.",
    rating: 5,
    initials: "RM",
    location: "Bengaluru",
  },
  {
    name: "Aman Khanna",
    role: "Startup Founder",
    result: "Rebalanced risk and created a founder-friendly protection stack",
    quote:
      "What stood out was the strategic thinking. It felt like working with a premium advisory desk, not a product sales funnel.",
    rating: 5,
    initials: "AK",
    location: "Delhi NCR",
  },
  {
    name: "Neha & Saurabh Jain",
    role: "Dual-income family",
    result: "Set up child education and retirement funding goals",
    quote:
      "The plan connected investing, insurance, and future milestones in one place. We finally feel like our money is moving with purpose.",
    rating: 5,
    initials: "NJ",
    location: "Pune",
  },
  {
    name: "Vikram Iyer",
    role: "Finance Professional",
    result: "Optimized tax-saving investments and long-term allocation",
    quote:
      "Strong advisory, clean communication, and a premium experience from first call to review cadence.",
    rating: 5,
    initials: "VI",
    location: "Mumbai",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "sip-tips-for-volatile-markets",
    title: "SIP Tips for Volatile Markets",
    category: "SIP",
    excerpt:
      "How to keep compounding on track when headlines are noisy and markets feel unpredictable.",
    readTime: "5 min read",
    date: "May 12, 2026",
    highlight: "Stay consistent. Volatility changes mood faster than it changes long-term math.",
    body: [
      "SIPs work best when they are attached to a time horizon instead of a market mood. If your goal is years away, temporary corrections are part of the journey rather than a reason to stop.",
      "Investors often underestimate the value of simply staying invested through periods of uncertainty. Consistency can matter more than trying to time entries perfectly.",
      "A premium advisory process adds value by matching contribution amounts, asset mix, and review frequency to the investor's actual life goals.",
    ],
  },
  {
    slug: "tax-saving-strategies-that-dont-hurt-liquidity",
    title: "Tax Saving Strategies That Do Not Hurt Liquidity",
    category: "Tax Planning",
    excerpt:
      "A cleaner way to think about tax-saving investments without locking yourself into the wrong products.",
    readTime: "6 min read",
    date: "May 8, 2026",
    highlight: "The best tax strategy improves after-tax outcomes and preserves flexibility.",
    body: [
      "Tax planning should not begin and end with Section 80C. The better framework is to understand what gets locked, what remains liquid, and how each decision fits the overall plan.",
      "A disciplined strategy can combine tax-efficient funds, insurance, retirement vehicles, and liquidity planning without overcommitting to one bucket.",
      "Reviewing tax decisions through the lens of long-term goals helps avoid buying products simply because the deadline is near.",
    ],
  },
  {
    slug: "insurance-planning-beyond-basic-cover",
    title: "Insurance Planning Beyond Basic Cover",
    category: "Insurance",
    excerpt:
      "Protection planning should support wealth creation, not distract from it.",
    readTime: "4 min read",
    date: "May 2, 2026",
    highlight: "Good insurance planning creates stability so investments can stay focused on growth.",
    body: [
      "Insurance is not an investment substitute. It is a risk-transfer tool designed to prevent a crisis from derailing the financial plan.",
      "The right structure usually starts with health cover, emergency liquidity, and term insurance sized to liabilities and family needs.",
      "Once protection is in place, the investment portfolio can be built with far more confidence and fewer reactive decisions.",
    ],
  },
  {
    slug: "retirement-planning-for-high-income-professionals",
    title: "Retirement Planning for High-Income Professionals",
    category: "Retirement",
    excerpt:
      "Why a strong income still needs a defined retirement strategy and inflation-aware corpus planning.",
    readTime: "7 min read",
    date: "April 26, 2026",
    highlight: "Income growth can hide planning gaps until lifestyle inflation makes them obvious.",
    body: [
      "High earners often assume future earnings will solve future retirement needs. In reality, lifestyle creep and delayed planning can make the required corpus larger than expected.",
      "Retirement planning works best when expenses, inflation, healthcare, and post-retirement withdrawals are treated as a single system.",
      "A consistent annual review helps translate career progress into long-term financial freedom.",
    ],
  },
  {
    slug: "mutual-fund-basics-first-principles",
    title: "Mutual Fund Basics from First Principles",
    category: "Mutual Funds",
    excerpt:
      "A modern explanation of mutual funds for investors who want clarity instead of jargon.",
    readTime: "5 min read",
    date: "April 19, 2026",
    highlight: "The product matters less than whether it fits your goal, time horizon, and risk profile.",
    body: [
      "Mutual funds pool investor capital into diversified portfolios managed under a stated mandate. The real question is not just what a fund is, but when it belongs in your plan.",
      "Different categories solve different problems. Equity funds target long-term growth, debt funds improve stability, and hybrid funds balance the two.",
      "Advisory value comes from allocation, review discipline, and knowing what not to buy as much as what to include.",
    ],
  },
];

export const marketQuotes: MarketQuote[] = [
  { symbol: "NIFTY", label: "NIFTY 50", price: 24612.8, change: 0.62 },
  { symbol: "SENSEX", label: "BSE SENSEX", price: 80942.1, change: 0.55 },
  { symbol: "GOLD", label: "Gold (10g)", price: 74880, change: -0.18, unit: "₹" },
  { symbol: "USDINR", label: "USD / INR", price: 83.12, change: 0.14 },
];

export const faqs = [
  {
    question: "Is SIP suitable for new investors?",
    answer:
      "Yes. SIPs can be an effective starting point because they build discipline, spread entry points across market cycles, and align well with monthly income patterns.",
  },
  {
    question: "How do you choose mutual funds for a client?",
    answer:
      "Fund selection follows the plan, not the other way around. We consider goals, time horizon, risk capacity, tax impact, and the role each fund should play inside the portfolio.",
  },
  {
    question: "Can insurance and investment planning be done together?",
    answer:
      "They should be. Protection planning helps preserve the investment journey by reducing the risk that a major event forces portfolio disruption.",
  },
  {
    question: "What kind of returns should investors expect?",
    answer:
      "Returns depend on asset class, time horizon, and market conditions. A credible advisory process frames expectations around suitability, not promises or fixed outcomes.",
  },
  {
    question: "How often should a financial plan be reviewed?",
    answer:
      "At least annually, and sooner after major life changes such as marriage, children, income jumps, job changes, or large liquidity events.",
  },
  {
    question: "Do you support risk profiling before recommendations?",
    answer:
      "Yes. Risk profiling is essential because the right portfolio is not the one with the highest headline return, but the one a client can stay committed to.",
  },
];

export const advisoryProcess: IconCard[] = [
  {
    title: "Discovery",
    description:
      "Understand income, liabilities, goals, and existing investments.",
    icon: ArrowUpRight,
  },
  {
    title: "Blueprint",
    description:
      "Translate priorities into a structured action plan and allocation framework.",
    icon: BarChart3,
  },
  {
    title: "Execution",
    description:
      "Implement investments, protection, and review cadence with clean documentation.",
    icon: CircleDollarSign,
  },
  {
    title: "Review",
    description:
      "Track progress, rebalance thoughtfully, and adapt as life changes.",
    icon: LineChart,
  },
];

export const contactCards: IconCard[] = [
  {
    title: "WhatsApp Consultation",
    description:
      "Start a quick conversation, share your goals, or request a portfolio review.",
    icon: CircleDollarSign,
  },
  {
    title: "Email Advisory Desk",
    description:
      "Send your queries, current holdings, or meeting preferences for a detailed response.",
    icon: FileBadge2,
  },
  {
    title: "Advisory Office",
    description:
      "Pan-India service with consultation-led meetings and structured follow-up.",
    icon: Building2,
  },
];
