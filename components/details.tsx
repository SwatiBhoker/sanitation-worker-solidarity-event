import { Users, Sparkles, HandCoins } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "Who it's for",
    body: "Residents of Gohana — this is our neighbourhood coming together.",
  },
  {
    icon: HandCoins,
    title: "What happens",
    body: "Let's donate for the people who keep your city clean, by stretching an extra hand of help.",
  },
  {
    icon: Sparkles,
    title: "Why it matters",
    body: "A cleaner Gohana starts with the hands that clean it. A little from each of us adds up to a lot for them.",
  },
]

export function Details() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-amber-400">
              <Icon className="h-6 w-6 text-amber-950" aria-hidden />
            </div>
            <h2 className="mt-4 text-lg font-bold text-amber-950">{title}</h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-amber-800/80">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
