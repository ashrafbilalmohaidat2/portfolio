import { SectionLabel } from './About'
import TerraformIcon from './TerraformIcon'
import AlibabaCloudIcon from './AlibabaCloudIcon'

const coreSkills = [
  { label: 'Kubernetes',     icon: 'devicon-kubernetes-plain colored', color: '#326CE5' },
  { label: 'Docker',         icon: 'devicon-docker-plain colored',     color: '#2496ED' },
  { label: 'AWS',            icon: 'fab fa-aws',                       color: '#FF9900' },
  { label: 'Alibaba Cloud',  svg: <AlibabaCloudIcon size={18} />,      color: '#FF6A00' },
  { label: 'GitHub Actions', icon: 'fab fa-github',                    color: null      },
  { label: 'Terraform',      svg: <TerraformIcon size={18} />,         color: '#7B42BC' },
  { label: 'Linux',          icon: 'devicon-linux-plain colored',      color: '#FCC624' },
  { label: 'Git',            icon: 'devicon-git-plain colored',        color: '#F05032' },
  { label: 'Bash',           icon: 'devicon-bash-plain colored',       color: '#4EAA25' },
  { label: 'CI/CD',          icon: 'fas fa-code-branch',               color: '#22c55e' },
  { label: 'IaC',            icon: 'fas fa-layer-group',               color: '#7B42BC' },
  { label: 'Python',         icon: 'devicon-python-plain colored',     color: '#3776AB' },
]

const categories = [
  { title: 'Cloud & Infrastructure',    icon: 'fab fa-aws',                  tags: ['EC2','S3','RDS','VPC','IAM','ALB','ASG','ECS','OSS','SLB']        },
  { title: 'Containers & Orchestration',icon: 'devicon-kubernetes-plain',    tags: ['Docker','Kubernetes','Helm','Namespaces','HPA','Ingress','PVCs']   },
  { title: 'Scripting & Dev',           icon: 'fas fa-terminal',             tags: ['Bash','Python','YAML','HCL','ReactJS','JavaScript']                },
  { title: 'Networking & Security',     icon: 'fas fa-network-wired',        tags: ['DNS','TCP/IP','HTTP/S','VPC','Subnetting','IAM','TLS/SSL']         },
]

const learning = [
  { label: 'Ansible',    icon: 'devicon-ansible-plain colored'       },
  { label: 'Prometheus', icon: 'devicon-prometheus-original colored' },
  { label: 'Grafana',    icon: 'fas fa-chart-area'                   },
]

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <SectionLabel num="02" title="Tech Stack" />
        <div className="fade-in space-y-8">

          {/* Core expertise */}
          <div>
            <p className="font-mono text-[0.62rem] text-slate-400 dark:text-slate-500 tracking-[0.3em] uppercase mb-4">Core expertise</p>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map(({ label, icon, svg, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-ink dark:text-[#f1f5f9] bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 hover:border-green/40 dark:hover:border-green/40 hover:bg-green/[0.04] dark:hover:bg-green/[0.08] px-3.5 py-2 rounded-xl transition-all duration-200 cursor-default shadow-sm"
                >
                  {svg
                    ? svg
                    : <i className={`${icon} text-[1rem]`} style={color ? { color } : undefined} />
                  }
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting skills */}
          <div>
            <p className="font-mono text-[0.62rem] text-slate-400 dark:text-slate-500 tracking-[0.3em] uppercase mb-4">Supporting skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {categories.map(({ title, icon, tags }) => (
                <div key={title} className="card p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                      <i className={`${icon} text-[0.75rem] text-green`} />
                    </div>
                    <span className="font-mono text-[0.58rem] text-slate-500 dark:text-slate-400 tracking-[0.1em] uppercase leading-tight">{title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[0.64rem] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-2 py-0.5 rounded-md hover:border-green/30 hover:text-ink dark:hover:text-white transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently deepening */}
          <div className="rounded-2xl border border-amber-200 dark:border-amber-500/25 bg-amber-50 dark:bg-amber-500/[0.07] p-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] text-amber-600 dark:text-amber-400 tracking-[0.2em] uppercase whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-dot" />
              Currently deepening
            </span>
            {learning.map(({ label, icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 bg-white dark:bg-amber-500/[0.08] px-3 py-1 rounded-xl shadow-sm"
              >
                <i className={`${icon} text-sm`} />
                {label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
