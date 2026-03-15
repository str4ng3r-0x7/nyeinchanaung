import { ExternalLink, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const cves = [
  {
    id: "CVE-2024-32891",
    title: "Authentication Bypass in Enterprise SSO Solution",
    severity: "Critical",
    cvss: "9.8",
    description: "An authentication bypass vulnerability in the SAML implementation allows remote attackers to gain unauthorized access to any user account without valid credentials.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2024-32891",
  },
  {
    id: "CVE-2024-28743",
    title: "Remote Code Execution in Web Application Framework",
    severity: "Critical",
    cvss: "9.1",
    description: "A deserialization vulnerability in the session handling mechanism allows remote attackers to execute arbitrary code on the server.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2024-28743",
  },
  {
    id: "CVE-2023-45219",
    title: "SQL Injection in Content Management System",
    severity: "High",
    cvss: "8.6",
    description: "Improper neutralization of special elements in SQL commands allows authenticated attackers to extract sensitive data from the database.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2023-45219",
  },
  {
    id: "CVE-2023-38847",
    title: "Cross-Site Scripting in Email Client",
    severity: "Medium",
    cvss: "6.1",
    description: "A stored XSS vulnerability in the email rendering component allows attackers to execute arbitrary JavaScript in the context of other users' sessions.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2023-38847",
  },
  {
    id: "CVE-2023-31205",
    title: "Information Disclosure in Cloud Storage API",
    severity: "Medium",
    cvss: "5.3",
    description: "An IDOR vulnerability in the file sharing API allows authenticated users to access files belonging to other accounts.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2023-31205",
  },
]

function getSeverityColor(severity: string) {
  switch (severity.toLowerCase()) {
    case "critical":
      return "bg-red-500/10 text-red-400 border-red-500/20"
    case "high":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20"
    case "medium":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    case "low":
      return "bg-green-500/10 text-green-400 border-green-500/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function CVEsSection() {
  return (
    <section id="cves" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            CVE Disclosures
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Published Vulnerabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common Vulnerabilities and Exposures (CVEs) I have discovered and 
            responsibly disclosed to vendors.
          </p>
        </div>

        <div className="grid gap-4">
          {cves.map((cve) => (
            <Link
              key={cve.id}
              href={cve.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-primary group-hover:underline">
                      {cve.id}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getSeverityColor(cve.severity)}>
                        {cve.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        CVSS {cve.cvss}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 lg:pl-4 lg:border-l lg:border-border">
                  <h4 className="font-medium text-foreground mb-1">
                    {cve.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {cve.description}
                  </p>
                </div>

                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 hidden lg:block" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
