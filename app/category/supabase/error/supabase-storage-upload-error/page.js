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
  title: "Supabase Storage Upload Error — Fixed [2026]",
  description:
    "Fix Supabase Storage upload errors — permission denied, bucket not found, file size limit, MIME type rejection, and getting public URLs after upload.",
  keywords:
    "supabase storage upload error, supabase storage permission denied, supabase bucket not found, supabase file upload not working 2026, supabase storage public url",
  alternates: {
    canonical:
      "https://softplix.com/category/supabase/error/supabase-storage-upload-error",
  },
  openGraph: {
    title: "Supabase Storage Upload Error — Fixed [2026]",
    description:
      "Fix Supabase Storage uploads — permissions, bucket policies, file size, public URLs.",
    type: "article",
    url: "https://softplix.com/category/supabase/error/supabase-storage-upload-error",
  },
};

const TOC = [
  { label: "Why Supabase Storage uploads fail", href: "#why" },
  { label: "Fix 1 — Create the bucket and set access policy", href: "#fix-1" },
  { label: "Fix 2 — Add Storage RLS policies for upload", href: "#fix-2" },
  { label: "Fix 3 — Fix file size and MIME type limits", href: "#fix-3" },
  { label: "Fix 4 — Get the correct public URL after upload", href: "#fix-4" },
  { label: "Fix 5 — Upload files from Next.js Server Actions", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Supabase Storage return 'permission denied'?",
    a: "Supabase Storage uses Row Level Security on the storage.objects table. By default, all uploads are denied. You must either make the bucket public (for public assets) or add storage RLS policies that allow authenticated users to upload to specific paths.",
  },
  {
    q: "What is the difference between a public and private Supabase bucket?",
    a: "Public buckets allow anyone to read files via their public URL without authentication. Private buckets require a signed URL (created with createSignedUrl) or an authenticated request to access files. Use public buckets for images, avatars, and assets shown to all users. Use private buckets for sensitive documents.",
  },
  {
    q: "What is the Supabase Storage file size limit?",
    a: "The default file size limit is 50MB. You can change this per bucket in the Supabase Dashboard when creating or editing a bucket. The free plan has a total storage limit of 1GB across all buckets.",
  },
  {
    q: "How do I get the public URL of an uploaded file in Supabase?",
    a: "After uploading to a public bucket, call supabase.storage.from('bucket-name').getPublicUrl(filePath). This returns a permanent public URL. For private buckets, use createSignedUrl(filePath, expiresIn) to generate a time-limited URL.",
  },
  {
    q: "Can I upload files from a Next.js Server Action?",
    a: "Yes. Create a Supabase server client in the Server Action, read the file from FormData as a File or ArrayBuffer, then call supabase.storage.from('bucket').upload(path, fileData). Use the service role client if you want to bypass storage RLS.",
  },
  {
    q: "Why does my uploaded file show 'Object not found' when I try to access it?",
    a: "The file path in getPublicUrl must exactly match the path used in upload, including any folder prefix. Also check that the bucket is public — private bucket files require a signed URL to access, not the public URL endpoint.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supabase Storage Upload Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/supabase/error/supabase-storage-upload-error",
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
            tags={["Supabase", "Storage", "Error Fix"]}
            title={"Supabase Storage Upload Error"}
            subtitle={"— Permission Denied & More [Fixed 2026]"}
            sub={
              "Also covers: bucket creation · storage RLS policies · file size limits · public URL · Server Action uploads"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Supabase Storage · Next.js · React"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`{ statusCode: "403", error: "Unauthorized", message: "new row violates row-level security policy" }
// OR:
{ statusCode: "404", error: "Bucket not found" }
// OR:
{ statusCode: "413", error: "Payload Too Large" }`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Basic working upload pattern"}
            </p>
            <CodeBlock title="Upload a file to Supabase Storage">{`const { data, error } = await supabase.storage
  .from("avatars")                // bucket name
  .upload(\`\${userId}/avatar.png\`, file, {
    upsert: true,                 // overwrite if exists
    contentType: "image/png",
  })

if (error) console.error(error.message)

// Get public URL (public bucket only)
const { data: { publicUrl } } = supabase.storage
  .from("avatars")
  .getPublicUrl(\`\${userId}/avatar.png\`)`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Supabase Storage Uploads Fail"}</SH>
          <P>
            {
              "Storage errors have three main categories: permissions (RLS blocking the upload), configuration (bucket doesn't exist, wrong name, file too large), or code mistakes (wrong path in getPublicUrl, missing upsert flag on re-upload). Most errors are permissions-related."
            }
          </P>

          <FixCard
            number="1"
            title="Create the Bucket and Set Access Policy"
            time="3 min"
            tag="Bucket not found OR all uploads fail"
          >
            <CodeBlock title="Supabase Dashboard → Storage → New Bucket">{`# Dashboard: Storage → New bucket
Bucket name:  avatars           (no spaces, lowercase)
Public bucket: ✅               (toggle ON for images shown to users)
File size limit: 5 MB           (adjust as needed)
Allowed MIME types: image/*     (optional — leave blank for all types)

# OR via SQL:
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars',
  true,
  5242880,          -- 5MB in bytes
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add Storage RLS Policies for Upload"
            time="5 min"
            tag="403 Unauthorized on upload — most common fix"
          >
            <P>
              {"Storage uses RLS on the "}
              <IC>{"storage.objects"}</IC>
              {
                " table. For private buckets, you must add policies for INSERT (upload), SELECT (read), and DELETE."
              }
            </P>
            <CodeBlock title="Storage RLS policies — user-scoped uploads">{`-- Allow authenticated users to upload to their own folder
CREATE POLICY "Users upload own files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );
-- File path must be: {user-uuid}/filename.ext

-- Allow authenticated users to read their own files
CREATE POLICY "Users read own files"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow users to delete their own files
CREATE POLICY "Users delete own files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- For PUBLIC bucket — allow anyone to read (no auth needed)
CREATE POLICY "Public read avatars"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'avatars');`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix File Size and MIME Type Limits"
            time="2 min"
            tag="413 Payload Too Large or unsupported file type"
          >
            <CodeBlock title="Update bucket limits">{`-- Increase file size limit (in bytes)
UPDATE storage.buckets
SET file_size_limit = 52428800   -- 50MB
WHERE id = 'documents';

-- Update allowed MIME types
UPDATE storage.buckets
SET allowed_mime_types = ARRAY[
  'image/jpeg', 'image/png', 'image/webp',
  'application/pdf',
  'video/mp4'
]
WHERE id = 'uploads';

-- Validate file size client-side before uploading
const MAX_SIZE = 5 * 1024 * 1024  // 5MB
if (file.size > MAX_SIZE) {
  alert("File must be under 5MB")
  return
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Get the Correct Public URL After Upload"
            time="2 min"
            tag="Object not found or URL returns 404"
          >
            <P>
              {"The path in "}
              <IC>{"getPublicUrl"}</IC>
              {
                " must exactly match the path used during upload, including any folder prefix. For private buckets, use "
              }
              <IC>{"createSignedUrl"}</IC>
              {" instead."}
            </P>
            <CodeBlock title="Upload + get URL — complete pattern">{`async function uploadAvatar(userId: string, file: File) {
  const filePath = \`\${userId}/\${Date.now()}-\${file.name}\`

  // Upload the file
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, { upsert: true })

  if (uploadError) throw uploadError

  // Get public URL (public bucket)
  const { data: { publicUrl } } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath)      // ← same path as upload

  return publicUrl

  // For PRIVATE bucket — use signed URL instead:
  // const { data, error } = await supabase.storage
  //   .from("documents")
  //   .createSignedUrl(filePath, 60 * 60)  // expires in 1 hour
  // return data?.signedUrl
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Upload Files from Next.js Server Actions"
            time="5 min"
            tag="File uploads handled on the server"
          >
            <P>
              {
                "Read the file from FormData in a Server Action, then upload using the Supabase server client. Use the admin client to bypass storage RLS for server-side uploads."
              }
            </P>
            <CodeBlock title="app/actions/upload.ts">{`"use server"

import { createClient } from "@/lib/supabase/server"

export async function uploadAvatar(formData: FormData) {
  const file = formData.get("avatar") as File
  if (!file || file.size === 0) return { error: "No file provided" }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: "Not authenticated" }

  // Read file as ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()
  const filePath = \`\${user.id}/\${Date.now()}-\${file.name}\`

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, arrayBuffer, {
      contentType: file.type,
      upsert: true,
    })

  if (error) return { error: error.message }

  const { data: { publicUrl } } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath)

  // Save URL to user profile
  await supabase
    .from("profiles")
    .update({ avatar_url: publicUrl })
    .eq("id", user.id)

  return { publicUrl }
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Create the bucket before writing upload code — verify bucket name exactly matches your code",
              "Toggle 'Public bucket' ON for images and assets shown to all users — no RLS needed for reads",
              "Add storage INSERT and SELECT RLS policies for private buckets before testing",
              "Use the file path format {user-id}/filename so storage.foldername() policies work correctly",
              "Validate file size and MIME type client-side before calling upload — better UX than a 413 error",
              "Use the same filePath variable for both upload() and getPublicUrl() to avoid URL mismatches",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Supabase",
                title: "Fix: Supabase RLS blocking queries",
                href: "/category/supabase/error/supabase-row-level-security-blocking",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase foreign key constraint error",
                href: "/category/supabase/error/supabase-foreign-key-constraint-error",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Server Actions not working",
                href: "/category/next-js/error/nextjs-server-action-not-working",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build File Upload Pipelines with Supabase"}
            desc={
              "Softplix engineers implement Supabase Storage for avatars, documents, and media — with RLS, signed URLs, and image optimisation. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
