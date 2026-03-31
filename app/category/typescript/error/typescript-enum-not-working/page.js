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
  title: "TypeScript Enum Not Working — Fixed [2026]",
  description:
    "Fix TypeScript enum errors. Covers string enums, numeric enum reverse mapping, const enum vs enum, enum in switch, and modern alternatives with as const.",
  keywords:
    "typescript enum not working, typescript enum error, typescript const enum vs enum, typescript string enum fix 2026, typescript as const enum alternative",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-enum-not-working",
  },
  openGraph: {
    title: "TypeScript Enum Not Working — Fixed [2026]",
    description:
      "Fix TypeScript enum errors — string enum, const enum, switch, as const alternative.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-enum-not-working",
  },
};

const TOC = [
  { label: "Common TypeScript enum errors explained", href: "#why" },
  { label: "Fix 1 — Use string enums (not numeric)", href: "#fix-1" },
  { label: "Fix 2 — Fix enum in switch statement", href: "#fix-2" },
  { label: "Fix 3 — Use const enum to avoid runtime overhead", href: "#fix-3" },
  { label: "Fix 4 — Fix enum comparison errors", href: "#fix-4" },
  {
    label: "Fix 5 — Replace enum with as const (modern alternative)",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why are TypeScript enums considered problematic?",
    a: "TypeScript enums generate real JavaScript code at runtime (an IIFE that creates an object), adding bundle size. Numeric enums have surprising reverse mapping behaviour. They are not erased like interfaces and types. For these reasons, many teams use 'as const' objects instead, which are pure types and generate no extra code.",
  },
  {
    q: "What is the difference between enum and const enum?",
    a: "A regular enum generates a runtime JavaScript object. A const enum is erased entirely at compile time — enum values are inlined as literals wherever they are used. Const enums produce smaller bundles but cannot be used across module boundaries when using isolatedModules (required by Vite, Next.js, and esbuild).",
  },
  {
    q: "Why does a numeric enum compare equal to a number in TypeScript?",
    a: "TypeScript numeric enums are structurally compatible with number — you can pass a number where a numeric enum is expected without an error. This is considered a design flaw by many. Use string enums instead, which are not assignable to string and provide proper type safety.",
  },
  {
    q: "Can I iterate over enum values in TypeScript?",
    a: "Yes for numeric enums via Object.values(MyEnum), but you get both the string keys and numeric values due to reverse mapping. For string enums, Object.values(MyEnum) works cleanly. The as const alternative is easiest to iterate: Object.values(DIRECTION) gives you exactly the string values.",
  },
  {
    q: "What is the modern alternative to TypeScript enums?",
    a: "The recommended modern pattern is an as const object with a union type derived from it: const STATUS = { ACTIVE: 'active', INACTIVE: 'inactive' } as const; type Status = typeof STATUS[keyof typeof STATUS]. This produces no runtime code, is tree-shakeable, and integrates better with JSON and APIs.",
  },
  {
    q: "Why does const enum not work with Vite or Next.js?",
    a: "Vite, Next.js, and tools using esbuild/swc transpile files individually without type information (isolatedModules mode). const enum requires cross-file type information to inline values. Use regular enum or the as const pattern instead when using these build tools.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Enum Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-enum-not-working",
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
            tags={["TypeScript", "Enum", "Error Fix"]}
            title={"TypeScript Enum Not Working"}
            subtitle={"— Errors Fixed + Modern Alternatives [2026]"}
            sub={
              "Also covers: string vs numeric enum · const enum · switch statement · as const alternative · isolatedModules"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TypeScript 5.x · Vite · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Enum Errors"}
            </p>
            <ErrorBlock>{`'const' enums are not supported when 'isolatedModules' is enabled.
// OR:
Type 'Status' is not assignable to type 'string'.
// OR (unexpected):
enum Direction { Up, Down }
Direction[0]  // "Up" — numeric reverse mapping surprises`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Use string enums — safer and more predictable"}
            </p>
            <CodeBlock title="String enum — recommended">{`enum Status {
  Active   = "active",
  Inactive = "inactive",
  Pending  = "pending",
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Common TypeScript Enum Errors Explained"}</SH>
          <P>
            {
              "TypeScript enums have two flavours with very different behaviour: numeric enums (the default, where members get auto-assigned numbers) and string enums (where you assign string values). Numeric enums have surprising reverse mapping and are structurally compatible with "
            }
            <IC>{"number"}</IC>
            {
              ", which defeats the purpose of type safety. String enums are almost always the right choice."
            }
          </P>

          <FixCard
            number="1"
            title="Use String Enums (Not Numeric)"
            time="2 min"
            tag="Numeric enum causing type comparison surprises"
          >
            <CodeBlock title="String enum vs numeric enum">{`// ❌ Numeric enum — surprising reverse mapping, no string type safety
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

// Reverse mapping — unexpected
console.log(Direction[0])          // "Up"
console.log(Direction["Up"])       // 0

// Weak type safety — number is assignable to numeric enum!
function move(dir: Direction) {}
move(42)    // No error — TypeScript allows this

// ✅ String enum — explicit values, no reverse mapping, strong type safety
enum Direction {
  Up    = "UP",
  Down  = "DOWN",
  Left  = "LEFT",
  Right = "RIGHT",
}

function move(dir: Direction) {}
move(Direction.Up)   // ✅ correct
move("UP")           // ❌ Error — "UP" is not assignable to Direction
move(42)             // ❌ Error — number not assignable to Direction`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Enum in Switch Statement"
            time="2 min"
            tag="Exhaustive switch with enum values"
          >
            <CodeBlock title="Enum switch — exhaustive pattern">{`enum Status {
  Active   = "active",
  Inactive = "inactive",
  Pending  = "pending",
}

function getLabel(status: Status): string {
  switch (status) {
    case Status.Active:   return "Active"
    case Status.Inactive: return "Inactive"
    case Status.Pending:  return "Pending"
    default:
      // Exhaustive check — TypeScript errors here if you add a new member
      const _never: never = status
      throw new Error(\`Unhandled status: \${status}\`)
  }
}

// ✅ Usage
getLabel(Status.Active)       // "Active"
getLabel("active")            // ❌ Error — must use Status.Active not the raw string`}</CodeBlock>
            <TipBox>
              {
                "Always use the enum member (Status.Active) in switch cases, not the raw string value ('active'). TypeScript will then catch missing cases when you add new enum members."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Fix const enum with isolatedModules"
            time="2 min"
            tag="Vite, Next.js, esbuild — const enum not supported"
          >
            <P>
              {"Vite, Next.js (with SWC), and tools that use "}
              <IC>{"isolatedModules: true"}</IC>
              {" cannot use "}
              <IC>{"const enum"}</IC>
              {". Switch to regular "}
              <IC>{"enum"}</IC>
              {" or the "}
              <IC>{"as const"}</IC>
              {" pattern."}
            </P>
            <CodeBlock title="Fix — switch from const enum to enum or as const">{`// ❌ Breaks with isolatedModules: true (Vite, Next.js)
const enum Status {
  Active = "active",
  Inactive = "inactive",
}

// ✅ Fix 1 — use regular enum
enum Status {
  Active = "active",
  Inactive = "inactive",
}

// ✅ Fix 2 — use as const (zero runtime overhead, works everywhere)
const Status = {
  Active: "active",
  Inactive: "inactive",
} as const

type Status = typeof Status[keyof typeof Status]
// Status = "active" | "inactive"`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Enum Comparison Errors"
            time="2 min"
            tag="Cannot compare enum values with string literals"
          >
            <CodeBlock title="Enum comparison — correct patterns">{`enum Role { Admin = "admin", User = "user" }

// ❌ Error: This comparison always returns false
// (comparing enum member with string literal)
const role: Role = Role.Admin
if (role === "admin") { }   // Error with strict mode

// ✅ Fix — compare with enum member
if (role === Role.Admin) { }   // ✅ correct

// ✅ When receiving strings from API — validate and convert
function parseRole(raw: string): Role {
  if (Object.values(Role).includes(raw as Role)) {
    return raw as Role
  }
  throw new Error(\`Invalid role: \${raw}\`)
}

// ✅ Check if a string is a valid enum value
function isRole(value: string): value is Role {
  return Object.values(Role).includes(value as Role)
}

const apiRole = "admin"
if (isRole(apiRole)) {
  const role: Role = apiRole   // TypeScript narrows to Role
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Replace Enum with as const (Modern Alternative)"
            time="3 min"
            tag="Zero runtime overhead · tree-shakeable · works everywhere"
          >
            <P>
              {"The "}
              <IC>{"as const"}</IC>
              {
                " pattern is the modern recommendation for most enum use cases — no runtime overhead, works with all build tools, tree-shakeable."
              }
            </P>
            <CodeBlock title="as const pattern — complete replacement for enum">{`// Define the values object
const STATUS = {
  ACTIVE:   "active",
  INACTIVE: "inactive",
  PENDING:  "pending",
} as const

// Derive the type — equivalent to "active" | "inactive" | "pending"
type Status = typeof STATUS[keyof typeof STATUS]

// Use in functions
function updateStatus(id: string, status: Status) {
  // status is "active" | "inactive" | "pending"
  console.log(\`Updating \${id} to \${status}\`)
}

// Call with the constant or the literal
updateStatus("1", STATUS.ACTIVE)   // ✅ "active"
updateStatus("1", "active")        // ✅ also works — literal assignable to type
updateStatus("1", "wrong")         // ❌ Error — "wrong" not in the union

// Iterate over values
const allStatuses = Object.values(STATUS)
// ["active", "inactive", "pending"]

// Check if a value is valid
function isStatus(value: string): value is Status {
  return (Object.values(STATUS) as string[]).includes(value)
}`}</CodeBlock>
            <WarnBox>
              {
                "One difference from enum: with as const, the raw string ('active') IS assignable to the type. If you need to force callers to use STATUS.ACTIVE instead of 'active', stick with string enum."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always use string enums — never numeric enums for application code",
              "Avoid const enum when using Vite, Next.js, or any tool with isolatedModules: true",
              "For new code, prefer the as const pattern over enum — zero runtime cost, better compatibility",
              "Add exhaustive switch checks with a never default case to catch missing enum members",
              "Parse and validate API string responses before assigning to enum types using type guards",
              "When comparing enum values, always use the enum member (Status.Active), not the raw string",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript type not assignable",
                href: "/category/typescript/error/typescript-type-not-assignable",
                time: "7 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript strict mode errors",
                href: "/category/typescript/error/typescript-strict-mode-errors",
                time: "7 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript generic type error",
                href: "/category/typescript/error/typescript-generic-type-error",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Write Clean TypeScript for Production"}
            desc={
              "Softplix engineers use modern TypeScript patterns — as const, discriminated unions, strict mode — for maintainable, bug-free codebases. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
