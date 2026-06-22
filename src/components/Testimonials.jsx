import { SectionLabel } from './About'

const testimonials = [
  {
    quote: "I had the opportunity to work with a talented Cloud Computing specialist who demonstrated strong skills in cloud technologies, infrastructure management, and problem solving. He has a good understanding of modern cloud platforms and knows how to design scalable and efficient solutions. His ability to learn quickly and adapt to new technologies makes him a valuable member of any technical team. I highly recommend him for any cloud-related projects or roles.",
    name: "Ahmad Bilal",
    relation: "Colleague",
    initials: "AB",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 relative z-10 bg-paper2 dark:bg-[#0a1628] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="08" title="Recommendations" />

        <p className="font-mono text-[0.78rem] text-slate-400 dark:text-slate-500 mb-10 leading-relaxed max-w-xl">
          Personal recommendations from colleagues and mentors who can speak to work ethic, character, and technical growth.
        </p>

        <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map(({ quote, name, relation, initials }) => (
            <div key={name} className="card relative p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#22c55e]" />

              <span className="absolute top-4 left-6 font-heading font-black text-[6rem] leading-none select-none pointer-events-none text-[#22c55e]/[0.06]">
                "
              </span>

              <p className="relative z-10 font-sans text-[0.96rem] text-slate-600 dark:text-slate-300 leading-[1.85] italic mb-8">
                "{quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700/60 pt-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center font-heading font-black text-[#22c55e] text-sm flex-shrink-0 bg-[#22c55e]/[0.08] border border-[#22c55e]/20">
                  {initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-[#0f172a] dark:text-[#f1f5f9] text-[1rem]">{name}</div>
                  <div className="font-mono text-[0.7rem] text-slate-400 dark:text-slate-500">{relation}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Add recommendation card */}
          <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-5 text-center border border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-[#1e293b]">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-2xl font-light border border-dashed border-slate-300 dark:border-slate-600">
              +
            </div>
            <div>
              <p className="font-sans text-[0.9rem] text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mb-1">
                Worked together or know my work?
              </p>
              <p className="font-mono text-[0.72rem] text-slate-400 dark:text-slate-500">A recommendation means a lot.</p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3NvepBeRUKEs03XZDtAq2G0si9VvUIvBfBLGIS5l6CAdPaw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-[#22c55e] bg-[#22c55e]/[0.08] border border-[#22c55e]/25 hover:bg-[#22c55e]/[0.15] hover:border-[#22c55e]/40 px-5 py-2.5 rounded-full transition-all duration-200 no-underline"
            >
              Write a recommendation →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
