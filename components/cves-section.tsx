import { ExternalLink, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const cves = [
  {
    id: "CVE-2025-28128",
    title: "ATO Via OTP Bypass",
    severity: "High",
    cvss: "7.0",
    description: "An issue in Mytel Telecom Online Account System v1.0 allows attackers to bypass the OTP verification process via a crafted request.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2025-28128",
  },
  {
    id: "CVE-2025-25500",
    title: "CosmWasm Allows Bypass of Capability Restrictions in Blockchains",
    severity: "Medium",
    cvss: "5.3",
    description: "An issue in CosmWasm prior to v2.2.0 allows attackers to bypass capability restrictions in blockchains by exploiting a lack of runtime capability validation. This allows attackers to deploy a contract without capability enforcement, and execute unauthorized actions on the blockchain.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2025-2550",
  },
  {
    id: "CVE-2024-57609",
    title: "Open Redirect Vulnerability",
    severity: "High",
    cvss: "8.6",
    description: "An issue in Kanaries Inc Pygwalker before v.0.4.9.9 allows a remote attacker to obtain sensitive information and execute arbitrary code via the redirect_path parameter of the login redirection function.",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2024-57609",
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
            A list of Common Vulnerabilities and Exposures (CVEs) that I have identified and responsibly disclosed to affected vendors and security teams.
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
