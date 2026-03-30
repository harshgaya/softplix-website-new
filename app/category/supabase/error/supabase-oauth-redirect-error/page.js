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
  title: "Supabase Foreign Key Constraint Error — Fixed [2026]",
  description:
    "Fix Supabase foreign key constraint violation errors. Covers insert order, cascade delete, orphaned rows, profiles table trigger, and ON DELETE behaviour.",
  keywords:
    "supabase foreign key constraint error, supabase insert foreign key violation, supabase violates foreign key constraint, supabase cascade delete 2026, supabase profiles trigger",
  alternates: {
    canonical:
      "https://softplix.com/category/supabase/error/supabase-foreign-key-constraint-error",
  },
  openGraph: {
    title: "Supabase Foreign Key Constraint Error — Fixed [2026]",
    description:
      "Fix Supabase foreign key violations — insert order, cascade, profiles trigger, ON DELETE.",
    type: "article",
    url: "https://softplix.com/category/supabase/error/supabase-foreign-key-constraint-error",
  },
};

const TOC = [
  {
    label: "What causes foreign key constraint violations in Supabase",
    href: "#why",
  },
  { label: "Fix 1 — Insert parent row before child row", href: "#fix-1" },
  { label: "Fix 2 — Fix user profile not created on signup", href: "#fix-2" },
  { label: "Fix 3 — Set correct ON DELETE behaviour", href: "#fix-3" },
  { label: "Fix 4 — Fix delete failing due to child rows", href: "#fix-4" },
  { label: "Fix 5 — Find and fix orphaned rows", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is a foreign key constraint violation in Supabase?",
    a: "A foreign key constraint ensures that a value in one table's column must exist as a primary key in another table. A violation means you are trying to insert a row with a foreign key value that doesn't exist in the parent table — for example, inserting a post with user_id that doesn't exist in the users table.",
  },
  {
    q: "Why does Supabase say 'insert or update on table violates foreign key constraint'?",
    a: "This means you are inserting a row in the child table (e.g. posts) with a foreign key value (e.g. user_id) that does not exist in the parent table (e.g. users). Always insert or verify the parent row exists before inserting the child row.",
  },
  {
    q: "Why does my profiles table not get a row when a new user signs up?",
    a: "Supabase does not automatically create a profiles row when a user signs up. You must set up a PostgreSQL trigger function that fires on INSERT to auth.users and creates the corresponding profiles row. This is a common setup step that many tutorials skip.",
  },
  {
    q: "What is ON DELETE CASCADE in Supabase?",
    a: "ON DELETE CASCADE means that when a parent row is deleted, all child rows referencing it are automatically deleted too. Without CASCADE, deleting a parent row that has child rows fails with a foreign key constraint error. Add CASCADE to foreign keys where child rows should be cleaned up automatically.",
  },
  {
    q: "How do I delete a user and all their data in Supabase?",
    a: "Ensure all tables with user_id foreign keys have ON DELETE CASCADE set. Then delete the user from auth.users using supabaseAdmin.auth.admin.deleteUser(userId). Cascade will handle deleting all related rows automatically.",
  },
  {
    q: "What are orphaned rows in a database?",
    a: "Orphaned rows are child rows whose parent row no longer exists — typically created when the foreign key constraint was added after data was inserted, or when the parent was deleted without proper CASCADE. They cause inconsistencies and can break queries that JOIN parent and child tables.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supabase Foreign Key Constraint Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/supabase/error/supabase-foreign-key-constraint-error",
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
            tags={["Supabase", "PostgreSQL", "Error Fix"]}
            title={"Supabase Foreign Key Constraint Error"}
            subtitle={"— Violation Fixed [2026]"}
            sub={
              "Also covers: insert order · profiles trigger · ON DELETE CASCADE · orphaned rows · delete parent with children"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Supabase · PostgreSQL · SQL"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`{
  code: "23503",
  message: "insert or update on table \"posts\" violates
            foreign key constraint \"posts_user_id_fkey\"",
  details: "Key (user_id)=(some-uuid) is not present in table \"users\"."
}`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root cause — inserting child row before parent exists"}
            </p>
            <CodeBlock title="Fix — always insert parent first, then child">{`// ✅ Step 1: ensure user/profile exists
// ✅ Step 2: then insert the post with that user_id
const { data: post } = await supabase
  .from("posts")
  .insert({ title: "Hello", user_id: user.id })  // user.id must exist in users`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"What Causes Foreign Key Constraint Violations"}</SH>
          <P>
            {
              "A foreign key is a column that references the primary key of another table. PostgreSQL enforces that the referenced value must exist — you cannot create a "
            }
            <IC>{"posts"}</IC>
            {" row with a "}
            <IC>{"user_id"}</IC>
            {" that doesn't exist in "}
            <IC>{"users"}</IC>
            {"."}
          </P>
          <P>
            {
              "In Supabase, the most common scenarios are: inserting a post before the user's profile row is created, deleting a user without cleaning up their related data, or seeding data in the wrong order."
            }
          </P>

          <FixCard
            number="1"
            title="Insert Parent Row Before Child Row"
            time="2 min"
            tag="Root cause — wrong insert order"
          >
            <P>
              {
                "Always ensure the parent row exists before inserting child rows. In async code, await each operation before proceeding to the next."
              }
            </P>
            <CodeBlock title="Correct insert order">{`// ❌ Wrong — inserting post before confirming user exists
await supabase.from("posts").insert({ title, user_id: someId })

// ✅ Correct — verify user exists first
const { data: { user } } = await supabase.auth.getUser()
if (!user) throw new Error("Must be logged in")

// Now safe to insert — user.id is guaranteed to exist in auth.users
const { error } = await supabase
  .from("posts")
  .insert({ title, user_id: user.id })

if (error) console.error(error.message)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix User Profile Not Created on Signup"
            time="5 min"
            tag="profiles table missing row — trigger setup"
          >
            <P>
              {"A very common pattern is to have a "}
              <IC>{"profiles"}</IC>
              {" table that stores extra user data, with a foreign key to "}
              <IC>{"auth.users"}</IC>
              {
                "  . Set up a PostgreSQL trigger to auto-create the profile row when a new user signs up."
              }
            </P>
            <CodeBlock title="Supabase SQL Editor — create profiles trigger">{`-- Step 1: Create the profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Step 3: Create the trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'avatar_url'
  );
  RETURN NEW;
END;
$$;

-- Step 4: Attach trigger to auth.users INSERT
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();`}</CodeBlock>
            <TipBox>
              {
                "After adding this trigger, every new Supabase signup automatically creates a corresponding profiles row. Foreign key violations on the profiles table are eliminated."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Set Correct ON DELETE Behaviour"
            time="3 min"
            tag="Choose CASCADE, SET NULL, or RESTRICT"
          >
            <P>
              {"When defining foreign keys, choose the right "}
              <IC>{"ON DELETE"}</IC>
              {" behaviour for your data model."}
            </P>
            <CodeBlock title="ON DELETE options — when to use each">{`-- CASCADE: delete child rows automatically when parent is deleted
-- Use for: posts, comments, files owned by a user
ALTER TABLE posts
  ADD CONSTRAINT posts_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- SET NULL: set the FK column to NULL when parent is deleted
-- Use for: optional relationships (e.g. post assigned to deleted category)
ALTER TABLE posts
  ADD CONSTRAINT posts_category_id_fkey
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL;

-- RESTRICT (default): prevent deletion if child rows exist
-- Use for: critical references where data must be explicitly cleaned up first
ALTER TABLE orders
  ADD CONSTRAINT orders_product_id_fkey
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT;`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Delete Failing Due to Child Rows"
            time="3 min"
            tag="Cannot delete parent row — RESTRICT blocking"
          >
            <P>
              {
                "If you get a foreign key error when trying to DELETE a row, child rows are referencing it. Either add CASCADE to the foreign key, or delete child rows first."
              }
            </P>
            <CodeBlock title="Delete children before parent (without CASCADE)">{`// Option A: delete children first, then parent
async function deleteUserAndData(userId: string) {
  // Delete in reverse dependency order
  await supabase.from("comments").delete().eq("user_id", userId)
  await supabase.from("posts").delete().eq("user_id", userId)
  await supabase.from("profiles").delete().eq("id", userId)

  // Finally delete from auth.users (requires service role)
  await supabaseAdmin.auth.admin.deleteUser(userId)
}

// Option B: add ON DELETE CASCADE (better long-term)
-- Run in SQL Editor:
ALTER TABLE posts DROP CONSTRAINT posts_user_id_fkey;
ALTER TABLE posts ADD CONSTRAINT posts_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Find and Fix Orphaned Rows"
            time="3 min"
            tag="Child rows whose parent no longer exists"
          >
            <P>
              {
                "Orphaned rows exist when foreign key constraints were added after data was already inserted, or when CASCADE was not configured. Use SQL to find and clean them up."
              }
            </P>
            <CodeBlock title="Find orphaned rows">{`-- Find posts whose user_id doesn't exist in auth.users
SELECT p.*
FROM posts p
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.id IS NULL;

-- Delete orphaned posts
DELETE FROM posts
WHERE user_id NOT IN (SELECT id FROM auth.users);

-- Find orphaned comments (posts that don't exist)
SELECT c.*
FROM comments c
LEFT JOIN posts p ON c.post_id = p.id
WHERE p.id IS NULL;

-- Add constraint to prevent future orphans
ALTER TABLE posts
  ADD CONSTRAINT posts_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
  NOT VALID;  -- skip validation of existing rows

-- Then validate when ready (runs in background):
ALTER TABLE posts VALIDATE CONSTRAINT posts_user_id_fkey;`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Set up the profiles trigger immediately after creating your Supabase project — before any user signs up",
              "Always use ON DELETE CASCADE for user-owned data (posts, comments, files, profiles)",
              "Seed data in dependency order — parent tables before child tables",
              "Always verify the logged-in user exists with getUser() before inserting related data",
              "Use NOT VALID when adding constraints to existing tables, then VALIDATE separately",
              "Regularly run orphan queries in staging environments to catch data integrity issues early",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Supabase",
                title: "Fix: Supabase RLS blocking queries",
                href: "/category/supabase/error/supabase-row-level-security-blocking",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase storage upload error",
                href: "/category/supabase/error/supabase-storage-upload-error",
                time: "6 min read",
              },
              {
                tag: "Prisma",
                title: "Fix: Prisma P2002 unique constraint failed",
                href: "/category/prisma/error/prisma-p2002-unique-constraint-failed",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Design Robust Supabase Database Schemas"}
            desc={
              "Softplix engineers build Supabase schemas with correct foreign keys, triggers, RLS, and cascade behaviour for production apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
