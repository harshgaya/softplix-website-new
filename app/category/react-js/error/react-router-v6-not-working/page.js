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
  title: "React Router v6 Not Working — Fixed [2026]",
  description:
    "Fix React Router v6 not working. Covers all v5 to v6 breaking changes: Switch to Routes, useHistory to useNavigate, Redirect to Navigate, Route props, and nested routes with Outlet.",
  keywords:
    "react router v6 not working fix, switch is not exported react-router-dom, usehistory not working v6 2026, react router 6 breaking changes fix",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-router-v6-not-working",
  },
  openGraph: {
    title: "React Router v6 Not Working — Fixed [2026]",
    description:
      "Fix React Router v6 breaking changes — Routes, useNavigate, Navigate, Outlet.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-router-v6-not-working",
  },
};

const TOC = [
  { label: "v5 → v6 breaking changes overview", href: "#changes" },
  { label: "Fix 1 — Switch → Routes", href: "#fix-1" },
  { label: "Fix 2 — Route component prop → element prop", href: "#fix-2" },
  { label: "Fix 3 — useHistory → useNavigate", href: "#fix-3" },
  { label: "Fix 4 — Redirect → Navigate", href: "#fix-4" },
  { label: "Fix 5 — Nested routes with Outlet", href: "#fix-5" },
  { label: "Fix 6 — Protected route pattern in v6", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What are the main breaking changes in React Router v6?",
    a: "Switch is now Routes. The Route component prop is now element (JSX). useHistory is now useNavigate. Redirect is now Navigate component. The exact prop is removed — all routes are exact by default. Nested routes use Outlet instead of rendering children inside page components.",
  },
  {
    q: "How do I fix 'Switch is not exported from react-router-dom'?",
    a: "Replace <Switch> with <Routes>. Also update <Route component={Page}> to <Route element={<Page />}>. The entire Routes/Route API changed in v6.",
  },
  {
    q: "useHistory is not a function in React Router v6?",
    a: "useHistory was removed. Replace with useNavigate: const navigate = useNavigate(). Then: navigate('/path') to push, navigate('/path', { replace: true }) to replace, navigate(-1) to go back.",
  },
  {
    q: "How do nested routes work in React Router v6?",
    a: "In v6, nested routes use the Outlet component. Define child routes inside the parent Route in JSX. The parent layout component renders <Outlet /> where child content should appear.",
  },
  {
    q: "How do I redirect in React Router v6?",
    a: "Use the Navigate component: <Route path='/old' element={<Navigate to='/new' replace />} />. Or programmatically: const navigate = useNavigate(); navigate('/new', { replace: true }).",
  },
  {
    q: "React Router v6 route not matching — why?",
    a: "In v6, all routes are exact by default — you no longer need the exact prop. Also check that your Routes component contains all the Route definitions, and that the BrowserRouter wraps your entire app including the Routes.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Router v6 Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-router-v6-not-working",
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
            tags={["React", "React Router", "Error Fix"]}
            title={"React Router v6 Not Working"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Switch → Routes · useHistory → useNavigate · Redirect → Navigate · Outlet"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"React Router v6 · React 18"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-2 uppercase tracking-widest">
              {"⚡ v5 → v6 Quick Reference"}
            </p>
            <div className="rounded-xl border border-green-100 overflow-hidden bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-green-50 bg-green-50">
                    <th className="text-left px-4 py-2 font-bold text-red-600">
                      {"v5 (remove)"}
                    </th>
                    <th className="text-left px-4 py-2 font-bold text-green-700">
                      {"v6 (use this)"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["<Switch>", "<Routes>"],
                    ["<Route component={C}>", "<Route element={<C />}>"],
                    ["useHistory()", "useNavigate()"],
                    ["<Redirect to='/x'>", "<Navigate to='/x' replace />"],
                    ["exact prop", "not needed — all routes exact by default"],
                    ["history.push('/x')", "navigate('/x')"],
                    ["history.goBack()", "navigate(-1)"],
                  ].map(([o, n]) => (
                    <tr
                      key={o}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-2 font-mono text-red-600">{o}</td>
                      <td className="px-4 py-2 font-mono text-green-700">
                        {n}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <TOCBlock items={TOC} />

          <SH id="changes">{"v5 → v6 Breaking Changes Overview"}</SH>
          <ErrorBlock>{`ERROR: 'Switch' is not exported from 'react-router-dom'
ERROR: useHistory is not a function
ERROR: 'Redirect' is not exported from 'react-router-dom'`}</ErrorBlock>
          <P>
            {
              "React Router v6 is a near-complete rewrite. It fixes API inconsistencies from v5 but requires updating most of your routing code if you are upgrading. Here are all the fixes in order of how commonly they are encountered."
            }
          </P>

          <FixCard
            number="1"
            title="Switch → Routes"
            time="1 min"
            tag="'Switch' is not exported from react-router-dom"
          >
            <CodeBlock title="App.jsx">{`// ❌ v5
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

// ✅ v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />        {/* exact by default */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />    {/* 404 catch-all */}
      </Routes>
    </BrowserRouter>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Route element Prop — Not component"
            time="1 min"
            tag="Route not rendering — wrong prop name"
          >
            <CodeBlock title="App.jsx">{`// ❌ v5 — all these patterns removed in v6
<Route path="/home" component={Home} />
<Route path="/home" render={() => <Home extra="prop" />} />
<Route path="/home" children={<Home />} />

// ✅ v6 — always use element with JSX
<Route path="/home" element={<Home />} />
<Route path="/home" element={<Home extra="prop" />} />  {/* props inline */}
<Route path="/users/:id" element={<UserPage />} />       {/* params via useParams() */}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="useHistory → useNavigate"
            time="2 min"
            tag="useHistory is not a function"
          >
            <CodeBlock title="components/LoginForm.jsx">{`// ❌ v5
import { useHistory } from 'react-router-dom'
const history = useHistory()
history.push('/dashboard')
history.replace('/login')
history.goBack()
history.push('/page', { fromLogin: true })  // with state

// ✅ v6
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
navigate('/dashboard')                                  // push
navigate('/login', { replace: true })                   // replace
navigate(-1)                                            // go back
navigate(1)                                             // go forward
navigate('/page', { state: { fromLogin: true } })       // with state

// Read state at destination
import { useLocation } from 'react-router-dom'
const location = useLocation()
const fromLogin = location.state?.fromLogin`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Redirect → Navigate"
            time="1 min"
            tag="'Redirect' is not exported from react-router-dom"
          >
            <CodeBlock title="App.jsx">{`// ❌ v5
import { Redirect } from 'react-router-dom'
<Route path="/old" render={() => <Redirect to="/new" />} />

// ✅ v6
import { Navigate } from 'react-router-dom'
<Route path="/old" element={<Navigate to="/new" replace />} />

// ✅ Programmatic redirect (after form submit etc.)
navigate('/success', { replace: true })`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Nested Routes With Outlet"
            time="3 min"
            tag="Child routes not rendering in layout"
          >
            <CodeBlock title="App.jsx + layouts/DashboardLayout.jsx">{`import { Routes, Route, Outlet, Link } from 'react-router-dom'

// Layout component — renders Outlet where children go
function DashboardLayout() {
  return (
    <div>
      <nav>
        <Link to="overview">Overview</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <main>
        <Outlet />  {/* child routes render here */}
      </main>
    </div>
  )
}

// App — nested route structure
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />           {/* /dashboard */}
          <Route path="settings" element={<Settings />} /> {/* /dashboard/settings */}
          <Route path="users/:id" element={<UserDetail />} />{/* /dashboard/users/42 */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Protected Route Pattern in v6"
            time="2 min"
            tag="Auth guard — redirect if not logged in"
          >
            <CodeBlock title="components/ProtectedRoute.jsx">{`import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location  = useLocation()

  if (!user) {
    // Redirect to login, preserve intended destination
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

// Usage in App.jsx
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

// In LoginPage — redirect back after login
const navigate = useNavigate()
const location  = useLocation()
const from      = location.state?.from?.pathname ?? '/dashboard'
// After successful login:
navigate(from, { replace: true })`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Check react-router-dom version: npm ls react-router-dom",
              "Replace all at once: Switch→Routes, component→element, useHistory→useNavigate, Redirect→Navigate",
              "Remove all exact props — routes are exact by default in v6",
              "Use Outlet in layout components for nested route content",
              "Follow the official React Router v5 to v6 migration guide for larger codebases",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title:
                  "Fix: react cannot read properties of undefined (reading 'map')",
                href: "react-cannot-read-properties-undefined-map",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React context not updating",
                href: "react-context-not-updating",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React hooks only in function component",
                href: "react-hooks-only-in-function-component",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade React Apps"}
            desc={
              "Softplix builds full-stack React and Next.js applications. Need help migrating to React Router v6 or setting up routing architecture? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
