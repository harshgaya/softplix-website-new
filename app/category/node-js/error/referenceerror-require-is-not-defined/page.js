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
  title: "ReferenceError: require is not defined — Fixed [Complete Guide 2026]",
  description:
    "Fix ReferenceError require is not defined in Node.js. Covers ES module vs CommonJS conflict, type: module in package.json, .mjs vs .cjs files, and how to migrate your project.",
  keywords:
    "referenceerror require is not defined, require is not defined nodejs, require not defined es module fix 2026, cannot use require in esm",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/referenceerror-require-is-not-defined",
  },
  openGraph: {
    title:
      "ReferenceError: require is not defined — Fixed [Complete Guide 2026]",
    description:
      "Fix ReferenceError require is not defined in Node.js — ES modules vs CommonJS explained.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/referenceerror-require-is-not-defined",
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

const TOC = [
  { label: "What causes require is not defined?", href: "#what-it-means" },
  { label: "Fix 1 — Remove type: module from package.json", href: "#fix-1" },
  { label: "Fix 2 — Switch to ES Module import syntax", href: "#fix-2" },
  { label: "Fix 3 — Use .cjs file extension", href: "#fix-3" },
  { label: "Fix 4 — createRequire in ES modules", href: "#fix-4" },
  { label: "__dirname and __filename in ES modules", href: "#dirname" },
  { label: "TypeError: app.use is not a function — Fixed", href: "#app-use" },
  { label: "CommonJS vs ES Modules — quick reference", href: "#comparison" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes ReferenceError require is not defined in Node.js?",
    a: "You have 'type': 'module' in package.json which makes all .js files ES Modules. ES Modules use import/export syntax — require() does not exist in this context. Either remove type: module or switch to import statements.",
  },
  {
    q: "How do I fix require is not defined in ES module?",
    a: "Two options: remove 'type': 'module' from package.json to use CommonJS, OR replace all require() calls with import statements. Do not mix the two systems in the same file.",
  },
  {
    q: "Can I use require() and import in the same project?",
    a: "Yes, but not in the same file. Use .cjs extension for CommonJS files and .mjs or .js (with type: module) for ES Module files. This lets you mix module systems across files in the same project.",
  },
  {
    q: "What is __dirname equivalent in ES modules?",
    a: "Use: import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename). This recreates __dirname for ES modules.",
  },
  {
    q: "What causes TypeError app.use is not a function?",
    a: "The most common cause is writing const app = require('express') instead of const express = require('express'); const app = express(). You must call express() to create the app instance. app.use() only exists on the app instance, not on the express function itself.",
  },
  {
    q: "How do I fix TypeError app.use is not a function in Express?",
    a: "Make sure you called express() to create the app: const express = require('express'); const app = express(). Then app.use() will work. Also ensure cors(), body parsers, and other middleware are added BEFORE route definitions.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "ReferenceError: require is not defined — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/referenceerror-require-is-not-defined",
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
    title: "Fix: Node.js fetch not defined",
    href: "nodejs-fetch-not-defined",
    time: "4 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! code ENOENT No Such File or Directory",
    href: "npm-err-code-enoent-no-such-file-or-directory",
    time: "7 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! cb.apply is not a function",
    href: "npm-err-cb-apply-is-not-a-function",
    time: "6 min read",
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
            <span className="text-gray-500">{"require is not defined"}</span>
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
              {"ReferenceError: require is not defined"}
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
                {"6 min read"}
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
              {"⚡ Quickest Fix — Pick One"}
            </p>
            <p className="text-sm text-green-700 mb-2">
              {
                "Option A — Remove type: module from package.json (stay with CommonJS):"
              }
            </p>
            <CodeBlock title="package.json">{`{
  "name": "my-app"
  // remove "type": "module" ← delete this line
}`}</CodeBlock>
            <p className="text-sm text-green-700 mb-2">
              {"Option B — Switch require() to import (use ES Modules):"}
            </p>
            <CodeBlock title="server.js">{`// Replace: const express = require('express')
import express from 'express'  // ← use this instead`}</CodeBlock>
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
            {"What Causes ReferenceError: require is not defined?"}
          </SectionHeading>

          <ErrorBlock>{`ReferenceError: require is not defined in ES module scope, you can use import() instead
    at file:///Users/you/projects/app/server.js:1:1
    Node.js v20.11.0`}</ErrorBlock>

          <Prose>
            {
              "Node.js supports two module systems. Understanding the difference is the key to fixing this error permanently:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"System"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Syntax"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Activated by"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "CommonJS (CJS)",
                    "require() / module.exports",
                    "Default for .js files",
                  ],
                  [
                    "ES Modules (ESM)",
                    "import / export",
                    '"type": "module" in package.json or .mjs files',
                  ],
                ].map(([sys, syn, act]) => (
                  <tr
                    key={sys}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-semibold text-gray-700">
                      {sys}
                    </td>
                    <td className="px-5 py-3 font-mono text-indigo-700 text-xs">
                      {syn}
                    </td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{act}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose>
            {"The error fires when you add "}
            <IC>{'"type": "module"'}</IC>
            {
              " to package.json (or use a .mjs file), which makes Node.js treat your file as an ES Module — and "
            }
            <IC>{"require()"}</IC>
            {
              " does not exist in ES Module scope. The fix is choosing one system and being consistent."
            }
          </Prose>

          <TipBox>
            {
              "Most Node.js backend projects — Express APIs, CLI tools, scripts — work best with CommonJS. ES Modules are better for frontend-adjacent code or if you want to align with browser JavaScript."
            }
          </TipBox>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Remove type: module from package.json"
            time="30 sec"
            tag="Stay with CommonJS — fastest fix"
          >
            <Prose>
              {"If you added "}
              <IC>{'"type": "module"'}</IC>
              {
                " and do not specifically need ES Modules, simply remove it. Your "
              }
              <IC>{"require()"}</IC>
              {" calls will work again immediately."}
            </Prose>
            <CodeBlock title="package.json — BEFORE">{`{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module"   // ← remove this line
}`}</CodeBlock>
            <CodeBlock title="package.json — AFTER">{`{
  "name": "my-app",
  "version": "1.0.0"
  // no "type" field = CommonJS by default
}`}</CodeBlock>
            <Prose>
              {"No other changes needed. All your "}
              <IC>{"require()"}</IC>
              {" and "}
              <IC>{"module.exports"}</IC>
              {" code works exactly as before."}
            </Prose>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Switch to ES Module import Syntax"
            time="10 min"
            tag="Keep type: module — modernise your code"
          >
            <Prose>
              {
                "If you want to keep ES Modules (or are using a framework that requires it), replace all "
              }
              <IC>{"require()"}</IC>
              {" calls with "}
              <IC>{"import"}</IC>
              {" statements."}
            </Prose>

            <SubHeading>{"Side by side comparison"}</SubHeading>
            <CodeBlock title="CommonJS (old) → ES Module (new)">{`// CommonJS                      // ES Module
const express = require('express')  →  import express from 'express'
const path = require('path')        →  import path from 'path'
const { readFile } = require('fs')  →  import { readFile } from 'fs/promises'
const cors = require('cors')        →  import cors from 'cors'
const mongoose = require('mongoose') → import mongoose from 'mongoose'

// Exporting
module.exports = router             →  export default router
module.exports = { fn1, fn2 }       →  export { fn1, fn2 }
module.exports.name = value         →  export const name = value`}</CodeBlock>

            <SubHeading>{"Complete Express app in ES Module style"}</SubHeading>
            <CodeBlock title="server.js (ES Module)">{`import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(\`Server on port \${PORT}\`))`}</CodeBlock>

            <TipBox>
              {
                "When using ES Modules with Node.js, always use import 'dotenv/config' instead of require('dotenv').config() — it must still be the first import."
              }
            </TipBox>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Use .cjs File Extension"
            time="2 min"
            tag="Mixed project — keep specific files as CommonJS"
          >
            <Prose>
              {"If you have "}
              <IC>{'"type": "module"'}</IC>
              {
                " globally but need specific files to use CommonJS, rename them to "
              }
              <IC>{".cjs"}</IC>
              {"."}
              <IC>{".cjs"}</IC>
              {
                " files always use CommonJS regardless of the package.json type setting."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Rename your file\nmv server.js server.cjs\n\n# Run it\nnode server.cjs"
              }
            </CodeBlock>
            <CodeBlock title="server.cjs">{`// This file uses CommonJS — require() works fine
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.listen(3000)`}</CodeBlock>
            <TipBox>
              {
                "The file extension rule: .cjs = always CommonJS, .mjs = always ES Module, .js = determined by package.json type field."
              }
            </TipBox>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Use createRequire in ES Modules"
            time="2 min"
            tag="When you must use require() in an ES Module file"
          >
            <Prose>
              {
                "Sometimes you need require() inside an ES Module file — for example to load a JSON file or a package that only supports CommonJS. Node.js provides createRequire for exactly this:"
              }
            </Prose>
            <CodeBlock title="server.js (ES Module)">{`import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// Now you can use require() in this ES module file
const pkg = require('./package.json')
const legacyModule = require('./legacy-module.cjs')

console.log(pkg.version)`}</CodeBlock>
          </FixCard>

          {/* __dirname */}
          <SectionHeading id="dirname">
            {"__dirname and __filename in ES Modules"}
          </SectionHeading>
          <Prose>
            {"Two other variables that do not exist in ES Modules: "}
            <IC>{"__dirname"}</IC>
            {" and "}
            <IC>{"__filename"}</IC>
            {". Here is how to recreate them:"}
          </Prose>
          <CodeBlock title="server.js (ES Module)">{`import { fileURLToPath } from 'url'
import path from 'path'

// Recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Now use them exactly like CommonJS
const configPath = path.join(__dirname, 'config.json')
console.log('Current directory:', __dirname)`}</CodeBlock>

          {/* app.use section */}
          <SectionHeading id="app-use">
            {"TypeError: app.use is not a function — Fixed"}
          </SectionHeading>

          <Prose>
            {
              "This is a separate but very common Express error that often appears alongside module issues. It deserves its own explanation."
            }
          </Prose>

          <ErrorBlock>{`TypeError: app.use is not a function
    at Object.<anonymous> (/Users/you/projects/api/server.js:5:5)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)`}</ErrorBlock>

          <Prose>
            {"This error means the variable you are calling "}
            <IC>{".use()"}</IC>
            {
              " on is not an Express app instance. Almost always caused by a single missing step — forgetting to call "
            }
            <IC>{"express()"}</IC>
            {"."}
          </Prose>

          <SubHeading>
            {"The Most Common Cause — Missing express() Call"}
          </SubHeading>
          <CodeBlock title="server.js">{`// ❌ WRONG — app is the express function, not an app instance
const app = require('express')
app.use(cors())   // TypeError: app.use is not a function

// ✅ CORRECT — call express() to create the app instance
const express = require('express')
const app = express()   // ← this creates the app instance
app.use(cors())         // works correctly`}</CodeBlock>

          <SubHeading>{"ES Module version"}</SubHeading>
          <CodeBlock title="server.js (ES Module)">{`// ❌ WRONG
import app from 'express'   // app is the function, not an instance

// ✅ CORRECT
import express from 'express'
const app = express()       // create the instance`}</CodeBlock>

          <SubHeading>{"Middleware order matters"}</SubHeading>
          <CodeBlock title="server.js — correct order">{`const express = require('express')
const cors = require('cors')
const app = express()

// ✅ CORRECT ORDER:
// 1. Body parsers and middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// 2. Routes after middleware
app.get('/api/data', (req, res) => {
  res.json({ data: 'works' })
})

// 3. Error handler last
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

app.listen(3000)`}</CodeBlock>

          <SubHeading>{"Other causes of app.use is not a function"}</SubHeading>
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
                  [
                    "const app = require('express') (missing call)",
                    "const app = express() after requiring",
                  ],
                  [
                    "Router exported as object instead of Router",
                    "module.exports = router (not { router })",
                  ],
                  [
                    "Circular dependency causing undefined import",
                    "Move app creation to separate app.js file",
                  ],
                  [
                    "Middleware is not a function",
                    "Check that what you pass to app.use() is a function",
                  ],
                ].map(([cause, fix]) => (
                  <tr
                    key={cause}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-red-600 text-xs">
                      {cause}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison */}
          <SectionHeading id="comparison">
            {"CommonJS vs ES Modules — Quick Reference"}
          </SectionHeading>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Side by Side Comparison"}
              </p>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Feature"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-indigo-700">
                    {"CommonJS"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-green-700">
                    {"ES Modules"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Import", "require()", "import x from 'x'"],
                  ["Export", "module.exports = x", "export default x"],
                  ["Named export", "exports.fn = fn", "export { fn }"],
                  ["Activate", "default for .js", '"type": "module" or .mjs'],
                  ["__dirname", "built-in", "use fileURLToPath workaround"],
                  [
                    "Dynamic import",
                    "require() anywhere",
                    "await import() in async",
                  ],
                  ["Best for", "Node.js backends", "Modern browsers + Node"],
                ].map(([feature, cjs, esm]) => (
                  <tr
                    key={feature}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-600">
                      {feature}
                    </td>
                    <td className="px-4 py-3 font-mono text-indigo-700">
                      {cjs}
                    </td>
                    <td className="px-4 py-3 font-mono text-green-700">
                      {esm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent These Errors"}
          </SectionHeading>
          <CheckList
            items={[
              "Pick one module system for your project and be consistent throughout",
              "For Node.js backends (Express, APIs, scripts) — use CommonJS unless you have a specific reason for ES Modules",
              "Never mix require() and import in the same file",
              "If you add type: module, update ALL require() calls to import statements",
              "Use .cjs or .mjs extensions for files that need to deviate from the project default",
              "Always call express() to create the app instance before calling app.use()",
              "Add middleware (cors, body parsers) BEFORE route definitions in Express",
            ]}
          />

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
              {"We Build Production-Grade Node.js & Express Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Dealing with module system issues or Express configuration in production? We can help."
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
