import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { SectionLabel } from './About'

const EMAILJS_SERVICE_ID  = 'service_wup2vos'
const EMAILJS_TEMPLATE_ID = 'template_mscbtag'
const EMAILJS_PUBLIC_KEY  = '2byNZ30ssvSXCWsOF'

const contactItems = [
  { icon: 'fas fa-envelope',       label: 'ashrafbilal2002@gmail.com', href: 'mailto:ashrafbilal2002@gmail.com', color: '#22c55e' },
  { icon: 'fas fa-phone',          label: '+962 776 992 782',          href: 'tel:+962776992782',               color: '#22c55e' },
  { icon: 'fab fa-linkedin',       label: 'Ashraf Mheidat',            href: 'https://www.linkedin.com/in/ashraf-mheidat-8471b9294/', color: '#0a66c2' },
  { icon: 'fas fa-map-marker-alt', label: 'Amman, Jordan',             href: null,                              color: '#f97316' },
]

export default function Contact() {
  const [form, setForm]     = useState({ from_name: '', reply_to: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { ...form, to_name: 'Ashraf' }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', reply_to: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-28 px-6 relative z-10 bg-paper dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="09" title="Contact" />

        <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left — info */}
          <div>
            <h3 className="font-heading font-black text-[clamp(1.8rem,4vw,2.4rem)] text-[#0f172a] dark:text-[#f1f5f9] leading-tight mb-4">
              Let's build<br />
              <span className="text-[#22c55e]">something great.</span>
            </h3>
            <p className="font-sans text-[0.96rem] text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Open to Cloud Engineering and DevOps roles.{' '}
              <span className="text-[#0f172a] dark:text-white font-medium">Any location — remote, on-site, or relocation.</span>{' '}
              I respond fast.
            </p>

            <div className="space-y-3">
              {contactItems.map(({ icon, label, href, color }) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                      <i className={`${icon} text-sm`} style={{ color }} />
                    </div>
                    <span className="font-mono text-[0.82rem] text-[#0f172a] dark:text-[#f1f5f9] break-all">{label}</span>
                  </>
                )
                const cls = "flex items-center gap-4 rounded-xl px-4 py-3.5 no-underline transition-all duration-200 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700"
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className={`${cls} cursor-pointer hover:shadow-md`}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '' }}
                  >{inner}</a>
                ) : (
                  <div key={label} className={cls}>{inner}</div>
                )
              })}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { name: 'from_name', label: 'Your Name',  type: 'text',  placeholder: 'John Doe' },
              { name: 'reply_to',  label: 'Email',      type: 'email', placeholder: 'john@company.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block font-mono text-[0.62rem] text-slate-500 dark:text-slate-400 tracking-[0.25em] uppercase mb-2">{label}</label>
                <input
                  type={type} name={name} value={form[name]} onChange={handleChange}
                  placeholder={placeholder} required
                  className="w-full rounded-xl text-[#0f172a] dark:text-[#f1f5f9] font-mono text-[0.85rem] px-4 py-3.5 outline-none transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700"
                  onFocus={e  => { e.target.style.borderColor = '#22c55e60'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.08)' }}
                  onBlur={e   => { e.target.style.borderColor = ''; e.target.style.boxShadow = 'none' }}
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-[0.62rem] text-slate-500 dark:text-slate-400 tracking-[0.25em] uppercase mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about the role or project..." required rows={5}
                className="w-full rounded-xl text-[#0f172a] dark:text-[#f1f5f9] font-mono text-[0.85rem] px-4 py-3.5 outline-none transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600 resize-none bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700"
                onFocus={e  => { e.target.style.borderColor = '#22c55e60'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.08)' }}
                onBlur={e   => { e.target.style.borderColor = ''; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2.5 font-mono font-bold text-[0.82rem] tracking-wide text-white bg-[#0f172a] dark:bg-[#22c55e] dark:text-[#0f172a] hover:bg-[#1e293b] dark:hover:bg-[#16a34a] px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className={`fas ${status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-sm text-[#22c55e] dark:text-[#0f172a]`} />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="rounded-xl border border-[#22c55e]/25 bg-[#22c55e]/[0.06] px-4 py-3 font-mono text-[0.78rem] text-[#16a34a] dark:text-[#4ade80] flex items-center gap-2">
                <i className="fas fa-check-circle" />
                Message sent. I'll get back to you soon!
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-xl border border-red-200 dark:border-red-500/25 bg-red-50 dark:bg-red-500/[0.08] px-4 py-3 font-mono text-[0.78rem] text-red-600 dark:text-red-400 flex items-center gap-2">
                <i className="fas fa-exclamation-circle" />
                Failed to send. Email me directly at ashrafbilal2002@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
