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
    "React Hooks Can Only Be Called Inside Function Component — Fixed [2026]",
  description:
    "Fix React hooks can only be called inside a function component error. Covers hooks in class components, conditional hooks, hooks in callbacks, and custom hook rules.",
  keywords:
    "react hooks can only be called inside function component fix 2026, react invalid hook call, react hooks rules violation fix, hooks not inside component",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-hooks-only-in-function-component",
  },
  openGraph: {
    title:
      "React Hooks Can Only Be Called Inside Function Component — Fixed [2026]",
    description:
      "Fix React invalid hook call — rules of hooks, class components, conditional hooks.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-hooks-only-in-function-component",
  },
};

const TOC = [
  { label: "The Rules of Hooks", href: "#rules" },
  { label: "Fix 1 — Hooks in class components", href: "#fix-1" },
  { label: "Fix 2 — Hooks inside conditions or loops", href: "#fix-2" },
  {
    label: "Fix 3 — Hooks inside callbacks and event handlers",
    href: "#fix-3",
  },
  { label: "Fix 4 — Duplicate React versions", href: "#fix-4" },
  { label: "Fix 5 — Hook called in non-component function", href: "#fix-5" },
  { label: "Fix 6 — Custom hook name must start with 'use'", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why can React hooks only be called inside function components?",
    a: "Hooks depend on the order they are called to maintain state between renders. React ties each hook call to a specific slot in the component's internal state array. If hooks are called in a different order (e.g., inside a condition), the slots get misaligned and React cannot track state correctly.",
  },
  {
    q: "Can I use hooks in class components?",
    a: "No. Hooks are only for function components. For class components, use lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) and this.state / this.setState. To use hooks, convert the class to a function component.",
  },
  {
    q: "Can I call a hook inside an if statement?",
    a: "No. Hooks must always be called in the same order on every render. Use conditions inside the hook, not around it: useEffect(() => { if (condition) { doSomething() } }, [condition])",
  },
  {
    q: "Duplicate React instances causing hook error — how to fix?",
    a: "Run: npm ls react in your project. If you see react listed more than once, you have duplicate versions. Fix with: npm dedupe. For monorepos or linked packages, add react to peerDependencies and use npm link or configure your bundler to resolve to one React version.",
  },
  {
    q: "What is a custom hook and how do I create one?",
    a: "A custom hook is a regular JavaScript function that starts with 'use' and calls other hooks inside it. Example: function useLocalStorage(key, initialValue) { const [value, setValue] = useState(() => localStorage.getItem(key) ?? initialValue); return [value, setValue]; }",
  },
  {
    q: "Hook called in a helper function — how to fix?",
    a: "Move the hook call to the component level, then pass the value to the helper. Or rename the helper to start with 'use' and make it a proper custom hook. Hooks cannot be called in regular (non-hook) functions.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "React Hooks Can Only Be Called Inside Function Component — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-hooks-only-in-function-component",
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
            tags={["React", "Error Fix"]}
            title={"React Hooks Can Only Be Called Inside Function Component"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: Invalid hook call · hooks in class components · conditional hooks"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18 · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Two Rules of Hooks"}
            </p>
            <div className="space-y-2 mt-2">
              <p className="text-sm text-green-800 font-semibold">
                {
                  "1. Only call hooks at the top level of a function component — never in conditions, loops, or nested functions."
                }
              </p>
              <p className="text-sm text-green-800 font-semibold">
                {
                  "2. Only call hooks inside React function components or custom hooks (functions starting with 'use')."
                }
              </p>
            </div>
          </div>

          <TOCBlock items={TOC} />

          <SH id="rules">{"The Rules of Hooks"}</SH>
          <ErrorBlock>{`Invalid hook call. Hooks can only be called inside of the body of a function component.
This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app`}</ErrorBlock>
          <P>
            {
              "React's reconciliation depends on hooks being called in the same order every render. React uses a linked list internally — hook call 1 maps to slot 1, hook call 2 to slot 2, etc. If the order changes (via conditionals), the slots get shuffled and React loses track of state."
            }
          </P>

          <FixCard
            number="1"
            title="Hooks in Class Components"
            time="3 min"
            tag="Convert class to function component"
          >
            <CodeBlock title="UserProfile.jsx">{`// ❌ WRONG — hooks cannot be used in class components
class UserProfile extends React.Component {
  render() {
    const [user, setUser] = useState(null)  // Error!
    return <div>{user?.name}</div>
  }
}

// ✅ CORRECT — convert to function component
function UserProfile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser().then(setUser)
  }, [])

  return <div>{user?.name}</div>
}

// ✅ If you must keep a class — use a function component wrapper
function UserProfileWithHooks(props) {
  const theme = useTheme()   // hook in function component
  return <UserProfileClass {...props} theme={theme} />  // pass to class
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Hooks Inside Conditions or Loops"
            time="2 min"
            tag="Conditional hook call breaks hook ordering"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — hook inside if block
function Component({ isLoggedIn }) {
  if (isLoggedIn) {
    const [profile, setProfile] = useState(null)  // breaks order!
  }
}

// ✅ CORRECT — hook at top level, condition inside
function Component({ isLoggedIn }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (!isLoggedIn) return   // condition INSIDE the hook
    fetchProfile().then(setProfile)
  }, [isLoggedIn])

  if (!isLoggedIn) return null
  return <div>{profile?.name}</div>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Hooks Inside Callbacks and Event Handlers"
            time="2 min"
            tag="Hook called inside a function"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — hook inside an event handler
function SearchBar() {
  function handleSearch() {
    const [results, setResults] = useState([])   // Error!
  }
}

// ✅ CORRECT — hook at component top level
function SearchBar() {
  const [results, setResults] = useState([])  // at top level

  function handleSearch(query) {
    fetchResults(query).then(setResults)  // use the state here
  }

  return (
    <div>
      <input onChange={e => handleSearch(e.target.value)} />
      {results.map(r => <Result key={r.id} result={r} />)}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Duplicate React Versions"
            time="3 min"
            tag="Two copies of React in node_modules"
          >
            <P>
              {
                "If your code is correct but you still get this error, you may have two copies of React installed. This happens with monorepos or when a local package has its own React dependency."
              }
            </P>
            <CodeBlock title="terminal">{`# Check for duplicate React
npm ls react
# If you see react listed multiple times → duplicate

# Fix 1 — deduplicate
npm dedupe

# Fix 2 — for linked local packages, resolve to one React
# webpack.config.js
resolve: {
  alias: { react: path.resolve('./node_modules/react') }
}

# Fix 3 — vite.config.js
resolve: {
  dedupe: ['react', 'react-dom'],
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Hook Called in a Non-Component Function"
            time="2 min"
            tag="Regular utility function calling a hook"
          >
            <CodeBlock title="utils/helpers.js">{`// ❌ WRONG — hook in a regular function
function formatUserData(userId) {
  const user = useUser(userId)  // Error! Not a component or custom hook
  return user.name.toUpperCase()
}

// ✅ CORRECT — call hook in component, pass value to helper
function formatUserData(user) {  // receives value, no hook
  return user.name.toUpperCase()
}
function UserBadge({ userId }) {
  const user = useUser(userId)  // hook in component
  return <span>{formatUserData(user)}</span>
}

// ✅ ALSO CORRECT — make it a proper custom hook
function useFormattedUser(userId) {  // starts with 'use' → custom hook
  const user = useUser(userId)
  return user?.name.toUpperCase() ?? ''
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Custom Hook Name Must Start With 'use'"
            time="1 min"
            tag="React cannot validate hook rules without the prefix"
          >
            <CodeBlock title="hooks/userData.js">{`// ❌ WRONG — doesn't start with 'use', React can't validate
function getUser(id) {
  const [user, setUser] = useState(null)   // will error in strict mode
  useEffect(() => { fetchUser(id).then(setUser) }, [id])
  return user
}

// ✅ CORRECT — starts with 'use' → React treats it as a custom hook
function useUser(id) {
  const [user, setUser] = useState(null)
  useEffect(() => { fetchUser(id).then(setUser) }, [id])
  return user
}

// Usage in component
function Profile({ userId }) {
  const user = useUser(userId)  // ← valid custom hook call
  return <div>{user?.name}</div>
}`}</CodeBlock>
            <TipBox>
              {
                "The 'use' prefix is not just a convention — React's linter plugin uses it to identify custom hooks and validate that they follow the Rules of Hooks. Always prefix custom hooks with 'use'."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always call hooks at the top of the function component body — before any returns",
              "Never call hooks inside if/else, for/while loops, or nested functions",
              "Custom hooks must start with 'use' so React can validate hook rules",
              "Install eslint-plugin-react-hooks — it catches hook violations at development time",
              "Convert class components to function components to enable hooks",
              "Run npm dedupe if you see multiple React versions in npm ls react",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: Too many re-renders React",
                href: "react-too-many-re-renders",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: useRef not working",
                href: "react-useref-not-working",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React context not updating",
                href: "react-context-not-updating",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade React Apps"}
            desc={
              "Softplix builds full-stack React and Next.js applications. Need help migrating class components or refactoring hooks? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
