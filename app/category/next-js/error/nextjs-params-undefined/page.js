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
  FaCircleXmark,
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
function H3({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
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
  title: "Next.js params Undefined App Router — Fixed [2026]",
  description:
    "Fix Next.js params undefined in App Router. Covers async params in Next.js 15, correct page props, dynamic route file names, and accessing params in Server vs Client Components.",
  keywords:
    "nextjs params undefined, next js params undefined app router fix 2026, nextjs 15 params async fix, nextjs dynamic route params not working",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-params-undefined",
  },
  openGraph: {
    title: "Next.js params Undefined App Router — Fixed [2026]",
    description:
      "Fix Next.js params undefined — async params, Server Components, dynamic routes.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-params-undefined",
  },
};

const TOC10 = [
  { label: "Why params is undefined in App Router", href: "#why" },
  { label: "Fix 1 — Await params in Next.js 15", href: "#fix-1" },
  {
    label: "Fix 2 — Server Component — access params from props",
    href: "#fix-2",
  },
  { label: "Fix 3 — Client Component — use useParams hook", href: "#fix-3" },
  { label: "Fix 4 — Check dynamic file naming", href: "#fix-4" },
  { label: "Fix 5 — Nested dynamic routes", href: "#fix-5" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS10 = [
  {
    q: "Why is params undefined in Next.js App Router?",
    a: "Common causes: 1) In Next.js 15, params is now a Promise and must be awaited, 2) Accessing params in a Client Component without using the useParams hook, 3) Dynamic route file is named incorrectly (must use [brackets]).",
  },
  {
    q: "How do I access params in Next.js 15?",
    a: "Next.js 15 made params async. Await it: export default async function Page({ params }) { const { id } = await params; }. In Next.js 13–14, params is synchronous: const { id } = params.",
  },
  {
    q: "How do I access params in a Client Component in App Router?",
    a: "Use the useParams hook from 'next/navigation': 'use client'; import { useParams } from 'next/navigation'; const params = useParams(); const { id } = params;",
  },
  {
    q: "Next.js params works in dev but undefined in production?",
    a: "In Next.js 15, params is async. In development, accessing it synchronously may work due to timing, but fails in production. Always await params: const { id } = await params.",
  },
  {
    q: "How do I pass params from Server Component to Client Component?",
    a: "Access params in the Server Component (via props or await params), then pass the value as a regular prop to the Client Component: <ClientComponent id={params.id} />. Never try to access the params Promise in a Client Component.",
  },
  {
    q: "Dynamic route folder not working — params still undefined?",
    a: "The folder and file must be named correctly. Dynamic segments use brackets: app/blog/[slug]/page.jsx. The param name is the text between brackets — [slug] gives params.slug, [id] gives params.id. Also check that page.jsx exists inside the [slug] folder.",
  },
];

function A10Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js params Undefined App Router — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-params-undefined",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A10FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS10.map(({ q, a }) => ({
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
      <A10Schema />
      <A10FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "App Router", "Error Fix"]}
            title={"Next.js params Undefined App Router"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: Next.js 15 async params · dynamic route params not working · useParams"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Next.js 13–15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix — Await params in Next.js 15"}
            </p>
            <CodeBlock title="app/blog/[slug]/page.jsx">{`// Next.js 15 — params is now a Promise
export default async function BlogPost({ params }) {
  const { slug } = await params  // ← must await in Next.js 15
  return <h1>{slug}</h1>
}

// Next.js 13–14 — params is synchronous
export default function BlogPost({ params }) {
  const { slug } = params  // ← direct access, no await needed
  return <h1>{slug}</h1>
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC10} />

          <SH id="why">{"Why params Is Undefined in App Router"}</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "params not awaited in Next.js 15",
                    "Add await: const { id } = await params",
                  ],
                  [
                    "Client Component not using useParams",
                    "Use useParams() hook from next/navigation",
                  ],
                  [
                    "Dynamic folder named wrong",
                    "Use [brackets] for dynamic segments",
                  ],
                  [
                    "Accessing params.id before file matches",
                    "Verify file is app/route/[id]/page.jsx",
                  ],
                  [
                    "Passing params from Server to Client",
                    "Await in Server Component, pass as prop",
                  ],
                ].map(([c, f]) => (
                  <tr key={c} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {c}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Await params in Next.js 15"
            time="1 min"
            tag="Breaking change from Next.js 14 → 15"
          >
            <CodeBlock title="app/blog/[slug]/page.jsx">{`// ❌ WRONG in Next.js 15 — params is a Promise
export default async function BlogPost({ params }) {
  const { slug } = params  // TypeError: cannot destructure Promise
  return <article>{slug}</article>
}

// ✅ CORRECT — await the params Promise
export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await fetchPost(slug)
  return <article>{post.title}</article>
}

