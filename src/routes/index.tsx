import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Bug, ShieldCheck, Workflow, Gauge, TestTube2, Cpu, GitBranch, Database,
  Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles, CheckCircle2,
  Layers, Smartphone, Code2, FileCheck2, AlertTriangle, Activity, Search, Send,
  Terminal, PlayCircle, FileText,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irene Njuguna — QA / SDET Portfolio" },
      { name: "description", content: "QA Engineer & SDET transitioning from full-stack. Manual + automated testing, Cypress, Playwright, Postman, CI quality gates." },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container-page flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-full text-sm font-bold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}>IN</span>
          <span className="leading-tight">
            <span className="block text-[0.7rem] uppercase tracking-widest text-muted-foreground">QA / SDET Portfolio</span>
            <span className="block font-display font-semibold">Irene <span className="text-primary">Njuguna</span></span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-1.5">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="px-3 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Stensis" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center w-10 h-10 rounded-full border border-border bg-surface hover:text-primary transition"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com/in/irene-njuguna98" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded-full border border-border bg-surface hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow)"
            style={{ background: "var(--gradient-primary)" }}>
            Hire me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12 py-16 lg:py-24 items-center">

        {/* Left Side: Professional Profile Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="chip-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
              Open to QA Engineer / SDET roles
            </span>
            <span className="chip"><MapPin className="w-3 h-3" /> Nairobi, Kenya</span>
            <span className="chip">Remote / Hybrid</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Irene Njuguna</span>
          </h1>

          <div className="mt-5 flex items-start gap-2 text-lg md:text-xl text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0" />
            <span className="font-display leading-snug">
              Software Engineer transitioned to <span className="text-foreground">Quality Assurance</span>, specializing in <span className="text-foreground">Test Automation</span>, <span className="text-foreground">API Validation</span> &amp; <span className="text-primary">E2E Testing Frameworks</span>
            </span>
          </div>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I leverage <span className="text-foreground font-medium">3+ years of professional software development experience</span> to build resilient, code-driven automation testing suites. By bringing a developer’s mindset into QA, I bridge the gap between building software and securing its stability—ensuring high-quality, stable deployments.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Automation Engineering", "API & Integration Testing", "CI/CD Regression Gates", "Defect Analysis & Tracking"].map((t) => (
              <span key={t} className="chip-accent"><CheckCircle2 className="w-3 h-3" />{t}</span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { icon: TestTube2, label: "Core Focus", value: "Developer-Led QA" },
              { icon: Bug, label: "Objective", value: "Flawless Releases" },
              { icon: ShieldCheck, label: "QA Paradigm", value: "Shift-Left Testing" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-surface/60 p-4">
                <Icon className="w-4 h-4 text-primary mb-2" />
                <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm font-display font-semibold">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow)"
              style={{ background: "var(--gradient-primary)" }}>
              View QA Projects <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition">
              Contact me <Send className="w-4 h-4" />
            </a>
            <a href="mailto:irenenjuguna98@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition">
              Copy Email <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href="mailto:irenenjuguna98@gmail.com" className="chip hover:text-primary transition"><Mail className="w-3 h-3" /> Email</a>
            <a href="tel:+254791798403" className="chip hover:text-primary transition"><Phone className="w-3 h-3" /> Call</a>
            <a href="https://linkedin.com/in/irene-njuguna98" target="_blank" rel="noreferrer" className="chip hover:text-primary transition"><Linkedin className="w-3 h-3" /> LinkedIn</a>
            <a href="https://github.com/Stensis" target="_blank" rel="noreferrer" className="chip hover:text-primary transition"><Github className="w-3 h-3" /> GitHub</a>
          </div>
        </motion.div>

        {/* Right Side: Interactive, Live Terminal Automation Sandbox Output */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-4xl blur-3xl opacity-50"
            style={{ background: "var(--gradient-primary)" }} />
          <div className="rounded-3xl border border-border bg-surface/80 backdrop-blur p-2 shadow-(--shadow-card)">
            <div className="rounded-2xl bg-background/80 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/80"></span>
                  <span className="w-3 h-3 rounded-full bg-primary/80"></span>
                  <span className="w-3 h-3 rounded-full bg-success/80"></span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">e2e-pipeline — pnpm test</span>
                <span className="text-xs text-success">● active</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <TerminalLine prefix="$" text="pnpm playwright test --project=chromium --headed=false" />
                <TerminalLine ok text="api/auth.spec.ts › POST /api/v1/auth/login — 200 OK (242ms)" />
                <TerminalLine ok text="e2e/cart.spec.ts › multi-item checkout session state (814ms)" />
                <TerminalLine ok text="e2e/payment.spec.ts › M-Pesa STK push callbacks & status validation (1.4s)" />
                <TerminalLine warn text="e2e/search.spec.ts › debounced global search [flaky retry passed] (1.9s)" />
                <TerminalLine fail text="api/user.spec.ts › PATCH /profile/avatar › Expected 200 OK, received 413 Payload Too Large" />
                <TerminalLine text="" />

                <div className="grid grid-cols-3 gap-2 mt-3">
                  <StatCell label="passed" value="142" tone="ok" />
                  <StatCell label="flaky" value="1" tone="warn" />
                  <StatCell label="failed" value="1" tone="fail" />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>code coverage 91.2%</span>
                  <span>execution time 48.3s</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-surface overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "91.2%", background: "var(--gradient-primary)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Verification Notification */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface px-4 py-3 shadow-(--shadow-card)"
          >
            <div className="flex items-center gap-2 text-sm">
              <Bug className="w-4 h-4 text-primary" />
              <span>Defect ticket dispatched — logs, metrics &amp; telemetry attached</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function TerminalLine({ prefix, ok, warn, fail, text }: { prefix?: string; ok?: boolean; warn?: boolean; fail?: boolean; text: string }) {
  const color = ok ? "text-success" : warn ? "text-primary" : fail ? "text-destructive" : "text-muted-foreground";
  const mark = ok ? "✓" : warn ? "↻" : fail ? "✗" : prefix ?? " ";
  return (
    <div className="flex gap-2 font-mono">
      <span className={`${color} shrink-0 select-none`}>{mark}</span>
      <span className={fail ? "text-destructive" : "text-foreground/85"}>{text}</span>
    </div>
  );
}

function StatCell({ label, value, tone }: { label: string; value: string; tone: "ok" | "warn" | "fail" }) {
  const map = { ok: "text-success", warn: "text-primary", fail: "text-destructive" } as const;
  return (
    <div className="rounded-lg border border-border bg-surface/60 px-3 py-2 text-center lg:text-left">
      <div className={`text-lg font-display font-bold ${map[tone]}`}>{value}</div>
      <div className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-wider text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

/* ------------------------------ About ------------------------------ */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="About me"
          title={<>Engineering quality into <span className="text-gradient">every release</span></>}
          subtitle="A developer-turned-QA who writes tests with empathy for users, respect for engineers, and zero tolerance for silent failures."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <div className="lg:col-span-2 rounded-3xl border border-border bg-surface/60 p-8">
            <h3 className="text-xl font-display font-semibold mb-4">Why QA &amp; Test Automation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After 3+ years building web and mobile products—handling complex user flows, payments, and dashboards—I realized I kept gravitating to the same systemic questions: <span className="text-foreground">where will this break? what are the critical edge cases? how do we intercept this before a user does?</span> Making the transition to Quality Engineering was where my engineering focus naturally belonged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring a developer's structural fluency to QA teams. I don't just execute test cases; I read application architecture, understand continuous integration, and actively pair with engineers to fix bugs at the root. Whether digging deep into code-driven automation scripts or executing rigorous, meticulous exploratory testing, my objective is to establish predictable system health.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                { icon: TestTube2, t: "Automation-Driven E2E", d: "Building scalable, data-driven regression test suites utilizing Playwright frameworks." },
                { icon: Workflow, t: "API Verification", d: "Validating RESTful endpoints, validating data schemas, and isolating backend anomalies." },
                { icon: Gauge, t: "Exploratory & Functional", d: "Rigorous manual test execution across cross-browser and mobile interface surfaces." },
                { icon: ShieldCheck, t: "Shift-Left QA Strategy", d: "Collaborating at the story refinement phase to design test strategies before a line of code is written." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-border bg-background/40 p-4">
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <div className="font-display font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Stats Grid */}
          <div className="space-y-4">
            {[
              { v: "3+ Years", l: "Development Foundation" },
              { v: "E2E & API", l: "Primary Test Focus" },
              { v: "Web + Mobile", l: "Interface Surface Experience" },
              { v: "EN / SW", l: "Languages (English / Swahili)" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-surface/60 p-5">
                <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Services --------------------------- */
function Services() {
  const items = [
    {
      icon: FileCheck2,
      t: "Exploratory & Manual Testing",
      d: "Executing meticulous, risk-based exploratory sessions, uncovering edge cases, and mapping complex user flows to intercept failures before production."
    },
    {
      icon: Bug,
      t: "Defect Root-Cause Analysis",
      d: "Inspecting browser dev tools, console errors, network payloads, and server logs to write high-fidelity bug reports with precise reproduction steps."
    },
    {
      icon: TestTube2,
      t: "End-to-End Automation",
      d: "Building structured automated regression scripts with Playwright frameworks, leveraging clean data structures to validate core application states."
    },
    {
      icon: Workflow,
      t: "API & Payload Verification",
      d: "Validating RESTful endpoints, checking response status codes, payload structures, and isolating authentication bottlenecks."
    },
    {
      icon: Smartphone,
      t: "Functional Web & Mobile QA",
      d: "Verifying multi-device interface responsiveness, cross-browser compatibility, and localized UI layout integrity across staging builds."
    },
    {
      icon: GitBranch,
      t: "CI/CD Staging Integration",
      d: "Configuring automated regression triggers within GitHub Actions pipelines to capture failures before deployment gates open."
    },
    {
      icon: Gauge,
      t: "Performance Load Simulation",
      d: "Simulating concurrent traffic spikes using tools like Artillery to observe how backends handle intense system pressure."
    },
    {
      icon: AlertTriangle,
      t: "Regression Strategy",
      d: "Organizing manual and automated sanity checks, smoke test sheets, and tiered regression passes aligned with product release cadences."
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services"
          title={<>What I do as a <span className="text-gradient">QA / SDET</span></>}
          subtitle="From writing the first test plan to maintaining the regression pipeline — practical quality work that ships."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {items.map(({ icon: Icon, t, d }) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-border bg-surface/60 p-5 hover:border-primary/50 hover:bg-surface-elevated transition"
            >
              <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-display font-semibold mb-1">{t}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Skills ----------------------------- */
function Skills() {
  const tabs = [
    {
      id: "qa",
      label: "QA & Test Engineering Strategy",
      short: "QA / SDET",
      icon: ShieldCheck,
      blurb: "Programmatic quality assurance — combining specialized browser automation, systematic endpoint verification, and rigorous defect isolation protocols.",
      groups: [
        { title: "Automation frameworks", items: ["Playwright", "E2E Scripting", "Data-Driven Testing", "Test Reporting"] },
        { title: "API validation", items: ["REST Endpoints", "JSON Schema Validation", "Payload Verification", "HTTP Status Assertions"] },
        { title: "Quality engineering", items: ["Exploratory Charters", "Defect Root-Cause Analysis", "Risk-Based Test Strategy", "Chrome DevTools Profile Validation", "Boundary Analysis"] },
        { title: "Performance & deployment", items: ["Artillery Load Testing", "GitHub Actions", "CI Staging Triggers", "Test Isolation"] },
      ],
      highlights: ["Playwright Scripting", "Defect Root-Cause Isolation", "API Schema Validation", "Artillery Load Testing", "GitHub Actions Pipelines"],
    },
    {
      id: "fe",
      label: "Frontend & Mobile Engineering",
      short: "Frontend / Mobile",
      icon: Code2,
      blurb: "The engineering foundation that powers my automation work — shipping production web and mobile interfaces I now know how to test from the inside out.",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "React Query"] },
        { title: "Mobile", items: ["React Native", "Expo", "Android Studio", "Xcode"] },
        { title: "Backend & data", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST", "GraphQL"] },
        { title: "Tooling", items: ["Git", "Vite", "Figma", "Vercel", "Storybook"] },
      ],
      highlights: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    },
  ] as const;

  const [active, setActive] = useState<"qa" | "fe">("qa");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Skills & tooling" title={<>A <span className="text-gradient">dual-discipline</span> skill set</>}
          subtitle="Toggle between the two pillars of my work — quality engineering on top, the frontend foundation underneath." />

        {/* Segmented toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex p-1.5 rounded-full border border-border bg-surface/60 backdrop-blur">
            {tabs.map((t) => {
              const isActive = active === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id as "qa" | "fe")}
                  className={`relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-pill"
                      className="absolute inset-0 rounded-full shadow-(--shadow-glow)"
                      style={{ background: "var(--gradient-primary)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">{t.label}</span>
                  <span className="relative z-10 sm:hidden">{t.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-muted-foreground">{current.blurb}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {current.highlights.map((h) => (
                  <span key={h} className="chip-accent"><CheckCircle2 className="w-3 h-3" />{h}</span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {current.groups.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border bg-surface/60 p-5 hover:border-primary/40 transition">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-semibold">{g.title}</h3>
                    <span className="text-xs text-muted-foreground">{g.items.length} focus areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span key={i} className="chip hover:text-primary hover:border-primary/50 transition">{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------------------- Projects ---------------------------- */
type Project = {
  title: string;
  tag: "Automation" | "API" | "Manual" | "Performance" | "Mobile";
  summary: string;
  best: string;
  tech: string[];
  metrics: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    title: "Rocky Ridge Farm — E-commerce Regression Suite",
    tag: "Automation",
    summary: "Authored an end-to-end regression suite for a multi-role produce e-commerce platform — customer ordering, admin management, staff workflows, and Pesapal payments.",
    best: "Playwright suite covering 4 user roles + payment flow, wired into GitHub Actions on every PR.",
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Pesapal sandbox", "Postman"],
    metrics: [
      { label: "E2E tests", value: "86" },
      { label: "Roles covered", value: "4" },
      { label: "PR feedback", value: "< 4 min" },
    ],
  },
  {
    title: "Square Pizza — Ordering API Test Pack",
    tag: "API",
    summary: "Designed a Postman + Newman contract test pack for the menu, cart, checkout, and Stripe order API — running nightly in CI with Slack-on-fail.",
    best: "Schema validation + auth/negative paths caught 11 regressions before merge over 2 months.",
    tech: ["Postman", "Newman", "JSON Schema", "Stripe test mode", "GitHub Actions"],
    metrics: [
      { label: "Endpoints", value: "32" },
      { label: "Assertions", value: "210+" },
      { label: "Bugs caught", value: "11" },
    ],
  },
  {
    title: "Gochapaa — Fintech Release Verification",
    tag: "Manual",
    summary: "Risk-based manual + exploratory testing across fintech screens with M-Pesa integration. Built release checklists, bug taxonomy, and repro templates the team still uses.",
    best: "Structured bug reports with Loom + network HARs cut triage time noticeably.",
    tech: ["Next.js", "M-Pesa sandbox", "Jira", "Loom", "Chrome DevTools"],
    metrics: [
      { label: "Releases QA'd", value: "9" },
      { label: "Critical bugs", value: "0 escaped" },
      { label: "Avg triage", value: "↓ faster" },
    ],
  },
  {
    title: "Paya Finance Mobile — Banking Flow Tests",
    tag: "Mobile",
    summary: "End-to-end test scenarios for a React Native banking app — account opening, KYC, transfers, bill payments — plus a device matrix for Android API 28–34.",
    best: "Detox flows + manual device matrix surfaced keyboard + biometric edge cases.",
    tech: ["React Native", "Detox", "Appium (POC)", "Android Studio", "Xcode"],
    metrics: [
      { label: "Flows", value: "14" },
      { label: "Devices", value: "8" },
      { label: "OS versions", value: "6" },
    ],
  },
  {
    title: "Movie Muse — Performance & A11y Audit",
    tag: "Performance",
    summary: "Lighthouse + axe-core audit pass for a movie discovery SPA. Documented performance budgets, fixed contrast violations, and added keyboard navigation tests.",
    best: "Performance score 68 → 94 after collaborating with the dev on image + bundle fixes.",
    tech: ["Lighthouse", "axe-core", "Playwright a11y", "WebPageTest"],
    metrics: [
      { label: "Perf score", value: "94" },
      { label: "A11y score", value: "100" },
      { label: "Issues fixed", value: "22" },
    ],
  },
  {
    title: "Library-Helper — GraphQL Test Coverage",
    tag: "API",
    summary: "Wrote a GraphQL query + mutation test pack with auth scenarios for a teacher-facing book assignment app. Snapshot tests + schema diff in CI.",
    best: "Schema-diff check blocks accidental breaking changes on every PR.",
    tech: ["GraphQL", "Apollo", "Jest", "MSW", "GitHub Actions"],
    metrics: [
      { label: "Queries", value: "18" },
      { label: "Mutations", value: "9" },
      { label: "Coverage", value: "82%" },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="QA Projects" title={<>Quality work on <span className="text-gradient">real products</span></>}
          subtitle="Test strategy, automation suites, and quality engineering re-cast around products I've shipped and tested." />

        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            Filter by discipline:
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Automation", "API", "Manual", "Performance", "Mobile"].map((t) => (
              <span key={t} className={t === "All" ? "chip-accent" : "chip"}>{t}</span>
            ))}
          </div>
        </div>

        <FeaturedAutomationProject />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-3xl border border-border bg-surface/60 p-6 hover:border-primary/40 transition relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"
                style={{ background: "var(--gradient-primary)" }} />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip-accent"><Layers className="w-3 h-3" />{p.tag}</span>
                  <span className="text-xs text-muted-foreground font-mono">QA case · 0{i + 1}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-4 rounded-xl border border-border bg-background/40 p-3 text-sm">
                  <span className="text-primary font-medium">Best part: </span>
                  <span className="text-muted-foreground">{p.best}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-border bg-background/40 px-3 py-2 text-center">
                      <div className="font-display font-bold text-primary">{m.value}</div>
                      <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[0.7rem] px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- Featured Automation Project (terminal) ----------------- */
function FeaturedAutomationProject() {
  const lines = [
    { c: "muted", t: "# Data-Driven Test Automation Framework" },
    { c: "prompt", t: "$ pnpm playwright test --shard=1/4 --reporter=line" },
    { c: "ok", t: "✓ markets/ke › checkout › M-Pesa journey (1.4s)" },
    { c: "ok", t: "✓ markets/ng › checkout › Paystack journey (1.6s)" },
    { c: "ok", t: "✓ markets/za › checkout › card journey (1.2s)" },
    { c: "ok", t: "✓ markets/gh › checkout › wallet journey (1.5s)" },
    { c: "muted", t: "→ 4 markets × 12 personas = 48 parallel workers" },
    { c: "ok", t: "✓ 312 specs passed · 0 failed · 0 flaky" },
    { c: "prompt", t: "$ gh workflow run quality-gate.yml → ✓ merged" },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative mb-10"
    >
      <div className="absolute -inset-2 rounded-4xl blur-3xl opacity-30 -z-10"
        style={{ background: "var(--gradient-primary)" }} />

      <div className="rounded-3xl border border-primary/30 bg-surface/70 backdrop-blur p-2 shadow-(--shadow-card)">
        <div className="rounded-[1.35rem] bg-background/90 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/80"></span>
                <span className="w-3 h-3 rounded-full bg-primary/80"></span>
                <span className="w-3 h-3 rounded-full bg-success/80"></span>
              </div>
              <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                ~/frameworks/data-driven-suite — zsh
              </span>
            </div>
            <span className="chip-accent"><Terminal className="w-3 h-3" /> Featured</span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            {/* Left: terminal output */}
            <div className="p-6 font-mono text-[13px] leading-relaxed border-b lg:border-b-0 lg:border-r border-border">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={
                    l.c === "ok"
                      ? "text-success"
                      : l.c === "prompt"
                        ? "text-primary"
                        : "text-muted-foreground"
                  }
                >
                  {l.t}
                </motion.div>
              ))}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <StatCell label="markets" value="4" tone="ok" />
                <StatCell label="workers" value="48" tone="warn" />
                <StatCell label="regression" value="-72%" tone="ok" />
              </div>
            </div>

            {/* Right: description */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="chip-accent"><Layers className="w-3 h-3" />Automation · Production</span>
                <span className="text-xs text-muted-foreground font-mono">case · 00</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold leading-tight">
                Data-Driven Test Automation <span className="text-gradient">Framework</span>
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  "Architected a loop-based UI automation framework using Playwright & TypeScript to validate complex multi-market user journeys.",
                  "Configured parallel test execution models to maximize speed and drastically reduce regression feedback loops.",
                  "Seamlessly integrated the testing suite as an automated quality gate within production-level GitHub Actions CI/CD pipelines.",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Playwright", "TypeScript", "GitHub Actions", "Data-Driven", "Parallel Sharding", "Allure"].map((t) => (
                  <span key={t} className="text-[0.7rem] px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border font-mono">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Stensis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow)"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
                <a
                  href="https://github.com/Stensis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition"
                >
                  <FileText className="w-4 h-4" /> View Test Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------- Experience --------------------------- */
function Experience() {
  const timeline = [
    {
      year: "2025 — Now",
      role: "QA / SDET — Transition",
      org: "Independent · Upskilling",
      points: [
        "Building Playwright + Cypress automation suites on personal and contract projects.",
        "ISTQB Foundation prep · Test Automation University coursework.",
        "Contributing test packs to past client projects (e-commerce, fintech, mobile).",
      ],
    },
    {
      year: "2022 — 2025",
      role: "Full-Stack Developer",
      org: "Freelance + product teams (Kenya / Remote)",
      points: [
        "Shipped 20+ web & mobile products with React, Next.js, React Native, Node.",
        "Owned features end-to-end — including writing the Jest / RTL tests and supporting releases.",
        "Did production support, bug triage, and post-mortem documentation.",
      ],
    },
    {
      year: "2022",
      role: "Software Engineering Bootcamp",
      org: "Moringa School",
      points: [
        "Full-stack curriculum — JavaScript, React, Ruby on Rails, PostgreSQL.",
        "Capstone project shipped to production with a small team.",
      ],
    },
  ];

  const certs = [
    { t: "AI Certification", d: "Prompt eval, labeling, model-training workflows" },
    { t: "ISTQB Foundation (in progress)", d: "Test design, levels, types, tooling" },
    { t: "Test Automation University", d: "Playwright, Cypress, API testing tracks" },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Experience" title={<>From shipping software to <span className="text-gradient">shipping quality</span></>}
          subtitle="The path that brought me to QA / SDET — and the certifications backing the transition." />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 mt-12">
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.year} className="relative rounded-2xl border border-border bg-surface/60 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg">{t.role}</h3>
                  <span className="text-xs font-mono text-primary">{t.year}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">{t.org}</div>
                <ul className="space-y-1.5">
                  {t.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-1 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Certifications
              </h3>
              <div className="space-y-3">
                {certs.map((c) => (
                  <div key={c.t} className="rounded-xl border border-border bg-background/40 p-3">
                    <div className="font-medium text-sm">{c.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" /> Why hire me
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Code2 className="w-3.5 h-3.5 mt-1 text-primary" /> I read the codebase before I write the test plan.</li>
                <li className="flex gap-2"><GitBranch className="w-3.5 h-3.5 mt-1 text-primary" /> I treat the CI pipeline as a first-class product.</li>
                <li className="flex gap-2"><Database className="w-3.5 h-3.5 mt-1 text-primary" /> I know what's worth automating — and what isn't.</li>
                <li className="flex gap-2"><Bug className="w-3.5 h-3.5 mt-1 text-primary" /> My bug reports are useful, not just present.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ------------------------------- FAQ ------------------------------- */
function FAQ() {
  const items = [
    {
      q: "Are you a junior QA or an experienced engineer?",
      a: "I am transitioning into a dedicated QA focus with over 3 years of professional frontend and full-stack software development experience. While I am building my dedicated QA tenure, I approach testing with the code fluency and system visibility of a mid-level engineer."
    },
    {
      q: "What testing methodologies do you specialize in?",
      a: "I focus heavily on technical manual testing, exploratory bug triage, and programmatically isolating defects using browser dev tools and logs. For automation, I build data-driven end-to-end regression suites in Playwright and execute backend performance load testing with Artillery."
    },
    {
      q: "Do you write custom automation scripts or use low-code tools?",
      a: "I write pure code. Coming from a JavaScript and TypeScript development background, I write clean, loop-based testing scripts, handle external data sources (like JSON or CSV data sets), and configure workflows directly within GitHub Actions."
    },
    {
      q: "Can you help establish a QA process on a team?",
      a: "Absolutely. My background allows me to collaborate cleanly with developers to build out structured bug-reporting templates, define clear staging deployment regression triggers, and set up clear, reproducible exploratory testing strategies."
    },
    {
      q: "What types of roles and working arrangements are you open to?",
      a: "I am primarily looking for remote opportunities or contract-based roles. I operate out of Nairobi and easily align with international team schedules and distributed workflows."
    },
    {
      q: "Will you still be writing production feature code?",
      a: "My core career focus is entirely on Quality Assurance and Test Engineering. While my ability to read and understand code makes me an elite bug finder, my goal is to validate the application and safeguard releases, not build the features."
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-gradient">questions</span></>}
          subtitle="The things hiring managers and engineering leads usually want to know." />
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-surface/60 p-5 open:bg-surface-elevated">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-display font-semibold">{f.q}</span>
                <span className="grid place-items-center w-6 h-6 rounded-full border border-border text-primary text-sm group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ----------------------------- Contact ----------------------------- */

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnqrjvoe", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Submission failed. Please verify fields or try again.");
      }
    } catch (error) {
      alert("Network exception caught. Please email directly or try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Contact" title={<>Let's talk <span className="text-gradient">quality</span></>}
          subtitle="Available for QA Engineer roles, technical contract work, or test suite design — drop a message to connect." />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 mt-12">
          <div className="space-y-3">
            <ContactCard icon={Mail} label="Email" sub="Detailed requests & inquiries" value="irenenjuguna98@gmail.com" href="mailto:irenenjuguna98@gmail.com" />
            <ContactCard icon={Phone} label="Phone" sub="Direct call / WhatsApp" value="+254 791 798 403" href="tel:+254791798403" />
            <ContactCard icon={MapPin} label="Location" sub="Remote Alignment" value="Nairobi, Kenya" href="#" />

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <div className="text-sm font-display font-semibold mb-3">Engagement Presets</div>
              <div className="flex flex-wrap gap-2">
                {["QA Engineer Opportunity", "Contract / Remote QA", "Playwright Automation Setup", "Exploratory Test Execution", "Defect Strategy Review"].map((s) => (
                  <span key={s} className="chip hover:text-primary transition">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Conditional Rendering for Clean Success State */}
          {isSubmitted ? (
            <div className="rounded-3xl border border-success/30 bg-success/5 p-8 flex flex-col items-center justify-center text-center min-h-100">
              <div className="w-12 h-12 rounded-full bg-success/20 text-success grid place-items-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Message Received!</h4>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Thank you for reaching out. I'll review your testing goals or job details and get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs text-primary hover:underline font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="rounded-3xl border border-border bg-surface/60 p-6 lg:p-8" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" placeholder="you@company.com" type="email" required />
              </div>
              <div className="mt-4">
                <Field label="Subject" name="subject" placeholder="QA Role / Automation Project at ..." required />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium block mb-2">Message Context</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Share a short brief — application type, tech stack, testing pain-points, or immediate contract needs..."
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  required
                />
                <div className="text-xs text-muted-foreground mt-1">Tip: Include links to repositories or job criteria if available.</div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow) disabled:opacity-50 dynamic-transition"
                style={{ background: "var(--gradient-primary)" }}
              >
                {isSubmitting ? "Sending..." : "Send message"} <Send className="w-4 h-4" />
              </button>
              <div className="mt-4 text-xs text-muted-foreground">
                Direct fallback: <a href="mailto:irenenjuguna98@gmail.com" className="text-primary hover:underline">irenenjuguna98@gmail.com</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, sub, value, href }: { icon: any; label: string; sub: string; value: string; href: string }) {
  return (
    <a href={href} className="block rounded-2xl border border-border bg-surface/60 p-5 hover:border-primary/40 transition">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold">{label}</span>
            <span className="text-xs text-muted-foreground">• {sub}</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">{value}</div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </a>
  );
}

function Field({ label, name, ...props }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium block mb-2">{label}</span>
      <input
        name={name}
        {...props}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
      />
    </label>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-8 h-8 rounded-full text-xs font-bold text-primary-foreground shrink-0" style={{ background: "var(--gradient-primary)" }}>IN</span>
          <span>© {new Date().getFullYear()} Irene Njuguna — Software Quality & Test Engineering</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Stensis" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors aria-label='GitHub Profile'">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/irene-njuguna98" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors aria-label='LinkedIn Profile'">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:irenenjuguna98@gmail.com" className="hover:text-primary transition-colors aria-label='Email Contact'">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Shared ----------------------------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <div className="chip-accent mb-4"><Sparkles className="w-3 h-3" />{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}
