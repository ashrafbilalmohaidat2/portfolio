import { SectionLabel } from './About'

const experiences = [
  {
    date: 'May 2026 – Present',
    role: 'DevOps Engineer Intern',
    company: 'Obsidian Labs',
    type: 'Internship',
    bullets: [
      'Engineering a provider-agnostic IaC platform to automate provisioning and lifecycle management across cloud and on-premises environments using Ansible.',
      'Building a self-hosted platform integrating multiple services under centralized IAM with SSO (OAuth2/OIDC), DNS management, reverse proxy, and TLS/SSL-secured domain routing.',
      'Developing Python-based CLI automation tools and infrastructure workflows to streamline provisioning, deployment, and operational tasks across distributed systems.',
    ],
  },
  {
    date: 'Jul 2025 – Present',
    role: 'Self-Directed Learning',
    company: 'Independent',
    type: 'Learning',
    bullets: [
      'Deepening Kubernetes knowledge through hands-on practice with Minikube and kubectl on WSL2',
      'Building personal DevOps projects covering CI/CD, IaC, and containerization',
      'Building DevOps Unfiltered — a content brand for Arabic-speaking engineers',
    ],
  },
  {
    date: 'Oct 2024 – Jul 2025',
    role: 'Cloud Computing & AI Intern',
    company: 'Galaxy Organization · via Digiskills',
    type: 'Internship',
    bullets: [
      'Completed industry-aligned training in cloud computing with practical exposure to Alibaba Cloud services',
      'Designed and deployed cloud-based solutions covering compute, networking, and storage components',
      'Implemented secure cloud configurations using VPC, IAM roles, and security groups',
      'Earned ACA – Cloud Engineer and ACA – Business User certifications from Alibaba Cloud',
    ],
  },
  {
    date: 'Jul 2024 – Aug 2024',
    role: 'Web Development Intern',
    company: 'Javna Company',
    type: 'Internship',
    bullets: [
      'Built and iterated on UI components using React.js within an existing frontend codebase',
      'Implemented responsive layouts and worked on component-level features based on design requirements',
      'Collaborated through Git version control and participated in code reviews',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative z-10 bg-paper2 dark:bg-[#0a1628] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="04" title="Experience" />
        <div className="fade-in relative">
          <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-[#22c55e]/60 via-slate-200 dark:via-slate-700 to-transparent" />

          <div className="space-y-10">
            {experiences.map(({ date, role, company, type, bullets }, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-white dark:bg-[#0a1628] border-2 border-[#22c55e]/60 flex items-center justify-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#22c55e]" />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] uppercase rounded-full px-3 py-1 text-[#16a34a] dark:text-[#4ade80] bg-[#22c55e]/[0.08] dark:bg-[#22c55e]/[0.12] border border-[#22c55e]/20">
                    {date}
                  </span>
                  <span className="font-mono text-[0.58rem] text-slate-400 dark:text-slate-500 tracking-[0.1em] uppercase">{type}</span>
                </div>

                <div className="font-heading font-bold text-[1.2rem] text-[#0f172a] dark:text-[#f1f5f9] leading-tight mb-0.5">{role}</div>
                <div className="font-mono text-[0.78rem] text-[#22c55e] mb-4">{company}</div>

                <div className="card p-5 space-y-2.5">
                  {bullets.map((b, j) => (
                    <div key={j} className="flex gap-3 items-start text-[0.9rem] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      <span className="mt-[8px] flex-shrink-0 w-1 h-1 rounded-full bg-[#22c55e]" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
