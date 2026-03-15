export interface Writeup {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  content: {
    introduction: string
    vulnerability: string
    impact: string
    poc: string
    remediation: string
    timeline: string
  }
}

export const writeups: Writeup[] = [
  {
    id: "critical-ssrf-cloud-provider",
    title: "How I Found a Critical SSRF Vulnerability in a Major Cloud Provider",
    excerpt: "A deep dive into discovering and exploiting a server-side request forgery vulnerability that allowed access to internal AWS infrastructure and potentially affected thousands of customers.",
    date: "March 2024",
    readTime: "12 min read",
    tags: ["SSRF", "Cloud Security", "AWS"],
    featured: true,
    content: {
      introduction: "During a routine bug bounty engagement with a major cloud service provider, I discovered a critical Server-Side Request Forgery (SSRF) vulnerability in their API gateway. This vulnerability allowed me to access internal AWS metadata endpoints and potentially compromise the entire infrastructure.",
      vulnerability: "The vulnerability existed in an image processing endpoint that accepted user-supplied URLs. The application would fetch images from these URLs for processing, but failed to properly validate the destination. By supplying the AWS metadata endpoint (169.254.169.254), I was able to retrieve IAM credentials associated with the EC2 instance.\n\nThe vulnerable endpoint was:\nPOST /api/v1/images/process\n{\n  \"image_url\": \"http://169.254.169.254/latest/meta-data/iam/security-credentials/\"\n}\n\nThis returned the role name, which I then used to retrieve temporary security credentials.",
      impact: "The impact of this vulnerability was severe:\n\n- Full read access to S3 buckets containing customer data\n- Ability to enumerate internal services and infrastructure\n- Potential for lateral movement within the AWS environment\n- Access to secrets stored in AWS Secrets Manager\n\nThe CVSS score was rated as Critical (9.8) due to the potential for data breach and infrastructure compromise.",
      poc: "1. Identified the image processing endpoint through API documentation\n2. Tested with external URLs to confirm URL fetching functionality\n3. Attempted SSRF by providing internal IP ranges\n4. Successfully accessed AWS metadata endpoint\n5. Retrieved IAM role credentials\n6. Verified access by listing S3 buckets (stopped here to avoid unauthorized access)",
      remediation: "The vendor implemented the following fixes:\n\n- Added a URL allowlist for external image sources\n- Implemented IMDS v2 which requires session tokens\n- Added network-level restrictions to block metadata endpoint access\n- Deployed additional monitoring for unusual API patterns",
      timeline: "- February 15, 2024: Vulnerability discovered\n- February 15, 2024: Initial report submitted\n- February 16, 2024: Triaged and confirmed by security team\n- February 20, 2024: Fix deployed to production\n- March 1, 2024: Bounty awarded ($15,000)\n- March 15, 2024: Public disclosure approved"
    }
  },
  {
    id: "xss-csrf-account-takeover",
    title: "Chaining XSS and CSRF for Account Takeover",
    excerpt: "Learn how combining seemingly low-impact vulnerabilities can lead to critical security issues. This writeup details how I chained XSS with CSRF to achieve full account takeover.",
    date: "February 2024",
    readTime: "8 min read",
    tags: ["XSS", "CSRF", "Account Takeover"],
    featured: true,
    content: {
      introduction: "This writeup demonstrates how two medium-severity vulnerabilities, when chained together, can result in a critical account takeover scenario. I discovered a stored XSS vulnerability in a user profile field and a missing CSRF token on the email change functionality.",
      vulnerability: "The stored XSS existed in the 'bio' field of user profiles. While the application sanitized most HTML tags, it failed to properly handle SVG elements with event handlers.\n\nPayload used:\n<svg onload=\"fetch('/api/change-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:'attacker@evil.com'})})\">\n\nThe email change endpoint lacked CSRF protection, making it vulnerable to cross-site requests initiated from the XSS payload.",
      impact: "By combining these vulnerabilities, an attacker could:\n\n- Change any user's email address to one they control\n- Trigger password reset to gain full account access\n- Access sensitive user data and perform actions on their behalf\n- Potentially escalate to admin accounts visiting the profile",
      poc: "1. Created a new account on the platform\n2. Injected the XSS payload into the bio field\n3. Waited for a victim to view the attacker's profile\n4. XSS payload executes and changes victim's email\n5. Attacker receives confirmation email\n6. Attacker triggers password reset and gains access",
      remediation: "The vendor implemented:\n\n- Strict Content Security Policy (CSP)\n- Proper HTML sanitization including SVG elements\n- CSRF tokens on all state-changing endpoints\n- Rate limiting on email change requests\n- Email confirmation required for email changes",
      timeline: "- January 10, 2024: Vulnerabilities discovered\n- January 10, 2024: Report submitted with PoC\n- January 12, 2024: Confirmed and prioritized\n- January 18, 2024: Patches deployed\n- February 1, 2024: Bounty awarded ($8,000)"
    }
  },
  {
    id: "2fa-bypass-case-study",
    title: "Bypassing Two-Factor Authentication: A Case Study",
    excerpt: "An analysis of common implementation flaws in 2FA systems and how I discovered a bypass that affected a popular financial application.",
    date: "January 2024",
    readTime: "10 min read",
    tags: ["2FA", "Authentication", "Bypass"],
    featured: false,
    content: {
      introduction: "Two-factor authentication is often seen as a silver bullet for account security, but implementation flaws can render it ineffective. In this writeup, I detail how I discovered a 2FA bypass in a financial application that could have exposed millions of user accounts.",
      vulnerability: "The application implemented 2FA using TOTP (Time-based One-Time Password). However, the verification logic had a critical flaw - it only checked if the 2FA code was valid but didn't verify that the code belonged to the user attempting to authenticate.\n\nBy intercepting the authentication flow and replacing the 2FA code with one from my own authenticator app (registered to a different account), I could bypass the 2FA check entirely.",
      impact: "This vulnerability allowed:\n\n- Complete bypass of 2FA for any account\n- Account takeover using only stolen credentials\n- Access to financial data and transaction capabilities\n- Potential for large-scale account compromise",
      poc: "1. Set up 2FA on attacker account (Account A)\n2. Attempt login on victim account (Account B) with stolen credentials\n3. When prompted for 2FA code, enter code from Account A's authenticator\n4. Authentication succeeds, granting access to Account B",
      remediation: "The fix involved:\n\n- Binding the 2FA verification to the specific user session\n- Implementing proper session management during authentication\n- Adding additional verification steps for sensitive operations\n- Conducting a full security audit of the authentication flow",
      timeline: "- December 5, 2023: Vulnerability discovered\n- December 5, 2023: Immediate report due to severity\n- December 6, 2023: Emergency patch deployed\n- January 5, 2024: Bounty awarded ($12,000)"
    }
  },
  {
    id: "recon-asset-discovery-pipeline",
    title: "The Art of Recon: Building Your Asset Discovery Pipeline",
    excerpt: "A comprehensive guide to setting up an automated reconnaissance pipeline using open-source tools for efficient bug bounty hunting.",
    date: "December 2023",
    readTime: "15 min read",
    tags: ["Recon", "Automation", "Tools"],
    featured: false,
    content: {
      introduction: "Effective reconnaissance is the foundation of successful bug bounty hunting. In this writeup, I share my approach to building an automated asset discovery pipeline that has helped me find numerous vulnerabilities across various programs.",
      vulnerability: "This is not a vulnerability writeup but rather a methodology guide. I'll cover the tools and techniques I use for subdomain enumeration, port scanning, technology fingerprinting, and vulnerability scanning.",
      impact: "A well-designed recon pipeline can:\n\n- Discover assets unknown to the target organization\n- Identify outdated software and misconfigurations\n- Find forgotten test environments and shadow IT\n- Provide comprehensive attack surface visibility",
      poc: "My pipeline consists of:\n\n1. Subdomain Enumeration: Subfinder, Amass, Assetfinder\n2. DNS Resolution: MassDNS, PureDNS\n3. HTTP Probing: httpx, httprobe\n4. Screenshot Capture: Gowitness, Aquatone\n5. Technology Detection: Wappalyzer, WhatWeb\n6. Vulnerability Scanning: Nuclei with custom templates",
      remediation: "Organizations should:\n\n- Maintain accurate asset inventories\n- Implement external attack surface monitoring\n- Regularly audit DNS records and subdomains\n- Decommission unused services and applications",
      timeline: "- Ongoing methodology refinement\n- December 2023: Writeup published"
    }
  },
  {
    id: "graphql-security-vulnerabilities",
    title: "GraphQL Security: Common Vulnerabilities and How to Find Them",
    excerpt: "Exploring security pitfalls in GraphQL implementations including introspection leaks, batching attacks, and authorization bypasses.",
    date: "November 2023",
    readTime: "11 min read",
    tags: ["GraphQL", "API Security", "Web"],
    featured: false,
    content: {
      introduction: "GraphQL has become increasingly popular for building APIs, but its flexibility comes with unique security challenges. This writeup covers the most common vulnerabilities I've found in GraphQL implementations during bug bounty engagements.",
      vulnerability: "Key vulnerabilities covered:\n\n1. Introspection Enabled in Production - Exposing the entire schema\n2. Batching/Aliasing Attacks - Bypassing rate limits\n3. Deep Query Attacks - DoS through nested queries\n4. Authorization Bypasses - Accessing unauthorized data through relationships\n5. Injection Attacks - SQL/NoSQL injection through resolvers",
      impact: "These vulnerabilities can lead to:\n\n- Complete schema disclosure\n- Rate limit and brute force bypasses\n- Denial of service conditions\n- Unauthorized data access\n- Backend database compromise",
      poc: "Example introspection query:\n{\n  __schema {\n    types {\n      name\n      fields {\n        name\n        type { name }\n      }\n    }\n  }\n}\n\nExample batching attack for brute force:\nquery {\n  login0: login(user:\"admin\", pass:\"pass1\") { token }\n  login1: login(user:\"admin\", pass:\"pass2\") { token }\n  ... (50+ attempts in single request)\n}",
      remediation: "Recommendations:\n\n- Disable introspection in production\n- Implement query depth and complexity limits\n- Use persisted queries\n- Apply proper authorization at resolver level\n- Sanitize all inputs reaching databases",
      timeline: "- November 2023: Writeup published based on multiple findings"
    }
  },
]

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return writeups.find((w) => w.id === slug)
}

export function getAllWriteupSlugs(): string[] {
  return writeups.map((w) => w.id)
}
