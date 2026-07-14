import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Bug, ShieldCheck, Workflow, Gauge, TestTube2, Cpu, GitBranch, Database,
  Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles, CheckCircle2,
  Layers, Code2, Activity, Send,
  CheckCircle,
  ExternalLink,
  Download,
  Briefcase,
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
  // { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  // { id: "artifacts", label: "Artifacts" },
  { id: "experience", label: "Experience" },
  { id: "faqs", label: "Faqs" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <Skills />
        <Projects />
        {/* <Artifacts /> */}
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
          <span className="block text-[0.7rem] uppercase tracking-widest text-muted-foreground">
            QA Automation Portfolio
          </span>

          <span className="block font-display font-semibold">
            Irene <span className="text-primary">Njuguna</span>
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
            Get in Touch <ArrowUpRight className="w-4 h-4" />
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
      <div className="container-page grid lg:grid-cols-[1.3fr_0.9fr] gap-8 py-16 lg:py-24 items-center">

        {/* Left Side: Professional Profile Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="chip-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
              Open to QA Engineer • QA Automation Engineer roles
            </span>
            <span className="chip"><MapPin className="w-3 h-3" /> Nairobi, Kenya</span>
            <span className="chip">Remote / Hybrid</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm{" "}
            <span className="text-gradient">
              Irene Njuguna
            </span>
          </h1>

          <div className="mt-5 flex items-start gap-2 text-lg md:text-xl text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0" />

            <span className="font-display leading-snug">
              <span className="text-foreground font-semibold">
                QA Automation Engineer
              </span>{" "}
              with a software engineering background, building reliable web and mobile applications through manual testing, Playwright automation, and API testing.
            </span>
          </div>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I spent more than three years building production software before
            transitioning into Quality Assurance. Today I combine development
            experience with manual testing, Playwright automation, and API
            testing to find issues early, improve software quality, and help
            teams ship reliable releases.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Playwright",
              "Manual Testing",
              "API Testing",
              "Postman",
              "Bug Reporting",
              "TypeScript"
            ].map((t) => (
              <span key={t} className="chip-accent"><CheckCircle2 className="w-3 h-3" />{t}</span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
            {[
              {
                icon: TestTube2,
                label: "Experience",
                value: "3+ Years"
              },
              {
                icon: Bug,
                label: "Testing",
                value: "Manual + Automation"
              },
              {
                icon: ShieldCheck,
                label: "Focus",
                value: "Web & API Testing"
              }
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

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Background Glow */}
          <div
            className="absolute inset-8 -z-10 rounded-full blur-3xl opacity-25"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="max-w-md w-full rounded-3xl border border-border bg-surface/80 backdrop-blur shadow-(--shadow-card) overflow-hidden">

            {/* Photo */}
            <img
              src="/profile.jpeg"
              alt="Irene Njuguna"
              className="w-full aspect-[4/5] object-cover"
            />

            {/* Card Content */}
            <div className="p-6">

              <div className="flex items-center justify-between mb-5">
                {/* <div>
                  <h2 className="text-2xl font-display font-bold">
                    Irene Njuguna
                  </h2>

                  <p className="text-primary font-medium">
                    QA Automation Engineer
                  </p>
                </div> */}

                <div className="rounded-full bg-success/15 px-3 py-1 text-xs text-success border border-success/30">
                  Available
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-3">

                {/* <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Nairobi, Kenya
                  </span>
                </div> */}

                {/* <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Open to Remote & Hybrid Opportunities
                  </span>
                </div> */}

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
                  "React"
                ].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">

                <a
                  href="https://drive.google.com/file/d/1yagCRVFISxa1N4vYLExXNnIpJ54637kQ/view?usp=drive_link"
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
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              Building better software through{" "}
              <span className="text-gradient">quality engineering</span>
            </>
          }
          subtitle="A software engineer transitioning into QA, combining development experience with a passion for testing, automation, and delivering reliable user experiences."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <div className="lg:col-span-2 rounded-3xl border border-border bg-surface/60 p-8">
            <h3 className="text-xl font-display font-semibold mb-4">
              Why I Chose QA
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              During my time as a software engineer, I enjoyed building features,
              but I found myself asking different questions: <span className="text-foreground">
                What could break? How will users interact with this? Have we tested
                every important scenario?
              </span> Those questions naturally led me toward Quality Assurance and
              test automation.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Today I combine my software engineering background with manual and
              automated testing to help build reliable applications. I enjoy
              finding bugs before users do, creating maintainable Playwright
              automation, testing APIs with Postman, and working closely with
              developers to improve software quality throughout the development
              process.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                {
                  icon: TestTube2,
                  t: "Test Automation",
                  d: "Building Playwright test suites for user journeys and regression testing.",
                },
                {
                  icon: Workflow,
                  t: "API Testing",
                  d: "Validating REST APIs using Postman, authentication, and response data.",
                },
                {
                  icon: Gauge,
                  t: "Manual Testing",
                  d: "Functional, exploratory, regression, smoke, and cross-browser testing.",
                },
                {
                  icon: ShieldCheck,
                  t: "Developer Mindset",
                  d: "Understanding how software is built helps me communicate effectively with engineering teams.",
                },
              ].map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-background/40 p-4"
                >
                  <Icon className="w-5 h-5 text-primary mb-2" />

                  <div className="font-display font-semibold">
                    {t}
                  </div>

                  <div className="text-sm text-muted-foreground mt-1">
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                v: "3+ Years",
                l: "Software Engineering Experience",
              },
              {
                v: "Manual + Automation",
                l: "Testing Focus",
              },
              {
                v: "Web & Mobile",
                l: "Application Experience",
              },
              {
                v: "English & Swahili",
                l: "Languages",
              },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-surface/60 p-5"
              >
                <div className="text-3xl font-display font-bold text-gradient">
                  {s.v}
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Services --------------------------- */
// function Services() {
//   const items = [
//     {
//       icon: FileCheck2,
//       t: "Exploratory & Manual Testing",
//       d: "Executing meticulous, risk-based exploratory sessions, uncovering edge cases, and mapping complex user flows to intercept failures before production."
//     },
//     {
//       icon: Bug,
//       t: "Defect Root-Cause Analysis",
//       d: "Inspecting browser dev tools, console errors, network payloads, and server logs to write high-fidelity bug reports with precise reproduction steps."
//     },
//     {
//       icon: TestTube2,
//       t: "End-to-End Automation",
//       d: "Building structured automated regression scripts with Playwright frameworks, leveraging clean data structures to validate core application states."
//     },
//     {
//       icon: Workflow,
//       t: "API & Payload Verification",
//       d: "Validating RESTful endpoints, checking response status codes, payload structures, and isolating authentication bottlenecks."
//     },
//     {
//       icon: Smartphone,
//       t: "Functional Web & Mobile QA",
//       d: "Verifying multi-device interface responsiveness, cross-browser compatibility, and localized UI layout integrity across staging builds."
//     },
//     {
//       icon: GitBranch,
//       t: "CI/CD Staging Integration",
//       d: "Configuring automated regression triggers within GitHub Actions pipelines to capture failures before deployment gates open."
//     },
//     {
//       icon: Gauge,
//       t: "Performance Load Simulation",
//       d: "Simulating concurrent traffic spikes using tools like Artillery to observe how backends handle intense system pressure."
//     },
//     {
//       icon: AlertTriangle,
//       t: "Regression Strategy",
//       d: "Organizing manual and automated sanity checks, smoke test sheets, and tiered regression passes aligned with product release cadences."
//     },
//   ];

