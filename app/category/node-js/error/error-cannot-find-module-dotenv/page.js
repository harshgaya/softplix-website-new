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
  title: "Error: Cannot find module 'dotenv' — Fixed [Complete Guide 2026]",
  description:
    "Fix Error Cannot find module dotenv in Node.js. Install dotenv correctly, fix .env file placement, call config() at the right time, and load environment variables in every environment.",
  keywords:
    "error cannot find module dotenv, cannot find module dotenv nodejs, dotenv not installed, dotenv module not found fix 2026, require dotenv error",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-dotenv",
  },
  openGraph: {
    title: "Error: Cannot find module 'dotenv' — Fixed [Complete Guide 2026]",
    description:
      "Fix Cannot find module dotenv in Node.js — every cause covered for all OS.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-cannot-find-module-dotenv",
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const TOC = [
  { label: "What causes this error?", href: "#what-it-means" },
  { label: "Fix 1 — Install dotenv", href: "#fix-1" },
  { label: "Fix 2 — Call config() correctly", href: "#fix-2" },
  { label: "Fix 3 — Wrong directory / missing node_modules", href: "#fix-3" },
  { label: "Fix 4 — Fix .env file placement", href: "#fix-4" },
  { label: "Fix 5 — Using ES Modules (import syntax)", href: "#fix-5" },
  { label: "Fix 6 — Node 20.6+ built-in env loading", href: "#fix-6" },
  {
    label: "dotenv not working — variables still undefined",
    href: "#still-undefined",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I install dotenv in Node.js?",
    a: "Run npm install dotenv in your project directory. Then add require('dotenv').config() at the very first line of your entry file — before any other code that reads process.env.",
  },
  {
    q: "Where should the .env file be placed in Node.js?",
    a: "The .env file must be in your project root — the same directory as your package.json file. If it is in a subdirectory, dotenv will not find it automatically unless you pass the path: require('dotenv').config({ path: './.env.local' }).",
  },
  {
    q: "dotenv is installed but process.env variables are still undefined?",
    a: "Make sure require('dotenv').config() is called BEFORE any code that reads process.env. Also check that your .env file uses KEY=value format with no spaces around the equals sign.",
  },
  {
    q: "Can I use dotenv with ES modules (import/export)?",
    a: "Yes. With ES modules use: import 'dotenv/config' instead of require('dotenv').config(). Or use the Node.js built-in --env-file flag on Node 20.6+: node --env-file=.env server.js",
  },
  {
    q: "Should I commit .env to git?",
    a: "Never. Add .env to your .gitignore. Instead commit a .env.example file with the same keys but empty values — this documents what variables teammates need without exposing real secrets.",
  },
  {
    q: "Cannot find module dotenv after npm install — why?",
    a: "Check you are running node from the correct directory. The node_modules folder must be in the same directory you are running node from. Run: ls node_modules | grep dotenv to verify it installed.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Error: Cannot find module 'dotenv' — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-dotenv",
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
    title: "Fix: dotenv not working in Node.js",
    href: "dotenv-not-working-nodejs",
    time: "5 min read",
  },
  {
    tag: "MongoDB",
    title: "Fix: Mongoose connection error",
    href: "mongoose-connection-error",
    time: "8 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "4 min read",
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
            <span className="text-gray-500">{"Cannot find module dotenv"}</span>
          </nav> */}

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "dotenv", "Error Fix"].map((t) => (
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
              {"Error: Cannot find module 'dotenv'"}
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
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — 60 seconds"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Navigate to your project folder and install dotenv:"}
            </p>
            <CodeBlock>
              {"cd your-project-folder\nnpm install dotenv"}
            </CodeBlock>
            <p className="text-sm text-green-700 mb-3">
              {"Then add this as the very first line of your entry file:"}
            </p>
            <CodeBlock title="server.js / index.js — line 1">
              {"require('dotenv').config()"}
            </CodeBlock>
            <p className="text-sm text-green-700">
              {
                "Still failing? Check Fix 3 — you may be in the wrong directory."
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

          {/* What it means */}
          <SectionHeading id="what-it-means">
            {"What Causes Cannot find module 'dotenv'?"}
          </SectionHeading>

          <ErrorBlock>{`Error: Cannot find module 'dotenv'
Require stack:
- /Users/you/projects/myapp/server.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:94:18)
    at Object.<anonymous> (/Users/you/projects/myapp/server.js:1:1)`}</ErrorBlock>

          <Prose>
            {
              "dotenv is not a built-in Node.js module — it is an npm package that must be installed as a project dependency. This error means Node.js cannot find it in your "
            }
            <IC>{"node_modules"}</IC>
            {" folder. The three most common causes:"}
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["dotenv was never installed", "Fix 1 — npm install dotenv"],
                  [
                    "Wrong directory — node_modules is elsewhere",
                    "Fix 3 — check pwd",
                  ],
                  [
                    "Git clone — node_modules not committed",
                    "Fix 3 — run npm install",
                  ],
                  [
                    "ES Modules — require() not available",
                    "Fix 5 — use import syntax",
                  ],
                ].map(([cause, fix]) => (
                  <tr
                    key={cause}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 text-gray-700 text-sm">{cause}</td>
                    <td className="px-5 py-3 font-semibold text-indigo-600 text-sm">
                      {fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Install dotenv"
            time="1 min"
            tag="Most common fix"
          >
            <Prose>
              {
                "dotenv must be installed in your project. Run this from your project root — the same folder that contains package.json:"
              }
            </Prose>
            <CodeBlock title="terminal">{"npm install dotenv"}</CodeBlock>
            <SubHeading>{"Verify it installed correctly"}</SubHeading>
            <CodeBlock title="terminal">
              {"ls node_modules | grep dotenv\n# Should output: dotenv"}
            </CodeBlock>
            <SubHeading>{"Check package.json has dotenv listed"}</SubHeading>
            <CodeBlock title="package.json">{`{
  "dependencies": {
    "dotenv": "^16.4.5"   // ← should appear here after install
  }
}`}</CodeBlock>
            <TipBox>
              {
                "npm install dotenv automatically adds it to package.json. You do not need to add --save explicitly since npm 5."
              }
            </TipBox>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Call config() Correctly in Your Code"
            time="1 min"
            tag="Installed but still getting error"
          >
            <Prose>
              {"After installing dotenv, you must call "}
              <IC>{"config()"}</IC>
              {
                " to load the .env file. The most common mistake is either forgetting to call it or calling it too late — after code that reads "
              }
              <IC>{"process.env"}</IC>
              {"."}
            </Prose>

            <SubHeading>{"CommonJS — correct usage"}</SubHeading>
            <CodeBlock title="server.js">{`// ✅ CORRECT — first line of your entry file
require('dotenv').config()

// Now process.env is populated
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const DB_URL = process.env.DATABASE_URL  // available now

app.listen(PORT)`}</CodeBlock>

            <SubHeading>{"Wrong — calling config() too late"}</SubHeading>
            <CodeBlock title="server.js">{`// ❌ WRONG — reading process.env BEFORE calling config()
const PORT = process.env.PORT  // undefined!

require('dotenv').config()     // too late — PORT already read

app.listen(PORT || 3000)`}</CodeBlock>

            <TipBox>
              {
                "Always call require('dotenv').config() before ANY other code that uses process.env. It must be the very first require in your entry file."
              }
            </TipBox>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Wrong Directory or Missing node_modules"
            time="1 min"
            tag="After git clone or in wrong folder"
          >
            <Prose>
              {
                "If you are in a different directory than your project, or if you just cloned a repository without running npm install, node_modules will not exist and dotenv will not be found."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Check where you are\npwd\n\n# Is package.json here?\nls package.json\n\n# Does node_modules exist?\nls node_modules\n\n# Navigate to project and install\ncd ~/projects/my-app\nnpm install         # recreates node_modules\nnode server.js"
              }
            </CodeBlock>
            <TipBox>
              {
                "After cloning any repository, always run npm install before starting the app. node_modules is never committed to git."
              }
            </TipBox>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Fix .env File Placement"
            time="1 min"
            tag="dotenv installed but variables undefined"
          >
            <Prose>
              {
                "Even after dotenv is installed and config() is called, you may still get issues if your .env file is in the wrong location. dotenv looks for .env in your current working directory — the folder you run "
              }
              <IC>{"node"}</IC>
              {" from."}
            </Prose>

            <SubHeading>{"Correct project structure"}</SubHeading>
            <CodeBlock>{`my-project/
  .env              ← must be here (project root)
  package.json
  server.js
  node_modules/`}</CodeBlock>

            <SubHeading>{"Check .env file exists"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# macOS / Linux\nls -la | grep .env\n\n# Windows\ndir /a | findstr .env"
              }
            </CodeBlock>

            <SubHeading>{"Using a custom path for .env"}</SubHeading>
            <CodeBlock title="server.js">{`// Default: looks for .env in current working directory
require('dotenv').config()

// Custom path — if your .env is in a different location
require('dotenv').config({ path: './.env.local' })
require('dotenv').config({ path: '/absolute/path/to/.env' })
require('dotenv').config({ path: require('path').join(__dirname, '.env') })`}</CodeBlock>

            <WarnBox>
              {
                "Never commit .env to git — it contains secrets. Add .env to .gitignore. Create a .env.example with the same keys but empty values for your teammates."
              }
            </WarnBox>
          </FixCard>

          {/* Fix 5 */}
          <FixCard
            number="5"
            title="Fix for ES Modules (import/export)"
            time="2 min"
            tag="Using type: module in package.json"
          >
            <Prose>
              {"If your project uses ES Modules — either because you have "}
              <IC>{'"type": "module"'}</IC>
              {" in package.json or because you use "}
              <IC>{".mjs"}</IC>
              {" files — "}
              <IC>{"require()"}</IC>
              {" is not available and you need a different syntax."}
            </Prose>

            <SubHeading>
              {"Option A — import dotenv/config (simplest)"}
            </SubHeading>
            <CodeBlock title="server.js (ES Module)">{`// Import this FIRST — before anything that uses process.env
import 'dotenv/config'

import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000
app.listen(PORT)`}</CodeBlock>

            <SubHeading>{"Option B — import and call config()"}</SubHeading>
            <CodeBlock title="server.js (ES Module)">{`import dotenv from 'dotenv'
dotenv.config()

import express from 'express'`}</CodeBlock>

            <SubHeading>
              {"Option C — Node 20.6+ built-in (no dotenv needed)"}
            </SubHeading>
            <CodeBlock title="terminal">
              {
                'node --env-file=.env server.js\n\n# Or in package.json scripts:\n# "start": "node --env-file=.env server.js"'
              }
            </CodeBlock>

            <TipBox>
              {
                "On Node 20.6 and higher, you do not need dotenv at all. The built-in --env-file flag loads your .env automatically."
              }
            </TipBox>
          </FixCard>

          {/* Fix 6 */}
          <FixCard
            number="6"
            title="Node.js 20.6+ Built-in .env Loading"
            time="1 min"
            tag="Skip dotenv entirely"
          >
            <Prose>
              {
                "Node.js 20.6 added native .env file support. If you are on Node 20.6 or higher, you can load environment variables without installing dotenv at all."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Check your Node version\nnode --version\n\n# If 20.6+, run with built-in env loading\nnode --env-file=.env server.js\n\n# Load multiple .env files\nnode --env-file=.env --env-file=.env.local server.js"
              }
            </CodeBlock>
            <CodeBlock title="package.json">{`{
  "scripts": {
    "start": "node --env-file=.env server.js",
    "dev": "node --env-file=.env --watch server.js"
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Using the built-in flag removes a dependency from your project. If you are on Node 20.6+, consider migrating away from dotenv to the native solution."
              }
            </TipBox>
          </FixCard>

          {/* Still undefined */}
          <SectionHeading id="still-undefined">
            {"dotenv Installed But Variables Still Undefined?"}
          </SectionHeading>
          <Prose>
            {"If dotenv is installed and not throwing an error but your "}
            <IC>{"process.env"}</IC>
            {" variables are still "}
            <IC>{"undefined"}</IC>
            {
              ", the problem is configuration — not the module. Check all of these:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Check"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Common mistake"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    ".env file format",
                    "KEY = value (spaces) — should be KEY=value (no spaces)",
                  ],
                  [
                    "config() called first",
                    "process.env read before require('dotenv').config()",
                  ],
                  [
                    ".env location",
                    ".env is not in the same folder you run node from",
                  ],
                  [
                    "Variable name typo",
                    "process.env.DATABASE_URL vs process.env.DATABASEURL",
                  ],
                  [
                    "Quotes in .env",
                    'KEY="value" — quotes are included in the value string',
                  ],
                ].map(([check, mistake]) => (
                  <tr
                    key={check}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm whitespace-nowrap">
                      {check}
                    </td>
                    <td className="px-5 py-3 text-gray-500 text-sm">
                      {mistake}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SubHeading>{"Debug dotenv — print all loaded variables"}</SubHeading>
          <CodeBlock title="server.js — temporary debug">{`const result = require('dotenv').config()

if (result.error) {
  console.error('dotenv error:', result.error)
} else {
  console.log('dotenv loaded:', result.parsed)  // shows all loaded variables
}`}</CodeBlock>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Add dotenv to package.json with npm install dotenv",
              "Call require('dotenv').config() as the very first line of your entry file",
              "Place .env in the project root alongside package.json",
              "Add .env to .gitignore — never commit secrets",
              "Create .env.example with keys but empty values for teammates",
              "Commit package.json and package-lock.json so npm install recreates everything",
              "Consider Node 20.6+ built-in --env-file flag to eliminate the dotenv dependency",
            ]}
          />

          {/* Summary */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Diagnosis — Work Through in Order"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  check: "Are you in your project directory?",
                  fix: "cd into your project root",
                },
                {
                  check: "Run: ls node_modules | grep dotenv",
                  fix: "If missing — npm install dotenv",
                },
                {
                  check: "Is require('dotenv').config() the first line?",
                  fix: "Move it to line 1 of your entry file",
                },
                {
                  check: "Is .env in the project root?",
                  fix: "Move .env next to package.json",
                },
                {
                  check: "Using ES modules?",
                  fix: "Use: import 'dotenv/config' instead",
                },
                {
                  check: "On Node 20.6+?",
                  fix: "Use: node --env-file=.env server.js",
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

          {/* FAQ */}
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
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Struggling with Node.js environment configuration in production? We can help."
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
