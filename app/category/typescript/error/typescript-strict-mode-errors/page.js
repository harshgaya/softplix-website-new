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
  title: "TypeScript Strict Mode Errors — How to Fix Them [2026]",
  description:
    "Fix TypeScript strict mode errors after enabling strict: true. Covers noImplicitAny, strictNullChecks, noImplicitReturns, strictFunctionTypes, and migration strategies.",
  keywords:
    "typescript strict mode errors, typescript strict true errors, noImplicitAny typescript fix, typescript strict migration 2026, typescript enable strict mode",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-strict-mode-errors",
  },
  openGraph: {
    title: "TypeScript Strict Mode Errors — Fixed [2026]",
    description:
      "Fix TypeScript strict mode — noImplicitAny, strictNullChecks, noImplicitReturns, migration.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-strict-mode-errors",
  },
};

const TOC = [
  { label: "What strict mode enables in TypeScript", href: "#what" },
  { label: "Fix 1 — noImplicitAny: add type annotations", href: "#fix-1" },
  {
    label: "Fix 2 — strictNullChecks: handle null and undefined",
    href: "#fix-2",
  },
  { label: "Fix 3 — noImplicitReturns: cover all code paths", href: "#fix-3" },
  {
    label: "Fix 4 — strictFunctionTypes: fix callback type errors",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Migrate an existing JS project to strict mode",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does TypeScript strict mode actually enable?",
    a: "strict: true is a shorthand that enables multiple checks at once: strictNullChecks (null/undefined are separate types), noImplicitAny (variables must have explicit types), strictFunctionTypes (function parameter types are checked contravariantly), noImplicitThis (this must be typed), and a few others. Each catches a different class of bugs.",
  },
  {
    q: "Should I use strict: true in my TypeScript project?",
    a: "Yes, always. Start with strict: true on new projects. For existing JavaScript being migrated to TypeScript, enable strict checks one at a time using individual flags rather than strict: true all at once, so you can fix errors gradually.",
  },
  {
    q: "How do I enable strict mode in TypeScript?",
    a: 'Add "strict": true to your tsconfig.json compilerOptions. This is the recommended setting for all new projects. If you use create-next-app or Vite with TypeScript, strict mode is already enabled in the generated tsconfig.json.',
  },
  {
    q: "What is noImplicitAny in TypeScript?",
    a: "noImplicitAny prevents TypeScript from silently inferring any when it cannot determine a type. For example, function parameters without annotations get an implicit any in non-strict mode. With noImplicitAny, you must add explicit type annotations, which forces better type safety.",
  },
  {
    q: "Can I enable strict mode incrementally on a large codebase?",
    a: "Yes. Instead of strict: true, enable individual flags one at a time: start with strictNullChecks, then noImplicitAny, then the rest. Fix the errors for each flag before enabling the next. You can also use @ts-ignore or @ts-expect-error comments on lines you haven't fixed yet, then remove them over time.",
  },
  {
    q: "What is the fastest way to fix hundreds of strict mode errors?",
    a: "Run npx ts-migrate to automatically add type annotations and suppress errors with @ts-ignore comments. This gets your project compiling immediately, then you can remove the suppressions gradually and add proper types. It is not a complete solution but a useful starting point for large migrations.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Strict Mode Errors — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-strict-mode-errors",
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
            tags={["TypeScript", "Strict Mode", "Error Fix"]}
            title={"TypeScript Strict Mode Errors"}
            subtitle={"— How to Fix All of Them [2026]"}
            sub={
              "Also covers: noImplicitAny · strictNullChecks · noImplicitReturns · strictFunctionTypes · JS migration"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TypeScript 5.x · tsconfig.json"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ After enabling strict: true"}
            </p>
            <ErrorBlock>{`Parameter 'event' implicitly has an 'any' type.      (noImplicitAny)
Object is possibly 'null'.                           (strictNullChecks)
Function lacks ending return statement and return    (noImplicitReturns)
  type does not include 'undefined'.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ tsconfig.json — recommended setup"}
            </p>
            <CodeBlock title="tsconfig.json">{`{
  "compilerOptions": {
    "strict": true,          // enables all strict checks
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="what">{"What Strict Mode Enables in TypeScript"}</SH>
          <P>
            {"Enabling "}
            <IC>{"strict: true"}</IC>
            {" is equivalent to enabling all of these flags: "}
            <IC>{"strictNullChecks"}</IC>
            {", "}
            <IC>{"noImplicitAny"}</IC>
            {", "}
            <IC>{"strictFunctionTypes"}</IC>
            {", "}
            <IC>{"strictBindCallApply"}</IC>
            {", "}
            <IC>{"strictPropertyInitialization"}</IC>
            {", "}
            <IC>{"noImplicitThis"}</IC>
            {", and "}
            <IC>{"useUnknownInCatchVariables"}</IC>
            {"  . Each flag catches a different class of real-world bugs."}
          </P>

          <FixCard
            number="1"
            title="Fix noImplicitAny — Add Type Annotations"
            time="5 min"
            tag="Parameter 'x' implicitly has an 'any' type"
          >
            <P>
              {
                "Every function parameter, variable without an initial value, and return type must be explicitly typed when "
              }
              <IC>{"noImplicitAny"}</IC>
              {" is on."}
            </P>
            <CodeBlock title="noImplicitAny — add explicit types">{`// ❌ Error: Parameter 'event' implicitly has an 'any' type
function handleClick(event) {
  console.log(event.target)
}

// ✅ Fix — add parameter type
function handleClick(event: MouseEvent) {
  console.log(event.target)
}

// ❌ Error: Variable 'data' implicitly has an 'any' type
let data
data = await fetchSomething()

// ✅ Fix — annotate the variable
let data: User[]
data = await fetchUsers()

// ❌ Error: implicit any in array methods
const ids = [1, 2, 3]
const doubled = ids.map(n => n * 2)  // fine — TypeScript infers number
const result = [].map(x => x)        // x has implicit any — empty array

// ✅ Fix — type the array
const result = ([] as number[]).map(x => x * 2)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix strictNullChecks — Handle Null and Undefined"
            time="5 min"
            tag="Object is possibly null · undefined not assignable"
          >
            <CodeBlock title="strictNullChecks — common patterns">{`// ❌ Error: Type 'string | null' is not assignable to type 'string'
function getUser(): User | null { return null }
const user = getUser()
const name: string = user.name    // Error: object possibly null

// ✅ Fix — null check
const user = getUser()
if (!user) throw new Error("No user")
const name: string = user.name    // safe

// ❌ Error: optional property is possibly undefined
interface Config { timeout?: number }
function run(config: Config) {
  const t: number = config.timeout  // possibly undefined
}

// ✅ Fix — provide default
function run(config: Config) {
  const t: number = config.timeout ?? 5000
}

// ❌ Error: catch variable is now 'unknown' with useUnknownInCatchVariables
try {
  await fetch(url)
} catch (err) {
  console.log(err.message)    // Error: err is 'unknown'
}

// ✅ Fix — type guard in catch
try {
  await fetch(url)
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message)  // safe
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix noImplicitReturns — Cover All Code Paths"
            time="3 min"
            tag="Function lacks ending return statement"
          >
            <CodeBlock title="noImplicitReturns — all paths must return">{`// ❌ Error: Function lacks ending return statement
function getStatusLabel(status: string): string {
  if (status === "active") return "Active"
  if (status === "inactive") return "Inactive"
  // "pending" and other values fall through — returns undefined
}

// ✅ Fix — cover all paths
function getStatusLabel(status: string): string {
  if (status === "active") return "Active"
  if (status === "inactive") return "Inactive"
  return "Unknown"    // catches everything else
}

// ✅ Better — use a lookup object
const STATUS_LABELS: Record<string, string> = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
}
function getStatusLabel(status: string): string {
  return STATUS_LABELS[status] ?? "Unknown"
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix strictFunctionTypes — Callback Type Errors"
            time="3 min"
            tag="Argument of type '(x: Dog) => void' not assignable"
          >
            <P>
              {
                "Strict function types enforce that callback parameters are typed contravariantly — you cannot pass a more specific callback where a broader one is expected."
              }
            </P>
            <CodeBlock title="strictFunctionTypes — use correct callback types">{`// ❌ Error with strictFunctionTypes
type Handler = (event: Event) => void
const clickHandler = (event: MouseEvent) => {  // MouseEvent is more specific
  console.log(event.clientX)
}

// ❌ This would be unsafe — clickHandler expects MouseEvent but could get KeyboardEvent
const button: HTMLButtonElement = document.querySelector("button")!
button.addEventListener("click", clickHandler)  // Error in strict mode

// ✅ Fix — use the base type in the callback
const clickHandler = (event: Event) => {
  const mouse = event as MouseEvent  // cast after verifying
  console.log(mouse.clientX)
}

// ✅ Or be specific about the addEventListener overload
button.addEventListener("click", (event: MouseEvent) => {
  console.log(event.clientX)    // correct — addEventListener click = MouseEvent
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Migrate an Existing Project to Strict Mode"
            time="15 min"
            tag="Hundreds of errors after enabling strict — incremental strategy"
          >
            <P>
              {
                "For large codebases, enable strict checks one at a time rather than all at once."
              }
            </P>
            <CodeBlock title="tsconfig.json — incremental strict migration">{`{
  "compilerOptions": {
    // Step 1: Start with strictNullChecks (most impactful)
    "strictNullChecks": true,

    // Step 2: Add noImplicitAny after fixing null errors
    "noImplicitAny": true,

    // Step 3: Add the rest
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true,

    // Eventually replace all individual flags with:
    // "strict": true
  }
}`}</CodeBlock>
            <CodeBlock title="Suppress remaining errors temporarily during migration">{`// @ts-expect-error — TODO: fix after migration (preferred over @ts-ignore)
const result = legacyFunction(data)

// Or use ts-migrate tool:
npx ts-migrate migrate ./src
// Automatically adds @ts-ignore comments to suppress existing errors
// Then fix them one by one`}</CodeBlock>
            <TipBox>
              {
                "Use @ts-expect-error instead of @ts-ignore. @ts-expect-error fails if the error disappears — telling you when you've fixed the underlying issue. @ts-ignore silently stays even after the code is fixed."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always start new projects with strict: true in tsconfig.json — retrofitting is much harder",
              "For existing JS-to-TS migrations, enable strict flags one at a time starting with strictNullChecks",
              "Use @ts-expect-error for temporary suppressions during migration — not @ts-ignore",
              "Add explicit return types to functions — TypeScript infers them but explicit types catch missing branches",
              "Annotate all function parameters — never rely on implicit any even in callbacks",
              "Run tsc --noEmit in CI to catch type errors before they reach production",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript object possibly null",
                href: "/category/typescript/error/typescript-object-possibly-null",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript type not assignable",
                href: "/category/typescript/error/typescript-type-not-assignable",
                time: "7 min read",
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
            title={"We Migrate JavaScript Projects to Strict TypeScript"}
            desc={
              "Softplix engineers perform TypeScript strict-mode migrations — incremental, zero runtime impact, full type coverage. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
