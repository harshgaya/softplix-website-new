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
  title:
    "Node.js HTTPS SSL Certificate Error — UNABLE_TO_VERIFY_LEAF_SIGNATURE Fixed [2026]",
  description:
    "Fix Node.js HTTPS SSL certificate errors — UNABLE_TO_VERIFY_LEAF_SIGNATURE, SELF_SIGNED_CERT, expired certificate. Covers https module, axios, fetch, and mkcert for local dev HTTPS.",
  keywords:
    "nodejs HTTPS SSL certificate error, UNABLE_TO_VERIFY_LEAF_SIGNATURE nodejs, nodejs self signed certificate error 2026, nodejs rejectUnauthorized false, mkcert local HTTPS nodejs",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-https-ssl-certificate-error",
  },
  openGraph: {
    title: "Node.js HTTPS SSL Certificate Error — Fixed [2026]",
    description:
      "Fix Node.js SSL errors — rejectUnauthorized, custom CA, mkcert, axios, fetch.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-https-ssl-certificate-error",
  },
};

const TOC = [
  { label: "Common Node.js SSL certificate errors", href: "#errors" },
  { label: "Fix 1 — Use mkcert for trusted local HTTPS (dev)", href: "#fix-1" },
  {
    label:
      "Fix 2 — Disable verification for dev with rejectUnauthorized: false",
    href: "#fix-2",
  },
  { label: "Fix 3 — Trust a custom CA certificate", href: "#fix-3" },
  { label: "Fix 4 — Fix SSL errors in axios and node-fetch", href: "#fix-4" },
  {
    label: "Fix 5 — Fix expired or misconfigured production certificates",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does UNABLE_TO_VERIFY_LEAF_SIGNATURE mean in Node.js?",
    a: "This error means Node.js cannot verify the SSL certificate chain. The server's certificate is signed by an intermediate CA that Node.js doesn't have in its trust store. This often happens with older certificates or corporate proxies that use certificate inspection. Fix by providing the full certificate chain or adding the CA to NODE_EXTRA_CA_CERTS.",
  },
  {
    q: "Is it safe to set NODE_TLS_REJECT_UNAUTHORIZED=0?",
    a: "No — never in production. Setting NODE_TLS_REJECT_UNAUTHORIZED=0 disables all SSL verification for the entire Node.js process, making every HTTPS request vulnerable to man-in-the-middle attacks. It is acceptable only in local development scripts against known local servers. Always use proper certificates in production.",
  },
  {
    q: "What is mkcert and how does it solve local HTTPS?",
    a: "mkcert is a tool that creates a locally trusted certificate authority (CA) and issues certificates signed by it. Unlike self-signed certificates, mkcert certificates are trusted by your OS and browsers because mkcert installs its CA into the system trust store. This gives you real HTTPS locally without certificate errors.",
  },
  {
    q: "How do I fix SSL errors in axios with Node.js?",
    a: "Pass a custom httpsAgent with rejectUnauthorized: false (dev only) or with a custom CA certificate. Use: const agent = new https.Agent({ rejectUnauthorized: false }); axios.get(url, { httpsAgent: agent }). For production, provide the CA certificate instead of disabling verification.",
  },
  {
    q: "Why does my Node.js app work in a browser but fail with SSL error?",
    a: "Browsers have a larger built-in trust store and often automatically fetch intermediate certificates. Node.js uses OpenSSL with a more limited trust store. If a certificate chain is incomplete (missing intermediate CA), Node.js fails even though browsers succeed. Fix by ensuring your server sends the full certificate chain including intermediates.",
  },
  {
    q: "How do I add extra CA certificates to Node.js?",
    a: "Set the NODE_EXTRA_CA_CERTS environment variable to the path of a PEM file containing your CA certificate(s). Node.js will add these to its trust store in addition to the built-in ones. This is the production-safe way to trust a corporate or custom CA without modifying the system trust store.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js HTTPS SSL Certificate Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-https-ssl-certificate-error",
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
            tags={["Node.js", "HTTPS", "Error Fix"]}
            title={"Node.js HTTPS SSL Certificate Error"}
            subtitle={"— UNABLE_TO_VERIFY Fixed [2026]"}
            sub={
              "Also covers: mkcert for local HTTPS · rejectUnauthorized · custom CA · axios httpsAgent · expired certs"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Node.js 18/20/22 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common SSL Errors"}
            </p>
            <ErrorBlock>{`Error: unable to verify the first certificate
  code: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'

Error: self-signed certificate
  code: 'DEPTH_ZERO_SELF_SIGNED_CERT'

Error: certificate has expired
  code: 'CERT_HAS_EXPIRED'`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="errors">{"Common Node.js SSL Certificate Errors"}</SH>
          <P>
            {
              "Node.js validates SSL certificates using OpenSSL. The three most common errors are: an incomplete certificate chain (UNABLE_TO_VERIFY_LEAF_SIGNATURE), a self-signed certificate not trusted by Node's CA store (DEPTH_ZERO_SELF_SIGNED_CERT), and an expired certificate (CERT_HAS_EXPIRED). The correct fix depends on the context — development vs production."
            }
          </P>

          <FixCard
            number="1"
            title="Use mkcert for Trusted Local HTTPS (Dev)"
            time="5 min"
            tag="Self-signed cert for local development — trusted by OS and Node.js"
          >
            <CodeBlock title="mkcert — generate trusted local certificates">{`# Install mkcert
# macOS:
brew install mkcert
# Windows (Chocolatey):
choco install mkcert
# Linux:
sudo apt install libnss3-tools
curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
chmod +x mkcert-v*-linux-amd64
sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# 1. Install the local CA into your system trust store
mkcert -install

# 2. Generate certificate for localhost
mkcert localhost 127.0.0.1 ::1

# Creates: localhost+2.pem and localhost+2-key.pem

# 3. Use in Node.js HTTPS server:
import https from "https"
import fs from "fs"
import express from "express"

const app = express()

const server = https.createServer({
  key: fs.readFileSync("localhost+2-key.pem"),
  cert: fs.readFileSync("localhost+2.pem"),
}, app)

server.listen(3000, () => console.log("HTTPS server running on port 3000"))`}</CodeBlock>
            <TipBox>
              {
                "mkcert certificates are trusted by Chrome, Firefox, Safari, and Node.js — no more certificate warnings or SSL errors in local development."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Disable Verification for Dev with rejectUnauthorized: false"
            time="2 min"
            tag="Quick local dev fix — never use in production"
          >
            <WarnBox>
              {
                "Never set rejectUnauthorized: false or NODE_TLS_REJECT_UNAUTHORIZED=0 in production. It disables all TLS verification, making your app vulnerable to MITM attacks."
              }
            </WarnBox>
            <CodeBlock title="rejectUnauthorized: false — dev only">{`import https from "https"

// ❌ NEVER in production — dev only
const agent = new https.Agent({ rejectUnauthorized: false })

// fetch with custom agent (Node 18+ undici-based fetch doesn't support agent directly)
// Use node-fetch or axios instead:

// axios:
import axios from "axios"
const response = await axios.get("https://localhost:3001/api", {
  httpsAgent: new https.Agent({ rejectUnauthorized: false })  // dev only
})

// Environment variable — disables for entire process (less targeted):
// NODE_TLS_REJECT_UNAUTHORIZED=0 node script.js  ← dev scripts only, never production

// Better — use per-request agent only for specific calls:
const devAgent = process.env.NODE_ENV === "development"
  ? new https.Agent({ rejectUnauthorized: false })
  : undefined`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Trust a Custom CA Certificate"
            time="3 min"
            tag="Corporate proxy or internal CA — add to Node.js trust store"
          >
            <CodeBlock title="NODE_EXTRA_CA_CERTS — add custom CA">{`# Export your corporate CA certificate as PEM
# (from your corporate IT team or openssl)

# Set env variable to point to the CA cert file
NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem node server.js

# In package.json:
{
  "scripts": {
    "dev": "NODE_EXTRA_CA_CERTS=./certs/corporate-ca.pem nodemon src/index.ts"
  }
}

# In code — add CA programmatically for specific requests:
import https from "https"
import fs from "fs"

const ca = fs.readFileSync("./certs/corporate-ca.pem")

const agent = new https.Agent({ ca })  // trust this CA only for this agent

const response = await fetch("https://internal-api.company.com/data", {
  // Node 22+ fetch supports dispatcher:
  // dispatcher: new undici.Agent({ connect: { ca } })
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix SSL Errors in axios and node-fetch"
            time="3 min"
            tag="HTTP client making HTTPS requests to APIs with SSL issues"
          >
            <CodeBlock title="axios and node-fetch SSL configuration">{`import https from "https"
import axios from "axios"
import fs from "fs"

// --- axios ---

// Dev — disable verification (dev only)
const devClient = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

// Production — trust specific CA
const prodClient = axios.create({
  httpsAgent: new https.Agent({
    ca: fs.readFileSync("./certs/chain.pem"),  // full certificate chain
    rejectUnauthorized: true,
  })
})

// --- node-fetch ---
import fetch from "node-fetch"

const response = await fetch("https://api.example.com", {
  agent: new https.Agent({
    rejectUnauthorized: false  // dev only
  })
})

// --- Native Node.js https module ---
import https from "https"

https.get({
  hostname: "api.example.com",
  path: "/data",
  rejectUnauthorized: false,  // dev only
}, (res) => {
  // handle response
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Fix Expired or Misconfigured Production Certificates"
            time="3 min"
            tag="CERT_HAS_EXPIRED or incomplete chain in production"
          >
            <CodeBlock title="Diagnose and fix production SSL issues">{`# Check certificate expiry and chain:
openssl s_client -connect api.example.com:443 -servername api.example.com

# Check certificate details:
openssl s_client -connect api.example.com:443 2>/dev/null | openssl x509 -noout -dates
# notBefore: ...
# notAfter: ...  ← check this date

# Check full chain:
openssl s_client -connect api.example.com:443 -showcerts 2>/dev/null | grep -E "BEGIN|END"

# If UNABLE_TO_VERIFY_LEAF_SIGNATURE — intermediate CA missing from server chain
# Fix: configure your web server to send the full chain (cert + intermediates)

# Nginx — include full chain:
# ssl_certificate /etc/ssl/fullchain.pem;   ← full chain (cert + intermediates)
# ssl_certificate_key /etc/ssl/privkey.pem;

# Node.js HTTPS server — include full chain:
https.createServer({
  key: fs.readFileSync("privkey.pem"),
  cert: fs.readFileSync("fullchain.pem"),   // ← fullchain not just cert.pem
}, app)

# Auto-renew with certbot:
# certbot renew --quiet
# Add to cron: 0 0 1 * * certbot renew --quiet && systemctl reload nginx`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use mkcert for local HTTPS development — trusted by OS, browsers, and Node.js with no certificate warnings",
              "Never use rejectUnauthorized: false or NODE_TLS_REJECT_UNAUTHORIZED=0 in production code",
              "Use NODE_EXTRA_CA_CERTS for corporate or internal CAs — add the CA cert without disabling verification",
              "In production, always use fullchain.pem (not just cert.pem) — includes intermediate CA certificates",
              "Set up auto-renewal with certbot and a cron job — CERT_HAS_EXPIRED is always avoidable",
              "When testing HTTPS in CI, use mkcert or generate a self-signed cert with NODE_EXTRA_CA_CERTS pointing to it",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Node.js",
                title: "Fix: Nodemon not restarting",
                href: "/category/node-js/error/nodemon-not-restarting",
                time: "5 min read",
              },
              {
                tag: "Node.js",
                title: "Fix: Node.js child process error",
                href: "/category/node-js/error/nodejs-child-process-error",
                time: "6 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase storage upload error",
                href: "/category/supabase/error/supabase-storage-upload-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Secure Node.js APIs"}
            desc={
              "Softplix engineers configure Node.js HTTPS, TLS certificates, and secure API architecture for production deployments. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
