import Image from "next/image";

export default function PageHero({ text1, text2, text3, text4, text5, img }) {
  return (
    <section className="py-10 px-4">
      <div className="relative max-w-6xl mx-auto">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-[32px] blur-3xl bg-indigo-500/20" />

        {/* Card */}
        <div
          className="
            flex flex-col-reverse md:flex-row
            items-start justify-between
            gap-10
            rounded-[32px]
            bg-[#dfe3ff]
            px-6 py-12 md:px-16 md:py-16
            shadow-[0_40px_120px_rgba(0,0,0,0.25)]
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-left">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-indigo-600 shadow">
                {text1}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {text2}
            </h2>

            <p className="text-gray-600 max-w-xl mb-8">{text3}</p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-700 px-5 py-2 text-sm font-medium text-white">
                {text4}
              </span>
              <span className="rounded-full bg-gray-700 px-5 py-2 text-sm font-medium text-white">
                {text5}
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <Image
              src={img}
              alt="About hero"
              width={500}
              height={300}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
