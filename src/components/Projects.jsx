import { SectionLabel } from './About'

const projects = [
  {
    icon: 'devicon-kubernetes-plain colored',
    iconColor: '#326CE5',
    featured: true,
    title: 'MERN Bookstore on Kubernetes with Full CI/CD',
    github: 'https://github.com/ashrafbilalmohaidat2/bookstore-k8s',
    tutorial: 'https://code2tutorial.com/tutorial/e3a13e45-bc6a-42f6-bc04-fbb779dfd2f4/index.md',
    live: null,
    bullets: [
      'Containerized a MERN application using multi-stage Dockerfiles, reducing final image size by separating build and runtime dependencies',
      'Deployed on Kubernetes with Namespaces, Deployments, Services, NGINX Ingress, ConfigMap, Secrets, PVs, and HPA auto-scaling backend 2→5 replicas based on CPU',
      'GitHub Actions CI/CD pipeline with self-hosted runner builds multi-platform images (linux/amd64 + arm64), scans with Trivy, auto-deploys on every push',
    ],
    tags: ['Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD', 'Trivy', 'Multi-Arch', 'HPA'],
  },
  {
    icon: 'fab fa-aws',
    iconColor: '#FF9900',
    title: 'Scalable WordPress on AWS with Terraform',
    github: 'https://github.com/ashrafbilalmohaidat2/Scalable-WordPress-Site-on-AWS-using-Terraform',
    tutorial: 'https://code2tutorial.com/tutorial/b7a73af4-baf5-4c36-b2d8-e6488f5b347a/index.md',
    live: null,
    bullets: [
      'Production-grade 3-tier WordPress on AWS: ALB → Auto Scaling EC2 (private subnets) → RDS MySQL + EFS',
      'EC2 Instance Connect Endpoint eliminated bastion hosts — 90% cost savings while keeping secure SSH access',
      'Terraform IaC: 20+ AWS resources, zero-trust security group segmentation, multi-AZ HA across all tiers',
    ],
    tags: ['AWS', 'Terraform', 'VPC', 'RDS', 'ALB', 'ASG', 'EFS', 'IaC'],
  },
  {
    icon: 'fas fa-rocket',
    iconColor: '#22c55e',
    title: 'CI/CD Automation with GitHub Actions & Docker',
    github: 'https://github.com/ashrafbilalmohaidat2/Automating-Builds-and-Pushes-to-Docker-Hub-with-Github-Actions',
    tutorial: 'https://code2tutorial.com/tutorial/b6995851-c6d8-4e26-a148-2ba3090e7772/index.md',
    live: null,
    bullets: [
      'End-to-end CI/CD pipeline: build, test, push Docker images on every code push',
      'Reduced manual deployment steps by 30%, improved consistency and cut environment errors by 20–25%',
    ],
    tags: ['GitHub Actions', 'Docker', 'Docker Hub', 'CI/CD', 'Automation'],
  },
  {
    icon: 'fab fa-aws',
    iconColor: '#FF9900',
    title: 'Three-Tier Architecture on AWS',
    github: 'https://github.com/ashrafbilalmohaidat2/Multi-Tier-Architecture-on-AWS-Terraform-',
    tutorial: 'https://code2tutorial.com/tutorial/5cf7dea6-89d3-4caa-96df-43f705742fc3/index.md',
    live: null,
    bullets: [
      'Secure 3-tier AWS architecture via Terraform: VPC across 2 AZs, ASG + ALB app tier, RDS with read replica',
      'Automated full provisioning lifecycle — reproducible, fault-tolerant, and version-controlled',
    ],
    tags: ['AWS', 'Terraform', 'VPC', 'RDS', 'ALB', 'ASG', 'IaC'],
  },
]

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="section-light">
      <div className="container">
        <SectionLabel num="03" title="Projects" />
        <div className="fade-in flex flex-col gap-4">
          <FeaturedCard {...featured} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {rest.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkBtn({ href, icon, label }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-white bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-slate-300 px-3 py-1.5 rounded-lg transition-all duration-200 no-underline"
    >
      <i className={`${icon} text-[0.72rem]`} />
      {label}
    </a>
  )
}

function FeaturedCard({ icon, iconColor, title, github, tutorial, live, bullets, tags }) {
  return (
    <div className="card overflow-hidden">
      <div className="h-[3px] bg-green w-full" />

      <div className="p-5 sm:p-7 md:p-8 border-b border-slate-100 dark:border-slate-700/60">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-green-700 dark:text-green-400 bg-green/[0.08] border border-green/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            Featured Project
          </span>
          <div className="flex flex-wrap gap-2">
            <LinkBtn href={github}   icon="fab fa-github"            label="GitHub"   />
            <LinkBtn href={tutorial} icon="fas fa-book"              label="Tutorial" />
            <LinkBtn href={live}     icon="fas fa-external-link-alt" label="Live"     />
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-green/[0.08] border border-green/15 flex items-center justify-center shrink-0">
            <i className={`${icon} text-lg md:text-xl`} style={{ color: iconColor }} />
          </div>
          <h3 className="font-heading font-black text-lg md:text-2xl text-ink dark:text-[#f1f5f9] leading-tight">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 sm:p-7 md:p-8 gap-x-8 gap-y-3 border-b border-slate-100 dark:border-slate-700/60">
        {bullets.map((b, i) => (
          <div key={i} className="flex gap-3 items-start text-[0.88rem] md:text-[0.9rem] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-green" />
            {b}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 p-5 sm:p-7 md:p-8">
        {tags.map(t => (
          <span
            key={t}
            className="font-mono text-[0.64rem] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg px-2.5 py-1 hover:border-green/30 hover:text-ink dark:hover:text-white transition-colors cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ icon, iconColor, title, github, tutorial, live, bullets, tags }) {
  return (
    <div className="card flex flex-col overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/60">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-green/[0.08] border border-green/15 flex items-center justify-center shrink-0">
            <i className={`${icon} text-base`} style={{ color: iconColor }} />
          </div>
          <div className="flex gap-3">
            {github   && <IconLink href={github}   icon="fab fa-github"            />}
            {tutorial && <IconLink href={tutorial} icon="fas fa-book"              />}
            {live     && <IconLink href={live}     icon="fas fa-external-link-alt" />}
          </div>
        </div>
        <h3 className="font-heading font-bold text-[0.98rem] md:text-[1.02rem] text-ink dark:text-[#f1f5f9] leading-snug">{title}</h3>
      </div>

      <div className="px-5 md:px-6 py-5 flex-1 space-y-2.5">
        {bullets.map((b, i) => (
          <div key={i} className="flex gap-2.5 items-start text-[0.86rem] md:text-[0.88rem] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
            <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-green" />
            {b}
          </div>
        ))}
      </div>

      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-700/60">
        {tags.map(t => (
          <span
            key={t}
            className="font-mono text-[0.62rem] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600 rounded-md px-2 py-0.5 hover:text-ink dark:hover:text-white transition-colors cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function IconLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-slate-400 dark:text-slate-500 hover:text-ink dark:hover:text-white transition-colors no-underline text-sm"
    >
      <i className={icon} />
    </a>
  )
}
