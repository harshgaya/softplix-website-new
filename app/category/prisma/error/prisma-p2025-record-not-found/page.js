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
  title: "Prisma P2025 Record Not Found — Fixed [2026 Guide]",
  description:
    "Fix Prisma P2025 record not found error. Covers update vs updateMany, findUnique vs findUniqueOrThrow, delete safety, and proper 404 handling with full code examples.",
  keywords:
    "prisma p2025 record not found, prisma p2025 fix, prisma record to update not found, prisma update not found error 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/prisma/error/prisma-p2025-record-not-found",
  },
  openGraph: {
    title: "Prisma P2025 Record Not Found — Fixed [2026 Guide]",
    description:
      "Fix Prisma P2025 record not found — update, delete, findUniqueOrThrow, safe 404 handling.",
    type: "article",
    url: "https://softplix.com/category/prisma/error/prisma-p2025-record-not-found",
  },
};

const TOC = [
  { label: "What causes Prisma P2025", href: "#cause" },
  { label: "Fix 1 — Catch P2025 and return 404", href: "#fix-1" },
  { label: "Fix 2 — Use findUnique before update/delete", href: "#fix-2" },
  { label: "Fix 3 — Use findUniqueOrThrow", href: "#fix-3" },
  { label: "Fix 4 — P2025 on nested relation updates", href: "#fix-4" },
  { label: "Fix 5 — P2025 on delete operations", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is Prisma error P2025?",
    a: "P2025 means 'An operation failed because it depends on one or more records that were required but not found.' It triggers when you call update(), delete(), or connect() on a record that does not exist in the database.",
  },
  {
    q: "How do I fix Prisma P2025 on update?",
    a: "Either catch the P2025 error and return a 404 response, or use findUnique() first to verify the record exists before updating. For a cleaner API, use prisma.model.findUniqueOrThrow() which throws P2025 automatically if not found.",
  },
  {
    q: "What is the difference between findUnique and findUniqueOrThrow?",
    a: "findUnique() returns null if the record is not found. findUniqueOrThrow() throws a P2025 error instead of returning null. Use findUniqueOrThrow when a missing record is always an error condition — it makes your intent explicit and eliminates null checks.",
  },
  {
    q: "Prisma update throwing P2025 — the record exists in the database. Why?",
    a: "Check the where clause. If you are filtering by multiple fields (e.g. where: { id, organizationId }), the record must match ALL fields. A wrong organizationId will cause P2025 even if the id exists. Also check for soft-deleted records filtered by a deletedAt field.",
  },
  {
    q: "How do I safely delete a record without P2025?",
    a: "Use deleteMany() instead of delete() — deleteMany() returns a count of deleted records and never throws P2025 even if no records matched. Check the count field to know if the deletion happened.",
  },
  {
    q: "P2025 on a nested connect — what does that mean?",
    a: "When you use connect: { id: categoryId } inside a create or update, Prisma must find that related record. If categoryId does not exist in the Category table, Prisma throws P2025. Validate foreign key IDs before creating related records.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prisma P2025 Record Not Found — Fixed [2026 Guide]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/prisma/error/prisma-p2025-record-not-found",
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
            title={"Prisma P2025 Record Not Found"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: update not found · delete not found · findUniqueOrThrow · nested connect"
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
An operation failed because it depends on one or more records
that were required but not found.

  code: 'P2025',
  meta: {
    modelName: 'User',
    cause: 'Record to update not found.'
  }`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="cause">{"What Causes Prisma P2025"}</SH>
          <P>
            {
              "P2025 fires whenever Prisma tries to operate on a record it cannot locate. The three most common triggers:"
            }
          </P>
          <CL
            items={[
              "Calling prisma.model.update() with a where clause that matches no row",
              "Calling prisma.model.delete() on an ID that does not exist",
              "Using connect: { id } inside a nested create/update for a relation that does not exist",
            ]}
          />
          <P>
            {
              "Unlike P2002 which is about duplicates, P2025 is about absence. The fix pattern is always the same: either verify the record exists first, or catch P2025 and return a 404."
            }
          </P>

          <FixCard
            number="1"
            title="Catch P2025 and Return 404"
            time="3 min"
            tag="Best practice for API routes"
          >
            <CodeBlock title="lib/prisma-error.ts">{`import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function isPrismaError(error: unknown, code: string): boolean {
  return (
    error instanceof PrismaClientKnownRequestError &&
    error.code === code
  );
}`}</CodeBlock>
            <CodeBlock title="app/api/users/[id]/route.ts">{`import { prisma } from "@/lib/prisma";
import { isPrismaError } from "@/lib/prisma-error";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();

  try {
    const user = await prisma.user.update({
      where: { id: params.id },
      data,
    });
    return Response.json({ user });
  } catch (error) {
    if (isPrismaError(error, "P2025")) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    throw error;
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Return HTTP 404 for P2025 — not 400 or 500. The record the client referenced simply does not exist."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Use findUnique Before update/delete"
            time="3 min"
            tag="Explicit existence check pattern"
          >
            <P>
              {
                "When you need to use the existing record data in your response or logic, fetch it first with findUnique."
              }
            </P>
            <CodeBlock title="explicit check before update">{`export async function updatePost(id: string, data: Partial<Post>) {
  // Check existence first
  const existing = await prisma.post.findUnique({
    where: { id },
    select: { id: true, authorId: true },
  });

  if (!existing) {
    return { error: "Post not found", status: 404 };
  }

  // Optional: authorization check using existing data
  if (existing.authorId !== currentUserId) {
    return { error: "Forbidden", status: 403 };
  }

  const updated = await prisma.post.update({
    where: { id },
    data,
  });
  return { post: updated, status: 200 };
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use findUniqueOrThrow"
            time="2 min"
            tag="Cleaner API — no null checks needed"
          >
            <P>
              {"Prisma's built-in "}
              <IC>{"findUniqueOrThrow"}</IC>
              {
                " throws P2025 automatically when a record is not found — eliminating null checks."
              }
            </P>
            <CodeBlock title="findUniqueOrThrow pattern">{`// BEFORE — null check required
const user = await prisma.user.findUnique({ where: { id } });
if (!user) throw new Error("Not found");

// AFTER — throws P2025 automatically, no null check needed
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
    include: { profile: true },
  });
  return user;
} catch (error) {
  if (isPrismaError(error, "P2025")) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }
  throw error;
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="P2025 on Nested Relation Updates"
            time="3 min"
            tag="connect · disconnect · set on relations"
          >
            <P>
              {"When you use "}
              <IC>{"connect"}</IC>
              {
                " inside a nested write, Prisma looks up the related record. If it does not exist, P2025 fires."
              }
            </P>
            <CodeBlock title="nested connect — validate ID first">{`// This throws P2025 if categoryId does not exist
await prisma.post.create({
  data: {
    title: "My Post",
    category: { connect: { id: categoryId } }, // P2025 if missing
  },
});

// Fix — validate the related record exists first
const category = await prisma.category.findUnique({
  where: { id: categoryId },
  select: { id: true },
});
if (!category) {
  return Response.json({ error: "Category not found" }, { status: 404 });
}

await prisma.post.create({
  data: { title: "My Post", category: { connect: { id: categoryId } } },
});`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="P2025 on Delete — Use deleteMany Instead"
            time="2 min"
            tag="Safe delete — never throws P2025"
          >
            <P>
              {
                "The easiest way to avoid P2025 on delete operations: switch from "
              }
              <IC>{"delete()"}</IC>
              {" to "}
              <IC>{"deleteMany()"}</IC>
              {"."}
            </P>
            <CodeBlock title="safe delete pattern">{`// BEFORE — throws P2025 if id doesn't exist
await prisma.post.delete({ where: { id } });

// AFTER — returns count, never throws P2025
const result = await prisma.post.deleteMany({
  where: { id },
});

if (result.count === 0) {
  return Response.json({ error: "Post not found" }, { status: 404 });
}
return Response.json({ deleted: true });`}</CodeBlock>
            <TipBox>
              {
                "deleteMany() is idempotent — perfect for webhooks or retry-able operations where the same delete may be called multiple times."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Use findUniqueOrThrow() instead of findUnique() when a missing record is always an error",
              "Catch P2025 in all update() and delete() calls and return HTTP 404",
              "Validate foreign key IDs before nested connect operations",
              "Use deleteMany() instead of delete() for safe, idempotent deletes",
              "Always re-throw non-P2025 errors — do not swallow unexpected exceptions",
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
              "Softplix architects and maintains Node.js backends with Prisma, PostgreSQL, and Next.js. Proper error handling included from day one."
            }
          />
        </div>
      </main>
    </>
  );
}
