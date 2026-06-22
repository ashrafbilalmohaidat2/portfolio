import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#about',          label: 'About'           },
  { href: '#skills',         label: 'Skills'          },
  { href: '#projects',       label: 'Projects'        },
  { href: '#experience',     label: 'Experience'      },
  { href: '#brand',          label: 'DevOps Unfiltered', brand: true },
  { href: '#certifications', label: 'Certs'           },
  { href: '#contact',        label: 'Contact'         },
]

export default function Navbar() {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = ''
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id')
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-5 md:px-8">

      <a href="#hero" className="flex items-center shrink-0 text-white">
        <Logo size={44} />
      </a>

      {/* Center pill — desktop only */}
      <div className={`hidden md:flex items-center gap-0.5 rounded-full px-3 py-2 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1e293b]/90 backdrop-blur-xl border border-slate-700 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#1e293b]/70 backdrop-blur-md border border-slate-700/60'
      }`}>
        {links.map(({ href, label, brand }) => {
          if (brand) return (
            <a
              key="brand"
              href={href}
              className={`mx-1 px-3 py-1 rounded-full font-mono text-[0.65rem] tracking-[0.14em] uppercase font-bold no-underline transition-all duration-200 border ${
                active === 'brand'
                  ? 'text-green-400 bg-green/20 border-green/50'
                  : 'text-green-400 bg-green/10 border-green/30 hover:bg-green/20 hover:border-green/50'
              }`}
            >
              {label}
            </a>
          )
          const isActive = active === href.slice(1)
          return (
            <a
              key={href}
              href={href}
              className={`relative px-4 py-1.5 rounded-full font-mono text-[0.68rem] tracking-[0.12em] uppercase transition-all duration-200 no-underline ${
                isActive
                  ? 'bg-green/10 text-green-400 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green" />
              )}
            </a>
          )
        })}
      </div>

      {/* CTA — desktop only */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-wide text-ink bg-green hover:bg-green2 px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md no-underline font-semibold"
      >
        Hire me
      </a>
    </nav>
  )
}
