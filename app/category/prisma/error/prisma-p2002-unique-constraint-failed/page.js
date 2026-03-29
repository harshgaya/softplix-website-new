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
  title: "Prisma P2002 Unique Constraint Failed — Fixed [2026 Guide]",
  description:
    "Fix Prisma P2002 unique constraint failed error. Covers duplicate email, username conflicts, upsert patterns, and safe insert strategies with full code examples.",
  keywords:
    "prisma p2002 unique constraint failed, prisma unique constraint error fix, prisma p2002 fix 2026, prisma duplicate record error",
  alternates: {
    canonical:
      "https://softplix.com/category/prisma/error/prisma-p2002-unique-constraint-failed",
  },
  openGraph: {
    title: "Prisma P2002 Unique Constraint Failed — Fixed [2026 Guide]",
    description:
      "Fix Prisma P2002 unique constraint failed — duplicate records, upsert patterns, safe inserts.",
    type: "article",
    url: "https://softplix.com/category/prisma/error/prisma-p2002-unique-constraint-failed",
  },
};

const TOC = [
  { label: "What causes Prisma P2002", href: "#cause" },
  { label: "Fix 1 — Catch and handle the P2002 error", href: "#fix-1" },
  { label: "Fix 2 — Use upsert instead of create", href: "#fix-2" },
  { label: "Fix 3 — Check before inserting (findUnique)", href: "#fix-3" },
  { label: "Fix 4 — Composite unique constraints", href: "#fix-4" },
  { label: "Fix 5 — Database has stale duplicate data", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is Prisma error P2002?",
    a: "P2002 means 'Unique constraint failed' — you tried to insert or update a record with a value that already exists in a column marked @unique in your Prisma schema. Most commonly triggered by duplicate email addresses, usernames, or slug fields.",
  },
  {
    q: "How do I fix Prisma P2002 unique constraint failed on email?",
    a: "Catch the PrismaClientKnownRequestError and check error.code === 'P2002'. Then return a user-friendly message like 'Email already in use' instead of crashing. Long-term, use prisma.user.upsert() or check with findUnique() before creating.",
  },
  {
    q: "What does error.meta.target contain in P2002?",
    a: "error.meta.target is an array of the field names that caused the unique constraint violation — for example ['email'] or ['username', 'organizationId']. Use this to show specific error messages to users.",
  },
  {
    q: "How do I use upsert to avoid P2002?",
    a: "Use prisma.model.upsert({ where: { email }, update: { ...data }, create: { ...data } }). This atomically inserts if not found or updates if found — no race conditions, no P2002.",
  },
  {
    q: "P2002 on a field I didn't mark @unique — why?",
    a: "Check your schema for @@unique([fieldA, fieldB]) composite unique constraints. Also check if you have @id on the field — primary keys are implicitly unique. Run npx prisma studio to inspect the actual database constraints.",
  },
  {
    q: "How do I find all unique constraints in my Prisma schema?",
    a: "Search your schema.prisma file for @unique and @@unique. Also check @id fields — they are implicitly unique. Run npx prisma db pull if your schema may be out of sync with the actual database.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prisma P2002 Unique Constraint Failed — Fixed [2026 Guide]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/prisma/error/prisma-p2002-unique-constraint-failed",
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
            title={"Prisma P2002 Unique Constraint Failed"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: duplicate email · duplicate username · upsert pattern · composite unique"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Prisma · PostgreSQL · Node.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error You Are Seeing"}
            </p>
            <ErrorBlock>{`PrismaClientKnownRequestError:
Invalid \`prisma.user.create()\` invocation:

Unique constraint failed on the fields: (\`email\`)

  code: 'P2002',
  meta: { target: [ 'email' ] }`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="cause">{"What Causes Prisma P2002"}</SH>
          <P>
            {"Prisma throws P2002 when you attempt to "}
            <IC>{"create"}</IC>
            {" or "}
            <IC>{"update"}</IC>
            {" a record with a value that already exists in a column marked "}
            <IC>{"@unique"}</IC>
            {" in your schema. The most common triggers:"}
          </P>
          <CL
            items={[
              "Registering a user with an email that already exists in the database",
              "Inserting a slug, username, or SKU that was already created",
              "Violating a composite @@unique([fieldA, fieldB]) constraint",
              "Running a seed script twice without clearing the database first",
              "Race condition — two requests creating the same record simultaneously",
            ]}
          />
          <P>
            {"The key field to inspect is "}
            <IC>{"error.meta.target"}</IC>
            {" — it tells you exactly which field(s) caused the conflict."}
          </P>

          <FixCard
            number="1"
            title="Catch and Handle the P2002 Error"
            time="3 min"
            tag="Best practice — never let P2002 crash your server"
          >
            <P>
              {
                "The first thing to do is catch the error properly and return a clear user-facing message instead of a 500 crash."
              }
            </P>
            <CodeBlock title="lib/prisma-error.ts">{`import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function isPrismaError(error: unknown, code: string): boolean {
  return (
    error instanceof PrismaClientKnownRequestError &&
    error.code === code
  );
}

export function getUniqueField(error: unknown): string | null {
  if (error instanceof PrismaClientKnownRequestError) {
    const target = error.meta?.target as string[] | undefined;
    return target?.[0] ?? null;
  }
  return null;
}`}</CodeBlock>
            <CodeBlock title="app/api/register/route.ts">{`import { prisma } from "@/lib/prisma";
import { isPrismaError, getUniqueField } from "@/lib/prisma-error";

export async function POST(request: Request) {
  const { email, name, password } = await request.json();

  try {
    const user = await prisma.user.create({
      data: { email, name, password },
    });
    return Response.json({ user });
  } catch (error) {
    if (isPrismaError(error, "P2002")) {
      const field = getUniqueField(error);
      return Response.json(
        { error: \`\${field ?? "Value"} already in use\` },
        { status: 409 }
      );
    }
    throw error; // re-throw unexpected errors
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Always re-throw errors that are not P2002 — otherwise you will silently swallow unexpected database errors."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Use upsert Instead of create"
            time="2 min"
            tag="Atomic — no race conditions, no P2002"
          >
            <P>
              {
                "If your intent is 'create if not exists, update if exists', use "
              }
              <IC>{"upsert"}</IC>
              {". This is atomic — it eliminates race conditions entirely."}
            </P>
            <CodeBlock title="upsert pattern">{`// BEFORE — throws P2002 on duplicate email
const user = await prisma.user.create({
  data: { email, name, role: "member" },
});

// AFTER — safe upsert, never throws P2002
const user = await prisma.user.upsert({
  where: { email },
  update: { name }, // fields to update if record exists
  create: { email, name, role: "member" }, // fields for new record
});`}</CodeBlock>
            <CodeBlock title="upsert for settings/config tables">{`// Great for seeding or syncing external data
const config = await prisma.appConfig.upsert({
  where: { key: "maintenance_mode" },
  update: { value: "false" },
  create: { key: "maintenance_mode", value: "false" },
});`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Check Before Inserting (findUnique)"
            time="3 min"
            tag="Use when you need to return specific validation errors"
          >
            <P>
              {
                "When you need granular validation messages per field, check first with "
              }
              <IC>{"findUnique"}</IC>
              {" before creating."}
            </P>
            <WarnBox>
              {
                "findUnique + create is NOT atomic — a race condition can still cause P2002 between the two calls. For high-traffic endpoints, prefer upsert or catch P2002 directly."
              }
            </WarnBox>
            <CodeBlock title="validation before insert">{`export async function registerUser(email: string, name: string) {
  // Check for existing email first
  const existing = await prisma.user.findUnique({
    where: { email },
    select: { id: true }, // only fetch what you need
  });

  if (existing) {
    return {
      error: "An account with this email already exists",
      field: "email",
    };
  }

  // Safe to create — but still wrap in try/catch for race conditions
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    return { user };
  } catch (error) {
    if (isPrismaError(error, "P2002")) {
      return { error: "Email already in use", field: "email" };
    }
    throw error;
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Composite Unique Constraints"
            time="3 min"
            tag="@@unique([fieldA, fieldB]) in schema.prisma"
          >
            <P>
              {
                "Composite unique constraints enforce uniqueness across multiple fields together. The error looks the same but "
              }
              <IC>{"error.meta.target"}</IC>
              {" will contain multiple field names."}
            </P>
            <CodeBlock title="schema.prisma — composite unique">{`model TeamMember {
  id         String @id @default(cuid())
  userId     String
  teamId     String
  role       String

  // A user can only belong to a team once
  @@unique([userId, teamId])
}`}</CodeBlock>
            <CodeBlock title="handling composite P2002">{`try {
  await prisma.teamMember.create({
    data: { userId, teamId, role: "member" },
  });
} catch (error) {
  if (isPrismaError(error, "P2002")) {
    // error.meta.target = ['userId', 'teamId']
    const fields = (error as PrismaClientKnownRequestError)
      .meta?.target as string[];

    if (fields.includes("userId") && fields.includes("teamId")) {
      return { error: "User is already a member of this team" };
    }
  }
  throw error;
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Database Has Stale Duplicate Data"
            time="3 min"
            tag="Seed scripts · data imports · migration drift"
          >
            <P>
              {
                "If P2002 appears after running a seed script or data import, your database likely contains rows that violate the unique constraint you added later. Fix the data first."
              }
            </P>
            <CodeBlock title="terminal — inspect duplicates with Prisma Studio">{`# Open Prisma Studio to inspect and delete duplicate rows
npx prisma studio

# Or query duplicates with raw SQL (PostgreSQL)
npx prisma db execute --stdin <<'SQL'
SELECT email, COUNT(*) as count
FROM "User"
GROUP BY email
HAVING COUNT(*) > 1;
SQL`}</CodeBlock>
            <CodeBlock title="seed.ts — guard against duplicate seeding">{`// Use upsert in seeds to make them idempotent
async function seed() {
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin",
      role: "admin",
    },
  });
}

seed().catch(console.error).finally(() => prisma.$disconnect());`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Always wrap prisma.create() calls in try/catch and handle P2002 explicitly",
              "Use upsert for seed scripts and external data syncs — always idempotent",
              "Return HTTP 409 Conflict (not 500) when a duplicate is detected",
              "Read error.meta.target to identify the exact conflicting field",
              "Add findUnique pre-checks for expensive operations where conflict is likely",
              "Use Prisma Studio (npx prisma studio) to inspect live data and spot duplicates",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Prisma",
                title: "Fix: Prisma P2025 Record Not Found",
                href: "/category/prisma/error/prisma-p2025-record-not-found",
                time: "5 min read",
              },
              {
                tag: "Prisma",
                title: "Fix: Prisma Migration Error — Schema Drift",
                href: "/category/prisma/error/prisma-migration-error",
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
            title={"We Build Production-Grade Prisma Backends"}
            desc={
              "Softplix architects and maintains Node.js backends with Prisma, PostgreSQL, and Next.js. Need a reliable data layer with proper error handling? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
