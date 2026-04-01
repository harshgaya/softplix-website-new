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
  title: "React forwardRef Not Working — ref is null Fixed [2026]",
  description:
    "Fix React forwardRef not working — ref is null, ref not attached, TypeScript errors with forwardRef, useImperativeHandle, and the React 19 ref-as-prop pattern.",
  keywords:
    "react forwardRef not working, forwardRef ref null, react ref not attached to DOM 2026, react forwardRef TypeScript, useImperativeHandle react, react 19 ref prop",
  alternates: {
    canonical:
      "https://softplix.com/category/react/error/react-forwardref-not-working",
  },
  openGraph: {
    title: "React forwardRef Not Working — Fixed [2026]",
    description:
      "Fix React forwardRef — ref null, TypeScript types, useImperativeHandle, React 19 ref prop.",
    type: "article",
    url: "https://softplix.com/category/react/error/react-forwardref-not-working",
  },
};

const TOC = [
  { label: "Why forwardRef ref is null", href: "#why" },
  { label: "Fix 1 — Attach the ref to the actual DOM element", href: "#fix-1" },
  { label: "Fix 2 — TypeScript types for forwardRef", href: "#fix-2" },
  { label: "Fix 3 — Expose methods with useImperativeHandle", href: "#fix-3" },
  {
    label: "Fix 4 — React 19 ref-as-prop (no forwardRef needed)",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — forwardRef through multiple component layers",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my forwardRef ref always null?",
    a: "The most common cause is forgetting to pass the ref to the underlying DOM element inside the forwardRef component. The ref callback and forwardRef wrapper only forward the ref — you must manually attach it to the actual element with ref={ref} on the JSX element inside the component body.",
  },
  {
    q: "What is forwardRef used for in React?",
    a: "forwardRef lets a parent component access a child component's DOM node or instance methods. Without forwardRef, passing a ref to a custom component has no effect — the ref stays null. Common use cases: focusing an input, measuring element size, triggering animations, or calling methods on a child (with useImperativeHandle).",
  },
  {
    q: "Do I need forwardRef in React 19?",
    a: "No. React 19 allows passing ref as a regular prop — no forwardRef wrapper needed. If you are on React 19, just accept ref in your component props like any other prop and attach it to the DOM element. The forwardRef API still works for backwards compatibility.",
  },
  {
    q: "How do I type forwardRef with TypeScript?",
    a: "Use forwardRef<RefType, PropsType>. The first generic is the type of the ref (usually HTMLInputElement, HTMLDivElement, etc). The second is your component's props type. Inside the component, type the ref parameter as React.ForwardedRef<RefType>.",
  },
  {
    q: "What is useImperativeHandle and when should I use it?",
    a: "useImperativeHandle customises what the parent receives when it uses a ref on your component. Instead of exposing the full DOM node, you expose only specific methods (like focus(), reset(), scrollTo()). Use it when you want to give parents controlled access to your component's internals without exposing the entire DOM element.",
  },
  {
    q: "Can I use forwardRef with a class component?",
    a: "Class components automatically support refs without forwardRef — you can pass a ref to any class component and React attaches it to the class instance. forwardRef is only needed for function components, which normally ignore the ref prop.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React forwardRef Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react/error/react-forwardref-not-working",
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
            tags={["React", "Refs", "Error Fix"]}
            title={"React forwardRef Not Working"}
            subtitle={"— ref is null [Fixed 2026]"}
            sub={
              "Also covers: attaching ref to DOM · TypeScript generics · useImperativeHandle · React 19 ref-as-prop · multi-layer forwarding"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18/19 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// ref.current is always null — forwardRef not attached correctly
const inputRef = useRef<HTMLInputElement>(null)
<CustomInput ref={inputRef} />
console.log(inputRef.current)  // null`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct forwardRef pattern"}
            </p>
            <CodeBlock title="components/custom-input.tsx">{`import { forwardRef } from "react"

// ✅ ref passed INTO the component via forwardRef, then attached to DOM element
const CustomInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} {...props} />   // ← ref attached here
  }
)
CustomInput.displayName = "CustomInput"`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why forwardRef ref Is Null"}</SH>
          <P>
            {"React function components ignore the "}
            <IC>{"ref"}</IC>
            {" prop by default — it doesn't get forwarded to anything. "}
            <IC>{"forwardRef"}</IC>
            {
              " is the mechanism to receive the ref and pass it to a specific DOM element. The most common mistake is wrapping the component in "
            }
            <IC>{"forwardRef"}</IC>
            {" but forgetting to actually attach the received "}
            <IC>{"ref"}</IC>
            {" to the "}
            <IC>{"<input>"}</IC>
            {" or "}
            <IC>{"<div>"}</IC>
            {" inside."}
          </P>

          <FixCard
            number="1"
            title="Attach the ref to the Actual DOM Element"
            time="2 min"
            tag="ref received but never attached — stays null"
          >
            <CodeBlock title="forwardRef — complete correct pattern">{`import { forwardRef, type InputHTMLAttributes } from "react"

// ❌ Wrong — ref received but never attached to any element
const BadInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    // ref is received here but never used!
    return <input {...props} />   // ← no ref={ref}
  }
)

// ✅ Correct — ref attached to the DOM element
const GoodInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} {...props} />  // ← ref={ref} here
  }
)
GoodInput.displayName = "GoodInput"

// Parent usage
function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function focusInput() {
    inputRef.current?.focus()   // works — ref is attached to the input DOM node
  }

  return (
    <div>
      <GoodInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="TypeScript Types for forwardRef"
            time="3 min"
            tag="TypeScript errors — ref type mismatch"
          >
            <CodeBlock title="Correct TypeScript generics for forwardRef">{`import { forwardRef, type ForwardedRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  isLoading?: boolean
}

// forwardRef<RefType, PropsType>
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}                    // ← ForwardedRef<HTMLButtonElement>
        className={\`btn btn-\${variant}\`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    )
  }
)
Button.displayName = "Button"

// Export the type for consumers
export type ButtonRef = React.ElementRef<typeof Button>  // = HTMLButtonElement

// Parent with typed ref:
const btnRef = useRef<HTMLButtonElement>(null)
<Button ref={btnRef} variant="primary">Submit</Button>`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Expose Methods with useImperativeHandle"
            time="4 min"
            tag="Expose focus/reset/scroll instead of the raw DOM node"
          >
            <P>
              {"Use "}
              <IC>{"useImperativeHandle"}</IC>
              {
                " when you want to expose specific imperative methods to the parent, rather than the entire DOM element."
              }
            </P>
            <CodeBlock title="useImperativeHandle — controlled API surface">{`import { forwardRef, useRef, useImperativeHandle } from "react"

// Define the methods you want to expose
interface SearchInputHandle {
  focus: () => void
  clear: () => void
  getValue: () => string
}

const SearchInput = forwardRef<SearchInputHandle, { placeholder?: string }>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    // Expose only selected methods — not the raw DOM element
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = ""
      },
      getValue: () => inputRef.current?.value ?? "",
    }), [])  // empty deps — methods don't change

    return <input ref={inputRef} {...props} className="border rounded px-3 py-2" />
  }
)

// Parent usage — ref gives access to only the exposed API
function SearchBar() {
  const searchRef = useRef<SearchInputHandle>(null)

  return (
    <div>
      <SearchInput ref={searchRef} placeholder="Search..." />
      <button onClick={() => searchRef.current?.focus()}>Focus</button>
      <button onClick={() => searchRef.current?.clear()}>Clear</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="React 19 ref-as-prop — No forwardRef Needed"
            time="2 min"
            tag="React 19+ — forwardRef is no longer required"
          >
            <P>
              {
                "In React 19, ref is now a regular prop. You no longer need to wrap components in "
              }
              <IC>{"forwardRef"}</IC>
              {" — just accept "}
              <IC>{"ref"}</IC>
              {" in your props and attach it."}
            </P>
            <CodeBlock title="React 19 — ref as a normal prop">{`// React 19 — no forwardRef wrapper needed
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  ref?: React.Ref<HTMLInputElement>   // just add ref to props type
}

// ✅ React 19 function component — ref is a regular prop
function CustomInput({ label, ref, ...props }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input ref={ref} {...props} />   // ← attach ref to DOM element
    </div>
  )
}

// Parent — exact same usage as before
function Form() {
  const inputRef = useRef<HTMLInputElement>(null)
  return <CustomInput ref={inputRef} label="Name" placeholder="Enter name" />
}

// Note: forwardRef still works in React 19 — no migration required
// The ref-as-prop is the new recommended pattern for new components`}</CodeBlock>
            <TipBox>
              {
                "If your project uses React 19, prefer the ref-as-prop pattern for new components. The forwardRef API is still supported but marked as a legacy pattern in the React 19 docs."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="forwardRef Through Multiple Component Layers"
            time="3 min"
            tag="ref passing through composed/wrapped components"
          >
            <CodeBlock title="Multi-layer ref forwarding">{`import { forwardRef } from "react"

// Level 1 — base input
const BaseInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => <input ref={ref} {...props} />
)

// Level 2 — styled wrapper — must also forward the ref
const StyledInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <BaseInput
      ref={ref}   // ← forward to the next layer
      className={\`border rounded px-3 py-2 \${className ?? ""}\`}
      {...props}
    />
  )
)

// Level 3 — form field with label — must also forward
const FormField = forwardRef<HTMLInputElement, { label: string } & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, ...props }, ref) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <StyledInput ref={ref} {...props} />   // ← forward down the chain
    </div>
  )
)

// Parent — ref reaches the actual <input> DOM element through all 3 layers
function Form() {
  const nameRef = useRef<HTMLInputElement>(null)
  return <FormField ref={nameRef} label="Full name" placeholder="John Smith" />
}`}</CodeBlock>
            <WarnBox>
              {
                "Every component in the chain must use forwardRef and pass the ref down. If any layer drops the ref (doesn't pass ref={ref} to the next component), ref.current will be null at the parent level."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always attach the received ref to the DOM element inside forwardRef: ref={ref} on the JSX element",
              "Set displayName on every forwardRef component for better React DevTools debugging",
              "Use forwardRef<DOMType, PropsType> TypeScript generics — prevents ref type mismatches",
              "Use useImperativeHandle when you want to expose methods, not the raw DOM node",
              "In React 19, accept ref as a regular prop — no forwardRef wrapper required",
              "In multi-layer components, every wrapper must forward the ref — one dropped layer breaks the chain",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React portal not rendering",
                href: "/category/react/error/react-portal-not-rendering",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React useMemo not working",
                href: "/category/react/error/react-usememo-not-working",
                time: "6 min read",
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
            title={"We Build Reusable React Component Libraries"}
            desc={
              "Softplix engineers build accessible, TypeScript-first React component systems with forwardRef, compound patterns, and design tokens. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
