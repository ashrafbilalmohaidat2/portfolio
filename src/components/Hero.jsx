import {
  SiDocker, SiKubernetes, SiGithub, SiPython,
  SiAnsible, SiPrometheus, SiGrafana, SiGnubash,
  SiLinux, SiTerraform,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const floatingIcons = [
  { Icon: SiDocker,     color: '#2496ED', style: { top: '14%',   left: '6%'   }, delay: 0   },
  { Icon: SiKubernetes, color: '#326CE5', style: { top: '20%',   right: '8%'  }, delay: 0.3 },
  { Icon: FaAws,        color: '#FF9900', style: { top: '72%',   left: '8%'   }, delay: 0.6 },
  { Icon: SiTerraform,  color: '#7B42BC', style: { bottom:'14%', right: '8%'  }, delay: 0.9 },
  { Icon: SiGithub,     color: null,      style: { top: '8%',    left: '30%'  }, delay: 0.2 },
  { Icon: SiLinux,      color: '#e2a800', style: { bottom:'12%', left: '26%'  }, delay: 0.5 },
  { Icon: SiPython,     color: '#3776AB', style: { top: '44%',   left: '4%'   }, delay: 0.4 },
  { Icon: SiAnsible,    color: '#EE0000', style: { top: '50%',   right: '5%'  }, delay: 0.7 },
  { Icon: SiPrometheus, color: '#E6522C', style: { top: '60%',   left: '5%'   }, delay: 1.0 },
  { Icon: SiGrafana,    color: '#F46800', style: { top: '6%',    left: '54%'  }, delay: 0.8 },
  { Icon: SiGnubash,    color: '#4EAA25', style: { top: '28%',   right: '18%' }, delay: 1.1 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-paper dark:bg-[#0f172a] transition-colors duration-300"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 20%, rgba(34,197,94,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(34,197,94,0.05) 0%, transparent 60%)' }}
      />

      {/* Floating tech icons — large screens only */}
      {floatingIcons.map(({ Icon, color, style, delay }, i) => (
        <div
          key={i}
          className="absolute animate-float hidden lg:flex"
          style={{ ...style, animationDelay: `${delay}s`, animationDuration: `${5 + (i % 3)}s` }}
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            <Icon
              size={22}
              style={color ? { color } : undefined}
              className={!color ? 'text-[#0f172a] dark:text-[#f1f5f9]' : ''}
            />
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-24 md:pb-20">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 font-mono text-[0.62rem] sm:text-[0.7rem] tracking-[0.1em] sm:tracking-[0.18em] uppercase text-green-700 dark:text-green-400 bg-green/[0.09] dark:bg-green/[0.12] border border-green/25 rounded-full px-4 sm:px-5 py-2 mb-8 md:mb-10">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot shrink-0" />
          Available for opportunities worldwide
        </div>

        {/* Name */}
        <h1
          className="font-heading font-black leading-[0.88] tracking-tight text-ink dark:text-[#f1f5f9] mb-5 md:mb-6 select-none"
          style={{ fontSize: 'clamp(3.2rem, 11vw, 10rem)' }}
        >
          ASHRAF
          <br />
          <span className="hero-outline">MHEIDAT</span>
        </h1>

        {/* Role */}
        <div className="font-mono text-[clamp(0.85rem,1.8vw,1.1rem)] text-slate-500 dark:text-slate-400 mb-5 md:mb-6 flex items-center gap-2">
          <span className="text-green font-bold">$</span>
          <span className="text-ink dark:text-[#f1f5f9] font-semibold">DevOps Engineer</span>
        </div>

        <div className="w-16 h-[3px] rounded-full bg-green mb-5 md:mb-7" />

        {/* Description */}
        <p className="font-sans text-[clamp(0.93rem,1.6vw,1.05rem)] text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8 md:mb-10">
          I build the infrastructure that keeps software alive — automating deployments,
          hardening pipelines, and turning manual ops into code. From Kubernetes clusters
          to cloud-native architectures, I make sure things run{' '}
          <span className="text-green font-semibold">fast, reliably, and at scale</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 font-mono font-semibold text-[0.82rem] tracking-wide text-white bg-ink dark:bg-green dark:text-ink hover:bg-[#1e293b] dark:hover:bg-green2 px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg no-underline"
          >
            <i className="fas fa-paper-plane text-xs text-green dark:text-ink" />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 font-mono text-[0.82rem] tracking-wide text-ink dark:text-[#f1f5f9] bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-[#283548] border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 no-underline shadow-sm"
          >
            <i className="fas fa-code-branch text-xs text-green" />
            View Projects
          </a>
          <a
            href="https://github.com/ashrafbilalmohaidat2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-[0.82rem] tracking-wide text-ink dark:text-[#f1f5f9] bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-[#283548] border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 no-underline shadow-sm"
          >
            <i className="fab fa-github text-sm" />
            GitHub
          </a>
        </div>

      </div>

      {/* Scroll hint — hidden on mobile (bottom nav is there) */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-float"
        style={{ animationDuration: '2.5s' }}
      >
        <span className="font-mono text-[0.58rem] text-slate-400 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 dark:from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
