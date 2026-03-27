import Link from "next/link";
import {
  FaClock,
  FaCalendarDays,
  FaTag,
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaTerminal,
  FaTriangleExclamation,
  FaLightbulb,
  FaBookOpen,
  FaChevronRight,
  FaCircleXmark,
} from "react-icons/fa6";

export const metadata = {
  title: "npm ERR! Peer Dependency Conflict — Fixed [Complete Guide 2026]",
  description:
    "Fix npm ERR! peer dependency conflict (ERESOLVE) fast. Covers --legacy-peer-deps, --force, updating conflicting packages, and permanent .npmrc fix — macOS, Windows, Linux.",
  keywords:
    "npm peer dependency conflict, npm eresolve unable to resolve dependency tree, npm install peer dependency error, npm legacy peer deps fix 2026",
  alternates: {
    canonical: "https://softplix.com/blog/npm-err-peer-dependency-conflict",
  },
  openGraph: {
    title: "npm ERR! Peer Dependency Conflict — Fixed [Complete Guide 2026]",
    description:
      "Fix npm peer dependency conflict (ERESOLVE) fast. Every cause and fix covered.",
    type: "article",
    url: "https://softplix.com/blog/npm-err-peer-dependency-conflict",
  },
};

// ─── Shared UI ────────────────────────────────────────────────────────────────

function CodeBlock({ title, children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
          <FaTerminal className="text-indigo-400 text-xs flex-shrink-0" />
          <span className="text-xs font-mono text-slate-300">{title}</span>
        </div>
      )}
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-green-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}

function ErrorBlock({ children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-red-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-red-950 border-b border-red-900">
        <FaTriangleExclamation className="text-red-400 text-xs flex-shrink-0" />
        <span className="text-xs font-mono text-red-300">
          {"Terminal Error"}
        </span>
      </div>
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-red-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}

function TipBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
      <FaLightbulb className="text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}

function WarnBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <FaTriangleExclamation className="text-amber-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  );
}

