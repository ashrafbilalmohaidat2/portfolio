import { ContainerScroll } from '@/components/ui/container-scroll-animation'

export default function WorkShowcase() {
  return (
    <section className="relative z-10 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <span className="font-mono text-xs text-cyan tracking-[0.2em] uppercase">
              Infrastructure as Code · CI/CD · Cloud
            </span>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-6xl text-white leading-tight">
              Shipping reliable
              <br />
              <span className="text-cyan">DevOps pipelines</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-muted max-w-xl mx-auto">
              From containerised workloads to automated infrastructure — built to scale.
            </p>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
          alt="DevOps dashboard"
          className="mx-auto rounded-2xl object-cover h-full w-full object-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