//   return (
//     <section id="services" className="py-20 lg:py-28">
//       <div className="container-page">
//         <SectionHeader
//           eyebrow="Services"
//           title={<>What I do as a <span className="text-gradient">QA / SDET</span></>}
//           subtitle="From writing the first test plan to maintaining the regression pipeline — practical quality work that ships."
//         />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
//           {items.map(({ icon: Icon, t, d }) => (
//             <motion.div
//               key={t}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.4 }}
//               className="group rounded-2xl border border-border bg-surface/60 p-5 hover:border-primary/50 hover:bg-surface-elevated transition"
//             >
//               <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className="font-display font-semibold mb-1">{t}</div>
//               <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ----------------------------- Skills ----------------------------- */
function Skills() {
  const tabs = [
    {
      id: "qa",
      label: "Quality Assurance & Test Automation",
      short: "QA",
      icon: ShieldCheck,
      blurb:
        "I combine my software engineering background with manual and automated testing to build reliable, user-focused software.",

      groups: [
        {
          title: "Test Automation",
          items: [
            "Playwright",
            "TypeScript",
            "UI Automation",
            "Data-Driven Testing",
            "Test Reporting",
          ],
        },

        {
          title: "Manual Testing",
          items: [
            "Functional Testing",
            "Regression Testing",
            "Smoke Testing",
            "Exploratory Testing",
            "Cross-Browser Testing",
            "Mobile Testing",
          ],
        },

        {
          title: "API Testing",
          items: [
            "Postman",
            "REST APIs",
            "JSON Validation",
            "Authentication Testing",
            "Status Code Validation",
            "Negative Testing",
          ],
        },

        {
          title: "QA Tools",
          items: [
            "Jira",
            "Chrome DevTools",
            "Git",
            "GitHub",
            "GitHub Actions",
            "HTML Reports",
          ],
        },
      ],

      highlights: [
        "Playwright",
        "Manual Testing",
        "API Testing",
        "Bug Reporting",
        "Postman",
        "GitHub Actions",
      ],
    },

    {
      id: "fe",
      label: "Software Engineering",
      short: "Development",
      icon: Code2,

      blurb:
        "My development experience helps me understand applications from the inside out, making me a stronger QA engineer.",

      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "React Native",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
          ],
        },

        {
          title: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "PostgreSQL",
            "MongoDB",
          ],
        },

        {
          title: "Cloud & DevOps",
          items: [
            "Git",
            "GitHub",
            "GitHub Actions",
            "AWS Cloud Practitioner",
          ],
        },

        {
          title: "Development Tools",
          items: [
            "VS Code",
            "Figma",
            "Vercel",
            "Linux",
          ],
        },
      ],

      highlights: [
        "React",
        "React Native",
        "TypeScript",
        "REST APIs",
        "Node.js",
        "GitHub",
        "AWS"
      ],
    },
  ] as const;

  const [active, setActive] = useState<"qa" | "fe">("qa");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Quality Assurance backed by{" "}
              <span className="text-gradient">
                software engineering
              </span>
            </>
          }
          subtitle="My QA skills are strengthened by hands-on experience building and supporting production software."
        />
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
type ProjectTag =
  | "Automation"
  | "API"
  | "Manual"
  | "Performance"
  | "Mobile";

