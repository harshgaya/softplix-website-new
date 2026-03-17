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
  title: "Error: Cannot find module 'cors' — Fixed [Complete Guide 2026]",
  description:
    "Fix Error Cannot find module cors in Node.js and Express. Install cors, configure allowed origins, enable credentials, and fix CORS errors in your API for good.",
  keywords:
    "error cannot find module cors, cannot find module cors nodejs, cors not installed express, fix cors module error 2026, npm install cors fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-cors",
  },
  openGraph: {
    title: "Error: Cannot find module 'cors' — Fixed [Complete Guide 2026]",
    description:
      "Fix Cannot find module cors in Node.js and Express — every cause covered.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-cannot-find-module-cors",
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
  { label: "What causes this error?", href: "#what-it-means" },
  { label: "Fix 1 — Install and configure cors", href: "#fix-1" },
  { label: "Fix 2 — Wrong directory / missing node_modules", href: "#fix-2" },
  { label: "Fix 3 — Reinstall all dependencies", href: "#fix-3" },
  { label: "Fix 4 — Configure cors correctly for production", href: "#fix-4" },
  { label: "Fix 5 — cors with credentials (cookies/auth)", href: "#fix-5" },
  { label: "Fix 6 — Handle preflight OPTIONS requests", href: "#fix-6" },
  {
    label: "CORS error in browser after installing cors",
    href: "#browser-cors",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I install and use cors in Express?",
    a: "Run npm install cors, then: const cors = require('cors'); app.use(cors()) before your route definitions. For production, specify an origin: app.use(cors({ origin: 'https://yourfrontend.com' })).",
  },
  {
    q: "Why is cors module not found after npm install?",
    a: "Check that you are in the correct project directory containing package.json. Run ls node_modules | grep cors to verify it installed. If missing, run npm install cors again from your project root.",
  },
  {
    q: "How do I allow only specific origins with cors?",
    a: "Pass an origin option: app.use(cors({ origin: 'https://yourfrontend.com' })). For multiple origins, pass an array: app.use(cors({ origin: ['https://app.com', 'http://localhost:3000'] })).",
  },
  {
    q: "cors is installed but CORS error still appears in browser?",
    a: "Make sure app.use(cors()) is placed BEFORE your routes. If using credentials, set origin to your exact frontend URL — not a wildcard '*'. Check the Network tab in browser DevTools for the exact error.",
  },
  {
    q: "Can I use cors with credentials (cookies)?",
    a: "Yes. Set credentials: true and specify an exact origin — not '*': app.use(cors({ origin: 'https://yourfrontend.com', credentials: true })). In frontend, add credentials: 'include' to fetch calls.",
  },
  {
    q: "How do I fix CORS without the cors package?",
    a: "Set headers manually: res.setHeader('Access-Control-Allow-Origin', '*'). But the cors package is cleaner, handles all HTTP methods, manages preflight automatically, and is the recommended approach.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Error: Cannot find module 'cors' — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-cors",
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
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
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
            <span className="text-gray-500">{"Cannot find module cors"}</span>
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
              {"Error: Cannot find module 'cors'"}
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
                {"Node.js · Express · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — Complete Solution"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Install cors and add it to your Express app before routes:"}
            </p>
            <CodeBlock title="terminal">{"npm install cors"}</CodeBlock>
            <CodeBlock title="server.js">{`const express = require('express')
const cors = require('cors')

const app = express()

// Add BEFORE all routes
app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS working!' })
})

app.listen(5000)`}</CodeBlock>
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
            {"What Causes Cannot find module 'cors'?"}
          </SectionHeading>

          <ErrorBlock>{`Error: Cannot find module 'cors'
Require stack:
- /Users/you/projects/api/server.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:94:18)
    at Object.<anonymous> (/Users/you/projects/api/server.js:2:14)`}</ErrorBlock>

          <Prose>
            {
              "cors is an npm package — it is not built into Node.js or Express. This error means the cors package has not been installed in your project. The fix is straightforward: install it and configure it correctly in your Express app."
            }
          </Prose>
          <TipBox>
            {
              "Installing cors fixes the module error. But you also need to configure it correctly to actually allow cross-origin requests. Fixes 4, 5, and 6 cover the configuration after installation."
            }
          </TipBox>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Install and Configure cors"
            time="2 min"
            tag="Complete fix — install + basic setup"
          >
            <SubHeading>{"Step 1 — Install"}</SubHeading>
            <CodeBlock title="terminal">{"npm install cors"}</CodeBlock>

            <SubHeading>
              {"Step 2 — Add to Express app (before routes)"}
            </SubHeading>
            <CodeBlock title="server.js">{`const express = require('express')
const cors = require('cors')
const app = express()

// ✅ Allow all origins (development only)
app.use(cors())

// ✅ Allow specific origin (recommended)
app.use(cors({ origin: 'http://localhost:3000' }))

// ✅ Allow multiple origins
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Routes AFTER cors middleware
app.get('/api/users', (req, res) => {
  res.json({ users: [] })
})

app.listen(5000)`}</CodeBlock>

            <TipBox>
              {
                "cors() middleware must go BEFORE your route definitions. If you place it after a route, that route will not have CORS headers applied."
              }
            </TipBox>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Wrong Directory or Missing node_modules"
            time="1 min"
            tag="After git clone or wrong folder"
          >
            <Prose>
              {
                "If you just cloned a repository or are in the wrong folder, node_modules may not exist at all — meaning no packages are available, not just cors."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Check you are in the right place\npwd\nls package.json\n\n# Check node_modules exists\nls node_modules\n\n# If missing — recreate from package.json\nnpm install\n\n# Verify cors installed\nls node_modules | grep cors"
              }
            </CodeBlock>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Reinstall All Dependencies"
            time="3 min"
            tag="Corrupted node_modules"
          >
            <Prose>
              {
                "If cors is in package.json but still not found, node_modules may be corrupted. A clean reinstall fixes this."
              }
            </Prose>
            <CodeBlock title="macOS / Linux">
              {"rm -rf node_modules package-lock.json\nnpm install"}
            </CodeBlock>
            <CodeBlock title="Windows PowerShell">
              {
                "Remove-Item -Recurse -Force node_modules\nRemove-Item package-lock.json\nnpm install"
              }
            </CodeBlock>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Configure cors Correctly for Production"
            time="3 min"
            tag="After installing — production setup"
          >
            <Prose>
              {
                "For production, never allow all origins. Always specify the exact frontend URL to prevent unauthorized access to your API."
              }
            </Prose>
            <CodeBlock title="server.js — production config">{`const allowedOrigins = [
  'https://yourapp.com',
  'https://www.yourapp.com',
]

// Development also allows localhost
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:3000')
  allowedOrigins.push('http://localhost:5173')
}

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))`}</CodeBlock>
            <TipBox>
              {
                "Store allowed origins in environment variables: process.env.CORS_ORIGIN — never hardcode production URLs in your source code."
              }
            </TipBox>
          </FixCard>

          {/* Fix 5 */}
          <FixCard
            number="5"
            title="cors with Credentials (Cookies & Auth)"
            time="2 min"
            tag="For cookie-based auth sessions"
          >
            <Prose>
              {
                "If you are using cookies, sessions, or Authorization headers in cross-origin requests, you need to enable credentials in both your backend and frontend."
              }
            </Prose>
            <CodeBlock title="server.js — backend">{`app.use(cors({
  origin: 'http://localhost:3000',  // must be exact URL — not '*'
  credentials: true,                // allow cookies
}))`}</CodeBlock>
            <CodeBlock title="Frontend — fetch">{`// Must include credentials: 'include' in every request
fetch('http://localhost:5000/api/data', {
  method: 'GET',
  credentials: 'include',  // send cookies cross-origin
})

// Axios — set globally
import axios from 'axios'
axios.defaults.withCredentials = true`}</CodeBlock>
            <WarnBox>
              {
                "When credentials: true is set, you CANNOT use origin: '*'. You must specify an exact URL. Using '*' with credentials: true will cause the browser to reject the response."
              }
            </WarnBox>
          </FixCard>

          {/* Fix 6 */}
          <FixCard
            number="6"
            title="Handle Preflight OPTIONS Requests"
            time="2 min"
            tag="CORS error on POST/PUT/DELETE or with custom headers"
          >
            <Prose>
              {
                "Browsers send a preflight OPTIONS request before cross-origin POST, PUT, DELETE, or requests with custom headers. Your server must respond correctly to these preflight checks."
              }
            </Prose>
            <CodeBlock title="server.js">{`// Allow preflight for all routes
app.options('*', cors())

// Then apply cors to all routes
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

// Your routes
app.post('/api/data', (req, res) => {
  res.json({ success: true })
})`}</CodeBlock>
            <TipBox>
              {
                "app.options('*', cors()) must come BEFORE app.use(cors()) to handle preflight requests for all routes."
              }
            </TipBox>
          </FixCard>

          {/* Browser CORS */}
          <SectionHeading id="browser-cors">
            {"cors Installed But Still Getting CORS Error in Browser?"}
          </SectionHeading>
          <Prose>
            {
              "If you installed cors and the module error is gone but you still see CORS policy errors in the browser console, the issue is configuration — not installation. Check these:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Problem"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "cors() placed after routes",
                    "Move app.use(cors()) before all routes",
                  ],
                  [
                    "Wrong origin URL — http vs https",
                    "Match exactly: http://localhost:3000 not https://localhost:3000",
                  ],
                  [
                    "Port mismatch",
                    "Frontend on :3000, backend on :5000 — specify origin: 'http://localhost:3000'",
                  ],
                  [
                    "credentials: true with origin: '*'",
                    "Must use exact URL with credentials — not wildcard",
                  ],
                  [
                    "Preflight OPTIONS failing",
                    "Add app.options('*', cors()) before app.use(cors())",
                  ],
                ].map(([problem, fix]) => (
                  <tr
                    key={problem}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 text-red-600 text-sm font-mono text-xs">
                      {problem}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Add cors to package.json with npm install cors",
              "Apply cors middleware before all route definitions",
              "Always specify exact origins in production — never use wildcard '*' with credentials",
              "Store allowed origins in environment variables",
              "Add app.options('*', cors()) to handle preflight requests",
              "Commit package.json so npm install recreates cors for teammates",
            ]}
          />

          {/* Summary */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Reference — cors Configuration Patterns"}
            </h2>
            <div className="space-y-4">
              {[
                { label: "Development — allow all", code: "app.use(cors())" },
                {
                  label: "Allow single origin",
                  code: "app.use(cors({ origin: 'http://localhost:3000' }))",
                },
                {
                  label: "Allow multiple origins",
                  code: "app.use(cors({ origin: ['http://localhost:3000', 'https://app.com'] }))",
                },
                {
                  label: "With cookies/credentials",
                  code: "app.use(cors({ origin: 'http://localhost:3000', credentials: true }))",
                },
                {
                  label: "Handle preflight",
                  code: "app.options('*', cors()); app.use(cors({...}))",
                },
              ].map(({ label, code }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500 text-xs w-44 flex-shrink-0">
                    {label}
                  </span>
                  <code className="flex-1 bg-slate-900 text-green-400 font-mono text-xs px-3 py-2 rounded-lg">
                    {code}
                  </code>
                </div>
              ))}
            </div>
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
              {"We Build Production-Grade Node.js & Express APIs"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Struggling with CORS or API configuration in production? We can help."
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
