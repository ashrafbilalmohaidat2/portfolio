import { SectionLabel } from './About'

const platforms = [
  { icon: 'fas fa-globe',    color: '#f97316', name: 'Website',   handle: 'ashrafbilalmohaidat2.github.io/devopsunfiltered', href: 'https://ashrafbilalmohaidat2.github.io/devopsunfiltered/'                          },
  { icon: 'fab fa-instagram',color: '#e1306c', name: 'Instagram', handle: '@devopsunfiltered',            href: 'https://www.instagram.com/devopsunfiltered/?hl=en'             },
  { icon: 'fab fa-youtube',  color: '#ff0000', name: 'YouTube',   handle: 'DevOps Unfiltered',            href: 'https://www.youtube.com/@devops_unfiltered'                    },
  { icon: 'fab fa-linkedin', color: '#0a66c2', name: 'LinkedIn',  handle: 'Ashraf Mheidat',               href: 'https://www.linkedin.com/in/ashraf-mheidat-8471b9294/'        },
]

const tags = ['Arabic', 'DevOps', 'Cloud', 'Docker', 'Kubernetes', 'AWS']

export default function Brand() {
  return (
    <section id="brand" className="section-alt">
      <div className="container">
        <SectionLabel num="06" title="DevOps Unfiltered" />

        <div className="fade-in">
          <div className="card overflow-hidden">
            <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #f97316, #f59e0b)' }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left — description */}
              <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-700/60 flex flex-col gap-6">
                <div>
                  <h3 className="font-heading font-black text-[2.25rem] sm:text-4xl md:text-5xl leading-tight mb-5">
                    <span className="text-ink dark:text-[#f1f5f9]">DevOps</span>
                    <br />
                    <span className="gradient-text-orange">Unfiltered</span>
                  </h3>
                  <p className="font-sans text-[0.96rem] text-slate-600 dark:text-slate-300 leading-[1.85]">
                    A content brand built for{' '}
                    <span className="text-ink dark:text-white font-semibold">Arabic-speaking engineers</span> who want
                    real DevOps knowledge — Docker, Kubernetes, AWS, CI/CD, Terraform, Ansible —
                    without corporate jargon and recycled beginner content.{' '}
                    <span className="text-orange-500 font-medium">Bold, direct, technically honest.</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="font-mono text-[0.68rem] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/[0.10] border border-orange-200 dark:border-orange-500/25 px-3 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="self-start inline-flex items-center gap-2 font-mono text-[0.65rem] text-orange-600 dark:text-orange-400 tracking-[0.15em] uppercase bg-orange-50 dark:bg-orange-500/[0.08] border border-orange-200 dark:border-orange-500/20 rounded-full px-5 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-dot" />
                  Arabic Tech Content · Growing Community
                </span>
              </div>

              {/* Right — social platforms */}
              <div className="p-5 sm:p-8 flex flex-col gap-3">
                <p className="font-mono text-[0.62rem] text-slate-400 dark:text-slate-500 tracking-[0.3em] uppercase mb-1">Find us on</p>
                {platforms.map(({ icon, color, name, handle, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 sm:gap-4 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 no-underline group cursor-pointer transition-all duration-200 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-md"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.background = `${color}08` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = '' }}
                  >
                    <i className={`${icon} text-xl sm:text-2xl shrink-0`} style={{ color }} />
                    <span className="font-heading font-bold text-[1rem] sm:text-[1.05rem] text-ink dark:text-[#f1f5f9]">{name}</span>
                    <span className="hidden sm:block font-mono text-[0.72rem] text-slate-400 dark:text-slate-500 ml-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors truncate max-w-[140px] lg:max-w-none">
                      {handle}
                    </span>
                    <span className="ml-auto sm:ml-0 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">→</span>
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
