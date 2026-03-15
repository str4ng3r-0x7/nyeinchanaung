import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const companies = [
  { name: "Redhat", year: "2025", link: "https://access.redhat.com/articles/66234" },
  { name: "Proton.me", year: "2026", link: "https://proton.me/blog/protonmail-security-contributors" },

]

export function HallOfFameSection() {
  return (
    <section id="hall-of-fame" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Hall of Fame
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recognized By
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Companies that have acknowledged my security research contributions through
            their bug bounty programs and security halls of fame.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.link}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col items-center justify-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {company.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
