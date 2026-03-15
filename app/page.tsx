import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WriteupsSection } from "@/components/writeups-section"
import { HallOfFameSection } from "@/components/hall-of-fame-section"
import { CertificationsSection } from "@/components/certifications-section"
import { CVEsSection } from "@/components/cves-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WriteupsSection />
      <HallOfFameSection />
      <CertificationsSection />
      <CVEsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
