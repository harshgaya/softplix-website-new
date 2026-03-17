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
  title:
    "Error: spawn npm ENOENT, Module Not Found & fetch Not Defined — Fixed [2026]",
  description:
    "Fix Error spawn npm ENOENT, Node.js module not found error, and Node.js fetch not defined. Covers PATH issues in child_process, wrong require paths, and the native fetch API in Node.js 18+.",
  keywords:
    "error spawn npm enoent, nodejs module not found error, nodejs fetch not defined fix 2026, spawn enoent fix, fetch is not defined nodejs",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-spawn-npm-enoent",
  },
  openGraph: {
    title:
      "Error: spawn npm ENOENT, Module Not Found & fetch Not Defined — Fixed [2026]",
    description:
      "Fix spawn npm ENOENT, module not found, and fetch not defined in Node.js.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-spawn-npm-enoent",
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
function SH({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}
function H3({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}
function P({ children }) {
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
  { label: "Part 1 — Error: spawn npm ENOENT", href: "#spawn" },
  { label: "Fix 1 — Use shell: true on Windows", href: "#fix-1" },
  { label: "Fix 2 — Provide full PATH to spawn", href: "#fix-2" },
  { label: "Fix 3 — Use execFile or exec instead", href: "#fix-3" },
  { label: "Part 2 — Node.js module not found error", href: "#module" },
  { label: "Fix 4 — Fix wrong require paths", href: "#fix-4" },
  { label: "Fix 5 — Module resolution order", href: "#fix-5" },
  { label: "Part 3 — Node.js fetch not defined", href: "#fetch" },
  { label: "Fix 6 — Use built-in fetch (Node 18+)", href: "#fix-6" },
  { label: "Fix 7 — Polyfill fetch on older Node", href: "#fix-7" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes Error spawn npm ENOENT?",
    a: "ENOENT in spawn means the command cannot be found. On Windows, npm is npm.cmd not npm — use spawn('npm.cmd') or add { shell: true }. On any OS, the PATH in the spawn environment may not include Node's bin directory.",
  },
  {
    q: "How do I fix spawn ENOENT on Windows?",
    a: "Use spawn('npm.cmd', args) instead of spawn('npm', args) on Windows. Or use { shell: true } option: spawn('npm', ['install'], { shell: true }). This runs through cmd.exe which handles .cmd extensions.",
  },
  {
    q: "What is the difference between spawn, exec, and execFile?",
    a: "spawn streams output and is best for long-running processes. exec buffers output and is best for short commands. execFile is like exec but does not use a shell — safer for user input. For running npm commands, exec is usually simplest.",
  },
  {
    q: "Node.js module not found but the file exists — why?",
    a: "Check the require path — case sensitivity matters on Linux (not on macOS/Windows). Also check the file extension: require('./utils') only works if utils.js, utils/index.js or utils.json exists. Log the exact path: console.log(require.resolve('./utils')).",
  },
  {
    q: "How do I use fetch in Node.js?",
    a: "Node.js 18+ includes fetch natively — just use it: const res = await fetch('https://api.example.com/data'). On Node.js 17 or below, install node-fetch: npm install node-fetch, then import fetch from 'node-fetch'.",
  },
  {
    q: "fetch is not defined in Node.js 18 — why?",
    a: "On Node.js 18+, fetch is available globally but was marked experimental until Node 21. If you are on 18–20, it should work without importing. If not, try: import { fetch } from 'undici' — undici is the underlying HTTP client Node.js uses.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Error: spawn npm ENOENT, Module Not Found & fetch Not Defined — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-spawn-npm-enoent",
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
    title: "Fix: npm command not found",
    href: "npm-command-not-found",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Error listen EACCES permission denied",
    href: "error-listen-eacces-permission-denied",
    time: "4 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
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
              {"spawn ENOENT / module not found / fetch"}
            </span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "JavaScript", "Error Fix"].map((t) => (
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
              {"spawn npm ENOENT, Module Not Found"}
              <span className="block text-indigo-600">
                {"& fetch Not Defined — Fixed [2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {"Three common Node.js errors — all fixed in one guide"}
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"6 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

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

          {/* ═══ PART 1: spawn ENOENT ═══ */}
          <div className="mt-10 mb-6 rounded-2xl bg-slate-900 px-6 py-4 flex items-center gap-3">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
              {"Part 1"}
            </span>
            <span className="text-white font-bold">
              {"Error: spawn npm ENOENT"}
            </span>
          </div>

          <SH id="spawn">{"Error: spawn npm ENOENT"}</SH>
          <ErrorBlock>{`Error: spawn npm ENOENT
    at Process.ChildProcess._handle.onexit (node:internal/child_process:285:19)
    at onErrorNT (node:internal/child_process:483:16)
    at processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'ENOENT'
}`}</ErrorBlock>
          <P>
            {"ENOENT in "}
            <IC>{"child_process.spawn()"}</IC>
            {
              " means Node.js could not find the command you are trying to run. On Windows, npm is a batch file (npm.cmd) — spawn cannot find it without the extension or a shell. On all OS, the PATH inside spawn may differ from your terminal PATH."
            }
          </P>

          <FixCard
            number="1"
            title="Use shell: true (Simplest Fix)"
            time="1 min"
            tag="Works on all platforms"
          >
            <CodeBlock title="server.js">{`const { spawn } = require('child_process')

// ❌ WRONG — fails on Windows (npm.cmd not npm)
const proc = spawn('npm', ['install'])

// ✅ CORRECT — shell: true routes through cmd.exe/bash
const proc = spawn('npm', ['install'], { shell: true })

proc.stdout.on('data', (data) => process.stdout.write(data))
proc.stderr.on('data', (data) => process.stderr.write(data))
proc.on('close', (code) => console.log('Exit code:', code))`}</CodeBlock>
            <TipBox>
              {
                "shell: true is the quickest fix. The slight security trade-off (shell injection risk) only matters if the args come from user input — for hardcoded commands it is perfectly safe."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Use npm.cmd on Windows Explicitly"
            time="1 min"
            tag="Cross-platform spawn without shell"
          >
            <CodeBlock title="server.js">{`const { spawn } = require('child_process')

// Platform-aware command
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const proc = spawn(npmCmd, ['install', '--prefix', './subproject'])

proc.stdout.on('data', d => process.stdout.write(d))
proc.stderr.on('data', d => process.stderr.write(d))
proc.on('close', code => {
  if (code !== 0) console.error('npm install failed with code', code)
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use exec or execSync for npm Commands"
            time="2 min"
            tag="Simpler API for short npm commands"
          >
            <P>
              {"For running npm commands from Node.js scripts, "}
              <IC>{"exec"}</IC>
              {" is simpler than "}
              <IC>{"spawn"}</IC>
              {" and uses a shell automatically."}
            </P>
            <CodeBlock title="scripts/install.js">{`const { exec, execSync } = require('child_process')

// Async exec — buffers output
exec('npm install', { cwd: './subproject' }, (err, stdout, stderr) => {
  if (err) console.error('Failed:', stderr)
  else console.log('Done:', stdout)
})

// Sync exec — blocks until complete
try {
  const output = execSync('npm install', {
    cwd: './subproject',
    stdio: 'inherit',   // pipes output to parent process
  })
} catch (err) {
  console.error('npm install failed')
  process.exit(1)
}`}</CodeBlock>
          </FixCard>

          {/* ═══ PART 2: MODULE NOT FOUND ═══ */}
          <div className="mt-12 mb-6 rounded-2xl bg-slate-900 px-6 py-4 flex items-center gap-3">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
              {"Part 2"}
            </span>
            <span className="text-white font-bold">
              {"Node.js Module Not Found Error"}
            </span>
          </div>

          <SH id="module">{"Node.js Module Not Found Error"}</SH>
          <ErrorBlock>{`Error: Cannot find module './utils/helpers'
Require stack:
- /app/src/routes/users.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)`}</ErrorBlock>

          <FixCard
            number="4"
            title="Fix Wrong require Paths"
            time="2 min"
            tag="File exists but path is wrong"
          >
            <P>
              {"Node.js module not found for local files means the path in "}
              <IC>{"require()"}</IC>
              {
                " does not resolve to an existing file. Always verify the exact path."
              }
            </P>
            <CodeBlock title="routes/users.js">{`// Debug: resolve what Node.js is actually looking for
console.log(require.resolve('./utils/helpers'))
// Prints the absolute path Node.js tried to find

// Common path mistakes:
require('./utils/helpers')     // looks for helpers.js, helpers/index.js
require('../utils/helpers')    // one level up — common mistake
require('utils/helpers')       // looks in node_modules — wrong for local files

// ✅ CORRECT — use path.join for reliable cross-platform paths
const path = require('path')
const helpers = require(path.join(__dirname, '..', 'utils', 'helpers'))

// ✅ Check file structure
// src/
//   routes/users.js        ← this file
//   utils/helpers.js       ← require('../utils/helpers') ✅`}</CodeBlock>

            <H3>{"Case sensitivity — Linux is strict"}</H3>
            <CodeBlock title="terminal">{`# ❌ WRONG on Linux (but works on macOS/Windows!)
require('./Utils/Helpers')   # file is utils/helpers.js

# Linux file system is case-sensitive
# macOS and Windows are not — this is a common local-works-not-on-server bug

# Fix: use the exact same case as the filename
require('./utils/helpers')`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Module Resolution Order"
            time="2 min"
            tag="Understand how Node.js finds modules"
          >
            <P>
              {"When you "}
              <IC>{"require('something')"}</IC>
              {", Node.js tries these locations in order:"}
            </P>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Require call"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Where Node looks"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "require('./module')",
                      "Relative — same directory as current file",
                    ],
                    ["require('../module')", "Relative — parent directory"],
                    ["require('express')", "node_modules — installed package"],
                    ["require('fs')", "Built-in Node.js core module"],
                  ].map(([r, w]) => (
                    <tr
                      key={r}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-indigo-700">
                        {r}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock title="terminal — debug module resolution">{`# See exactly where Node is looking
NODE_DEBUG=module node -e "require('./utils/helpers')"
# Prints every path attempted before failing`}</CodeBlock>
          </FixCard>

          {/* ═══ PART 3: FETCH NOT DEFINED ═══ */}
          <div className="mt-12 mb-6 rounded-2xl bg-slate-900 px-6 py-4 flex items-center gap-3">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
              {"Part 3"}
            </span>
            <span className="text-white font-bold">
              {"Node.js fetch Not Defined"}
            </span>
          </div>

          <SH id="fetch">{"Node.js fetch Not Defined"}</SH>
          <ErrorBlock>{`ReferenceError: fetch is not defined
    at Object.<anonymous> (/app/server.js:5:20)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)`}</ErrorBlock>
          <P>
            {"The browser's built-in "}
            <IC>{"fetch"}</IC>
            {
              " API was not available in Node.js until version 18. If you are on Node.js 17 or below, "
            }
            <IC>{"fetch"}</IC>
            {" does not exist globally."}
          </P>

          <FixCard
            number="6"
            title="Use Built-in fetch — Node.js 18+"
            time="1 min"
            tag="No package needed"
          >
            <CodeBlock title="terminal">{`# Check your Node version
node --version
# v18.x.x or higher → fetch works natively
# v17 or below → use Fix 7`}</CodeBlock>
            <CodeBlock title="server.js — Node 18+ native fetch">{`// No import needed — fetch is global in Node 18+
const response = await fetch('https://api.example.com/data')
const data = await response.json()
console.log(data)

// Full usage with options
const res = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' }),
})

if (!res.ok) throw new Error('Request failed: ' + res.status)
const user = await res.json()`}</CodeBlock>
            <TipBox>
              {
                "fetch was experimental in Node 18–20 (still works) and became stable in Node 21. If you see a warning about it being experimental, upgrade to Node 21+ to remove it."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="7"
            title="Polyfill fetch for Node.js 17 and Below"
            time="3 min"
            tag="Older Node versions"
          >
            <H3>{"Option A — node-fetch (most popular)"}</H3>
            <CodeBlock title="terminal">{"npm install node-fetch"}</CodeBlock>
            <CodeBlock title="server.js — CommonJS">{`// CommonJS (node-fetch v2)
const fetch = require('node-fetch')

// ES Module (node-fetch v3)
import fetch from 'node-fetch'

const res = await fetch('https://api.example.com/data')
const data = await res.json()`}</CodeBlock>

            <H3>{"Option B — axios (alternative to fetch)"}</H3>
            <CodeBlock title="terminal">{"npm install axios"}</CodeBlock>
            <CodeBlock title="server.js">{`const axios = require('axios')

const { data } = await axios.get('https://api.example.com/data')
const res      = await axios.post('/api/users', { name: 'John' })`}</CodeBlock>

            <H3>{"Option C — upgrade Node.js (recommended)"}</H3>
            <CodeBlock title="terminal">
              {
                "# Upgrade to Node 20 LTS or 22 LTS via nvm\nnvm install 20\nnvm use 20\nnpm install  # reinstall with new version\nnode --version  # v20.x.x"
              }
            </CodeBlock>
            <TipBox>
              {
                "Upgrading to Node.js 20 LTS gives you native fetch, improved performance, and security patches. It is the cleanest long-term solution."
              }
            </TipBox>
          </FixCard>

          <SH id="faq">{"Frequently Asked Questions"}</SH>
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
                "Softplix builds full-stack applications. Dealing with Node.js configuration or tooling issues? We can help."
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
