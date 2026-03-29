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
  title: "Vite Environment Variables Not Working — Fixed [2026]",
  description:
    "Fix Vite environment variables not working. Covers VITE_ prefix requirement, .env file loading order, TypeScript types for import.meta.env, and production build env vars.",
  keywords:
    "vite environment variables not working, vite env variables undefined, import meta env undefined vite, vite env not working 2026, VITE_ prefix fix",
  alternates: {
    canonical:
      "https://softplix.com/category/vite/error/vite-env-variables-not-working",
  },
  openGraph: {
    title: "Vite Environment Variables Not Working — Fixed [2026]",
    description:
      "Fix Vite env vars — VITE_ prefix, .env files, TypeScript types, production builds.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-env-variables-not-working",
  },
};

const TOC = [
  { label: "Why Vite env variables are undefined", href: "#why-undefined" },
  { label: "Fix 1 — Add the VITE_ prefix", href: "#fix-1" },
  { label: "Fix 2 — Create the correct .env file", href: "#fix-2" },
  { label: "Fix 3 — Restart the dev server", href: "#fix-3" },
  { label: "Fix 4 — Add TypeScript types for import.meta.env", href: "#fix-4" },
  { label: "Fix 5 — Fix env variables in production build", href: "#fix-5" },
  { label: "Fix 6 — Use env variables in vite.config.ts", href: "#fix-6" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why are my Vite environment variables undefined?",
    a: "The most common cause is a missing VITE_ prefix. Vite only exposes variables prefixed with VITE_ to your client-side code via import.meta.env. Variables without this prefix are private server-side secrets and are intentionally not included in the browser bundle.",
  },
  {
    q: "How do I access environment variables in Vite?",
    a: "Use import.meta.env.VITE_YOUR_VARIABLE_NAME. This replaces process.env from Create React App. Vite statically replaces these references at build time, so they work in both development and production.",
  },
  {
    q: "What .env files does Vite load?",
    a: "Vite loads .env (all modes), .env.local (all modes, git-ignored), .env.development (dev mode only), .env.production (production mode only), .env.development.local, and .env.production.local. Local files take priority over non-local ones.",
  },
  {
    q: "Do I need to restart the dev server after changing .env?",
    a: "Yes. Vite reads .env files at server startup, not on each request. After adding or changing any .env variable, stop the dev server and run npm run dev again for changes to take effect.",
  },
  {
    q: "How do I add TypeScript types for Vite env variables?",
    a: "Create a file src/vite-env.d.ts and extend the ImportMetaEnv interface: interface ImportMetaEnv { readonly VITE_API_URL: string } — this gives you autocomplete and type safety for all your VITE_ variables.",
  },
  {
    q: "Why do Vite env variables work in dev but not in production?",
    a: "In production, you must set the variables in your deployment platform (Vercel, Netlify, etc.) or pass them at build time. Vite statically inlines VITE_ variables during the build step — so if the variable isn't set when npm run build runs, it will be undefined in the output.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite Environment Variables Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-env-variables-not-working",
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
            tags={["Vite", "Environment Variables", "Error Fix"]}
            title={"Vite Environment Variables Not Working"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: import.meta.env undefined · VITE_ prefix · .env file order · TypeScript types"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Vite · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// In your component:
console.log(import.meta.env.API_URL)
// Output: undefined

// Or TypeScript error:
// Property 'API_URL' does not exist on type 'ImportMeta'`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root Cause — Missing VITE_ Prefix"}
            </p>
            <CodeBlock title=".env">{`# ❌ Wrong — Vite won't expose this to the browser
API_URL=https://api.example.com

# ✅ Correct — VITE_ prefix is required
VITE_API_URL=https://api.example.com`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why-undefined">
            {"Why Vite Environment Variables Are Undefined"}
          </SH>
          <P>
            {
              "Vite exposes environment variables to your client-side code through "
            }
            <IC>{"import.meta.env"}</IC>
            {" — but "}
            <strong>{"only variables prefixed with "}</strong>
            <IC>{"VITE_"}</IC>
            {
              ". This is a deliberate security boundary: non-prefixed variables (like "
            }
            <IC>{"DATABASE_URL"}</IC>
            {" or "}
            <IC>{"SECRET_KEY"}</IC>
            {
              ") are kept private and never bundled into your JavaScript output."
            }
          </P>
          <P>
            {
              "If you are migrating from Create React App, this is the key difference: CRA used "
            }
            <IC>{"REACT_APP_"}</IC>
            {" + "}
            <IC>{"process.env"}</IC>
            {". Vite uses "}
            <IC>{"VITE_"}</IC>
            {" + "}
            <IC>{"import.meta.env"}</IC>
            {"."}
          </P>

          <FixCard
            number="1"
            title="Add the VITE_ Prefix to Every Variable"
            time="1 min"
            tag="Root cause — most common fix"
          >
            <P>
              {
                "Every variable you want accessible in your React/Vue/Svelte code must start with "
              }
              <IC>{"VITE_"}</IC>
              {". Rename the variable in your "}
              <IC>{".env"}</IC>
              {" file and update all references in your code."}
            </P>
            <CodeBlock title=".env">{`# Before (invisible to Vite client code)
API_URL=https://api.example.com
STRIPE_KEY=pk_live_abc123

# After (accessible via import.meta.env)
VITE_API_URL=https://api.example.com
VITE_STRIPE_KEY=pk_live_abc123`}</CodeBlock>
            <CodeBlock title="src/api.ts">{`// Before (CRA pattern — does NOT work in Vite)
const BASE = process.env.REACT_APP_API_URL

// After (Vite pattern)
const BASE = import.meta.env.VITE_API_URL

console.log(BASE) // "https://api.example.com"`}</CodeBlock>
            <WarnBox>
              {
                "Never put secret keys (private API keys, database passwords) in VITE_ variables. They are inlined into your public JavaScript bundle and visible to anyone who inspects your site."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Create the Correct .env File"
            time="2 min"
            tag="File naming and loading order"
          >
            <P>
              {"Vite loads "}
              <IC>{".env"}</IC>
              {" files from your project root (same folder as "}
              <IC>{"vite.config.ts"}</IC>
              {"). The correct file names and their loading priority:"}
            </P>
            <CodeBlock title=".env file loading order (highest priority last)">{`# Loaded in all modes
.env

# Loaded in all modes — add to .gitignore
.env.local

# Loaded only in development (npm run dev)
.env.development
.env.development.local

# Loaded only in production (npm run build)
.env.production
.env.production.local`}</CodeBlock>
            <CodeBlock title=".env (project root)">{`# Put this file next to vite.config.ts — NOT inside /src
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App`}</CodeBlock>
            <TipBox>
              {
                "Add .env.local and .env.*.local to your .gitignore — these are meant for per-developer secrets that should never be committed to the repository."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Restart the Dev Server After Every Change"
            time="1 min"
            tag="import.meta.env still shows old values"
          >
            <P>
              {"Vite reads "}
              <IC>{".env"}</IC>
              {
                " files only at server startup. Hot Module Replacement (HMR) does "
              }
              <strong>{"not"}</strong>
              {" pick up "}
              <IC>{".env"}</IC>
              {" changes automatically."}
            </P>
            <CodeBlock title="terminal">{`# Stop the dev server (Ctrl + C), then restart:
npm run dev

# Verify the variable is loaded:
# In any component, add temporarily:
console.log(import.meta.env)
# You should see all VITE_ variables in the output`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Add TypeScript Types for import.meta.env"
            time="3 min"
            tag="TypeScript: Property does not exist on ImportMeta"
          >
            <P>
              {"By default TypeScript only knows about Vite's built-in "}
              <IC>{"import.meta.env"}</IC>
              {" properties like "}
              <IC>{"MODE"}</IC>
              {" and "}
              <IC>{"DEV"}</IC>
              {". Add your custom "}
              <IC>{"VITE_"}</IC>
              {" variables to the "}
              <IC>{"ImportMetaEnv"}</IC>
              {" interface for full type safety and autocomplete."}
            </P>
            <CodeBlock title="src/vite-env.d.ts">{`/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_STRIPE_KEY: string
  readonly VITE_APP_NAME: string
  // Add all your VITE_ variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}`}</CodeBlock>
            <CodeBlock title="Usage — now fully typed">{`// TypeScript knows the type of each variable
const apiUrl: string = import.meta.env.VITE_API_URL
const appName: string = import.meta.env.VITE_APP_NAME`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Env Variables in Production Build"
            time="3 min"
            tag="Undefined after npm run build / on Vercel / Netlify"
          >
            <P>
              {"Vite statically replaces "}
              <IC>{"import.meta.env.VITE_*"}</IC>
              {
                " references at build time. If the variable is not set in the environment when "
              }
              <IC>{"npm run build"}</IC>
              {" runs, it will be "}
              <IC>{"undefined"}</IC>
              {" in production."}
            </P>
            <CodeBlock title="Vercel — set in dashboard or CLI">{`# Via Vercel CLI
vercel env add VITE_API_URL production
vercel env add VITE_STRIPE_KEY production

# Then redeploy
vercel --prod`}</CodeBlock>
            <CodeBlock title="Netlify — netlify.toml">{`[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  VITE_API_URL = "https://api.example.com"

# Or set in Netlify dashboard: Site Settings → Environment Variables`}</CodeBlock>
            <CodeBlock title="Verify at build time — vite.config.ts">{`import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  // Fail the build if a required variable is missing
  if (!env.VITE_API_URL) {
    throw new Error("VITE_API_URL is required but not set")
  }

  return { /* your config */ }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Use Env Variables Inside vite.config.ts"
            time="2 min"
            tag="process.env doesn't work the same way in config"
          >
            <P>
              {"Inside "}
              <IC>{"vite.config.ts"}</IC>
              {", "}
              <IC>{"import.meta.env"}</IC>
              {" is not available. Use Vite's "}
              <IC>{"loadEnv"}</IC>
              {" helper to read "}
              <IC>{".env"}</IC>
              {" variables in your config file."}
            </P>
            <CodeBlock title="vite.config.ts">{`import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => {
  // Load env from the current working directory
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // use env vars in config
          changeOrigin: true,
        },
      },
    },
  }
})`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always prefix client-side variables with VITE_ — never use plain process.env in Vite projects",
              "Commit a .env.example file with all required variable names (no values) so new developers know what to set",
              "Add .env.local and .env.*.local to .gitignore — never commit real secrets",
              "Declare all VITE_ variables in src/vite-env.d.ts for TypeScript type safety",
              "Validate required variables in vite.config.ts using loadEnv — fail fast at build time",
              "Set production env vars in your deployment platform dashboard before the first deploy",
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
                title: "Fix: Vite CORS Error — Blocked by Browser",
                href: "/category/vite/error/vite-cors-error",
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
            title={"We Build Production-Ready Vite + React Apps"}
            desc={
              "Softplix engineers build and deploy modern frontend applications with Vite, React, and TypeScript. Need help with your build setup or deployment pipeline? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
