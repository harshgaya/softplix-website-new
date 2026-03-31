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
  title: "shadcn/ui Not Working in Next.js — Fixed [2026]",
  description:
    "Fix shadcn/ui not working in Next.js App Router. Covers installation, Tailwind CSS config, CSS variables, cn() utility, component imports, and dark mode setup.",
  keywords:
    "shadcn ui not working nextjs, shadcn not working app router 2026, shadcn install error nextjs, shadcn components not styled, shadcn tailwind not working",
  alternates: {
    canonical:
      "https://softplix.com/category/shadcn/error/shadcn-ui-not-working-nextjs",
  },
  openGraph: {
    title: "shadcn/ui Not Working in Next.js — Fixed [2026]",
    description:
      "Fix shadcn/ui in Next.js — installation, Tailwind config, CSS variables, dark mode.",
    type: "article",
    url: "https://softplix.com/category/shadcn/error/shadcn-ui-not-working-nextjs",
  },
};

const TOC = [
  { label: "Why shadcn/ui components appear unstyled", href: "#why" },
  { label: "Fix 1 — Run the correct shadcn init command", href: "#fix-1" },
  { label: "Fix 2 — Fix Tailwind CSS configuration", href: "#fix-2" },
  { label: "Fix 3 — Add CSS variables to globals.css", href: "#fix-3" },
  { label: "Fix 4 — Fix the cn() utility import path", href: "#fix-4" },
  {
    label: "Fix 5 — Fix components showing no styles in production",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why do shadcn/ui components appear completely unstyled?",
    a: "shadcn/ui components use Tailwind CSS classes. If the components look unstyled, either Tailwind is not configured to scan the component files, the CSS variables in globals.css are missing, or the shadcn init command was not run correctly. Check all three.",
  },
  {
    q: "Do I need to install shadcn/ui as a package?",
    a: "No. shadcn/ui is not installed as an npm package. You run npx shadcn@latest add button (or any component) and it copies the component source code directly into your project — typically into components/ui/. You own the code and can modify it freely.",
  },
  {
    q: "What is the cn() utility in shadcn/ui?",
    a: "cn() is a helper that merges Tailwind CSS classes intelligently using clsx and tailwind-merge. It handles conditional classes and resolves conflicts between Tailwind utility classes. It is defined in lib/utils.ts and imported by all shadcn components.",
  },
  {
    q: "Why does shadcn/ui not work with Tailwind CSS v4?",
    a: "shadcn/ui has a Tailwind v4 compatible version. Run npx shadcn@canary init for the Tailwind v4 setup. The configuration is different — instead of tailwind.config.ts, styles are configured in CSS using @import and @theme directives.",
  },
  {
    q: "Can I use shadcn/ui without Next.js?",
    a: "Yes. shadcn/ui works with any React framework — Vite, Remix, Astro, Laravel. Run npx shadcn@latest init and select your framework. The components are framework-agnostic React components using Radix UI primitives and Tailwind CSS.",
  },
  {
    q: "How do I add a new shadcn/ui component to my project?",
    a: "Run npx shadcn@latest add component-name — for example, npx shadcn@latest add button or npx shadcn@latest add dialog. This copies the component into your components/ui/ directory. You can then import it from '@/components/ui/button'.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "shadcn/ui Not Working in Next.js — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/shadcn/error/shadcn-ui-not-working-nextjs",
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
            tags={["shadcn/ui", "Next.js", "Error Fix"]}
            title={"shadcn/ui Not Working in Next.js"}
            subtitle={"— Components Unstyled [Fixed 2026]"}
            sub={
              "Also covers: shadcn init · Tailwind CSS config · CSS variables · cn() utility · Tailwind v4 · production styles"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"shadcn/ui · Next.js 14/15 · Tailwind CSS"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Components render but have NO styles — plain HTML appearance
// OR:
Module not found: Can't resolve '@/lib/utils'
// OR:
Cannot find module '@/components/ui/button'`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct setup sequence"}
            </p>
            <CodeBlock title="Terminal">{`# 1. Init shadcn (creates components.json, updates tailwind config, globals.css)
npx shadcn@latest init

# 2. Add components as needed
npx shadcn@latest add button
npx shadcn@latest add dialog input card`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why shadcn/ui Components Appear Unstyled"}</SH>
          <P>
            {
              "shadcn/ui relies on three things to render correctly: Tailwind CSS scanning the component files, CSS custom properties (variables) in your "
            }
            <IC>{"globals.css"}</IC>
            {", and the "}
            <IC>{"cn()"}</IC>
            {" utility in "}
            <IC>{"lib/utils.ts"}</IC>
            {
              "  . If any of these is missing or misconfigured, components render as plain unstyled HTML."
            }
          </P>
          <P>
            {"The "}
            <IC>{"npx shadcn@latest init"}</IC>
            {
              " command sets up all three automatically. If you manually copied components without running init, you need to add the configuration manually."
            }
          </P>

          <FixCard
            number="1"
            title="Run the Correct shadcn Init Command"
            time="3 min"
            tag="Start here — init handles all configuration"
          >
            <CodeBlock title="Complete shadcn setup for Next.js">{`# For Tailwind CSS v3 (most common as of 2026):
npx shadcn@latest init

# For Tailwind CSS v4 (if you're using v4):
npx shadcn@canary init

# The init wizard asks:
# ✓ Which style? → Default (or New York)
# ✓ Which base color? → Slate (or your preference)
# ✓ Use CSS variables for colors? → Yes
# ✓ Where is globals.css? → app/globals.css
# ✓ tailwind.config.ts path → tailwind.config.ts
# ✓ Components alias → @/components
# ✓ Utils alias → @/lib/utils

# After init, the wizard creates:
# - components.json (config)
# - lib/utils.ts (cn() utility)
# - Updates tailwind.config.ts (content paths + colors)
# - Updates app/globals.css (CSS variables)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Tailwind CSS Configuration"
            time="3 min"
            tag="Styles present in dev but missing in prod"
          >
            <P>
              {"Tailwind must be configured to scan the "}
              <IC>{"components/ui"}</IC>
              {
                " directory. Without this, component classes are purged in production builds."
              }
            </P>
            <CodeBlock title="tailwind.config.ts — correct content paths">{`import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",    // ← includes components/ui/
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more color tokens
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add CSS Variables to globals.css"
            time="3 min"
            tag="Components render but colors are wrong or missing"
          >
            <P>
              {
                "shadcn/ui components use CSS custom properties for all colors. Without these variables, all color utilities resolve to transparent or nothing."
              }
            </P>
            <CodeBlock title="app/globals.css — required CSS variables">{`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode variables */
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix the cn() Utility Import Path"
            time="2 min"
            tag="Module not found '@/lib/utils'"
          >
            <P>
              {"All shadcn components import from "}
              <IC>{"@/lib/utils"}</IC>
              {"  . Create this file if it's missing."}
            </P>
            <CodeBlock title="lib/utils.ts — create this file">{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

# Install the dependencies if missing:
npm install clsx tailwind-merge`}</CodeBlock>
            <CodeBlock title="tsconfig.json — verify the @ path alias">{`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]    // ← maps @/ to project root
    }
  }
}`}</CodeBlock>
            <TipBox>
              {
                "shadcn expects the @/* alias to map to your project root. If your app is inside a src/ directory, the alias should be @/*: ['./src/*'] instead."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Components Not Styled in Production"
            time="3 min"
            tag="Works in dev but unstyled after build"
          >
            <P>
              {
                "If components look correct in development but lose styles after "
              }
              <IC>{"next build"}</IC>
              {
                ", Tailwind is purging classes it can't find in the scanned files. Usually the content paths in tailwind.config.ts are missing the components directory."
              }
            </P>
            <CodeBlock title="Debug — check which classes are being purged">{`# Build and check the CSS output size
next build

# If styles/globals.css is very small (< 10KB), Tailwind is purging too aggressively

# Fix — ensure components/ui is in content paths
content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",   // ← must include this
  "./pages/**/*.{ts,tsx}",
]

# If using src/ layout:
content: [
  "./src/app/**/*.{ts,tsx}",
  "./src/components/**/*.{ts,tsx}",
]

# Also ensure tailwindcss-animate is installed
npm install tailwindcss-animate`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always run npx shadcn@latest init first — never manually copy component files without running init",
              "Verify the content paths in tailwind.config.ts include ./components/**/*.{ts,tsx}",
              "Check globals.css has the @layer base block with all CSS variables after running init",
              "Install clsx and tailwind-merge — they are required by the cn() utility",
              "Verify tsconfig.json has the @/* path alias pointing to your project root",
              "After adding a new component, import it from @/components/ui/button (not a node_modules path)",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui dark mode not working",
                href: "/category/shadcn/error/shadcn-dark-mode-not-working",
                time: "6 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui component style override",
                href: "/category/shadcn/error/shadcn-component-style-override",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js 'use client' directive error",
                href: "/category/next-js/error/nextjs-use-client-directive-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Next.js Apps with shadcn/ui"}
            desc={
              "Softplix engineers build production Next.js applications with shadcn/ui, Tailwind CSS, and strict TypeScript. Need a UI system set up correctly? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
