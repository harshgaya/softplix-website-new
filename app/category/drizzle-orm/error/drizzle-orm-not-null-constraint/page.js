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
  title: "Drizzle ORM Not Null Constraint Violation — Fixed [2026]",
  description:
    "Fix Drizzle ORM not null constraint violation errors. Covers schema column definitions, default values, insert payloads, nullable vs notNull, and migration alignment.",
  keywords:
    "drizzle orm not null constraint, drizzle null constraint violation 2026, drizzle insert null error, drizzle schema notNull default, drizzle orm column required",
  alternates: {
    canonical:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
  },
  openGraph: {
    title: "Drizzle ORM Not Null Constraint — Fixed [2026]",
    description:
      "Fix Drizzle ORM not null violations — schema, defaults, insert payloads, migrations.",
    type: "article",
    url: "https://softplix.com/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
  },
};

const TOC = [
  {
    label: "What causes not null constraint violations in Drizzle",
    href: "#why",
  },
  {
    label: "Fix 1 — Add .notNull() and .default() to schema columns",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Provide all required fields in insert payload",
    href: "#fix-2",
  },
  { label: "Fix 3 — Use .defaultNow() for timestamp columns", href: "#fix-3" },
  {
    label: "Fix 4 — Make a column nullable with .$type<T | null>()",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Sync schema changes with drizzle-kit push",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does 'not null constraint violation' mean in Drizzle ORM?",
    a: "It means you tried to insert or update a row while leaving a column that has a NOT NULL constraint with no value and no default. The database rejects the operation. The fix is to either provide a value for the column in your insert, or define a default value in the schema.",
  },
  {
    q: "How do I make a column required in Drizzle ORM?",
    a: "In Drizzle, columns are nullable by default unless you call .notNull() on them. Add .notNull() to any column that must always have a value. Combine with .default(value) to provide a fallback when the column is not explicitly set in an insert.",
  },
  {
    q: "What is the difference between .default() and .$defaultFn() in Drizzle?",
    a: "default(value) sets a SQL-level DEFAULT — the database fills it in if the column is omitted. $defaultFn(() => value) sets a JavaScript-level default that Drizzle applies before sending the INSERT to the database. Use $defaultFn for values like nanoid(), crypto.randomUUID(), or any JS computation.",
  },
  {
    q: "How do I auto-set createdAt in Drizzle ORM?",
    a: "Use .defaultNow() on a timestamp column: createdAt: timestamp('created_at').notNull().defaultNow(). The database fills in the current timestamp automatically. For updatedAt that updates on every change, use .$onUpdateFn(() => new Date()) which Drizzle applies on every UPDATE.",
  },
  {
    q: "Why does my Drizzle schema look correct but I still get not null errors?",
    a: "The most likely cause is that your database schema is out of sync with your Drizzle schema file. Run npx drizzle-kit push (or generate + migrate) to apply your schema changes to the database. Without this, the database still has the old column definition.",
  },
  {
    q: "Can I have a column that is not null but has no default?",
    a: "Yes — this is the standard pattern for required fields like name, email, user_id. The column has .notNull() but no .default(). Every insert must explicitly provide a value for this column, or the database rejects it with a not null constraint error.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drizzle ORM Not Null Constraint Violation — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
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
            tags={["Drizzle ORM", "PostgreSQL", "Error Fix"]}
            title={"Drizzle ORM: Not Null Constraint Violation"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: .notNull() · .default() · .defaultNow() · $defaultFn · nullable columns · drizzle-kit push"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Drizzle ORM · PostgreSQL · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`PostgresError: null value in column "created_at" of relation "posts"
  violates not-null constraint
// OR:
PostgresError: null value in column "user_id" violates not-null constraint`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — add .notNull().default() or provide value in insert"}
            </p>
            <CodeBlock title="schema.ts">{`// Add .defaultNow() for timestamp columns
createdAt: timestamp("created_at").notNull().defaultNow(),

// OR provide the value explicitly in every insert
await db.insert(posts).values({ title, userId, createdAt: new Date() })`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">
            {"What Causes Not Null Constraint Violations in Drizzle"}
          </SH>
          <P>
            {"When you define a column with "}
            <IC>{".notNull()"}</IC>
            {
              " in Drizzle, the database enforces that every inserted row must have a non-null value for that column. The error fires when an "
            }
            <IC>{"INSERT"}</IC>
            {" or "}
            <IC>{"UPDATE"}</IC>
            {" omits the column and there is no database-level "}
            <IC>{"DEFAULT"}</IC>
            {" to fall back to."}
          </P>

          <FixCard
            number="1"
            title="Add .notNull() and .default() to Schema Columns"
            time="3 min"
            tag="Core schema pattern for required fields with defaults"
          >
            <CodeBlock title="db/schema.ts — column definition patterns">{`import { pgTable, text, timestamp, uuid, boolean, integer } from "drizzle-orm/pg-core"
import { createId } from "@paralleldrive/cuid2"

export const posts = pgTable("posts", {
  // Primary key — auto-generated
  id: uuid("id").primaryKey().defaultRandom(),

  // Required fields — no default — must provide in every insert
  title:  text("title").notNull(),
  userId: uuid("user_id").notNull().references(() => users.id),

  // Optional field — nullable (no .notNull())
  excerpt: text("excerpt"),

  // Boolean with default
  published: boolean("published").notNull().default(false),

  // Integer with default
  viewCount: integer("view_count").notNull().default(0),

  // Timestamps — auto-set by database
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Provide All Required Fields in Insert Payload"
            time="2 min"
            tag="Not null column with no default — must supply value"
          >
            <CodeBlock title="Correct insert — provide all notNull columns">{`// ❌ Missing required userId — violates not null
await db.insert(posts).values({ title: "Hello World" })

// ✅ Provide all required fields
await db.insert(posts).values({
  title: "Hello World",
  userId: user.id,           // required — no default
  published: false,          // optional — has default(false), but explicit is fine
  // createdAt omitted — database fills defaultNow()
})

// ✅ Returning — get the inserted row back
const [newPost] = await db
  .insert(posts)
  .values({ title: "Hello", userId: user.id })
  .returning()

console.log(newPost.id, newPost.createdAt)   // auto-filled by DB`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use .defaultNow() for Timestamp Columns"
            time="2 min"
            tag="createdAt / updatedAt always null on insert"
          >
            <CodeBlock title="Timestamp column patterns">{`import { timestamp } from "drizzle-orm/pg-core"

export const posts = pgTable("posts", {
  // createdAt — set once at insert time
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),

  // updatedAt — update on every change using Drizzle's hook
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
    // $onUpdate fires on every UPDATE query automatically
})

// After running drizzle-kit push, both columns are set automatically:
await db.insert(posts).values({ title: "Hello", userId: user.id })
// createdAt and updatedAt are set by DB + Drizzle — no need to pass them`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use JS-Level Defaults with $defaultFn"
            time="2 min"
            tag="Generated IDs, slugs, random values"
          >
            <CodeBlock title="$defaultFn — compute default in JavaScript">{`import { pgTable, text, varchar } from "drizzle-orm/pg-core"
import { createId } from "@paralleldrive/cuid2"
import slugify from "slugify"

export const posts = pgTable("posts", {
  // CUID2 id — generated in JS, not SQL
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),

  // Slug generated from title at insert time
  slug: text("slug")
    .notNull()
    .$defaultFn(() => slugify(Math.random().toString())),
    // Better: compute slug from title before inserting
})

// Usage — id and slug are computed by Drizzle before INSERT
const [post] = await db.insert(posts).values({ title: "Hello", userId: user.id }).returning()
console.log(post.id)    // "clxxxxxxxxxxxxxx" — cuid2
console.log(post.slug)  // generated slug`}</CodeBlock>
            <TipBox>
              {
                "Use $defaultFn for IDs and computed values that need JavaScript logic. Use .default() for simple static defaults (false, 0, 'draft'). Use .defaultNow() specifically for timestamp columns."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Sync Schema Changes with drizzle-kit push"
            time="3 min"
            tag="Schema updated but database still has old column definition"
          >
            <P>
              {
                "After changing your schema file, you must push the changes to the database. Without this, the database still enforces the old column constraints."
              }
            </P>
            <CodeBlock title="terminal — apply schema changes">{`# Push schema directly to DB (development — no migration files)
npx drizzle-kit push

# OR generate migration files (production-safe)
npx drizzle-kit generate
npx drizzle-kit migrate

# Check what drizzle-kit will change before applying
npx drizzle-kit push --dry-run

# Verify current schema vs DB
npx drizzle-kit check`}</CodeBlock>
            <WarnBox>
              {
                "Always run drizzle-kit push (or generate + migrate) after changing your schema. Drizzle's TypeScript schema and the actual database schema can drift — this is the #1 cause of unexpected constraint errors in development."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Mark every required column with .notNull() in your schema — Drizzle infers TypeScript types from this",
              "Add .default() or .defaultNow() to columns that should have automatic values",
              "Run drizzle-kit push after every schema change during development",
              "Use .returning() on inserts to confirm what was actually saved",
              "Keep schema column modifiers in this order: type → .notNull() → .default() → .references()",
              "Use $defaultFn for JavaScript-computed defaults like CUID2, nanoid, or slug generation",
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
                time: "6 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM relation not working",
                href: "/category/drizzle-orm/error/drizzle-orm-relation-not-working",
                time: "6 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM connection error",
                href: "/category/drizzle-orm/error/drizzle-orm-connection-error",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production Apps with Drizzle ORM"}
            desc={
              "Softplix engineers design Drizzle schemas, write migrations, and build type-safe database layers for Next.js and Node.js. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
