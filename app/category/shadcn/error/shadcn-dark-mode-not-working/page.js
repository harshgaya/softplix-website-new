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
  title: "shadcn/ui Dark Mode Not Working — Fixed [2026]",
  description:
    "Fix shadcn/ui dark mode not toggling or not applying correctly. Covers next-themes setup, ThemeProvider, CSS variables in dark mode, and hydration mismatch.",
  keywords:
    "shadcn dark mode not working, shadcn ui theme toggle not working 2026, next-themes shadcn nextjs, shadcn dark mode hydration mismatch, shadcn ThemeProvider",
  alternates: {
    canonical:
      "https://softplix.com/category/shadcn/error/shadcn-dark-mode-not-working",
  },
  openGraph: {
    title: "shadcn/ui Dark Mode Not Working — Fixed [2026]",
    description:
      "Fix shadcn/ui dark mode — next-themes, ThemeProvider, CSS variables, hydration.",
    type: "article",
    url: "https://softplix.com/category/shadcn/error/shadcn-dark-mode-not-working",
  },
};

const TOC = [
  { label: "Why shadcn/ui dark mode doesn't toggle", href: "#why" },
  { label: "Fix 1 — Install and configure next-themes", href: "#fix-1" },
  { label: "Fix 2 — Wrap your app in ThemeProvider", href: "#fix-2" },
  { label: "Fix 3 — Add dark: CSS variables to globals.css", href: "#fix-3" },
  { label: "Fix 4 — Fix hydration mismatch with useEffect", href: "#fix-4" },
  { label: "Fix 5 — Build a theme toggle button", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How does shadcn/ui implement dark mode?",
    a: "shadcn/ui uses Tailwind's class-based dark mode strategy. Adding the 'dark' class to the <html> element activates all dark: Tailwind utilities. The CSS variables in globals.css have a .dark block that overrides the light mode values. next-themes handles adding/removing the dark class.",
  },
  {
    q: "Do I need next-themes for dark mode with shadcn/ui?",
    a: "next-themes is the recommended package for shadcn/ui dark mode. It handles persisting the user's theme preference in localStorage, server-side rendering, and preventing flash of incorrect theme (FOIT). You can implement dark mode without it, but next-themes handles the edge cases correctly.",
  },
  {
    q: "Why does my dark mode flash white on page load?",
    a: "This is a Flash of Incorrect Theme (FOIT). next-themes prevents it by injecting a script that sets the correct class before React hydrates. Ensure you add suppressHydrationWarning to the <html> element in layout.tsx. Without it, React warns about the class mismatch between server and client.",
  },
  {
    q: "Why do shadcn components not change color in dark mode?",
    a: "If the dark class is added to <html> but components don't change, the .dark {} CSS variable block in globals.css is missing. shadcn/ui components use CSS variables for all colors — the dark block overrides these to the dark palette values.",
  },
  {
    q: "Can I force dark mode always without a toggle?",
    a: "Yes. In tailwind.config.ts, set darkMode: 'class' and add the dark class permanently to your <html> tag. Or use darkMode: 'media' to follow the system preference automatically without any toggle or ThemeProvider.",
  },
  {
    q: "How do I access the current theme in a component?",
    a: "Use the useTheme hook from next-themes: const { theme, setTheme } = useTheme(). Remember that useTheme must be used in a Client Component. The theme value is 'light', 'dark', or 'system'.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "shadcn/ui Dark Mode Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/shadcn/error/shadcn-dark-mode-not-working",
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
            tags={["shadcn/ui", "Dark Mode", "Error Fix"]}
            title={"shadcn/ui Dark Mode Not Working"}
            subtitle={"— next-themes Setup [Fixed 2026]"}
            sub={
              "Also covers: ThemeProvider · CSS variables dark block · hydration mismatch · FOIT · theme toggle button"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"shadcn/ui · next-themes · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Theme toggle fires but components stay in light mode
// OR:
// Dark mode works but flashes white on every page load
// OR:
// Hydration mismatch warning in console`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Setup sequence"}
            </p>
            <CodeBlock title="terminal">{`npm install next-themes`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why shadcn/ui Dark Mode Doesn't Toggle"}</SH>
          <P>
            {"shadcn/ui uses Tailwind's "}
            <IC>{"class"}</IC>
            {" dark mode strategy — it reads the "}
            <IC>{"dark"}</IC>
            {" class on the "}
            <IC>{"html"}</IC>
            {
              " element. If that class never gets added, no dark mode applies. The two most common causes are: "
            }
            <IC>{"ThemeProvider"}</IC>
            {
              " not wrapping the app, and the dark CSS variable block missing from "
            }
            <IC>{"globals.css"}</IC>
            {"."}
          </P>

          <FixCard
            number="1"
            title="Install and Configure next-themes"
            time="2 min"
            tag="Foundation — theme state manager"
          >
            <CodeBlock title="tailwind.config.ts — ensure class-based dark mode">{`import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],   // ← must be "class" not "media" for next-themes
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  // ... rest of config
}

export default config`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Wrap Your App in ThemeProvider"
            time="3 min"
            tag="ThemeProvider must wrap the entire app"
          >
            <CodeBlock title="components/theme-provider.tsx">{`"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`}</CodeBlock>
            <CodeBlock title="app/layout.tsx — wrap with ThemeProvider">{`import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>   {/* ← suppressHydrationWarning is required */}
      <body>
        <ThemeProvider
          attribute="class"          // adds/removes "dark" class on <html>
          defaultTheme="system"      // follow OS preference by default
          enableSystem               // enable system theme detection
          disableTransitionOnChange  // prevent flash during theme change
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add Dark CSS Variables to globals.css"
            time="3 min"
            tag="Dark class applied but colors don't change"
          >
            <CodeBlock title="app/globals.css — dark mode block">{`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    /* ... all light mode variables */
  }

  /* ← This dark block is required — without it nothing changes in dark mode */
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --border: 217.2 32.6% 17.5%;
    /* ... all dark mode overrides */
  }
}`}</CodeBlock>
            <TipBox>
              {
                "The shadcn init command generates a complete .dark {} block for your chosen color palette. If you ran init, this block should already be in globals.css. Check if it's there before adding manually."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Hydration Mismatch"
            time="2 min"
            tag="Console warning about class attribute mismatch"
          >
            <P>
              {
                "When Next.js renders on the server, it doesn't know the user's theme preference (stored in localStorage). The "
              }
              <IC>{"suppressHydrationWarning"}</IC>
              {" attribute on "}
              <IC>{"html"}</IC>
              {" tells React not to warn about this expected mismatch."}
            </P>
            <CodeBlock title="Mounting guard for theme-dependent UI">{`"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // ✅ Wait for component to mount before reading theme
  // Prevents hydration mismatch in the toggle button icon
  useEffect(() => setMounted(true), [])

  if (!mounted) return null   // render nothing on server

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Build a Complete Theme Toggle Button"
            time="5 min"
            tag="Polished toggle with Sun/Moon icons"
          >
            <CodeBlock title="components/theme-toggle.tsx">{`"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <Button variant="ghost" size="icon" disabled><span className="sr-only">Toggle theme</span></Button>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {/* Sun icon — visible in light mode */}
          <span className="h-4 w-4 dark:hidden">☀️</span>
          {/* Moon icon — visible in dark mode */}
          <span className="h-4 w-4 hidden dark:block">🌙</span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Set darkMode: ['class'] in tailwind.config.ts — next-themes requires class strategy",
              "Add suppressHydrationWarning to the <html> element — prevents React warnings about class mismatch",
              "Ensure the .dark {} CSS variable block exists in globals.css — this is what actually changes the colors",
              "Wrap the entire app in ThemeProvider in layout.tsx — not just individual pages",
              "Use a mounted guard (useEffect + useState) in toggle components to prevent hydration mismatch",
              "Use attribute='class' in ThemeProvider — this is what adds the dark class to <html>",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui not working in Next.js",
                href: "/category/shadcn/error/shadcn-ui-not-working-nextjs",
                time: "7 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui component style override",
                href: "/category/shadcn/error/shadcn-component-style-override",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js hydration failed error",
                href: "/category/next-js/error/nextjs-hydration-failed",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Dark Mode UI with shadcn/ui"}
            desc={
              "Softplix engineers set up shadcn/ui with full dark mode, custom themes, and accessible design systems. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
