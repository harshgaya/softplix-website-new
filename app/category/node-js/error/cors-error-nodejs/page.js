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
  title: "CORS Error in Node.js — Fixed [Complete Guide 2026]",
  description:
    "Fix CORS error in Node.js and Express. Configure cors middleware, allow specific origins, fix preflight requests, enable credentials for cookies, and fix CORS policy blocked request errors in browser.",
  keywords:
    "cors error nodejs, cors policy blocked request fix, access control allow origin nodejs, express cors fix 2026, nodejs cors blocked",
  alternates: {
    canonical: "https://softplix.com/category/node-js/error/cors-error-nodejs",
  },
  openGraph: {
    title: "CORS Error in Node.js — Fixed [Complete Guide 2026]",
    description:
      "Fix CORS error in Node.js and Express — origins, credentials, preflight, production config.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/cors-error-nodejs",
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
          {"Browser / Terminal Error"}
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
function CL({ items }) {
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
  { label: "What is a CORS error?", href: "#what" },
  { label: "Fix 1 — Install and configure cors middleware", href: "#fix-1" },
  { label: "Fix 2 — Allow specific origins", href: "#fix-2" },
  { label: "Fix 3 — CORS with credentials (cookies/auth)", href: "#fix-3" },
  { label: "Fix 4 — Handle preflight OPTIONS requests", href: "#fix-4" },
  { label: "Fix 5 — CORS in Next.js API routes", href: "#fix-5" },
  { label: "Fix 6 — CORS proxy for development", href: "#fix-6" },
  { label: "Fix 7 — nginx CORS headers", href: "#fix-7" },
  { label: "CORS error in browser but works in Postman", href: "#postman" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is a CORS error in Node.js?",
    a: "CORS (Cross-Origin Resource Sharing) errors happen when your frontend (on one origin/port) calls your API (on another origin/port) without the server sending the correct Access-Control-Allow-Origin header. Browsers block the response for security. It is always a server-side fix.",
  },
  {
    q: "How do I fix CORS error in Express?",
    a: "Install cors: npm install cors. Then: const cors = require('cors'); app.use(cors({ origin: 'http://localhost:3000' })) before your routes.",
  },
  {
    q: "CORS error with credentials — how to fix?",
    a: "Set credentials: true in cors config AND specify an exact origin: app.use(cors({ origin: 'http://localhost:3000', credentials: true })). In frontend add credentials: 'include' to fetch.",
  },
  {
    q: "CORS works in Postman but not browser — why?",
    a: "Postman does not enforce CORS — only browsers do. If it works in Postman but not browser, your server is missing the Access-Control-Allow-Origin header. Add the cors middleware to Express.",
  },
  {
    q: "How to allow all origins in Express?",
    a: "app.use(cors()) allows all origins. Only use this in development. In production always specify exact origins to prevent unauthorized access.",
  },
  {
    q: "Can I fix CORS from the frontend?",
    a: "No. CORS is enforced by the browser based on headers from the server. The server must send the correct Access-Control-Allow-Origin header. You can use a dev proxy but the production server must be properly configured.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "CORS Error in Node.js — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/cors-error-nodejs",
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
    title: "Fix: Axios network error Node.js",
    href: "axios-network-error-nodejs",
    time: "5 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "6 min read",
  },
  {
    tag: "Express",
    title: "Fix: Express session not working",
    href: "express-session-not-working",
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
            <Link href="/" className="hover:text-indigo-600">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link href="/blog" className="hover:text-indigo-600">
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"CORS Error Node.js"}</span>
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
              {"CORS Error in Node.js"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {
                "Also covers: CORS policy blocked request · Access-Control-Allow-Origin missing · Preflight OPTIONS errors"
              }
            </p>
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
                {"Node.js · Express · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Install cors and add it before your routes:"}
            </p>
            <CodeBlock title="terminal">{"npm install cors"}</CodeBlock>
            <CodeBlock title="server.js">{`const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000' }))  // before routes`}</CodeBlock>
            <p className="text-sm text-green-700">
              {"For development only — allow all origins: app.use(cors())"}
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

          <SH id="what">{"What Is a CORS Error?"}</SH>
          <ErrorBlock>{`Access to fetch at 'http://localhost:5000/api/data'
from origin 'http://localhost:3000' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.`}</ErrorBlock>
          <P>
            {
              "CORS (Cross-Origin Resource Sharing) is a browser security feature. When your frontend (running at one origin) makes a request to your API (running at another origin), the browser checks whether the server explicitly allows it. If the server does not respond with the correct "
            }
            <IC>{"Access-Control-Allow-Origin"}</IC>
            {" header, the browser blocks the response."}
          </P>
          <P>
            {"CORS is "}
            <strong>{"always a server-side fix"}</strong>
            {
              ". The server must send the correct headers. You cannot fix it from the frontend — you can only use a dev proxy as a workaround."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error contains"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "No 'Access-Control-Allow-Origin' header",
                    "Add cors middleware (#fix-1)",
                  ],
                  [
                    "Response to preflight doesn't pass",
                    "Handle OPTIONS requests (#fix-4)",
                  ],
                  [
                    "Wildcard '*' not working with credentials",
                    "Use exact origin with credentials (#fix-3)",
                  ],
                  [
                    "CORS error only in browser, not Postman",
                    "Postman doesn't enforce CORS — add middleware (#fix-1)",
                  ],
                ].map(([e, f]) => (
                  <tr key={e} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {e}
                    </td>
                    <td className="px-5 py-3 text-indigo-600 font-semibold text-sm">
                      {f}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Install and Configure cors Middleware"
            time="2 min"
            tag="Complete working setup"
          >
            <CodeBlock title="terminal">{"npm install cors"}</CodeBlock>
            <CodeBlock title="server.js">{`const express = require('express')
const cors = require('cors')
const app = express()

// Development — allow all origins
app.use(cors())

// Or — allow specific origin (recommended)
app.use(cors({ origin: 'http://localhost:3000' }))

// MUST be before all routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS working' })
})

app.listen(5000)`}</CodeBlock>
            <TipBox>
              {
                "cors() middleware must go BEFORE your route definitions. If placed after, routes defined above will not have CORS headers."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Allow Specific Origins"
            time="2 min"
            tag="Production config — multiple origins"
          >
            <CodeBlock title="server.js">{`// Single origin
app.use(cors({ origin: 'https://yourapp.com' }))

// Multiple origins
app.use(cors({
  origin: ['https://yourapp.com', 'https://www.yourapp.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Dynamic origin from environment variable
const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000']
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))`}</CodeBlock>
            <WarnBox>
              {
                "Never use origin: '*' in production — it allows any website to call your API. Always specify exact allowed origins."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="3"
            title="CORS with Credentials (Cookies / Auth Headers)"
            time="2 min"
            tag="For cookie-based sessions or Authorization headers"
          >
            <P>
              {
                "When your frontend sends cookies, session tokens, or Authorization headers cross-origin, you need "
              }
              <IC>{"credentials: true"}</IC>
              {" on both sides."}
            </P>
            <CodeBlock title="server.js">{`app.use(cors({
  origin: 'http://localhost:3000',  // MUST be exact — not '*'
  credentials: true,                 // allow cookies and auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))`}</CodeBlock>
            <CodeBlock title="Frontend — fetch">{`fetch('http://localhost:5000/api/profile', {
  credentials: 'include',   // send cookies with request
  headers: { 'Authorization': 'Bearer ' + token }
})`}</CodeBlock>
            <CodeBlock title="Frontend — Axios">{`axios.defaults.withCredentials = true
// or per-request:
axios.get('/api/profile', { withCredentials: true })`}</CodeBlock>
            <WarnBox>
              {
                "credentials: true + origin: '*' is invalid. Browsers reject it. You must specify an exact URL."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Handle Preflight OPTIONS Requests"
            time="2 min"
            tag="CORS error on POST, PUT, DELETE, or custom headers"
          >
            <P>
              {
                "Before sending a POST/PUT/DELETE or a request with custom headers, browsers send an OPTIONS 'preflight' request to check if the server allows it. Your server must handle OPTIONS."
              }
            </P>
            <CodeBlock title="server.js">{`// Handle all OPTIONS preflight requests
app.options('*', cors())

// Then apply cors to all routes
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

// OR — manual headers if not using cors package
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.header('Access-Control-Allow-Credentials', 'true')
  if (req.method === 'OPTIONS') return res.status(200).end()
  next()
})`}</CodeBlock>
            <TipBox>
              {
                "app.options('*', cors()) must come BEFORE app.use(cors()) to handle preflight for all routes."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="CORS in Next.js API Routes"
            time="2 min"
            tag="Next.js backend — App Router and Pages Router"
          >
            <H3>{"App Router (Next.js 13+)"}</H3>
            <CodeBlock title="app/api/data/route.js">{`export async function GET(request) {
  return new Response(JSON.stringify({ data: 'hello' }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  })
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}`}</CodeBlock>
            <H3>{"Pages Router (next.config.js)"}</H3>
            <CodeBlock title="next.config.js">{`module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://yourfrontend.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Use a Dev Proxy (Development Only)"
            time="3 min"
            tag="React / Vite — avoid CORS in development"
          >
            <P>
              {
                "In development, you can proxy API requests through your frontend dev server so they appear same-origin — eliminating CORS entirely for local development."
              }
            </P>
            <H3>{"Create React App"}</H3>
            <CodeBlock title="package.json">{`{ "proxy": "http://localhost:5000" }
// Now: fetch('/api/data') proxies to http://localhost:5000/api/data`}</CodeBlock>
            <H3>{"Vite"}</H3>
            <CodeBlock title="vite.config.js">{`export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
}`}</CodeBlock>
            <WarnBox>
              {
                "Dev proxies only work in development. Your production server must have proper CORS headers configured."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="7"
            title="nginx CORS Headers"
            time="5 min"
            tag="Production nginx config"
          >
            <CodeBlock title="nginx.conf">{`server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        # CORS headers
        add_header 'Access-Control-Allow-Origin' 'https://yourfrontend.com' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;

        # Handle preflight
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Max-Age' 86400;
            return 204;
        }

        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}`}</CodeBlock>
          </FixCard>

          <SH id="postman">
            {"CORS Error in Browser but Works in Postman — Why?"}
          </SH>
          <P>
            {
              "Postman does not enforce CORS — it sends requests directly without a browser's security checks. CORS is a browser-only restriction. If your API works in Postman but fails in the browser, the fix is always adding CORS headers to your Express server."
            }
          </P>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Client"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Enforces CORS?"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Browser (Chrome, Firefox, Safari)",
                    "✅ Yes — blocks responses without CORS headers",
                  ],
                  ["Postman", "❌ No — bypasses CORS checks"],
                  ["curl", "❌ No — command line, no browser security"],
                  [
                    "Server-to-server (Node fetch)",
                    "❌ No — CORS is browser-only",
                  ],
                  ["Mobile app (React Native)", "Depends on WebView usage"],
                ].map(([c, e]) => (
                  <tr key={c} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm">
                      {c}
                    </td>
                    <td className="px-5 py-3 text-sm">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SH id="prevention">{"How to Prevent CORS Errors"}</SH>
          <CL
            items={[
              "Always add cors middleware before routes in Express",
              "Use environment variables for allowed origins",
              "Add app.options('*', cors()) to handle preflight",
              "Never use origin: '*' with credentials: true",
              "Test CORS config from actual browser — not just Postman",
              "In development, use a proxy (Vite, CRA) to avoid CORS entirely",
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
              {"We Build Production-Grade Node.js APIs"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Node.js applications. Dealing with CORS, API security, or backend architecture? We can help."
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
