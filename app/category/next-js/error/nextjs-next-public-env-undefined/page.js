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
  FaCircleXmark,
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
  title: "Next.js NEXT_PUBLIC_ Env Variable Undefined — Fixed [2026]",
  description:
    "Fix Next.js NEXT_PUBLIC_ environment variable undefined. Understand server vs client env vars, correct .env file setup, runtime vs build-time values, and Vercel env config.",
  keywords:
    "nextjs next_public env undefined, nextjs environment variable not working, next js env variable undefined fix 2026, process env undefined nextjs",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-next-public-env-undefined",
  },
  openGraph: {
    title: "Next.js NEXT_PUBLIC_ Env Variable Undefined — Fixed [2026]",
    description:
      "Fix NEXT_PUBLIC_ env variables undefined in Next.js — client vs server, build time, Vercel.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-next-public-env-undefined",
  },
};

const TOC7 = [
  { label: "Server vs client env vars in Next.js", href: "#types" },
  {
    label: "Fix 1 — Add NEXT_PUBLIC_ prefix for client components",
    href: "#fix-1",
  },
  { label: "Fix 2 — Correct .env file names", href: "#fix-2" },
  { label: "Fix 3 — Restart server after .env changes", href: "#fix-3" },
  {
    label: "Fix 4 — Set env vars on Vercel and other platforms",
    href: "#fix-4",
  },
  { label: "Fix 5 — Runtime env vars in App Router", href: "#fix-5" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS7 = [
  {
    q: "Why is NEXT_PUBLIC_ env variable undefined in Next.js?",
    a: "If defined correctly in .env.local, a NEXT_PUBLIC_ variable is undefined in the browser when: 1) the dev server was not restarted after adding it, 2) it is missing NEXT_PUBLIC_ prefix (server-only without it), or 3) it is not set in your deployment platform (Vercel/Netlify dashboard).",
  },
  {
    q: "What is the difference between NEXT_PUBLIC_ and regular env vars in Next.js?",
    a: "Variables with NEXT_PUBLIC_ prefix are inlined into the browser JavaScript bundle at build time — any user can see them. Variables without the prefix are only available in server-side code (API routes, Server Components, getServerSideProps). Never put secrets in NEXT_PUBLIC_ variables.",
  },
  {
    q: "Next.js env variable works locally but undefined in production?",
    a: "You need to add the variable to your deployment platform (Vercel, Netlify, Railway etc.). .env.local is in .gitignore and is never deployed. Set environment variables through your platform's dashboard or CLI.",
  },
  {
    q: "Can I use process.env in a Client Component?",
    a: "Only NEXT_PUBLIC_ variables work in Client Components. Regular process.env variables (without the prefix) are server-only and will be undefined in the browser. If you need to pass a server value to a client, pass it as a prop from a Server Component.",
  },
  {
    q: "How do I add env vars to Vercel?",
    a: "Go to your project in the Vercel dashboard → Settings → Environment Variables. Add each variable for Production, Preview, and Development. Or use the CLI: vercel env add MY_VAR. Changes take effect on the next deployment.",
  },
  {
    q: "NEXT_PUBLIC_ variable is undefined after adding to .env.local — why?",
    a: "You must restart the Next.js dev server after changing .env files. The server reads them at startup. Ctrl+C the server and run npm run dev again.",
  },
];

function A7Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js NEXT_PUBLIC_ Env Variable Undefined — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-next-public-env-undefined",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A7FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS7.map(({ q, a }) => ({
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
      <A7Schema />
      <A7FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "Environment", "Error Fix"]}
            title={"Next.js NEXT_PUBLIC_ Env Variable Undefined"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: process.env undefined in Next.js · env var not working in production"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Next.js 13–15 · Vercel"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Next.js Env Variable Rules"}
            </p>
            <CodeBlock title=".env.local">{`# Server-only (NOT visible in browser)
DATABASE_URL=mongodb+srv://...
JWT_SECRET=supersecretkey

# Client-safe (visible in browser bundle — use for public values only)
NEXT_PUBLIC_API_URL=https://api.myapp.com
NEXT_PUBLIC_STRIPE_KEY=pk_live_...`}</CodeBlock>
          </div>

          <TOCBlock items={TOC7} />

          <SH id="types">{"Server vs Client Env Vars in Next.js"}</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Variable"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Available in server?"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Available in browser?"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Use for"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "DATABASE_URL",
                    "✅ Yes",
                    "❌ No",
                    "Database, API keys, secrets",
                  ],
                  [
                    "NEXT_PUBLIC_API_URL",
                    "✅ Yes",
                    "✅ Yes",
                    "Public API endpoints, feature flags",
                  ],
                ].map(([v, s, b, u]) => (
                  <tr key={v} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-indigo-700">
                      {v}
                    </td>
                    <td className="px-4 py-3 text-sm">{s}</td>
                    <td className="px-4 py-3 text-sm">{b}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Add NEXT_PUBLIC_ Prefix for Client Components"
            time="1 min"
            tag="Env var undefined in browser"
          >
            <CodeBlock title=".env.local">{`# ❌ WRONG — no prefix, only available on server
API_URL=https://api.myapp.com

# ✅ CORRECT — NEXT_PUBLIC_ prefix makes it available in browser
NEXT_PUBLIC_API_URL=https://api.myapp.com`}</CodeBlock>
            <CodeBlock title="components/FetchButton.jsx">{`'use client'

// ❌ undefined in browser — no NEXT_PUBLIC_ prefix
const url = process.env.API_URL

// ✅ works in browser
const url = process.env.NEXT_PUBLIC_API_URL`}</CodeBlock>
            <WarnBox>
              {
                "Never put secrets (JWT secrets, database passwords, private API keys) in NEXT_PUBLIC_ variables. They are embedded in your JavaScript bundle and visible to anyone who views your source."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Correct .env File Names"
            time="1 min"
            tag="Wrong filename — not loaded by Next.js"
          >
            <CodeBlock>{`# Next.js loads these files in order (later = higher priority):
.env                # base values — committed to git (no secrets)
.env.local          # local overrides — in .gitignore
.env.development    # development-only
.env.production     # production-only
.env.local          # always loaded, highest priority

# ❌ Wrong names that Next.js does NOT auto-load:
.env.dev
.env.prod
config.env`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Restart Dev Server After .env Changes"
            time="1 min"
            tag="Most overlooked step"
          >
            <CodeBlock title="terminal">{`# Next.js reads .env files only on startup
# After any .env change:
Ctrl+C          # stop the server
npm run dev     # restart — env vars are now loaded`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Set Env Vars on Vercel and Other Platforms"
            time="3 min"
            tag="Works locally but undefined in production"
          >
            <P>
              {"Your "}
              <IC>{".env.local"}</IC>
              {" file is in "}
              <IC>{".gitignore"}</IC>
              {
                " and never deployed. Set production variables through your platform."
              }
            </P>
            <CodeBlock title="Vercel CLI">{`vercel env add NEXT_PUBLIC_API_URL production
vercel env add DATABASE_URL production`}</CodeBlock>
            <CodeBlock title="Or in Vercel Dashboard">{`# Vercel → your project → Settings → Environment Variables
# Add each variable and select which environments it applies to
# (Production / Preview / Development)`}</CodeBlock>
            <CodeBlock title="Other platforms">{`# Netlify: Site settings → Environment variables
# Railway: Project → Variables tab
# Render: Environment → Add environment variable`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Runtime Env Vars in App Router"
            time="3 min"
            tag="Values available at runtime not just build time"
          >
            <P>
              {"NEXT_PUBLIC_ variables are inlined at "}
              <strong>{"build time"}</strong>
              {
                ". If you change them, you must rebuild. For values that change without rebuilding, use runtime configuration."
              }
            </P>
            <CodeBlock title="app/api/config/route.js">{`// Expose runtime config via an API route
export async function GET() {
  return Response.json({
    apiUrl: process.env.API_URL,  // server-only var
    featureFlags: process.env.FEATURE_FLAGS,
  })
}

// In client component — fetch at runtime
const { apiUrl } = await fetch('/api/config').then(r => r.json())`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Add NEXT_PUBLIC_ prefix to any env var accessed in Client Components",
              "Restart dev server after every .env change",
              "Set all env vars in your deployment platform dashboard before deploying",
              "Create .env.example with all key names (no values) for teammates",
              "Never put secrets in NEXT_PUBLIC_ variables — they are public",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS7} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js build failing on Vercel",
                href: "nextjs-build-failing-vercel",
                time: "6 min read",
              },
              {
                tag: "Node.js",
                title: "Fix: dotenv not working in Node.js",
                href: "dotenv-not-working-nodejs",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Image component not working",
                href: "nextjs-image-component-not-working",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade Next.js Apps"}
            desc={
              "Softplix builds full-stack Next.js applications. Need help with environment configuration or Vercel deployment? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
