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
  title: "Drizzle ORM Migration Error — Fixed [2026]",
  description:
    "Fix Drizzle ORM migration errors. Covers drizzle-kit generate, push vs migrate, out-of-sync migrations, drizzle.config.ts setup, and resetting migrations.",
  keywords:
    "drizzle orm migration error, drizzle-kit push error 2026, drizzle migration out of sync, drizzle generate migrate fix, drizzle config not found",
  alternates: {
    canonical:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-migration-error",
  },
  openGraph: {
    title: "Drizzle ORM Migration Error — Fixed [2026]",
    description:
      "Fix Drizzle ORM migrations — drizzle-kit, push vs migrate, config, out-of-sync.",
    type: "article",
    url: "https://softplix.com/category/drizzle-orm/error/drizzle-orm-migration-error",
  },
};

const TOC = [
  {
    label: "push vs generate+migrate — which to use",
    href: "#push-vs-migrate",
  },
  { label: "Fix 1 — Fix drizzle.config.ts setup", href: "#fix-1" },
  { label: "Fix 2 — Fix 'No config file found' error", href: "#fix-2" },
  { label: "Fix 3 — Fix out-of-sync migration journal", href: "#fix-3" },
  {
    label: "Fix 4 — Run migrations programmatically at startup",
    href: "#fix-4",
  },
  { label: "Fix 5 — Reset and recreate migrations", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is the difference between drizzle-kit push and migrate?",
    a: "push directly syncs your schema to the database without creating migration files — fast for development. generate+migrate creates SQL migration files that you can review and commit to git — required for production deployments and team workflows.",
  },
  {
    q: "Why does drizzle-kit push say 'No config file found'?",
    a: "drizzle-kit looks for drizzle.config.ts at the project root. If the file is named differently, in a subdirectory, or has an error, the command fails. Check the file exists at the root, exports a default config, and the DATABASE_URL environment variable is set.",
  },
  {
    q: "Why are my migrations out of sync?",
    a: "The migration journal (drizzle/meta/_journal.json) tracks applied migrations. If you manually delete migration files, edit them after applying, or create them on different machines without syncing, the journal gets out of sync. The fix is to reset migrations or use drizzle-kit push for development.",
  },
  {
    q: "How do I run Drizzle migrations automatically in production?",
    a: "Call migrate(db, { migrationsFolder: './drizzle' }) in your server startup code before the app starts handling requests. For Next.js, this can be done in a startup script or a custom server. Import db and the migrate function from drizzle-orm/node-postgres.",
  },
  {
    q: "Should I commit migration files to git?",
    a: "Yes. Always commit the drizzle/ folder (migration SQL files and _journal.json) to git. This gives your team a history of schema changes and ensures production deployments apply migrations in the correct order. Never regenerate migrations from scratch in a team environment.",
  },
  {
    q: "Can I use drizzle-kit push in production?",
    a: "No. push is for development only — it makes direct, potentially destructive changes without a migration trail. In production, always use generate to create migration files, review them, then run migrate to apply them safely.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drizzle ORM Migration Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-migration-error",
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
            tags={["Drizzle ORM", "Migrations", "Error Fix"]}
            title={"Drizzle ORM Migration Error"}
            subtitle={"— push vs migrate Fix [2026]"}
            sub={
              "Also covers: drizzle.config.ts · No config found · out-of-sync journal · programmatic migrate · reset migrations"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Drizzle ORM · drizzle-kit · PostgreSQL"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Migration Errors"}
            </p>
            <ErrorBlock>{`No config file found. Please create a drizzle.config.ts
// OR:
Cannot find module './drizzle/meta/_journal.json'
// OR:
Error: Migrations are out of sync. Run 'drizzle-kit generate' first.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Quick dev fix"}
            </p>
            <CodeBlock title="terminal">{`npx drizzle-kit push   # syncs schema to DB — dev only`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="push-vs-migrate">
            {"push vs generate+migrate — Which to Use"}
          </SH>
          <P>
            {"Drizzle has two migration workflows. "}
            <IC>{"push"}</IC>
            {
              " is for development — it directly syncs your schema to the database instantly, no files created. "
            }
            <IC>{"generate + migrate"}</IC>
            {
              " is for production — it creates versioned SQL files you review, commit, and apply in CI/CD."
            }
          </P>

          <FixCard
            number="1"
            title="Fix drizzle.config.ts Setup"
            time="3 min"
            tag="Foundation — correct config file"
          >
            <CodeBlock title="drizzle.config.ts — correct setup">{`import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema:  "./db/schema.ts",          // path to your schema file(s)
  out:     "./drizzle",               // where migration files are stored
  dialect: "postgresql",              // or "mysql" | "sqlite"
  dbCredentials: {
    url: process.env.DATABASE_URL!,   // connection string
  },
  verbose: true,   // show SQL being applied
  strict:  true,   // prompt before destructive changes
})`}</CodeBlock>
            <CodeBlock title=".env — required environment variable">{`DATABASE_URL=postgresql://username:password@localhost:5432/mydb
# For Neon / Supabase:
DATABASE_URL=postgresql://user:pass@host.neon.tech/dbname?sslmode=require`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix 'No Config File Found' Error"
            time="2 min"
            tag="drizzle-kit can't find drizzle.config.ts"
          >
            <CodeBlock title="terminal — specify config path explicitly">{`# Default — looks for drizzle.config.ts at project root
npx drizzle-kit push

# If your config is elsewhere — specify path
npx drizzle-kit push --config ./config/drizzle.config.ts

# Verify drizzle-kit is installed
npx drizzle-kit --version

# If missing:
npm install --save-dev drizzle-kit`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Out-of-Sync Migration Journal"
            time="5 min"
            tag="Journal and SQL files don't match"
          >
            <CodeBlock title="Fix out-of-sync migrations">{`# Option A — use push during development (skip migration files entirely)
npx drizzle-kit push

# Option B — regenerate from scratch (DEV ONLY — destructive in production)
# 1. Delete the drizzle/ folder
rm -rf drizzle/

# 2. Regenerate all migrations from current schema
npx drizzle-kit generate

# 3. Apply to database
npx drizzle-kit migrate

# Option C — mark a migration as applied without running it
# Edit drizzle/meta/_journal.json and add the migration entry manually
# Only do this if you've manually applied the SQL already`}</CodeBlock>
            <WarnBox>
              {
                "Never delete and regenerate migration files in a shared team environment or production system. The migration history exists for a reason — all team members' databases need to stay in sync."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Run Migrations Programmatically at Startup"
            time="5 min"
            tag="Auto-migrate in production / CI"
          >
            <CodeBlock title="db/migrate.ts — programmatic migration runner">{`import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"

async function runMigrations() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
  const db = drizzle(pool)

  console.log("Running migrations...")
  await migrate(db, { migrationsFolder: "./drizzle" })
  console.log("Migrations complete")

  await pool.end()
}

runMigrations().catch((err) => {
  console.error("Migration failed:", err)
  process.exit(1)
})`}</CodeBlock>
            <CodeBlock title="package.json — migration script">{`{
  "scripts": {
    "db:generate": "drizzle-kit generate",
    "db:migrate":  "tsx db/migrate.ts",
    "db:push":     "drizzle-kit push",
    "db:studio":   "drizzle-kit studio"
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Reset and Recreate Migrations (Dev Only)"
            time="5 min"
            tag="Fresh start — local development only"
          >
            <CodeBlock title="Full reset workflow — local dev only">{`# 1. Drop all tables (DANGER — destroys all data)
npx drizzle-kit drop    # interactive drop
# OR connect to DB and run: DROP SCHEMA public CASCADE; CREATE SCHEMA public;

# 2. Delete migration files
rm -rf drizzle/

# 3. Regenerate from current schema
npx drizzle-kit generate

# 4. Apply migrations
npx drizzle-kit migrate

# 5. (Optional) Seed test data
tsx db/seed.ts`}</CodeBlock>
            <TipBox>
              {
                "Drizzle Studio is a visual database browser — run npx drizzle-kit studio to explore your tables, run queries, and debug schema issues in a browser UI."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use push for development, generate+migrate for production — never mix the two for the same database",
              "Always commit the drizzle/ folder to git — it is part of your codebase, not a build artifact",
              "Run migrations as part of your CI/CD pipeline before deploying new code",
              "Add db:generate, db:migrate, db:push scripts to package.json for consistency",
              "Never manually edit migration SQL files after they've been applied",
              "Use drizzle-kit studio to visually verify schema changes before applying them",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM not null constraint",
                href: "/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
                time: "6 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM connection error",
                href: "/category/drizzle-orm/error/drizzle-orm-connection-error",
                time: "5 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM relation not working",
                href: "/category/drizzle-orm/error/drizzle-orm-relation-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Manage Drizzle ORM Migrations in Production"}
            desc={
              "Softplix engineers set up Drizzle with safe CI/CD migration pipelines, schema versioning, and zero-downtime deploys. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
