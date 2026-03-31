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
  title: "Drizzle ORM Relations Not Working — Fixed [2026]",
  description:
    "Fix Drizzle ORM relations not returning related data. Covers relations(), with: clause, one-to-many, many-to-many, and passing db with schema to drizzle().",
  keywords:
    "drizzle orm relation not working, drizzle with clause not returning data 2026, drizzle one to many, drizzle many to many relation, drizzle relations schema",
  alternates: {
    canonical:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-relation-not-working",
  },
  openGraph: {
    title: "Drizzle ORM Relations Not Working — Fixed [2026]",
    description:
      "Fix Drizzle ORM relations — relations(), with:, one-to-many, many-to-many, db schema.",
    type: "article",
    url: "https://softplix.com/category/drizzle-orm/error/drizzle-orm-relation-not-working",
  },
};

const TOC = [
  { label: "How Drizzle relations work", href: "#how" },
  {
    label: "Fix 1 — Pass schema to drizzle() when using relations",
    href: "#fix-1",
  },
  { label: "Fix 2 — Define one-to-many relations correctly", href: "#fix-2" },
  {
    label: "Fix 3 — Define many-to-many relations with a junction table",
    href: "#fix-3",
  },
  { label: "Fix 4 — Use with: to eagerly load related data", href: "#fix-4" },
  { label: "Fix 5 — Use joins as an alternative to relations", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Drizzle relations return undefined for related data?",
    a: "The most common cause is not passing the schema to drizzle() when initialising the client. Drizzle needs the schema object (containing your table and relation definitions) to resolve relations. Without it, the with: clause silently returns undefined.",
  },
  {
    q: "Do I need to define both sides of a relation in Drizzle?",
    a: "Yes. Unlike Prisma, Drizzle requires you to explicitly define both sides of a relation — the 'one' side and the 'many' side using relations(). Both are needed for the with: clause to work in either direction.",
  },
  {
    q: "What is the difference between .references() and relations() in Drizzle?",
    a: ".references() is a SQL-level foreign key constraint — it tells the database that a column references another table's primary key. relations() is a Drizzle-level abstraction for querying related data using the with: clause. You typically need both: .references() for data integrity, relations() for convenient querying.",
  },
  {
    q: "Can I query related data in Drizzle without using relations()?",
    a: "Yes — use SQL JOINs with db.select().from(table).leftJoin(otherTable, eq(table.id, otherTable.tableId)). This is more verbose but doesn't require relations() definitions. It is also more flexible for complex queries.",
  },
  {
    q: "How do I do a many-to-many relation in Drizzle?",
    a: "Create a junction table with two foreign key columns referencing both tables. Define relations() on all three tables: the two main tables and the junction. Use with: { junctionTable: { with: { otherTable: true } } } to load the full graph.",
  },
  {
    q: "Can Drizzle relations be used in Server Actions and API routes?",
    a: "Yes. The db client with relations is the same one you use everywhere — import it from your db file and use db.query.tableName.findMany({ with: { relation: true } }) in any server-side context.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drizzle ORM Relations Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/drizzle-orm/error/drizzle-orm-relation-not-working",
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
            tags={["Drizzle ORM", "Relations", "Error Fix"]}
            title={"Drizzle ORM Relations Not Working"}
            subtitle={"— with: Clause Fix [2026]"}
            sub={
              "Also covers: pass schema to drizzle() · one-to-many · many-to-many · with: eager loading · join alternative"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Drizzle ORM · PostgreSQL · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// with: clause returns undefined instead of related data
const posts = await db.query.posts.findMany({
  with: { author: true },
})
console.log(posts[0].author)  // undefined`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root cause — missing schema in drizzle() init"}
            </p>
            <CodeBlock title="db/index.ts">{`import * as schema from "./schema"   // ← import all schema including relations
export const db = drizzle(pool, { schema })  // ← pass schema here`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How Drizzle Relations Work"}</SH>
          <P>
            {"Drizzle has two query APIs: the "}
            <IC>{"select"}</IC>
            {" API (SQL-like) and the "}
            <IC>{"query"}</IC>
            {" API (relational, like Prisma). The "}
            <IC>{"query"}</IC>
            {" API's "}
            <IC>{"with:"}</IC>
            {" clause requires: 1) relations defined using "}
            <IC>{"relations()"}</IC>
            {" in your schema, and 2) the schema passed to "}
            <IC>{"drizzle()"}</IC>
            {" when creating the client."}
          </P>

          <FixCard
            number="1"
            title="Pass Schema to drizzle() When Using Relations"
            time="2 min"
            tag="Root cause — most common fix"
          >
            <CodeBlock title="db/index.ts — correct setup">{`import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"     // ← import everything including relations

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })

// ✅ Pass schema — required for db.query.* and with: to work
export const db = drizzle(pool, { schema })

// ❌ Missing schema — with: returns undefined silently
// export const db = drizzle(pool)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Define One-to-Many Relations Correctly"
            time="5 min"
            tag="Post has many comments — user has many posts"
          >
            <CodeBlock title="db/schema.ts — one-to-many both sides required">{`import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const users = pgTable("users", {
  id:    uuid("id").primaryKey().defaultRandom(),
  name:  text("name").notNull(),
  email: text("email").notNull().unique(),
})

export const posts = pgTable("posts", {
  id:     uuid("id").primaryKey().defaultRandom(),
  title:  text("title").notNull(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

// ✅ Define relations on BOTH sides
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),              // user has many posts
}))

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.userId],        // the FK column in posts
    references: [users.id],        // the PK column in users
  }),
}))

