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
  title: "Vite HMR Not Working — Hot Module Replacement Fixed [2026]",
  description:
    "Fix Vite HMR (Hot Module Replacement) not working — full page reloads instead of fast updates. Covers file watcher limits, WSL2 polling, React Fast Refresh, and vite.config.ts HMR settings.",
  keywords:
    "vite HMR not working, vite hot module replacement not updating, vite full page reload instead of HMR 2026, vite WSL2 HMR polling, vite react fast refresh not working",
  alternates: {
    canonical: "https://softplix.com/category/vite/error/vite-hmr-not-working",
  },
  openGraph: {
    title: "Vite HMR Not Working — Fixed [2026]",
    description:
      "Fix Vite HMR — file watchers, WSL2 polling, React Fast Refresh, vite.config.ts settings.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-hmr-not-working",
  },
};

const TOC = [
  { label: "Why Vite HMR stops working", href: "#why" },
  {
    label: "Fix 1 — Increase OS file watcher limit (Linux/WSL2)",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Enable polling for WSL2 and network drives",
    href: "#fix-2",
  },
  { label: "Fix 3 — Fix React Fast Refresh not working", href: "#fix-3" },
  { label: "Fix 4 — Configure HMR host and port explicitly", href: "#fix-4" },
  {
    label: "Fix 5 — Identify modules that cause full-page reloads",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Vite do a full page reload instead of HMR?",
    a: "A full page reload happens when Vite cannot isolate the change to a hot-updatable module. This occurs when: a module has no HMR boundary (like a file that exports constants used everywhere), the React Fast Refresh plugin is missing, or the changed module is in the module graph root. Check the Vite console — it logs 'page reloaded' with a reason.",
  },
  {
    q: "Why does Vite HMR not work in WSL2?",
    a: "WSL2 runs Linux inside a virtual machine, and the Windows filesystem is mounted via a network share (9P protocol). The Linux inotify file watcher doesn't receive events for files on the Windows drive. Fix this by enabling polling in vite.config.ts: server: { watch: { usePolling: true } }.",
  },
  {
    q: "What is React Fast Refresh and how does it differ from HMR?",
    a: "React Fast Refresh is a React-specific HMR implementation that preserves component state during updates. Standard HMR replaces the module but resets state. Fast Refresh is provided by @vitejs/plugin-react and requires components to follow specific rules: only export React components from the file, don't export non-component values alongside components.",
  },
  {
    q: "How do I check if Vite HMR is connected?",
    a: "Open the browser console — Vite logs '[vite] connected.' on startup. If you see '[vite] server connection lost' or no Vite logs at all, HMR is disconnected. Also check the Network tab for a WebSocket connection to your Vite dev server — HMR uses WebSocket for communication.",
  },
  {
    q: "Can I disable HMR in Vite?",
    a: "Yes — set server: { hmr: false } in vite.config.ts. This is useful for debugging full-page reload behaviour. You can also set hmr: { overlay: false } to keep HMR enabled but disable the error overlay.",
  },
  {
    q: "Why does editing a CSS file cause a full page reload in Vite?",
    a: "Vite normally handles CSS changes with HMR without a page reload. If CSS changes cause full reloads, the CSS file is likely imported in a module that has no HMR boundary. Try importing global CSS in main.tsx and component-level CSS as CSS Modules. Also check for PostCSS config errors that may break the CSS transform pipeline.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite HMR Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-hmr-not-working",
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
            tags={["Vite", "HMR", "Error Fix"]}
            title={"Vite HMR Not Working"}
            subtitle={"— Hot Module Replacement Fixed [2026]"}
            sub={
              "Also covers: file watcher limits · WSL2 polling · React Fast Refresh · HMR host config · full page reload causes"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Vite 5/6 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Symptoms"}
            </p>
            <ErrorBlock>{`[vite] page reloaded          ← full reload instead of HMR update
[vite] server connection lost ← WebSocket dropped
# OR: edits don't update browser at all
# OR: component state resets on every save (Fast Refresh not working)`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest diagnostics"}
            </p>
            <CodeBlock title="Check these in order">{`1. Browser console: look for '[vite] connected.' on load
2. Linux/WSL2: check file watcher limit → sudo sysctl fs.inotify.max_user_watches
3. WSL2 editing Windows files → enable usePolling in vite.config.ts
4. React: confirm @vitejs/plugin-react is in vite.config.ts plugins`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Vite HMR Stops Working"}</SH>
          <P>
            {
              "Vite HMR relies on two things: the OS file watcher detecting file changes, and a WebSocket connection from the browser to the dev server. If either breaks, HMR fails. On Linux and WSL2, the "
            }
            <IC>{"inotify"}</IC>
            {
              " watcher limit is often hit in large projects. In Docker and WSL2 with Windows files, polling is required instead."
            }
          </P>

          <FixCard
            number="1"
            title="Increase OS File Watcher Limit (Linux/WSL2)"
            time="2 min"
            tag="ENOSPC: System limit for number of file watchers reached"
          >
            <ErrorBlock>{`Error: ENOSPC: System limit for number of file watchers reached`}</ErrorBlock>
            <CodeBlock title="Increase inotify limit — Linux and WSL2">{`# Check current limit
cat /proc/sys/fs/inotify/max_user_watches

# Temporary fix (resets on reboot)
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl -p

# Permanent fix — add to /etc/sysctl.conf
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# For WSL2 — add to /etc/sysctl.d/99-vite.conf
sudo sh -c 'echo "fs.inotify.max_user_watches=524288" > /etc/sysctl.d/99-vite.conf'`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Enable Polling for WSL2 and Network Drives"
            time="2 min"
            tag="WSL2 editing Windows files — inotify doesn't receive events"
          >
            <CodeBlock title="vite.config.ts — enable polling">{`import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // ✅ Use polling when inotify doesn't work (WSL2, Docker, NFS, network drives)
      usePolling: true,
      interval: 100,       // poll every 100ms — lower = faster but more CPU
    },
  },
})

// Only enable polling when needed — it uses more CPU than inotify.
// Set via env variable to avoid committing it for teammates on macOS/Windows:
export default defineConfig({
  server: {
    watch: {
      usePolling: process.env.VITE_USE_POLLING === "true",
    },
  },
})
// Then in .env.local (gitignored): VITE_USE_POLLING=true`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix React Fast Refresh Not Working"
            time="3 min"
            tag="State resets on every save — Fast Refresh not activating"
          >
            <P>
              {
                "React Fast Refresh only activates when a file exports only React components. Mixing component and non-component exports in the same file disables Fast Refresh for that file."
              }
            </P>
            <CodeBlock title="Fast Refresh rules — what breaks it">{`// vite.config.ts — ensure @vitejs/plugin-react is present
import react from "@vitejs/plugin-react"
export default defineConfig({ plugins: [react()] })

// ❌ Mixing component + non-component export — disables Fast Refresh
// components/Button.tsx:
export const BUTTON_SIZES = ["sm", "md", "lg"] as const   // ← constant — breaks Fast Refresh
export function Button({ size }) { return <button /> }

// ✅ Move constants to a separate file
// constants/button.ts:
export const BUTTON_SIZES = ["sm", "md", "lg"] as const

// components/Button.tsx — only exports the component:
export function Button({ size }) { return <button /> }

// ❌ Anonymous default export — Fast Refresh can't track it
export default () => <div>Hello</div>

// ✅ Named function component as default export
export default function HomePage() { return <div>Hello</div> }`}</CodeBlock>
            <TipBox>
              {
                "The Vite console logs a warning when Fast Refresh is disabled for a file: '(!) Could not Fast Refresh Button.tsx. Export of non-component detected.' Move non-component exports to separate files to re-enable Fast Refresh."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Configure HMR Host and Port Explicitly"
            time="2 min"
            tag="HMR disconnects when accessed via proxy, tunnel, or custom host"
          >
            <CodeBlock title="vite.config.ts — explicit HMR settings">{`export default defineConfig({
  server: {
    host: "0.0.0.0",    // bind to all interfaces (needed for Docker/remote access)
    port: 5173,

    hmr: {
      // Explicitly set HMR WebSocket host and port
      // Needed when Vite is behind a reverse proxy or accessed via tunnel
      host: "localhost",
      port: 5173,
      protocol: "ws",    // or "wss" for HTTPS

      // For ngrok or remote tunnels:
      // host: "your-tunnel-id.ngrok.io",
      // protocol: "wss",
      // clientPort: 443,
    },
  },
})

// For Docker — override via environment:
// VITE_ALLOW_EXTERNAL_ORIGIN=true or configure allowedHosts:
export default defineConfig({
  server: {
    allowedHosts: ["myapp.local", ".ngrok.io"],
  },
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Identify Modules That Cause Full-Page Reloads"
            time="3 min"
            tag="Specific file edits always trigger full reload — find the boundary"
          >
            <P>
              {
                "Vite logs the reason for a full page reload in the browser console and terminal. Use this to identify which modules have no HMR boundary."
              }
            </P>
            <CodeBlock title="Reading Vite HMR logs">{`// Browser console — Vite HMR messages:
// [vite] connected.                                ← WebSocket connected
// [vite] hot updated: /src/components/Button.tsx  ← successful HMR
// [vite] page reloaded                            ← full reload (no HMR boundary)

// Terminal — Vite dev server logs:
// hmr update /src/components/Button.tsx
// hmr invalidate /src/main.tsx  The update boundary is out of date.

// Common causes of full page reload:
// 1. File exports non-React values alongside components
// 2. Module is in the HMR boundary root (e.g. main.tsx imports everything)
// 3. Circular imports break the HMR graph
// 4. CSS-in-JS or runtime style injection without HMR support

// Fix — add explicit HMR accept at the module level if needed:
// (advanced — usually not required)
if (import.meta.hot) {
  import.meta.hot.accept()   // this module handles its own HMR updates
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "On Linux/WSL2, set fs.inotify.max_user_watches=524288 permanently in /etc/sysctl.conf",
              "Use VITE_USE_POLLING=true in .env.local for WSL2 with Windows files — keep it gitignored",
              "Export only React components from each .tsx file — move constants and utils to separate files",
              "Use named function components as default exports — anonymous () => <div> breaks Fast Refresh",
              "Configure server.hmr.host explicitly when running Vite behind a proxy, Docker, or ngrok tunnel",
              "Watch the Vite console for '(!) Could not Fast Refresh' warnings — they tell you exactly which file breaks HMR",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Vite",
                title: "Fix: Vite proxy not working",
                href: "/category/vite/error/vite-proxy-not-working",
                time: "5 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite Tailwind CSS not purging",
                href: "/category/vite/error/vite-tailwind-not-purging",
                time: "5 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite build failed to resolve import",
                href: "/category/vite/error/vite-build-error-failed-to-resolve-import",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build React Apps with Vite"}
            desc={
              "Softplix engineers configure Vite for fast HMR, optimised builds, and production-ready React apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
