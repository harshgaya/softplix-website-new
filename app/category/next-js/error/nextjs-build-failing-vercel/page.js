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
  title: "Next.js Build Failing on Vercel — Fixed [Complete Guide 2026]",
  description:
    "Fix Next.js build failing on Vercel. Covers missing env variables, TypeScript errors, ESLint failures, out of memory errors, and dependency issues during Vercel deployment.",
  keywords:
    "nextjs build failing vercel, next js deployment error vercel fix 2026, vercel build error nextjs, next build error fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-build-failing-vercel",
  },
  openGraph: {
    title: "Next.js Build Failing on Vercel — Fixed [Complete Guide 2026]",
    description:
      "Fix Next.js build failing on Vercel — env vars, TypeScript, ESLint, memory, dependencies.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-build-failing-vercel",
  },
};

const TOC8 = [
  { label: "Read the Vercel build log first", href: "#logs" },
  { label: "Fix 1 — Missing environment variables", href: "#fix-1" },
  { label: "Fix 2 — TypeScript errors failing the build", href: "#fix-2" },
  { label: "Fix 3 — ESLint errors failing the build", href: "#fix-3" },
  { label: "Fix 4 — Works locally but fails on Vercel", href: "#fix-4" },
  { label: "Fix 5 — Out of memory during build", href: "#fix-5" },
  { label: "Fix 6 — Dependency installation fails", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS8 = [
  {
    q: "Why is Next.js build failing on Vercel?",
    a: "The most common causes: 1) Environment variables not set in Vercel dashboard (only .env.local exists locally), 2) TypeScript type errors that were ignored locally, 3) ESLint errors that only fail in CI mode, 4) Case-sensitive import paths (Linux Vercel vs macOS locally).",
  },
  {
    q: "Build works locally but fails on Vercel — why?",
    a: "The most common cause is case sensitivity. Vercel runs on Linux which is case-sensitive. If you import './Components/Button' but the file is './components/Button', it works on macOS (case-insensitive) but fails on Linux. Fix import paths to match exact file names.",
  },
  {
    q: "How do I see the full Vercel build error?",
    a: "Go to your Vercel project → Deployments → click the failed deployment → click Build Logs. Scroll to the first red error line — that is the root cause. All subsequent errors are usually cascading from the first one.",
  },
  {
    q: "Vercel build failing with exit code 1 and no clear error?",
    a: "Scroll to the very top of the build log and look for the first error. Common causes: missing env variable causing a crash, TypeScript error, or memory limit hit. Run npm run build locally to reproduce the issue.",
  },
  {
    q: "How do I skip TypeScript errors in Next.js build?",
    a: "In next.config.js: typescript: { ignoreBuildErrors: true }. This lets the build succeed despite TypeScript errors. Use this temporarily — fix the actual TypeScript errors properly.",
  },
  {
    q: "How do I skip ESLint errors in Next.js build?",
    a: "In next.config.js: eslint: { ignoreDuringBuilds: true }. Use temporarily while fixing ESLint issues. Better long-term: fix the ESLint errors or add specific eslint-disable comments for genuine false positives.",
  },
];

function A8Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Build Failing on Vercel — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-build-failing-vercel",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A8FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS8.map(({ q, a }) => ({
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
      <A8Schema />
      <A8FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "Vercel", "Error Fix"]}
            title={"Next.js Build Failing on Vercel"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: deployment error · exit code 1 · build works locally not Vercel"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js · Vercel · CI/CD"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ First Step — Run the Build Locally"}
            </p>
            <CodeBlock title="terminal">{`# Reproduce the exact Vercel error locally
npm run build

# If it builds locally, the issue is environment-specific:
# → Missing env vars on Vercel
# → Case-sensitive file paths
# → Node.js version mismatch`}</CodeBlock>
          </div>

          <TOCBlock items={TOC8} />

          <SH id="logs">{"Read the Vercel Build Log First"}</SH>
          <P>
            {
              "Every Vercel build failure has a specific error message. Go to: Vercel Dashboard → your project → Deployments → click the failed deployment → Build Logs. Scroll up to find the "
            }
            <strong>{"first red error line"}</strong>
            {
              " — everything after it is usually a cascade from that one root cause."
            }
          </P>

          <FixCard
            number="1"
            title="Missing Environment Variables"
            time="3 min"
            tag="Most common cause — env vars not set in Vercel"
          >
            <P>
              {"Your "}
              <IC>{".env.local"}</IC>
              {
                " is never deployed. Any variable it contains must be added to Vercel separately."
              }
            </P>
            <CodeBlock title="Vercel CLI">{`# Add each env var to Vercel
vercel env add DATABASE_URL production
vercel env add NEXT_PUBLIC_API_URL production
vercel env add JWT_SECRET production

# List current Vercel env vars
vercel env ls`}</CodeBlock>
            <CodeBlock title="next.config.js — validate at build time">{`// Fail the build immediately if required vars are missing
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET']
requiredEnvVars.forEach(key => {
  if (!process.env[key]) {
    throw new Error(\`Build failed: missing required env var \${key}\`)
  }
})

module.exports = { /* your config */ }`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="TypeScript Errors Failing the Build"
            time="3 min"
            tag="next build fails on type errors"
          >
            <CodeBlock title="terminal">{`# Run TypeScript check locally to find all errors
npx tsc --noEmit

# Fix the errors, then push`}</CodeBlock>
            <CodeBlock title="next.config.js — temporary bypass">{`/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily allow builds with TS errors
    // Fix the actual errors as soon as possible
    ignoreBuildErrors: true,
  },
}
module.exports = nextConfig`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="ESLint Errors Failing the Build"
            time="2 min"
            tag="ESLint treating warnings as errors in CI"
          >
            <CodeBlock title="next.config.js">{`const nextConfig = {
  eslint: {
    // Skip ESLint during build — run it separately in CI
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Works Locally But Fails on Vercel"
            time="3 min"
            tag="Case sensitivity and OS differences"
          >
            <P>
              {
                "Vercel runs on Linux, which is case-sensitive. macOS and Windows are not. A file imported as "
              }
              <IC>{"./Components/Button"}</IC>
              {" when the real file is "}
              <IC>{"./components/button.jsx"}</IC>
              {" works on macOS and fails on Vercel."}
            </P>
            <CodeBlock title="terminal">{`# Find all case-mismatch imports
grep -r "from './" src/ app/ --include="*.tsx" --include="*.jsx" | \
  grep -E "[A-Z]"

# Or use this ESLint rule to catch it automatically:
# "import/no-unresolved": "error"

# Fix: match imports EXACTLY to file names on disk
# Wrong:  import Button from './Components/Button'
# Right:  import Button from './components/Button'`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Out of Memory During Build"
            time="2 min"
            tag="JavaScript heap out of memory on Vercel"
          >
            <CodeBlock title="package.json">{`{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}

// Or in next.config.js:
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}
module.exports = nextConfig`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Dependency Installation Fails"
            time="2 min"
            tag="npm install errors during Vercel build"
          >
            <CodeBlock title="terminal">{`# Delete lockfile and reinstall to fix corrupted cache
rm package-lock.json
npm install
# Commit the new package-lock.json

# Pin Node.js version to match Vercel
# In package.json:
{
  "engines": { "node": "20.x" }
}

# Or in .nvmrc:
echo "20" > .nvmrc`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Run npm run build locally before every push to catch build errors early",
              "Set all env vars in Vercel dashboard before the first deployment",
              "Use exact case-matching imports — enables cross-platform consistency",
              "Add engines.node to package.json to lock the Node.js version",
              "Run npx tsc --noEmit in CI before deploying to catch TypeScript errors",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS8} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: NEXT_PUBLIC_ env variable undefined",
                href: "nextjs-next-public-env-undefined",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Image component not working",
                href: "nextjs-image-component-not-working",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Hydration Failed",
                href: "next-js-hydration-failed",
                time: "8 min read",
              },
            ]}
          />
          <CTA
            title={"We Deploy & Manage Next.js Apps"}
            desc={
              "Softplix builds and deploys Next.js applications. Struggling with Vercel deployment or CI/CD? We can help set up a reliable deployment pipeline."
            }
          />
        </div>
      </main>
    </>
  );
}
