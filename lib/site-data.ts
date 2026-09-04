import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Building2,
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
  TrendingUp,
  WalletCards,
} from "lucide-react";

export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavDropdownItem[];
};

export type FinancialNeed = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  ctaLabel: string;
  ctaHref: string;
  accent: string;
};

export type AdvisoryStep = {
  step: string;
  title: string;
  description: string;
  details: string[];
};

export type ClientServiceItem = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
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
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919403395768";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "scalealpha.invest@gmail.com";
const consultationEmail =
  process.env.NEXT_PUBLIC_CONSULTATION_EMAIL ?? contactEmail;
const officeAddress =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
  "B-26/1, Tiger Gate, Kendriya Vihar, Kharghar, Navi Mumbai, Maharashtra 410210";
const officeLabel =
  process.env.NEXT_PUBLIC_OFFICE_LABEL ?? "Scale Alpha Office";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scalealpha.in";

export const siteConfig = {
  name: "Scale Alpha",
  contactName: "Kaushal Balte",
  tagline: "Smart Financial Planning for a Secure Future",
  description:
    "Scale Alpha, led by Kaushal Balte, is an AMFI-Registered Mutual Fund Distributor offering mutual funds, SIP planning, insurance, and goal-based financial planning in India.",
  longDescription:
    "Scale Alpha is a premier mutual fund distribution and wealth planning firm crafted to convert trust into actionable growth with modern fintech precision, transparent compliance cues, and disciplined goal-based investing.",
  whatsappNumber,
  contactEmail,
  consultationEmail,
  officeAddress,
  officeLabel,
  amfiArn: "ARN-269246",
  siteUrl,
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/scale.alpha/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@scale-alpha",
    },
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Offerings",
      href: "/services",
      children: [
        {
          label: "Product Basket",
          href: "/offerings/product-basket",
          description: "Mutual Funds, Equity, NPS, PMS, Loan against MF & Insurance",
        },
        {
          label: "Client Services",
          href: "/offerings/client-services",
          description: "Client Desk portfolio tracker, E-Wealth account & Rebalancing",
        },
        {
          label: "All Services Overview",
          href: "/services",
          description: "Detailed breakdown of our investment & protection offerings",
        },
      ],
    },
    {
      label: "Calculators",
      href: "/calculators",
      children: [
        {
          label: "SIP & Wealth Calculators",
          href: "/calculators",
          description: "SIP, Step-up SIP, Lumpsum, SWP and Delay Cost calculators",
        },
        {
          label: "Financial Health Score",
          href: "/tools/financial-health-score",
          description: "Quick 2-minute diagnostic check for financial readiness",
        },
      ],
    },
    {
      label: "Insights",
      href: "/blogs",
      children: [
        {
          label: "Articles & Knowledge Hub",
          href: "/blogs",
          description: "Educational insights on SIP, tax planning, and risk management",
        },
        {
          label: "Important Regulatory Links",
          href: "/resources/important-links",
          description: "AMFI, SEBI, CAMS, KFintech, and investor service portals",
        },
      ],
    },
  ] satisfies NavItem[],
};

