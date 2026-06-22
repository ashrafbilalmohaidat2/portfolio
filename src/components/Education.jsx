import { SectionLabel } from './About'

const topics = ['Software Engineering', 'Computer Science', 'Algorithms', 'Databases', 'Networks']

export default function Education() {
  return (
    <section id="education" className="section-light">
      <div className="container">
        <SectionLabel num="05" title="Education" />
        <div className="fade-in">
          <div className="card relative p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-green rounded-l-2xl" />

            <span className="absolute -right-4 -bottom-4 font-heading font-black text-[6rem] text-ink/[0.04] dark:text-white/[0.04] select-none pointer-events-none leading-none">
              BSc
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-green/[0.08] border border-green/20 flex items-center justify-center shrink-0">
                <i className="fas fa-graduation-cap text-2xl sm:text-3xl text-green" />
              </div>

              <div>
                <div className="font-heading font-black text-[clamp(1.3rem,3.5vw,1.9rem)] text-ink dark:text-[#f1f5f9] mb-1 leading-tight">
                  B.Sc. Software Engineering
                </div>
                <div className="font-mono text-[0.88rem] text-green mb-1.5">
                  Al-Balqa' Applied University (BAU)
                </div>
                <div className="font-mono text-[0.75rem] text-slate-400 dark:text-slate-500 tracking-wide mb-4">
                  Graduated · January 2025
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[0.68rem] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 px-3 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
