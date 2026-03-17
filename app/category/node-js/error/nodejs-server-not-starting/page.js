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
  title: "Node.js Server Not Starting — Complete Fix Guide 2026",
  description:
    "Fix Node.js server not starting. Covers syntax errors, missing packages, port conflicts, wrong entry file, missing .env, and every other reason your Node.js app refuses to run.",
  keywords:
    "nodejs server not starting, node server wont start, node app not starting, nodejs not starting fix 2026, node server fails to start",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-server-not-starting",
  },
  openGraph: {
    title: "Node.js Server Not Starting — Complete Fix Guide 2026",
    description:
      "Fix Node.js server not starting — every cause covered with step-by-step commands.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-server-not-starting",
  },
};

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

const TOC = [
  { label: "Diagnose in 60 seconds — read the error", href: "#diagnose" },
  { label: "Fix 1 — Syntax error in your code", href: "#fix-1" },
  { label: "Fix 2 — Missing packages (Cannot find module)", href: "#fix-2" },
  { label: "Fix 3 — Port already in use", href: "#fix-3" },
  { label: "Fix 4 — Wrong entry file", href: "#fix-4" },
  { label: "Fix 5 — Missing environment variables", href: "#fix-5" },
  { label: "Fix 6 — node command not found", href: "#fix-6" },
  { label: "Fix 7 — App starts then immediately stops", href: "#fix-7" },
  { label: "Fix 8 — Run with full debug output", href: "#fix-8" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my Node.js server not starting?",
    a: "The most common causes are: syntax error in your code (run node --check server.js), missing npm packages (run npm install), port already in use (kill the port), or wrong entry file path. Read the full error message — it tells you exactly what is wrong.",
  },
  {
    q: "Node.js app starts then immediately stops — why?",
    a: "An unhandled error is crashing the process right after start. Run node server.js directly (not nodemon) to see the full error message. Add process.on('uncaughtException', console.error) temporarily to catch hidden errors.",
  },
  {
    q: "How do I debug a Node.js server that won't start?",
    a: "Run: node --stack-trace-limit=100 server.js for maximum error detail. Or: node --inspect server.js then open Chrome and go to chrome://inspect for the full debugger.",
  },
  {
    q: "Node.js server not starting after npm install?",
    a: "Check for a .env file if your app requires environment variables (add require('dotenv').config() and create .env). Run node --check server.js to find any syntax errors. Verify the correct entry file name.",
  },
  {
    q: "How do I check if my Node.js syntax is correct?",
    a: "Run: node --check server.js. This validates syntax without executing the file. It will print the exact line number of any syntax error.",
  },
  {
    q: "Node.js starts locally but not on the server — why?",
    a: "Different environment variables, different Node.js version, missing node_modules (run npm install on the server), wrong start command, or insufficient memory. Check server logs and ensure your deployment runs npm install before starting.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js Server Not Starting — Complete Fix Guide 2026",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-server-not-starting",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}

function FaqSchema() {
  const s = {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}

const RELATED = [
  {
    tag: "Node.js",
    title: "Fix: Node.js server crashing automatically",
    href: "nodejs-server-crashing-automatically",
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js app not starting on server",
    href: "nodejs-app-not-starting-on-server",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: UnhandledPromiseRejectionWarning",
    href: "unhandled-promise-rejection-warning",
    time: "5 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
            <span className="text-gray-500">
              {"Node.js Server Not Starting"}
            </span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Express", "Error Fix"].map((t) => (
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
              {"Node.js Server Not Starting"}
              <span className="block text-indigo-600">
                {"— Complete Fix Guide 2026"}
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
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Run These Checks First"}
            </p>
            <CodeBlock>
              {
                "# 1. Check for syntax errors (no execution)\nnode --check server.js\n\n# 2. Install missing packages\nnpm install\n\n# 3. Run with full error output\nnode --stack-trace-limit=100 server.js"
              }
            </CodeBlock>
            <p className="text-sm text-green-700">
              {
                "The error message will tell you exactly what is wrong. Still stuck? Every fix is below."
              }
            </p>
          </div>

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

          <SectionHeading id="diagnose">
            {"Diagnose in 60 Seconds — Read the Error"}
          </SectionHeading>

          <Prose>
            {
              "Node.js server not starting is always caused by one of eight specific problems. The error message in your terminal identifies which one. Match your error below and jump to the right fix:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Error Message → Cause → Fix"}
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Error contains..."}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "SyntaxError: Unexpected token",
                    "Syntax error in your JS code",
                    "#fix-1",
                  ],
                  [
                    "Cannot find module",
                    "Missing npm package or wrong path",
                    "#fix-2",
                  ],
                  [
                    "EADDRINUSE: address already in use",
                    "Port is occupied by another process",
                    "#fix-3",
                  ],
                  [
                    "ENOENT: no such file",
                    "Wrong entry file name or path",
                    "#fix-4",
                  ],
                  [
                    "process.env.X is undefined",
                    "Missing .env file or dotenv not called",
                    "#fix-5",
                  ],
                  [
                    "node: command not found",
                    "Node.js not installed or not in PATH",
                    "#fix-6",
                  ],
                  [
                    "Starts then exits immediately",
                    "Unhandled error crashing the process",
                    "#fix-7",
                  ],
                  [
                    "No output at all",
                    "Silent failure — need verbose mode",
                    "#fix-8",
                  ],
                ].map(([err, cause, href]) => (
                  <tr
                    key={err}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-red-600">
                      {err}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{cause}</td>
                    <td className="px-4 py-3">
                      <a
                        href={href}
                        className="text-xs font-bold text-indigo-600 hover:underline"
                      >
                        {"Jump →"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Syntax Error in Your Code"
            time="2 min"
            tag="SyntaxError: Unexpected token"
          >
            <Prose>
              {
                "A syntax error prevents Node.js from even parsing your file. The error shows the exact file and line number."
              }
            </Prose>
            <ErrorBlock>{`SyntaxError: Unexpected token '}'
    at wrapSafe (node:internal/modules/cjs/loader:1383:18)
    at Module._compile (node:internal/modules/cjs/loader:1412:20)
    at /Users/you/projects/app/server.js:42`}</ErrorBlock>

            <SubHeading>{"Check syntax without executing the file"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "node --check server.js\n# Output example:\n# /path/to/server.js:42\n#   const app = express()\n#               ^\n# SyntaxError: Unexpected token"
              }
            </CodeBlock>

            <SubHeading>{"Common syntax mistakes"}</SubHeading>
            <CodeBlock title="common errors">{`// Missing closing brace
app.get('/api', (req, res) => {
  res.json({ data: 'hello' })
// ← missing }

// Missing comma in object
const config = {
  host: 'localhost'   // ← missing comma
  port: 3000
}

// Unclosed string
const message = 'Hello world
// ← missing closing quote

// Wrong async/await
app.get('/api', async (req, res) => {
  const data = fetchData()  // ← missing await
})`}</CodeBlock>

            <TipBox>
              {
                "Use VS Code or any modern editor — it highlights syntax errors with red underlines in real time before you even run the file."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Missing npm Packages"
            time="2 min"
            tag="Cannot find module 'express'"
          >
            <CodeBlock title="terminal">
              {
                "# Install all packages from package.json\nnpm install\n\n# If you just cloned a repo — always run this first\nnpm install\n\n# Reinstall if node_modules is corrupted\nrm -rf node_modules package-lock.json\nnpm install"
              }
            </CodeBlock>
            <TipBox>
              {
                "After any git clone, always run npm install before trying to start the server. node_modules is never committed to git."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Port Already in Use"
            time="1 min"
            tag="EADDRINUSE: address already in use :::3000"
          >
            <CodeBlock title="terminal">
              {
                "# macOS / Linux\nkill -9 $(lsof -ti:3000)\n\n# Windows\nnetstat -ano | findstr :3000\ntaskkill /PID <PID> /F\n\n# Then restart\nnpm start"
              }
            </CodeBlock>
            <Prose>
              {"See the full article on "}
              <Link
                href="/blog/nodejs-port-already-in-use"
                className="text-indigo-600 hover:underline font-semibold"
              >
                {"Node.js port already in use"}
              </Link>
              {" for all scenarios."}
            </Prose>
          </FixCard>

          <FixCard
            number="4"
            title="Wrong Entry File Name or Path"
            time="1 min"
            tag="ENOENT: no such file or directory"
          >
            <CodeBlock title="terminal">
              {
                "# Check what files exist\nls *.js\n# server.js? index.js? app.js?\n\n# Check main field in package.json\ncat package.json | grep main\n\n# Run the correct file\nnode server.js\nnode index.js\nnode app.js\nnode src/index.js"
              }
            </CodeBlock>
            <TipBox>
              {
                "Check your package.json scripts section — the start script shows the exact file name: 'start': 'node server.js'. Make sure that file exists."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Missing Environment Variables"
            time="2 min"
            tag="undefined env vars / .env not loaded"
          >
            <CodeBlock title="server.js — add to line 1">{`require('dotenv').config()  // must be FIRST line

const express = require('express')
// Now process.env.PORT, process.env.DATABASE_URL etc. are available`}</CodeBlock>

            <SubHeading>{"Check .env file exists in project root"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "ls -la | grep .env\n# Should show: .env\n\n# If missing — create it\ntouch .env\n# Then add your variables:\n# PORT=3000\n# DATABASE_URL=mongodb://localhost:27017/mydb"
              }
            </CodeBlock>

            <SubHeading>{"Debug which variables are loaded"}</SubHeading>
            <CodeBlock title="server.js — temporary debug">{`const result = require('dotenv').config()
console.log('dotenv loaded:', result.parsed)
console.log('PORT:', process.env.PORT)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="node Command Not Found"
            time="5 min"
            tag="node: command not found"
          >
            <CodeBlock title="terminal">
              {
                "# Install Node.js via nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash\nsource ~/.zshrc\nnvm install --lts\nnvm use --lts\n\n# Verify\nnode --version\nnpm --version"
              }
            </CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="App Starts Then Immediately Stops"
            time="3 min"
            tag="Process exits right after starting"
          >
            <Prose>
              {
                "The server starts but exits in under a second. This is an unhandled error crashing the process. The crash is silent unless you add error handlers."
              }
            </Prose>

            <SubHeading>
              {"Add crash catchers to see the real error"}
            </SubHeading>
            <CodeBlock title="server.js — add at very top">{`// Add these FIRST to catch all errors
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err)
  console.error(err.stack)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION at:', promise)
  console.error('Reason:', reason)
})`}</CodeBlock>

            <SubHeading>{"Common causes of immediate crash"}</SubHeading>
            <CheckList
              items={[
                "Database connection failing at startup — app crashes before server starts listening",
                "Required environment variable is undefined and used immediately",
                "Importing a file that throws an error when loaded",
                "Calling an async function without awaiting at the top level",
              ]}
            />

            <SubHeading>{"Wrap database connections in try/catch"}</SubHeading>
            <CodeBlock title="server.js — safe startup pattern">{`async function startServer() {
  try {
    // Connect to database first
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected')

    // Only start server after DB is ready
    app.listen(3000, () => {
      console.log('Server running on port 3000')
    })
  } catch (err) {
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

startServer()`}</CodeBlock>
          </FixCard>

          <FixCard
            number="8"
            title="Run With Full Debug Output"
            time="1 min"
            tag="No output — silent failure"
          >
            <Prose>
              {
                "If you see absolutely nothing — no error, no output — Node.js is failing silently. These commands extract the maximum possible detail:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Maximum stack trace depth\nnode --stack-trace-limit=50 server.js\n\n# Enable all debug logs\nNODE_DEBUG=* node server.js\n\n# Specific debug modules\nNODE_DEBUG=net,http node server.js\n\n# Use the Chrome debugger\nnode --inspect server.js\n# Then open: chrome://inspect in Chrome browser\n\n# Check Node.js version compatibility\nnode --version"
              }
            </CodeBlock>
          </FixCard>

          <SectionHeading id="prevention">
            {"How to Prevent Node.js Not Starting"}
          </SectionHeading>
          <CheckList
            items={[
              "Use VS Code or a linting editor — syntax errors are shown in real-time before you run",
              "Run node --check server.js before deploying or restarting",
              "Always run npm install after cloning a repo",
              "Add process.on('uncaughtException') and process.on('unhandledRejection') handlers",
              "Wrap database connections in try/catch with proper error logging",
              "Use nodemon in development for automatic restart with clear error output",
              "In production, use PM2 which captures crash logs and auto-restarts",
              "Keep a .env.example documenting required environment variables",
            ]}
          />

          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Complete Diagnosis Checklist"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  check: "Run node --check server.js",
                  fix: "Finds syntax errors without executing",
                },
                {
                  check: "Run npm install",
                  fix: "Fixes missing module errors",
                },
                {
                  check: "Kill the port: kill -9 $(lsof -ti:3000)",
                  fix: "Fixes EADDRINUSE",
                },
                {
                  check: "Check file name: ls *.js",
                  fix: "Ensures entry file exists",
                },
                {
                  check: "Check .env exists: ls -la | grep .env",
                  fix: "Fixes missing env variables",
                },
                {
                  check: "Add uncaughtException handler",
                  fix: "Reveals silent crash cause",
                },
                {
                  check: "Run node --stack-trace-limit=100 server.js",
                  fix: "Maximum error detail",
                },
              ].map(({ check, fix }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">{check}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{fix}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

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

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Dealing with complex Node.js startup issues in production? We can audit your app and fix it."
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
