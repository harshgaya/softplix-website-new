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
  title: "Drizzle ORM Type Error — Fixed [2026]",
  description:
    "Fix Drizzle ORM TypeScript type errors. Covers InferSelectModel, InferInsertModel, column type mismatches, nullable types, and typing query results.",
  keywords:
    "drizzle orm type error, drizzle typescript type error 2026, drizzle InferSelectModel, drizzle nullable type, drizzle query result type",
  alternates: {
    canonical:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-type-error",
  },
  openGraph: {
    title: "Drizzle ORM Type Error — Fixed [2026]",
    description:
      "Fix Drizzle ORM TypeScript errors — InferSelectModel, InferInsertModel, nullable, result types.",
    type: "article",
    url: "https://softplix.com/category/drizzle-orm/error/drizzle-orm-type-error",
  },
};

const TOC = [
  { label: "How Drizzle infers types from your schema", href: "#how" },
  {
    label: "Fix 1 — Use InferSelectModel and InferInsertModel",
    href: "#fix-1",
  },
  { label: "Fix 2 — Fix nullable column type mismatches", href: "#fix-2" },
  { label: "Fix 3 — Type query results correctly", href: "#fix-3" },
  { label: "Fix 4 — Fix eq() and where() type errors", href: "#fix-4" },
  {
    label: "Fix 5 — Type Server Action params from Drizzle schema",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I get TypeScript types from a Drizzle schema?",
    a: "Use InferSelectModel<typeof table> to get the type of a row as it comes from the database (all columns). Use InferInsertModel<typeof table> to get the type of the insert payload (required columns only — optional are optional). Both are exported from drizzle-orm.",
  },
  {
    q: "Why is a column typed as string | null in Drizzle?",
    a: "Columns without .notNull() are nullable in Drizzle — the inferred type includes | null. Add .notNull() to the column if it should never be null, and run drizzle-kit push to apply the constraint to the database.",
  },
  {
    q: "How do I type the result of a Drizzle query?",
    a: "Let TypeScript infer the return type — Drizzle's query API is fully typed. For explicit typing, use InferSelectModel<typeof table>. For partial selects or joins, let TypeScript infer from the query itself using typeof or Awaited<ReturnType<typeof yourQueryFunction>>.",
  },
  {
    q: "Why does eq() give a TypeScript error?",
    a: "eq() requires both arguments to be of compatible types. If you pass a string where a UUID column expects a specific type, or pass undefined where a non-nullable column expects a value, TypeScript will error. Check that the value you're comparing has the same type as the column.",
  },
  {
    q: "Can I extend Drizzle types with additional fields?",
    a: "Yes — use TypeScript's & intersection or extend the inferred type: type UserWithProfile = InferSelectModel<typeof users> & { profile: InferSelectModel<typeof profiles> }. This is useful for typing the result of join queries.",
  },
  {
    q: "How do I type a partial update payload in Drizzle?",
    a: "Use Partial<InferInsertModel<typeof table>> for update payloads where any subset of columns might be updated. Or define a specific update schema: type UpdateUser = Pick<InferInsertModel<typeof users>, 'name' | 'email'>.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drizzle ORM Type Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-type-error",
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
            tags={["Drizzle ORM", "TypeScript", "Error Fix"]}
            title={"Drizzle ORM Type Errors"}
            subtitle={"— InferSelectModel Fix [2026]"}
            sub={
              "Also covers: InferInsertModel · nullable columns · query result typing · eq() errors · Server Action types"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Drizzle ORM · TypeScript · PostgreSQL"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Type Errors"}
            </p>
            <ErrorBlock>{`Type 'string | null' is not assignable to type 'string'.
// OR:
Argument of type 'string' is not assignable to parameter of type 'SQL<unknown>'.
// OR:
Property 'email' does not exist on type '{ id: string; name: string; }'.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Extract types from your Drizzle schema"}
            </p>
            <CodeBlock title="types from schema">{`import { InferSelectModel, InferInsertModel } from "drizzle-orm"
import { users } from "@/db/schema"

type User       = InferSelectModel<typeof users>   // full row type
type NewUser    = InferInsertModel<typeof users>   // insert payload type`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How Drizzle Infers Types from Your Schema"}</SH>
          <P>
            {
              "Drizzle derives TypeScript types directly from your schema definitions. A column with "
            }
            <IC>{".notNull()"}</IC>
            {" is typed as "}
            <IC>{"string"}</IC>
            {"; without it, it's "}
            <IC>{"string | null"}</IC>
            {"  . A column with "}
            <IC>{".default()"}</IC>
            {
              " is optional in the insert type. This means your schema is the single source of truth for types — you never need to write separate TypeScript interfaces for your database models."
            }
          </P>

          <FixCard
            number="1"
            title="Use InferSelectModel and InferInsertModel"
            time="2 min"
            tag="Derive types from schema — no manual interfaces needed"
          >
            <CodeBlock title="db/schema.ts + types">{`import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core"
import { InferSelectModel, InferInsertModel } from "drizzle-orm"

export const posts = pgTable("posts", {
  id:        uuid("id").primaryKey().defaultRandom(),
  title:     text("title").notNull(),
  content:   text("content"),              // nullable — string | null
  published: boolean("published").notNull().default(false),
  userId:    uuid("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

// Select type — what you get back from queries
export type Post = InferSelectModel<typeof posts>
// { id: string; title: string; content: string | null; published: boolean; userId: string; createdAt: Date }

// Insert type — what you pass to db.insert()
export type NewPost = InferInsertModel<typeof posts>
// { title: string; content?: string | null; published?: boolean; userId: string; id?: string; createdAt?: Date }
// Note: id, published, createdAt are optional — they have defaults`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Nullable Column Type Mismatches"
            time="2 min"
            tag="string | null not assignable to string"
          >
            <CodeBlock title="Handling nullable columns">{`// Schema — content is nullable (no .notNull())
export const posts = pgTable("posts", {
  content: text("content"),   // type: string | null
})

// ❌ Error: string | null not assignable to string
function renderPost(post: Post) {
  const length: number = post.content.length   // Error: possibly null
}

// ✅ Fix 1 — nullish coalescing
const content = post.content ?? ""
const length = content.length

// ✅ Fix 2 — null check
if (post.content) {
  console.log(post.content.toUpperCase())
}

// ✅ Fix 3 — make column notNull in schema (if it should never be null)
content: text("content").notNull().default(""),
// Then run: npx drizzle-kit push`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Type Query Results Correctly"
            time="3 min"
            tag="Awaited result type — let TypeScript infer"
          >
            <CodeBlock title="Typing query results">{`import { db } from "@/db"
import { posts, users } from "@/db/schema"
import { eq } from "drizzle-orm"

// ✅ Let TypeScript infer — hover to see the full type
const allPosts = await db.select().from(posts)
// type: { id: string; title: string; content: string | null; ... }[]

// ✅ Partial select — TypeScript infers only selected columns
const titles = await db.select({ id: posts.id, title: posts.title }).from(posts)
// type: { id: string; title: string }[]

// ✅ Type a reusable query function
async function getPublishedPosts() {
  return db.query.posts.findMany({
    where: eq(posts.published, true),
    with: { author: true },
  })
}
// Use Awaited<ReturnType<>> to get the return type
type PublishedPost = Awaited<ReturnType<typeof getPublishedPosts>>[number]`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix eq() and where() Type Errors"
            time="2 min"
            tag="Wrong value type in where clause"
          >
            <CodeBlock title="eq() — match column and value types">{`import { eq, and, or, like, gte, lte, isNull, isNotNull } from "drizzle-orm"

// ❌ Error: number not assignable to UUID column
const post = await db.select().from(posts).where(eq(posts.id, 123))

// ✅ Fix — use the correct type
const post = await db.select().from(posts).where(eq(posts.id, "some-uuid-string"))

// ❌ Error: passing undefined to eq()
const userId: string | undefined = user?.id
await db.select().from(posts).where(eq(posts.userId, userId))  // userId might be undefined

// ✅ Fix — guard before query
if (!userId) throw new Error("User required")
await db.select().from(posts).where(eq(posts.userId, userId))

// Common where clause patterns:
.where(and(eq(posts.published, true), eq(posts.userId, userId)))
.where(or(like(posts.title, "%react%"), like(posts.content, "%react%")))
.where(isNull(posts.deletedAt))
.where(isNotNull(posts.publishedAt))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Type Server Action Params from Drizzle Schema"
            time="3 min"
            tag="Reuse schema types in Server Actions and API routes"
          >
            <CodeBlock title="Server Action with Drizzle types">{`"use server"

import { db } from "@/db"
import { posts, type NewPost } from "@/db/schema"
import { revalidatePath } from "next/cache"

// Use InferInsertModel-derived type for action params
export async function createPost(
  data: Pick<NewPost, "title" | "content" | "userId">
) {
  const [post] = await db
    .insert(posts)
    .values(data)
    .returning()

  revalidatePath("/posts")
  return post
}

// Update — use Partial of the row type
export async function updatePost(
  id: string,
  data: Partial<Pick<NewPost, "title" | "content" | "published">>
) {
  const [updated] = await db
    .update(posts)
    .set(data)
    .where(eq(posts.id, id))
    .returning()

  revalidatePath("/posts")
  return updated
}`}</CodeBlock>
            <TipBox>
              {
                "Deriving your action parameter types from InferSelectModel/InferInsertModel means your TypeScript types stay in sync with your database schema automatically — no manual interface updates needed."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Export Post and NewPost types from your schema file — import them everywhere instead of redefining",
              "Add .notNull() to every column that should never be null — this removes | null from the inferred type",
              "Let TypeScript infer query result types — avoid manual type annotations on query results",
              "Always guard against undefined before passing values to eq() — undefined causes type errors and runtime issues",
              "Use Pick<NewPost, 'field1' | 'field2'> for action params — type-safe and schema-derived",
              "Enable strict mode in tsconfig.json — it makes Drizzle's nullable types show as errors immediately",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM relation not working",
                href: "/category/drizzle-orm/error/drizzle-orm-relation-not-working",
                time: "7 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM not null constraint",
                href: "/category/drizzle-orm/error/drizzle-orm-not-null-constraint",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript type not assignable",
                href: "/category/typescript/error/typescript-type-not-assignable",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Type-Safe Backends with Drizzle ORM"}
            desc={
              "Softplix engineers use Drizzle ORM with strict TypeScript for fully type-safe database layers in Next.js and Node.js apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
