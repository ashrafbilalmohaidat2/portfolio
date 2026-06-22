import { SectionLabel } from './About'
import AlibabaCloudIcon from './AlibabaCloudIcon'

const certs = [
  { provider: 'Amazon Web Services', name: 'Certified Cloud Practitioner',      icon: 'fab fa-aws', iconColor: '#FF9900', type: 'Certification', href: 'https://www.coursera.org/account/accomplishments/verify/6G7AFBBFNMPB' },
  { provider: 'Amazon Web Services', name: 'Getting Started with Networking',    icon: 'fab fa-aws', iconColor: '#FF9900', type: 'Badge',         href: 'https://www.credly.com/badges/b7f59c52-2924-47a8-ba44-4f4a5ab4dfc8' },
  { provider: 'Amazon Web Services', name: 'Getting Started with Security',      icon: 'fab fa-aws', iconColor: '#FF9900', type: 'Badge',         href: 'https://www.credly.com/badges/f2ed66f3-1ea8-47ff-8b9e-4056d84d7139' },
  { provider: 'Amazon Web Services', name: 'Getting Started with Serverless',    icon: 'fab fa-aws', iconColor: '#FF9900', type: 'Badge',         href: 'https://www.credly.com/badges/fa59d8bf-4a67-4921-bd9e-a3f73a54e8e1' },
  { provider: 'Amazon Web Services', name: 'Introduction to Cloud 101',          icon: 'fab fa-aws', iconColor: '#FF9900', type: 'Badge',         href: 'https://www.credly.com/badges/e93db760-95da-40d2-8afb-371f7a7a1e3a' },
  { provider: 'Alibaba Cloud',       name: 'DevOps Certified',                   svgIcon: true,      type: 'Certification', href: 'https://drive.google.com/file/d/1OOZQYN0xpH8jCOZiAazO6czx78GjDNsY/view' },
  { provider: 'Alibaba Cloud',       name: 'Associate – Cloud Engineer (ACA)',   svgIcon: true,      type: 'Certification', href: 'https://drive.google.com/file/d/1unkcRq9CBhyzRDfZnbqfImSOH67607_z/view' },
  { provider: 'Alibaba Cloud',       name: 'Associate – Business User (ACA)',    svgIcon: true,      type: 'Certification', href: 'https://drive.google.com/file/d/1gIVyDFFfAkQVWIKm9KvsIxSkw7RI-B1V/view' },
  { provider: 'Alibaba Cloud',       name: 'ECS Fundamentals',                   svgIcon: true,      type: 'Badge',         href: 'https://www.linkedin.com/posts/ashraf-mheidat-8471b9294_cloudabrcomputing-alibabaabrcloud-storage-activity-7299455573496922112-KHWj' },
  { provider: 'Alibaba Cloud',       name: 'ApsaraDB RDS / SLB / OSS / VPC',   svgIcon: true,      type: 'Badge',         href: 'https://www.linkedin.com/posts/ashraf-mheidat-8471b9294_cloudabrcomputing-alibabaabrcloud-storage-activity-7299455573496922112-KHWj' },
]

export default function Certifications() {
  const awsCerts    = certs.filter(c => c.provider === 'Amazon Web Services')
  const alibabaCerts = certs.filter(c => c.provider === 'Alibaba Cloud')

  return (
    <section id="certifications" className="section-light">
      <div className="container">
        <SectionLabel num="07" title="Certifications & Badges" />
        <div className="fade-in space-y-6">
          <ProviderGroup label="Amazon Web Services" icon="fab fa-aws" iconColor="#FF9900" color="#FF9900" certs={awsCerts} />
          <ProviderGroup label="Alibaba Cloud" svgIcon={<AlibabaCloudIcon size={18} />} color="#FF6A00" certs={alibabaCerts} />
        </div>
      </div>
    </section>
  )
}

function ProviderGroup({ label, icon, svgIcon, iconColor, color, certs }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/40">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
          {svgIcon ? svgIcon : <i className={`${icon} text-lg`} style={{ color: iconColor }} />}
        </div>
        <span className="font-mono text-[0.72rem] text-ink dark:text-[#f1f5f9] tracking-[0.15em] uppercase font-semibold">{label}</span>
        <span className="ml-auto font-mono text-[0.62rem] text-slate-400 dark:text-slate-500 shrink-0">{certs.length} credentials</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 sm:p-4">
        {certs.map(({ name, type, href, icon: ic, iconColor: icColor, svgIcon: sv }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col gap-3 rounded-xl p-4 no-underline cursor-pointer transition-all duration-200 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 hover:border-green/30 dark:hover:border-green/35 hover:shadow-md group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="text-xl shrink-0">
                {sv ? <AlibabaCloudIcon /> : <i className={ic} style={{ color: icColor }} />}
              </div>
              <span
                className="font-mono text-[0.58rem] tracking-widest uppercase rounded-full px-2.5 py-0.5 shrink-0"
                style={
                  type === 'Certification'
                    ? { color: '#16a34a', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }
                    : { color: '#64748b', background: 'rgba(100,116,139,0.08)', border: '1px solid rgba(100,116,139,0.2)' }
                }
              >
                {type}
              </span>
            </div>

            <p className="font-sans text-[0.85rem] text-ink dark:text-[#f1f5f9] font-medium leading-snug flex-1">{name}</p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60">
              <span className="flex items-center gap-1.5 font-mono text-[0.6rem] text-green">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                Verified
              </span>
              <span className="font-mono text-[0.6rem] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex items-center gap-1">
                <i className="fas fa-external-link-alt text-[0.5rem]" />
                View
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
