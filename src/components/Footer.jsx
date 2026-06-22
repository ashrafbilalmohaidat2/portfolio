const navLinks = [
  { href: '#about',          label: 'About'      },
  { href: '#skills',         label: 'Skills'     },
  { href: '#projects',       label: 'Projects'   },
  { href: '#experience',     label: 'Experience' },
  { href: '#certifications', label: 'Certs'      },
  { href: '#contact',        label: 'Contact'    },
]

const socials = [
  { icon: 'fab fa-github',   href: 'https://github.com/ashrafbilalmohaidat2',                label: 'GitHub',   color: '#f1f5f9' },
  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/ashraf-mheidat-8471b9294/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: 'fab fa-youtube',  href: 'https://www.youtube.com/@devops_unfiltered',             label: 'YouTube',  color: '#ff0000' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a1120] border-t border-white/[0.06]">

      {/* Top section */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand col */}
          <div className="space-y-4">
            <div>
              <p className="font-heading font-black text-white text-xl tracking-tight mb-1">Ashraf Mheidat</p>
              <p className="font-mono text-[0.7rem] text-[#4ade80] tracking-[0.18em] uppercase">Cloud & DevOps Engineer</p>
            </div>
            <p className="font-sans text-[0.85rem] text-slate-400 leading-relaxed max-w-xs">
              Building reliable infrastructure, automating everything that can be automated, and sharing
              knowledge through <span className="text-orange-400 font-medium">DevOps Unfiltered</span>.
            </p>
            <div className="flex items-center gap-2 font-mono text-[0.62rem] text-slate-500 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse-dot" />
              Amman, Jordan · Open to opportunities
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p className="font-mono text-[0.62rem] text-slate-500 tracking-[0.3em] uppercase mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-[0.8rem] text-slate-400 hover:text-[#4ade80] transition-colors duration-200 no-underline flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-slate-700 group-hover:bg-[#22c55e] group-hover:w-5 transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <p className="font-mono text-[0.62rem] text-slate-500 tracking-[0.3em] uppercase mb-5">Connect</p>
            <div className="space-y-3">
              {socials.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group no-underline"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.05] border border-white/[0.08] group-hover:border-white/20 transition-all duration-200">
                    <i className={`${icon} text-sm text-slate-400 group-hover:text-white transition-colors duration-200`} style={{ color: undefined }} />
                  </div>
                  <span className="font-mono text-[0.78rem] text-slate-400 group-hover:text-white transition-colors duration-200">{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-center">
          <p className="font-mono text-[0.62rem] text-slate-600 tracking-wide">
            © {new Date().getFullYear()} Ashraf Mheidat · All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
