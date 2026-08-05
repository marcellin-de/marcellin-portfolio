import { useState } from 'react';
import { ArrowRight, BarChart3, Cloud, TrendingUp, ShoppingCart, Users, Zap, Target, PieChart, Activity, Database, Layers, TestTube, Star, GitFork, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseStudyDetail from './CaseStudyDetail';

interface CaseStudiesProps {
  onBookCall: () => void;
}

const CASE_STUDIES = [
  {
    icon: BarChart3,
    title: 'CRM Sales Analytics Platform',
    tagline: 'Portfolio analytics engineering project using Snowflake, dbt, SQL, Python, and Power BI to model CRM data and deliver sales reporting.',
    cover: '/images/case-crm-sales.webp',
    repo: {
      name: 'crm-sales-analytics-platform',
      url: 'https://github.com/marcellin-de/crm-sales-analytics-platform',
      stars: 1,
      forks: 0,
      language: 'Python',
      updatedAt: '2026-04-27',
    },
    kpis: [
      { icon: Layers, value: '5 layers', label: 'dbt models' },
      { icon: TestTube, value: 'Tested', label: 'Data quality' },
      { icon: Target, value: 'Star schema', label: 'BI model' },
    ],
    problem: 'Sales teams need clear pipeline, activity, and revenue metrics, but CRM data often becomes difficult to analyze when it is split across sources.',
    challenge: 'Building a clean analytics layer with staged dbt models, quality tests, and a star schema designed for BI reporting.',
    tools: ['Python', 'SQL', 'dbt', 'Snowflake', 'Power BI', 'Data Modeling'],
    output: 'Synthetic CRM data generation, Snowflake loading, dbt transformations, documented marts, and Power BI dashboards.',
    value: 'Shows my ability to connect data engineering, analytics modeling, and BI delivery in one workflow.',
    proves: 'Data engineering, analytics engineering, and BI delivery.',
  },
  {
    icon: Cloud,
    title: 'Dagster Weather Platform',
    tagline: 'Portfolio data platform for hourly weather data with Python ingestion, Dagster orchestration, Great Expectations validation, and run monitoring.',
    cover: '/images/case-weather-dagster.webp',
    repo: {
      name: 'dagster-weather-platform',
      url: 'https://github.com/marcellin-de/dagster-weather-platform',
      stars: 1,
      forks: 0,
      language: 'Python',
      updatedAt: '2026-03-05',
    },
    kpis: [
      { icon: Activity, value: 'Scheduled', label: 'Pipeline' },
      { icon: TestTube, value: 'Validated', label: 'Data quality' },
      { icon: Database, value: 'Dagster', label: 'Orchestration' },
    ],
    problem: 'Weather data needs repeatable ingestion, validation, and monitoring before it can be used reliably downstream.',
    challenge: 'Designing an automated workflow with clear dependencies, validation steps, and failure visibility.',
    tools: ['Python', 'Dagster', 'dbt', 'dlt', 'Great Expectations', 'SQL'],
    output: 'Orchestrated weather pipeline with validation, storage, and run monitoring.',
    value: 'Shows practical pipeline design with orchestration, validation, and monitoring.',
    proves: 'Pipeline architecture, orchestration, and validation.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Performance Platform',
    tagline: 'Analytics project using Maven Fuzzy Factory e-commerce data, dlt, dbt, Dagster, Snowflake, and Metabase to analyze marketing KPIs.',
    cover: '/images/case-marketing-perf.webp',
    repo: {
      name: 'marketing-performance-analysis',
      url: 'https://github.com/marcellin-de/marketing-performance-analysis',
      stars: 1,
      forks: 0,
      language: 'Python',
      updatedAt: '2026-02-08',
    },
    kpis: [
      { icon: PieChart, value: 'Attribution', label: 'Channel logic' },
      { icon: Target, value: 'ROI', label: 'Tracking' },
      { icon: Users, value: 'Metabase', label: 'Dashboards' },
    ],
    problem: 'Marketing teams need consistent campaign, session, and conversion metrics before they can compare ROI across channels.',
    challenge: 'Modeling multi-channel data into a clean analytics layer for attribution, conversion, and reporting analysis.',
    tools: ['Python', 'Snowflake', 'dbt', 'dlt', 'Dagster', 'Metabase'],
    output: 'Marketing reporting model and Metabase dashboards for channel performance, ROI tracking, and conversion trends.',
    value: 'Shows how I translate business questions into modeled metrics and BI-ready reporting.',
    proves: 'Analytics engineering, KPI design, and BI communication.',
  },
  {
    icon: ShoppingCart,
    title: 'Vehicle E-Commerce Analytics',
    tagline: 'End-to-end vehicle e-commerce analytics project using ingestion, dbt modeling, data quality checks, Snowflake, and BI reporting patterns.',
    cover: '/images/case-ecommerce-vehicle.webp',
    repo: {
      name: 'vehicle-ecommerce-analytics',
      url: 'https://github.com/marcellin-de/vehicle-ecommerce-analytics',
      stars: 1,
      forks: 0,
      language: 'Python',
      updatedAt: '2026-02-06',
    },
    kpis: [
      { icon: Users, value: 'Customer', label: 'Segments' },
      { icon: Zap, value: 'End-to-end', label: 'Pipeline' },
      { icon: BarChart3, value: 'Sales', label: 'Trends' },
    ],
    problem: 'Vehicle marketplace data needs structured product, customer, and transaction models before teams can analyze behavior and sales trends.',
    challenge: 'Connecting product, customer, and transaction entities into a unified analytics model.',
    tools: ['Python', 'Airbyte', 'Dagster', 'dbt', 'Elementary', 'Snowflake'],
    output: 'Analytics workflow with customer segmentation, sales trend analysis, and dashboard-ready models.',
    value: 'Shows practical modeling for product, sales, and customer analytics.',
    proves: 'End-to-end analytics workflow with maintainable project structure.',
  },
];

export default function CaseStudies({ onBookCall }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const header = useScrollReveal();
  const cards = useScrollReveal(0.02);
  const cta = useScrollReveal();

  return (
    <>
      <CaseStudyDetail caseStudy={selectedCase} onClose={() => setSelectedCase(null)} onBookCall={onBookCall} />
      <section id="case-studies" className="bg-white section-mobile">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8">
          {/* Header */}
          <div
            ref={header.ref}
            className={`max-w-2xl mb-10 md:mb-16 reveal-hidden ${header.isVisible ? 'reveal-visible' : ''}`}
          >
            <p className="text-[11px] md:text-[13px] font-semibold text-[#d88700] uppercase tracking-widest mb-2 md:mb-3">Work</p>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
              Selected Case Studies
            </h2>
            <p className="text-[15px] md:text-[17px] text-gray-500 leading-relaxed">
              Portfolio projects showing how I approach ingestion, modeling, quality checks, orchestration, and BI. Each project includes code on GitHub.
            </p>
          </div>

          {/* Cards */}
          <div ref={cards.ref} className="space-y-5">
            {CASE_STUDIES.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <div
                  key={cs.title}
                  className={`group rounded-2xl md:rounded-3xl border border-gray-100/80 overflow-hidden bg-white card-lift reveal-hidden ${cards.isVisible ? 'reveal-visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Cover Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={cs.cover}
                      alt={`${cs.title} visualization`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-prussian-dark/90 via-prussian/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#d88700]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-semibold text-white/50 uppercase tracking-wider">Case Study</span>
                      </div>
                      <h3 className="text-[20px] md:text-2xl font-bold text-white leading-tight">{cs.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-white/60 mt-1">{cs.tagline}</p>
                    </div>
                  </div>

                  {/* KPI Bar */}
                  <div className="grid grid-cols-3 divide-x divide-gray-50 border-b border-gray-100/80 bg-surface/50">
                    {cs.kpis.map((kpi) => {
                      const KpiIcon = kpi.icon;
                      return (
                        <div key={kpi.label} className="px-4 py-3.5 md:px-6 md:py-4 text-center">
                          <div className="flex items-center justify-center gap-1.5 mb-1">
                            <KpiIcon className="w-3.5 h-3.5 text-[#d88700]/60" />
                            <span className="text-[15px] md:text-lg font-bold text-prussian tracking-tight">{kpi.value}</span>
                          </div>
                          <p className="text-[10px] md:text-[11px] text-gray-500 font-medium">{kpi.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] text-prussian/45">
                      <a
                        href={cs.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[#d88700] transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {cs.repo.name}
                      </a>
                      <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" /> {cs.repo.stars}</span>
                      <span className="inline-flex items-center gap-1"><GitFork className="w-3 h-3" /> {cs.repo.forks}</span>
                      <span>{cs.repo.language}</span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mb-5">
                      <div>
                        <p className="text-[10px] md:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Problem</p>
                        <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                        <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Output</p>
                        <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.output}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-prussian/50 bg-prussian/[0.03] rounded-md">{t}</span>
                      ))}
                    </div>

                    <div className="p-3.5 md:p-4 bg-accent/[0.04] rounded-xl border border-accent/[0.06]">
                      <p className="text-[12px] md:text-[13px] text-[#d88700] font-semibold">{cs.value}</p>
                      <p className="text-[11px] text-prussian/35 mt-0.5">{cs.proves}</p>
                    </div>

                    {/* View details button */}
                    <button
                      onClick={() => setSelectedCase(i)}
                      className="mt-4 group/btn inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-semibold text-prussian/50 hover:text-[#d88700] transition-colors"
                    >
                      Open full case study
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            ref={cta.ref}
            className={`mt-10 md:mt-16 text-center reveal-hidden ${cta.isVisible ? 'reveal-visible' : ''}`}
          >
            <p className="text-[13px] md:text-[14px] text-gray-500 mb-4">Interested in how these projects match your data team needs?</p>
            <button
              onClick={onBookCall}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 md:px-7 md:py-4 bg-accent hover:bg-accent-hover text-prussian font-semibold text-[14px] md:text-[15px] rounded-full transition-all duration-200 shadow-xl shadow-accent/15 active:scale-[0.97] md:hover:scale-[1.02]"
            >
              Book an Intro Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
