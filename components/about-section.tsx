import { Code, Search, Shield, Target } from "lucide-react"

const skills = [
  {
    icon: Shield,
    title: "Web Application Security",
    description: "Expert in identifying OWASP Top 10 vulnerabilities including XSS, SQLi, CSRF, and authentication flaws.",
  },
  {
    icon: Search,
    title: "Reconnaissance",
    description: "Proficient in subdomain enumeration, asset discovery, and mapping attack surfaces for comprehensive testing.",
  },
  {
    icon: Target,
    title: "Vulnerability Research",
    description: "Deep understanding of business logic vulnerabilities, authorization issues, and complex attack chains.",
  },
  {
    icon: Code,
    title: "Secure Code Review",
    description: "Experienced in reviewing source code for security issues across multiple programming languages and frameworks.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Passionate About Security
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an independent security researcher with over 5 years of experience in 
                web application security and bug bounty hunting. My journey started with a 
                fascination for how systems work and evolved into a career dedicated to 
                making the internet safer.
              </p>
              <p>
                I&apos;ve reported vulnerabilities to major tech companies including Google, 
                Microsoft, Apple, and Meta, earning recognition in their security halls of 
                fame. My research focuses on finding high-impact vulnerabilities that could 
                affect millions of users.
              </p>
              <p>
                When I&apos;m not hunting bugs, I contribute to the security community by writing 
                detailed writeups, developing open-source tools, and mentoring aspiring 
                security researchers.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["HackerOne", "Bugcrowd", "Synack", "Intigriti"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
