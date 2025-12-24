import {
  Badge,
  Button,
  Card,
  Section,
  Stat,
  cn,
} from "../components/ui";

const navLinks = ["Home", "Solutions", "Integrations", "Pricing", "Resources"];
const partners = [
  "slack",
  "amazon",
  "dropbox",
  "loom",
  "zoom",
  "discord",
  "mailchimp",
];

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
  { title: "For SaaS Platforms", copy: "Embed fintech and onboard users in minutes." },
  { title: "For Fintech Startups", copy: "Ship quickly with compliant building blocks." },
  { title: "For Enterprises", copy: "Modernize legacy rails with cloud-first APIs." },
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
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(14,165,233,0.12),transparent_25%),linear-gradient(180deg,_#0b1220_0%,_#050914_65%,_#05070f_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:36px_36px] opacity-30" />

      <header className="sticky top-0 z-20 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-slate-900 font-black">
              F
            </div>
            <span>finech</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            {navLinks.map((link) => (
              <a key={link} className="hover:text-white" href="#">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
          <Button variant="secondary" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="pb-24">
        <Section className="pt-12 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge>Finance Solution</Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Empowering the Next Generation of Financial Infrastructure
                </h1>
                <p className="max-w-2xl text-lg text-slate-200/80">
                  Powerful APIs and seamless integrations to help businesses move money,
                  manage risk, and scale globally with confidence.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-2 rounded-full bg-white/5 px-4 py-3 ring-1 ring-white/10 sm:max-w-md">
                  <span className="text-slate-300">you@email.com</span>
                </div>
                <Button>Talk to Sales</Button>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                <Stat label="Failure Rate" value="0.01%" />
                <Stat label="Faster Processing" value="95%" />
                <Stat label="Currencies" value="100+" />
              </div>
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
                {partners.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 capitalize"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900 to-slate-950 p-6 md:p-8">
              <div className="absolute inset-x-6 top-6 h-24 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3">
                <p className="text-xs font-mono text-sky-100">GET /payments</p>
                <p className="text-xs font-mono text-slate-200">
                  Host: api.finech.com
                </p>
                <p className="text-xs font-mono text-slate-200">
                  Authorization: Bearer YOUR_API_KEY
                </p>
                <p className="text-xs font-mono text-slate-200">Content-Type: application/json</p>
              </div>
              <div className="mt-28 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span>Transfer Multi-Currency</span>
                  <span className="text-emerald-300">Success</span>
                </div>
                <div className="space-y-3 rounded-xl bg-slate-900/80 p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-slate-300">Source</p>
                      <p className="text-lg font-semibold">$1,250.00 USD</p>
                      <p className="text-xs text-slate-400">Michael Johnson · JPMorgan</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-slate-300">Destination</p>
                      <p className="text-lg font-semibold">¥187,500 JPY</p>
                      <p className="text-xs text-slate-400">Hiroshi Tanaka · MUFJ</p>
                    </div>
                  </div>
                  <div className="h-1 w-full rounded-full bg-slate-800">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Card className="border-0 bg-white/10 px-4 py-3 text-center">
                      <p className="text-2xl font-semibold">0.01%</p>
                      <p className="text-xs text-slate-300">Failure Rate</p>
                    </Card>
                    <Card className="border-0 bg-white/10 px-4 py-3 text-center">
                      <p className="text-2xl font-semibold">95%</p>
                      <p className="text-xs text-slate-300">Faster Processing</p>
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
              Unlock seamless transactions, secure financial services, and limitless scale with
              our API-driven infrastructure.
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
              Handle transactions, streamline operations, and integrate financial services
              seamlessly.
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

        <Section id="api" className="bg-slate-900/60">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <Badge>API & SDK Toolkit</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">
                Seamless Integration with Developer-Friendly Tools
              </h2>
              <p className="text-lg text-slate-200/80">
                Integrate Finech efficiently with robust documentation, SDKs, and observability
                baked in.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {apiHighlights.map((item) => (
                  <Card key={item} className="p-4 text-sm font-semibold">
                    {item}
                  </Card>
                ))}
              </div>
              <div className="flex gap-3">
                <Button>Explore APIs</Button>
                <Button variant="ghost">View Docs</Button>
              </div>
            </div>
            <Card className="p-6 font-mono text-sm bg-slate-900/90 border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Sandbox Session
              </div>
              <pre className="mt-4 whitespace-pre-wrap leading-7 text-sky-100">
{`POST /transactions/v1/4786
Authorization: Bearer your_api_key
Content-Type: application/json
Idempotency-Key: b3f2101e

{
  "id": "txn_9823745",
  "source": "usd_balance",
  "amount": 1250.00,
  "currency": "USD",
  "destination_currency": "JPY",
  "beneficiary": "hiroshi@partnerprovider.com",
  "description": "Cross-border payout",
  "metadata": { "invoiceId": "inv_2044" }
}`}
              </pre>
            </Card>
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
                Built to meet the highest industry standards so transactions and data stay safe
                and compliant.
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
                    <div className="rounded-xl bg-white/5 px-3 py-3 text-center">MFA</div>
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
              Join thousands of teams that trust Finech to power seamless, secure, and reliable
              money movement.
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
              Transparent pricing with powerful features whether you&apos;re just starting or
              scaling globally.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((item) => (
              <Card
                key={item.plan}
                className={cn(
                  "p-6 flex flex-col gap-4",
                  item.highlight && "border-sky-400/40 bg-white/10 shadow-sky-500/30",
                )}
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {item.highlight ? "Most Popular" : "Flexible"}
                  </p>
                  <h3 className="text-2xl font-semibold">{item.plan}</h3>
                  <p className="text-sm text-slate-200/80">{item.description}</p>
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
                <Button variant={item.highlight ? "secondary" : "ghost"} fullWidth>
                  {item.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-white/10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge>Finance Solution</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Scale Your Payments?</h2>
            <p className="max-w-2xl text-lg text-slate-200/80">
              Join thousands of businesses using Finech to simplify transactions, enhance
              security, and accelerate growth.
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
