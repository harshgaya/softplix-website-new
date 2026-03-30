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
  title: "Next.js Server Actions Not Working — Fixed [2026]",
  description:
    "Fix Next.js Server Actions not working. Covers missing 'use server' directive, form action errors, revalidation, error handling, and Server Actions in Client Components.",
  keywords:
    "nextjs server actions not working, next.js server action error 2026, use server directive nextjs, server action form not submitting, revalidatePath not working nextjs",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-server-action-not-working",
  },
  openGraph: {
    title: "Next.js Server Actions Not Working — Fixed [2026]",
    description:
      "Fix Next.js Server Actions — use server, form actions, revalidation, error handling.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-server-action-not-working",
  },
};

const TOC = [
  { label: "Why Server Actions fail in Next.js", href: "#why" },
  { label: "Fix 1 — Add 'use server' directive correctly", href: "#fix-1" },
  { label: "Fix 2 — Fix Server Actions in Client Components", href: "#fix-2" },
  { label: "Fix 3 — Handle form data correctly", href: "#fix-3" },
  {
    label: "Fix 4 — Fix revalidatePath / revalidateTag not working",
    href: "#fix-4",
  },
  { label: "Fix 5 — Error handling in Server Actions", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is a Next.js Server Action?",
    a: "A Server Action is an async function marked with 'use server' that runs exclusively on the server. You can call it directly from Client Components or use it as a form action. Next.js handles the network request automatically — no API route needed.",
  },
  {
    q: "Why is my Server Action not running?",
    a: "The most common causes are: missing 'use server' directive, calling the action from a Server Component without it being async, passing non-serialisable arguments, or the function not being exported from a separate actions file when used in a Client Component.",
  },
  {
    q: "Can I use a Server Action in a Client Component?",
    a: "Yes. Import the Server Action from a file that has 'use server' at the top (not inline). In the Client Component, call it like any async function. Next.js automatically handles the client-to-server bridge.",
  },
  {
    q: "Why is revalidatePath not refreshing my page?",
    a: "revalidatePath must be called inside the Server Action after the data mutation, with the exact path string including the leading slash. If the path uses dynamic segments, you must pass the full resolved path, not the route pattern.",
  },
  {
    q: "Can Server Actions replace API routes?",
    a: "For most data mutations (form submissions, creating/updating/deleting records), yes. Server Actions are simpler — no fetch, no route file needed. Keep API routes for webhooks, third-party callbacks, or when you need HTTP-level control over the response.",
  },
  {
    q: "How do I handle errors in Server Actions?",
    a: "Throw errors inside the Server Action and catch them with useActionState (React 19) or a try/catch in your calling code. Never return sensitive error details to the client — log them server-side and return a user-safe message.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Server Actions Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-server-action-not-working",
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
            tags={["Next.js", "Server Actions", "Error Fix"]}
            title={"Next.js Server Actions Not Working"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: use server directive · form actions · revalidatePath · useActionState · error handling"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Next.js 14/15 · App Router · React 19"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Symptoms"}
            </p>
            <ErrorBlock>{`// Server Action silently does nothing
// OR:
Error: Server Actions must be async functions.
// OR:
Error: Functions cannot be passed directly to Client Components
unless you explicitly expose it by marking it with "use server".`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct Pattern"}
            </p>
            <CodeBlock title="app/actions.ts">{`"use server"   // ← top of the file, not inside the function

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string
  await db.post.create({ data: { title } })
  revalidatePath("/posts")
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Server Actions Fail in Next.js"}</SH>
          <P>
            {
              "Server Actions were introduced as stable in Next.js 14 and enhanced further in Next.js 15 with React 19. They fail silently or throw cryptic errors when the "
            }
            <IC>{'"use server"'}</IC>
            {
              " directive is misplaced, when non-serialisable data is passed as arguments, or when "
            }
            <IC>{"revalidatePath"}</IC>
            {" is called outside the action scope."}
          </P>

          <FixCard
            number="1"
            title={"Add 'use server' Directive Correctly"}
            time="2 min"
            tag="Root cause — wrong directive placement"
          >
            <P>
              {"The "}
              <IC>{'"use server"'}</IC>
              {
                " directive can go either at the top of a dedicated actions file (recommended) or inline at the top of an individual async function. The inline form is only valid inside Server Components."
              }
            </P>
            <CodeBlock title="Option A — Dedicated actions file (recommended)">{`// app/actions.ts — "use server" at file level
"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string
  await db.post.create({ data: { title } })
  revalidatePath("/posts")
}

export async function deletePost(id: string) {
  await db.post.delete({ where: { id } })
  revalidatePath("/posts")
}`}</CodeBlock>
            <CodeBlock title="Option B — Inline inside a Server Component">{`// app/posts/page.tsx — Server Component only
export default function PostsPage() {
  async function createPost(formData: FormData) {
    "use server"  // ← inline inside function, Server Component only
    const title = formData.get("title") as string
    await db.post.create({ data: { title } })
    revalidatePath("/posts")
  }

  return <form action={createPost}><input name="title" /><button>Create</button></form>
}`}</CodeBlock>
            <WarnBox>
              {
                "Inline 'use server' inside a function only works in Server Components. In Client Components, always import from a dedicated actions file."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Server Actions in Client Components"
            time="3 min"
            tag="Cannot pass functions directly to Client Components"
          >
            <P>
              {
                "Client Components cannot define Server Actions inline. Import them from a separate "
              }
              <IC>{"actions.ts"}</IC>
              {" file that has "}
              <IC>{'"use server"'}</IC>
              {" at the top."}
            </P>
            <CodeBlock title="app/actions.ts">{`"use server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function submitContact(formData: FormData) {
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  await db.contact.create({ data: { email, message } })
  revalidatePath("/contact")
  return { success: true }
}`}</CodeBlock>
            <CodeBlock title="components/contact-form.tsx — Client Component">{`"use client"

import { useActionState } from "react"
import { submitContact } from "@/app/actions"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null)

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <textarea name="message" required />
      {state?.success && <p>Message sent!</p>}
      <button disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Handle Form Data Correctly"
            time="2 min"
            tag="FormData fields returning null"
          >
            <P>
              {"Server Actions receive a "}
              <IC>{"FormData"}</IC>
              {" object when used as a form action. Every input must have a "}
              <IC>{"name"}</IC>
              {" attribute, and values must be extracted with "}
              <IC>{"formData.get()"}</IC>
              {"."}
            </P>
            <CodeBlock title="Correct form + action pattern">{`// Form — every input needs name=""
<form action={createProduct}>
  <input name="title" />          {/* ✅ has name */}
  <input name="price" />          {/* ✅ has name */}
  <input />                       {/* ❌ no name — formData.get() returns null */}
  <button type="submit">Create</button>
</form>

// Server Action — extract with .get() and cast type
async function createProduct(formData: FormData) {
  "use server"
  const title = formData.get("title") as string       // string
  const price = Number(formData.get("price"))          // number
  const image = formData.get("image") as File | null  // file upload

  if (!title) throw new Error("Title is required")
  await db.product.create({ data: { title, price } })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix revalidatePath / revalidateTag Not Working"
            time="2 min"
            tag="Page not refreshing after mutation"
          >
            <P>
              {"After a Server Action mutates data, call "}
              <IC>{"revalidatePath"}</IC>
              {" or "}
              <IC>{"revalidateTag"}</IC>
              {" to purge the Next.js cache for the affected route."}
            </P>
            <CodeBlock title="revalidatePath — common mistakes">{`import { revalidatePath, revalidateTag } from "next/cache"

async function updatePost(id: string, formData: FormData) {
  "use server"
  await db.post.update({ where: { id }, data: { title: formData.get("title") as string } })

  // ❌ Wrong — pattern string, not resolved path
  revalidatePath("/posts/[id]")

  // ✅ Correct — pass the actual resolved path
  revalidatePath(\`/posts/\${id}\`)

  // ✅ Also revalidate the list page
  revalidatePath("/posts")

  // ✅ Or use a tag (more flexible)
  revalidateTag("posts")
}`}</CodeBlock>
            <TipBox>
              {
                "Tag-based revalidation is more flexible — tag your fetches with revalidateTag, then call revalidateTag('posts') in any action that affects posts, without needing to know the exact URL."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Error Handling in Server Actions"
            time="3 min"
            tag="Errors crashing the page instead of showing a message"
          >
            <P>
              {"Use "}
              <IC>{"useActionState"}</IC>
              {
                " (React 19) to capture errors from Server Actions and display them in the form without crashing the page."
              }
            </P>
            <CodeBlock title="app/actions.ts — return errors, don't throw to client">{`"use server"

type ActionState = { error?: string; success?: boolean }

export async function registerUser(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const email = formData.get("email") as string
    const existing = await db.user.findUnique({ where: { email } })
    if (existing) return { error: "Email already registered" }

    await db.user.create({ data: { email } })
    return { success: true }
  } catch (err) {
    console.error("registerUser error:", err)
    return { error: "Something went wrong. Please try again." }
  }
}`}</CodeBlock>
            <CodeBlock title="components/register-form.tsx">{`"use client"
import { useActionState } from "react"
import { registerUser } from "@/app/actions"

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerUser, {})

  return (
    <form action={formAction}>
      <input name="email" type="email" />
      {state.error && <p className="text-red-600">{state.error}</p>}
      {state.success && <p className="text-green-600">Registered!</p>}
      <button disabled={isPending}>{isPending ? "Registering..." : "Register"}</button>
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always put Server Actions in a dedicated actions.ts file with 'use server' at the top",
              "Every form input must have a name attribute — formData.get() returns null without it",
              "Call revalidatePath with the exact resolved URL, not the route pattern",
              "Return error objects from Server Actions instead of throwing to avoid unhandled rejections",
              "Use useActionState (React 19) in Client Components for pending state and error display",
              "Never pass sensitive data or secrets back in the Server Action return value",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js 'use client' directive error",
                href: "/category/next-js/error/nextjs-use-client-directive-error",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js fetch not caching",
                href: "/category/next-js/error/nextjs-fetch-not-caching",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js cookies() in Server Component",
                href: "/category/next-js/error/nextjs-cookies-server-component",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production Next.js Applications"}
            desc={
              "Softplix engineers build full-stack Next.js apps with Server Actions, Prisma, and Supabase. Need help with your App Router architecture? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
