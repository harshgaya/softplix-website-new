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
  title: "TypeScript Object Is Possibly Null or Undefined — Fixed [2026]",
  description:
    "Fix TypeScript 'Object is possibly null or undefined' error. Covers optional chaining, nullish coalescing, type guards, non-null assertion, and strictNullChecks.",
  keywords:
    "typescript object is possibly null, typescript possibly undefined error, typescript strictNullChecks fix 2026, optional chaining typescript, non-null assertion typescript",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-object-possibly-null",
  },
  openGraph: {
    title: "TypeScript Object Is Possibly Null — Fixed [2026]",
    description:
      "Fix TypeScript possibly null/undefined — optional chaining, type guards, strictNullChecks.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-object-possibly-null",
  },
};

const TOC = [
  {
    label: "Why TypeScript reports 'possibly null or undefined'",
    href: "#why",
  },
  {
    label: "Fix 1 — Optional chaining (?.) for safe property access",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Nullish coalescing (??) for default values",
    href: "#fix-2",
  },
  { label: "Fix 3 — Type guard with if check", href: "#fix-3" },
  { label: "Fix 4 — Non-null assertion operator (!)", href: "#fix-4" },
  { label: "Fix 5 — Fix DOM element possibly null", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does TypeScript say 'Object is possibly null or undefined'?",
    a: "TypeScript's strictNullChecks option (enabled by default in strict mode) makes null and undefined their own types. When a value could be null or undefined — from an API response, optional property, or DOM query — TypeScript prevents you from accessing its properties without first checking it is not null.",
  },
  {
    q: "What is optional chaining (?.) in TypeScript?",
    a: "Optional chaining (?.) safely accesses a property or method on a value that might be null or undefined. If the value is null or undefined, the expression short-circuits and returns undefined instead of throwing a runtime error. Example: user?.address?.city returns undefined instead of crashing if user or address is null.",
  },
  {
    q: "What is the difference between ?. and ! in TypeScript?",
    a: "?. (optional chaining) safely handles null/undefined by returning undefined. ! (non-null assertion) tells TypeScript to trust you that the value is not null/undefined — it does not add any runtime safety. If you use ! on a null value, you still get a runtime error. Prefer ?. for safe access; use ! only when you are absolutely certain.",
  },
  {
    q: "What is nullish coalescing (??) vs OR (||) in TypeScript?",
    a: "?? returns the right side only when the left side is null or undefined. || returns the right side for any falsy value — including 0, empty string, and false. Use ?? when 0 or empty string are valid values you want to keep. Use || only when all falsy values should fall back to the default.",
  },
  {
    q: "How do I handle null from document.getElementById()?",
    a: "document.getElementById() returns HTMLElement | null. Type guard with an if check, use non-null assertion (!) only if you know the element exists, or use a type assertion after the check: const el = document.getElementById('id') as HTMLInputElement.",
  },
  {
    q: "Should I disable strictNullChecks to avoid these errors?",
    a: "No. strictNullChecks prevents real runtime crashes — 'Cannot read properties of null' is one of the most common JavaScript errors. Disabling it removes the protection. Fix the errors properly with null checks, optional chaining, or default values.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Object Is Possibly Null or Undefined — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-object-possibly-null",
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
            tags={["TypeScript", "Null Safety", "Error Fix"]}
            title={"TypeScript: Object Is Possibly"}
            subtitle={"Null or Undefined — Fixed [2026]"}
            sub={
              "Also covers: optional chaining · nullish coalescing · type guards · non-null assertion · DOM null · strictNullChecks"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TypeScript 5.x · strict mode"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`Object is possibly 'null'.
// OR:
Object is possibly 'undefined'.
// OR:
Cannot invoke an object which is possibly 'undefined'.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest Fix — optional chaining"}
            </p>
            <CodeBlock title="Use ?. for safe property access">{`// ❌ Error: Object is possibly 'undefined'
const city = user.address.city

// ✅ Fix — optional chaining
const city = user?.address?.city   // string | undefined — safe`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">
            {"Why TypeScript Reports 'Possibly Null or Undefined'"}
          </SH>
          <P>
            {"TypeScript with "}
            <IC>{"strictNullChecks"}</IC>
            {" (on by default in strict mode) tracks which values can be "}
            <IC>{"null"}</IC>
            {" or "}
            <IC>{"undefined"}</IC>
            {
              "  . When you try to access a property on such a value without first checking it exists, TypeScript flags it — because if the value really is null at runtime, you get a crash."
            }
          </P>
          <P>
            {
              "This is TypeScript protecting you from the most common JavaScript runtime error: "
            }
            <IC>{"Cannot read properties of null"}</IC>
            {
              "  . The fix is always to handle the null/undefined case explicitly."
            }
          </P>

          <FixCard
            number="1"
            title="Optional Chaining (?.) for Safe Property Access"
            time="1 min"
            tag="Most common fix — chain of property accesses"
          >
            <CodeBlock title="Optional chaining patterns">{`type User = {
  name: string
  address?: {
    city?: string
    zip?: string
  }
}

function getUserCity(user: User | null): string | undefined {
  // ❌ Error: Object is possibly 'null'
  // return user.address.city

  // ✅ Optional chaining — returns undefined if any link is null/undefined
  return user?.address?.city
}

// Optional chaining with method calls
const length = str?.trim()?.length    // undefined if str is null/undefined

// Optional chaining with array index
const first = arr?.[0]                // undefined if arr is null/undefined

// Optional chaining with function calls
const result = callback?.()           // undefined if callback is null/undefined`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Nullish Coalescing (??) for Default Values"
            time="1 min"
            tag="Provide a fallback when value is null/undefined"
          >
            <CodeBlock title="?? vs || — know the difference">{`const user = null
const name = user?.name ?? "Guest"    // "Guest" — ?? handles null/undefined

// ?? vs || — critical difference:
const count = 0
console.log(count ?? 10)   // 0  — ?? only triggers on null/undefined
console.log(count || 10)   // 10 — || triggers on ANY falsy (0, "", false)

// Real-world pattern — API response with default
interface Config { timeout?: number; retries?: number }

function getTimeout(config: Config): number {
  return config.timeout ?? 5000   // 5000ms default if timeout is undefined
}

// Chaining ?? with ?.
function getDisplayName(user: User | null): string {
  return user?.displayName ?? user?.name ?? "Anonymous"
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Type Guard with if Check"
            time="2 min"
            tag="Best for complex logic after the null check"
          >
            <P>
              {"An "}
              <IC>{"if"}</IC>
              {
                " check narrows the type inside the block — TypeScript knows the value is not null/undefined after the guard."
              }
            </P>
            <CodeBlock title="Type guard patterns">{`function processUser(user: User | null) {
  // Guard — TypeScript narrows to User inside the if block
  if (!user) {
    console.error("No user found")
    return
  }
  // Here TypeScript knows: user is User (not null)
  console.log(user.name.toUpperCase())
}

// Guard with early return (preferred pattern)
async function getProfile(id: string) {
  const user = await db.user.findUnique({ where: { id } })
  if (!user) throw new Error(\`User \${id} not found\`)

  // From here on, user is User — not null
  return { ...user, displayName: user.name.toUpperCase() }
}

// Truthiness guard for arrays and strings
function formatList(items: string[] | null): string {
  if (!items || items.length === 0) return "No items"
  return items.join(", ")
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Non-Null Assertion Operator (!)"
            time="1 min"
            tag="Use sparingly — only when you are 100% certain"
          >
            <P>
              {"The "}
              <IC>{"!"}</IC>
              {
                " operator tells TypeScript a value is definitely not null or undefined. It provides zero runtime safety — if you are wrong, the app crashes."
              }
            </P>
            <CodeBlock title="Non-null assertion — use with care">{`// ✅ Acceptable — you have already verified the value exists
const users = [{ id: 1, name: "Alice" }]
const first = users[0]!   // safe — we know the array has one item

// ✅ Acceptable — DOM element that you know exists
const form = document.getElementById("signup-form")!
form.addEventListener("submit", handleSubmit)

// ❌ Bad — blindly asserting without evidence
const user = getUser()!   // crash at runtime if getUser() returns null
user.name.toUpperCase()

// Better alternative — use a guard
const user = getUser()
if (!user) throw new Error("User not found")
user.name.toUpperCase()   // safe — TypeScript narrowed to User`}</CodeBlock>
            <WarnBox>
              {
                "The ! operator is a code smell when used frequently. If you find yourself adding ! everywhere, the real issue is your type definitions need to reflect the actual shape of your data."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Fix DOM Element Possibly Null"
            time="2 min"
            tag="document.getElementById() · querySelector()"
          >
            <P>
              {"DOM query methods return "}
              <IC>{"Element | null"}</IC>
              {
                ". TypeScript requires you to handle the null case before accessing element properties."
              }
            </P>
            <CodeBlock title="DOM null safety patterns">{`// document.getElementById returns HTMLElement | null
// document.querySelector returns Element | null

// ✅ Pattern 1 — type guard
const input = document.getElementById("username")
if (input) {
  input.focus()   // safe — TypeScript knows input is HTMLElement
}

// ✅ Pattern 2 — type assertion after guard
const input = document.getElementById("username") as HTMLInputElement | null
if (input) {
  console.log(input.value)   // HTMLInputElement has .value
}

// ✅ Pattern 3 — non-null assertion (only when element definitely exists)
const form = document.getElementById("main-form")!
const inputs = form.querySelectorAll("input")

// ✅ Pattern 4 — optional chaining for one-liners
const value = (document.getElementById("email") as HTMLInputElement)?.value ?? ""

// ✅ In React — use useRef instead of getElementById
import { useRef } from "react"
const inputRef = useRef<HTMLInputElement>(null)
// Later: inputRef.current?.focus()  // safely handles null on first render`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use optional chaining (?.) as the default for nullable property access — it is always safe",
              "Use nullish coalescing (??) not || when the value could legitimately be 0, false, or empty string",
              "Prefer early-return guards (if (!x) return) over nested null checks for readability",
              "Use useRef<T>(null) in React instead of getElementById — refs are typed and integrate with TypeScript",
              "Reserve ! for values you have genuinely verified elsewhere — document its reason with a comment",
              "Never disable strictNullChecks — it prevents real runtime crashes",
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
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript cannot find module",
                href: "/category/typescript/error/typescript-cannot-find-module",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Write Type-Safe TypeScript from Day One"}
            desc={
              "Softplix engineers use strict TypeScript with proper null handling — no ! everywhere, no any. Need help with your codebase? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