function FixCard({ number, title, time, tag, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-tight">
            {title}
          </h3>
          {tag && (
            <span className="text-xs text-indigo-500 font-semibold">{tag}</span>
          )}
        </div>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
          <FaClock className="text-xs" />
          {time}
        </span>
      </div>
      <div className="px-6 py-5 bg-white">{children}</div>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleCheck className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function XList({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleXmark className="text-red-400 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Prose({ children }) {
  return (
    <p className="text-[15px] text-gray-600 leading-[1.85] my-4">{children}</p>
  );
}

function IC({ children }) {
  return (
    <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-700">
      {children}
    </code>
  );
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const TOC = [
  { label: "What is a peer dependency conflict?", href: "#what-it-means" },
  { label: "Fix 1 — Use --legacy-peer-deps", href: "#fix-1" },
  { label: "Fix 2 — Use --force", href: "#fix-2" },
  { label: "Fix 3 — Update the conflicting package", href: "#fix-3" },
  { label: "Fix 4 — Add to .npmrc permanently", href: "#fix-4" },
  { label: "Fix 5 — Downgrade your dependency", href: "#fix-5" },
  { label: "How to prevent peer dependency conflicts", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

// ─── Schemas ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What does npm peer dependency conflict mean?",
    a: "It means two packages in your project require incompatible versions of the same dependency. npm 7+ throws this as a hard error instead of silently installing the wrong version like npm 6 did.",
  },
  {
    q: "Is --legacy-peer-deps safe to use?",
    a: "Usually yes. It tells npm to use the old npm 6 behaviour which installed packages despite peer conflicts. Most packages work fine even with mismatched peer dependency declarations. Used by millions of projects.",
  },
  {
    q: "What is the difference between --legacy-peer-deps and --force?",
    a: "--legacy-peer-deps ignores peer dependency version mismatches but still resolves the dependency tree. --force bypasses all conflict checks entirely. Use --legacy-peer-deps first — it is safer.",
  },
  {
    q: "Why did peer dependency errors suddenly appear after upgrading npm?",
    a: "npm 7 changed peer dependency resolution from permissive to strict. If you upgraded from npm 6 to npm 7+, conflicts that were previously silent are now hard errors.",
  },
  {
    q: "How do I check what peer dependencies a package needs?",
    a: "Run: npm info package-name peerDependencies. This shows exactly which versions the package requires of its peers.",
  },
  {
    q: "Can I add --legacy-peer-deps to package.json permanently?",
    a: "Yes — add it to .npmrc instead: legacy-peer-deps=true. Commit this file to git and every developer plus every CI/CD pipeline will use it automatically.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "npm ERR! Peer Dependency Conflict — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/blog/npm-err-peer-dependency-conflict",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const RELATED = [
  {
    tag: "npm",
    title: 'Fix: npm ERR! Tracker "idealTree" Already Exists',
    href: "/blog/npm-err-tracker-idealtree-already-exists",
    time: "6 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm install Not Working",
    href: "/blog/npm-install-not-working",
    time: "9 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm WARN EBADENGINE Unsupported Engine",
    href: "/blog/fix-npm-ebadengine",
    time: "5 min read",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">
              {"npm Peer Dependency Conflict"}
            </span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["npm", "Node.js", "Error Fix"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100"
                >
                  <FaTag className="text-[10px]" />
                  {t}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-100">
                {"2026 Updated"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              {"npm ERR! Peer Dependency Conflict"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"5 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"npm 7–10 · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — works 90% of the time"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Add --legacy-peer-deps to your install command:"}
            </p>
            <CodeBlock>{"npm install --legacy-peer-deps"}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "Still broken? Every other fix is below — in order of what works fastest."
              }
            </p>
          </div>

          {/* TOC */}
          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map(({ label, href }, i) => (
                <li key={href} className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-indigo-400 w-5 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={href}
                    className="text-sm text-indigo-700 hover:text-indigo-900 hover:underline leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ════ What it means ════ */}
          <SectionHeading id="what-it-means">
            {"What Is a Peer Dependency Conflict?"}
          </SectionHeading>

          <Prose>
            {
              "A peer dependency conflict happens when two packages in your project require incompatible versions of the same dependency. The most common example: your project uses React 18, but a package you are installing declares it only supports React 17 as a peer."
            }
          </Prose>

          <Prose>
            {
              "npm 7 and above made peer dependency resolution strict — it throws a hard error instead of silently installing the wrong version like npm 6 did. This is why the error suddenly appeared after upgrading npm."
            }
          </Prose>

          <ErrorBlock>{`npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: my-app@1.0.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from some-package@2.1.0
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps`}</ErrorBlock>

          <SubHeading>{"How to Read the Error"}</SubHeading>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Line"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"What it means"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Found: react@18.2.0",
                    "The version you currently have installed",
                  ],
                  [
                    'peer react@"^17.0.0" from some-package@2.1.0',
                    "The version the conflicting package needs",
                  ],
                  [
                    "Could not resolve dependency",
                    "npm cannot find a version that satisfies both requirements",
                  ],
                ].map(([line, meaning]) => (
                  <tr
                    key={line}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-indigo-700 text-xs bg-slate-50">
                      {line}
                    </td>
                    <td className="px-5 py-3 text-gray-600">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TipBox>
            {
              "Run npm install --verbose to see the full dependency tree and identify exactly which package chain is creating the conflict."
            }
          </TipBox>

          {/* ════ Fix 1 ════ */}
          <FixCard
            number="1"
            title="Use --legacy-peer-deps"
            time="30 sec"
            tag="Works 90% of the time"
          >
            <Prose>
              {
                "This flag tells npm to use the old npm 6 behaviour — it ignores peer dependency conflicts and installs anyway. Most of the time packages work fine together despite the version mismatch in their declared peer requirements."
              }
            </Prose>
            <CodeBlock title="terminal">
              {"npm install --legacy-peer-deps"}
            </CodeBlock>
            <SubHeading>
              {"Installing a specific package with the flag"}
            </SubHeading>
            <CodeBlock title="terminal">
              {"npm install some-package --legacy-peer-deps"}
            </CodeBlock>
            <SubHeading>{"With npm ci (CI/CD pipelines)"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm ci --legacy-peer-deps"}
            </CodeBlock>
            <TipBox>
              {
                "If this works, add legacy-peer-deps=true to your .npmrc file (see Fix 4) so you never need to type the flag again — and so CI/CD pipelines use it automatically."
              }
            </TipBox>
          </FixCard>

          {/* ════ Fix 2 ════ */}
          <FixCard
            number="2"
            title="Use --force"
            time="30 sec"
            tag="When --legacy-peer-deps does not work"
          >
            <Prose>
              {
                "Force install bypasses all conflict checks and installs whatever npm can resolve. Use this only if --legacy-peer-deps did not fix it."
              }
            </Prose>
            <CodeBlock title="terminal">{"npm install --force"}</CodeBlock>
            <CodeBlock title="terminal">
              {"npm install some-package --force"}
            </CodeBlock>
            <WarnBox>
              {
                "Using --force can install genuinely incompatible versions that crash at runtime rather than install time. Always smoke-test your app thoroughly after a forced install before committing or deploying."
              }
            </WarnBox>
          </FixCard>

          {/* ════ Fix 3 ════ */}
          <FixCard
            number="3"
            title="Update the Conflicting Package"
            time="2 min"
            tag="Clean long-term fix"
          >
            <Prose>
              {
                "The cleanest solution is updating the package causing the conflict to a version that supports your current React, Node, or other dependency version. Many packages lag behind in their peer dependency declarations but newer versions have caught up."
              }
            </Prose>

            <SubHeading>{"Check what the package needs"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm info some-package peerDependencies"}
            </CodeBlock>

            <SubHeading>{"Update to latest version"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install some-package@latest"}
            </CodeBlock>

            <SubHeading>{"Check all outdated packages at once"}</SubHeading>
            <CodeBlock title="terminal">{"npm outdated"}</CodeBlock>

            <SubHeading>
              {"Update all packages to latest compatible versions"}
            </SubHeading>
            <CodeBlock title="terminal">
              {"npx npm-check-updates -u\nnpm install"}
            </CodeBlock>

            <TipBox>
              {
                "npx npm-check-updates -u updates all version numbers in package.json to the latest. Run npm install after to apply the updates."
              }
            </TipBox>
          </FixCard>

          {/* ════ Fix 4 ════ */}
          <FixCard
            number="4"
            title="Add to .npmrc Permanently"
            time="1 min"
            tag="Team-wide fix for projects with known conflicts"
          >
            <Prose>
              {
                "If your project consistently needs --legacy-peer-deps, adding it to .npmrc means every developer and every CI/CD pipeline uses it automatically — no flags to remember or forget."
              }
            </Prose>

            <SubHeading>
              {"Create or edit .npmrc in your project root"}
            </SubHeading>
            <CodeBlock title=".npmrc">{"legacy-peer-deps=true"}</CodeBlock>

            <Prose>
              {"After saving, plain npm install works without any flags:"}
            </Prose>
            <CodeBlock title="terminal">
              {"npm install   # automatically uses legacy-peer-deps"}
            </CodeBlock>

            <SubHeading>{"Commit .npmrc to git"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "git add .npmrc\ngit commit -m 'chore: set legacy-peer-deps for npm install'"
              }
            </CodeBlock>

            <TipBox>
              {
                "You can also set this globally for all your projects: npm config set legacy-peer-deps true — but project-level .npmrc is better practice as it only affects the project that needs it."
              }
            </TipBox>
          </FixCard>

          {/* ════ Fix 5 ════ */}
          <FixCard
            number="5"
            title="Downgrade Your Dependency"
            time="3 min"
            tag="When the conflicting package has no newer version"
          >
            <Prose>
              {
                "If the conflicting package has not released a version that supports your React or Node version yet, the only clean option is downgrading your own dependency to what the package expects. This is less common but sometimes necessary with older packages that are no longer actively maintained."
              }
            </Prose>

            <SubHeading>{"Check what version the package requires"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "npm info some-package peerDependencies\n# Output example:\n# { react: '^17.0.0' }"
              }
            </CodeBlock>

            <SubHeading>{"Downgrade React to match (example)"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install react@17 react-dom@17"}
            </CodeBlock>

            <WarnBox>
              {
                "Downgrading React or other core dependencies will affect every other package in your project. Always check what else depends on the version you are downgrading before making this change."
              }
            </WarnBox>
          </FixCard>

          {/* ════ Prevention ════ */}
          <SectionHeading id="prevention">
            {"How to Prevent Peer Dependency Conflicts"}
          </SectionHeading>
          <CheckList
            items={[
              "Run npm outdated regularly to catch version drift before it becomes a conflict",
              "Check peer dependencies before installing: npm info package-name peerDependencies",
              "Add legacy-peer-deps=true to .npmrc for projects with many dependencies",
              "Keep React, Next.js, and other core dependencies up to date",
              "Use npm install --dry-run to preview what will change before installing",
              "Consider switching to pnpm which has more flexible peer dependency handling",
            ]}
          />

          {/* ════ Summary ════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Reference — Fix Order"}
            </h2>
            <ol className="space-y-3">
              {[
                { fix: "npm install --legacy-peer-deps", rate: "90%" },
                { fix: "npm install --force", rate: "95%" },
                { fix: "Update conflicting package to latest", rate: "97%" },
                { fix: "Add legacy-peer-deps=true to .npmrc", rate: "99%" },
                {
                  fix: "Downgrade your own dependency to match",
                  rate: "99.9%",
                },
              ].map(({ fix, rate }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1 font-mono text-xs bg-white border border-gray-100 rounded-lg px-3 py-2 text-gray-700">
                    {fix}
                  </span>
                  <span className="text-xs font-bold text-green-600 whitespace-nowrap">
                    {rate}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* ════ FAQ ════ */}
          <SectionHeading id="faq">
            {"Frequently Asked Questions"}
          </SectionHeading>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:text-indigo-600 transition-colors select-none">
                  {q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors font-bold text-base leading-none">
                    <span className="group-open:hidden">{"+"}</span>
                    <span className="hidden group-open:inline">{"−"}</span>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>

          {/* Related */}
          <aside className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {"Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map(({ tag, title, href, time }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block bg-slate-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-5 transition-all"
                >
                  <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                    {tag}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 leading-snug mb-3">
                    {title}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FaClock className="text-xs" />
                    {time}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js & Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Struggling with npm issues in a production project? We can help fix your setup and ship faster."
              }
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
            >
              {"Talk to an Engineer"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