type ProjectMetric = {
  label: string;
  value: string;
};

type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "report";
};

type Project = {
  title: string;
  tag: ProjectTag;
  summary: string;
  best: string;
  tech: string[];
  metrics: ProjectMetric[];
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "ParaBank — End-to-End Banking Automation",
    tag: "Automation",
    summary:
      "Built automated end-to-end tests for the ParaBank demo banking application, covering authentication, session handling, bill payments, form validation, and negative user scenarios.",
    best:
      "Created data-driven Playwright tests for valid, invalid, empty, boundary, security, whitespace, and session-related scenarios using reusable page objects and test data.",
    tech: [
      "Playwright",
      "TypeScript",
      "Page Object Model",
      "Playwright HTML Report",
      "GitHub",
    ],
    metrics: [
      { label: "Login scenarios", value: "13" },
      { label: "Bill-pay tests", value: "10" },
      { label: "Core areas", value: "3+" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/KennOtieno/parabank",
        type: "github",
      },
    ],
  },
  {
    title: "OrangeHRM — Web Automation Test Suite",
    tag: "Automation",
    summary:
      "Developed a maintainable Playwright automation framework for OrangeHRM, covering authentication, dashboard navigation, employee management, search, and profile update workflows.",
    best:
      "Structured the framework with Page Object Model classes, reusable fixtures, dynamic test data, environment variables, constants, UI-based assertions, and GitHub Actions.",
    tech: [
      "Playwright",
      "TypeScript",
      "Page Object Model",
      "GitHub Actions",
      "Dynamic Test Data",
    ],
    metrics: [
      { label: "Core modules", value: "3" },
      { label: "Test layers", value: "E2E" },
      { label: "CI workflow", value: "1" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/Stensis/Orange_Hrm",
        type: "github",
      },
    ],
  },
  {
    title: "DummyJSON — E-commerce API Test Collection",
    tag: "API",
    summary:
      "Created a Postman API testing project for the DummyJSON e-commerce service, covering products, carts, users, authentication, CRUD operations, and negative scenarios.",
    best:
      "Automated response validation using JavaScript assertions and executed the collection through Newman with an HTML test report suitable for CI and portfolio evidence.",
    tech: [
      "Postman",
      "Newman",
      "JavaScript",
      "JSON",
      "Newman HTML Extra",
    ],
    metrics: [
      { label: "API areas", value: "4" },
      { label: "HTTP methods", value: "4" },
      { label: "HTML reports", value: "Yes" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/Stensis/dummyjson-api-testing-postman",
        type: "github",
      },
      {
        label: "View test report",
        url: "YOUR_NEWMAN_REPORT_URL",
        type: "report",
      },
    ],
  },
  {
    title: "The Internet Heroku — Authentication Testing Suite",
    tag: "Automation",
    summary:
      "Built a modular, data-driven authentication framework covering valid login, invalid credentials, blank inputs, whitespace, casing, SQL injection, XSS, and logout behavior.",
    best:
      "Identified and documented BUG-001 after discovering that blank credentials returned a misleading invalid-username message instead of required-field feedback.",
    tech: [
      "Playwright",
      "TypeScript",
      "Page Object Model",
      "JSON Test Data",
      "Custom Fixtures",
      "Defect Reporting",
    ],
    metrics: [
      { label: "Login scenarios", value: "11" },
      { label: "Defects found", value: "1" },
      { label: "Fixtures", value: "Custom" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/Stensis/Internet_heroku_test",
        type: "github",
      },
    ],
  },
  {
    title: "Rocky Ridge Farm — UI and API Test Automation",
    tag: "Automation",
    summary:
      "Created Playwright tests for the Rocky Ridge Farm e-commerce platform, including authentication workflows and API test coverage.",
    best:
      "Combined browser-based and API testing in one Playwright project so important application behavior could be validated across both the user interface and service layers.",
    tech: [
      "Playwright",
      "TypeScript",
      "API Testing",
      "Authentication Testing",
      "GitHub",
    ],
    metrics: [
      { label: "Test layers", value: "UI + API" },
      { label: "Core focus", value: "Auth" },
      { label: "Repository", value: "Public" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/Stensis/rockyridgesfarm-playwright-tests-",
        type: "github",
      },
    ],
  },
  {
    title: "SauceDemo — E-commerce E2E Automation Framework",
    tag: "Automation",
    summary:
      "Built a scalable, data-driven Playwright framework for SauceDemo covering authentication, inventory, sorting, cart management, checkout validation, financial calculations, and complete order processing.",
    best:
      "Implemented reusable Page Object Model classes, JSON-driven scenarios, cross-browser execution, mobile viewport coverage, secure environment variables, and GitHub Actions CI.",
    tech: [
      "Playwright",
      "TypeScript",
      "Page Object Model",
      "JSON",
      "GitHub Actions",
      "Cross-browser Testing",
    ],
    metrics: [
      { label: "Test suites", value: "3" },
      { label: "Browsers", value: "3" },
      { label: "Core flows", value: "4" },
    ],
    links: [
      {
        label: "View repository",
        url: "https://github.com/Stensis/saucedemo",
        type: "github",
      },
    ],
  },
  //   {
  //   title: "100 Days of DSA — Daily Problem-Solving Challenge",
  //   tag: "Learning",
  //   summary:
  //     "An ongoing 100-day challenge focused on strengthening data structures, algorithms, TypeScript fundamentals, and structured problem-solving through consistent daily practice.",
  //   best:
  //     "Started a public learning log with daily solutions and explanations, demonstrating consistency, analytical thinking, and commitment to continuous improvement.",
  //   tech: [
  //     "TypeScript",
  //     "Data Structures",
  //     "Algorithms",
  //     "Problem Solving",
  //     "GitHub",
  //   ],
  //   metrics: [
  //     { label: "Current day", value: "2/100" },
  //     { label: "Status", value: "Active" },
  //     { label: "Cadence", value: "Daily" },
  //   ],
  // },
];

