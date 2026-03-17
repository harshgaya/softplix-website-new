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
  FaChevronRight,
  FaCircleXmark,
} from "react-icons/fa6";

export const metadata = {
  title: "Error: listen EACCES permission denied — Fixed [Complete Guide 2026]",
  description:
    "Fix Error listen EACCES permission denied in Node.js. Run on privileged ports below 1024 without sudo, use nginx reverse proxy, configure authbind and setcap on Linux.",
  keywords:
    "error listen eacces permission denied, eacces permission denied nodejs, node port 80 permission denied, listen eacces fix 2026, nodejs run on port 80 without sudo",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-listen-eacces-permission-denied",
  },
  openGraph: {
    title:
      "Error: listen EACCES permission denied — Fixed [Complete Guide 2026]",
    description:
      "Fix Error listen EACCES permission denied — run Node.js on any port without sudo.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-listen-eacces-permission-denied",
  },
};

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
        <span className="text-xs font-mono text-red-300">
          {"Terminal Error"}
        </span>
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

function CheckList({ items }) {
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

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Prose({ children }) {
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

const TOC = [
  { label: "What causes EACCES permission denied?", href: "#what-it-means" },
  { label: "Fix 1 — Use a port above 1024", href: "#fix-1" },
  { label: "Fix 2 — Use nginx as reverse proxy (production)", href: "#fix-2" },
  { label: "Fix 3 — authbind on Linux", href: "#fix-3" },
  { label: "Fix 4 — setcap Linux capability", href: "#fix-4" },
  { label: "Fix 5 — iptables port redirect", href: "#fix-5" },
  { label: "Fix 6 — Fix npm cache permission errors", href: "#fix-6" },
  { label: "OS-specific notes", href: "#os-notes" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Node.js say permission denied on port 80?",
    a: "Port 80 is a privileged port on Linux and macOS. Only processes running as root can bind to ports below 1024. Use port 3000+ in development and nginx as reverse proxy in production.",
  },
  {
    q: "How do I run Node.js on port 80 without sudo?",
    a: "Best approach: run Node.js on port 3000 and use nginx as a reverse proxy that listens on port 80. Alternatively, use setcap: sudo setcap 'cap_net_bind_service=+ep' $(which node)",
  },
  {
    q: "EACCES error on port 3000 — why is a non-privileged port denied?",
    a: "If you get EACCES on port 3000, it is usually a file permission error with npm's cache or node_modules. Fix with: sudo chown -R $(whoami) ~/.npm",
  },
  {
    q: "How to run Node.js on port 80 in production?",
    a: "Best practice: run Node.js on port 3000 and configure nginx to proxy port 80 to it. This is more secure, enables SSL termination, and lets you run multiple Node apps on one server.",
  },
  {
    q: "EACCES permission denied in Docker?",
    a: "Inside Docker containers, you typically have root privileges and can bind to any port. If getting EACCES in Docker, check your Docker user configuration or use a port above 1024.",
  },
  {
    q: "How to fix npm EACCES permission denied on macOS?",
    a: "Run: sudo chown -R $(whoami) ~/.npm to fix npm cache permissions. For global packages: sudo chown -R $(whoami) $(npm config get prefix)/lib/node_modules. Better long-term: use nvm to avoid these issues entirely.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Error: listen EACCES permission denied — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-listen-eacces-permission-denied",
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

const RELATED = [
  {
    tag: "Node.js",
    title: "Fix: Node.js port already in use",
    href: "nodejs-port-already-in-use",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: EADDRINUSE address already in use",
    href: "error-listen-eaddrinuse-address-already-in-use",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "6 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"EACCES Permission Denied"}</span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Linux", "Error Fix"].map((t) => (
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
              {"Error: listen EACCES: permission denied"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"5 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · Linux · macOS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "In development — use a port above 1024. Ports below 1024 require root on Linux/macOS:"
              }
            </p>
            <CodeBlock title="server.js">{`const PORT = process.env.PORT || 3000   // use 3000, not 80
app.listen(PORT)`}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "In production — use nginx as a reverse proxy to port 80. See Fix 2."
              }
            </p>
          </div>

          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map(({ label, href }, i) => (
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

          <SectionHeading id="what-it-means">
            {"What Causes EACCES Permission Denied?"}
          </SectionHeading>

          <ErrorBlock>{`Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (net.js:1334:21)
    at listenInCluster (net.js:1389:12)
    at Server.listen (net.js:1476:7)`}</ErrorBlock>

          <Prose>
            {
              "EACCES is an operating system permission error. There are two distinct scenarios where you will see it in Node.js:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Scenario"}
                  </th>
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
                    "Port below 1024 (80, 443, 8080)",
                    "Privileged ports need root on Linux/macOS",
                    "Fix 1, 2, 3, 4, or 5",
                  ],
                  [
                    "npm cache or node_modules error",
                    "Previous sudo npm install created root-owned files",
                    "Fix 6",
                  ],
                ].map(([s, c, f]) => (
                  <tr key={s} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                      {s}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{c}</td>
                    <td className="px-5 py-3 font-semibold text-indigo-600 text-sm">
                      {f}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose>
            {"On Linux and macOS, ports 1–1023 are called "}
            <strong>{"privileged ports"}</strong>
            {
              ". Only processes running as root (uid 0) can bind to them. This includes port 80 (HTTP) and 443 (HTTPS). Node.js applications running as a regular user cannot use these ports without additional configuration."
            }
          </Prose>

          <TipBox>
            {
              "Never use sudo node server.js as a solution. Running Node as root is a significant security risk — if your app is compromised, the attacker gets root access. Use one of the proper fixes below instead."
            }
          </TipBox>

          <FixCard
            number="1"
            title="Use a Port Above 1024"
            time="30 sec"
            tag="Development — simplest fix"
          >
            <Prose>
              {
                "In development, there is no reason to use port 80. Use port 3000, 8000, or 8080 — no root required."
              }
            </Prose>
            <CodeBlock title="server.js">{`// Development — no root needed
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(\`Server on http://localhost:\${PORT}\`)
})`}</CodeBlock>
            <Prose>
              {"Access your app at "}
              <IC>{"http://localhost:3000"}</IC>
              {
                " during development. Users do not care what port your dev server runs on — only production users need port 80."
              }
            </Prose>
          </FixCard>

          <FixCard
            number="2"
            title="nginx Reverse Proxy (Production)"
            time="15 min"
            tag="Best practice for production — recommended"
          >
            <Prose>
              {
                "The industry-standard solution for production. Run Node.js on port 3000 and use nginx to proxy public traffic from port 80 (and 443 for HTTPS) to it. This is more secure, enables SSL, and lets you run multiple Node apps on one server."
              }
            </Prose>

            <SubHeading>{"Install nginx"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Ubuntu / Debian\nsudo apt update && sudo apt install nginx\n\n# macOS\nbrew install nginx"
              }
            </CodeBlock>

            <SubHeading>{"Configure nginx reverse proxy"}</SubHeading>
            <CodeBlock title="/etc/nginx/sites-available/myapp">{`server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}`}</CodeBlock>

            <CodeBlock title="terminal">
              {
                "# Enable the config\nsudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/\n\n# Test nginx config\nsudo nginx -t\n\n# Reload nginx\nsudo systemctl reload nginx\n\n# Your Node app on port 3000 is now accessible at port 80"
              }
            </CodeBlock>

            <TipBox>
              {
                "Add HTTPS with Let's Encrypt: sudo apt install certbot python3-certbot-nginx && sudo certbot --nginx -d yourdomain.com. This gives you free SSL in 2 minutes."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="authbind on Linux"
            time="5 min"
            tag="Linux — run on port 80 without sudo or nginx"
          >
            <Prose>
              {
                "authbind is a Linux tool that grants a specific user permission to bind to specific privileged ports without giving them full root access."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                '# Install authbind\nsudo apt-get install authbind\n\n# Grant your user access to port 80\nsudo touch /etc/authbind/byport/80\nsudo chmod 777 /etc/authbind/byport/80\n\n# Run Node with authbind\nauthbind --deep node server.js\n\n# Or in package.json\n# "start": "authbind --deep node server.js"'
              }
            </CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="setcap Linux Capability"
            time="3 min"
            tag="Linux — grant Node permanent binding capability"
          >
            <Prose>
              {
                "Linux capabilities let you grant specific elevated privileges to an executable without making it fully root. "
              }
              <IC>{"cap_net_bind_service"}</IC>
              {" allows binding to privileged ports."}
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Find where node is installed\nwhich node\n\n# Grant the capability\nsudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/node\n\n# Now node can bind to port 80 without sudo\nnode server.js\n\n# Verify the capability was set\ngetcap /usr/local/bin/node"
              }
            </CodeBlock>
            <WarnBox>
              {
                "This grants ALL users on the machine the ability to run Node on privileged ports. On shared servers, use authbind instead which is more granular."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="iptables Port Redirect"
            time="5 min"
            tag="Linux — redirect port 80 traffic to 3000"
          >
            <Prose>
              {
                "Use iptables to redirect incoming traffic on port 80 to port 3000 at the network level. Node.js still listens on 3000 — the kernel redirects the traffic transparently."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Redirect port 80 to 3000\nsudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000\n\n# Make permanent across reboots\nsudo apt-get install iptables-persistent\nsudo netfilter-persistent save\n\n# Remove the rule if needed\nsudo iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000"
              }
            </CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Fix npm Cache Permission Errors"
            time="3 min"
            tag="EACCES on npm install — not port related"
          >
            <Prose>
              {"If you are getting EACCES on "}
              <IC>{"npm install"}</IC>
              {
                " rather than on starting a server, it is a file permission error caused by a previous "
              }
              <IC>{"sudo npm install"}</IC>
              {" which created root-owned files."}
            </Prose>

            <SubHeading>{"Fix npm cache ownership"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Fix npm cache\nsudo chown -R $(whoami) ~/.npm\n\n# Fix global node_modules\nsudo chown -R $(whoami) $(npm config get prefix)/lib/node_modules\nsudo chown -R $(whoami) $(npm config get prefix)/bin\nsudo chown -R $(whoami) $(npm config get prefix)/share"
              }
            </CodeBlock>

            <SubHeading>{"Fix project node_modules"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Fix current project\nsudo chown -R $(whoami) node_modules\n\n# Then reinstall cleanly\nrm -rf node_modules package-lock.json\nnpm install"
              }
            </CodeBlock>

            <WarnBox>
              {
                "Never use sudo npm install for project dependencies. It creates root-owned files that cause EACCES on every future non-sudo npm install. If npm demands sudo, the underlying permission issue is what to fix."
              }
            </WarnBox>
          </FixCard>

          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "macOS enforces the same privileged port rules as Linux for ports below 1024. In development, always use port 3000+. On macOS Monterey and later, port 5000 is used by AirPlay Receiver — if your app uses port 5000 you will hit EACCES. Go to System Settings → General → AirDrop & Handoff and disable AirPlay Receiver."
            }
          </Prose>

          <SubHeading>{"Linux / Ubuntu"}</SubHeading>
          <Prose>
            {
              "For production Linux servers, the nginx reverse proxy approach (Fix 2) is the correct answer in 99% of cases. It also enables HTTPS via Let's Encrypt, serves static files efficiently, and handles load balancing if you ever scale to multiple Node processes."
            }
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "Windows does not enforce the 1024 port restriction in the same way. On Windows, EACCES usually means another process owns the port or you are running from a directory your user cannot access. Running as Administrator typically resolves it."
            }
          </Prose>

          <SectionHeading id="prevention">
            {"How to Prevent EACCES Errors"}
          </SectionHeading>
          <CheckList
            items={[
              "Always use port 3000+ in development — never port 80 or 443",
              "Use nginx or a load balancer as a reverse proxy in production",
              "Never run npm install with sudo — use nvm to avoid permission issues entirely",
              "Use process.env.PORT for flexible port configuration",
              "On macOS: disable AirPlay Receiver if you use port 5000",
              "In production: use PM2 to manage Node.js processes instead of running as root",
            ]}
          />

          <SectionHeading id="faq">
            {"Frequently Asked Questions"}
          </SectionHeading>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
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

          <aside className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {"Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map(({ tag, title, href, time }) => (
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

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Node.js applications for startups and enterprises. Need help with server configuration or production deployment? We can help."
              }
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
            >
              {"Talk to an Engineer"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
