import { SectionLabel } from './About'

const platforms = [
  { icon: 'fas fa-globe',     color: '#f97316', name: 'Website',   handle: 'devopsunfiltered.netlify.app', href: 'https://devopsunfiltered.netlify.app/' },
  { icon: 'fab fa-instagram', color: '#e1306c', name: 'Instagram', handle: '@devopsunfiltered',            href: 'https://www.instagram.com/devopsunfiltered/?hl=en' },
  { icon: 'fab fa-youtube',   color: '#ff0000', name: 'YouTube',   handle: 'DevOps Unfiltered',            href: 'https://www.youtube.com/@devops_unfiltered' },
  { icon: 'fab fa-linkedin',  color: '#0a66c2', name: 'LinkedIn',  handle: 'Ashraf Mheidat',               href: 'https://www.linkedin.com/in/ashraf-mheidat-8471b9294/' },
]

export default function Brand() {
  return (
    <section id="brand" className="py-28 px-6 relative z-10 bg-paper2 dark:bg-[#0a1628] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="06" title="DevOps Unfiltered" />

        <div className="fade-in">
          <div className="card overflow-hidden">
            <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #f97316, #f59e0b)' }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="p-8 md:p-12 lg:border-r border-slate-100 dark:border-slate-700/60 flex flex-col gap-8">
                <div>
                  <h3 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-6">
                    <span className="text-[#0f172a] dark:text-[#f1f5f9]">DevOps</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Unfiltered
                    </span>
                  </h3>
                  <p className="font-sans text-[0.96rem] text-slate-600 dark:text-slate-300 leading-[1.85]">
                    A content brand built for{' '}
                    <span className="text-[#0f172a] dark:text-white font-semibold">Arabic-speaking engineers</span> who want
                    real DevOps knowledge — Docker, Kubernetes, AWS, CI/CD, Terraform, Ansible —
                    without corporate jargon and recycled beginner content.{' '}
                    <span className="text-orange-500 font-medium">Bold, direct, technically honest.</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Arabic', 'DevOps', 'Cloud', 'Docker', 'Kubernetes', 'AWS'].map(t => (
                    <span key={t} className="font-mono text-[0.68rem] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/[0.10] border border-orange-200 dark:border-orange-500/25 px-3 py-1 rounded-lg">{t}</span>
                  ))}
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] text-orange-600 dark:text-orange-400 tracking-[0.15em] uppercase bg-orange-50 dark:bg-orange-500/[0.08] border border-orange-200 dark:border-orange-500/20 rounded-full px-5 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-dot" />
                    Arabic Tech Content · Growing Community
                  </span>
                </div>
              </div>

              {/* Right — social platforms */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <p className="font-mono text-[0.62rem] text-slate-400 dark:text-slate-500 tracking-[0.3em] uppercase mb-2">Find us on</p>
                {platforms.map(({ icon, color, name, handle, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl px-5 py-4 no-underline group cursor-pointer transition-all duration-200 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-md"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.background = `${color}08` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = '' }}
                  >
                    <i className={`${icon} text-2xl flex-shrink-0`} style={{ color }} />
                    <span className="font-heading font-bold text-[1.05rem] text-[#0f172a] dark:text-[#f1f5f9]">{name}</span>
                    <span className="font-mono text-[0.72rem] text-slate-400 dark:text-slate-500 ml-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors truncate">{handle}</span>
                    <span className="text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">→</span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
