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
  title:
    "Next.js cookies() Must Be Called in a Server Component — Fixed [2026]",
  description:
    "Fix Next.js cookies() must be called in a Server Component error. Learn when to use cookies() vs getCookies, how to pass cookie data to Client Components, and correct App Router cookie patterns.",
  keywords:
    "nextjs cookies must be called in server component, nextjs cookies error fix 2026, next js cookies app router fix, cookies not working nextjs client component",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-cookies-server-component",
  },
  openGraph: {
    title:
      "Next.js cookies() Must Be Called in a Server Component — Fixed [2026]",
    description:
      "Fix cookies() must be called in a Server Component — Next.js App Router.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-cookies-server-component",
  },
};

const TOC = [
  { label: "Why cookies() only works in Server Components", href: "#why" },
  { label: "Fix 1 — Read cookies in a Server Component", href: "#fix-1" },
  {
    label: "Fix 2 — Pass cookie values as props to Client Components",
    href: "#fix-2",
  },
  { label: "Fix 3 — Set and delete cookies in Server Actions", href: "#fix-3" },
  {
    label: "Fix 4 — Read cookies in Route Handlers (API routes)",
    href: "#fix-4",
  },
  { label: "Fix 5 — Client-side cookie libraries", href: "#fix-5" },
  { label: "Fix 6 — Middleware for cookie-based auth", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does cookies() only work in Server Components?",
    a: "cookies() from 'next/headers' reads HTTP request headers which are only available on the server. Client Components run in the browser where there is no HTTP request object. This is an intentional security boundary — cookie parsing happens server-side.",
  },
  {
    q: "How do I access cookies in a Client Component?",
    a: "Read the cookie in a Server Component using cookies(), then pass the value as a prop to the Client Component: const token = cookies().get('token')?.value; return <ClientComp token={token} />. Never import cookies() in a Client Component.",
  },
  {
    q: "How do I set a cookie in Next.js App Router?",
    a: "Use Server Actions or Route Handlers: import { cookies } from 'next/headers'; cookies().set('name', 'value', { httpOnly: true, secure: true, path: '/' }). You cannot set cookies directly from Server Components — only from Server Actions or Route Handlers.",
  },
  {
    q: "How do I read cookies in Next.js middleware?",
    a: "Middleware has its own cookie API: export function middleware(request) { const token = request.cookies.get('token')?.value; const response = NextResponse.next(); response.cookies.set('visited', 'true'); return response; }",
  },
  {
    q: "cookies() is not a function — how to fix?",
    a: "Make sure you import from 'next/headers': import { cookies } from 'next/headers'. Do not import from 'next/cookies' or any other path. Also ensure the component is a Server Component (no 'use client' directive).",
  },
  {
    q: "How do I delete a cookie in Next.js?",
    a: "In a Server Action or Route Handler: cookies().delete('tokenName'). Or set it with maxAge 0: cookies().set('token', '', { maxAge: 0 }). You cannot delete cookies from a Server Component — only from actions and handlers.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Next.js cookies() Must Be Called in a Server Component — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-cookies-server-component",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FaqSchema() {
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
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "App Router", "Error Fix"]}
            title={"Next.js cookies() Must Be Called in a Server Component"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: cookies() not a function · set cookie in App Router · cookie in Client Component"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js 13–15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix — Read in Server, Pass as Prop"}
            </p>
            <CodeBlock title="app/dashboard/page.jsx">{`// ✅ Server Component — can use cookies()
import { cookies } from 'next/headers'
import DashboardClient from './DashboardClient'

export default function DashboardPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token')?.value
  const theme = cookieStore.get('theme')?.value ?? 'light'

  // Pass values as props to Client Component
  return <DashboardClient token={token} theme={theme} />
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why cookies() Only Works in Server Components"}</SH>
          <ErrorBlock>{`Error: cookies() was called outside a request scope.
cookies() should be called in a Server Component, Server Action, or Route Handler.

# or:
Error: You're importing a component that imports next/headers.
It only works in a React Server Component but one of its parents is marked with "use client".`}</ErrorBlock>
          <P>
            {"The "}
            <IC>{"cookies()"}</IC>
            {" function from "}
            <IC>{"next/headers"}</IC>
            {
              " reads the HTTP request headers which only exist on the server during a request. Client Components run in the browser after the page loads — there is no HTTP request available at that point. This is an intentional security boundary."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Where"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Read cookies"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Set cookies"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Server Component", "cookies().get(name)", "❌ Not allowed"],
                  [
                    "Server Action",
                    "cookies().get(name)",
                    "cookies().set(name, value)",
                  ],
                  [
                    "Route Handler (GET/POST)",
                    "cookies().get(name)",
                    "cookies().set(name, value)",
                  ],
                  [
                    "Middleware",
                    "request.cookies.get(name)",
                    "response.cookies.set(name, value)",
                  ],
                  [
                    "Client Component",
                    "❌ Cannot use cookies()",
                    "document.cookie (not recommended)",
                  ],
                ].map(([w, r, s]) => (
                  <tr key={w} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm">
                      {w}
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                      {r}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-500">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Read Cookies in a Server Component"
            time="1 min"
            tag="Correct pattern — Server Component only"
          >
            <CodeBlock title="app/profile/page.jsx">{`import { cookies } from 'next/headers'

// ✅ Server Component — no 'use client'
export default async function ProfilePage() {
  const cookieStore = cookies()

  // Read a single cookie
  const sessionId = cookieStore.get('session-id')?.value

  // Read with fallback
  const language = cookieStore.get('lang')?.value ?? 'en'

  // Check if cookie exists
  const isLoggedIn = cookieStore.has('auth-token')

  // Get all cookies
  const allCookies = cookieStore.getAll()

  if (!isLoggedIn) {
    redirect('/login')
  }

  return <div>Welcome back! Session: {sessionId}</div>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Pass Cookie Values as Props to Client Components"
            time="2 min"
            tag="The correct way to use cookie data in Client Components"
          >
            <P>
              {"Client Components cannot call "}
              <IC>{"cookies()"}</IC>
              {
                " but they can receive cookie values as props from a parent Server Component."
              }
            </P>
            <CodeBlock title="app/settings/page.jsx — Server Component">{`import { cookies } from 'next/headers'
import ThemeToggle from '@/components/ThemeToggle'  // Client Component

export default function SettingsPage() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value ?? 'light'
  const userId = cookieStore.get('user-id')?.value

  return (
    <div>
      <h1>Settings</h1>
      {/* Pass cookie values as regular props */}
      <ThemeToggle initialTheme={theme} userId={userId} />
    </div>
  )
}`}</CodeBlock>
            <CodeBlock title="components/ThemeToggle.jsx — Client Component">{`'use client'
import { useState } from 'react'

export default function ThemeToggle({ initialTheme, userId }) {
  const [theme, setTheme] = useState(initialTheme)

  async function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    // Call a Server Action to persist the cookie
    await updateThemeCookie(newTheme)
    setTheme(newTheme)
  }

  return <button onClick={toggleTheme}>Theme: {theme}</button>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Set and Delete Cookies in Server Actions"
            time="3 min"
            tag="Mutating cookies — use Server Actions"
          >
            <P>
              {
                "You cannot set or delete cookies from a Server Component. Use Server Actions which run on the server when triggered by a Client Component."
              }
            </P>
            <CodeBlock title="app/actions/auth.js">{`'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const email    = formData.get('email')
  const password = formData.get('password')
  const token    = await authenticateUser(email, password)

  // ✅ Set cookie in Server Action
  cookies().set('auth-token', token, {
    httpOnly: true,   // not accessible via JS
    secure: true,     // HTTPS only
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,  // 7 days
    path: '/',
  })

  redirect('/dashboard')
}

export async function logout() {
  cookies().delete('auth-token')
  redirect('/login')
}`}</CodeBlock>
            <CodeBlock title="components/LoginForm.jsx">{`'use client'
import { login } from '@/app/actions/auth'

export default function LoginForm() {
  return (
    <form action={login}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Read Cookies in Route Handlers"
            time="2 min"
            tag="API routes — app/api/.../route.js"
          >
            <CodeBlock title="app/api/user/route.js">{`import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getUserFromToken(token)
  return NextResponse.json(user)
}

export async function POST(request) {
  const body = await request.json()
  const response = NextResponse.json({ success: true })

  // Set cookie in Route Handler response
  response.cookies.set('session', body.sessionId, {
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  })

  return response
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Client-Side Cookie Libraries"
            time="2 min"
            tag="When you genuinely need cookies in the browser"
          >
            <P>
              {
                "For cookies that should be accessible in the browser (non-sensitive preferences), use "
              }
              <IC>{"js-cookie"}</IC>
              {" or the native "}
              <IC>{"document.cookie"}</IC>
              {" API in Client Components."}
            </P>
            <CodeBlock title="terminal">{"npm install js-cookie"}</CodeBlock>
            <CodeBlock title="components/CookieBanner.jsx">{`'use client'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    // Read client-accessible cookie after mount
    setAccepted(Cookies.get('cookies-accepted') === 'true')
  }, [])

  function accept() {
    Cookies.set('cookies-accepted', 'true', { expires: 365 })
    setAccepted(true)
  }

  if (accepted) return null
  return <div className="fixed bottom-0 ..."><button onClick={accept}>Accept</button></div>
}`}</CodeBlock>
            <WarnBox>
              {
                "Never store sensitive data (auth tokens, user IDs) in client-accessible cookies. Use httpOnly cookies via Server Actions or Route Handlers for anything security-sensitive."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="6"
            title="Middleware for Cookie-Based Auth"
            time="3 min"
            tag="Redirect unauthenticated users at the edge"
          >
            <CodeBlock title="middleware.js">{`import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('auth-token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  const isProtected = request.nextUrl.pathname.startsWith('/dashboard')

  // Redirect to login if accessing protected route without token
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect away from login if already authenticated
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Never import cookies() from 'next/headers' in a file with 'use client'",
              "Read cookies in Server Components, pass values as props to Client Components",
              "Use Server Actions to set and delete cookies — not Server Components",
              "Use middleware for auth-based redirects — runs at the edge before rendering",
              "For browser-accessible cookies (preferences), use js-cookie in Client Components",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
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
                title: "Fix: Next.js NEXT_PUBLIC_ env undefined",
                href: "nextjs-next-public-env-undefined",
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
            title={"We Build Secure Next.js Applications"}
            desc={
              "Softplix builds full-stack Next.js apps with secure authentication. Need help with cookie-based auth or session management? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
