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
  title: "TypeScript Type Not Assignable Error — Fixed [2026]",
  description:
    "Fix TypeScript 'Type X is not assignable to type Y' error. Covers union types, type widening, as const, generics, function return types, and interface mismatches.",
  keywords:
    "typescript type not assignable, type x is not assignable to type y typescript, typescript type error fix 2026, typescript union type error, typescript generic type mismatch",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-type-not-assignable",
  },
  openGraph: {
    title: "TypeScript Type Not Assignable Error — Fixed [2026]",
    description:
      "Fix TypeScript type not assignable — union types, as const, generics, interface mismatch.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-type-not-assignable",
  },
};

const TOC = [
  { label: "What causes 'Type X is not assignable to type Y'", href: "#why" },
  { label: "Fix 1 — Narrow the type with a type guard", href: "#fix-1" },
  { label: "Fix 2 — Use as const for literal types", href: "#fix-2" },
  { label: "Fix 3 — Fix union type mismatches", href: "#fix-3" },
  { label: "Fix 4 — Fix function return type errors", href: "#fix-4" },
  {
    label: "Fix 5 — Fix interface and object shape mismatches",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does 'Type X is not assignable to type Y' mean in TypeScript?",
    a: "It means you are trying to assign a value of one type to a variable, parameter, or return position that expects a different, incompatible type. TypeScript is telling you the shapes don't match — a property is missing, a value is too wide, or a type is completely different.",
  },
  {
    q: "What is the difference between type widening and type narrowing?",
    a: "Type widening is when TypeScript infers a broader type than you intended — for example, inferring string instead of the literal 'hello'. Type narrowing is when you use conditions, typeof, instanceof, or type guards to tell TypeScript a value is a more specific type within a broader union.",
  },
  {
    q: "When should I use 'as' type assertions?",
    a: "Use type assertions (as SomeType) only when you know more about the type than TypeScript can infer — for example, when working with DOM elements or API responses you have already validated. Avoid using as to silence errors you haven't actually fixed — it removes type safety.",
  },
  {
    q: "What is 'as const' in TypeScript?",
    a: "as const makes TypeScript infer the most specific (narrowest) literal types for a value. Without it, TypeScript widens 'red' to string and ['a', 'b'] to string[]. With as const, 'red' stays as the literal type 'red' and the array becomes a readonly tuple. Useful for config objects, lookup tables, and discriminated unions.",
  },
  {
    q: "How do I fix a TypeScript error when assigning to a union type?",
    a: "When assigning to a union type (A | B), the value must be fully assignable to at least one of the members. Check which union member you intend to satisfy and ensure your value has all the required properties of that member. You may need to add missing properties or use a type guard to narrow before assignment.",
  },
  {
    q: "Should I use 'any' to fix type errors?",
    a: "No. Using any silences the error but removes all type checking for that value, defeating the purpose of TypeScript. Instead, use unknown for values you haven't checked yet, use type guards to narrow, or use proper generic types. Reserve any only for truly dynamic values where the type is unknowable.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Type Not Assignable Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-type-not-assignable",
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
            tags={["TypeScript", "Type Errors", "Error Fix"]}
            title={"TypeScript: Type X Is Not Assignable"}
            subtitle={"to Type Y — Fixed [2026]"}
            sub={
              "Also covers: type widening · as const · union types · type guards · function return types · interface mismatch"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TypeScript 5.x · React · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`Type 'string' is not assignable to type '"red" | "green" | "blue"'.
// OR:
Type '{ name: string; }' is not assignable to type 'User'.
  Property 'email' is missing in type '{ name: string; }'
  but required in type 'User'.
// OR:
Type 'string | undefined' is not assignable to type 'string'.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest Fix — check what the error is actually saying"}
            </p>
            <CodeBlock title="Read the error from bottom to top">{`// "Property 'email' is missing" → add the email property
// "string | undefined not assignable to string" → handle the undefined case
// "string not assignable to 'red' | 'green'" → use as const or type guard`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"What Causes 'Type X Is Not Assignable to Type Y'"}</SH>
          <P>
            {
              "TypeScript's structural type system checks that values have the right shape before allowing assignment. This error fires when the source type has properties missing, extra incompatible properties, a different literal value, or is wider than the destination type accepts. Reading the full error message (especially the bottom lines about which specific property or value is wrong) almost always points directly to the fix."
            }
          </P>

          <FixCard
            number="1"
            title="Narrow the Type with a Type Guard"
            time="3 min"
            tag="string | undefined not assignable to string"
          >
            <P>
              {"When TypeScript infers "}
              <IC>{"string | undefined"}</IC>
              {" or "}
              <IC>{"string | null"}</IC>
              {", you must narrow to "}
              <IC>{"string"}</IC>
              {" before using it where only "}
              <IC>{"string"}</IC>
              {" is accepted."}
            </P>
            <CodeBlock title="Type narrowing patterns">{`// ❌ Error: Type 'string | undefined' is not assignable to type 'string'
function greet(name: string | undefined) {
  const upper = name.toUpperCase()  // name might be undefined
}

// ✅ Fix 1 — nullish check
function greet(name: string | undefined) {
  if (!name) return
  const upper = name.toUpperCase()  // TypeScript knows name is string here
}

// ✅ Fix 2 — nullish coalescing
function greet(name: string | undefined) {
  const display = name ?? "Guest"         // string — never undefined
  const upper = display.toUpperCase()
}

// ✅ Fix 3 — optional chaining
function greet(name: string | undefined) {
  const upper = name?.toUpperCase()       // string | undefined — safe
}

// ✅ Fix 4 — non-null assertion (only when you KNOW it's defined)
function greet(name: string | undefined) {
  const upper = name!.toUpperCase()       // tells TS "trust me, it's defined"
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Use as const for Literal Types"
            time="2 min"
            tag="string not assignable to 'red' | 'green' | 'blue'"
          >
            <P>
              {"TypeScript widens string literals to "}
              <IC>{"string"}</IC>
              {" by default. Use "}
              <IC>{"as const"}</IC>
              {" to preserve the literal type."}
            </P>
            <CodeBlock title="as const — prevent type widening">{`type Color = "red" | "green" | "blue"

// ❌ Error: string is not assignable to Color
const color = "red"           // TypeScript infers: string (widened)
const setColor = (c: Color) => {}
setColor(color)               // Error!

// ✅ Fix 1 — as const
const color = "red" as const  // TypeScript infers: "red" (literal)
setColor(color)               // ✅ works

// ✅ Fix 2 — explicit type annotation
const color: Color = "red"   // TypeScript checks against Color
setColor(color)               // ✅ works

// ✅ Fix 3 — as const on config objects
const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
} as const

type Route = typeof ROUTES[keyof typeof ROUTES]
// Route = "/" | "/about" | "/contact"  (literal union, not string)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Union Type Mismatches"
            time="3 min"
            tag="Type does not satisfy the constraint"
          >
            <P>
              {
                "When assigning to a union type, the value must fully satisfy at least one member of the union — all required properties must be present."
              }
            </P>
            <CodeBlock title="Union type — satisfying one member">{`type SuccessResponse = { status: "success"; data: string[] }
type ErrorResponse   = { status: "error";   message: string }
type ApiResponse = SuccessResponse | ErrorResponse

// ❌ Error: object does not satisfy either member
const res: ApiResponse = { status: "success" }  // missing 'data'

// ✅ Fix — include all properties of the member you intend
const res: ApiResponse = { status: "success", data: ["item1"] }

// ✅ Discriminated union with type narrowing
function handle(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data)      // TypeScript knows this is SuccessResponse
  } else {
    console.log(res.message)   // TypeScript knows this is ErrorResponse
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Function Return Type Errors"
            time="3 min"
            tag="Return type does not match declared type"
          >
            <P>
              {
                "When a function has an explicit return type, every code path must return a value matching that type. Missing branches or mismatched return values trigger this error."
              }
            </P>
            <CodeBlock title="Function return type — all paths covered">{`// ❌ Error: Function lacks ending return statement, type includes 'undefined'
function getLabel(status: "active" | "inactive" | "pending"): string {
  if (status === "active") return "Active"
  if (status === "inactive") return "Inactive"
  // "pending" case missing!
}

// ✅ Fix 1 — cover all cases
function getLabel(status: "active" | "inactive" | "pending"): string {
  if (status === "active") return "Active"
  if (status === "inactive") return "Inactive"
  return "Pending"   // covers "pending" and satisfies the return type
}

// ✅ Fix 2 — switch with exhaustive check
function getLabel(status: "active" | "inactive" | "pending"): string {
  switch (status) {
    case "active":   return "Active"
    case "inactive": return "Inactive"
    case "pending":  return "Pending"
    default:
      // Exhaustive check — TypeScript will error here if you add a new union member
      const _exhaustive: never = status
      return _exhaustive
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Interface and Object Shape Mismatches"
            time="3 min"
            tag="Property missing or incompatible"
          >
            <P>
              {
                "When TypeScript says a property is missing or incompatible, either add the missing property, make it optional, or adjust the interface to match your data."
              }
            </P>
            <CodeBlock title="Interface shape — fix missing properties">{`interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}

// ❌ Error: Property 'email' and 'role' are missing
const user: User = { id: "1", name: "Alice" }

// ✅ Fix 1 — add the missing properties
const user: User = { id: "1", name: "Alice", email: "a@b.com", role: "user" }

// ✅ Fix 2 — make properties optional in the interface (if appropriate)
interface User {
  id: string
  name: string
  email?: string    // optional
  role?: "admin" | "user"
}

// ✅ Fix 3 — use Partial<User> for partial objects (e.g. update payloads)
function updateUser(id: string, updates: Partial<User>) {
  // updates can have any subset of User properties
}
updateUser("1", { name: "Bob" })  // ✅ valid — email/role not required`}</CodeBlock>
            <TipBox>
              {
                "Use Partial<T> for update payloads, Required<T> to make all properties mandatory, Pick<T, 'a' | 'b'> to select specific properties, and Omit<T, 'password'> to exclude sensitive fields."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Read TypeScript errors from the bottom up — the last line usually names the exact property or value that's wrong",
              "Use as const on string and object literals you intend to use as literal types",
              "Never use any to silence type errors — use unknown, type guards, or proper generics instead",
              "Make optional properties explicit with ? instead of omitting them and hoping TypeScript accepts it",
              "Use Partial<T>, Required<T>, Pick<T>, and Omit<T> instead of defining duplicate interface variants",
              "Add exhaustive checks in switch statements so TypeScript catches missing union members at compile time",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript object possibly null or undefined",
                href: "/category/typescript/error/typescript-object-possibly-null",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript cannot find module",
                href: "/category/typescript/error/typescript-cannot-find-module",
                time: "5 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript generic type error",
                href: "/category/typescript/error/typescript-generic-type-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Type-Safe TypeScript Applications"}
            desc={
              "Softplix engineers write production TypeScript with strict mode, proper generics, and zero type suppressions. Need a TypeScript code review? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
