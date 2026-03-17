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
  title: "Node.js File Upload Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Node.js file upload errors. Configure multer correctly, handle MIME type validation, fix req.file undefined, set upload size limits, and store files to disk or cloud storage.",
  keywords:
    "nodejs file upload error, multer fix, req.file undefined express, nodejs upload error fix 2026, multer file upload not working",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-file-upload-error",
  },
  openGraph: {
    title: "Node.js File Upload Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Node.js file upload errors — multer, req.file undefined, MIME types, size limits.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-file-upload-error",
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
function EB({ children }) {
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

const TOC = [
  { label: "Common file upload errors", href: "#what" },
  { label: "Fix 1 — Install and configure multer", href: "#fix-1" },
  { label: "Fix 2 — req.file undefined", href: "#fix-2" },
  { label: "Fix 3 — Set file size limits", href: "#fix-3" },
  { label: "Fix 4 — Validate file types (MIME types)", href: "#fix-4" },
  { label: "Fix 5 — Control filenames on disk", href: "#fix-5" },
  { label: "Fix 6 — Upload to AWS S3 / Cloudinary", href: "#fix-6" },
  { label: "Fix 7 — Frontend FormData correctly", href: "#fix-7" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I handle file uploads in Node.js Express?",
    a: "Install multer: npm install multer. Then: const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'), (req, res) => { console.log(req.file); res.json({ path: req.file.path }) }). The field name in upload.single() must match your frontend input name.",
  },
  {
    q: "Why is req.file undefined in Express?",
    a: "Most common causes: 1) The frontend is not using FormData or is setting Content-Type manually (don't), 2) The field name in upload.single('field') doesn't match your form input name, 3) The multer middleware is not applied to the route.",
  },
  {
    q: "How do I limit upload file size in multer?",
    a: "Pass limits: { fileSize: 5 * 1024 * 1024 } to multer: const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } }). Handle the error in your route to send a proper 413 response.",
  },
  {
    q: "How do I validate file types in multer?",
    a: "Use the fileFilter option: const upload = multer({ fileFilter: (req, file, cb) => { if (!file.mimetype.startsWith('image/')) { return cb(new Error('Only images allowed')) } cb(null, true) } })",
  },
  {
    q: "multer LIMIT_FILE_SIZE error — how to fix?",
    a: "Your uploaded file exceeds multer's size limit. Either increase the limit in multer config: limits: { fileSize: 10 * 1024 * 1024 } or return a helpful 413 error to the user.",
  },
  {
    q: "How do I upload files to S3 instead of local disk?",
    a: "Use multer-s3: npm install multer-s3 @aws-sdk/client-s3. Configure multer with multer-s3 storage engine pointing to your S3 bucket. Files will upload directly to S3 without touching your server's disk.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js File Upload Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-file-upload-error",
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
    title: "Fix: Error ENOENT no such file or directory",
    href: "error-enoent-no-such-file-or-directory-nodejs",
    time: "6 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
    time: "7 min read",
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
            <span className="text-gray-500">{"Node.js File Upload Error"}</span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Express", "Error Fix"].map((t) => (
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
              {"Node.js File Upload Error"}
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
                {"6 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · multer · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Complete Working Upload Setup"}
            </p>
            <CodeBlock title="terminal">{"npm install multer"}</CodeBlock>
            <CodeBlock title="server.js">{`const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({ path: req.file.path, name: req.file.originalname })
})`}</CodeBlock>
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

          <SH id="what">{"Common File Upload Errors"}</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error / Symptom"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "req.file is undefined",
                    "Fix 2 — field name mismatch or missing middleware",
                  ],
                  ["LIMIT_FILE_SIZE", "Fix 3 — increase size limit"],
                  ["LIMIT_UNEXPECTED_FILE", "Fix 2 — wrong field name"],
                  [
                    "MulterError: Non-string field",
                    "Fix 7 — frontend not using FormData",
                  ],
                  [
                    "File saved but wrong extension",
                    "Fix 5 — use diskStorage for filenames",
                  ],
                  [
                    "413 Payload Too Large",
                    "Fix 3 — increase express + multer limits",
                  ],
                ].map(([e, f]) => (
                  <tr
                    key={e}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {e}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Install and Configure multer"
            time="3 min"
            tag="Complete working setup"
          >
            <CodeBlock title="routes/upload.js">{`const express = require('express')
const multer  = require('multer')
const path    = require('path')
const fs      = require('fs')

const router = express.Router()

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '..', 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })

// Basic setup — multer saves files with random names
const upload = multer({
  dest: uploadDir,
  limits: { fileSize: 5 * 1024 * 1024 },  // 5MB limit
})

// Single file
router.post('/single', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file received' })
  res.json({
    message: 'Upload successful',
    filename: req.file.filename,
    originalName: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
    path: req.file.path,
  })
})

// Multiple files (up to 10)
router.post('/multiple', upload.array('files', 10), (req, res) => {
  if (!req.files?.length) return res.status(400).json({ error: 'No files received' })
  res.json({ uploaded: req.files.length, files: req.files.map(f => f.originalname) })
})

module.exports = router`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix req.file undefined"
            time="2 min"
            tag="Most common upload issue"
          >
            <P>
              {"req.file is undefined when the field name in "}
              <IC>{"upload.single('fieldname')"}</IC>
              {
                " does not match the field name your frontend sends, or when multer middleware is not applied."
              }
            </P>
            <CodeBlock title="Diagnose — log the request">{`app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Body:', req.body)         // form text fields
  console.log('File:', req.file)         // file info or undefined
  console.log('Files:', req.files)       // for array uploads
})`}</CodeBlock>
            <CodeBlock title="Frontend — field name must match">{`// Backend: upload.single('avatar')
// Frontend must use the SAME field name: 'avatar'

const formData = new FormData()
formData.append('avatar', fileInput.files[0])  // ← 'avatar' matches

fetch('/upload', { method: 'POST', body: formData })`}</CodeBlock>
            <WarnBox>
              {
                "Never set Content-Type manually when using FormData. The browser automatically adds multipart/form-data with the correct boundary. Setting it manually breaks the upload."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="3"
            title="Set File Size Limits"
            time="2 min"
            tag="LIMIT_FILE_SIZE / 413 errors"
          >
            <CodeBlock title="server.js">{`const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024,  // 10MB in bytes
    files: 5,                     // max 5 files per request
  }
})

// Handle multer errors in your route
app.post('/upload', (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ error: 'File too large. Maximum 10MB allowed.' })
      }
      return res.status(400).json({ error: err.message })
    } else if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
    res.json({ path: req.file.path })
  })
})

// Also increase Express body limit if needed
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Validate File Types (MIME Types)"
            time="3 min"
            tag="Only allow images / PDFs / specific types"
          >
            <CodeBlock title="server.js">{`const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    // Allow only images
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'))
    }
    cb(null, true)
  }
})

// Allow specific types
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
const upload = multer({
  fileFilter: (req, file, cb) => {
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error(\`File type \${file.mimetype} not allowed\`))
    }
    cb(null, true)
  }
})`}</CodeBlock>
            <WarnBox>
              {
                "Never trust the file extension alone. Always check file.mimetype which is set by the browser. For stronger security, use the 'file-type' package to check actual file magic bytes."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Control Filenames on Disk (diskStorage)"
            time="3 min"
            tag="Custom filenames and directories"
          >
            <P>
              {
                "By default, multer saves files with random names and no extension. Use "
              }
              <IC>{"diskStorage"}</IC>
              {" for full control over filenames."}
            </P>
            <CodeBlock title="server.js">{`const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Save to different folders based on file type
    const dir = file.mimetype.startsWith('image/')
      ? path.join(__dirname, 'uploads', 'images')
      : path.join(__dirname, 'uploads', 'documents')
    fs.mkdirSync(dir, { recursive: true })
    cb(null, dir)
  },
  filename: (req, file, cb) => {
    // Unique filename: timestamp + original extension
    const ext      = path.extname(file.originalname)
    const basename = path.basename(file.originalname, ext)
    const unique   = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, \`\${basename}-\${unique}\${ext}\`)
    // → profile-photo-1706789012345-123456789.jpg
  }
})

const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } })`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Upload to AWS S3 / Cloudinary"
            time="10 min"
            tag="Production — cloud storage"
          >
            <H3>{"AWS S3 with multer-s3"}</H3>
            <CodeBlock title="terminal">
              {"npm install multer-s3 @aws-sdk/client-s3"}
            </CodeBlock>
            <CodeBlock title="server.js">{`const { S3Client } = require('@aws-sdk/client-s3')
const multerS3    = require('multer-s3')

const s3 = new S3Client({ region: process.env.AWS_REGION })

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const key = \`uploads/\${Date.now()}-\${file.originalname}\`
      cb(null, key)
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
})

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ url: req.file.location })  // S3 URL
})`}</CodeBlock>
            <TipBox>
              {
                "Store AWS credentials in .env: AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET. Never hardcode them in source code."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="7"
            title="Frontend FormData — Send Files Correctly"
            time="2 min"
            tag="Common frontend mistakes that cause upload errors"
          >
            <CodeBlock title="Frontend — correct file upload">{`// ✅ CORRECT — using FormData
const formData = new FormData()
formData.append('file', fileInput.files[0])
formData.append('description', 'My photo')  // text fields work too

// Do NOT set Content-Type manually — browser sets it automatically
const response = await fetch('/upload', {
  method: 'POST',
  body: formData,
  // ❌ Do NOT add: headers: { 'Content-Type': 'multipart/form-data' }
})

// ✅ Axios — also works with FormData
const res = await axios.post('/upload', formData)
// Axios automatically sets the correct Content-Type

// ✅ React — handling file input
function UploadForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]
    const form = new FormData()
    form.append('file', file)
    await fetch('/upload', { method: 'POST', body: form })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"How to Prevent File Upload Errors"}</SH>
          <CheckList
            items={[
              "Always create the upload directory before starting: fs.mkdirSync(uploadDir, { recursive: true })",
              "Never set Content-Type manually when using FormData",
              "Match field name in upload.single('name') exactly with frontend form field name",
              "Always validate MIME types with fileFilter",
              "Set reasonable size limits — both in multer and express body-parser",
              "Use diskStorage for predictable filenames with extensions",
              "In production — upload to S3 or Cloudinary, not server disk",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
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
                "Softplix builds full-stack applications. Need help with file uploads, S3 integration, or media handling? We can help."
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
