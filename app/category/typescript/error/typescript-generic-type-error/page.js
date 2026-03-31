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
  title: "TypeScript Generic Type Error — Fixed [2026]",
  description:
    "Fix TypeScript generic type errors. Covers type constraints, default generic parameters, conditional types, infer keyword, and generic React components.",
  keywords:
    "typescript generic type error, typescript generic constraint error, typescript type does not satisfy constraint 2026, generic react component typescript, typescript infer keyword",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-generic-type-error",
  },
  openGraph: {
    title: "TypeScript Generic Type Error — Fixed [2026]",
    description:
      "Fix TypeScript generics — constraints, defaults, conditional types, infer, React components.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-generic-type-error",
  },
};

const TOC = [
  { label: "How TypeScript generics work and why they error", href: "#how" },
  { label: "Fix 1 — Add type constraints with extends", href: "#fix-1" },
  { label: "Fix 2 — Add default generic parameters", href: "#fix-2" },
  { label: "Fix 3 — Fix generic React component errors", href: "#fix-3" },
  { label: "Fix 4 — Use conditional types to extract types", href: "#fix-4" },
  {
    label: "Fix 5 — Fix 'Type does not satisfy the constraint'",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is a generic type in TypeScript?",
    a: "A generic type is a type that accepts a type parameter, written as <T>. Instead of writing a function that only works with strings, you write one that works with any type T — and TypeScript infers the specific type when the function is called. Generics enable type-safe reusable code.",
  },
  {
    q: "What does 'Type does not satisfy the constraint' mean?",
    a: "When a generic has a constraint like <T extends SomeType>, the type you pass must be assignable to SomeType. If you pass a type that doesn't have the required properties, TypeScript throws this error. Fix it by ensuring the type you pass has all the properties the constraint requires.",
  },
  {
    q: "How do I write a generic React component in TypeScript?",
    a: "Use <T,> with a trailing comma in .tsx files to distinguish the generic from a JSX element: function List<T,>({ items }: { items: T[] }) { ... }. The trailing comma is needed because TypeScript might otherwise interpret <T> as an opening JSX tag.",
  },
  {
    q: "What is the infer keyword in TypeScript?",
    a: "infer is used inside conditional types to extract a type that TypeScript infers from a pattern. For example, type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never extracts the return type R of a function. It is used inside extends clauses in conditional types only.",
  },
  {
    q: "When should I use unknown vs T in generics?",
    a: "Use T when the caller decides the type and type inference matters. Use unknown when you accept any value but want to force the user to check the type before using it. unknown is the type-safe version of any — values typed as unknown cannot be used without a type guard.",
  },
  {
    q: "Can I have multiple generic parameters?",
    a: "Yes. TypeScript supports multiple generic parameters: function merge<T, U>(a: T, b: U): T & U. Each parameter can have its own constraint. Common names are T (type), K (key), V (value), E (error), R (return type).",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Generic Type Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-generic-type-error",
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
            tags={["TypeScript", "Generics", "Error Fix"]}
            title={"TypeScript Generic Type Errors"}
            subtitle={"— Constraints & Inference [Fixed 2026]"}
            sub={
              "Also covers: extends constraints · default generics · React generic components · conditional types · infer"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TypeScript 5.x · React · Generics"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Generic Errors"}
            </p>
            <ErrorBlock>{`Type 'string' does not satisfy the constraint 'object'.
// OR:
Type 'number' is not assignable to type 'T'.
// OR (React .tsx file):
Cannot find name 'T'. Did you mean 'T'?  (JSX vs generic confusion)`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Basic generic function"}
            </p>
            <CodeBlock title="Generic function pattern">{`// T is inferred from the argument
function identity<T>(value: T): T {
  return value
}

const str = identity("hello")   // T inferred as string
const num = identity(42)        // T inferred as number`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How TypeScript Generics Work and Why They Error"}</SH>
          <P>
            {
              "Generics let you write code that works with any type while preserving type information. When you call a generic function, TypeScript infers the type parameter from the argument. Errors occur when the inferred type doesn't satisfy a constraint you've placed on the generic, or when TypeScript can't infer the type and defaults to "
            }
            <IC>{"unknown"}</IC>
            {"."}
          </P>

          <FixCard
            number="1"
            title="Add Type Constraints with extends"
            time="3 min"
            tag="Type does not satisfy the constraint"
          >
            <P>
              {"Use "}
              <IC>{"extends"}</IC>
              {
                " to constrain what types a generic accepts. This tells TypeScript the minimum shape the type must have."
              }
            </P>
            <CodeBlock title="Generic constraints with extends">{`// ❌ Error: accessing .id on unconstrained T
function getById<T>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)  // Error: 'id' doesn't exist on 'T'
}

// ✅ Fix — constrain T to have an id property
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)  // safe — T is guaranteed to have .id
}

// ✅ Multiple constraints
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b }
}

// ✅ Constraint with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const name = getProperty({ name: "Alice", age: 30 }, "name")  // string
const age  = getProperty({ name: "Alice", age: 30 }, "age")   // number`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add Default Generic Parameters"
            time="2 min"
            tag="Generic parameter not inferred — provide a default"
          >
            <CodeBlock title="Default generic parameters">{`// Without default — must always provide T explicitly
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// With default — T defaults to unknown if not provided
interface ApiResponse<T = unknown> {
  data: T
  status: number
  message: string
}

// Usage:
const generic: ApiResponse = { data: "anything", status: 200, message: "OK" }
const typed: ApiResponse<User[]> = { data: [], status: 200, message: "OK" }

// Default in function:
async function apiFetch<T = unknown>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url)
  const data: T = await res.json()
  return { data, status: res.status, message: res.statusText }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Generic React Component in .tsx Files"
            time="3 min"
            tag="JSX vs generic angle bracket confusion"
          >
            <P>
              {"In "}
              <IC>{".tsx"}</IC>
              {" files, "}
              <IC>{"<T>"}</IC>
              {
                " is ambiguous — TypeScript may interpret it as a JSX opening tag. Add a trailing comma "
              }
              <IC>{"<T,>"}</IC>
              {" to tell TypeScript it's a generic."}
            </P>
            <CodeBlock title="Generic React component — .tsx pattern">{`// ❌ Error in .tsx: JSX expression expected
function List<T>({ items, renderItem }: {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>
}

// ✅ Fix — trailing comma after T
function List<T,>({ items, renderItem }: {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>
}

// Usage — T is inferred from items
<List
  items={[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]}
  renderItem={(user) => <span>{user.name}</span>}
/>

// ✅ Alternative — extends constraint also resolves the ambiguity
function List<T extends object>({ items }: { items: T[] }) {
  return <ul>{items.map((item, i) => <li key={i}>{JSON.stringify(item)}</li>)}</ul>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use Conditional Types to Extract Types"
            time="4 min"
            tag="Extract return type · unwrap Promise · infer keyword"
          >
            <CodeBlock title="Conditional types with infer">{`// Extract the return type of any function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type Fn = () => { id: number; name: string }
type FnReturn = ReturnType<Fn>   // { id: number; name: string }

// Unwrap a Promise
type Awaited<T> = T extends Promise<infer R> ? R : T

type AsyncUser = Promise<User>
type SyncUser = Awaited<AsyncUser>   // User

// Extract array item type
type ArrayItem<T> = T extends (infer U)[] ? U : never

type Items = ArrayItem<string[]>    // string
type Ids   = ArrayItem<number[]>    // number

// Built-in utility types that use infer internally:
// ReturnType<F>    — return type of a function
// Parameters<F>   — tuple of parameter types
// InstanceType<C> — instance type of a class constructor
// Awaited<T>      — unwrap nested Promises`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix 'Type Does Not Satisfy the Constraint'"
            time="3 min"
            tag="Passing wrong type to a constrained generic"
          >
            <CodeBlock title="Constraint violation — diagnosis and fix">{`// The constraint
interface HasId { id: string }
function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id)
}

// ❌ Error: Type 'number' does not satisfy constraint 'HasId'
findById([1, 2, 3], "1")  // numbers don't have .id

// ❌ Error: Type '{ name: string }' does not satisfy 'HasId'
findById([{ name: "Alice" }], "1")  // object has no .id

// ✅ Fix — pass objects that have .id
findById([{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }], "1")

// ✅ Debug trick — expand the constraint to see what's missing
type Missing = Omit<HasId, keyof { name: string }>
// Missing = { id: string }  — shows what's required but not present`}</CodeBlock>
            <TipBox>
              {
                "When you get a constraint error, hover over the type in your IDE to see the full inferred type, then compare it manually to the constraint. The difference is exactly what you need to add."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Add extends constraints to every generic that accesses specific properties on T",
              "Use <T,> with a trailing comma in React .tsx files to avoid JSX/generic ambiguity",
              "Add default generic parameters (= unknown) to interfaces used in varying contexts",
              "Use ReturnType<>, Parameters<>, and Awaited<> instead of writing manual conditional types",
              "Name generic parameters descriptively — TItem, TKey, TValue — not just T when multiple are present",
              "Hover over generics in your IDE to see what type TypeScript is inferring before adding explicit types",
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
                title: "Fix: TypeScript enum not working",
                href: "/category/typescript/error/typescript-enum-not-working",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Write Production TypeScript with Generics"}
            desc={
              "Softplix engineers build fully type-safe React and Next.js applications using TypeScript generics, conditional types, and strict mode. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
