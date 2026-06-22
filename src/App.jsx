import { useEffect, useState } from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Experience    from './components/Experience'
import Education     from './components/Education'
import Brand         from './components/Brand'
import Certifications from './components/Certifications'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import BottomNavBar  from './components/ui/bottom-nav-bar'

export default function App() {
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0f172a]">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-none"
        style={{ width: `${scrollPct}%`, background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
      />

      <Navbar />

      <main className="relative z-10 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Brand />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <div className="md:hidden">
        <BottomNavBar stickyBottom />
      </div>
    </div>
  )
}
