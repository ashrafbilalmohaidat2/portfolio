
const stats = [
  { val: '3+',   sub: 'Training Badges',         accent: 'green'  },
  { val: 'AWS',  sub: 'Certified Practitioner',   accent: 'green'  },
  { val: '2',    sub: 'Cloud Platforms',           accent: 'ink'    },
  { val: 'ACA',  sub: 'Alibaba Cloud Associate',   accent: 'orange' },
]

export default function About() {

  return (
    <section id="about" className="py-16 md:py-28 px-6 relative z-10 overflow-hidden bg-paper dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="01" title="About Me" />

        <div className="fade-in grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-10 md:gap-14 items-start">

          {/* Bio */}
          <div className="space-y-5">
            <div className="space-y-6 text-[1rem] text-slate-600 dark:text-slate-300 leading-[1.85] font-sans">

              {/* Summary */}
              <p className="text-[1.05rem]">
                I'm <span className="text-[#0f172a] dark:text-white font-semibold">Ashraf Mheidat</span> — a{' '}
                <span className="text-[#22c55e] font-semibold">Cloud & DevOps Engineer</span> with hands-on
                experience designing secure, scalable cloud infrastructure on AWS and Alibaba Cloud. I
                specialize in turning complex infrastructure problems into clean, automated, reproducible
                solutions.
              </p>

              {/* What I do */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: 'fas fa-layer-group',    label: 'Infrastructure as Code',   desc: 'Terraform · Ansible'           },
                  { icon: 'fas fa-cubes',           label: 'Containers & Orchestration',desc: 'Docker · Kubernetes'           },
                  { icon: 'fas fa-code-branch',     label: 'CI/CD Automation',         desc: 'GitHub Actions · Python'       },
                  { icon: 'fas fa-shield-alt',      label: 'Security & Identity',      desc: 'SSO/OIDC · IAM · TLS/SSL'     },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl bg-slate-50 dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700/60 px-4 py-3">
                    <i className={`${icon} text-[#22c55e] text-sm mt-[4px]`} />
                    <div>
                      <div className="font-mono text-[0.72rem] text-[#0f172a] dark:text-white font-semibold tracking-wide">{label}</div>
                      <div className="font-mono text-[0.65rem] text-slate-400 dark:text-slate-500">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education & Location */}
              <div className="space-y-2.5 pt-1">
                <p className="flex items-center gap-2.5">
                  <i className="fas fa-graduation-cap text-[#22c55e] text-sm w-4 text-center" />
                  <span>
                    <span className="text-[#0f172a] dark:text-white font-semibold">B.Sc. Software Engineering</span>
                    {' · '}Al-Balqa' Applied University{' · '}
                    <span className="font-mono text-[0.82rem] text-slate-400 dark:text-slate-500">Jan 2025</span>
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <i className="fas fa-map-marker-alt text-[#22c55e] text-sm w-4 text-center" />
                  <span>
                    <span className="text-[#0f172a] dark:text-white font-semibold">Amman, Jordan</span>
                    {' · '}Open to remote, on-site, or relocation.
                  </span>
                </p>
              </div>

            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux', 'Ansible', 'Python'].map(t => (
                <span key={t} className="font-mono text-[0.68rem] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-lg hover:border-[#22c55e]/40 hover:text-[#0f172a] dark:hover:text-white transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ val, sub, accent }) => (
              <StatCard key={val} val={val} sub={sub} accent={accent} />
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}

function StatCard({ val, sub, accent }) {
  const colors = {
    green:  { text: 'text-[#22c55e]',  bg: 'bg-[#22c55e]/[0.07] dark:bg-[#22c55e]/[0.10]',  border: 'border-[#22c55e]/20 dark:border-[#22c55e]/25' },
    ink:    { text: 'text-[#0f172a] dark:text-[#f1f5f9]', bg: 'bg-[#0f172a]/[0.05] dark:bg-white/[0.06]', border: 'border-[#0f172a]/15 dark:border-white/10' },
    orange: { text: 'text-orange-500',  bg: 'bg-orange-50 dark:bg-orange-500/[0.10]',   border: 'border-orange-200 dark:border-orange-500/25' },
  }
  const c = colors[accent] || colors.green
  return (
    <div className={`rounded-2xl ${c.bg} border ${c.border} p-4 hover:scale-[1.02] transition-transform duration-200 cursor-default`}>
      <div className={`font-heading font-black text-[1.9rem] ${c.text} leading-none mb-1.5`}>{val}</div>
      <div className="font-mono text-[0.6rem] text-slate-500 dark:text-slate-400 tracking-[0.15em] uppercase leading-snug">{sub}</div>
    </div>
  )
}

export function SectionLabel({ num, title }) {
  return (
    <div className="mb-10 md:mb-16 relative">
      {/* Giant watermark number */}
      <span
        className="absolute -top-6 -left-2 font-heading font-black leading-none select-none pointer-events-none text-[#0f172a]/[0.04] dark:text-white/[0.04]"
        style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[0.65rem] text-[#22c55e] tracking-[0.35em] uppercase font-semibold">{num}</span>
          <span className="w-6 h-px bg-[#22c55e]/50" />
        </div>
        <h2 className="font-heading font-black text-[clamp(1.9rem,4vw,3rem)] text-[#0f172a] dark:text-[#f1f5f9] leading-tight tracking-tight">
          {title}
        </h2>
        <div className="mt-3 w-10 h-[3px] rounded-full bg-[#22c55e]" />
      </div>
    </div>
  )
}
