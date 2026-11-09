import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import {
  X,
  Menu,
  ShieldCheck,
  Workflow,
  Gauge,
  TestTube2,
  Cpu,
  GitBranch,
  Database,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  Activity,
  Send,
  CheckCircle,
  ExternalLink,
  Download,
  Briefcase,
  FileText,     
  ChevronDown,
  LucideIcon
} from "lucide-react";

const siteUrl = "https://irenenjugunasdet-portfolio.vercel.app";
const profileImage = `${siteUrl}/irene-profile.jpeg`;

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.ico",
      },
    ],
    meta: [
      {
        title: "Irene Njuguna | QA Automation Engineer Portfolio",
      },
      {
        name: "description",
        content:
          "QA Automation Engineer with a software engineering background specializing in manual testing, Playwright automation, API testing, Postman, and CI/CD quality assurance.",
      },

      {
        property: "og:title",
        content: "Irene Njuguna | QA Automation Engineer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Explore Irene Njuguna's QA Automation portfolio featuring Playwright, API testing, manual testing, and quality engineering projects.",
      },
      {
        property: "og:image",
        content: profileImage,
      },
      {
        property: "og:type",
        content: "website",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Irene Njuguna | QA Automation Engineer",
      },
      {
        name: "twitter:description",
        content:
          "QA Automation Engineer specializing in Playwright, API testing, manual testing, and software quality.",
      },
      {
        name: "twitter:image",
        content: profileImage,
      },
    ],
  }),

  component: Index,
});

const nav = [
  { id: "about", label: "About" },
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
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ["top", ...nav.map((item) => item.id)];
      let current = "top";

      for (const id of sections) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">

        {/* Logo and Name */}
        <a
          href="#top"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Irene Njuguna - Back to top"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            IN
          </span>

          <span className="flex flex-col">
            <span className="font-display text-sm font-semibold leading-tight sm:text-base">
              Irene <span className="text-primary">Njuguna</span>
            </span>

            <span className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              QA Engineer Portfolio
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-border bg-surface/60 p-1.5 lg:flex"
        >
          {nav.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Social Links and CTA */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href="https://github.com/Stensis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://linkedin.com/in/irene-njuguna98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)" }}
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-foreground transition hover:border-primary/50 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-md flex-col gap-2">
            {nav.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="my-2 border-t border-border" />

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Stensis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com/in/irene-njuguna98"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-4 py-8 lg:py-10 items-center">
        {/* Left Side: Professional Profile Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="chip-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
              Open to QA Engineer • QA Automation Engineer roles
            </span>
            <span className="chip">
              <MapPin className="w-3 h-3" /> Nairobi, Kenya
            </span>
            <span className="chip">Remote / Hybrid</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
            Hi, I'm <span className="text-gradient">Irene Njuguna</span>
          </h1>

          <div className="mt-4 flex items-start gap-2 text-base md:text-lg text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0" />

            <span className="font-display leading-snug">
              <span className="block text-foreground font-semibold text-lg">
                Software QA Engineer
              </span>

              <span className="block text-primary text-sm font-medium mt-1">
                Manual Testing • Test Automation • API Testing
              </span>

              <span className="block mt-3 text-base text-muted-foreground">
                A software engineer transitioning into Quality Assurance, combining over three years
                of development experience with hands-on manual testing, Playwright automation, and
                REST API testing.
              </span>
            </span>
          </div>

          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I focus on understanding requirements, designing meaningful test scenarios, identifying
            defects, and helping teams deliver reliable software.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Test Planning",
              "Manual Testing",
              "Playwright",
              "API Testing",
              "Newman",
              "Defect Reporting",
            ].map((t) => (
              <span key={t} className="chip-accent">
                <CheckCircle2 className="w-3 h-3" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow)"
              style={{ background: "var(--gradient-primary)" }}
            >
              View QA Projects <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition"
            >
              Contact me <Send className="w-4 h-4" />
            </a>
            <a
              href="mailto:irenenjuguna98@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition"
            >
              Copy Email <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="mailto:irenenjuguna98@gmail.com"
              className="chip hover:text-primary transition"
            >
              <Mail className="w-3 h-3" /> Email
            </a>
            <a href="tel:+254791798403" className="chip hover:text-primary transition">
              <Phone className="w-3 h-3" /> Call
            </a>
            <a
              href="https://linkedin.com/in/irene-njuguna98"
              target="_blank"
              rel="noreferrer"
              className="chip hover:text-primary transition"
            >
              <Linkedin className="w-3 h-3" /> LinkedIn
            </a>
            <a
              href="https://github.com/Stensis"
              target="_blank"
              rel="noreferrer"
              className="chip hover:text-primary transition"
            >
              <Github className="w-3 h-3" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full min-w-0 flex justify-center lg:justify-start"
        >
          {/* Background Glow */}
          <div
            className="absolute inset-8 -z-10 rounded-full blur-3xl opacity-25"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="w-full max-w-[520px] rounded-3xl border border-border bg-surface/80 backdrop-blur shadow-(--shadow-card) overflow-hidden">
            {/* Photo */}
            <img
              src="/profile.jpeg"
              alt="Irene Njuguna"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover object-top"
            />

            {/* Card Content */}
            <div className="p-4 lg:p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="rounded-full bg-success/15 px-3 py-1 text-xs text-success border border-success/30">
                  Available
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    3+ Years Software Engineering Experience
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Manual Testing • Playwright • API Testing
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Playwright",
                  "Postman",
                  "Python",
                  "AWS",
                  "TypeScript",
                  "Git",
                  "SQL",
                  "React",
                ].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="https://drive.google.com/file/d/1AvsDJnj1cKNpZlvUFEfgLoN1oltFCBwp/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>

                <a
                  href="https://github.com/Stensis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm font-medium hover:bg-surface transition"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ About ------------------------------ */
