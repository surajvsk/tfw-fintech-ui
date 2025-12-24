"use client";
import { useState } from "react";
import { Badge, Button, Card, Section, Stat, cn } from "../components/ui";
import { Code2, Globe, ShieldCheck, ArrowRight, Menu, X  } from "lucide-react";
const navLinks = ["Home", "Solutions", "Integrations", "Pricing", "Resources"];
const partners = ["slack", "amazon", "dropbox", "loom"];

const whyChoose = [
  {
    title: "Global Payments",
    description:
      "Accept payments in 100+ currencies with instant settlement and transparent FX.",
    icon: "🌐",
  },
  {
    title: "Banking as a Service",
    description:
      "Issue virtual and physical cards, manage ledgers, and move funds with secure APIs.",
    icon: "💳",
  },
  {
    title: "Scalability",
    description:
      "API-driven platform that grows with you—automate risk, health checks, and workflows.",
    icon: "📈",
  },
  {
    title: "Compliance & Security",
    description:
      "Built-in KYC, AML, MFA, and fraud detection to keep every transaction safe.",
    icon: "🔒",
  },
];

const industries = [
  {
    title: "For Marketplaces",
    copy: "Split, route, and settle multi-party payments globally.",
  },
  {
    title: "For SaaS Platforms",
    copy: "Embed fintech and onboard users in minutes.",
  },
  {
    title: "For Fintech Startups",
    copy: "Ship quickly with compliant building blocks.",
  },
  {
    title: "For Enterprises",
    copy: "Modernize legacy rails with cloud-first APIs.",
  },
];

const apiHighlights = [
  "RESTful APIs & Webhooks",
  "SDKs for multiple languages",
  "Sandbox for rapid testing",
  "24/7 observability",
];

const security = [
  "End-to-End Encryption",
  "PCI DSS Level 1 Compliance",
  "AI-Powered Fraud Detection",
  "Regulatory Coverage (KYC, AML, PSD2)",
];

const testimonials = [
  {
    name: "Frances Susan",
    role: "COO, toggl",
    quote:
      "Managing enterprise transactions at scale requires resilience. Finech's real-time monitoring and AI-powered fraud make them the perfect partner.",
  },
  {
    name: "Revaa Rhodes",
    role: "Head of Ops, upwork",
    quote:
      "Fintech's card stack was so complex, but with Finech we built it in days. Our customers love the seamless experience.",
  },
  {
    name: "Caleb Lake",
    role: "CEO, zoom",
    quote:
      "Finech's API-first approach allowed us to integrate financial services effortlessly. A day-one favorite for our developers.",
  },
  {
    name: "Aaron Phillips",
    role: "CTO, spotify",
    quote:
      "Security was our top concern and Finech exceeded expectations. Their PCI DSS compliance and AI fraud detection gave us confidence to scale.",
  },
];

