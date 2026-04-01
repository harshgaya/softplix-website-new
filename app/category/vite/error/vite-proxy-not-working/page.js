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
  title: "Vite Proxy Not Working — API Requests Failing [Fixed 2026]",
  description:
    "Fix Vite dev server proxy not working — 404, CORS errors, and API requests not being forwarded. Covers server.proxy config, rewrite, changeOrigin, secure, and cookie handling.",
  keywords:
    "vite proxy not working, vite server proxy 404, vite proxy CORS error 2026, vite proxy rewrite path, vite proxy changeOrigin cookie",
  alternates: {
    canonical:
      "https://softplix.com/category/vite/error/vite-proxy-not-working",
  },
  openGraph: {
    title: "Vite Proxy Not Working — Fixed [2026]",
    description:
      "Fix Vite proxy — 404, CORS, rewrite, changeOrigin, secure, cookie forwarding.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-proxy-not-working",
  },
};

const TOC = [
  { label: "How Vite proxy works", href: "#how" },
  { label: "Fix 1 — Correct server.proxy configuration", href: "#fix-1" },
  { label: "Fix 2 — Use rewrite to strip the /api prefix", href: "#fix-2" },
  { label: "Fix 3 — Fix CORS with changeOrigin", href: "#fix-3" },
  { label: "Fix 4 — Fix HTTPS backend with secure: false", href: "#fix-4" },
  { label: "Fix 5 — Forward cookies through the proxy", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How does the Vite dev server proxy work?",
    a: "Vite's proxy intercepts requests from your frontend to paths matching the proxy key (e.g. /api) and forwards them to your backend server. The browser sees requests going to localhost:5173/api — the proxy silently rewrites them to your backend (e.g. localhost:3000/api). This solves CORS in development without changing your backend.",
  },
  {
    q: "Why am I getting 404 when using Vite proxy?",
    a: "A 404 from the proxy means either: the proxy path doesn't match your request URL, the rewrite is stripping too much of the path, or your backend doesn't have a route for the proxied URL. Check that your fetch('/api/users') URL matches the proxy key '/api' and that your backend has GET /api/users defined.",
  },
  {
    q: "What does changeOrigin do in Vite proxy?",
    a: "changeOrigin: true sets the Host header of the proxied request to match the target host instead of localhost. Many APIs and backends validate the Host header for security. Without changeOrigin, the request reaches your backend with Host: localhost:5173 which may be rejected. Always set changeOrigin: true when proxying to a different host.",
  },
  {
    q: "Why do I still get CORS errors even with Vite proxy configured?",
    a: "If you're still getting CORS errors, the request is not going through the proxy. Check: the fetch URL starts with /api (relative, not absolute), you're running the Vite dev server (not production build), and the proxy key in vite.config.ts exactly matches the URL prefix. Absolute URLs like http://api.example.com/users bypass the proxy entirely.",
  },
  {
    q: "Does Vite proxy work in production?",
    a: "No. Vite proxy only runs during development with the Vite dev server. In production, your built assets are served statically — there is no Vite process. For production, configure your web server (Nginx, Caddy) or cloud platform (Vercel rewrites, Railway proxy) to forward API requests to your backend.",
  },
  {
    q: "How do I proxy WebSocket connections in Vite?",
    a: "Add ws: true to your proxy config for the path that serves WebSocket connections. For example: proxy: { '/ws': { target: 'ws://localhost:3001', ws: true } }. This proxies both HTTP upgrades and WebSocket frames through the Vite dev server.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite Proxy Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-proxy-not-working",
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
            tags={["Vite", "Proxy", "Error Fix"]}
            title={"Vite Proxy Not Working"}
            subtitle={"— API Requests Failing [Fixed 2026]"}
            sub={
              "Also covers: correct proxy config · path rewrite · changeOrigin · HTTPS backend · cookie forwarding · WebSocket proxy"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Vite 5/6 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`404 Not Found — proxy path mismatch or wrong rewrite
CORS Error — changeOrigin not set or request not going through proxy
ECONNREFUSED — backend server not running on the target port`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Complete proxy config"}
            </p>
            <CodeBlock title="vite.config.ts">{`server: {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How Vite Proxy Works"}</SH>
          <P>
            {
              "The Vite dev server acts as a reverse proxy for paths you configure. When your frontend fetches "
            }
            <IC>{"/api/users"}</IC>
            {
              ", the Vite server intercepts the request and forwards it to your backend target — completely transparent to the browser, with no CORS headers needed."
            }
          </P>

          <FixCard
            number="1"
            title="Correct server.proxy Configuration"
            time="3 min"
            tag="Proxy silently not matching or wrong target port"
          >
            <CodeBlock title="vite.config.ts — proxy patterns">{`import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Simple — forward /api/* to backend on port 3000
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },

      // Multiple proxy targets
      "/auth": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },

      // WebSocket proxy
      "/ws": {
        target: "ws://localhost:3000",
        ws: true,
      },
    },
  },
})

// Frontend fetch — use relative paths (no http://localhost:3000)
// ✅ fetch("/api/users")           → proxied to http://localhost:3000/api/users
// ❌ fetch("http://localhost:3000/api/users")  → bypasses proxy, CORS error`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Use rewrite to Strip the /api Prefix"
            time="2 min"
            tag="Backend has /users route but you fetch /api/users"
          >
            <P>
              {"If your backend routes are "}
              <IC>{"/users"}</IC>
              {" but your frontend fetches "}
              <IC>{"/api/users"}</IC>
              {", use "}
              <IC>{"rewrite"}</IC>
              {" to strip the prefix before forwarding."}
            </P>
            <CodeBlock title="rewrite — strip prefix before forwarding">{`proxy: {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,
    // ✅ Strips /api prefix: /api/users → /users
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
}

// Without rewrite:
// fetch("/api/users") → backend receives GET /api/users
// Backend must have route: app.get("/api/users", ...)

// With rewrite:
// fetch("/api/users") → backend receives GET /users
// Backend only needs: app.get("/users", ...)

// Multiple prefix strips:
proxy: {
  "/api/v1": {
    target: "http://localhost:3000",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/v1/, ""),
    // /api/v1/users → /users
  },
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix CORS with changeOrigin"
            time="2 min"
            tag="Still getting CORS error even with proxy configured"
          >
            <CodeBlock title="changeOrigin and CORS debugging">{`// changeOrigin: true — sets Host header to match target host
// Without it: Host: localhost:5173 (may be rejected by backend)
// With it:    Host: localhost:3000 (matches target)

proxy: {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,    // ← always include this
  },
}

// If STILL getting CORS errors, the request is bypassing the proxy:
// 1. Check the URL is relative: fetch("/api/users") ✅
//    Not absolute: fetch("http://localhost:3000/api/users") ❌

// 2. Check Network tab in DevTools:
//    Request URL should be: http://localhost:5173/api/users (through Vite)
//    Not: http://localhost:3000/api/users (direct — bypasses proxy)

// 3. Enable proxy logging to confirm it's matching:
proxy: {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,
    configure: (proxy) => {
      proxy.on("proxyReq", (req) => {
        console.log("[Proxy]", req.method, req.path)  // confirm proxy is firing
      })
    },
  },
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix HTTPS Backend with secure: false"
            time="2 min"
            tag="Proxy errors with self-signed certificate on backend"
          >
            <ErrorBlock>{`Error: unable to verify the first certificate
DEPTH_ZERO_SELF_SIGNED_CERT`}</ErrorBlock>
            <CodeBlock title="Disable SSL verification for local HTTPS backends">{`proxy: {
  "/api": {
    target: "https://localhost:3000",   // HTTPS backend
    changeOrigin: true,
    secure: false,    // ← disable SSL certificate verification
    // Only use secure: false for local dev — never in production
  },
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Forward Cookies Through the Proxy"
            time="3 min"
            tag="Session cookies not sent — authentication fails through proxy"
          >
            <CodeBlock title="Cookie forwarding and credentials">{`// Frontend — ensure credentials are included in fetch
fetch("/api/profile", {
  credentials: "include",    // ← sends cookies with the request
})

// vite.config.ts — configure cookie handling
proxy: {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,

    // Rewrite Set-Cookie domain from backend host to localhost
    cookieDomainRewrite: "localhost",

    // If backend sets secure cookies on HTTP:
    // configure: (proxy) => {
    //   proxy.on("proxyRes", (res) => {
    //     const cookies = res.headers["set-cookie"]
    //     if (cookies) {
    //       res.headers["set-cookie"] = cookies.map(c =>
    //         c.replace(/; Secure/i, "").replace(/; SameSite=None/i, "")
    //       )
    //     }
    //   })
    // },
  },
}`}</CodeBlock>
            <TipBox>
              {
                "For session-based authentication in development, ensure your backend sets cookies with SameSite=Lax or SameSite=None; Secure and your frontend fetch uses credentials: 'include'. The proxy forwards both the request cookies and the response Set-Cookie headers transparently."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always use relative paths for API fetches (/api/users, not http://localhost:3000/api/users) — absolute URLs bypass the proxy",
              "Always set changeOrigin: true — it prevents Host header mismatches that cause backend rejections",
              "Use rewrite when your backend routes don't include the /api prefix",
              "Set secure: false only for local dev with self-signed HTTPS certificates",
              "Enable proxy configure logging during debugging to confirm which requests are being proxied",
              "Remember Vite proxy is dev-only — configure Nginx or cloud rewrites for production",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Vite",
                title: "Fix: Vite HMR not working",
                href: "/category/vite/error/vite-hmr-not-working",
                time: "6 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite CORS error",
                href: "/category/vite/error/vite-cors-error",
                time: "5 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite env variables not working",
                href: "/category/vite/error/vite-env-variables-not-working",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Configure Vite for Production"}
            desc={
              "Softplix engineers set up Vite proxy, build optimisation, and environment configuration for production React and Vue apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