function About() {
  const focusAreas = [
    {
      icon: TestTube2,
      t: "Manual Testing & Test Design",
      d: "Designing test plans, test scenarios, test cases, and requirement traceability matrices (RTMs). Performing functional, regression, smoke, and exploratory testing.",
    },
    {
      icon: ShieldCheck,
      t: "Defect Management & QA Reporting",
      d: "Identifying, reproducing, documenting, and tracking defects. Preparing bug reports, test execution summaries, and quality reports.",
    },
    {
      icon: Workflow,
      t: "API Testing",
      d: "Testing REST APIs using Postman, validating status codes, authentication, response payloads, and positive and negative scenarios.",
    },
    {
      icon: Gauge,
      t: "Test Automation",
      d: "Building reusable Playwright test suites with TypeScript for end-to-end workflows, regression testing, and automated validation.",
    },
  ];

  const highlights = [
    {
      v: "3+ Years",
      l: "Software Engineering Experience",
    },
    {
      v: "Manual + Automation",
      l: "Quality Assurance Focus",
    },
    {
      v: "Web & Mobile",
      l: "Application Experience",
    },
    {
      v: "English & Swahili",
      l: "Communication Languages",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              Building better software through{" "}
              <span className="text-gradient">quality engineering</span>
            </>
          }
          subtitle="A quality-focused software engineer combining over three years of development experience with hands-on manual testing, API testing, and test automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 mt-10 items-stretch">
          {/* Main About Card */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-surface/60 p-6 lg:p-8">
            <h3 className="text-xl font-display font-semibold mb-4">
              Why I Chose Quality Assurance
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey into Quality Assurance began during my time as a software engineer. While I
              enjoyed building features, I became increasingly interested in understanding how
              applications could fail, how users interact with systems, and how defects could be
              identified before reaching production.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              This curiosity led me to explore software testing more deeply, combining my
              development experience with hands-on manual testing, API testing, and Playwright test
              automation.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My approach to QA focuses on understanding requirements, designing meaningful test
              scenarios, documenting defects clearly, and collaborating with development teams to
              deliver reliable, user-focused software.
            </p>

            {/* QA Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {focusAreas.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-background/40 p-5 hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" />

                  <h4 className="font-display font-semibold text-sm md:text-base">{t}</h4>

                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.l}
                className="rounded-2xl border border-border bg-surface/60 p-5 lg:p-6 flex flex-col justify-center"
              >
                <div className="text-2xl xl:text-3xl font-display font-bold text-gradient">
                  {item.v}
                </div>

                <div className="text-sm text-muted-foreground mt-2">{item.l}</div>
              </div>
            ))}
          </div>
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
      label: "Quality Assurance & Test Automation",
      short: "QA",
      icon: ShieldCheck,
      blurb:
        "Applying structured QA practices across requirements analysis, test design, test execution, defect management, API testing, and automation.",

      groups: [
        {
          title: "Manual Testing",
          items: [
            "Functional Testing",
            "Regression Testing",
            "Smoke Testing",
            "Exploratory Testing",
            "Integration Testing",
            "Cross-Browser Testing",
            "Mobile Testing",
            "Positive & Negative Testing",
          ],
        },
        {
          title: "Test Planning & Documentation",
          items: [
            "Test Plans",
            "Test Scenarios",
            "Test Cases",
            "Test Execution",
            "Requirements Analysis",
            "Requirement Traceability Matrix (RTM)",
            "Test Data Preparation",
          ],
        },
        {
          title: "Test Design Techniques",
          items: [
            "Equivalence Partitioning",
            "Boundary Value Analysis",
            "Decision Table Testing",
            "State Transition Testing",
            "Checklist-Based Testing",
          ],
        },
        {
          title: "Defect Management & QA Reporting",
          items: [
            "Bug Identification",
            "Defect Reporting",
            "Defect Lifecycle",
            "Severity & Priority",
            "Bug Retesting",
            "Regression Verification",
            "Test Execution Reports",
            "Test Summary Reports",
          ],
        },
        {
          title: "Test Automation",
          items: [
            "Playwright",
            "TypeScript",
            "End-to-End Testing",
            "Page Object Model (POM)",
            "Data-Driven Testing",
            "Automated Regression Testing",
            "HTML Test Reports",
            "GitHub Actions",
          ],
        },
        {
          title: "API Testing",
          items: [
            "Postman",
            "REST API Testing",
            "Request & Response Validation",
            "JSON Validation",
            "Authentication Testing",
            "Status Code Validation",
            "Positive & Negative API Tests",
            "Newman",
          ],
        },
        {
          title: "QA Tools",
          items: [
            "Jira",
            "Postman",
            "Chrome DevTools",
            "Git",
            "GitHub",
            "GitHub Actions",
            "Playwright Test Runner",
          ],
        },
        {
          title: "Agile & QA Processes",
          items: [
            "Agile / Scrum",
            "Sprint Planning",
            "Sprint Testing",
            "SDLC",
            "STLC",
            "Defect Triage",
            "QA Collaboration",
          ],
        },
      ],

      highlights: [
        "Manual Testing",
        "Test Case Design",
        "RTM",
        "Defect Reporting",
        "QA Reporting",
        "Change Management",
        "Exploratory Testing",
        "Playwright",
        "API Testing",
      ],
    },
    {
      id: "fe",
      label: "Software Engineering",
      short: "Development",
      icon: Code2,
      blurb:
        "My software engineering experience helps me understand application architecture, investigate defects, and collaborate effectively with developers.",

      groups: [
        {
          title: "Frontend Development",
          items: ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Backend & Databases",
          items: ["Node.js", "Express.js","Python" ,"REST APIs", "PostgreSQL", "MongoDB", "SQL"],
        },
        {
          title: "Cloud & DevOps",
          items: ["AWS", "Git", "GitHub", "GitHub Actions", "CI/CD Fundamentals"],
        },
        {
          title: "Development Tools",
          items: ["VS Code", "Figma", "Vercel", "Linux", "Chrome DevTools"],
        },
      ],

      highlights: ["React", "React Native", "TypeScript", "REST APIs", "Node.js", "GitHub", "AWS"],
    },
  ] as const;

  const [active, setActive] = useState<"qa" | "fe">("qa");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="skills" className="py-16 lg:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills & Expertise"
          title={
            <>
              Quality Assurance backed by{" "}
              <span className="text-gradient">software engineering</span>
            </>
          }
          subtitle="Combining structured software testing practices, automation skills, and a strong development foundation to deliver reliable applications."
        />

        {/* Skills Tab Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex p-1.5 rounded-full border border-border bg-surface/60 backdrop-blur">
            {tabs.map((t) => {
              const isActive = active === t.id;
              const Icon = t.icon;

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id as "qa" | "fe")}
                  aria-pressed={isActive}
                  className={`relative z-10 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-pill"
                      className="absolute inset-0 rounded-full shadow-(--shadow-glow)"
                      style={{
                        background: "var(--gradient-primary)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
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

        {/* Animated Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {/* Intro and Highlights */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-muted-foreground leading-relaxed">{current.blurb}</p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {current.highlights.map((h) => (
                  <span key={h} className="chip-accent">
                    <CheckCircle2 className="w-3 h-3" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {current.groups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-2xl border border-border bg-surface/60 p-5 lg:p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="font-display font-semibold text-base">{g.title}</h3>

                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {g.items.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span
                        key={i}
                        className="chip hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {i}
                      </span>
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
type ProjectTag = "Automation" | "API" | "Manual" | "Performance" | "Mobile";
type ProjectFilter = "All" | ProjectTag;
type ProjectMetric = { label: string; value: string };

type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "report" | "google document" | "google sheet";
};

type QADeliverable = {
  title: string;
  description: string;
  url: string;
  type: "document" | "sheet";
};

type Project = {
  title: string;
  tag: ProjectTag;
  summary: string;
  best: string;
  tech: string[];
  metrics: ProjectMetric[];
  links?: ProjectLink[];
  deliverables?: QADeliverable[];
};

const projects: Project[] = [
  {
    title: "ParaBank — End-to-End Banking Automation",
    tag: "Automation",
    summary: "Built automated end-to-end tests for the ParaBank demo banking application, covering authentication, session handling, bill payments, form validation, and negative user scenarios.",
    best: "Created data-driven Playwright tests for valid, invalid, empty, boundary, security, whitespace, and session-related scenarios using reusable page objects and test data.",
    tech: ["Playwright", "TypeScript", "Page Object Model", "Playwright HTML Report", "GitHub"],
    metrics: [{ label: "Login scenarios", value: "13" }, { label: "Bill-pay tests", value: "10" }, { label: "Core areas", value: "3+" }],
    links: [{ label: "View repository", url: "https://github.com/KennOtieno/parabank", type: "github" }],
  },
  {
    title: "OrangeHRM — Web Automation Test Suite",
    tag: "Automation",
    summary: "Developed a maintainable Playwright automation framework for OrangeHRM, covering authentication, dashboard navigation, employee management, search, and profile update workflows.",
    best: "Structured the framework with Page Object Model classes, reusable fixtures, dynamic test data, environment variables, constants, UI-based assertions, and GitHub Actions.",
    tech: ["Playwright", "TypeScript", "Page Object Model", "GitHub Actions", "Dynamic Test Data"],
    metrics: [{ label: "Core modules", value: "3" }, { label: "Test layers", value: "E2E" }, { label: "CI workflow", value: "1" }],
    links: [{ label: "View repository", url: "https://github.com/Stensis/Orange_Hrm", type: "github" }],
  },
  {
    title: "DummyJSON — E-commerce API Test Collection",
    tag: "API",
    summary: "Created a Postman API testing project for the DummyJSON e-commerce service, covering products, carts, users, authentication, CRUD operations, and negative scenarios.",
    best: "Automated response validation using JavaScript assertions and executed the collection through Newman with an HTML test report suitable for CI and portfolio evidence.",
    tech: ["Postman", "Newman", "JavaScript", "JSON", "Newman HTML Extra"],
    metrics: [{ label: "API areas", value: "4" }, { label: "HTTP methods", value: "4" }, { label: "HTML reports", value: "Yes" }],
    links: [{ label: "View repository", url: "https://github.com/Stensis/dummyjson-api-testing-postman", type: "github" }],
    // Add a report link once you have a real public URL.
  },
  {
    title: "The Internet Heroku — Authentication Testing Suite",
    tag: "Automation",
    summary: "Built a modular, data-driven authentication framework covering valid login, invalid credentials, blank inputs, whitespace, casing, SQL injection, XSS, and logout behavior.",
    best: "Identified and documented BUG-001 after discovering that blank credentials returned a misleading invalid-username message instead of required-field feedback.",
    tech: ["Playwright", "TypeScript", "Page Object Model", "JSON Test Data", "Custom Fixtures", "Defect Reporting"],
    metrics: [{ label: "Login scenarios", value: "11" }, { label: "Defects found", value: "1" }, { label: "Fixtures", value: "Custom" }],
    links: [{ label: "View repository", url: "https://github.com/Stensis/Internet_heroku_test", type: "github" }],
  },
  {
    title: "Rocky Ridge Farm — UI and API Test Automation",
    tag: "Automation",
    summary: "Created Playwright tests for the Rocky Ridge Farm e-commerce platform, including authentication workflows and API test coverage.",
    best: "Combined browser-based and API testing in one Playwright project so important application behavior could be validated across both the user interface and service layers.",
    tech: ["Playwright", "TypeScript", "API Testing", "Authentication Testing", "GitHub"],
    metrics: [{ label: "Test layers", value: "UI + API" }, { label: "Core focus", value: "Auth" }, { label: "Repository", value: "Public" }],
    links: [{ label: "View repository", url: "https://github.com/Stensis/rockyridgesfarm-playwright-tests-", type: "github" }],
  },
  {
    title: "SauceDemo — E-commerce E2E Automation Framework",
    tag: "Automation",
    summary: "Built a scalable, data-driven Playwright framework for SauceDemo covering authentication, inventory, sorting, cart management, checkout validation, financial calculations, and complete order processing.",
    best: "Implemented reusable Page Object Model classes, JSON-driven scenarios, cross-browser execution, mobile viewport coverage, secure environment variables, and GitHub Actions CI.",
    tech: ["Playwright", "TypeScript", "Page Object Model", "JSON", "GitHub Actions", "Cross-browser Testing"],
    metrics: [{ label: "Test suites", value: "3" }, { label: "Browsers", value: "3" }, { label: "Core flows", value: "4" }],
    links: [{ label: "View repository", url: "https://github.com/Stensis/saucedemo", type: "github" }],
  },
  {
    title: "Kiwami Marketing Tool — Manual QA Project",
    tag: "Manual",
    summary: "A structured manual testing project with QA artifacts covering test planning, requirements traceability, test case design, defect tracking, QA reporting, and exploratory testing.",
    best: "Prepared six interconnected QA documents to demonstrate the manual testing process from planning through reporting and exploratory investigation.",
    tech: ["Manual Testing", "Test Planning", "RTM", "Test Design", "Defect Reporting", "Exploratory Testing"],
    metrics: [{ label: "QA artifacts", value: "6" }, { label: "Testing approach", value: "Manual" }, { label: "Project", value: "Kiwami" }],
    deliverables: [
      { title: "Test Plan", description: "Testing objectives, scope, approach, and schedule.", url: "https://docs.google.com/document/d/1fH-VqLq4ELoyy_5qzYNVUqx1xWVNKxEbIEFl2kEScWg/edit?tab=t.0", type: "document" },
      { title: "Requirements Traceability Matrix (RTM)", description: "Connect requirements to test coverage and test cases.", url: "https://docs.google.com/spreadsheets/d/1KFcevuIM6mI2UWtp-CZ0uvfFqPasv06yJmgugJEsXnk/edit?gid=0#gid=0", type: "sheet" },
      { title: "Test Cases", description: "Test scenarios, steps, expected results, and outcomes.", url: "https://docs.google.com/spreadsheets/d/1JDPYjvP59SwFtoOImPjg17f7UtR3LDV0YUvMfPbrctk/edit?gid=0#gid=0", type: "sheet" },
      { title: "Bug Report", description: "Defect records, severity, status, and reproduction steps.", url: "https://docs.google.com/spreadsheets/d/1Sh9NXEOG4rB46mPg9vbpMYtOQXrT1kCVA9TZyLLrpTQ/edit?gid=0#gid=0", type: "sheet" },
      { title: "QA Report", description: "A consolidated view of test results, findings, and risks.", url: "https://docs.google.com/document/d/1uLcht1k4j4VpO4DgfkLn6DYH_IGKcNdwvVkWjZtu4YM/edit?tab=t.0", type: "document" },
      { title: "Exploratory Testing & Feature Brainstorming", description: "Additional observations, discoveries, and ideas gathered during exploration.", url: "https://docs.google.com/spreadsheets/d/1GFsK-gEpvOcHliEWI3417I5R4g_LeB4bSSJSnlbBRHQ/edit?gid=0#gid=0", type: "sheet" },
    ],
  },
  // SECOND MANUAL PROJECT EXAMPLE: duplicate the Kiwami object above,
  // change the title, description, and document URLs, then add it here.
];

const projectFilters: ProjectFilter[] = [
  "All",
  "Automation",
  "API",
  "Manual",
];

function ManualWorkflow({ deliverables }: { deliverables: QADeliverable[] }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-5 rounded-2xl border border-border bg-background/30 p-4">
      <button
        type="button"
        onClick={() => setExpanded((previous) => !previous)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <FileText className="h-4 w-4 text-primary" />
          QA Documentation Workflow
        </span>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          {deliverables.length} documents
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </span>
      </button>

      {expanded && (
        <div className="mt-4 space-y-2">
          {deliverables.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium transition group-hover/item:text-primary">{item.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover/item:text-primary" />
            </a>
          ))}
          <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
            Note: exploratory testing can also take place throughout the testing lifecycle.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.tag === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="QA Projects"
          title={<>Quality engineering through <span className="text-gradient">hands-on projects</span></>}
          subtitle="Explore manual testing projects and their complete QA documentation, alongside Playwright automation frameworks and Postman API test collections."
        />

        <div className="mb-6 mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={activeFilter === filter ? "chip-accent" : "chip transition hover:border-primary/40 hover:text-foreground"}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="h-4 w-4 text-primary" />
          <span>Showing {filteredProjects.length} of {projects.length} projects</span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid items-start gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition group-hover:opacity-40"
                  style={{ background: "var(--gradient-primary)" }}
                />

                <div className="relative flex h-full flex-col">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="chip-accent"><Layers className="h-3 w-3" />{project.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      QA project · {String(projects.indexOf(project) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold leading-snug">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                  {project.tag === "Manual" && project.deliverables ? (
                    <>
                      <ManualWorkflow deliverables={project.deliverables} />
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((technology) => (
                          <span key={technology} className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[0.7rem] text-muted-foreground">
                            {technology}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mt-4 rounded-xl border border-border bg-background/40 p-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p><span className="font-medium text-primary">Key achievement: </span><span className="text-muted-foreground">{project.best}</span></p>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-lg border border-border bg-background/40 px-2 py-3 text-center">
                            <div className="font-display text-lg font-bold text-primary">{metric.value}</div>
                            <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-muted-foreground sm:text-[0.65rem]">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((technology) => (
                          <span key={technology} className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[0.7rem] text-muted-foreground">{technology}</span>
                        ))}
                      </div>

                      {project.links && project.links.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-3 pt-6">
                          {project.links.filter((link) => !link.url.startsWith("YOUR_")).map((link) => (
                            <a key={`${link.label}-${link.url}`} href={link.url.trim()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-medium transition hover:border-primary/50 hover:text-primary">
                              {link.type === "github" ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-surface/30 px-6 py-14 text-center">
            <Layers className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
            <h3 className="font-display text-lg font-semibold">More projects are coming</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              There are currently no published projects under the {activeFilter.toLowerCase()} category.
            </p>
            <button type="button" onClick={() => setActiveFilter("All")} className="chip-accent mt-5">View all projects</button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Experience, Education & Certifications ---------------- */
function Experience() {
  const professionalExperience = [
    {
      period: "Jan 2026 – Apr 2026",
      role: "Software Engineer – QA & Test Automation",
      organization: "GoChapaa | Web3",
      location: "Remote",
      category: "Quality Assurance",
      description:
        "Focused on software quality, test execution, defect prevention, and release validation across fintech and Web3 applications.",
      achievements: [
        "Designed and executed functional, regression, smoke, exploratory, UI, integration, and end-to-end test scenarios.",
        "Validated authentication, payments, transactions, REST APIs, forms, and error-handling workflows.",
        "Reviewed requirements and user stories to identify risks, edge cases, and acceptance gaps; maintained test cases, checklists, and RTMs.",
        "Tested REST APIs using Postman and browser DevTools, validating authentication, status codes, response payloads, and negative scenarios.",
        "Documented defects with reproduction steps, severity, expected and actual results, screenshots, and supporting evidence.",
        "Collaborated with developers to reproduce issues, verify fixes, and support regression and release testing.",
      ],
    },
    {
      period: "May 2024 – Dec 2025",
      role: "Software Engineer – Frontend",
      organization: "GoChapaa | Web3",
      location: "Remote",
      category: "Software Engineering",
      description:
        "Developed and maintained responsive web and mobile applications for fintech and Web3 products.",
      achievements: [
        "Built web and mobile applications using React, React Native, Next.js, JavaScript, and TypeScript.",
        "Developed reusable UI components with attention to responsiveness, accessibility, and usability.",
        "Integrated REST APIs and payment services including M-Pesa and OCTET, implementing authentication, validation, and error handling.",
        "Investigated frontend and integration issues using browser DevTools, application logs, and API responses.",
        "Collaborated with backend engineers, designers, and product stakeholders to resolve defects and deliver production-ready features.",
        "Supported CI/CD and production deployments using GitHub Actions, AWS EC2, and CloudFront.",
      ],
    },
    {
      period: "Feb 2024 – May 2024",
      role: "Software Engineer – Frontend",
      organization: "Paya",
      location: "Remote",
      category: "Software Engineering",
      description:
        "Developed and validated fintech application features, payment integrations, and mobile user experiences.",
      achievements: [
        "Integrated and validated payment APIs including Pngme, Paystack, and M-Pesa.",
        "Tested loan application workflows, payment interactions, forms, and responsive mobile interfaces.",
        "Investigated API integration issues using response data and application logs.",
        "Built reusable React Native components and supported mobile application reliability.",
        "Automated frontend deployment workflows using GitHub Actions.",
      ],
    },
    {
      period: "Dec 2023 – Feb 2024",
      role: "Software Developer Intern",
      organization: "myNgovo",
      location: "Part-time",
      category: "Internship",
      description:
        "Developed and tested a responsive web application from initial implementation to deployment.",
      achievements: [
        "Built and tested responsive web application features.",
        "Validated functionality across browsers and devices and resolved usability issues.",
        "Managed deployment using cPanel and delivered the MVP within the required timeline.",
      ],
    },
    {
      period: "Sep 2023 – Nov 2023",
      role: "Frontend Software Developer Intern",
      organization: "HNG",
      location: "Nigeria | Remote Collaboration",
      category: "Internship",
      description:
        "Contributed to frontend development and testing within a collaborative remote engineering environment.",
      achievements: [
        "Built and tested responsive user interfaces using React and Tailwind CSS.",
        "Collaborated through GitHub, Slack, sprint planning, stand-ups, and code reviews.",
        "Improved application usability and cross-device compatibility.",
      ],
    },
  ];

  const education = [
    {
      period: "Jul 2026 – Present",
      program: "Fullstack QA Bootcamp",
      institution: "Kiwami School",
      location: "Part-time",
      status: "Ongoing",
      description:
        "Practical training in manual software testing, STLC, requirements analysis, test planning, test design, defect management, Agile testing, API testing, and Playwright automation.",
      skills: [
        "Manual Testing",
        "Test Planning",
        "RTM",
        "Test Case Design",
        "Defect Management",
      ],
    },
    {
      period: "May 2022 – Nov 2022",
      program: "Full-Stack Software Engineering Bootcamp",
      institution: "Moringa School",
      location: "Nairobi, Kenya",
      status: "Completed",
      description:
        "Intensive software engineering training covering frontend and backend development, React, Ruby, REST APIs, Git, Linux, SDLC, and Agile practices.",
      skills: [
        "React",
        "Ruby",
        "REST APIs",
        "Git",
        "Agile",
      ],
    },
    {
      period: "Sep 2017 – Apr 2022",
      program: "Bachelor of Science in Fashion Design and Marketing",
      institution: "Machakos University",
      location: "Machakos, Kenya",
      status: "Completed",
      description:
        "Graduated with Second Class Upper Division honours.",
      skills: [],
    },
  ];

  const certifications = [
    {
      title: "ISTQB Certified Tester – Foundation Level (CTFL v4.0)",
      provider: "ISTQB",
      date: "Oct 2026",
      url: "https://drive.google.com/file/d/19s7_MVjsym-eFTjQ_pq5xf6NY4vf6P3x/view?usp=sharing",
      featured: true,
    },
    {
      title: "Introduction to Software Testing Program",
      provider: "Kiwami Tech Solutions Ltd",
      date: "Sep 2026",
      url: "",
      featured: true,
    },
    {
      title: "Postman API Fundamentals Student Expert",
      provider: "Postman",
      date: "Jan 2024",
      url: "",
      featured: true,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "Aug 2025",
      url: "",
      featured: true,
    },
    {
      title: "AI Fundamentals & Applied Artificial Intelligence",
      provider: "Moringa School",
      date: "Nov 2025",
      url: "",
      featured: false,
    },
    {
      title: "React Learning Program",
      provider: "Andela",
      date: "Nov 2023",
      url: "",
      featured: false,
    },
    {
      title: "Oracle Cloud Infrastructure Associate",
      provider: "Oracle",
      date: "May 2023",
      url: "",
      featured: false,
    },
    {
      title: "TypeScript in a Nutshell",
      provider: "Microsoft",
      date: "Jan 2023",
      url: "",
      featured: false,
    },
  ];

  const [showAllExperience, setShowAllExperience] =
    useState(false);

  const [showAllCertifications, setShowAllCertifications] =
    useState(false);

  const visibleExperience = showAllExperience
    ? professionalExperience
    : professionalExperience.slice(0, 3);

  const visibleCertifications = showAllCertifications
    ? certifications
    : certifications.filter((cert) => cert.featured);

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16 lg:py-20"
    >
      <div className="container-page">

        {/* Main Section Heading */}
        <SectionHeader
          eyebrow="Experience & Education"
          title={
            <>
              My journey from{" "}
              <span className="text-gradient">
                Software Engineering to QA
              </span>
            </>
          }
          subtitle="Professional experience in fintech and Web3, supported by hands-on software testing, automation projects, formal training, and certifications."
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_1fr]">

          {/* LEFT: Professional Experience */}
          <div>

            {/* Heading */}
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold">
                  Professional Experience
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Fintech • Web3 • QA • Frontend Engineering
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {visibleExperience.map((item) => (
                <article
                  key={`${item.organization}-${item.role}-${item.period}`}
                  className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/40 sm:p-6"
                >

                  {/* Date and Category */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
                      {item.period}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {item.category}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h4 className="font-display text-lg font-semibold leading-snug">
                    {item.role}
                  </h4>

                  {/* Organization */}
                  <p className="mt-2 text-sm font-medium text-primary">
                    {item.organization}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.location}
                  </p>

                  {/* Role Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="my-4 border-t border-border" />

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {item.achievements.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </article>
              ))}

            </div>

            {/* View More Experience */}
            {professionalExperience.length > 3 && (
              <button
                type="button"
                onClick={() =>
                  setShowAllExperience((previous) => !previous)
                }
                aria-expanded={showAllExperience}
                className="mt-5 w-full rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:border-primary/50 hover:text-primary"
              >
                {showAllExperience
                  ? "Show Less Experience"
                  : "View Earlier Experience"}
              </button>
            )}

            {/* Independent QA Projects */}
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">

              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display text-lg font-semibold">
                  Independent QA Projects
                </h4>

                <span className="text-xs text-primary">
                  Self-Directed Practice
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                In addition to my professional experience, I
                develop QA projects demonstrating manual testing,
                test planning, requirements traceability, defect
                reporting, Playwright automation, and REST API
                testing using Postman and Newman.
              </p>

              <a
                href="#projects"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
              >
                Explore My QA Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* RIGHT: Education and Certifications */}
          <div className="space-y-6">

            {/* Education Section */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <TestTube2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Education & Training
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Academic qualifications and professional learning
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                {education.map((item) => (
                  <article
                    key={item.program}
                    className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/40"
                  >

                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="text-xs font-mono text-primary">
                        {item.period}
                      </span>

                      <span className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[10px] text-muted-foreground">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="mt-3 font-display text-base font-semibold">
                      {item.program}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-primary">
                      {item.institution}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.location}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    {item.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </article>
                ))}

              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 sm:p-6">

              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Certifications
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Professional certifications and completed learning programs
                  </p>
                </div>
              </div>

              <div className="space-y-3">

                {visibleCertifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/30"
                  >

                    <div className="flex items-start gap-3">

                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-success/10 text-success">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">

                        <h4 className="text-sm font-semibold leading-relaxed">
                          {cert.title}
                        </h4>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {cert.provider}
                        </p>

                        <p className="mt-2 text-xs text-primary">
                          {cert.date}
                        </p>

                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View Certificate
                          </a>
                        )}

                      </div>
                    </div>

                  </div>
                ))}

              </div>

              {/* Expand Other Certifications */}
              <button
                type="button"
                onClick={() =>
                  setShowAllCertifications((previous) => !previous)
                }
                aria-expanded={showAllCertifications}
                className="mt-5 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
              >
                {showAllCertifications
                  ? "Show Fewer Certifications"
                  : "View All 8 Certifications"}
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------- FAQ ------------------------------- */
// function FAQ() {
//   const items = [
//     {
//       q: "Are you a junior QA or an experienced engineer?",
//       a: "I'm a QA Automation Engineer with over three years of software engineering experience and I'm transitioning into a dedicated Quality Assurance career. My development background helps me understand application architecture, collaborate effectively with developers, and build reliable automated tests.",
//     },
//     {
//       q: "What testing methodologies do you specialize in?",
//       a: "I specialize in manual testing, exploratory testing, API testing, and end-to-end automation using Playwright. I also perform regression testing, bug reporting, and validate application behavior across different browsers and user scenarios.",
//     },
//     {
//       q: "Do you write custom automation scripts?",
//       a: "Yes. I write Playwright automation tests using TypeScript, build reusable test utilities, create data-driven test cases, validate APIs with Postman, and integrate tests into GitHub workflows.",
//     },
//     {
//       q: "Which testing tools do you use?",
//       a: "My primary tools include Playwright, Postman, GitHub Actions, Chrome DevTools, Git, and TypeScript. I also have experience working with REST APIs and modern frontend applications.",
//     },
//     {
//       q: "Why did you move from software engineering to QA?",
//       a: "While building software, I found myself naturally focusing on testing, edge cases, and preventing issues before they reached users. Transitioning into QA allowed me to combine my development experience with my passion for improving software quality.",
//     },
//     {
//       q: "Can you contribute to improving a team's QA process?",
//       a: "Yes. I enjoy working closely with developers and product teams to create effective test plans, improve bug reporting, automate repetitive regression tests, and help maintain software quality throughout development.",
//     },
//     {
//       q: "What roles are you looking for?",
//       a: "I'm open to QA Automation Engineer, QA Engineer, Software Test Engineer, and Junior SDET opportunities. I'm available for remote, hybrid, or onsite roles and enjoy collaborating with distributed teams.",
//     },
//     {
//       q: "Do you still write production code?",
//       a: "Yes, when needed. My software engineering background helps me understand code, contribute to automation frameworks, and communicate effectively with developers. My primary focus, however, is building quality through testing and automation.",
//     },
//   ];

//   return (
//     <section id="faqs" className="py-20 lg:py-28">
//       <div className="container-page">
//         <SectionHeader
//           eyebrow="FAQ"
//           title={
//             <>
//               Common <span className="text-gradient">questions</span>
//             </>
//           }
//           subtitle="The things hiring managers and engineering leads usually want to know."
//         />
//         <div className="grid md:grid-cols-2 gap-4 mt-12">
//           {items.map((f) => (
//             <details
//               key={f.q}
//               className="group rounded-2xl border border-border bg-surface/60 p-5 open:bg-surface-elevated"
//             >
//               <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
//                 <span className="font-display font-semibold">{f.q}</span>
//                 <span className="grid place-items-center w-6 h-6 rounded-full border border-border text-primary text-sm group-open:rotate-45 transition">
//                   +
//                 </span>
//               </summary>
//               <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
//             </details>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
/* ----------------------------- Contact ----------------------------- */

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xnqrjvoe",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        setSubmitError(
          "Your message could not be sent. Please try again or contact me directly by email."
        );
        return;
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "A network error occurred. Please check your connection or contact me directly by email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 lg:py-20"
    >
      <div className="container-page">

        {/* Section Heading */}
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gradient">connect</span>
            </>
          }
          subtitle="I'm open to QA Engineer, QA Automation Engineer, and Software Test Engineer opportunities. Feel free to reach out about roles, projects, or collaborations."
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT: Contact Information */}
          <div className="space-y-4">

            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold">
                Get in touch
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Interested in working together? You can contact
                me directly or send a message using the form.
              </p>
            </div>

            <ContactCard
              icon={Mail}
              label="Email"
              sub="Preferred contact method"
              value="irenenjuguna98@gmail.com"
              href="mailto:irenenjuguna98@gmail.com"
            />

            <ContactCard
              icon={Phone}
              label="Phone"
              sub="Calls and WhatsApp"
              value="+254 791 798 403"
              href="tel:+254791798403"
            />

            <ContactCard
              icon={MapPin}
              label="Location"
              sub="Open to remote and hybrid opportunities"
              value="Nairobi, Kenya"
            />

            {/* Availability */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success" />

                <div>
                  <h4 className="text-sm font-semibold">
                    Open to QA Opportunities
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Available for full-time, remote, hybrid,
                    and contract QA roles.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div>
            {isSubmitted ? (

              /* Success State */
              <div
                role="status"
                className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-success/30 bg-success/5 p-8 text-center"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                  <CheckCircle className="h-7 w-7" />
                </div>

                <h3 className="font-display text-xl font-semibold">
                  Message Sent Successfully!
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. Your message has
                  been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-6 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
                >
                  Send Another Message
                </button>
              </div>

            ) : (

              /* Contact Form */
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8"
              >

                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold">
                    Send a message
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill in the details below and I'll get
                    back to you when possible.
                  </p>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />

                </div>

                {/* Subject */}
                <div className="mt-5">
                  <Field
                    label="Subject"
                    name="subject"
                    placeholder="QA Engineer opportunity"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mt-5">

                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about the role, project, or reason for reaching out..."
                    required
                    className="w-full resize-y rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                  />
                </div>

                {/* Hidden honeypot field for spam filtering */}
                <div
                  className="absolute -left-[9999px]"
                  aria-hidden="true"
                >
                  <label htmlFor="contact-company-website">
                    Leave this field empty
                  </label>

                  <input
                    id="contact-company-website"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Form Error */}
                {submitError && (
                  <div
                    role="alert"
                    className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
                  >
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Direct Email */}
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Prefer email? Reach me directly at{" "}
                  <a
                    href="mailto:irenenjuguna98@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    irenenjuguna98@gmail.com
                  </a>
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------------- Contact Card ---------------------- */
function ContactCard({
  icon: Icon,
  label,
  sub,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-display text-sm font-semibold">
          {label}
        </h4>

        <p className="mt-1 text-xs text-muted-foreground">
          {sub}
        </p>

        <p className="mt-2 break-words text-sm text-foreground">
          {value}
        </p>
      </div>

      {href && (
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
      )}
    </div>
  );

  const styles =
    "block rounded-2xl border border-border bg-surface/60 p-5 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        className={`${styles} hover:border-primary/40 hover:bg-surface-elevated`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={styles}>
      {content}
    </div>
  );
}

/* ---------------------- Form Field ---------------------- */
function Field({
  label,
  name,
  ...props
}: {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `contact-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        {...props}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
      />
    </div>
  );
}


/* ----------------------------- Footer ----------------------------- */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border bg-background/40">
      <div className="container-page py-8 sm:py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Branding */}
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">

            <a
              href="#top"
              aria-label="Irene Njuguna - Back to top"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground transition hover:opacity-90"
              style={{
                background: "var(--gradient-primary)",
              }}
            >
              IN
            </a>

            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Irene Njuguna
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                QA Engineer • Test Automation • API Testing
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Stensis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/irene-njuguna98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:irenenjuguna98@gmail.com"
              aria-label="Send an email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-6 border-t border-border" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">

          <p>
            © {currentYear} Irene Njuguna. All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium transition hover:text-primary"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Shared ----------------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl">

      {/* Section Label */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      </div>

      {/* Section Title */}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Section Description */}
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
        {subtitle}
      </p>

    </div>
  );
}
