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
  title: "Zod parse vs safeParse — Which to Use and Error Handling [2026]",
  description:
    "Understand the difference between Zod parse and safeParse. Learn when to use each, how to handle ZodError, flatten errors, and use safeParse in API routes and Server Actions.",
  keywords:
    "zod parse vs safeParse, zod parse throwing error, zod safeParse error handling 2026, ZodError flatten fieldErrors, zod parse api route server action",
  alternates: {
    canonical:
      "https://softplix.com/category/zod/error/zod-parse-vs-safeParse-error",
  },
  openGraph: {
    title: "Zod parse vs safeParse — Fixed [2026]",
    description:
      "Zod parse vs safeParse — when to use each, ZodError, flatten, API routes, Server Actions.",
    type: "article",
    url: "https://softplix.com/category/zod/error/zod-parse-vs-safeParse-error",
  },
};

const TOC = [
  { label: "parse vs safeParse — core difference", href: "#difference" },
  {
    label: "Fix 1 — Use safeParse to avoid uncaught ZodError throws",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Flatten ZodError into field-level messages",
    href: "#fix-2",
  },
  { label: "Fix 3 — Use safeParse in Next.js API routes", href: "#fix-3" },
  { label: "Fix 4 — Use safeParse in Server Actions", href: "#fix-4" },
  { label: "Fix 5 — Use parse for trusted internal data", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is the difference between Zod parse and safeParse?",
    a: "parse throws a ZodError exception if validation fails. safeParse never throws — it returns { success: true, data } or { success: false, error }. Use parse only where you are prepared to catch the thrown error. Use safeParse in API routes, form handlers, and any place where you need to return a structured error response rather than letting an exception propagate.",
  },
  {
    q: "When should I use Zod parse vs safeParse?",
    a: "Use safeParse for user-supplied data (API request bodies, form submissions, URL parameters) where validation failure is expected and you need to return an error response. Use parse for internal data transformations or trusted data pipelines where a validation failure truly means a programming bug and you want a loud error.",
  },
  {
    q: "What is ZodError and how do I read it?",
    a: "ZodError is the exception thrown by parse when validation fails. It has an issues array of ZodIssue objects, each with a path (which field failed), message (the error text), and code (the error type). Use error.flatten() to get a simpler { fieldErrors, formErrors } structure for displaying in forms.",
  },
  {
    q: "What does error.flatten() return?",
    a: "error.flatten() returns { fieldErrors: Record<string, string[]>, formErrors: string[] }. fieldErrors maps field names to arrays of error messages. formErrors contains errors that aren't attached to a specific field (like .refine errors on the whole object). This is the cleanest format for API error responses.",
  },
  {
    q: "Can I use Zod to validate URL query parameters?",
    a: "Yes. Use z.string().transform() or z.coerce for type coercion since URL params are always strings. For example: z.object({ page: z.coerce.number().min(1).default(1), limit: z.coerce.number().max(100).default(20) }) will coerce the string '1' to the number 1 and provide a default if the param is missing.",
  },
  {
    q: "What is parseAsync and safeParseAsync in Zod?",
    a: "parseAsync and safeParseAsync are async versions for schemas with async refinements (like checking a database for duplicate email). They return a Promise and must be awaited. Use them when any .refine() in your schema is async.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zod parse vs safeParse — Error Handling [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/zod/error/zod-parse-vs-safeParse-error",
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
            tags={["Zod", "Validation", "Error Fix"]}
            title={"Zod parse vs safeParse"}
            subtitle={"— Which to Use and Error Handling [2026]"}
            sub={
              "Also covers: ZodError structure · error.flatten() · API route validation · Server Actions · coerce for query params"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Zod v3 · Next.js · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ parse throws — safeParse returns"}
            </p>
            <ErrorBlock>{`// parse throws ZodError if invalid — crashes your API route
const data = schema.parse(req.body)   // ❌ throws unhandled exception

// safeParse never throws — always returns success/error object
const result = schema.safeParse(req.body)   // ✅ safe to use anywhere
if (!result.success) {
  return Response.json({ errors: result.error.flatten().fieldErrors }, { status: 400 })
}`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="difference">{"parse vs safeParse — Core Difference"}</SH>
          <P>
            {
              "Both methods validate data against a Zod schema. The only difference is what happens on failure: "
            }
            <IC>{"parse"}</IC>
            {" throws a "}
            <IC>{"ZodError"}</IC>
            {" exception, "}
            <IC>{"safeParse"}</IC>
            {" returns a result object. In most application code, "}
            <IC>{"safeParse"}</IC>
            {
              " is the safer default because validation failure is a normal expected condition, not an exception."
            }
          </P>

          <FixCard
            number="1"
            title="Use safeParse to Avoid Uncaught ZodError Throws"
            time="2 min"
            tag="parse crashing API routes and Server Actions"
          >
            <CodeBlock title="parse vs safeParse — side by side">{`import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18),
})

// ❌ parse — throws ZodError on invalid data
try {
  const user = userSchema.parse({ name: "", email: "bad", age: 16 })
} catch (err) {
  // err is a ZodError — must be caught or it crashes the process
  if (err instanceof ZodError) {
    console.log(err.issues)  // array of validation issues
  }
}

// ✅ safeParse — never throws, always returns result object
const result = userSchema.safeParse({ name: "", email: "bad", age: 16 })

if (result.success) {
  // TypeScript knows result.data is UserType here
  console.log(result.data)
} else {
  // result.error is a ZodError — access issues, flatten, etc.
  console.log(result.error.issues)
  console.log(result.error.flatten().fieldErrors)
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Flatten ZodError into Field-Level Messages"
            time="2 min"
            tag="Turn ZodError into a clean errors object for API responses"
          >
            <CodeBlock title="error.flatten() — clean error structure">{`const result = schema.safeParse(input)

if (!result.success) {
  const flat = result.error.flatten()
  // flat.fieldErrors: { name: ["Name required"], email: ["Invalid email"] }
  // flat.formErrors:  ["Refine-level errors not tied to a field"]

  // ✅ Return to client:
  return Response.json({ errors: flat.fieldErrors }, { status: 400 })
}

// Alternative — error.format() gives nested structure:
const formatted = result.error.format()
// { _errors: [], name: { _errors: ["Name required"] }, email: { _errors: ["Invalid email"] } }

// Alternative — error.issues for raw array:
result.error.issues.forEach(issue => {
  console.log(issue.path.join("."), issue.message)
  // "name" "String must contain at least 1 character(s)"
  // "email" "Invalid email"
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use safeParse in Next.js API Routes"
            time="3 min"
            tag="Validate request body safely and return structured errors"
          >
            <CodeBlock title="app/api/users/route.ts — safeParse pattern">{`import { z } from "zod"
import { NextRequest, NextResponse } from "next/server"

const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "user", "guest"]).default("user"),
})

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  // ✅ safeParse — never throws, always returns result
  const result = createUserSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 422 }   // Unprocessable Entity
    )
  }

  // result.data is fully typed and validated
  const user = await db.user.create({ data: result.data })
  return NextResponse.json(user, { status: 201 })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use safeParse in Server Actions"
            time="3 min"
            tag="Validate formData in Server Actions before DB write"
          >
            <CodeBlock title="app/actions.ts — Server Action validation">{`"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  published: z.boolean().default(false),
})

type ActionState = {
  errors?: Record<string, string[]>
  success?: boolean
}

export async function createPost(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    title: formData.get("title"),
    content: formData.get("content"),
    published: formData.get("published") === "on",
  }

  const result = postSchema.safeParse(raw)

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors }
  }

  await db.post.create({ data: result.data })
  revalidatePath("/posts")
  return { success: true }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use parse for Trusted Internal Data"
            time="2 min"
            tag="Configuration, env vars, static data — parse is correct here"
          >
            <P>
              {"Use "}
              <IC>{"parse"}</IC>
              {
                " when validating data that should never fail — environment variables at startup, static configuration, or data you control. A throw here means a real programming error."
              }
            </P>
            <CodeBlock title="parse for env vars — fail fast at startup">{`// lib/env.ts — parse env vars at module load time
import { z } from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  OPENAI_API_KEY: z.string().startsWith("sk-"),
  NODE_ENV: z.enum(["development", "test", "production"]),
})

// ✅ parse — if env vars are wrong the app should crash immediately
// This throws at startup with a clear error message — not silently fail later
export const env = envSchema.parse(process.env)

// Usage anywhere in the app:
import { env } from "@/lib/env"
console.log(env.DATABASE_URL)   // fully typed, validated string`}</CodeBlock>
            <WarnBox>
              {
                "Never use parse on user-supplied data in API routes or Server Actions — a ZodError thrown inside an API route will return a 500 error instead of a proper 422 validation error response."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Default to safeParse for all user-supplied data — API request bodies, form submissions, URL params",
              "Use parse only for env vars, config files, and static internal data that should fail loudly",
              "Use error.flatten().fieldErrors for API error responses — clean field → messages mapping",
              "Use z.coerce.number() and z.coerce.boolean() for query params which are always strings",
              "Use parseAsync / safeParseAsync when any .refine() in your schema is async",
              "Validate at the API boundary — don't trust TypeScript alone for runtime data from external sources",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Zod",
                title: "Fix: Zod validation error not showing",
                href: "/category/zod/error/zod-validation-error-not-showing",
                time: "6 min read",
              },
              {
                tag: "Zod",
                title: "Fix: Zod optional field not working",
                href: "/category/zod/error/zod-optional-field-not-working",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Server Actions not working",
                href: "/category/next-js/error/nextjs-server-action-not-working",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Type-Safe APIs with Zod"}
            desc={
              "Softplix engineers build fully validated, type-safe Next.js APIs and Server Actions with Zod schemas and end-to-end TypeScript. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