const projectFilters = [
  "All",
  "Automation",
  "API",
  "Manual",
  "Performance",
  "Mobile",
] as const;

type ProjectFilter = (typeof projectFilters)[number];

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tag === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="QA Projects"
          title={
            <>
              Quality engineering through{" "}
              <span className="text-gradient">
                hands-on projects
              </span>
            </>
          }
          subtitle="Automation frameworks, API test collections, and practical testing projects built with Playwright, TypeScript, Postman, Newman, and continuous integration."
        />

        <div className="mt-10 mb-6 flex flex-wrap items-center justify-between gap-4">

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "chip-accent"
                      : "chip transition hover:border-primary/40 hover:text-foreground"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="h-4 w-4 text-primary" />

          <span>
            Showing {filteredProjects.length} of{" "}
            {projects.length} projects
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition group-hover:opacity-40"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="chip-accent">
                      <Layers className="h-3 w-3" />
                      {project.tag}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground">
                      QA project ·{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-4 rounded-xl border border-border bg-background/40 p-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                      <p>
                        <span className="font-medium text-primary">
                          Key achievement:{" "}
                        </span>

                        <span className="text-muted-foreground">
                          {project.best}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-border bg-background/40 px-2 py-3 text-center"
                      >
                        <div className="font-display text-lg font-bold text-primary">
                          {metric.value}
                        </div>

                        <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-muted-foreground sm:text-[0.65rem]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.links &&
                    project.links.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-6">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-medium transition hover:border-primary/50 hover:text-primary"
                          >
                            {link.type === "github" ? (
                              <Github className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}

                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-surface/30 px-6 py-14 text-center">
            <Layers className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />

            <h3 className="font-display text-lg font-semibold">
              More projects are coming
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              There are currently no published projects under the{" "}
              {activeFilter.toLowerCase()} category.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="chip-accent mt-5"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ----------------- Featured Automation Project (terminal) ----------------- */
// function FeaturedAutomationProject() {
//   const lines = [
//     { c: "muted", t: "# Data-Driven Test Automation Framework" },
//     { c: "prompt", t: "$ pnpm playwright test --shard=1/4 --reporter=line" },
//     { c: "ok", t: "✓ markets/ke › checkout › M-Pesa journey (1.4s)" },
//     { c: "ok", t: "✓ markets/ng › checkout › Paystack journey (1.6s)" },
//     { c: "ok", t: "✓ markets/za › checkout › card journey (1.2s)" },
//     { c: "ok", t: "✓ markets/gh › checkout › wallet journey (1.5s)" },
//     { c: "muted", t: "→ 4 markets × 12 personas = 48 parallel workers" },
//     { c: "ok", t: "✓ 312 specs passed · 0 failed · 0 flaky" },
//     { c: "prompt", t: "$ gh workflow run quality-gate.yml → ✓ merged" },
//   ] as const;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.55 }}
//       className="relative mb-10"
//     >
//       <div className="absolute -inset-2 rounded-4xl blur-3xl opacity-30 -z-10"
//         style={{ background: "var(--gradient-primary)" }} />

//       <div className="rounded-3xl border border-primary/30 bg-surface/70 backdrop-blur p-2 shadow-(--shadow-card)">
//         <div className="rounded-[1.35rem] bg-background/90 overflow-hidden">
//           {/* Title bar */}
//           <div className="flex items-center justify-between px-5 py-3 border-b border-border">
//             <div className="flex items-center gap-3">
//               <div className="flex gap-1.5">
//                 <span className="w-3 h-3 rounded-full bg-destructive/80"></span>
//                 <span className="w-3 h-3 rounded-full bg-primary/80"></span>
//                 <span className="w-3 h-3 rounded-full bg-success/80"></span>
//               </div>
//               <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
//                 ~/frameworks/data-driven-suite — zsh
//               </span>
//             </div>
//             <span className="chip-accent"><Terminal className="w-3 h-3" /> Featured</span>
//           </div>

//           <div className="grid lg:grid-cols-[1.05fr_1fr]">
//             {/* Left: terminal output */}
//             <div className="p-6 font-mono text-[13px] leading-relaxed border-b lg:border-b-0 lg:border-r border-border">
//               {lines.map((l, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -8 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.05 }}
//                   className={
//                     l.c === "ok"
//                       ? "text-success"
//                       : l.c === "prompt"
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                   }
//                 >
//                   {l.t}
//                 </motion.div>
//               ))}
//               <div className="mt-4 grid grid-cols-3 gap-2">
//                 <StatCell label="markets" value="4" tone="ok" />
//                 <StatCell label="workers" value="48" tone="warn" />
//                 <StatCell label="regression" value="-72%" tone="ok" />
//               </div>
//             </div>

//             {/* Right: description */}
//             <div className="p-6 lg:p-8">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="chip-accent"><Layers className="w-3 h-3" />Automation · Production</span>
//                 <span className="text-xs text-muted-foreground font-mono">case · 00</span>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-display font-semibold leading-tight">
//                 Data-Driven Test Automation <span className="text-gradient">Framework</span>
//               </h3>

//               <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
//                 {[
//                   "Architected a loop-based UI automation framework using Playwright & TypeScript to validate complex multi-market user journeys.",
//                   "Configured parallel test execution models to maximize speed and drastically reduce regression feedback loops.",
//                   "Seamlessly integrated the testing suite as an automated quality gate within production-level GitHub Actions CI/CD pipelines.",
//                 ].map((p) => (
//                   <li key={p} className="flex gap-3">
//                     <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                     <span className="leading-relaxed">{p}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-5 flex flex-wrap gap-1.5">
//                 {["Playwright", "TypeScript", "GitHub Actions", "Data-Driven", "Parallel Sharding", "Allure"].map((t) => (
//                   <span key={t} className="text-[0.7rem] px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border font-mono">{t}</span>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <a
//                   href="https://github.com/Stensis"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-primary-foreground shadow-(--shadow-glow)"
//                   style={{ background: "var(--gradient-primary)" }}
//                 >
//                   <Github className="w-4 h-4" /> View Code
//                 </a>
//                 <a
//                   href="https://github.com/Stensis"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-elevated transition"
//                 >
//                   <FileText className="w-4 h-4" /> View Test Report
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function Artifacts() {
//   const artifacts = [
//     {
//       icon: ClipboardCheck,
//       title: "Test Plan",
//       text: "Scope, risks, test approach, entry criteria, and exit criteria.",
//       href: "/artifacts/manual-test-plan.pdf",
//     },
//     {
//       icon: ListChecks,
//       title: "Test Cases",
//       text: "Positive, negative, and regression test cases.",
//       href: "/artifacts/functional-test-cases.pdf",
//     },
//     {
//       icon: Bug,
//       title: "Bug Report",
//       text: "Repro steps, expected result, actual result, severity, and evidence.",
//       href: "/artifacts/bug-report-sample.pdf",
//     },
//     {
//       icon: FileJson,
//       title: "Postman Collection",
//       text: "API checks for status codes, response body, and validation errors.",
//       href: "https://github.com/Stensis",
//     },
//     {
//       icon: PlayCircle,
//       title: "Playwright Report",
//       text: "E2E test run with browser results and failure evidence.",
//       href: "/artifacts/playwright-report/index.html",
//     },
//     {
//       icon: BarChart3,
//       title: "Load Test Report",
//       text: "Basic performance report with response time and failed requests.",
//       href: "/artifacts/performance-test-report.pdf",
//     },
//   ];

//   return (
//     <section id="artifacts" className="py-20 lg:py-28">
//       <div className="container-page">
//         <SectionHeader
//           eyebrow="Artifacts"
//           title={
//             <>
//               Simple QA <span className="text-gradient">proof</span>
//             </>
//           }
//           subtitle="Documents and reports that show how I plan, test, report, and automate."
//         />

//         <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {artifacts.map(({ icon: Icon, title, text, href }, index) => (
//             <motion.a
//               key={title}
//               href={href}
//               target="_blank"
//               rel="noreferrer"
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.35, delay: index * 0.04 }}
//               className="group rounded-3xl border border-border bg-surface/60 p-6 transition hover:border-primary/40 hover:bg-surface-elevated"
//             >
//               <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
//                 <Icon className="h-5 w-5" />
//               </div>

