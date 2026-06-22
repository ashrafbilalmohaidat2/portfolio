import { SectionLabel } from './About'

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-28 px-6 relative z-10 bg-paper dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="05" title="Education" />
        <div className="fade-in">
          <div className="card relative p-8 md:p-10 overflow-hidden group">
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#22c55e] rounded-l-2xl" />

            <span className="absolute -right-4 -bottom-4 font-heading font-black text-[6rem] text-[#0f172a]/[0.04] dark:text-white/[0.04] select-none pointer-events-none leading-none">
              BSc
            </span>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-[#22c55e]/[0.08] border border-[#22c55e]/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-graduation-cap text-3xl text-[#22c55e]" />
              </div>

              <div>
                <div className="font-heading font-black text-[clamp(1.4rem,4vw,1.9rem)] text-[#0f172a] dark:text-[#f1f5f9] mb-1 leading-tight">
                  B.Sc. Software Engineering
                </div>
                <div className="font-mono text-[0.88rem] text-[#22c55e] mb-2">
                  Al-Balqa' Applied University (BAU)
                </div>
                <div className="font-mono text-[0.75rem] text-slate-400 dark:text-slate-500 tracking-wide mb-4">
                  Graduated · January 2025
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Software Engineering', 'Computer Science', 'Algorithms', 'Databases', 'Networks'].map(t => (
                    <span key={t} className="font-mono text-[0.68rem] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 px-3 py-1 rounded-lg">
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
