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
  title: "Next.js useSearchParams Must Be Wrapped in Suspense — Fixed [2026]",
  description:
    "Fix Next.js useSearchParams must be wrapped in a Suspense boundary. Understand why Next.js 14+ requires Suspense for useSearchParams and how to wrap it correctly.",
  keywords:
    "nextjs usesearchparams suspense fix, usesearchparams must be wrapped in suspense boundary 2026, nextjs 14 usesearchparams error",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-usesearchparams-suspense",
  },
  openGraph: {
    title: "Next.js useSearchParams Must Be Wrapped in Suspense — Fixed [2026]",
    description:
      "Fix useSearchParams Suspense boundary requirement in Next.js 14+.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-usesearchparams-suspense",
  },
};

const TOC9 = [
  { label: "Why Suspense is required for useSearchParams", href: "#why" },
  { label: "Fix 1 — Wrap the component in Suspense", href: "#fix-1" },
  {
    label: "Fix 2 — Extract useSearchParams into a child component",
    href: "#fix-2",
  },
  { label: "Fix 3 — Create a reusable Suspense wrapper", href: "#fix-3" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS9 = [
  {
    q: "Why does useSearchParams require Suspense in Next.js?",
    a: "In Next.js 14+, pages using useSearchParams opt out of static rendering and require Suspense during prerendering. Without a Suspense boundary, the entire page would need to be dynamically rendered. Suspense lets Next.js statically render everything except the search-param-dependent part.",
  },
  {
    q: "How do I fix useSearchParams must be wrapped in Suspense?",
    a: "Wrap your component (or the component that uses useSearchParams) in React Suspense: <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>. The component using useSearchParams does NOT need to be the direct child — any ancestor Suspense boundary works.",
  },
  {
    q: "Does the Suspense boundary need to be in the same file?",
    a: "No. It can be in any ancestor component in the tree. If your component is used on multiple pages, the cleanest approach is to extract the useSearchParams logic into a small child component and wrap that child wherever it is used.",
  },
  {
    q: "Can I use useSearchParams in a Server Component?",
    a: "No. useSearchParams is a Client Component hook. In Server Components, access search params through the searchParams prop: export default function Page({ searchParams }) { const query = searchParams.q }. The searchParams prop is automatically available on page.jsx files.",
  },
  {
    q: "useSearchParams works in dev but errors in production — why?",
    a: "Next.js is stricter about Suspense requirements in production builds. The error is correctly suppressed in development for faster iteration but enforced during next build. Always run npm run build locally to catch this before deploying.",
  },
];

function A9Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Next.js useSearchParams Must Be Wrapped in Suspense — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-usesearchparams-suspense",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A9FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS9.map(({ q, a }) => ({
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
      <A9Schema />
      <A9FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "React", "Error Fix"]}
            title={"useSearchParams Must Be Wrapped in Suspense"}
            subtitle={"Next.js — Fixed [2026]"}
            sub={undefined}
            date={"January 2026"}
            read={"4 min read"}
            tech={"Next.js 14–15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix"}
            </p>
            <CodeBlock title="app/search/page.jsx">{`import { Suspense } from 'react'
import SearchResults from './SearchResults'

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <SearchResults />  {/* SearchResults uses useSearchParams */}
    </Suspense>
  )
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC9} />

          <SH id="why">{"Why Suspense Is Required for useSearchParams"}</SH>
          <ErrorBlock>{`Error: useSearchParams() should be wrapped in a suspense boundary at page "/search".
Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout`}</ErrorBlock>
          <P>
            {"Next.js 14 changed how "}
            <IC>{"useSearchParams"}</IC>
            {
              " works during static prerendering. When a component reads search params, it cannot be statically rendered at build time (because search params are only known at request time). Next.js requires a Suspense boundary so it can statically render everything outside it, and defer the dynamic part."
            }
          </P>

          <FixCard
            number="1"
            title="Wrap the Component in Suspense"
            time="1 min"
            tag="Simplest fix"
          >
            <CodeBlock title="app/products/page.jsx">{`import { Suspense } from 'react'
import ProductList from '@/components/ProductList'

export default function ProductsPage() {
  return (
    <main>
      <h1>Products</h1>
      {/* ProductList uses useSearchParams for filtering */}
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <ProductList />
      </Suspense>
    </main>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Extract useSearchParams Into a Child Component"
            time="2 min"
            tag="Cleaner pattern for complex pages"
          >
            <CodeBlock title="app/search/page.jsx">{`import { Suspense } from 'react'

// ✅ Extract the hook usage into its own component
function SearchContent() {
  'use client'
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  return <div>Results for: {query}</div>
}

// Page component stays as Server Component
export default function SearchPage() {
  return (
    <div>
      <h1>Search</h1>
      <Suspense fallback={<p>Searching...</p>}>
        <SearchContent />
      </Suspense>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Reusable Suspense Wrapper"
            time="2 min"
            tag="DRY pattern for multiple pages"
          >
            <CodeBlock title="components/SearchParamsProvider.jsx">{`'use client'
import { Suspense } from 'react'

export function WithSearchParams({ children, fallback = null }) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}

// Usage on any page:
import { WithSearchParams } from '@/components/SearchParamsProvider'

export default function Page() {
  return (
    <WithSearchParams fallback={<p>Loading...</p>}>
      <FilteredList />
    </WithSearchParams>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always wrap components using useSearchParams in Suspense at the page level",
              "Run npm run build locally before deploying — this error only shows at build time",
              "For Server Components: use the searchParams prop instead of useSearchParams hook",
              "Extract useSearchParams usage into small client components for easier Suspense wrapping",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS9} />

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
                title: "Fix: Next.js params undefined",
                href: "nextjs-params-undefined",
                time: "5 min read",
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
              "Softplix builds full-stack Next.js applications. Need help with App Router patterns or Suspense boundaries? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
