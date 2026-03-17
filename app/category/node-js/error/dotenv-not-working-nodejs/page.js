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
  title: "dotenv Not Working in Node.js — process.env undefined Fixed [2026]",
  description:
    "Fix dotenv not working, process.env undefined, and Node.js environment variables not loading. Covers config() call order, .env file placement, ES modules, and production environment setup.",
  keywords:
    "dotenv not working nodejs, process env undefined, nodejs environment variable not loading, dotenv fix 2026, process.env undefined fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/dotenv-not-working-nodejs",
  },
  openGraph: {
    title: "dotenv Not Working in Node.js — process.env undefined Fixed [2026]",
    description: "Fix dotenv not working and process.env undefined in Node.js.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/dotenv-not-working-nodejs",
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
function EB({ children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-red-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-red-950 border-b border-red-900">
        <FaTriangleExclamation className="text-red-400 text-xs flex-shrink-0" />
        <span className="text-xs font-mono text-red-300">{"Output"}</span>
      </div>
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-red-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
function Tip({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
      <FaLightbulb className="text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}
function Warn({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <FaTriangleExclamation className="text-amber-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  );
}
function FC({ n, title, time, tag, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {n}
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
function CL({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((i, k) => (
        <li key={k} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleCheck className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>{i}</span>
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
  { label: "Why is dotenv not working?", href: "#what" },
  { label: "Fix 1 — Call config() before everything else", href: "#fix-1" },
  { label: "Fix 2 — Wrong .env file location", href: "#fix-2" },
  { label: "Fix 3 — Wrong .env file format", href: "#fix-3" },
  { label: "Fix 4 — dotenv with ES Modules", href: "#fix-4" },
  { label: "Fix 5 — Node 20.6+ built-in env loading", href: "#fix-5" },
  { label: "Fix 6 — Environment variables in production", href: "#fix-6" },
  { label: "Fix 7 — process.env in Next.js", href: "#fix-7" },
  { label: "Debug — print loaded variables", href: "#debug" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is dotenv not working in Node.js?",
    a: "The three most common causes: 1) require('dotenv').config() is called after code that reads process.env — move it to the very first line, 2) .env file is not in your project root alongside package.json, 3) .env file format has spaces around = signs (KEY = value should be KEY=value).",
  },
  {
    q: "Why is process.env undefined in Node.js?",
    a: "process.env is always an object, never undefined — but specific variables within it will be undefined if dotenv has not loaded them. Check: is dotenv installed, is config() called first, is the .env file in the right location.",
  },
  {
    q: "How do I use dotenv with ES modules?",
    a: "Replace require('dotenv').config() with import 'dotenv/config' as the first import in your entry file. Or on Node 20.6+, use the built-in flag: node --env-file=.env server.js",
  },
  {
    q: "dotenv works locally but variables are undefined in production?",
    a: "Production environments (Heroku, Vercel, Railway, AWS) use their own environment variable system — not .env files. Set variables in your platform's dashboard or CLI. The .env file should be in .gitignore and never deployed.",
  },
  {
    q: "Can I have multiple .env files?",
    a: "Yes. dotenv loads one file at a time: require('dotenv').config({ path: '.env.local' }). You can call config() multiple times with different paths. Common pattern: .env for defaults, .env.local for personal overrides (both in .gitignore).",
  },
  {
    q: "How do I validate required environment variables?",
    a: "Check for required variables at startup and exit if missing: const required = ['DATABASE_URL', 'SESSION_SECRET']; required.forEach(key => { if (!process.env[key]) { console.error(`Missing: ${key}`); process.exit(1) } })",
  },
];

function AS() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "dotenv Not Working in Node.js — process.env undefined Fixed [2026]",
          author: { "@type": "Organization", name: "Softplix" },
          publisher: {
            "@type": "Organization",
            name: "Softplix",
            url: "https://softplix.com",
          },
          datePublished: "2026-01-01",
          mainEntityOfPage:
            "https://softplix.com/category/node-js/error/dotenv-not-working-nodejs",
        }),
      }}
    />
  );
}
function FS() {
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
    tag: "Node.js",
    title: "Fix: Error Cannot find module dotenv",
    href: "error-cannot-find-module-dotenv",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
  },
  {
    tag: "MongoDB",
    title: "Fix: Mongoose connection error",
    href: "mongoose-connection-error",
    time: "8 min read",
  },
];

export default function Page() {
  return (
    <>
      <AS />
      <FS />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link href="/blog" className="hover:text-indigo-600">
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"dotenv not working"}</span>
          </nav> */}
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
              {"dotenv Not Working in Node.js"}
              <span className="block text-indigo-600">
                {"— process.env undefined Fixed [2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {
                "Also covers: process.env undefined · Node.js environment variable not loading"
              }
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

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Most Common Fix"}
            </p>
            <p className="text-sm text-green-700 mb-2">
              {
                "Move require('dotenv').config() to line 1 — before everything else:"
              }
            </p>
            <CodeBlock title="server.js — line 1">{`require('dotenv').config()   // ← MUST be first

const express = require('express')
const mongoose = require('mongoose')
// now process.env.DATABASE_URL etc. are available`}</CodeBlock>
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

          <SH id="what">{"Why Is dotenv Not Working?"}</SH>
          <EB>{`// All of these print undefined:
console.log(process.env.DATABASE_URL)  // undefined
console.log(process.env.PORT)          // undefined
console.log(process.env.SECRET_KEY)    // undefined`}</EB>
          <P>
            {"dotenv loads variables from your "}
            <IC>{".env"}</IC>
            {" file into "}
            <IC>{"process.env"}</IC>
            {"when you call "}
            <IC>{"require('dotenv').config()"}</IC>
            {
              ". If variables are undefined, one of three things is wrong: config() was called too late, the .env file is in the wrong location, or the .env file format is incorrect."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Symptom"}
                  </th>
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
                    "All env vars undefined",
                    "config() called too late",
                    "#fix-1",
                  ],
                  [
                    "Some vars undefined",
                    "Wrong order / imported after use",
                    "#fix-1",
                  ],
                  [
                    ".env exists but vars missing",
                    "Wrong .env file location",
                    "#fix-2",
                  ],
                  [
                    "Vars have wrong values",
                    ".env format error (spaces)",
                    "#fix-3",
                  ],
                  [
                    "Works locally not in production",
                    "Production doesn't use .env files",
                    "#fix-6",
                  ],
                ].map(([s, c, h]) => (
                  <tr
                    key={s}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {s}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{c}</td>
                    <td className="px-5 py-3">
                      <a
                        href={h}
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

          <FC
            n="1"
            title="Call config() Before Everything Else"
            time="1 min"
            tag="Most common fix — call order matters"
          >
            <P>
              {"dotenv only populates process.env when "}
              <IC>{"config()"}</IC>
              {
                " is called. Any code that reads process.env before that call sees undefined. Move config() to line 1 of your entry file."
              }
            </P>
            <CodeBlock title="server.js">{`// ❌ WRONG — dotenv called after process.env is already read
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)  // undefined!
require('dotenv').config()  // too late

// ✅ CORRECT — dotenv on line 1
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)  // populated!`}</CodeBlock>
            <Tip>
              {
                "Even if you import dotenv in one file and expect it to work in another, config() must still be called in the first file that runs — your app's entry point."
              }
            </Tip>
          </FC>

          <FC
            n="2"
            title="Fix .env File Location"
            time="1 min"
            tag=".env must be in project root"
          >
            <P>
              {"By default, dotenv looks for "}
              <IC>{".env"}</IC>
              {" in your current working directory — wherever you run "}
              <IC>{"node"}</IC>
              {" from, not where your source file lives."}
            </P>
            <CodeBlock>{`my-project/
  .env            ← correct location (project root)
  package.json
  src/
    server.js     ← your entry file

# Run from project root:
cd my-project
node src/server.js  # ← .env found because cwd is my-project`}</CodeBlock>
            <CodeBlock title="Custom .env path if needed">{`// .env in different location
require('dotenv').config({ path: './.env.local' })
require('dotenv').config({ path: require('path').join(__dirname, '../.env') })`}</CodeBlock>
          </FC>

          <FC
            n="3"
            title="Fix .env File Format"
            time="1 min"
            tag="Wrong format causes undefined or wrong values"
          >
            <P>
              {
                "The .env file format is strict: one variable per line, no spaces around the "
              }
              <IC>{"="}</IC>
              {" sign."}
            </P>
            <CodeBlock title=".env — correct format">{`# ✅ CORRECT
DATABASE_URL=mongodb://localhost:27017/mydb
PORT=3000
SECRET_KEY=abc123xyz

# ❌ WRONG — spaces around = sign
DATABASE_URL = mongodb://localhost:27017/mydb

# ✅ String values — quotes are optional but included in value
API_KEY="my-api-key"       # value is: my-api-key (without quotes)
API_KEY=my-api-key         # value is: my-api-key (same)

# ✅ Multi-word values — no quotes needed
APP_NAME=My Awesome App

# ✅ Comments work
# This is a comment
DATABASE_URL=mongodb://localhost:27017/mydb`}</CodeBlock>
            <Warn>
              {
                'When you write API_KEY="value", dotenv strips the quotes — process.env.API_KEY will be value, not "value". But single-quoted and mismatched quotes can cause unexpected results.'
              }
            </Warn>
          </FC>

          <FC
            n="4"
            title="dotenv with ES Modules"
            time="2 min"
            tag="Using import syntax — type: module"
          >
            <P>
              {"If your project uses ES Modules ("}
              <IC>{'"type": "module"'}</IC>
              {" in package.json), "}
              <IC>{"require()"}</IC>
              {" is not available. Use the ES Module import syntax instead."}
            </P>
            <CodeBlock title="server.js (ES Module)">{`// ✅ Option 1 — import dotenv/config (simplest, must be first)
import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'

// ✅ Option 2 — import and call manually
import dotenv from 'dotenv'
dotenv.config()

// ✅ Option 3 — Node 20.6+ built-in (no dotenv needed)
// node --env-file=.env server.js`}</CodeBlock>
          </FC>

          <FC
            n="5"
            title="Node.js 20.6+ Built-in Env Loading"
            time="1 min"
            tag="Skip dotenv entirely on Node 20.6+"
          >
            <P>
              {
                "Node.js 20.6 added native .env file support. No dotenv package needed."
              }
            </P>
            <CodeBlock title="terminal">{`# Load .env automatically
node --env-file=.env server.js

# Load multiple files
node --env-file=.env --env-file=.env.local server.js`}</CodeBlock>
            <CodeBlock title="package.json">{`{
  "scripts": {
    "start": "node --env-file=.env server.js",
    "dev": "node --env-file=.env --watch server.js"
  }
}`}</CodeBlock>
          </FC>

          <FC
            n="6"
            title="Environment Variables in Production"
            time="3 min"
            tag="Works locally but undefined in production"
          >
            <P>
              {
                "Production platforms do NOT use .env files. They have their own environment variable system. Your .env file should be in .gitignore and never deployed."
              }
            </P>
            <H3>{"Heroku"}</H3>
            <CodeBlock title="terminal">
              {
                "heroku config:set DATABASE_URL=mongodb+srv://...\nheroku config:set SESSION_SECRET=mysecret\nheroku config    # list all vars"
              }
            </CodeBlock>
            <H3>{"Vercel"}</H3>
            <CodeBlock title="terminal">
              {
                "vercel env add DATABASE_URL production\n# Or in Vercel dashboard: Project → Settings → Environment Variables"
              }
            </CodeBlock>
            <H3>{"Railway / Render"}</H3>
            <CodeBlock>
              {
                "# Dashboard → your project → Variables tab\n# Add each variable manually"
              }
            </CodeBlock>
            <H3>{"AWS EC2 / Ubuntu VPS"}</H3>
            <CodeBlock title="terminal">{`# Add to /etc/environment or your app's systemd service file
# Or create .env manually on the server (not in git)
nano /home/ubuntu/myapp/.env
# Add: DATABASE_URL=mongodb+srv://...`}</CodeBlock>
            <Tip>
              {
                "Always validate required environment variables at startup: if (!process.env.DATABASE_URL) { console.error('Missing DATABASE_URL'); process.exit(1) }"
              }
            </Tip>
          </FC>

          <FC
            n="7"
            title="process.env in Next.js"
            time="2 min"
            tag="Next.js has different env variable rules"
          >
            <P>
              {
                "Next.js has its own environment variable system with different prefixes for different contexts:"
              }
            </P>
            <CodeBlock title=".env.local (Next.js)">{`# Server-only (not exposed to browser)
DATABASE_URL=mongodb://localhost:27017/mydb
SESSION_SECRET=mysecret

# Exposed to browser (MUST have NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=pk_test_...`}</CodeBlock>
            <CodeBlock title="Next.js — accessing env vars">{`// Server component or API route — any variable works
const dbUrl = process.env.DATABASE_URL

// Client component — ONLY NEXT_PUBLIC_ vars work
const apiUrl = process.env.NEXT_PUBLIC_API_URL`}</CodeBlock>
            <Warn>
              {
                "Do not add dotenv to a Next.js project — Next.js loads .env files automatically. Adding dotenv can conflict."
              }
            </Warn>
          </FC>

          <SH id="debug">{"Debug — Print All Loaded Variables"}</SH>
          <CodeBlock title="server.js — debug dotenv">{`const result = require('dotenv').config()

if (result.error) {
  console.error('dotenv error:', result.error.message)
} else {
  console.log('dotenv loaded:', Object.keys(result.parsed || {}))
  // Prints: ['DATABASE_URL', 'PORT', 'SECRET_KEY']
}

// Check a specific variable
console.log('DATABASE_URL:', process.env.DATABASE_URL ?? 'NOT SET')`}</CodeBlock>

          <SH id="prevention">{"How to Prevent env Variable Issues"}</SH>
          <CL
            items={[
              "Call require('dotenv').config() as the very first line of your entry file",
              "Keep .env in project root alongside package.json",
              "Add .env to .gitignore — never commit secrets",
              "Create .env.example with same keys but empty values for teammates",
              "Validate required variables at startup and exit if any are missing",
              "Use platform environment variable UI (Heroku, Vercel) — never deploy .env to production",
              "Use NEXT_PUBLIC_ prefix only for variables safe to expose to the browser",
            ]}
          />

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
                "Softplix builds full-stack applications. Struggling with Node.js configuration or environment setup? We can help."
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
