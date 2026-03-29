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
} from "react-icons/fa6";

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
        <span className="text-xs font-mono text-red-300">{"Error"}</span>
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
function TOCBlock({ items }) {
  return (
    <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <FaBookOpen className="text-indigo-600 text-sm" />
        <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
          {"Table of Contents"}
        </span>
      </div>
      <ol className="space-y-2">
        {items.map(({ label, href }, i) => (
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
function FAQBlock({ items }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
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
  );
}
function RelatedBlock({ items }) {
  return (
    <aside className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-5">
        {"Related Articles"}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map(({ tag, title, href, time }) => (
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
function CTA({ title, desc }) {
  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
        {"Need Expert Help?"}
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        {"Talk to an Engineer"}
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
function Header({ tags, title, subtitle, sub, date, read, tech }) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tags.map((t) => (
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
        {title}
        <span className="block text-indigo-600">{subtitle}</span>
      </h1>
      {sub && <p className="text-sm text-gray-500 mb-4">{sub}</p>}
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
          <FaCalendarDays className="text-xs" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <FaClock className="text-xs" />
          {read}
        </span>
        <span className="flex items-center gap-1.5">
          <FaCode className="text-xs" />
          {tech}
        </span>
      </div>
    </header>
  );
}

export const metadata = {
  title: "Vite CORS Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Vite CORS error: Access to fetch blocked by CORS policy. Covers Vite dev server proxy setup, backend CORS headers, credentials, and production CORS configuration.",
  keywords:
    "vite cors error fix, vite cors blocked, access to fetch blocked by cors policy vite, vite proxy cors fix 2026, vite cors development",
  alternates: {
    canonical: "https://softplix.com/category/vite/error/vite-cors-error",
  },
  openGraph: {
    title: "Vite CORS Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Vite CORS errors — dev server proxy, backend headers, credentials, production setup.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-cors-error",
  },
};

const TOC = [
  { label: "Why CORS errors happen in Vite projects", href: "#why-cors" },
  { label: "Fix 1 — Use Vite's dev server proxy (best fix)", href: "#fix-1" },
  { label: "Fix 2 — Add CORS headers to your backend", href: "#fix-2" },
  {
    label: "Fix 3 — Fix CORS with credentials (cookies / auth)",
    href: "#fix-3",
  },
  { label: "Fix 4 — Fix CORS errors in production", href: "#fix-4" },
  { label: "Fix 5 — Wildcard CORS misconfiguration", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why am I getting a CORS error in my Vite app?",
    a: "CORS errors happen when your Vite dev server (localhost:5173) makes a request to a backend on a different origin — for example, localhost:3000 or an external API. The browser blocks cross-origin requests unless the server explicitly allows them via CORS headers. This is a browser security policy, not a Vite bug.",
  },
  {
    q: "How do I fix CORS in Vite development?",
    a: "The cleanest development fix is to configure Vite's built-in proxy in vite.config.ts. The proxy makes requests from Vite's server (not the browser), so CORS restrictions don't apply. Set server.proxy to forward /api requests to your backend.",
  },
  {
    q: "Does Vite have a built-in CORS fix?",
    a: "Yes. Vite's server.proxy option proxies API requests through the Vite dev server itself, bypassing browser CORS restrictions entirely. This is the recommended solution for development. For production, you need proper CORS headers on your backend or a reverse proxy.",
  },
  {
    q: "Why does my CORS error say 'No Access-Control-Allow-Origin header'?",
    a: "Your backend is not sending the Access-Control-Allow-Origin header. You need to configure your backend server (Express, Fastify, Django, etc.) to include this header. For development, the Vite proxy avoids needing this entirely.",
  },
  {
    q: "CORS works without credentials but fails with cookies — why?",
    a: "When you send cookies or use credentials: 'include' in fetch, the server must respond with Access-Control-Allow-Credentials: true AND specify an exact origin (not wildcard *) in Access-Control-Allow-Origin. Using * with credentials is forbidden by the browser.",
  },
  {
    q: "How do I fix CORS in Vite production build?",
    a: "In production, the Vite proxy does not exist. You need either: 1) Configure CORS headers on your backend to allow your production domain, or 2) Set up a reverse proxy (Nginx, Vercel rewrites, Netlify redirects) to route API calls through the same origin as your frontend.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite CORS Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-cors-error",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FAQSchema() {
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

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Vite", "CORS", "Error Fix"]}
            title={"Vite CORS Error: Access to Fetch Blocked"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: No Access-Control-Allow-Origin · credentials · proxy setup · production CORS"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Vite · React · Node.js · Express"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`Access to fetch at 'http://localhost:3000/api/users'
from origin 'http://localhost:5173' has been blocked
by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest Fix — Vite Proxy"}
            </p>
            <CodeBlock title="vite.config.ts">{`export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",  // browser never sees the cross-origin request
    },
  },
})`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why-cors">{"Why CORS Errors Happen in Vite Projects"}</SH>
          <P>
            {
              "CORS (Cross-Origin Resource Sharing) is a browser security policy, not a Vite limitation. When your Vite app at "
            }
            <IC>{"localhost:5173"}</IC>
            {" fetches data from a backend at "}
            <IC>{"localhost:3000"}</IC>
            {
              " — even on the same machine — the browser treats them as different origins and blocks the request unless the backend explicitly allows it."
            }
          </P>
          <P>
            {
              "The two ways to fix this are: (1) make the request appear same-origin using Vite's dev server proxy, or (2) configure your backend to send the correct "
            }
            <IC>{"Access-Control-Allow-Origin"}</IC>
            {
              " response headers. The proxy approach is simpler for development and requires no backend changes."
            }
          </P>

          <FixCard
            number="1"
            title="Use Vite's Dev Server Proxy"
            time="3 min"
            tag="Best fix for development — no backend changes needed"
          >
            <P>
              {"Vite's "}
              <IC>{"server.proxy"}</IC>
              {
                " forwards matching requests from the Vite dev server — not the browser — to your backend. Since the request originates from a server (not a browser), CORS restrictions don't apply."
              }
            </P>
            <CodeBlock title="vite.config.ts">{`import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Requests to /api/* are forwarded to localhost:3000/api/*
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // Optional: rewrite the path prefix
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})`}</CodeBlock>
            <CodeBlock title="In your React code — use relative paths">{`// Before (cross-origin — triggers CORS error)
fetch("http://localhost:3000/api/users")

// After (relative path — goes through Vite proxy)
fetch("/api/users")

// With multiple backends:
// proxy: { "/api": "http://localhost:3000", "/auth": "http://localhost:4000" }`}</CodeBlock>
            <TipBox>
              {
                "After changing vite.config.ts, restart the dev server for the proxy to take effect. Hot Module Replacement does not reload vite.config.ts changes."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Add CORS Headers to Your Backend"
            time="4 min"
            tag="Required for production — fix on the server side"
          >
            <P>
              {
                "For production (where the Vite proxy doesn't exist), your backend must send the correct CORS headers. Here's how to configure CORS in the most common Node.js frameworks:"
              }
            </P>
            <CodeBlock title="Express.js — using the cors package">{`npm install cors
npm install --save-dev @types/cors`}</CodeBlock>
            <CodeBlock title="server.ts (Express)">{`import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
  origin: [
    "http://localhost:5173",         // Vite dev
    "https://yourapp.vercel.app",    // Production frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,                 // needed for cookies
}))

app.get("/api/users", (req, res) => {
  res.json({ users: [] })
})

app.listen(3000)`}</CodeBlock>
            <CodeBlock title="Fastify">{`import Fastify from "fastify"
import cors from "@fastify/cors"

const app = Fastify()

await app.register(cors, {
  origin: ["http://localhost:5173", "https://yourapp.com"],
  credentials: true,
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix CORS With Credentials (Cookies / Auth Headers)"
            time="4 min"
            tag="CORS works but fails with credentials: include"
          >
            <P>
              {"If you use "}
              <IC>{"credentials: 'include'"}</IC>
              {
                " in your fetch calls (needed for cookies and session-based auth), both the client and server need additional configuration. Using a wildcard "
              }
              <IC>{"*"}</IC>
              {" for the origin is not allowed when credentials are enabled."}
            </P>
            <CodeBlock title="Frontend — fetch with credentials">{`// Must use credentials: "include" for cookies to be sent
fetch("/api/profile", {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
})`}</CodeBlock>
            <CodeBlock title="Vite proxy — forward credentials">{`// vite.config.ts
server: {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      secure: false,
      configure: (proxy) => {
        proxy.on("proxyReq", (proxyReq) => {
          // Forward cookies through the proxy
          proxyReq.setHeader("origin", "http://localhost:3000")
        })
      },
    },
  },
}`}</CodeBlock>
            <CodeBlock title="Backend — must specify exact origin, not wildcard">{`app.use(cors({
  // ❌ Wrong — wildcard forbidden with credentials
  // origin: "*",

  // ✅ Correct — explicit origin required
  origin: "http://localhost:5173",
  credentials: true,  // Access-Control-Allow-Credentials: true
}))`}</CodeBlock>
            <WarnBox>
              {
                "Never use origin: '*' with credentials: true. The browser will block the request — this is not a bug in Vite or your backend. Always specify an explicit origin when using credentials."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix CORS in Production"
            time="4 min"
            tag="Vite proxy only works in development"
          >
            <P>
              {"The Vite dev server proxy does not run in production ("}
              <IC>{"npm run build"}</IC>
              {
                " produces static files). In production, use a reverse proxy to route API calls through the same origin as your frontend, or configure your backend with the correct CORS headers for your production domain."
              }
            </P>
            <CodeBlock title="Vercel — vercel.json rewrites">{`{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-backend.com/api/:path*"
    }
  ]
}`}</CodeBlock>
            <CodeBlock title="Netlify — netlify.toml redirects">{`[[redirects]]
  from = "/api/*"
  to = "https://your-backend.com/api/:splat"
  status = 200
  force = true`}</CodeBlock>
            <CodeBlock title="Nginx — reverse proxy config">{`server {
  listen 80;
  server_name yourapp.com;

  # Serve Vite static files
  location / {
    root /var/www/dist;
    try_files $uri $uri/ /index.html;
  }

  # Proxy /api to backend — same origin, no CORS needed
  location /api/ {
    proxy_pass http://localhost:3000/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Wildcard CORS Misconfiguration"
            time="2 min"
            tag="Preflight OPTIONS requests failing"
          >
            <P>
              {"If you set "}
              <IC>{"Access-Control-Allow-Origin: *"}</IC>
              {
                " and still see CORS errors, the issue is often a missing response to the browser's "
              }
              <IC>{"OPTIONS"}</IC>
              {
                " preflight request. Your backend must handle OPTIONS explicitly."
              }
            </P>
            <CodeBlock title="Express — handle OPTIONS preflight">{`// Option A: cors() middleware handles OPTIONS automatically
app.use(cors({ origin: "https://yourapp.com" }))

// Option B: manual preflight handler
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://yourapp.com")
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization")
  res.status(204).send()
})`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use relative API paths (/api/...) in your frontend code — never hardcode localhost:3000",
              "Configure Vite's server.proxy for development so the team never hits CORS errors locally",
              "Set up explicit CORS origins in your backend for both development and production domains",
              "Never use Access-Control-Allow-Origin: * with credentials: true — it will be blocked by the browser",
              "Handle OPTIONS preflight requests in your backend — use a CORS middleware library rather than manual headers",
              "Use Nginx or platform rewrites in production to route /api calls through the same origin as your frontend",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Vite",
                title: "Fix: Vite Build Error — Failed to Resolve Import",
                href: "/category/vite/error/vite-build-error-failed-to-resolve-import",
                time: "6 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite Environment Variables Not Working",
                href: "/category/vite/error/vite-env-variables-not-working",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript tsconfig paths not working",
                href: "/category/typescript/error/typescript-tsconfig-paths-not-working",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build & Deploy Vite + React Applications"}
            desc={
              "Softplix engineers build production-ready Vite applications with proper API architecture. Struggling with CORS, deployment, or backend integration? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
