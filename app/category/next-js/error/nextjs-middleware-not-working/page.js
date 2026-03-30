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
  title: "Next.js Middleware Not Working — Fixed [2026]",
  description:
    "Fix Next.js middleware not working. Covers wrong file location, matcher config, missing NextResponse.next(), auth redirects, and Edge Runtime limitations.",
  keywords:
    "nextjs middleware not working, next.js middleware not running, middleware matcher config nextjs, nextjs middleware redirect not working 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-middleware-not-working",
  },
  openGraph: {
    title: "Next.js Middleware Not Working — Fixed [2026]",
    description:
      "Fix Next.js middleware — file location, matcher, redirects, Edge Runtime.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-middleware-not-working",
  },
};

const TOC = [
  { label: "Why Next.js middleware silently does nothing", href: "#why" },
  { label: "Fix 1 — Check middleware.ts file location", href: "#fix-1" },
  { label: "Fix 2 — Fix the matcher configuration", href: "#fix-2" },
  { label: "Fix 3 — Always return a response", href: "#fix-3" },
  { label: "Fix 4 — Fix auth redirects in middleware", href: "#fix-4" },
  { label: "Fix 5 — Edge Runtime limitations", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Where should middleware.ts be placed in Next.js?",
    a: "middleware.ts must be at the root of your project — the same level as your package.json and next.config.ts. It should NOT be inside the /app or /pages directory. This is the most common mistake causing middleware to silently not run.",
  },
  {
    q: "Why is my Next.js middleware not running on any routes?",
    a: "The two most common causes are: 1) middleware.ts is in the wrong location (must be at project root, not inside /app), and 2) the matcher config excludes all routes. Check both before debugging further.",
  },
  {
    q: "How do I make middleware run on all routes?",
    a: "Export a config object with matcher: ['/(.*)']. This matches every path. To exclude static files and API routes, use a negative lookahead: matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'].",
  },
  {
    q: "Can I use Node.js APIs in Next.js middleware?",
    a: "No. Middleware runs in the Edge Runtime, which is a lightweight JavaScript environment that does not support Node.js APIs like fs, path, crypto, or Buffer. Use only Web APIs (Request, Response, Headers, URL) and the next/server utilities.",
  },
  {
    q: "Why does my middleware redirect loop infinitely?",
    a: "An infinite redirect loop happens when the redirect target URL also matches the middleware matcher, causing the middleware to redirect again. Exclude the login/redirect page from your matcher, or check the current URL inside the middleware before redirecting.",
  },
  {
    q: "Can Next.js middleware read request body?",
    a: "No. Middleware cannot read the request body. It only has access to request headers, cookies, and the URL. For body-dependent logic (like validating a POST payload), use an API route or Server Action instead.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Middleware Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-middleware-not-working",
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
            tags={["Next.js", "Middleware", "Error Fix"]}
            title={"Next.js Middleware Not Working"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: file location · matcher config · Edge Runtime · auth redirects · infinite redirect loops"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js 14/15 · Edge Runtime"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Middleware silently does nothing — no redirect, no log
// OR:
Error: Middleware is not supported with the "nodejs" runtime.
// OR:
// Infinite redirect loop on protected routes`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct middleware.ts location & structure"}
            </p>
            <CodeBlock title="middleware.ts  ← must be at project root">{`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Your logic here
  return NextResponse.next()  // ← always return something
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Next.js Middleware Silently Does Nothing"}</SH>
          <P>
            {
              "Next.js middleware is powerful but has strict requirements. The most common reason it silently does nothing is the file being in the wrong location. The second most common reason is a "
            }
            <IC>{"matcher"}</IC>
            {
              " config that accidentally excludes all routes. Both cause middleware to be completely ignored with no error message."
            }
          </P>

          <FixCard
            number="1"
            title="Check middleware.ts File Location"
            time="1 min"
            tag="Most common cause — wrong directory"
          >
            <CodeBlock title="Correct project structure">{`my-nextjs-app/
├── middleware.ts        ← ✅ CORRECT — project root
├── next.config.ts
├── package.json
├── app/
│   ├── layout.tsx
│   └── page.tsx
└── ...

# ❌ WRONG locations:
app/middleware.ts        ← inside app/ — will not run
src/middleware.ts        ← inside src/ — only works if using src/ layout
pages/middleware.ts      ← inside pages/ — will not run`}</CodeBlock>
            <TipBox>
              {
                "If you use a src/ directory layout (src/app/ instead of app/), place middleware at src/middleware.ts — not at the project root."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix the Matcher Configuration"
            time="2 min"
            tag="Middleware runs but not on expected routes"
          >
            <P>
              {"The "}
              <IC>{"matcher"}</IC>
              {" in the exported "}
              <IC>{"config"}</IC>
              {
                " controls which routes trigger the middleware. An overly restrictive matcher silently skips routes."
              }
            </P>
            <CodeBlock title="middleware.ts — matcher examples">{`export const config = {
  // ✅ Run on all routes
  matcher: ["/(.*)" ],

  // ✅ Run on all routes EXCEPT static files and API routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],

  // ✅ Run only on /dashboard and everything under it
  matcher: ["/dashboard/:path*"],

  // ✅ Multiple protected sections
  matcher: ["/dashboard/:path*", "/admin/:path*", "/account/:path*"],

  // ❌ Missing leading slash — won't match
  matcher: ["dashboard/:path*"],
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Always Return a Response"
            time="1 min"
            tag="Middleware that returns undefined causes errors"
          >
            <P>
              {"Every code path in your middleware must return a "}
              <IC>{"NextResponse"}</IC>
              {". If the function returns "}
              <IC>{"undefined"}</IC>
              {" (e.g., a missing else branch), Next.js will throw an error."}
            </P>
            <CodeBlock title="middleware.ts — always return">{`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ✅ Always return — every branch covered
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin_token")?.value
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()  // ← fallthrough — always return this
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Auth Redirects and Infinite Loops"
            time="3 min"
            tag="Protected routes redirecting to login and back"
          >
            <P>
              {
                "An infinite redirect loop happens when the login page itself matches the middleware matcher and triggers another redirect. Always exclude the login page from the protected matcher."
              }
            </P>
            <CodeBlock title="middleware.ts — auth with no infinite loop">{`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PROTECTED_PATHS = ["/dashboard", "/account", "/admin"]
const PUBLIC_PATHS = ["/login", "/register", "/api/auth"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth_token")?.value

  const isProtected = PROTECTED_PATHS.some(p => pathname.startsWith(p))
  const isPublic = PUBLIC_PATHS.some(p => pathname.startsWith(p))

  // Redirect unauthenticated users away from protected routes
  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)  // preserve destination
    return NextResponse.redirect(loginUrl)
  }

  // Redirect authenticated users away from login page
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Edge Runtime Limitations"
            time="3 min"
            tag="Node.js APIs crashing middleware"
          >
            <P>
              {
                "Middleware runs in the Edge Runtime — not Node.js. You cannot use "
              }
              <IC>{"fs"}</IC>
              {", "}
              <IC>{"path"}</IC>
              {", "}
              <IC>{"crypto"}</IC>
              {", "}
              <IC>{"jsonwebtoken"}</IC>
              {
                ", or any Node.js-specific library. Use Web API alternatives instead."
              }
            </P>
            <CodeBlock title="middleware.ts — Edge-compatible JWT verification">{`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// ❌ jsonwebtoken uses Node.js crypto — not Edge compatible
// import jwt from "jsonwebtoken"

// ✅ Use jose — Edge-compatible JWT library
import { jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    await jwtVerify(token, SECRET)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}`}</CodeBlock>
            <WarnBox>
              {
                "Edge-compatible libraries: jose (JWT), bcryptjs (avoid — too slow on Edge), @supabase/ssr (auth). Incompatible: jsonwebtoken, bcrypt, mongoose, prisma, fs, path."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Place middleware.ts at the project root (or src/ root if using src/ layout) — never inside /app or /pages",
              "Always export a config with an explicit matcher — never rely on the default behaviour",
              "Exclude static assets from the matcher: _next/static, _next/image, favicon.ico",
              "Every code path must return a NextResponse — add NextResponse.next() as the final fallthrough",
              "Exclude the login/public pages from protected matchers to prevent infinite redirect loops",
              "Use Edge-compatible libraries only — jose for JWT, Web Crypto API for hashing",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js dynamic server usage error",
                href: "/category/next-js/error/nextjs-dynamic-server-usage-error",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js cookies() in Server Component",
                href: "/category/next-js/error/nextjs-cookies-server-component",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js build failing on Vercel",
                href: "/category/next-js/error/nextjs-build-failing-vercel",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Secure Next.js Applications"}
            desc={
              "Softplix engineers build production Next.js apps with robust auth middleware, protected routes, and Edge-optimised logic. Need help? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