// ✅ Also correct — await in variable
export default async function BlogPost({ params }) {
  const resolvedParams = await params
  return <article>{resolvedParams.slug}</article>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Server Component — Access Params From Props"
            time="1 min"
            tag="Correct Server Component pattern"
          >
            <CodeBlock title="app/products/[id]/page.jsx">{`// ✅ Server Component — params comes as a prop
export default async function ProductPage({ params }) {
  const { id } = await params  // Next.js 15: await; v13-14: no await
  const product = await fetch(\`/api/products/\${id}\`).then(r => r.json())

  return (
    <div>
      <h1>{product.name}</h1>
      <ProductDetails product={product} />
    </div>
  )
}

// ✅ Generate static params for static pages
export async function generateStaticParams() {
  const products = await fetchAllProducts()
  return products.map(p => ({ id: p.id.toString() }))
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Client Component — Use useParams Hook"
            time="1 min"
            tag="Client Components cannot receive params as prop"
          >
            <CodeBlock title="components/ProductActions.jsx">{`'use client'
import { useParams } from 'next/navigation'

// ❌ WRONG — Client Components don't get params as prop directly
export default function ProductActions({ params }) {
  const { id } = params  // undefined!
}

// ✅ CORRECT — use useParams hook
export default function ProductActions() {
  const params = useParams()
  const { id } = params  // e.g. '42'

  async function handleAddToCart() {
    await fetch(\`/api/cart\`, {
      method: 'POST',
      body: JSON.stringify({ productId: id }),
    })
  }

  return <button onClick={handleAddToCart}>Add to Cart</button>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Check Dynamic File Naming"
            time="1 min"
            tag="Wrong folder structure causes params to be empty"
          >
            <CodeBlock>{`// ✅ Correct App Router dynamic route structure:
app/
  blog/
    [slug]/          ← folder named with [brackets]
      page.jsx       ← page file inside
      loading.jsx    ← optional
      error.jsx      ← optional

// Access: /blog/my-post → params.slug = 'my-post'

// ❌ Wrong — no brackets:
app/blog/slug/page.jsx    // 'slug' is treated as a static segment

// ❌ Wrong — brackets on file not folder:
app/blog/[slug].jsx       // this is Pages Router pattern, not App Router`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Nested Dynamic Routes"
            time="2 min"
            tag="Multiple params — [category]/[id]"
          >
            <CodeBlock title="app/shop/[category]/[id]/page.jsx">{`// Nested dynamic segments — all params available
export default async function ProductPage({ params }) {
  const { category, id } = await params
  // URL: /shop/electronics/42
  // category = 'electronics', id = '42'
  return <div>{category} — {id}</div>
}

// Catch-all: app/docs/[...slug]/page.jsx
// URL: /docs/getting-started/installation
export default async function DocsPage({ params }) {
  const { slug } = await params
  // slug = ['getting-started', 'installation']
  return <div>{slug.join(' / ')}</div>
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "In Next.js 15: always await params — const { id } = await params",
              "In Client Components: always use useParams() — never expect params as a prop",
              "Use [bracket] folder names for dynamic segments, not filenames",
              "Test with npm run build — some params issues only appear at build time",
              "Pass awaited param values from Server Components to Client Components as props",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS10} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: useRouter is not a function",
                href: "nextjs-userouter-not-a-function",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: useSearchParams must be wrapped in Suspense",
                href: "nextjs-usesearchparams-suspense",
                time: "4 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js build failing on Vercel",
                href: "nextjs-build-failing-vercel",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade Next.js Apps"}
            desc={
              "Softplix builds full-stack Next.js applications. Dealing with App Router complexity or dynamic routing issues? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
