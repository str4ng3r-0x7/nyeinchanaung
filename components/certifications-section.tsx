const certifications = [
  {
    name: "Senior Web Security",
    fullName: "Senior Web Security Certified Professional",
    issuer: "Creatigon",
    year: "2024",
    image: "https://raw.githubusercontent.com/Mr-UN533N/nyeinchanaung/refs/heads/main/certi2.jpg",
    description: "Advanced web application security certification focused on whitebox penetration testing and source code analysis.",
  },
  {
    name: "Junior Web Security",
    fullName: "Junior Web Security Certified",
    issuer: "Creatigon",
    year: "2023",
    image: "https://raw.githubusercontent.com/Mr-UN533N/nyeinchanaung/refs/heads/main/certi1.jpg",
    description: "Hands-on Web penetration testing certification demonstrating ability to compromise systems in a controlled environment.",
  },


  {
    name: "CRTOM",
    fullName: "Certified Red Team Operations Management (CRTOM)",
    issuer: "Advanced Red Team Operations & Governance",
    year: "2025",
    image: "https://raw.githubusercontent.com/str4ng3r-0x7/nyeinchanaung/refs/heads/main/certi3.png",
    description: "Foundation certification covering ethical hacking methodologies and tools.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in penetration
            testing, web security, and ethical hacking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Certificate Badge Image */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 p-4">
                <div className="relative w-full h-[350px] sm:h-[380px] lg:h-[400px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={cert.image}
                    alt={`${cert.name} certification badge`}
                    className="relative w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">{cert.name}</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{cert.fullName}</p>
                <p className="text-xs text-primary/80 font-medium">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border">
                  {cert.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