// Usage:
const usersWithPosts = await db.query.users.findMany({
  with: { posts: true },           // loads all posts for each user
})

const postWithAuthor = await db.query.posts.findFirst({
  with: { author: true },          // loads the user for the post
  where: eq(posts.id, postId),
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Define Many-to-Many with a Junction Table"
            time="7 min"
            tag="Post has many tags — tag has many posts"
          >
            <CodeBlock title="db/schema.ts — many-to-many pattern">{`export const tags = pgTable("tags", {
  id:   uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
})

// Junction table — the bridge between posts and tags
export const postsToTags = pgTable("posts_to_tags", {
  postId: uuid("post_id").notNull().references(() => posts.id, { onDelete: "cascade" }),
  tagId:  uuid("tag_id").notNull().references(() => tags.id,  { onDelete: "cascade" }),
})

// Relations on all 3 tables
export const postsRelations = relations(posts, ({ one, many }) => ({
  author:   one(users, { fields: [posts.userId], references: [users.id] }),
  postTags: many(postsToTags),
}))

export const tagsRelations = relations(tags, ({ many }) => ({
  postTags: many(postsToTags),
}))

export const postsToTagsRelations = relations(postsToTags, ({ one }) => ({
  post: one(posts, { fields: [postsToTags.postId], references: [posts.id] }),
  tag:  one(tags,  { fields: [postsToTags.tagId],  references: [tags.id]  }),
}))

// Query — posts with their tags
const posts = await db.query.posts.findMany({
  with: {
    postTags: {
      with: { tag: true },   // load tag data through the junction
    },
  },
})
// posts[0].postTags[0].tag.name  → "TypeScript"`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use with: to Eagerly Load Related Data"
            time="3 min"
            tag="Filter and limit related data in with:"
          >
            <CodeBlock title="Advanced with: options">{`// Load posts with only published comments, limited to 5
const posts = await db.query.posts.findMany({
  with: {
    comments: {
      where: eq(comments.published, true),
      limit: 5,
      orderBy: desc(comments.createdAt),
      with: {
        author: {
          columns: { id: true, name: true },   // select only specific columns
        },
      },
    },
    author: {
      columns: { id: true, name: true, email: true },
    },
  },
  where: eq(posts.published, true),
  limit: 10,
  orderBy: desc(posts.createdAt),
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use Joins as an Alternative to Relations"
            time="4 min"
            tag="No relations() defined — use SQL join instead"
          >
            <CodeBlock title="db.select().leftJoin() — no relations() needed">{`import { eq, desc } from "drizzle-orm"

// Left join — get posts with author name
const postsWithAuthors = await db
  .select({
    postId:     posts.id,
    postTitle:  posts.title,
    authorName: users.name,
    authorEmail: users.email,
  })
  .from(posts)
  .leftJoin(users, eq(posts.userId, users.id))
  .where(eq(posts.published, true))
  .orderBy(desc(posts.createdAt))
  .limit(10)

// Result is flat: { postId, postTitle, authorName, authorEmail }[]
// Unlike with:, joins return a flat object — not nested`}</CodeBlock>
            <TipBox>
              {
                "Use the query API (db.query) with with: for most cases — it returns nested objects and is easier to type. Use the select API (.select().from().leftJoin()) for complex aggregations, custom column selection, and performance-sensitive queries."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always pass { schema } to drizzle() — without it, db.query.* and with: silently return undefined",
              "Import all schema including relation definitions with import * as schema from './schema'",
              "Define relations on BOTH sides of every relationship — Drizzle requires explicit bidirectional definitions",
              "Use .references() for FK constraints AND relations() for query-level loading — both are needed",
              "For many-to-many, always create a junction table and define relations on all 3 tables",
              "Test relations in drizzle-kit studio — it shows your schema graph visually",
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
                title: "Fix: Drizzle ORM migration error",
                href: "/category/drizzle-orm/error/drizzle-orm-migration-error",
                time: "7 min read",
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
            title={"We Build Type-Safe Apps with Drizzle ORM"}
            desc={
              "Softplix engineers design Drizzle schemas with relations, type-safe queries, and performant joins for production applications. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
