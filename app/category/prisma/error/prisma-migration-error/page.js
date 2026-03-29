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
  title: "Prisma Migration Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Prisma migration errors including schema drift, already applied migrations, failed migration state, shadow database errors, and production migration strategies.",
  keywords:
    "prisma migration error fix, prisma migrate dev error, prisma schema drift fix 2026, prisma migration failed production",
  alternates: {
    canonical:
      "https://softplix.com/category/prisma/error/prisma-migration-error",
  },
  openGraph: {
    title: "Prisma Migration Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Prisma migration errors — schema drift, failed state, shadow database, production safety.",
    type: "article",
    url: "https://softplix.com/category/prisma/error/prisma-migration-error",
  },
};

const TOC = [
  { label: "Read the migration error message first", href: "#read-error" },
  { label: "Fix 1 — Schema drift detected", href: "#fix-1" },
  { label: "Fix 2 — Migration in failed state", href: "#fix-2" },
  { label: "Fix 3 — Shadow database errors", href: "#fix-3" },
  { label: "Fix 4 — Already applied migration changed", href: "#fix-4" },
  { label: "Fix 5 — Production migration best practices", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is Prisma schema drift?",
    a: "Schema drift means your database schema no longer matches your migration history. This happens when someone manually alters the database (adds a column, drops an index) without using Prisma migrations. Prisma detects this and refuses to apply new migrations until the drift is resolved.",
  },
  {
    q: "How do I fix 'The migration was not applied because it triggered an error' in Prisma?",
    a: "The migration is in a 'failed' state in the _prisma_migrations table. Fix the SQL error in the migration file, then run prisma migrate resolve --applied <migration_name> to mark it as applied, or prisma migrate resolve --rolled-back to mark it as rolled back so you can delete and recreate it.",
  },
  {
    q: "How do I reset Prisma migrations in development?",
    a: "Run npx prisma migrate reset. This drops the database, recreates it, and applies all migrations from scratch. WARNING: this destroys all data. Only use in development, never in production.",
  },
  {
    q: "What is the Prisma shadow database and why does it fail?",
    a: "Prisma creates a temporary shadow database to safely compute migration diffs. It fails if your database user lacks permission to create databases, or if you are using a managed database that does not allow shadow databases (like Neon or PlanetScale). Set shadowDatabaseUrl in your datasource block to a separate database URL.",
  },
  {
    q: "Can I run Prisma migrations in production safely?",
    a: "Yes. Use npx prisma migrate deploy (not migrate dev) in production. It applies only pending migrations without creating new ones or resetting the database. Run it as part of your deployment pipeline, before starting the app server.",
  },
  {
    q: "How do I fix 'migration already exists in the database but is not in the migration folder'?",
    a: "This means a migration was applied to the database but the corresponding file was deleted. Either restore the migration file from git history, or mark the migration as rolled back in the _prisma_migrations table and recreate it.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prisma Migration Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/prisma/error/prisma-migration-error",
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
            title={"Prisma Migration Error"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: schema drift · failed migration state · shadow database · production deploy"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Prisma · PostgreSQL · CI/CD"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Diagnose the Error First"}
            </p>
            <CodeBlock title="terminal">{`# See full migration status — which are applied, pending, failed
npx prisma migrate status

# In development — resets DB and re-applies all migrations
npx prisma migrate reset

# In production — apply pending migrations only (safe)
npx prisma migrate deploy`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="read-error">{"Read the Migration Error Message First"}</SH>
          <P>
            {
              "Prisma migration errors fall into a few distinct categories. The error message tells you which one you are dealing with. Common patterns:"
            }
          </P>
          <CL
            items={[
              "Drift detected: Database schema is not in sync with migration history",
              "Migration is in failed state: A previous migration partially applied and errored",
              "Shadow database error: Prisma cannot create the temp database for diff computation",
              "Migration already applied but differs: Migration file was modified after being applied",
            ]}
          />

          <FixCard
            number="1"
            title="Schema Drift Detected"
            time="5 min"
            tag="Database was manually altered outside Prisma"
          >
            <P>
              {
                "Drift happens when someone runs raw SQL directly against the database — adding a column, creating an index, changing a type — without a corresponding Prisma migration."
              }
            </P>
            <ErrorBlock>{`Error: P3006
The migration \`20260101_add_users\` failed to apply cleanly to the shadow database.
Error: column "name" of relation "User" already exists`}</ErrorBlock>
            <CodeBlock title="terminal — resolve drift">{`# Step 1: See what Prisma thinks has drifted
npx prisma migrate status

# Step 2: If the drift matches what you want, create a baseline migration
# This tells Prisma "the DB is correct, mark existing state as baseline"
npx prisma migrate resolve --applied "20260101_baseline"

# Step 3: If you want to sync schema.prisma TO the DB (pull from DB)
npx prisma db pull  # updates schema.prisma to match actual DB

# Step 4: Generate a new migration from the updated schema
npx prisma migrate dev --name sync_drift`}</CodeBlock>
            <TipBox>
              {
                "In development, prisma migrate reset is the fastest fix — it drops the database, recreates it, and applies all migrations cleanly. Only use in dev environments."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Migration in Failed State"
            time="4 min"
            tag="A migration partially applied then errored"
          >
            <P>
              {"When a migration fails midway, Prisma marks it as "}
              <IC>{"failed"}</IC>
              {" in the "}
              <IC>{"_prisma_migrations"}</IC>
              {" table. You must resolve this before running new migrations."}
            </P>
            <ErrorBlock>{`Error: P3009
migrate found failed migrations in the target database,
new migrations will not be applied. Read more about how to resolve a
failed migration: https://pris.ly/d/migrate-resolve

Migration name: 20260115_add_orders_table
Status: failed`}</ErrorBlock>
            <CodeBlock title="terminal — fix failed migration">{`# Option A: Fix the SQL error in the migration file, then mark as applied
# 1. Edit prisma/migrations/20260115_add_orders_table/migration.sql
# 2. Mark as applied
npx prisma migrate resolve --applied "20260115_add_orders_table"

# Option B: Mark as rolled back, delete the file, recreate
npx prisma migrate resolve --rolled-back "20260115_add_orders_table"
rm -rf prisma/migrations/20260115_add_orders_table
npx prisma migrate dev --name add_orders_table`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Shadow Database Errors"
            time="3 min"
            tag="Managed databases — Neon, PlanetScale, Supabase"
          >
            <P>
              {
                "Prisma needs a shadow database to safely compute migration diffs. Managed databases often restrict CREATE DATABASE permissions, causing this to fail."
              }
            </P>
            <ErrorBlock>{`Error: P3014
Prisma Migrate could not create the shadow database. Please make sure the
database user has permission to create databases.`}</ErrorBlock>
            <CodeBlock title="prisma/schema.prisma — set shadow database URL">{`datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
  // Point to a separate database for shadow operations
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
}`}</CodeBlock>
            <CodeBlock title=".env">{`DATABASE_URL="postgresql://user:pass@host:5432/mydb"
# Create a separate empty database for shadow operations
SHADOW_DATABASE_URL="postgresql://user:pass@host:5432/mydb_shadow"`}</CodeBlock>
            <TipBox>
              {
                "On Neon or Supabase, create a second branch/database named mydb_shadow and point SHADOW_DATABASE_URL to it. This is a one-time setup."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Already Applied Migration Was Changed"
            time="3 min"
            tag="Never edit applied migration files"
          >
            <ErrorBlock>{`Error: P3005
The database schema is not empty. Read more about how to baseline an existing
production database: https://pris.ly/d/migrate-baseline`}</ErrorBlock>
            <P>
              {
                "If you edited a migration file after it was already applied to any environment, Prisma detects the checksum mismatch and refuses to proceed."
              }
            </P>
            <CodeBlock title="terminal — fix checksum mismatch">{`# Never edit applied migration files. Instead:
# 1. Revert the migration file to its original content (use git)
git checkout prisma/migrations/20260101_initial/migration.sql

# 2. Create a new migration for the additional changes
npx prisma migrate dev --name add_missing_changes

# If you truly cannot revert, mark the migration as resolved
# (use only in emergencies — prefer the git revert approach)
npx prisma migrate resolve --applied "20260101_initial"`}</CodeBlock>
            <WarnBox>
              {
                "Never edit a migration file that has been applied to any database — development, staging, or production. Create a new migration instead."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Production Migration Best Practices"
            time="4 min"
            tag="migrate deploy · pre-deploy hooks · rollback strategy"
          >
            <CodeBlock title="Dockerfile / deployment script">{`# CORRECT — use migrate deploy in production (not migrate dev)
npx prisma migrate deploy

# migrate deploy:
# ✓ Applies only pending migrations
# ✓ Never resets or drops data
# ✓ Never creates new migrations
# ✓ Safe to run in CI/CD pipelines

# migrate dev:
# ✗ Creates new migrations interactively
# ✗ Resets database when conflicts found
# ✗ Never run in production`}</CodeBlock>
            <CodeBlock title="package.json — safe deploy script">{`{
  "scripts": {
    "db:migrate": "prisma migrate deploy",
    "db:status": "prisma migrate status",
    "start": "npm run db:migrate && node server.js"
  }
}`}</CodeBlock>
            <CodeBlock title="GitHub Actions — pre-deploy migration">{`- name: Run database migrations
  run: npx prisma migrate deploy
  env:
    DATABASE_URL: secrets.DATABASE_URL

- name: Start application
  run: npm start`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Never alter the database manually (raw SQL) — always use Prisma migrations",
              "Never edit a migration file after it has been applied to any environment",
              "Use migrate deploy in production, never migrate dev",
              "Set SHADOW_DATABASE_URL when using managed databases like Neon or Supabase",
              "Run npx prisma migrate status in your CI pipeline to catch drift early",
              "Commit migration files to git — never .gitignore the prisma/migrations folder",
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
                title: "Fix: Prisma Connection Error",
                href: "/category/prisma/error/prisma-connection-error",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Manage Prisma Migrations in Production"}
            desc={
              "Softplix handles database schema management, migration pipelines, and Prisma setup for production Node.js applications. Let us take migrations off your plate."
            }
          />
        </div>
      </main>
    </>
  );
}