//               <h3 className="font-display text-lg font-semibold">{title}</h3>

//               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                 {text}
//               </p>

//               <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
//                 Open artifact <ArrowUpRight className="h-4 w-4" />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


/* --------------------------- Experience --------------------------- */
function Experience() {
  const timeline = [
    {
      year: "2025 — Present",
      role: "QA Engineer (Transitioning from Software Engineering)",
      org: "Independent Projects & Professional Development",
      points: [
        "Building automated UI and API tests using Playwright with TypeScript.",
        "Practicing manual, regression, exploratory, and API testing on real-world applications.",
        "Preparing for the ISTQB Foundation certification while expanding automation skills.",
        "Creating reusable test cases, bug reports, and test documentation for portfolio projects.",
      ],
    },
    {
      year: "2023 — 2026",
      role: "Software Engineer",
      org: "Remote Product Teams (Fintech & Web Applications)",
      points: [
        "Developed and maintained web and mobile applications using React, React Native, TypeScript, and REST APIs.",
        "Tested features before release, reproduced reported defects, and collaborated with developers to resolve issues.",
        "Used Postman and browser developer tools to inspect APIs, validate responses, and troubleshoot production issues.",
        "Supported Agile development through sprint planning, feature validation, and production support.",
      ],
    },
    {
      year: "2022",
      role: "Full-Stack Software Engineering Bootcamp",
      org: "Moringa School",
      points: [
        "Completed an intensive full-stack engineering program covering JavaScript, React, Ruby on Rails, PostgreSQL, Git, and Agile.",
        "Built and deployed collaborative projects while following software development best practices.",
      ],
    },
  ];

  const certs = [
    {
      t: "ISTQB Foundation (In Progress)",
      d: "Software testing principles, test design techniques, levels, types, and QA processes.",
    },
    {
      t: "Postman API Fundamentals",
      d: "REST API testing, collections, environments, authentication, and validation.",
    },
    {
      t: "AWS Certified Cloud Practitioner",
      d: "Cloud fundamentals, security, architecture, and deployment concepts.",
    },
    {
      t: "AI Fundamentals",
      d: "Artificial intelligence concepts and practical applications.",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Software Engineer turned{" "}
              <span className="text-gradient">QA Engineer</span>
            </>
          }
          subtitle="Building reliable software through manual testing, automation, and a strong engineering foundation."
        />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 mt-12">
          <div className="space-y-4">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="relative rounded-2xl border border-border bg-surface/60 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg">
                    {t.role}
                  </h3>
                  <span className="text-xs font-mono text-primary">
                    {t.year}
                  </span>
                </div>

                <div className="text-sm text-muted-foreground mb-3">
                  {t.org}
                </div>

                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
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
                <ShieldCheck className="w-4 h-4 text-primary" />
                Certifications
              </h3>

              <div className="space-y-3">
                {certs.map((c) => (
                  <div
                    key={c.t}
                    className="rounded-xl border border-border bg-background/40 p-3"
                  >
                    <div className="font-medium text-sm">{c.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {c.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Why Hire Me
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Code2 className="w-3.5 h-3.5 mt-1 text-primary" />
                  My software engineering background helps me understand how applications work and where defects are likely to occur.
                </li>

                <li className="flex gap-2">
                  <Bug className="w-3.5 h-3.5 mt-1 text-primary" />
                  I enjoy reproducing bugs, documenting them clearly, and working closely with developers to resolve them.
                </li>

                <li className="flex gap-2">
                  <GitBranch className="w-3.5 h-3.5 mt-1 text-primary" />
                  I build reliable Playwright automation while knowing which scenarios are better suited for manual testing.
                </li>

                <li className="flex gap-2">
                  <Database className="w-3.5 h-3.5 mt-1 text-primary" />
                  Comfortable testing APIs, validating data, and ensuring features work from backend to frontend.
                </li>
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
      a: "I'm a QA Automation Engineer with over three years of software engineering experience and I'm transitioning into a dedicated Quality Assurance career. My development background helps me understand application architecture, collaborate effectively with developers, and build reliable automated tests."
    },
    {
      q: "What testing methodologies do you specialize in?",
      a: "I specialize in manual testing, exploratory testing, API testing, and end-to-end automation using Playwright. I also perform regression testing, bug reporting, and validate application behavior across different browsers and user scenarios."
    },
    {
      q: "Do you write custom automation scripts?",
      a: "Yes. I write Playwright automation tests using TypeScript, build reusable test utilities, create data-driven test cases, validate APIs with Postman, and integrate tests into GitHub workflows."
    },
    {
      q: "Which testing tools do you use?",
      a: "My primary tools include Playwright, Postman, GitHub Actions, Chrome DevTools, Git, and TypeScript. I also have experience working with REST APIs and modern frontend applications."
    },
    {
      q: "Why did you move from software engineering to QA?",
      a: "While building software, I found myself naturally focusing on testing, edge cases, and preventing issues before they reached users. Transitioning into QA allowed me to combine my development experience with my passion for improving software quality."
    },
    {
      q: "Can you contribute to improving a team's QA process?",
      a: "Yes. I enjoy working closely with developers and product teams to create effective test plans, improve bug reporting, automate repetitive regression tests, and help maintain software quality throughout development."
    },
    {
      q: "What roles are you looking for?",
      a: "I'm open to QA Automation Engineer, QA Engineer, Software Test Engineer, and Junior SDET opportunities. I'm available for remote, hybrid, or onsite roles and enjoy collaborating with distributed teams."
    },
    {
      q: "Do you still write production code?",
      a: "Yes, when needed. My software engineering background helps me understand code, contribute to automation frameworks, and communicate effectively with developers. My primary focus, however, is building quality through testing and automation."
    },
  ];

  return (
    <section id="faqs" className="py-20 lg:py-28">
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
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gradient">connect</span>
            </>
          }
          subtitle="I'm open to QA Engineer, QA Automation, and Software Test Engineer opportunities. Whether you're hiring for a full-time role, freelance project, or contract engagement, I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 mt-12">
          <div className="space-y-3">
            <ContactCard icon={Mail} label="Email" sub="Best way to reach me" value="irenenjuguna98@gmail.com" href="mailto:irenenjuguna98@gmail.com" />
            <ContactCard icon={Phone} label="Phone" sub="Call or WhatsApp" value="+254 791 798 403" href="tel:+254791798403" />
            <ContactCard icon={MapPin} label="Location" sub="Based in Nairobi, available remotely" value="Nairobi, Kenya" href="#" />

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <div className="text-sm font-display font-semibold mb-3">Engagement Presets</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "QA Engineer Role",
                  "QA Automation Opportunity",
                  "Freelance Testing",
                  "Technical Interview",
                  "General Inquiry",
                ].map((s) => (
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
                Thank you for reaching out! Your message has been received, and I'll respond as soon as I can.
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
                <Field label="Subject" name="subject" placeholder="Job opportunity, freelance project, or collaboration" required />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium block mb-2">Message Context</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about the opportunity, project, or reason for reaching out..."
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  required
                />
                <div className="text-xs text-muted-foreground mt-1">Tip: Feel free to include a job description, project details, or relevant links.</div>
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
          <span>© {new Date().getFullYear()} Irene Njuguna • QA Engineer | Software Test Engineer</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Stensis" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/irene-njuguna98"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-primary transition-colors"
          ></a>
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
