"use client"

import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Security Researcher
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Alex Chen
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                Bug Bounty Hunter & Security Researcher
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Dedicated to finding and responsibly disclosing vulnerabilities in web applications.
              Helping organizations strengthen their security posture through comprehensive
              vulnerability research and ethical hacking.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/resume.pdf" download="Alex_Chen_CV.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Soft glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-90 translate-x-4" />

              {/* Photo container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-border bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <img
                  src="https://nyeinchanaung-steel.vercel.app/header.jpg"
                  alt="Alex Chen - Security Researcher"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  )
}
