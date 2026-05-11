import { Database, Layers, BarChart3, Workflow, TestTube, GitBranch, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import renderTechnologyIcon from '../lib/technologyCatalog';

interface ServicesProps {
  onBookCall?: () => void;
}

const SERVICES = [
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'I can support ELT pipelines that connect data sources, automate recurring workflows, and prepare clean data for analysis.',
    bullets: [
      'ELT/ETL pipeline design',
      'Multi-source integration',
      'Workflow orchestration',
      'Clean handoff to analytics',
    ],
    tools: [
      'Airbyte', // Ingestion layer
      'Python', // Processing layer
      'Dagster', // Orchestration layer
      'Snowflake', // Storage layer
    ],
    value: 'Focus: maintainable pipelines and clear analytics handoffs.',
  },
  {
    icon: Layers,
    title: 'Analytics Engineering',
    desc: 'I model raw data into documented, tested SQL and dbt layers that analysts and BI tools can use.',
    bullets: [
      'SQL transformation design',
      'dbt models and testing',
      'Documentation & lineage',
      'Dimensional modeling',
    ],
    tools: [
      'dbt', // Transformation layer
      'SQL', // Modeling layer
      'Snowflake', // Warehouse layer
      'Soda', // Testing layer
    ],
    value: 'Focus: tested models, documentation, and clear lineage.',
  },
  {
    icon: BarChart3,
    title: 'BI & Dashboards',
    desc: 'I build Power BI and Metabase dashboards that help teams monitor KPIs and reduce manual reporting effort.',
    bullets: [
      'KPI dashboard design',
      'Interactive reporting',
      'Role-specific views',
      'Automated reporting flows',
    ],
    tools: [
      'Power BI', // Visualization layer
      'Metabase', // Self-service analytics layer
    ],
    value: 'Focus: clear KPIs and stakeholder-friendly reporting.',
  },
];

const STACK_GROUPS = [
  { title: 'Build Pipelines', desc: 'Ingest & connect', tools: ['Python', 'SQL', 'Airbyte', 'dlt'], icon: Database },
  { title: 'Model Data', desc: 'Transform & document', tools: ['dbt', 'Snowflake'], icon: Layers },
  { title: 'Orchestrate', desc: 'Schedule & automate', tools: ['Dagster'], icon: Workflow },
  { title: 'Ensure Quality', desc: 'Test & validate', tools: ['Great Expectations', 'Soda'], icon: TestTube },
  { title: 'Deliver Insights', desc: 'Visualize & decide', tools: ['Power BI', 'Metabase'], icon: BarChart3 },
  { title: 'Ship Reliably', desc: 'Version & deploy', tools: ['Git', 'GitHub Actions', 'Docker'], icon: GitBranch },
];

export function Services({ onBookCall }: ServicesProps) {
  const section = useScrollReveal();

  return (
    <section className="bg-surface section-mobile">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-14 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Capabilities</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Where I can contribute
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            Practical areas where I can support a junior or early-career data role.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-2xl border border-gray-100/80 p-5 md:p-7 card-lift flex flex-col">
                <div>
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-[16px] md:text-lg font-bold text-prussian">{s.title}</h3>
                      <p className="text-[12px] md:text-[13px] text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[12px] md:text-[13px] text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-accent/50 mt-[6px] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-50 mb-3">
                    {s.tools.map((t) => (
                      <span key={t} className="inline-flex items-center gap-2 px-2 py-1 text-[10px] md:text-[11px] font-medium text-prussian/45 bg-prussian/[0.03] rounded">
                        <span className="w-4 h-4">{renderTechnologyIcon(t, { className: 'w-4 h-4' })}</span>
                        <span className="truncate max-w-[6rem]">{t}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] text-accent font-semibold">{s.value}</p>
                </div>

                {/* Learn more CTA */}
                {onBookCall && (
                  <div className="mt-4 pt-3 border-t border-gray-50">
                    <button
                      onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-semibold text-prussian/40 hover:text-accent transition-colors"
                    >
                      See related work
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const section = useScrollReveal();

  return (
    <section id="stack" className="bg-prussian section-mobile relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-5 md:px-8 relative z-10">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-14 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Stack</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-white tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Tools I work with
          </h2>
          <p className="text-[14px] md:text-base text-white/40 leading-relaxed">
            Tools I use across internship work, portfolio projects, and hands-on practice for ingestion, modeling, orchestration, BI, quality, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {STACK_GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className={`group bg-card-dark/50 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-4 md:p-6 transition-all duration-300 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-2.5 md:gap-3 mb-3">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] md:text-sm font-semibold text-white truncate">{g.title}</h3>
                    <p className="text-[10px] md:text-[11px] text-white/25">{g.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.tools.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 px-2 py-1 text-[11px] md:text-[12px] font-medium text-white/75 bg-white/[0.04] rounded-md">
                      <span className="w-4 h-4">{renderTechnologyIcon(t, { className: 'w-4 h-4' })}</span>
                      <span className="truncate max-w-[8rem]">{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
