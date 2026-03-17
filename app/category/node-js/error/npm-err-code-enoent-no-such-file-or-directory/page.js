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

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "npm ERR! code ENOENT — No Such File or Directory [Fixed 2026]",
  description:
    'Fix "npm ERR! code ENOENT no such file or directory" fast. Covers every cause — missing package.json, wrong directory, deleted node_modules, path typos — with step-by-step commands for macOS, Windows, and Linux.',
  keywords:
    "npm err code enoent, npm enoent no such file or directory, npm install enoent error, npm err enoent fix, npm enoent package.json missing, fix npm enoent 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-err-code-enoent-no-such-file-or-directory",
  },
  openGraph: {
    title: "npm ERR! code ENOENT — No Such File or Directory [Fixed 2026]",
    description:
      'Fix "npm ERR! code ENOENT no such file or directory" fast. Every cause and fix covered for macOS, Windows, and Linux.',
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-err-code-enoent-no-such-file-or-directory",
  },
};

// ─── Reusable UI ───────────────────────────────────────────────────────────────

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

// ─── Table of Contents ─────────────────────────────────────────────────────────

const TOC = [
  { label: "What does ENOENT mean?", href: "#what-it-means" },
  { label: "Read your error message correctly", href: "#read-the-error" },
  { label: "Fix 1 — You are in the wrong directory", href: "#fix-1" },
  { label: "Fix 2 — package.json is missing", href: "#fix-2" },
  { label: "Fix 3 — Typo in a script or file path", href: "#fix-3" },
  { label: "Fix 4 — node_modules deleted or corrupted", href: "#fix-4" },
  { label: "Fix 5 — Missing file in a dependency", href: "#fix-5" },
  { label: "Fix 6 — Global package path issue", href: "#fix-6" },
  { label: "Fix 7 — Windows path separator bug", href: "#fix-7" },
  { label: "OS-specific notes", href: "#os-notes" },
  { label: "How to prevent ENOENT errors", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

function TableOfContents() {
  return (
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
  );
}

// ─── Related Articles ──────────────────────────────────────────────────────────

const RELATED = [
  {
    tag: "npm",
    title: 'Fix: npm ERR! Tracker "idealTree" Already Exists',
    href: "npm-err-tracker-idealtree-already-exists",
    time: "6 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! cb.apply is not a function",
    href: "npm-err-cb-apply-is-not-a-function",
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js Server Not Starting",
    href: "nodejs-server-not-starting",
    time: "6 min read",
  },
];

function RelatedArticles() {
  return (
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
  );
}

// ─── Schemas ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'What does "npm ERR! code ENOENT" mean?',
    a: 'ENOENT stands for "Error NO ENTry" — an operating system error code meaning a file or directory that npm is trying to read, write, or execute does not exist at the path it expected. npm wraps this OS error and surfaces it as "npm ERR! code ENOENT".',
  },
  {
    q: "Why does npm say no such file or directory when the file clearly exists?",
    a: "Most commonly you are running npm from the wrong directory — your terminal is not inside the project folder that contains package.json. Other causes include a path typo in package.json scripts, a symlink pointing to a deleted file, or a Windows path that uses backslashes where forward slashes are required.",
  },
  {
    q: "How do I fix npm ENOENT missing package.json?",
    a: 'If npm cannot find package.json, either you are in the wrong directory (run "cd your-project-folder" then retry) or the file genuinely does not exist and you need to create one with "npm init -y".',
  },
  {
    q: "npm ENOENT after cloning a repo — why?",
    a: "node_modules is listed in .gitignore and is never committed to git. When you clone a repository, node_modules does not come with it. Run npm install after cloning to recreate it.",
  },
  {
    q: "Can ENOENT be caused by a dependency — not my own code?",
    a: "Yes. If a package ships with a broken postinstall script that references a file that does not exist, npm will throw ENOENT during the install of that package. The fix is usually updating the package to a patched version or adding it to the --ignore-scripts flag.",
  },
  {
    q: "npm ENOENT on Windows but works on Mac — why?",
    a: "Windows uses backslashes (\\) as path separators while macOS and Linux use forward slashes (/). Some poorly written package scripts hardcode Unix paths. The fix is using path.join() in Node scripts rather than hardcoded strings, or running npm on WSL (Windows Subsystem for Linux).",
  },
  {
    q: "How do I find exactly which file npm cannot find?",
    a: 'Read the full error message — the line starting with "npm ERR! path" tells you the exact file path npm was trying to access. That path is your starting point for diagnosis.',
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "npm ERR! code ENOENT — No Such File or Directory [Fixed 2026]",
    description:
      "Complete fix guide for npm ERR! code ENOENT no such file or directory — covering every cause on macOS, Windows, and Linux.",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-err-code-enoent-no-such-file-or-directory",
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
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
            <span className="text-gray-500">{"npm ENOENT Fix"}</span>
          </nav> */}

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
              {"npm ERR! code ENOENT"}
              <span className="block text-indigo-600">
                {"No Such File or Directory — Fixed [2026]"}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"7 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"npm 9–10 · Node 16–22 · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix box */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Check These First — Solves 80% of Cases"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Before anything else, run these two checks:"}
            </p>
            <CodeBlock>
              {`# 1. Are you inside your project folder?
pwd          # macOS/Linux — prints current directory
cd           # Windows — prints current directory

# 2. Does package.json exist here?
ls           # macOS/Linux
dir          # Windows`}
            </CodeBlock>
            <p className="text-sm text-green-700">
              {
                "If package.json is missing or you are in the wrong folder — that is your fix. Navigate to the right directory and run "
              }
              <IC>{"npm install"}</IC>
              {" again."}
            </p>
          </div>

          <Prose>
            {
              "If that wasn't it — every other cause is covered below. The error message itself tells you exactly what went wrong. Read the next section first before jumping to fixes."
            }
          </Prose>

          <TableOfContents />

          {/* ════ WHAT IT MEANS ════ */}
          <SectionHeading id="what-it-means">
            {"What Does npm ERR! code ENOENT Mean?"}
          </SectionHeading>

          <Prose>{"Here is the full error you are likely seeing:"}</Prose>

          <ErrorBlock>
            {`npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /Users/you/projects/myapp/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/Users/you/projects/myapp/package.json'
npm ERR! enoent This is related to npm not being able to find a file.`}
          </ErrorBlock>

          <Prose>
            {
              "ENOENT is not an npm-specific error — it is a standard operating system error code that stands for "
            }
            <strong>{"Error NO ENTry"}</strong>
            {
              ". It means the OS looked for a file or directory at a specific path and found absolutely nothing there. npm wraps this OS error and adds "
            }
            <IC>{"code ENOENT"}</IC>
            {" so you know what category of problem you are dealing with."}
          </Prose>

          <Prose>
            {"The good news: ENOENT is always a "}
            <strong>{"path problem"}</strong>
            {
              ". The file either does not exist, is in a different location than npm expects, or the path itself contains a typo or formatting issue. It is never a network error, a permissions issue, or a Node version problem. Once you find the wrong path, the fix is straightforward."
            }
          </Prose>

          {/* ════ READ THE ERROR ════ */}
          <SectionHeading id="read-the-error">
            {"Read Your Error Message Correctly — This Saves You Time"}
          </SectionHeading>

          <Prose>
            {
              "Before reaching for any fix, read your full error output carefully. npm tells you exactly which file it could not find. Look for these two lines:"
            }
          </Prose>

          <ErrorBlock>
            {`npm ERR! path /the/exact/path/npm/was/looking/for
npm ERR! enoent ENOENT: no such file or directory, open '/the/exact/path'`}
          </ErrorBlock>

          <Prose>{"That path is your diagnosis. Ask yourself:"}</Prose>

          <CheckList
            items={[
              "Does that file actually exist on disk? (check in your file explorer)",
              "Is it at a different path than what npm expected?",
              "Is the filename spelled correctly — including capitalisation?",
              "On Windows: does the path use backslashes where forward slashes are needed?",
            ]}
          />

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Common Paths in the Error → What They Mean"}
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="text-left px-5 py-3 font-bold text-gray-700 w-1/2">
                    {"Path contains..."}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Likely cause"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "package.json",
                    "You are in the wrong directory, or package.json was never created",
                  ],
                  [
                    "node_modules/...",
                    "node_modules is missing — run npm install",
                  ],
                  [
                    "node_modules/.bin/...",
                    "A CLI binary from a package was not installed correctly",
                  ],
                  [".npmrc or .nvmrc", "Config file is missing or was deleted"],
                  [
                    "A script path you defined",
                    "Typo in the scripts field of your package.json",
                  ],
                ].map(([path, cause]) => (
                  <tr
                    key={path}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-indigo-700 text-xs bg-slate-50">
                      {path}
                    </td>
                    <td className="px-5 py-3 text-gray-600">{cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ════ FIX 1 ════ */}
          <FixCard
            number="1"
            title="You Are in the Wrong Directory"
            time="30 seconds"
            tag="Most common cause"
          >
            <Prose>
              {
                "This is the single most common cause of ENOENT — by a large margin. npm is looking for "
              }
              <IC>{"package.json"}</IC>
              {
                " in your current terminal directory but you are not inside your project folder. It happens after opening a new terminal window, after a CD typo, or when working across multiple projects."
              }
            </Prose>

            <SubHeading>{"Check where you are"}</SubHeading>
            <CodeBlock title="macOS / Linux">{"pwd"}</CodeBlock>
            <CodeBlock title="Windows">
              {`cd
# or
echo %cd%`}
            </CodeBlock>

            <SubHeading>{"Navigate to your project"}</SubHeading>
            <CodeBlock title="terminal">
              {`cd path/to/your/project

# Example:
cd ~/projects/my-nextjs-app

# Then retry
npm install`}
            </CodeBlock>

            <TipBox>
              {
                "Quick check: run 'ls' (macOS/Linux) or 'dir' (Windows) and see if package.json appears in the output. If it doesn't — you're in the wrong place."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 2 ════ */}
          <FixCard
            number="2"
            title="package.json Is Missing"
            time="1 minute"
            tag="Fresh projects & cloned repos"
          >
            <Prose>
              {"There are two common scenarios where "}
              <IC>{"package.json"}</IC>
              {" genuinely does not exist:"}
            </Prose>

            <SubHeading>{"Scenario A — You just cloned a repo"}</SubHeading>
            <Prose>
              {"Git never commits "}
              <IC>{"node_modules"}</IC>
              {" (it's in "}
              <IC>{".gitignore"}</IC>
              {"). But "}
              <IC>{"package.json"}</IC>
              {
                " is committed. If cloning gave you an ENOENT on package.json, you likely cloned into the wrong folder or the repo itself is misconfigured. Check the repo root:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {`git clone https://github.com/user/repo.git
cd repo          # MUST cd into the cloned folder
npm install      # NOW run install`}
            </CodeBlock>

            <SubHeading>
              {"Scenario B — Brand new project with no package.json"}
            </SubHeading>
            <Prose>
              {"Create one with npm init. The "}
              <IC>{"-y"}</IC>
              {" flag accepts all defaults and skips the questionnaire:"}
            </Prose>
            <CodeBlock title="terminal">
              {`npm init -y
npm install`}
            </CodeBlock>

            <SubHeading>
              {"Scenario C — node_modules missing after clone"}
            </SubHeading>
            <Prose>
              {
                "This is the most common post-clone situation. package.json exists but node_modules does not — because it was never committed. Run:"
              }
            </Prose>
            <CodeBlock title="terminal">{"npm install"}</CodeBlock>

            <TipBox>
              {
                "Always cd into the cloned repo directory before running any npm command. The folder npm creates on git clone is not automatically your working directory."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 3 ════ */}
          <FixCard
            number="3"
            title="Typo in a Script or File Path"
            time="2 minutes"
            tag="npm run errors"
          >
            <Prose>
              {"If the ENOENT fires when running "}
              <IC>{"npm run something"}</IC>
              {" rather than "}
              <IC>{"npm install"}</IC>
              {
                ", the problem is almost certainly a typo or wrong path in your "
              }
              <IC>{"scripts"}</IC>
              {" section of "}
              <IC>{"package.json"}</IC>
              {"."}
            </Prose>

            <SubHeading>{"Check your scripts section"}</SubHeading>
            <CodeBlock title="package.json">
              {`{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "node server.js",     // ← does server.js exist?
    "lint": "eslint ./src"         // ← does ./src exist?
  }
}`}
            </CodeBlock>

            <SubHeading>{"Common typo patterns"}</SubHeading>
            <XList
              items={[
                "src/index.js but the file is actually src/Index.js (case mismatch — fatal on Linux)",
                "./server.js but the file was renamed to app.js",
                "dist/bundle.js referenced before running the build step that creates it",
                "A path with a space that is not wrapped in quotes",
              ]}
            />

            <SubHeading>
              {"Verify a file path before adding it to scripts"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`# macOS / Linux — check if file exists
ls src/index.js

# Windows
dir src\\index.js`}
            </CodeBlock>

            <WarnBox>
              {
                "Linux file systems are case-sensitive. server.js and Server.js are two completely different files on Linux but identical on macOS. A script that works on your Mac can throw ENOENT when deployed to a Linux server for this exact reason."
              }
            </WarnBox>
          </FixCard>

          {/* ════ FIX 4 ════ */}
          <FixCard
            number="4"
            title="node_modules Deleted or Corrupted"
            time="2–5 minutes"
            tag="npm run & require errors"
          >
            <Prose>
              {"If ENOENT points to a path inside "}
              <IC>{"node_modules"}</IC>
              {" — for example "}
              <IC>{"node_modules/react/index.js"}</IC>
              {
                " — your node_modules folder is missing, incomplete, or corrupted. This happens after manually deleting packages, a failed install, or disk errors."
              }
            </Prose>

            <Prose>{"The fix is always the same — wipe and reinstall:"}</Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`rm -rf node_modules
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — Command Prompt"}</SubHeading>
            <CodeBlock title="cmd">
              {`rmdir /s /q node_modules
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — PowerShell"}</SubHeading>
            <CodeBlock title="powershell">
              {`Remove-Item -Recurse -Force node_modules
npm install`}
            </CodeBlock>

            <TipBox>
              {
                "If npm install itself throws ENOENT while recreating node_modules, also delete package-lock.json before reinstalling: rm package-lock.json (macOS/Linux) or del package-lock.json (Windows)."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 5 ════ */}
          <FixCard
            number="5"
            title="Missing File Inside a Dependency Package"
            time="3 minutes"
            tag="Broken or outdated packages"
          >
            <Prose>
              {
                "Sometimes ENOENT is not your fault at all — a package you installed ships with a broken postinstall script, references a file it forgot to include, or has a bug in a specific version. The error path will point deep inside "
              }
              <IC>{"node_modules/package-name/..."}</IC>
              {"."}
            </Prose>

            <SubHeading>{"Identify the broken package"}</SubHeading>
            <Prose>
              {"Look at the "}
              <IC>{"path"}</IC>
              {" line in your error. The first folder name after "}
              <IC>{"node_modules/"}</IC>
              {" is your culprit package."}
            </Prose>

            <SubHeading>{"Try updating it to the latest patch"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm update package-name

# Or install the latest version explicitly
npm install package-name@latest`}
            </CodeBlock>

            <SubHeading>
              {"If the package is broken and has no fix yet"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`# Skip postinstall scripts (install without running them)
npm install --ignore-scripts

# Or pin to the last known working version
npm install package-name@1.2.3`}
            </CodeBlock>

            <SubHeading>{"Check if it is a known issue"}</SubHeading>
            <Prose>
              {
                "Search the package's GitHub issues for ENOENT + the filename from your error. If others are hitting it, there is usually a workaround or patched version in the comments."
              }
            </Prose>
          </FixCard>

          {/* ════ FIX 6 ════ */}
          <FixCard
            number="6"
            title="Global Package or CLI Binary Not Found"
            time="2 minutes"
            tag="Globally installed packages"
          >
            <Prose>
              {"If you are running a globally installed CLI tool — like "}
              <IC>{"next"}</IC>
              {", "}
              <IC>{"tsc"}</IC>
              {", or "}
              <IC>{"eslint"}</IC>
              {
                " — and getting ENOENT, the binary either was not installed globally or was installed to a path that is not in your system "
              }
              <IC>{"PATH"}</IC>
              {"."}
            </Prose>

            <SubHeading>
              {"Check if the package is installed globally"}
            </SubHeading>
            <CodeBlock title="terminal">{"npm list -g --depth=0"}</CodeBlock>

            <SubHeading>{"Install it globally if missing"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install -g package-name"}
            </CodeBlock>

            <SubHeading>{"Find where npm installs global binaries"}</SubHeading>
            <CodeBlock title="terminal">{"npm config get prefix"}</CodeBlock>

            <Prose>
              {"The output of that command + "}
              <IC>{"/bin"}</IC>
              {" (macOS/Linux) or "}
              <IC>{"\\bin"}</IC>
              {
                " (Windows) should be in your system PATH. If it is not, add it:"
              }
            </Prose>

            <CodeBlock title="macOS / Linux — add to ~/.zshrc or ~/.bashrc">
              {`export PATH="$(npm config get prefix)/bin:$PATH"`}
            </CodeBlock>

            <TipBox>
              {
                "Better approach: instead of installing packages globally, use npx to run them without installing. Example: npx eslint . instead of eslint . — no ENOENT from missing globals ever again."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 7 ════ */}
          <FixCard
            number="7"
            title="Windows Path Separator Bug"
            time="2 minutes"
            tag="Windows only"
          >
            <Prose>
              {"Windows uses backslashes ("}
              <IC>{"\\"}</IC>
              {") as path separators. macOS and Linux use forward slashes ("}
              <IC>{"/"}</IC>
              {
                "). Most npm packages and scripts are written for Unix and use forward slashes. When a script or config hardcodes a Unix path, Windows cannot find the file — and throws ENOENT."
              }
            </Prose>

            <SubHeading>{"Example of a broken Windows script"}</SubHeading>
            <CodeBlock title="package.json (broken on Windows)">
              {`{
  "scripts": {
    "build": "node scripts/build.js",
    "copy": "cp src/assets dist/assets"   // cp doesn't exist on Windows
  }
}`}
            </CodeBlock>

            <SubHeading>{"Fixes for Windows path issues"}</SubHeading>
            <CheckList
              items={[
                "Use cross-platform packages like cross-env and copyfiles instead of Unix shell commands",
                "Use path.join() in Node.js scripts instead of hardcoded path strings",
                "Run npm in WSL (Windows Subsystem for Linux) — full Unix compatibility",
                "Replace cp/mv/rm commands in scripts with Node.js equivalents using the shelljs package",
              ]}
            />

            <CodeBlock title="terminal">
              {`# Install cross-platform shell utilities
npm install --save-dev cross-env shelljs`}
            </CodeBlock>
          </FixCard>

          {/* ════ OS NOTES ════ */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "macOS is case-insensitive by default but the file system on Linux servers is case-sensitive. A script referencing "
            }
            <IC>{"src/App.js"}</IC>
            {
              " will work locally on Mac but throw ENOENT when deployed to a Linux server if the real file is "
            }
            <IC>{"src/app.js"}</IC>
            {
              ". Always match casing exactly in import paths and package.json scripts — even on Mac."
            }
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "The most Windows-specific ENOENT trigger is paths exceeding 260 characters — the old Windows MAX_PATH limit. Deep "
            }
            <IC>{"node_modules"}</IC>
            {
              " nesting from legacy packages can hit this. Enable long path support in Windows 10/11:"
            }
          </Prose>
          <CodeBlock title="PowerShell (Administrator)">
            {`# Enable long paths (Windows 10 1607+ / Windows 11)
New-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" \`
  -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force`}
          </CodeBlock>
          <Prose>
            {"Also check you are not running npm from inside "}
            <IC>{"C:\\Program Files\\"}</IC>
            {
              " — npm needs write access to its working directory and Program Files is protected."
            }
          </Prose>

          <SubHeading>{"Linux"}</SubHeading>
          <Prose>
            {
              "Linux is the strictest environment — fully case-sensitive, no tolerance for path separator mixing. Two unique Linux causes of ENOENT: broken symlinks (a symlink pointing to a file that was deleted) and permission-restricted directories where your user cannot read the file even though it exists."
            }
          </Prose>
          <CodeBlock title="terminal">
            {`# Check for broken symlinks in node_modules
find node_modules -type l ! -exec test -e {} \\; -print

# Check if a file exists but you lack read permission
ls -la path/to/file

# Fix permissions if needed
chmod 644 path/to/file`}
          </CodeBlock>

          {/* ════ PREVENTION ════ */}
          <SectionHeading id="prevention">
            {"How to Prevent npm ENOENT Errors"}
          </SectionHeading>

          <CheckList
            items={[
              "Always cd into your project directory before running any npm command — make it a reflex",
              "Commit package.json and package-lock.json to git — never .gitignore them",
              "Never commit node_modules — always add it to .gitignore",
              "Run npm install immediately after cloning any repository",
              "Match file name capitalisation exactly in all import paths and scripts — even on case-insensitive macOS",
              "Use npx instead of global installs to avoid missing binary ENOENT errors",
              "Use cross-env and cross-platform utilities in npm scripts instead of Unix-only shell commands",
              "Enable Windows long path support if you work on Windows with deeply nested projects",
              "Test npm scripts on Linux (or WSL) even if you develop on Mac — it catches case-sensitivity bugs before deployment",
            ]}
          />

          {/* ════ SUMMARY ════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Diagnosis Checklist"}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {"Work through this in order. Stop when you find your cause."}
            </p>
            <ol className="space-y-3">
              {[
                {
                  check: "Are you inside your project folder?",
                  cmd: "pwd / cd",
                },
                {
                  check: "Does package.json exist in this folder?",
                  cmd: "ls / dir",
                },
                { check: "Does node_modules exist?", cmd: "ls node_modules" },
                {
                  check: "Is the filename in the error spelled correctly?",
                  cmd: "Check capitalisation",
                },
                {
                  check: "Is the script path in package.json correct?",
                  cmd: "Open package.json → scripts",
                },
                {
                  check: "On Windows: is the path using backslashes?",
                  cmd: "Use cross-env / WSL",
                },
                {
                  check: "Is it a broken package postinstall?",
                  cmd: "npm install --ignore-scripts",
                },
              ].map(({ check, cmd }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-gray-700">{check}</span>
                  <IC>{cmd}</IC>
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
          <RelatedArticles />

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
                "Softplix is a full-stack development agency. Hitting complex npm errors in a production project? We can audit your setup and ship a clean, scalable solution."
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
