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
  title: "Drizzle ORM Connection Error — Fixed [2026]",
  description:
    "Fix Drizzle ORM database connection errors. Covers DATABASE_URL setup, pg vs postgres.js drivers, Neon serverless, connection pooling, and Next.js Edge Runtime.",
  keywords:
    "drizzle orm connection error, drizzle database connection failed 2026, drizzle neon connection, drizzle postgres.js vs pg, drizzle connection pool nextjs",
  alternates: {
    canonical:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-connection-error",
  },
  openGraph: {
    title: "Drizzle ORM Connection Error — Fixed [2026]",
    description:
      "Fix Drizzle ORM connection errors — DATABASE_URL, drivers, Neon, pooling, Edge Runtime.",
    type: "article",
    url: "https://softplix.com/category/drizzle-orm/error/drizzle-orm-connection-error",
  },
};

const TOC = [
  { label: "Common Drizzle connection error causes", href: "#why" },
  { label: "Fix 1 — Correct DATABASE_URL format", href: "#fix-1" },
  {
    label: "Fix 2 — Choose the right driver (pg vs postgres.js)",
    href: "#fix-2",
  },
  { label: "Fix 3 — Fix Neon serverless connection", href: "#fix-3" },
  { label: "Fix 4 — Fix connection pooling in Next.js", href: "#fix-4" },
  { label: "Fix 5 — Fix Edge Runtime connection issues", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Drizzle ORM fail to connect to the database?",
    a: "The most common causes are: incorrect DATABASE_URL format, wrong driver package imported, missing SSL settings for cloud databases (Neon, Supabase, Railway), or too many connections in a serverless environment. Start by verifying the connection string and SSL settings.",
  },
  {
    q: "Should I use pg or postgres.js with Drizzle?",
    a: "Both work. postgres.js (the 'postgres' npm package) is lighter and more modern. pg (node-postgres) is more battle-tested and has wider ecosystem support. Use postgres.js with drizzle-orm/postgres-js, use pg with drizzle-orm/node-postgres. The choice doesn't affect Drizzle's query API.",
  },
  {
    q: "How do I connect Drizzle to Neon?",
    a: "For Neon, use the @neondatabase/serverless package with drizzle-orm/neon-http or drizzle-orm/neon-serverless. This uses HTTP-based queries instead of persistent TCP connections, which works correctly in serverless environments where connections are short-lived.",
  },
  {
    q: "Why does Drizzle create too many database connections in Next.js?",
    a: "Next.js in development mode hot-reloads modules, creating a new database connection pool on every reload. Use a global singleton pattern to reuse the connection pool across hot reloads: store the db instance on globalThis and check if it already exists before creating a new one.",
  },
  {
    q: "Can I use Drizzle in Next.js Edge Runtime?",
    a: "Only with HTTP-based drivers. The Edge Runtime does not support TCP connections (the underlying protocol of pg and postgres.js). Use Neon's HTTP driver (@neondatabase/serverless) or PlanetScale's HTTP driver for Edge Runtime compatibility.",
  },
  {
    q: "Do I need ?sslmode=require in my DATABASE_URL?",
    a: "Yes for most cloud databases (Neon, Supabase, Railway, Render). Without SSL mode, the connection is rejected. Append ?sslmode=require to your DATABASE_URL for these providers, or pass ssl: true in the connection config object.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drizzle ORM Connection Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-connection-error",
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
            tags={["Drizzle ORM", "Connection", "Error Fix"]}
            title={"Drizzle ORM Connection Error"}
            subtitle={"— DATABASE_URL & Driver Fix [2026]"}
            sub={
              "Also covers: pg vs postgres.js · Neon serverless · connection pooling · Next.js hot reload · Edge Runtime"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Drizzle ORM · PostgreSQL · Neon · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`Error: connect ECONNREFUSED 127.0.0.1:5432
// OR:
Error: password authentication failed for user "postgres"
// OR:
Error: SSL connection is required`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Check DATABASE_URL first"}
            </p>
            <CodeBlock title=".env">{`# Local PostgreSQL:
DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb

# Neon / Supabase / Cloud (SSL required):
DATABASE_URL=postgresql://user:pass@host.neon.tech/dbname?sslmode=require`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Common Drizzle Connection Error Causes"}</SH>
          <P>
            {
              "Drizzle itself doesn't manage connections — it delegates to the underlying driver (pg, postgres.js, or Neon's client). Connection errors always come from the driver, not Drizzle. The fix is almost always one of: wrong connection string format, missing SSL flag, wrong driver package, or too many connections in serverless."
            }
          </P>

          <FixCard
            number="1"
            title="Correct DATABASE_URL Format"
            time="2 min"
            tag="Wrong URL format — auth or host errors"
          >
            <CodeBlock title="DATABASE_URL formats by provider">{`# Local PostgreSQL:
DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/mydb

# Supabase (Pooler — for serverless, port 6543):
DATABASE_URL=postgresql://postgres.ref:password@aws-0-us-east-1.pooler.supabase.com:6543/postgres

# Supabase (Direct — for migrations, port 5432):
DIRECT_URL=postgresql://postgres.ref:password@aws-0-us-east-1.pooler.supabase.com:5432/postgres

# Neon:
DATABASE_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# Railway:
DATABASE_URL=postgresql://postgres:pass@monorail.proxy.rlwy.net:PORT/railway

# URL encode special characters in password:
# @ → %40,  # → %23,  $ → %24`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Choose the Right Driver"
            time="3 min"
            tag="Wrong import — drizzle-orm/node-postgres vs postgres-js"
          >
            <CodeBlock title="postgres.js driver (recommended for new projects)">{`npm install drizzle-orm postgres
npm install --save-dev drizzle-kit

// db/index.ts
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const client = postgres(process.env.DATABASE_URL!, {
  ssl: "require",          // for cloud databases
  max: 10,                 // connection pool size
})
export const db = drizzle(client, { schema })`}</CodeBlock>
            <CodeBlock title="pg (node-postgres) driver">{`npm install drizzle-orm pg
npm install --save-dev @types/pg drizzle-kit

// db/index.ts
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: { rejectUnauthorized: false },  // for cloud databases
})
export const db = drizzle(pool, { schema })`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Neon Serverless Connection"
            time="3 min"
            tag="Neon HTTP driver — works in serverless + Edge"
          >
            <CodeBlock title="Neon serverless — correct setup">{`npm install drizzle-orm @neondatabase/serverless
npm install --save-dev drizzle-kit

// db/index.ts — for serverless/Edge environments
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql, { schema })

// drizzle.config.ts — for migrations (needs direct connection)
import { defineConfig } from "drizzle-kit"
export default defineConfig({
  schema:  "./db/schema.ts",
  out:     "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Connection Pooling in Next.js"
            time="3 min"
            tag="Too many connections — global singleton pattern"
          >
            <CodeBlock title="db/index.ts — singleton to prevent connection leak">{`import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

// Prevent multiple pool instances during Next.js hot reload in development
const globalForDb = globalThis as unknown as { pool?: Pool }

const pool = globalForDb.pool ?? new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool
}

export const db = drizzle(pool, { schema })`}</CodeBlock>
            <TipBox>
              {
                "The global singleton pattern is essential for Next.js development where hot reloads would otherwise create a new connection pool on every file save, quickly exhausting your database's connection limit."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Edge Runtime Connection Issues"
            time="3 min"
            tag="Cannot use pg/postgres.js in Middleware or Edge routes"
          >
            <CodeBlock title="Edge-compatible setup with Neon HTTP">{`// middleware.ts OR app/api/edge/route.ts — Edge Runtime
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

export const runtime = "edge"   // declare edge runtime

export async function GET() {
  // ✅ neon() uses HTTP — compatible with Edge Runtime
  const sql = neon(process.env.DATABASE_URL!)
  const db = drizzle(sql)

  const users = await db.select().from(usersTable).limit(10)
  return Response.json(users)
}

// ❌ pg / postgres.js use TCP — NOT Edge compatible
// import { Pool } from "pg"   // This will crash in Edge Runtime`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Add ?sslmode=require to DATABASE_URL for all cloud database providers",
              "Use the global singleton pattern in Next.js to avoid connection pool exhaustion on hot reloads",
              "Use @neondatabase/serverless with neon-http driver for Edge Runtime and serverless functions",
              "Match your import to your driver: drizzle-orm/node-postgres for pg, drizzle-orm/postgres-js for postgres",
              "URL-encode special characters in passwords — @ becomes %40, # becomes %23",
              "Test DATABASE_URL with a simple query before adding Drizzle on top",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM migration error",
                href: "/category/drizzle-orm/error/drizzle-orm-migration-error",
                time: "7 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM not null constraint",
                href: "/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
                time: "6 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM type error",
                href: "/category/drizzle-orm/error/drizzle-orm-type-error",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Set Up Drizzle ORM for Production"}
            desc={
              "Softplix engineers configure Drizzle with the right drivers, connection pooling, and cloud database providers for Next.js apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
