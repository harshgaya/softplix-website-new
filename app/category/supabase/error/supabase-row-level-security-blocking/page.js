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
  title: "Supabase Row Level Security Blocking Queries — Fixed [2026]",
  description:
    "Fix Supabase RLS blocking your queries and returning empty arrays or permission denied errors. Covers enabling RLS, writing SELECT/INSERT/UPDATE policies, service role, and anon key.",
  keywords:
    "supabase row level security blocking, supabase rls empty array, supabase permission denied rls, supabase rls policy not working 2026, supabase rls select insert",
  alternates: {
    canonical:
      "https://softplix.com/category/supabase/error/supabase-row-level-security-blocking",
  },
  openGraph: {
    title: "Supabase Row Level Security Blocking — Fixed [2026]",
    description:
      "Fix Supabase RLS — policies, service role, anon key, SELECT INSERT UPDATE patterns.",
    type: "article",
    url: "https://softplix.com/category/supabase/error/supabase-row-level-security-blocking",
  },
};

const TOC = [
  { label: "How Supabase RLS works (and why it blocks you)", href: "#how" },
  { label: "Fix 1 — Add a SELECT policy to read rows", href: "#fix-1" },
  { label: "Fix 2 — Add INSERT, UPDATE, DELETE policies", href: "#fix-2" },
  {
    label: "Fix 3 — Use service role key to bypass RLS (server only)",
    href: "#fix-3",
  },
  { label: "Fix 4 — Debug RLS with auth.uid() in SQL editor", href: "#fix-4" },
  { label: "Fix 5 — Fix RLS for public tables (anon access)", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does my Supabase query return an empty array instead of data?",
    a: "When Row Level Security (RLS) is enabled and no policy allows the current user to read the rows, Supabase silently returns an empty array instead of a permission error. This is intentional — it prevents leaking the existence of data. Add a SELECT policy to allow access to the rows.",
  },
  {
    q: "What is the difference between RLS enabled and RLS disabled?",
    a: "With RLS disabled, anyone with the anon key can read and write all rows in the table — dangerous for production. With RLS enabled, all access is denied by default until you create policies that explicitly allow it. Always enable RLS on tables that contain user data.",
  },
  {
    q: "What is auth.uid() in Supabase RLS policies?",
    a: "auth.uid() returns the UUID of the currently authenticated user. Use it in RLS policies to restrict rows to the owner — for example: auth.uid() = user_id ensures each user can only read their own rows.",
  },
  {
    q: "When should I use the service role key?",
    a: "Use the service role key only in server-side code (Next.js Server Components, API routes, Server Actions, cron jobs) that needs to bypass RLS — for example, admin operations, seeding data, or background jobs. Never expose the service role key to the browser.",
  },
  {
    q: "How do I allow public read access to a Supabase table?",
    a: "Create a SELECT policy with 'true' as the condition: CREATE POLICY allow_public_read ON table_name FOR SELECT USING (true). This allows anyone — authenticated or anonymous — to read the table. Use this for public content like blog posts or product listings.",
  },
  {
    q: "Can I test RLS policies without logging in?",
    a: "Yes. In the Supabase SQL Editor, you can use SET LOCAL role = anon to simulate an anonymous request, or SET LOCAL role = authenticated; SET LOCAL request.jwt.claims = JSON to simulate an authenticated user. This lets you test your policies directly in SQL.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supabase Row Level Security Blocking Queries — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/supabase/error/supabase-row-level-security-blocking",
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
            tags={["Supabase", "RLS", "Error Fix"]}
            title={"Supabase Row Level Security Blocking"}
            subtitle={"Your Queries — Fixed [2026]"}
            sub={
              "Also covers: empty array vs permission error · SELECT/INSERT policies · auth.uid() · service role · anon access"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Supabase · PostgreSQL · RLS Policies"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptoms"}
            </p>
            <ErrorBlock>{`// Query returns empty array (not an error) — RLS silently blocking
const { data } = await supabase.from("posts").select("*")
console.log(data)  // [] — RLS blocked the query

// OR explicit error for INSERT/UPDATE/DELETE:
{ code: "42501", message: "permission denied for table posts" }`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root cause — RLS enabled, no policy added"}
            </p>
            <CodeBlock title="Supabase SQL Editor — add a SELECT policy">{`-- Allow authenticated users to read their own posts
CREATE POLICY "Users can read own posts"
  ON posts FOR SELECT
  USING (auth.uid() = user_id);`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How Supabase RLS Works (and Why It Blocks You)"}</SH>
          <P>
            {
              "Row Level Security is a PostgreSQL feature that Supabase enables by default on new tables created through the dashboard. When RLS is on, "
            }
            <IC>{"DENY ALL"}</IC>
            {
              " is the default — every query returns zero rows or a permission error unless a policy explicitly allows it."
            }
          </P>
          <P>
            {
              "This is the correct behaviour for security, but it catches developers off guard during initial setup. The fix is always to add the appropriate policies for each operation (SELECT, INSERT, UPDATE, DELETE) you want to permit."
            }
          </P>

          <FixCard
            number="1"
            title="Add a SELECT Policy to Read Rows"
            time="3 min"
            tag="Query returns empty array — most common RLS issue"
          >
            <P>
              {
                "Add a SELECT policy that defines which rows the current user is allowed to read. The "
              }
              <IC>{"USING"}</IC>
              {
                " clause is a SQL expression that filters rows — only rows where this expression is true are returned."
              }
            </P>
            <CodeBlock title="Common SELECT policy patterns">{`-- Pattern 1: Users can only read their own rows
CREATE POLICY "Users read own rows"
  ON posts FOR SELECT
  USING (auth.uid() = user_id);

-- Pattern 2: Public read — anyone can read (blog posts, products)
CREATE POLICY "Public can read posts"
  ON posts FOR SELECT
  USING (true);

-- Pattern 3: Only read published rows
CREATE POLICY "Read published posts"
  ON posts FOR SELECT
  USING (status = 'published' OR auth.uid() = user_id);

-- Pattern 4: Read rows belonging to user's organisation
CREATE POLICY "Read own org rows"
  ON documents FOR SELECT
  USING (
    organisation_id IN (
      SELECT organisation_id FROM memberships WHERE user_id = auth.uid()
    )
  );`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add INSERT, UPDATE, DELETE Policies"
            time="5 min"
            tag="Write operations getting permission denied"
          >
            <P>
              {"Each operation needs its own policy. "}
              <IC>{"INSERT"}</IC>
              {" uses "}
              <IC>{"WITH CHECK"}</IC>
              {" (validates the new row), "}
              <IC>{"UPDATE"}</IC>
              {" uses both "}
              <IC>{"USING"}</IC>
              {" (which rows can be updated) and "}
              <IC>{"WITH CHECK"}</IC>
              {" (what the updated row must look like), and "}
              <IC>{"DELETE"}</IC>
              {" uses only "}
              <IC>{"USING"}</IC>
              {"."}
            </P>
            <CodeBlock title="Full CRUD policies for a posts table">{`-- SELECT: read own posts
CREATE POLICY "Users read own posts"
  ON posts FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: only insert rows where user_id matches the logged-in user
CREATE POLICY "Users insert own posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: only update own rows, and user_id must still match after update
CREATE POLICY "Users update own posts"
  ON posts FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: only delete own rows
CREATE POLICY "Users delete own posts"
  ON posts FOR DELETE
  USING (auth.uid() = user_id);`}</CodeBlock>
            <TipBox>
              {
                "You can combine all operations into one policy with FOR ALL, but separate policies per operation give you finer control and are easier to debug."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Use Service Role Key to Bypass RLS (Server Only)"
            time="3 min"
            tag="Admin operations, background jobs, seeding"
          >
            <P>
              {
                "The service role key bypasses RLS entirely. Use it only in server-side code — never expose it to the browser. Create a separate admin Supabase client using the service role key."
              }
            </P>
            <CodeBlock title="lib/supabase/admin.ts — server only">{`import { createClient } from "@supabase/supabase-js"

// ⚠️ NEVER import this file in Client Components
// ⚠️ NEVER use SUPABASE_SERVICE_ROLE_KEY in the browser
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,   // not NEXT_PUBLIC_ — server only
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)`}</CodeBlock>
            <CodeBlock title="app/api/admin/seed/route.ts — admin operation">{`import { supabaseAdmin } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"

// This route handler bypasses RLS — use for admin/internal operations only
export async function POST() {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .insert([{ title: "Seed post", user_id: "admin-uuid", status: "published" }])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}`}</CodeBlock>
            <WarnBox>
              {
                "SUPABASE_SERVICE_ROLE_KEY must never start with NEXT_PUBLIC_. If it does, it is exposed to the browser and any visitor can bypass your RLS entirely."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Debug RLS with auth.uid() in SQL Editor"
            time="3 min"
            tag="Policy not working — test in SQL editor"
          >
            <P>
              {
                "Use the Supabase SQL Editor to test your policies by simulating different user contexts."
              }
            </P>
            <CodeBlock title="Supabase SQL Editor — test RLS policies">{`-- Check what auth.uid() returns (should be your user's UUID when authenticated)
SELECT auth.uid();

-- Test as anon user (not logged in)
SET LOCAL role = anon;
SELECT * FROM posts;  -- should return only publicly allowed rows

-- Check existing policies on a table
SELECT policyname, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'posts';

-- Check if RLS is enabled on a table
SELECT relname, relrowsecurity
FROM pg_class
WHERE relname = 'posts';

-- Temporarily disable RLS to confirm data exists (dev only, revert after!)
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;
SELECT * FROM posts;  -- if rows appear, RLS was blocking — not a data issue
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix RLS for Public Tables (Anon Access)"
            time="2 min"
            tag="Blog posts, products, public content — no login required"
          >
            <P>
              {
                "For tables with public content (blog posts, product listings, pricing), add a policy that allows the "
              }
              <IC>{"anon"}</IC>
              {" role to read rows without authentication."}
            </P>
            <CodeBlock title="Public read access — no login required">{`-- Allow anyone (logged in or not) to read published posts
CREATE POLICY "Public read published posts"
  ON posts FOR SELECT
  TO anon, authenticated          -- applies to both roles
  USING (status = 'published');

-- Allow authenticated users to manage their own posts
CREATE POLICY "Authors manage own posts"
  ON posts FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Verify anon role has SELECT permission on the table
GRANT SELECT ON posts TO anon;
GRANT SELECT ON posts TO authenticated;`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Enable RLS on every table — never leave it disabled in production",
              "Add policies for every operation you need — SELECT, INSERT, UPDATE, DELETE each need their own",
              "Use auth.uid() = user_id as the foundation of user-specific policies",
              "Store SUPABASE_SERVICE_ROLE_KEY without NEXT_PUBLIC_ prefix — server-only, never in browser",
              "Test policies in the SQL Editor with SET LOCAL role before deploying",
              "Add GRANT SELECT ON table TO anon for tables that need public (unauthenticated) read access",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Supabase",
                title: "Fix: Supabase foreign key constraint error",
                href: "/category/supabase/error/supabase-foreign-key-constraint-error",
                time: "6 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase session not persisting",
                href: "/category/supabase/error/supabase-auth-session-not-persisting",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase storage upload error",
                href: "/category/supabase/error/supabase-storage-upload-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Design Secure Supabase RLS Policies"}
            desc={
              "Softplix engineers architect RLS policies, service role patterns, and Supabase security for production apps. Need help securing your database? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