const pricing = [
  {
    plan: "Starter Plan",
    price: "$0",
    cadence: "/month",
    description: "Perfect for product launches.",
    features: [
      "Requests up to 50,000/month",
      "Sandbox + developer tools",
      "Basic support",
      "KYC rules",
      "Usage-based pricing on top",
    ],
    cta: "Start Now",
    highlight: false,
  },
  {
    plan: "Growth Plan",
    price: "$99",
    cadence: "/month",
    description: "Most popular for scaling teams.",
    features: [
      "Requests up to 250,000/month",
      "Multi-currency treasury",
      "Risk & fraud controls",
      "Advanced observability",
      "Priority support",
    ],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    plan: "Scale Plan",
    price: "Custom",
    cadence: "pricing",
    description: "Tailored for high-volume enterprises.",
    features: [
      "Unlimited requests",
      "Dedicated success team",
      "Private cloud or on-prem",
      "Custom risk workflows",
      "Enterprise SLAs",
    ],
    cta: "Discuss More",
    highlight: false,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(14,165,233,0.1),transparent_25%),linear-gradient(180deg,_#0f1729_0%,_#0a0f1e_50%,_#050914_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 ">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-2 text-lg font-bold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 text-slate-950 font-black text-base">
              F
            </div>
            <span>finech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                className="hover:text-white transition-colors"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="text-sm">
              Login
            </Button>
            <Button className="text-sm">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
            <nav className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" fullWidth className="justify-center">
                  Login
                </Button>
                <Button fullWidth className="justify-center">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    {/*[background-size:40px_40px] bg-[radial-gradient(#2f333c_1px,transparent_1px)] */}
    <main className="relative pb-24 overflow-x-hidden">
    <Section className="relative pt-16 md:pt-24 pb-12 hero_background_image">
      <div
    aria-hidden
    className="absolute inset-0 -z-10
      bg-[radial-gradient(#2f333c_1px,transparent_1px)]
      [background-size:40px_40px]
      opacity-70"
  />
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge className="bg-sky-500/10 text-sky-400 border-sky-500/20">
                FINANCE SOLUTION
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
                  Empowering the Next Generation of Financial Infrastructure,
                  Designed for You
                </h1>
                <p className="max-w-2xl text-base text-slate-300 leading-relaxed md:text-lg">
                  Powerful APIs and seamless integrations to help businesses
                  move money, manage risk, and scale globally.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-3 rounded-full bg-white/5 px-5 py-3.5 ring-1 ring-white/10 sm:max-w-xs">
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-slate-400">
                    Send your email
                  </span>
                </div>
                <Button className="bg-sky-600 hover:bg-sky-500">
                  Talk to Sales
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Partners in Financial Success
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {partners.map((logo) => (
                    <div
                      key={logo}
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <div className="h-6 w-6 rounded bg-white/5" />
                      <span className="text-sm font-medium capitalize">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-5 md:p-7 backdrop-blur-sm">
              {/* API Code Block */}
              <div className="relative rounded-xl border border-white/10 bg-slate-900/90 px-4 py-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <p className="text-emerald-400">
                    GET <span className="text-slate-300">/payments</span>
                  </p>
                  <p className="text-slate-400">
                    Host: <span className="text-sky-400">api.finech.com</span>
                  </p>
                  <p className="text-slate-400">
                    Authorization: Bearer{" "}
                    <span className="text-amber-400">YOUR_API_KEY</span>
                  </p>
                  <p className="text-slate-400">
                    Content-Type: application/
                    <span className="text-sky-400">json</span>
                  </p>
                </div>
              </div>

              {/* Transaction Card */}
              <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span className="text-xs font-medium text-slate-300">
                      Transfer Multi-Currency
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-emerald-400">
                      Success
                    </span>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg bg-slate-900/90 p-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-400">Source</p>
                      <p className="text-lg font-bold text-white">$1,250.00</p>
                      <p className="text-xs text-sky-400">USD</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Michael Johnson
                      </p>
                      <p className="text-xs text-slate-500">
                        JPMorgan Chase • 5678 9012 3456
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-xs text-slate-400">Destination</p>
                      <p className="text-lg font-bold text-white">¥187,500</p>
                      <p className="text-xs text-rose-400">JPY</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Hiroshi Tanaka
                      </p>
                      <p className="text-xs text-slate-500">
                        Mitsubishi UFJ Bank • 9876 5432 1098
                      </p>
                    </div>
                  </div>

                  <div className="relative h-1.5 w-full rounded-full bg-slate-800">
                    <div className="absolute h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Card className="border-0 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">0.01%</p>
                      <p className="text-xs text-slate-300 mt-1">
                        Failure Rate
                      </p>
                    </Card>
                    <Card className="border-0 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">95%</p>
                      <p className="text-xs text-slate-300 mt-1">
                        Faster Processing
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        
        </Section>

        <Section id="why" className="bg-slate-900/60">
          <div className="text-center space-y-3">
            <Badge>Why Choose Finech?</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Powering the Future of Finance
            </h2>
            <p className="text-lg text-slate-200/80">
              Unlock seamless transactions, secure financial services, and
              limitless scale with our API-driven infrastructure.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyChoose.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-xl">{feature.icon}</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-slate-200/80">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="industries">
          <div className="text-center space-y-3">
            <Badge>Who We Support</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Financial Solutions for Every Industry
            </h2>
            <p className="text-lg text-slate-200/80">
              Handle transactions, streamline operations, and integrate
              financial services seamlessly.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <Card key={item.title} className="p-5 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200/80">{item.copy}</p>
              </Card>
            ))}
          </div>
        </Section>

<Section id="api" className="bg-[#0f172a] text-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
    
    {/* Left Content */}
    <div className="space-y-6">
      <span className="text-blue-500 font-bold tracking-wider text-sm uppercase">
        API & Developer
      </span>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Seamless Integration with <br /> Powerful Developer Tools
      </h2>
      <p className="text-lg text-slate-400 max-w-md">
        Integrate Finech effortlessly with our developer-friendly APIs, designed for speed, security, and scalability.
      </p>
      
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl flex items-center gap-2 transition-all">
        Explore API Docs <ArrowRight size={18} />
      </Button>

      {/* Features List */}
      <div className="pt-8 space-y-4">
        <div className="flex items-center gap-3 text-slate-300">
          <Code2 size={20} className="text-slate-400" />
          <span className="font-medium text-base">RESTful APIs & Webhooks</span>
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <Globe size={20} className="text-slate-400" />
          <span className="font-medium text-base">SDKs for Multiple Languages</span>
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <ShieldCheck size={20} className="text-slate-400" />
          <span className="font-medium text-base">Sandbox for Testing</span>
        </div>
      </div>
    </div>

    {/* Right Content - API Card Container */}
    <div className="relative group">
      {/* Background Glow effect from image */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      
      {/* The actual Card container matching image transparency */}
      <div className="">
        <div className="w-full max-w-lg  rounded-xl shadow-2xl overflow-hidden font-mono relative bg-slate-800/40 backdrop-blur-sm border border-slate-700  rounded-2xl">
          
          {/* Header/Title Bar */}
          <div className="px-4 py-3 flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full"></div>
          </div>

          {/* Code Content */}
          <div className="p-6 text-[13px] leading-relaxed text-[#475569] font-bold bg-white">
            <div className="space-y-0.5">
              <p><span className="text-[#22c55e]">GET</span> <span className="text-[#38bdf8]">/transactions/txn_67890</span></p>
              <p>Host: <span className="text-[#22c55e]">api.finech.com</span></p>
              <p>Authorization: Bearer <span className="text-[#f97316]">YOUR_API_KEY</span></p>
              <p>Content-Type: <span className="text-[#38bdf8]">application/json</span></p>
              <p>Accept: <span className="text-[#38bdf8]">application/json</span></p>
              <p>User-Agent: PaymentClient/<span className="text-[#38bdf8]">1.0</span></p>
              <p>Connection: <span className="text-[#22c55e]">keep-alive</span></p>
              <p>X-Request-ID: <span className="text-[#38bdf8]">req_123456789</span></p>
              <p>X-Client-Version: 1.2.3</p>
              <p>Referer: <span className="text-[#22c55e]">https://dashboard.paymentprovider.com</span></p>
              <p>Cache-Control: <span className="text-[#22c55e]">no-cache</span></p>
              <p>Accept-Encoding: <span className="text-[#f97316]">gzip, deflate, br</span></p>
              <p>Accept-Language: <span className="text-[#f97316]">en-US,en;q=0.9</span></p>
              <p>X-Forwarded-For: <span className="text-[#22c55e]">192.168.1.100</span></p>
              <p>X-Api-Signature: <span className="text-[#f97316]">sha256</span>=<span className="text-[#38bdf8]">abcdef1234567890</span></p>
              <p>DNT: 1</p>
              <p>Pragma: no-cache</p>
              <p>X-Device-ID: <span className="text-[#38bdf8]">device_987654321</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

        <Section id="security">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3">
              <Badge>Security & Compliance</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">
                Enterprise-Grade Protection for Your Business
              </h2>
              <p className="text-lg text-slate-200/80">
                Built to meet the highest industry standards so transactions and
                data stay safe and compliant.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {security.map((item) => (
                  <Card key={item} className="p-4 text-sm font-semibold">
                    {item}
                  </Card>
                ))}
              </div>
            </div>
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border-white/10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-16 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500" />
                  <span className="text-sm text-slate-200">Tokenized</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-full rounded-full bg-slate-800">
                    <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                    <div className="rounded-xl bg-white/5 px-3 py-3 text-center">
                      MFA
                    </div>
                    <div className="rounded-xl bg-white/5 px-3 py-3 text-center">
                      PCI DSS
                    </div>
                    <div className="rounded-xl bg-white/5 px-3 py-3 text-center">
                      Fraud Detection
                    </div>
                    <div className="rounded-xl bg-white/5 px-3 py-3 text-center">
                      Monitoring
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="testimonials" className="bg-slate-900/60">
          <div className="text-center space-y-3">
            <Badge>Customer Voices</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              How Businesses Thrive with Finech
            </h2>
            <p className="text-lg text-slate-200/80">
              Join thousands of teams that trust Finech to power seamless,
              secure, and reliable money movement.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.name} className="p-6 space-y-3">
                <p className="text-sm text-slate-200/90">{item.quote}</p>
                <div className="text-sm font-semibold text-white">
                  {item.name}
                  <span className="block text-xs font-normal text-slate-300">
                    {item.role}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="pricing">
          <div className="text-center space-y-3">
            <Badge>Pricing Plan</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Find the Right Plan for Your Business
            </h2>
            <p className="text-lg text-slate-200/80">
              Transparent pricing with powerful features whether you&apos;re
              just starting or scaling globally.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((item) => (
              <Card
                key={item.plan}
                className={cn(
                  "p-6 flex flex-col gap-4",
                  item.highlight &&
                    "border-sky-400/40 bg-white/10 shadow-sky-500/30"
                )}
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {item.highlight ? "Most Popular" : "Flexible"}
                  </p>
                  <h3 className="text-2xl font-semibold">{item.plan}</h3>
                  <p className="text-sm text-slate-200/80">
                    {item.description}
                  </p>
                </div>
                <div className="text-3xl font-bold">
                  {item.price}
                  <span className="text-base font-normal text-slate-200/80">
                    {" "}
                    {item.cadence}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-200/80">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant={item.highlight ? "secondary" : "ghost"}
                  fullWidth
                >
                  {item.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-white/10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge>Finance Solution</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Scale Your Payments?
            </h2>
            <p className="max-w-2xl text-lg text-slate-200/80">
              Join thousands of businesses using Finech to simplify
              transactions, enhance security, and accelerate growth.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex w-full items-center gap-2 rounded-full bg-white/5 px-4 py-3 ring-1 ring-white/10 sm:min-w-[320px]">
                <span className="text-slate-300">Enter your email</span>
              </div>
              <Button>Talk to Sales</Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-slate-900 font-black">
                F
              </div>
              <span>finech</span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              {partners.map((logo) => (
                <span key={logo} className="capitalize">
                  {logo}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 text-sm text-slate-200/80 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white">Company</p>
              <ul className="mt-2 space-y-1">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Products</p>
              <ul className="mt-2 space-y-1">
                <li>API & Developer Tools</li>
                <li>Payments</li>
                <li>Card Issuing</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Resources</p>
              <ul className="mt-2 space-y-1">
                <li>Docs</li>
                <li>Guides</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Legal</p>
              <ul className="mt-2 space-y-1">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Finech. All rights reserved.</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white">
                Login
              </a>
              <a href="#" className="hover:text-white">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
