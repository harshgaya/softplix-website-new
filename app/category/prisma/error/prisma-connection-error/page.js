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
  title: "Prisma Connection Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Prisma connection errors: wrong DATABASE_URL, connection pool exhausted, SSL required, serverless cold start issues, and Neon/Supabase connection tips.",
  keywords:
    "prisma connection error fix, prisma database connection failed, prisma can't reach database, prisma connection pool exhausted 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/prisma/error/prisma-connection-error",
  },
  openGraph: {
    title: "Prisma Connection Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Prisma connection errors — DATABASE_URL, SSL, connection pool, serverless cold starts.",
    type: "article",
    url: "https://softplix.com/category/prisma/error/prisma-connection-error",
  },
};

const TOC = [
  { label: "Identify the connection error type", href: "#identify" },
  { label: "Fix 1 — Wrong or missing DATABASE_URL", href: "#fix-1" },
  { label: "Fix 2 — SSL required by managed databases", href: "#fix-2" },
  { label: "Fix 3 — Connection pool exhausted", href: "#fix-3" },
  {
    label: "Fix 4 — Serverless cold start / too many connections",
    href: "#fix-4",
  },
  { label: "Fix 5 — Database server not reachable", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does 'Can't reach database server' mean in Prisma?",
    a: "Prisma cannot open a TCP connection to the database host. Common causes: wrong host/port in DATABASE_URL, database server is not running, firewall blocking the connection, or IP allowlist on managed databases (Neon, Supabase, Railway) not including your server IP.",
  },
  {
    q: "How do I fix Prisma connection error in Next.js on Vercel?",
    a: "1) Make sure DATABASE_URL is set in Vercel environment variables — not just .env.local. 2) Add ?sslmode=require to your PostgreSQL connection string. 3) Use connection pooling (PgBouncer or Prisma Accelerate) to avoid the connection limit on serverless.",
  },
  {
    q: "Prisma throwing 'too many connections' error — how to fix?",
    a: "Serverless environments like Vercel spawn many Node.js instances, each creating a Prisma connection pool. Use Prisma Accelerate or PgBouncer as a connection pooler that sits between Prisma and your database. Also set connection_limit=1 in your DATABASE_URL for serverless.",
  },
  {
    q: "How do I test if my DATABASE_URL is correct?",
    a: "Run: node -e \"const {PrismaClient} = require('@prisma/client'); const p = new PrismaClient(); p.$connect().then(() => console.log('Connected')).catch(console.error)\" to test the connection directly.",
  },
  {
    q: "Prisma connection error only in production — not locally?",
    a: "The most common cause is a missing SSL parameter. Add ?sslmode=require to your DATABASE_URL for managed PostgreSQL databases. Also check that your production server IP is allowlisted in your database provider's network settings.",
  },
  {
    q: "How do I use Prisma with Neon serverless database?",
    a: "Use the Neon serverless driver: install @neondatabase/serverless and configure Prisma with the connection pooling URL (the one ending in -pooler.neon.tech). Add ?sslmode=require and set connection_limit=1 in the URL for serverless environments.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prisma Connection Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/prisma/error/prisma-connection-error",
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
            tags={["Prisma", "Database", "Error Fix"]}
            title={"Prisma Connection Error"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: can't reach database · SSL required · too many connections · Vercel/Neon/Supabase"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Prisma · PostgreSQL · Serverless"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error You Are Seeing"}
            </p>
            <ErrorBlock>{`PrismaClientInitializationError: 
Can't reach database server at \`localhost\`:\`5432\`

Please make sure your database server is running at \`localhost\`:\`5432\`.

  // OR
  
Error: P1001: Can't reach database server at 'db.example.supabase.co':'5432'`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="identify">{"Identify the Connection Error Type"}</SH>
          <P>
            {
              "Prisma connection errors split into three categories. Identifying yours correctly saves significant debugging time:"
            }
          </P>
          <CL
            items={[
              "P1001 — Can't reach database server: wrong host/port, server down, firewall",
              "P1002 — Database server reached but timed out: overloaded server, wrong port",
              "P1008 — Operations timed out: query taking too long, connection pool full",
              "too many connections: serverless cold starts exhausting PostgreSQL connection limit",
            ]}
          />

          <FixCard
            number="1"
            title="Wrong or Missing DATABASE_URL"
            time="3 min"
            tag="Most common cause — verify the connection string first"
          >
            <P>
              {"The "}
              <IC>{"DATABASE_URL"}</IC>
              {
                " must be an exact, valid connection string. Any typo in host, port, username, password, or database name will cause P1001."
              }
            </P>
            <CodeBlock title=".env — correct PostgreSQL URL format">{`# Local PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# Supabase (use the connection pooler URL for serverless)
DATABASE_URL="postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres?sslmode=require"

# Neon (use pooler URL for serverless environments)
DATABASE_URL="postgresql://[user]:[pass]@[region]-pooler.neon.tech/[dbname]?sslmode=require&connection_limit=1"

# Railway
DATABASE_URL="postgresql://postgres:[pass]@[host].railway.app:[port]/railway?sslmode=require"`}</CodeBlock>
            <CodeBlock title="terminal — test connection directly">{`# Quick connection test
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({ log: ['query', 'error'] });
prisma.\$connect()
  .then(() => { console.log('✓ Connected'); prisma.\$disconnect(); })
  .catch(e => { console.error('✗ Failed:', e.message); });
"`}</CodeBlock>
            <TipBox>
              {
                "In Vercel, set DATABASE_URL in the project's Environment Variables dashboard. The .env.local file is never deployed to Vercel."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="SSL Required by Managed Databases"
            time="2 min"
            tag="Supabase · Neon · Railway · PlanetScale"
          >
            <P>
              {"All managed PostgreSQL providers require SSL. Without "}
              <IC>{"?sslmode=require"}</IC>
              {", the connection is rejected with a TLS/SSL error."}
            </P>
            <CodeBlock title="add sslmode to DATABASE_URL">{`# Add ?sslmode=require to your URL
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require"

# If you get SSL certificate errors, add this parameter:
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require&sslaccept=accept_invalid_certs"

# In schema.prisma — alternative SSL config
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  // Or configure SSL inline:
  // relationMode = "prisma"
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Connection Pool Exhausted"
            time="4 min"
            tag="too many connections for role · max_connections exceeded"
          >
            <ErrorBlock>{`Error: P2024
Timed out fetching a new connection from the connection pool.

// OR from PostgreSQL directly:
FATAL: too many connections for role "postgres"`}</ErrorBlock>
            <CodeBlock title="prisma/schema.prisma — limit pool size">{`datasource db {
  provider = "postgresql"
  // connection_limit controls Prisma's pool size per process
  url      = env("DATABASE_URL")
}

// In DATABASE_URL, add connection_limit parameter:
// ?connection_limit=5&pool_timeout=10`}</CodeBlock>
            <CodeBlock title="lib/prisma.ts — singleton pattern (critical for Next.js)">{`import { PrismaClient } from "@prisma/client";

// Prevent multiple PrismaClient instances in development hot reload
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}`}</CodeBlock>
            <TipBox>
              {
                "Without the singleton pattern, Next.js hot reload creates a new PrismaClient on every file change, rapidly exhausting the connection pool."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Serverless Cold Start / Too Many Connections"
            time="4 min"
            tag="Vercel · AWS Lambda · Cloudflare Workers"
          >
            <P>
              {
                "Serverless functions spin up new instances for every concurrent request. Each instance creates its own connection pool, quickly hitting PostgreSQL's "
              }
              <IC>{"max_connections"}</IC>
              {" limit (typically 100)."}
            </P>
            <CodeBlock title="DATABASE_URL — serverless optimized settings">{`# Limit to 1 connection per serverless instance
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require&connection_limit=1&pool_timeout=10"

# connection_limit=1: each serverless function uses max 1 connection
# pool_timeout=10: fail fast if no connection available in 10s`}</CodeBlock>
            <CodeBlock title="Use Prisma Accelerate for connection pooling">{`# 1. Install Prisma Accelerate
npm install @prisma/extension-accelerate

# 2. Get your Accelerate URL from console.prisma.io
# ACCELERATE_URL="prisma://accelerate.prisma.io/?api_key=..."

# 3. Update lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient().$extends(withAccelerate());

# 4. Update DATABASE_URL to your Accelerate URL
# Accelerate manages a connection pool for all your serverless functions`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Database Server Not Reachable"
            time="3 min"
            tag="IP allowlist · VPC · firewall rules"
          >
            <P>
              {
                "If the database host is correct but still unreachable, the server IP may not be allowlisted on your managed database provider."
              }
            </P>
            <CodeBlock title="terminal — diagnose network connectivity">{`# Test if the port is open from your server
nc -zv db.example.supabase.co 5432

# DNS lookup — verify the host resolves
nslookup db.example.supabase.co

# If running locally, check PostgreSQL is listening
sudo lsof -i :5432`}</CodeBlock>
            <CL
              items={[
                "Supabase: Go to Settings → Database → Network → Add your IP or 0.0.0.0/0 for all IPs",
                "Neon: Network access is unrestricted by default — check if your URL is correct",
                "Railway: Check the database's Public Networking toggle is enabled",
                "Self-hosted: Check pg_hba.conf and firewall rules (ufw, iptables, security groups)",
              ]}
            />
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Always add ?sslmode=require to managed database URLs",
              "Use the singleton PrismaClient pattern in Next.js to prevent pool exhaustion",
              "Add connection_limit=1 in DATABASE_URL for serverless deployments",
              "Set DATABASE_URL in Vercel environment variables dashboard — not just .env.local",
              "Use Prisma Accelerate or PgBouncer for high-traffic serverless workloads",
              "Allowlist your server IP in your database provider's network settings",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Prisma",
                title: "Fix: Prisma P2002 Unique Constraint Failed",
                href: "/category/prisma/error/prisma-p2002-unique-constraint-failed",
                time: "6 min read",
              },
              {
                tag: "Prisma",
                title: "Fix: Prisma P2025 Record Not Found",
                href: "/category/prisma/error/prisma-p2025-record-not-found",
                time: "6 min read",
              },
              {
                tag: "Prisma",
                title: "Fix: Prisma Migration Error",
                href: "/category/prisma/error/prisma-migration-error",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Set Up Prisma for Production"}
            desc={
              "Softplix configures Prisma with proper connection pooling, migration pipelines, and error handling for Node.js and Next.js applications at scale."
            }
          />
        </div>
      </main>
    </>
  );
}
