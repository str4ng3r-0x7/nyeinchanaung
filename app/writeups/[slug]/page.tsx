import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getWriteupBySlug, getAllWriteupSlugs } from "@/lib/writeups-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  const slugs = getAllWriteupSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writeup = getWriteupBySlug(slug)
  
  if (!writeup) {
    return { title: "Writeup Not Found" }
  }

  return {
    title: `${writeup.title} | Alex Chen Security Research`,
    description: writeup.excerpt,
  }
}

export default async function WriteupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writeup = getWriteupBySlug(slug)

  if (!writeup) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Button asChild variant="ghost" className="mb-8 -ml-2">
            <Link href="/#writeups">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Writeups
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {writeup.tags.map((tag) => (
                <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              {writeup.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {writeup.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {writeup.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {writeup.content.introduction}
              </p>
            </section>

            {/* Vulnerability Details */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                Vulnerability Details
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <pre className="text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed text-base">
                  {writeup.content.vulnerability}
                </pre>
              </div>
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-accent rounded-full" />
                Impact Assessment
              </h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <pre className="text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed text-base">
                  {writeup.content.impact}
                </pre>
              </div>
            </section>

            {/* Proof of Concept */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                Proof of Concept
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <pre className="text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed text-base">
                  {writeup.content.poc}
                </pre>
              </div>
            </section>

            {/* Screenshot Placeholder */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                Screenshots
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="aspect-video bg-card border border-border rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Screenshot 1 - Initial Discovery</span>
                </div>
                <div className="aspect-video bg-card border border-border rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Screenshot 2 - Exploitation</span>
                </div>
              </div>
            </section>

            {/* Remediation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-green-500 rounded-full" />
                Remediation
              </h2>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <pre className="text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed text-base">
                  {writeup.content.remediation}
                </pre>
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                Disclosure Timeline
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <pre className="text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed text-base">
                  {writeup.content.timeline}
                </pre>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button asChild variant="outline">
                <Link href="/#writeups">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Writeups
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Contact for Questions
                </Link>
              </Button>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  )
}
