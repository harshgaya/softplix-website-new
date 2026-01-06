export default function FindUs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

        {/* Card */}
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">
              Where you can find us
            </h3>

            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-indigo-600 bg-indigo-100">
              Hyderabad · Global remote
            </span>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[24px] h-[260px] sm:h-[320px] md:h-[360px]">
            <iframe
              title="Softplix location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2819142269436!2d78.50200057498549!3d17.398253383490772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb994d6c207885%3A0x50a7035064ccd14c!2sVNR%20Royal%20Apartments!5e0!3m2!1sen!2sin!4v1767674951781!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
