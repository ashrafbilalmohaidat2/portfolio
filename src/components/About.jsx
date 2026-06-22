const stats = [
  { val: '3+',  sub: 'Training Badges',        accent: 'green'  },
  { val: 'AWS', sub: 'Certified Practitioner',  accent: 'green'  },
  { val: '2',   sub: 'Cloud Platforms',          accent: 'ink'    },
  { val: 'ACA', sub: 'Alibaba Cloud Associate',  accent: 'orange' },
]

const capabilities = [
  { icon: 'fas fa-layer-group',  label: 'Infrastructure as Code',    desc: 'Terraform · Ansible'       },
  { icon: 'fas fa-cubes',        label: 'Containers & Orchestration', desc: 'Docker · Kubernetes'       },
  { icon: 'fas fa-code-branch',  label: 'CI/CD Automation',          desc: 'GitHub Actions · Python'   },
  { icon: 'fas fa-shield-alt',   label: 'Security & Identity',       desc: 'SSO/OIDC · IAM · TLS/SSL' },
]

const techChips = ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux', 'Ansible', 'Python']

export default function About() {
  return (
    <section id="about" className="section-light overflow-hidden">
      <div className="container">
        <SectionLabel num="01" title="About Me" />

        <div className="fade-in grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_340px] gap-10 md:gap-14 items-start">

          {/* Bio */}
          <div className="space-y-5">
            <div className="space-y-5 text-[0.97rem] text-slate-600 dark:text-slate-300 leading-[1.85] font-sans">
              <p>
                I'm <span className="text-ink dark:text-white font-semibold">Ashraf Mheidat</span> — a{' '}
                <span className="text-green font-semibold">Cloud & DevOps Engineer</span> with hands-on
                experience designing secure, scalable cloud infrastructure on AWS and Alibaba Cloud. I
                specialize in turning complex infrastructure problems into clean, automated, reproducible
                solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map(({ icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700/60 px-4 py-3"
                  >
                    <i className={`${icon} text-green text-sm mt-1`} />
                    <div>
                      <div className="font-mono text-[0.72rem] text-ink dark:text-white font-semibold tracking-wide">{label}</div>
                      <div className="font-mono text-[0.64rem] text-slate-400 dark:text-slate-500 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                <p className="flex items-start gap-2.5">
                  <i className="fas fa-graduation-cap text-green text-sm w-4 text-center mt-0.5 shrink-0" />
                  <span>
                    <span className="text-ink dark:text-white font-semibold">B.Sc. Software Engineering</span>
                    {' · '}Al-Balqa' Applied University{' · '}
                    <span className="font-mono text-[0.82rem] text-slate-400 dark:text-slate-500">Jan 2025</span>
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <i className="fas fa-map-marker-alt text-green text-sm w-4 text-center mt-0.5 shrink-0" />
                  <span>
                    <span className="text-ink dark:text-white font-semibold">Amman, Jordan</span>
                    {' · '}Open to remote, on-site, or relocation.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {techChips.map(t => (
                <span
                  key={t}
                  className="font-mono text-[0.68rem] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-lg hover:border-green/40 hover:text-ink dark:hover:text-white transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => <StatCard key={s.val} {...s} />)}
          </div>

        </div>
      </div>
    </section>
  )
}

function StatCard({ val, sub, accent }) {
  const styles = {
    green:  { text: 'text-green',                          bg: 'bg-green/[0.07] dark:bg-green/[0.10]',         border: 'border-green/20 dark:border-green/25'       },
    ink:    { text: 'text-ink dark:text-[#f1f5f9]',        bg: 'bg-ink/[0.05] dark:bg-white/[0.06]',           border: 'border-ink/10 dark:border-white/10'          },
    orange: { text: 'text-orange-500',                     bg: 'bg-orange-50 dark:bg-orange-500/[0.10]',       border: 'border-orange-200 dark:border-orange-500/25' },
  }
  const c = styles[accent] ?? styles.green
  return (
    <div className={`rounded-2xl ${c.bg} border ${c.border} p-4 hover:scale-[1.02] transition-transform duration-200 cursor-default`}>
      <div className={`font-heading font-black text-[1.75rem] md:text-[1.9rem] ${c.text} leading-none mb-1.5`}>{val}</div>
      <div className="font-mono text-[0.58rem] text-slate-500 dark:text-slate-400 tracking-[0.15em] uppercase leading-snug">{sub}</div>
    </div>
  )
}

export function SectionLabel({ num, title }) {
  return (
    <div className="mb-10 md:mb-16 relative">
      <span
        className="absolute -top-6 -left-2 font-heading font-black leading-none select-none pointer-events-none text-ink/[0.04] dark:text-white/[0.04]"
        style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[0.65rem] text-green tracking-[0.35em] uppercase font-semibold">{num}</span>
          <span className="w-6 h-px bg-green/50" />
        </div>
        <h2 className="font-heading font-black text-[clamp(1.75rem,4vw,3rem)] text-ink dark:text-[#f1f5f9] leading-tight tracking-tight">
          {title}
        </h2>
        <div className="mt-3 w-10 h-[3px] rounded-full bg-green" />
      </div>
    </div>
  )
}
