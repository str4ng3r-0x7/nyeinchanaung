import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { writeups } from "@/lib/writeups-data"

export function WriteupsSection() {
  const featuredWriteups = writeups.filter((w) => w.featured)
  const recentWriteups = writeups.filter((w) => !w.featured)

  return (
    <section id="writeups" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Security Writeups
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research & Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed technical writeups sharing knowledge and techniques from my 
            security research and bug bounty experiences.
          </p>
        </div>

        {/* Featured Writeups */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featuredWriteups.map((writeup) => (
            <Link
              key={writeup.id}
              href={`/writeups/${writeup.id}`}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Featured
              </Badge>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                {writeup.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {writeup.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {writeup.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {writeup.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {writeup.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Writeups */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Posts</h3>
          {recentWriteups.map((writeup) => (
            <Link
              key={writeup.id}
              href={`/writeups/${writeup.id}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 gap-4"
            >
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {writeup.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {writeup.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {writeup.readTime}
                  </span>
                  <div className="flex gap-1">
                    {writeup.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View All Writeups
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