export const trustPillars: IconCard[] = [
  {
    eyebrow: "Regulated trust",
    title: "AMFI-Registered Mutual Fund Distributor",
    description:
      "Every client journey is anchored in compliance, suitability, and transparent communication.",
    icon: FileBadge2,
  },
  {
    eyebrow: "Clear process",
    title: "Transparent Distribution",
    description:
      "We structure recommendations around goals, risk tolerance, timelines, and full visibility into the plan.",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Tailored planning",
    title: "Personalized Planning",
    description:
      "Portfolios are aligned to income profile, liquidity needs, and life stage.",
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

export const financialNeeds: FinancialNeed[] = [
  {
    id: "retirement",
    title: "HAPPY RETIREMENT",
    subtitle: "Financial Independence",
    tagline: "Build an inflation-proof retirement nest egg.",
    description:
      "Accumulate long-term wealth through disciplined equity compounding and create reliable monthly cashflow via SWP.",
    keyBenefits: [
      "Inflation-adjusted corpus planning",
      "Goal-aligned equity/debt glide path",
      "Tax-efficient monthly SWP income",
    ],
    ctaLabel: "Plan Retirement",
    ctaHref: "/calculators",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "wealth",
    title: "WEALTH BUILDING",
    subtitle: "Capital Compounding",
    tagline: "Maximize wealth creation through disciplined SIPs.",
    description:
      "Accelerate compounding with diversified equity mutual fund portfolios and step-up SIPs tailored to your income growth.",
    keyBenefits: [
      "Step-up SIPs matching salary hikes",
      "Diversification across market caps",
      "Disciplined periodic rebalancing",
    ],
    ctaLabel: "Start Wealth SIP",
    ctaHref: "/calculators",
    accent: "from-emerald-600/20 to-cyan-500/20",
  },
  {
    id: "home",
    title: "OWN A HOME",
    subtitle: "Down-Payment Planning",
    tagline: "Fund your dream home down payment with clarity.",
    description:
      "Structure medium-term hybrid funds to accumulate down payment capital without liquidating your long-term reserves.",
    keyBenefits: [
      "Targeted 3 to 7-year goal roadmaps",
      "Capital preservation near goal date",
      "Avoidance of costly personal loans",
    ],
    ctaLabel: "Calculate Down Payment",
    ctaHref: "/calculators",
    accent: "from-teal-600/20 to-emerald-500/20",
  },
  {
    id: "child",
    title: "CHILD FUTURE",
    subtitle: "Education & Security",
    tagline: "Secure funds for your child's higher education.",
    description:
      "Beat 10-12% education inflation with milestone-based mutual fund investments timed to college admission dates.",
    keyBenefits: [
      "Inflation-adjusted college fee roadmap",
      "Automated monthly goal SIPs",
      "Parental insurance protection shield",
    ],
    ctaLabel: "Plan Child Education",
    ctaHref: "/calculators",
    accent: "from-emerald-500/20 to-sky-500/20",
  },
];

export const advisoryWorkflow: AdvisoryStep[] = [
  {
    step: "01",
    title: "Plan",
    description:
      "Personalized advice across investments, goals, insurance, and taxes.",
    details: [
      "Asset & liability mapping",
      "Risk profile & goal horizon analysis",
      "Tax optimization blueprint",
    ],
  },
  {
    step: "02",
    title: "Execute",
    description:
      "100% paperless onboarding and single-platform execution across leading AMCs.",
    details: [
      "Instant KYC verification",
      "Direct AMC digital onboarding",
      "Automated monthly SIP mandates",
    ],
  },
  {
    step: "03",
    title: "Manage",
    description:
      "Continuous tracking, periodic reviews, and risk-aligned rebalancing.",
    details: [
      "Consolidated family reporting",
      "Quarterly & annual portfolio reviews",
      "Tactical asset rebalancing",
    ],
  },
];

export const productBasket: (IconCard & { badge?: string; cta: string; href: string })[] = [
  {
    title: "Mutual Funds",
    eyebrow: "Core Wealth",
    description:
      "Equity, Hybrid, Debt, and ELSS Tax-saving funds managed by top fund managers.",
    icon: PiggyBank,
    badge: "Popular",
    cta: "Explore Funds",
    href: "/offerings/product-basket",
  },
  {
    title: "Equity & ETFs",
    eyebrow: "Direct Growth",
    description:
      "Direct equities and low-cost index ETFs for transparent capital growth.",
    icon: TrendingUp,
    badge: "Growth",
    cta: "View Strategies",
    href: "/offerings/product-basket",
  },
  {
    title: "NPS (National Pension)",
    eyebrow: "Retirement & Tax",
    description:
      "Government-backed scheme with extra ₹50,000 deduction under Sec 80CCD(1B).",
    icon: Landmark,
    badge: "Tax Saving",
    cta: "Learn NPS",
    href: "/offerings/product-basket",
  },
  {
    title: "PMS (Portfolio Management)",
    eyebrow: "HNI Tailored",
    description:
      "Customized, concentrated direct stock portfolios for high-net-worth investors.",
    icon: Gem,
    badge: "HNI",
    cta: "Consult PMS",
    href: "/offerings/product-basket",
  },
  {
    title: "Loan Against Mutual Funds",
    eyebrow: "Instant Liquidity",
    description:
      "Unlock quick liquidity against your holdings without selling or losing returns.",
    icon: Banknote,
    badge: "Liquidity",
    cta: "Check Eligibility",
    href: "/offerings/product-basket",
  },
  {
    title: "Comprehensive Insurance",
    eyebrow: "Risk Protection",
    description:
      "Term Life, Health, Motor, and Personal Accident insurance to shield your family.",
    icon: ShieldCheck,
    badge: "Essential",
    cta: "Protect Family",
    href: "/offerings/product-basket",
  },
];

export const clientServicesList: ClientServiceItem[] = [
  {
    step: "01",
    title: "Client Desk",
    subtitle: "Family Wealth Hub",
    description:
      "Consolidates mutual funds, stocks, insurance, and deposits for your entire family in one place.",
    features: [
      "Single-view net worth tracking",
      "Tax-ready capital gains reports",
      "Historical CAGR & XIRR performance",
    ],
    cta: "Access Client Desk",
    href: "/portal",
  },
  {
    step: "02",
    title: "E-Wealth A/c Service",
    subtitle: "Digital Investing",
    description:
      "Execute paperless transactions, switch schemes, and set up mandates anytime, anywhere.",
    features: [
      "100% paperless digital KYC",
      "Instant mandate authorization",
      "Fast top-up SIPs & redemptions",
    ],
    cta: "Open E-Wealth Account",
    href: "/portal",
  },
  {
    step: "03",
    title: "Smart Rebalancing",
    subtitle: "Risk Alignment",
    description:
      "Ongoing portfolio health diagnostics and risk-calibrated asset rebalancing.",
    features: [
      "Asset-allocation drift check",
      "Underperforming scheme weed-out",
      "1-on-1 review with Kaushal Balte",
    ],
    cta: "Book Portfolio Review",
    href: "/contact",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "SIP Planning",
    description:
      "Build systematic investment plans aligned to cash flow, target corpus, and market cycles.",
    icon: PiggyBank,
    cta: "Plan My SIP",
    href: "/services#sip-planning",
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
      "Integrated planning covering investments, insurance, liquidity, and long-term strategy.",
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
    title: "Trusted Distribution",
    description:
      "Relationship-first support designed around long-term goals and disciplined implementation.",
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
      "What stood out was the strategic thinking. It felt like working with a premium financial planning desk.",
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
      "Strong planning support, clean communication, and a premium experience from first call to review cadence.",
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
      "A structured distribution process supports investors by matching contribution amounts, asset mix, and review frequency to their actual life goals.",
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
      "Distribution support includes allocation, review discipline, and product selection aligned with the investor's goals.",
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
      "Returns depend on asset class, time horizon, and market conditions. A credible planning process frames expectations around suitability, not promises or fixed outcomes.",
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

export const planningProcess: IconCard[] = [
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
    title: "Email Planning Desk",
    description:
      "Send your queries, current holdings, or meeting preferences for a detailed response.",
    icon: FileBadge2,
  },
  {
    title: "Distribution Office",
    description:
      "Pan-India service with consultation-led meetings and structured follow-up.",
    icon: Building2,
  },
];
