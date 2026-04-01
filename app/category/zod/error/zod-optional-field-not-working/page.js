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
  title:
    "Zod Optional Field Not Working — .optional() vs .nullable() [Fixed 2026]",
  description:
    "Fix Zod optional fields not working correctly. Covers .optional() vs .nullable() vs .nullish(), empty string validation, default values, and TypeScript type inference for optional fields.",
  keywords:
    "zod optional field not working, zod optional vs nullable, zod empty string validation 2026, zod optional field TypeScript undefined, zod default value optional field",
  alternates: {
    canonical:
      "https://softplix.com/category/zod/error/zod-optional-field-not-working",
  },
  openGraph: {
    title: "Zod Optional Field Not Working — Fixed [2026]",
    description:
      "Fix Zod optional fields — .optional() vs .nullable() vs .nullish(), empty strings, defaults.",
    type: "article",
    url: "https://softplix.com/category/zod/error/zod-optional-field-not-working",
  },
};

const TOC = [
  {
    label: "optional() vs nullable() vs nullish() — the difference",
    href: "#difference",
  },
  {
    label: "Fix 1 — Use .optional() for fields that may be absent",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Fix empty string failing optional string validation",
    href: "#fix-2",
  },
  { label: "Fix 3 — Add default values to optional fields", href: "#fix-3" },
  { label: "Fix 4 — Handle optional fields in TypeScript", href: "#fix-4" },
  { label: "Fix 5 — Partial schemas for PATCH requests", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is the difference between Zod optional and nullable?",
    a: ".optional() allows the value to be undefined (field can be absent). .nullable() allows the value to be null (field must be present but can be null). .nullish() allows both undefined and null. In HTML forms, absent fields come through as undefined; database nullable columns come through as null.",
  },
  {
    q: "Why does my Zod optional field fail when the input is an empty string?",
    a: "An empty string is not undefined — it is a valid string value. Zod's z.string().optional() allows undefined but still requires the string to be valid if present. To allow empty strings, add .or(z.literal('')) or use .transform(v => v === '' ? undefined : v) to convert empty strings to undefined.",
  },
  {
    q: "How do I set a default value for a Zod optional field?",
    a: "Use .default(value) — it provides a value when the input is undefined. For example: z.string().default('user') means if the field is absent, the parsed value will be 'user'. The TypeScript type becomes string (not string | undefined) because a default is always provided.",
  },
  {
    q: "What TypeScript type does Zod optional() produce?",
    a: "z.string().optional() produces string | undefined in TypeScript. z.string().nullable() produces string | null. z.string().nullish() produces string | null | undefined. Use z.infer<typeof schema> to get the exact TypeScript type from your Zod schema.",
  },
  {
    q: "How do I make all fields optional for a PATCH request?",
    a: "Use schema.partial() to create a new schema where all fields are optional. For example: const updateSchema = createSchema.partial() produces a schema where every field is optional. This is the standard pattern for PATCH endpoints where you only update the provided fields.",
  },
  {
    q: "Can I mix required and optional fields in the same Zod schema?",
    a: "Yes. Define each field independently — z.string() for required, z.string().optional() for optional. Only the fields marked with .optional() can be omitted. You can also use schema.partial(['field1', 'field2']) to make only specific fields optional while keeping others required.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zod Optional Field Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/zod/error/zod-optional-field-not-working",
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
            title={"Zod Optional Field Not Working"}
            subtitle={"— .optional() vs .nullable() [Fixed 2026]"}
            sub={
              "Also covers: empty string validation · .default() · TypeScript inference · .nullish() · schema.partial() for PATCH"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Zod v3 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Mistakes"}
            </p>
            <ErrorBlock>{`// Fails for empty string — empty string is not undefined
z.string().optional().parse("")   // ZodError: expected string, got undefined?
// No — empty string "" passes .optional() — but min() or email() will reject it

// Wrong modifier — null vs undefined confusion  
z.string().optional().parse(null)   // ZodError — null is not undefined
z.string().nullable().parse(null)   // ✅ null is allowed`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Quick reference"}
            </p>
            <CodeBlock title="optional vs nullable vs nullish">{`z.string().optional()    // string | undefined — field can be absent
z.string().nullable()    // string | null      — field must exist, can be null
z.string().nullish()     // string | null | undefined — both missing and null ok`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="difference">{"optional() vs nullable() vs nullish()"}</SH>
          <P>
            {
              "Zod has three distinct modifiers for handling absent/empty values. Choosing the wrong one is the most common source of optional field bugs: "
            }
            <IC>{".optional()"}</IC>
            {" allows "}
            <IC>{"undefined"}</IC>
            {" (field absent), "}
            <IC>{".nullable()"}</IC>
            {" allows "}
            <IC>{"null"}</IC>
            {" (field present but null), and "}
            <IC>{".nullish()"}</IC>
            {" allows both."}
          </P>

          <FixCard
            number="1"
            title="Use .optional() for Fields That May Be Absent"
            time="2 min"
            tag="Field is undefined when not provided"
          >
            <CodeBlock title="When to use each modifier">{`import { z } from "zod"

const profileSchema = z.object({
  // Required — must be present and valid
  username: z.string().min(3),

  // Optional — field can be completely absent (undefined)
  bio: z.string().max(500).optional(),

  // Nullable — field must be present but can be null (common for DB columns)
  avatarUrl: z.string().url().nullable(),

  // Nullish — field can be missing or explicitly null
  lastSeenAt: z.date().nullish(),
})

// TypeScript types produced:
// username:    string
// bio:         string | undefined
// avatarUrl:   string | null
// lastSeenAt:  Date | null | undefined

// ✅ All pass:
profileSchema.parse({ username: "alice" })                      // bio absent — ok
profileSchema.parse({ username: "alice", bio: undefined })      // bio explicit undefined — ok
profileSchema.parse({ username: "alice", avatarUrl: null })     // null avatar — ok

// ❌ Fails:
profileSchema.parse({ username: "alice", bio: null })           // null not allowed for optional`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Empty String Failing Optional String Validation"
            time="3 min"
            tag="HTML form empty inputs come through as empty strings not undefined"
          >
            <P>
              {
                "HTML form fields submit empty strings when blank — not undefined. "
              }
              <IC>{".optional()"}</IC>
              {
                " allows undefined but still validates the string if present. An empty string with "
              }
              <IC>{".min(1)"}</IC>
              {" still fails."}
            </P>
            <CodeBlock title="Handle empty strings from HTML forms">{`// ❌ z.string().optional() still rejects empty string via .email() or .min()
const schema = z.object({
  email: z.string().email().optional(),   // "" fails .email() even with .optional()
})
schema.parse({ email: "" })  // ZodError: Invalid email

// ✅ Option A — convert empty string to undefined with transform
const schema = z.object({
  email: z.string().email().optional().or(z.literal("")).transform(v => v || undefined),
})

// ✅ Option B — allow empty or valid email
const optionalEmail = z.union([
  z.string().email("Invalid email"),
  z.literal(""),
]).optional().transform(v => v === "" ? undefined : v)

// ✅ Option C — preprocess to convert "" to undefined before validation
const optionalString = z.preprocess(
  val => (val === "" ? undefined : val),
  z.string().optional()
)

// ✅ Most practical — use in form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name required"),
  phone: z.preprocess(
    val => (val === "" ? undefined : val),
    z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone").optional()
  ),
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add Default Values to Optional Fields"
            time="2 min"
            tag=".default() — field is optional but always has a value after parse"
          >
            <CodeBlock title=".default() — provide fallback when field is absent">{`const settingsSchema = z.object({
  theme: z.enum(["light", "dark", "system"]).default("system"),
  language: z.string().default("en"),
  notifications: z.boolean().default(true),
  pageSize: z.number().min(5).max(100).default(20),
})

// All fields optional in input — defaults fill in missing values
settingsSchema.parse({})
// → { theme: "system", language: "en", notifications: true, pageSize: 20 }

settingsSchema.parse({ theme: "dark" })
// → { theme: "dark", language: "en", notifications: true, pageSize: 20 }

// TypeScript type after .default():
type Settings = z.infer<typeof settingsSchema>
// { theme: "light" | "dark" | "system", language: string, ... }
// Note: with .default(), the type is NOT | undefined — default ensures a value always exists`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Handle Optional Fields in TypeScript"
            time="2 min"
            tag="TypeScript undefined type for optional Zod fields"
          >
            <CodeBlock title="TypeScript patterns for optional Zod fields">{`import { z } from "zod"

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string().optional(),        // bio?: string | undefined
  role: z.enum(["admin", "user"]).default("user"),  // role: "admin" | "user"
})

type User = z.infer<typeof userSchema>
// { id: string, name: string, bio?: string | undefined, role: "admin" | "user" }

// Handle optional field in code:
function displayUser(user: User) {
  const bio = user.bio ?? "No bio provided"   // nullish coalescing
  console.log(user.name, bio)
}

// Optional with transform — convert to null for DB storage
const dbUserSchema = userSchema.transform(data => ({
  ...data,
  bio: data.bio ?? null,    // convert undefined to null for DB nullable column
}))

type DbUser = z.infer<typeof dbUserSchema>
// { ..., bio: string | null, role: "admin" | "user" }`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Partial Schemas for PATCH Requests"
            time="2 min"
            tag="PATCH endpoint — all fields optional for partial updates"
          >
            <CodeBlock title="schema.partial() for PATCH API endpoints">{`import { z } from "zod"

// Full creation schema — all fields required
const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(["admin", "user"]),
  bio: z.string().max(500),
})

// PATCH schema — all fields optional (partial update)
const updateUserSchema = createUserSchema.partial()
// Equivalent to: z.object({ name?: ..., email?: ..., role?: ..., bio?: ... })

// Partial only specific fields — keep some required
const partialUpdateSchema = createUserSchema.partial({
  bio: true,    // bio optional
  role: true,   // role optional
})
// name and email still required, bio and role optional

// API route usage:
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()
  const result = updateUserSchema.safeParse(body)
  if (!result.success) return Response.json({ errors: result.error.flatten().fieldErrors }, { status: 422 })

  const updated = await db.user.update({
    where: { id: params.id },
    data: result.data,   // only the provided fields are updated
  })
  return Response.json(updated)
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use .optional() for absent fields, .nullable() for null database values, .nullish() when both are possible",
              "Use z.preprocess(val => val === '' ? undefined : val, z.string().optional()) for HTML form optional strings",
              "Use .default(value) instead of .optional() when you always need a value — removes undefined from the type",
              "Use schema.partial() for PATCH endpoint validation — makes all fields optional without rewriting the schema",
              "Always use z.infer<typeof schema> to keep TypeScript types in sync with your Zod schema",
              "Use z.coerce.number() and z.coerce.boolean() for query params and form checkboxes that are strings",
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
                title: "Fix: Zod parse vs safeParse error",
                href: "/category/zod/error/zod-parse-vs-safeParse-error",
                time: "5 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript type not assignable",
                href: "/category/typescript/error/typescript-type-not-assignable",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Type-Safe Validation with Zod"}
            desc={
              "Softplix engineers implement end-to-end type-safe validation with Zod for forms, APIs, and Server Actions. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
