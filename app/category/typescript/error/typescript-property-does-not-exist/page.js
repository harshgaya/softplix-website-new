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
  title: "TypeScript Property Does Not Exist on Type — Fixed [2026 Guide]",
  description:
    "Fix TypeScript TS2339 property does not exist on type. Covers type narrowing, interface extension, optional chaining, index signatures, and type assertions.",
  keywords:
    "typescript property does not exist on type fix, ts2339 property does not exist, typescript type has no property 2026, typescript element implicitly has any type",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-property-does-not-exist",
  },
  openGraph: {
    title: "TypeScript Property Does Not Exist on Type — Fixed [2026 Guide]",
    description:
      "Fix TS2339 — type narrowing, interface extension, optional chaining, index signatures.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-property-does-not-exist",
  },
};

const TOC = [
  { label: "Why TS2339 fires", href: "#cause" },
  { label: "Fix 1 — Add the property to the interface/type", href: "#fix-1" },
  {
    label: "Fix 2 — Type narrowing with typeof / in / instanceof",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — Optional chaining for optional properties",
    href: "#fix-3",
  },
  { label: "Fix 4 — Index signatures for dynamic keys", href: "#fix-4" },
  { label: "Fix 5 — Type assertion (as) — use sparingly", href: "#fix-5" },
  { label: "Fix 6 — Extending third-party types", href: "#fix-6" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is TypeScript error TS2339 property does not exist on type?",
    a: "TS2339 means you are accessing a property that TypeScript does not know exists on a type. Either the property is genuinely missing from the type definition, or TypeScript cannot narrow the type to a specific variant that has the property.",
  },
  {
    q: "Property does not exist on type 'never' — what does that mean?",
    a: "If TypeScript infers type 'never', it means all possible types have been exhausted in a union. You likely have an if/else chain that TypeScript proved can never execute. Check your type guards — one of your conditions may be logically impossible.",
  },
  {
    q: "How do I add a property to an existing TypeScript type I don't own?",
    a: "Use declaration merging for interfaces, or create a new type with intersection: type ExtendedUser = User & { customField: string }. For third-party library types, use module augmentation inside a .d.ts file.",
  },
  {
    q: "Property does not exist on type 'HTMLElement' — how to fix?",
    a: "Cast to a more specific DOM type: (element as HTMLInputElement).value or use a type guard: if (element instanceof HTMLInputElement) { element.value }. HTMLElement is a base type that lacks input-specific properties.",
  },
  {
    q: "Property 'env' does not exist on type 'ProcessEnv' — how to fix?",
    a: "Install @types/node and add 'node' to types in tsconfig.json. For custom env variables, extend the ProcessEnv interface in a .d.ts file: declare namespace NodeJS { interface ProcessEnv { MY_VAR: string } }",
  },
  {
    q: "Should I use 'as any' to fix property does not exist?",
    a: "No — as any silences TypeScript without fixing the underlying issue. Use proper type narrowing, update the interface to include the property, or use a specific type assertion (as HTMLInputElement) instead of as any. Reserve as any for truly untyped third-party interop.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Property Does Not Exist on Type — Fixed [2026 Guide]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-property-does-not-exist",
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
            tags={["TypeScript", "Error Fix"]}
            title={"TypeScript: Property Does Not Exist on Type"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: TS2339 · property 'x' does not exist on type 'never' · HTMLElement properties"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TypeScript · React · Node.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error You Are Seeing"}
            </p>
            <ErrorBlock>{`error TS2339: Property 'username' does not exist on type 'User'.

error TS2339: Property 'value' does not exist on type 'HTMLElement'.

error TS2339: Property 'customData' does not exist on type 'Request'.`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="cause">{"Why TS2339 Fires"}</SH>
          <P>
            {
              "TypeScript's type system is structural — a type only has the properties you have declared it to have. TS2339 fires when you access a property that is not in the type definition. The four most common scenarios:"
            }
          </P>
          <CL
            items={[
              "You added a new property to an object but forgot to update the interface",
              "You're accessing a property that only exists on one variant of a union type without narrowing",
              "You're using a DOM base type (HTMLElement) instead of a specific subtype (HTMLInputElement)",
              "You're trying to add properties to a third-party type (Express Request, Next.js types)",
            ]}
          />

          <FixCard
            number="1"
            title="Add the Property to the Interface"
            time="2 min"
            tag="Most common fix — update the type definition"
          >
            <P>
              {
                "If the property genuinely belongs to the object, add it to the interface or type. Make it optional with "
              }
              <IC>{"?"}</IC>
              {" if it might not always be present."}
            </P>
            <CodeBlock title="fix — update the interface">{`// BEFORE — interface missing the property
interface User {
  id: string;
  email: string;
}

const user: User = { id: "1", email: "a@b.com" };
console.log(user.username); // TS2339: Property 'username' does not exist

// AFTER — add the property (optional if not always present)
interface User {
  id: string;
  email: string;
  username?: string;       // optional
  displayName: string;     // required
  role: "admin" | "user";  // union literal
}

// Or use type intersection to extend without modifying the original:
type UserWithProfile = User & {
  avatarUrl: string;
  bio: string;
};`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Type Narrowing for Union Types"
            time="3 min"
            tag="typeof · in · instanceof · discriminated unions"
          >
            <P>
              {
                "When a variable can be multiple types, TypeScript requires you to narrow it before accessing type-specific properties."
              }
            </P>
            <CodeBlock title="type narrowing patterns">{`type ApiResponse =
  | { status: "success"; data: { users: User[] } }
  | { status: "error"; message: string };

function handleResponse(response: ApiResponse) {
  // TS2339 — 'data' only exists on success variant
  console.log(response.data); // ERROR

  // Fix 1: discriminated union narrowing (best approach)
  if (response.status === "success") {
    console.log(response.data.users); // OK — TypeScript knows it's success
  } else {
    console.log(response.message); // OK — TypeScript knows it's error
  }
}

// Fix 2: 'in' operator narrowing
function processEvent(event: MouseEvent | KeyboardEvent) {
  if ("key" in event) {
    console.log(event.key); // OK — KeyboardEvent has 'key'
  }
}

// Fix 3: instanceof narrowing
function handleElement(el: HTMLElement) {
  if (el instanceof HTMLInputElement) {
    console.log(el.value); // OK — HTMLInputElement has 'value'
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Optional Chaining for Optional Properties"
            time="2 min"
            tag="Property may be undefined — use ?. operator"
          >
            <CodeBlock title="optional chaining">{`interface Config {
  database?: {
    host: string;
    port: number;
  };
}

const config: Config = {};

// TS2339 — database may be undefined
console.log(config.database.host); // ERROR

// Fix 1: optional chaining
console.log(config.database?.host); // OK — returns undefined if missing

// Fix 2: nullish coalescing with default
const host = config.database?.host ?? "localhost";

// Fix 3: non-null assertion (only use when you are certain it exists)
console.log(config.database!.host); // OK but unsafe — crashes if undefined`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Index Signatures for Dynamic Keys"
            time="3 min"
            tag="Element implicitly has 'any' type · string index"
          >
            <ErrorBlock>{`error TS7017: Element implicitly has an 'any' type because expression
of type 'string' can't be used to index type 'MyObject'.`}</ErrorBlock>
            <CodeBlock title="index signatures">{`// When accessing an object with a dynamic string key:
const statusLabels = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
};

const key = "active"; // TypeScript infers this as string, not the literal
console.log(statusLabels[key]); // TS7017 ERROR

// Fix 1: Use a type-safe Record type
const statusLabels: Record<string, string> = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
};

// Fix 2: Use a union literal key type (safest)
type Status = "active" | "inactive" | "pending";
const statusLabels: Record<Status, string> = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
};

// Fix 3: Add an index signature to an interface
interface StatusMap {
  [key: string]: string;
  active: string;
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Type Assertion — Use Sparingly"
            time="2 min"
            tag="Last resort when TypeScript cannot infer correctly"
          >
            <P>
              {
                "Type assertions tell TypeScript to trust you about a type. Use them only when you have information TypeScript cannot infer automatically."
              }
            </P>
            <CodeBlock title="type assertions — correct usage">{`// DOM elements — TypeScript only knows you have an HTMLElement
const input = document.getElementById("search");
// ERROR: Property 'value' does not exist on type 'HTMLElement | null'

// Fix: assert to specific DOM type (safe when you know the element type)
const input = document.getElementById("search") as HTMLInputElement;
console.log(input.value); // OK

// OR use querySelector which allows type parameter:
const input = document.querySelector<HTMLInputElement>("#search");
console.log(input?.value); // OK with optional chaining

// WRONG — avoid as any
const data = fetchData() as any; // loses all type safety
data.anything; // TypeScript won't catch errors here

// BETTER — use unknown and narrow
const data: unknown = fetchData();
if (typeof data === "object" && data !== null && "users" in data) {
  // Now TypeScript knows data has a 'users' property
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Extending Third-Party Types"
            time="3 min"
            tag="Express Request · Next.js types · module augmentation"
          >
            <P>
              {
                "When you need to add properties to types from external libraries (like adding "
              }
              <IC>{"user"}</IC>
              {" to Express's "}
              <IC>{"Request"}</IC>
              {"), use module augmentation."}
            </P>
            <CodeBlock title="src/types/express.d.ts — extend Express Request">{`// Extend Express Request to include user after authentication
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: "admin" | "user";
      };
    }
  }
}

export {}; // Must export to make this a module`}</CodeBlock>
            <CodeBlock title="src/types/next-auth.d.ts — extend NextAuth Session">{`import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: "admin" | "user";
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "admin" | "user";
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Make sure your .d.ts augmentation files are included in your tsconfig.json via the include array or typeRoots setting."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Use discriminated unions (status: 'success' | 'error') for type narrowing instead of casting",
              "Prefer optional properties (field?: string) over non-null assertions (field!)",
              "Create .d.ts augmentation files for extending third-party types — never modify node_modules",
              "Use querySelector<HTMLInputElement>() instead of getElementById + type assertion",
              "Avoid as any — use as unknown then narrow, or find the proper type",
              "Enable strict mode in tsconfig.json to catch TS2339 and related errors at development time",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript Cannot Find Module",
                href: "/category/typescript/error/typescript-cannot-find-module",
                time: "7 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript tsconfig Paths Not Working",
                href: "/category/typescript/error/typescript-tsconfig-paths-not-working",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Build Failing on Vercel",
                href: "/category/next-js/error/nextjs-build-failing-vercel",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Write Strictly Typed TypeScript"}
            desc={
              "Softplix builds type-safe React and Node.js applications with strict TypeScript from day one. No any, no shortcuts — real types that catch real bugs."
            }
          />
        </div>
      </main>
    </>
  );
}
