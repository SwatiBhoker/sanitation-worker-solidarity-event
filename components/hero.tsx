import { CalendarDays, MapPin, HandHeart } from "lucide-react"

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Layered yellow gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-yellow-100 to-amber-50"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300 to-amber-300 opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-300 opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
          <HandHeart className="h-4 w-4" aria-hidden />
          Community Donation Drive
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-amber-950 sm:text-6xl">
          Sanitation Workers&apos; Solidarity Fund
        </h1>

        <p className="mt-4 text-pretty text-lg font-medium text-amber-800 sm:text-xl">
          For our People &mdash; to remind them that they matter.
        </p>

        <p className="mt-5 font-devanagari text-2xl font-semibold text-amber-800 sm:text-3xl">
          साथी हाथ बटाना रे!
        </p>
        <p className="mt-2 text-pretty text-base text-amber-700 sm:text-lg">
          Let&apos;s help each other keeping the city clean.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2.5 text-amber-900 shadow-sm backdrop-blur">
            <CalendarDays className="h-5 w-5 text-amber-600" aria-hidden />
            <span className="font-semibold">23 September 2026</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2.5 text-amber-900 shadow-sm backdrop-blur">
            <MapPin className="h-5 w-5 text-amber-600" aria-hidden />
            <span className="font-semibold">Gohana, Haryana</span>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#donate"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 text-lg font-bold text-amber-950 shadow-lg shadow-amber-500/30 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          >
            <HandHeart className="h-5 w-5" aria-hidden />
            Stretch an extra hand
          </a>
        </div>
      </div>
    </header>
  )
}
