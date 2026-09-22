import { CalendarDays, MapPin, HandHeart } from "lucide-react"

export function Donate() {
  return (
    <section id="donate" className="px-6 pb-20">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 p-8 text-center shadow-xl shadow-amber-500/20 sm:p-12">
        <div
          aria-hidden
          className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-white/20 blur-2xl"
        />
        <div className="relative">
          <HandHeart className="mx-auto h-10 w-10 text-amber-950" aria-hidden />
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-amber-950 sm:text-4xl">
            Join the drive
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-amber-950/80">
            Come and contribute in person on the day of the drive. Every helping hand counts
            toward keeping Gohana clean and its sanitation workers supported.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-xl bg-amber-950/10 px-5 py-3 font-semibold text-amber-950">
              <CalendarDays className="h-5 w-5" aria-hidden />
              23 September 2026
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-amber-950/10 px-5 py-3 font-semibold text-amber-950">
              <MapPin className="h-5 w-5" aria-hidden />
              Gohana, Haryana
            </div>
          </div>

          <p className="mt-6 font-devanagari text-lg font-semibold text-amber-950">
            साथी हाथ बटाना रे!
          </p>
        </div>
      </div>
    </section>
  )
}
