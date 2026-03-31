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
  title: "shadcn/ui Dialog Not Closing — Fixed [2026]",
  description:
    "Fix shadcn/ui Dialog not closing after form submit or button click. Covers controlled vs uncontrolled Dialog, onOpenChange, form submit close, and async close patterns.",
  keywords:
    "shadcn dialog not closing, shadcn ui dialog not closing after submit 2026, shadcn dialog open state controlled, shadcn AlertDialog not closing, radix dialog close",
  alternates: {
    canonical:
      "https://softplix.com/category/shadcn/error/shadcn-dialog-not-closing",
  },
  openGraph: {
    title: "shadcn/ui Dialog Not Closing — Fixed [2026]",
    description:
      "Fix shadcn/ui Dialog — controlled state, onOpenChange, form submit close, async patterns.",
    type: "article",
    url: "https://softplix.com/category/shadcn/error/shadcn-dialog-not-closing",
  },
};

const TOC = [
  { label: "Why shadcn/ui Dialog doesn't close", href: "#why" },
  { label: "Fix 1 — Control Dialog open state with useState", href: "#fix-1" },
  { label: "Fix 2 — Close Dialog after form submit", href: "#fix-2" },
  { label: "Fix 3 — Close Dialog after async action", href: "#fix-3" },
  { label: "Fix 4 — Prevent Dialog closing on overlay click", href: "#fix-4" },
  {
    label: "Fix 5 — Close Dialog programmatically from a child",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does my shadcn/ui Dialog not close when I click outside?",
    a: "shadcn/ui Dialog closes on overlay click by default (Radix UI behaviour). If it's not closing, either you've set onInteractOutside to preventDefault, or the Dialog is uncontrolled but something is re-opening it immediately. Check for state that is setting open to true on every render.",
  },
  {
    q: "How do I close a shadcn Dialog programmatically?",
    a: "Control the Dialog with useState: const [open, setOpen] = useState(false). Pass open and onOpenChange={setOpen} to the Dialog. To close it, call setOpen(false) from anywhere — a button click, form submit callback, or after an async action.",
  },
  {
    q: "How do I close a shadcn Dialog after a form submits successfully?",
    a: "Use controlled state with useState. In your submit handler, after the action completes successfully, call setOpen(false). For Server Actions, wait for the action to resolve, then close. If using react-hook-form, call setOpen(false) in the onSubmit function after awaiting the action.",
  },
  {
    q: "What is the difference between controlled and uncontrolled Dialog in shadcn?",
    a: "Uncontrolled Dialog manages its own open/closed state internally — useful for simple cases like a trigger button. Controlled Dialog uses your state (useState) via open and onOpenChange props — required when you need to close the Dialog from outside, like after a form submit or an API call.",
  },
  {
    q: "Why does my Dialog reopen immediately after I close it?",
    a: "This happens when the state managing the Dialog is being reset to true on every render. Check if the open prop is tied to a value that changes back to true — like a derived state that recalculates, or a parent component re-rendering and passing a constant true.",
  },
  {
    q: "Can I have a Dialog without a close button?",
    a: "Yes. Remove the DialogClose component and set onInteractOutside={(e) => e.preventDefault()} on DialogContent to prevent closing on overlay click. This creates a 'sticky' dialog that can only be closed programmatically with setOpen(false).",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "shadcn/ui Dialog Not Closing — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/shadcn/error/shadcn-dialog-not-closing",
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
            tags={["shadcn/ui", "Dialog", "Error Fix"]}
            title={"shadcn/ui Dialog Not Closing"}
            subtitle={"— After Submit & Programmatic [Fixed 2026]"}
            sub={
              "Also covers: controlled vs uncontrolled · onOpenChange · form submit close · async close · prevent outside close"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"shadcn/ui · Radix UI · React"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Submit button clicked — form submits — Dialog stays open
// OR: Close button works but Dialog reopens immediately
// OR: Need to close Dialog from inside a nested component`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — control open state with useState"}
            </p>
            <CodeBlock title="Controlled Dialog pattern">{`const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <button onClick={() => setOpen(false)}>Close</button>
  </DialogContent>
</Dialog>`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why shadcn/ui Dialog Doesn't Close"}</SH>
          <P>
            {
              "shadcn/ui Dialog is built on Radix UI's Dialog primitive, which supports both controlled and uncontrolled modes. When using the uncontrolled mode (no "
            }
            <IC>{"open"}</IC>
            {
              " prop), the Dialog manages its own state. If you need to close it from outside — after a form submit, async action, or programmatically — you must switch to controlled mode with "
            }
            <IC>{"useState"}</IC>
            {"."}
          </P>

          <FixCard
            number="1"
            title="Control Dialog Open State with useState"
            time="2 min"
            tag="Foundation — required for programmatic close"
          >
            <CodeBlock title="Controlled Dialog — complete pattern">{`"use client"

import { useState } from "react"
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function MyDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>My Dialog</DialogTitle>
        </DialogHeader>
        <p>Dialog content here</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Close Dialog After Form Submit"
            time="3 min"
            tag="Most common use case — submit then close"
          >
            <CodeBlock title="Close after successful form submission">{`"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CreateUserDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      await createUser({ name })   // your API call
      setOpen(false)               // ← close only on success
      setName("")                  // reset form
    } catch (err) {
      console.error(err)           // stay open on error — show feedback
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button>Create User</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Create User</DialogTitle></DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Close Dialog After Server Action"
            time="3 min"
            tag="useActionState + setOpen after action resolves"
          >
            <CodeBlock title="Dialog + Server Action + close on success">{`"use client"

import { useActionState } from "react"
import { useEffect, useState } from "react"
import { createPost } from "@/app/actions"

export function CreatePostDialog() {
  const [open, setOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(createPost, null)

  // Close dialog when action succeeds
  useEffect(() => {
    if (state?.success) {
      setOpen(false)
    }
  }, [state?.success])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button>New Post</Button></DialogTrigger>
      <DialogContent>
        <form action={formAction}>
          <Input name="title" placeholder="Post title" required />
          {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Post"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Prevent Dialog Closing on Overlay Click"
            time="2 min"
            tag="Sticky dialog — only close programmatically"
          >
            <CodeBlock title="Prevent outside click from closing">{`<DialogContent
  onInteractOutside={(e) => e.preventDefault()}
  onEscapeKeyDown={(e) => e.preventDefault()}
>
  {/* Dialog content — can only close via setOpen(false) */}
  <p>This dialog won't close on outside click or Escape</p>
  <Button onClick={() => setOpen(false)}>Close manually</Button>
</DialogContent>`}</CodeBlock>
            <WarnBox>
              {
                "Use this pattern sparingly — preventing Escape key close is an accessibility concern. Reserve it for operations that must not be accidentally dismissed (e.g., data loss confirmation, critical form completion)."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Close Dialog from a Nested Child Component"
            time="3 min"
            tag="Close button inside a deeply nested component"
          >
            <P>
              {"Pass "}
              <IC>{"setOpen"}</IC>
              {
                " as a prop, or use React Context to share the close function with deeply nested children."
              }
            </P>
            <CodeBlock title="Pass setOpen via props">{`// Parent
function ParentDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <NestedForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

// Child — receives close callback via prop
function NestedForm({ onSuccess }: { onSuccess: () => void }) {
  async function handleSubmit() {
    await saveData()
    onSuccess()    // closes the dialog
  }
  return <form onSubmit={handleSubmit}>...</form>
}

// ✅ Alternative — use DialogClose for simple close buttons
import { DialogClose } from "@/components/ui/dialog"

<DialogClose asChild>
  <Button variant="outline">Cancel</Button>
</DialogClose>`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always use controlled Dialog (useState + open + onOpenChange) when you need programmatic close",
              "Close Dialog only on success — let it stay open on error so the user can see the error message",
              "Use useEffect watching state.success to close Dialog after Server Actions complete",
              "Pass setOpen as a prop to child components that need to trigger close",
              "Use DialogClose asChild for simple cancel buttons — no need for custom close logic",
              "Reset form state after closing the Dialog to prevent stale data on next open",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui form validation not showing",
                href: "/category/shadcn/error/shadcn-form-validation-not-showing",
                time: "7 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui not working in Next.js",
                href: "/category/shadcn/error/shadcn-ui-not-working-nextjs",
                time: "7 min read",
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
            title={"We Build Complex shadcn/ui UI Patterns"}
            desc={
              "Softplix engineers implement dialogs, sheets, command palettes, and complex UI flows with shadcn/ui and React. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
