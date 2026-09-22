import { Hero } from "@/components/hero"
import { Details } from "@/components/details"
import { Donate } from "@/components/donate"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Hero />
      <Details />
      <Donate />
      <SiteFooter />
    </main>
  )
}
