import { useState } from 'react';
import { ArrowRight, BarChart3, Cloud, TrendingUp, ShoppingCart, Users, Zap, Target, PieChart, Activity, Database, Layers, TestTube } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseStudyDetail from './CaseStudyDetail';

interface CaseStudiesProps {
  onBookCall: () => void;
}

const CASE_STUDIES = [
  {
    icon: BarChart3,
    title: 'CRM Sales Analytics Platform',
    tagline: 'End-to-end B2B CRM analytics \u2014 from raw data to trusted business reporting',
    cover: '/images/case-crm-sales.jpg',
    kpis: [
      { icon: Layers, value: '5 layers', label: 'dbt models' },
      { icon: TestTube, value: 'Tested', label: 'Quality checks' },
      { icon: Target, value: 'Star schema', label: 'BI-ready' },
    ],
    problem: 'Sales teams operated blindly \u2014 no pipeline visibility, no revenue trend analysis, no reliable data source.',
    challenge: 'Disparate CRM data with no unified analytics layer. Built dbt staging, intermediate, fact, dimension and mart models with a star schema for BI.',
    tools: ['Python', 'SQL', 'dbt', 'Snowflake', 'Power BI'],
    output: 'End-to-end CRM analytics platform \u2014 synthetic data generation, Snowflake loading, dbt transformations, star schema design, tested models and Power BI dashboards.',
    value: 'Transformed raw CRM data into a trusted, documented analytics foundation ready for decision-making.',
    proves: 'Full-stack delivery: data engineering \u2192 analytics engineering \u2192 BI.',
  },
  {
    icon: Cloud,
    title: 'Dagster Weather Platform',
    tagline: 'Production-grade data pipeline with full orchestration and observability',
    cover: '/images/case-weather-dagster.jpg',
    kpis: [
      { icon: Activity, value: '24/7', label: 'Automated' },
      { icon: TestTube, value: '100%', label: 'Quality checked' },
      { icon: Database, value: 'Dagster', label: 'Orchestrated' },
    ],
    problem: 'No reliable system for ingesting, cleaning and serving weather data at scale.',
    challenge: 'Designing a production-grade pipeline with orchestration, quality checks and failure monitoring.',
    tools: ['Python', 'Dagster', 'SQL', 'Great Expectations', 'PostgreSQL'],
    output: 'Automated weather data platform with orchestration and observability.',
    value: 'Reliable, monitored and fully documented \u2014 ready for any downstream use case.',
    proves: 'Pipeline architecture, orchestration and data reliability engineering.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Performance Platform',
    tagline: 'From marketing guesswork to data-driven channel attribution',
    cover: '/images/case-marketing-perf.jpg',
    kpis: [
      { icon: PieChart, value: 'Multi-channel', label: 'Attribution' },
      { icon: Target, value: 'ROI', label: 'Tracking' },
      { icon: Users, value: 'Stakeholder', label: 'Ready reports' },
    ],
    problem: 'Marketing spend had zero ROI tracking and no channel attribution \u2014 decisions were guesses.',
    challenge: 'Consolidating messy multi-channel data into one clean, analytics-ready model.',
    tools: ['Python', 'SQL', 'Power BI', 'dbt', 'Excel'],
    output: 'Marketing analytics dashboard with clear channel performance and attribution.',
    value: 'Optimized marketing spend with data-driven channel allocation.',
    proves: 'Analytics engineering with business-aligned data modeling.',
  },
  {
    icon: ShoppingCart,
    title: 'Vehicle E-Commerce Analytics',
    tagline: 'Customer insights that directly influenced product strategy',
    cover: '/images/case-ecommerce-vehicle.jpg',
    kpis: [
      { icon: Users, value: 'Segmented', label: 'Customers' },
      { icon: Zap, value: 'E2E', label: 'Pipeline' },
      { icon: BarChart3, value: 'Sales', label: 'Trends' },
    ],
    problem: 'E-commerce platform had zero insight into customer behavior and sales patterns.',
    challenge: 'Connecting product, customer and transaction data into a unified analytics model.',
    tools: ['Python', 'SQL', 'Power BI', 'dbt', 'Snowflake'],
    output: 'Full e-commerce analytics suite with customer segmentation and sales insights.',
    value: 'Actionable customer insights that directly influenced product strategy.',
    proves: 'End-to-end analytics \u2014 from raw data to strategic business decisions.',
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
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Work</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Selected Case Studies
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-500 leading-relaxed">
            End-to-end data projects that prove I don't just build pipelines \u2014 I deliver systems that create real business value.
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
                        <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-accent" />
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
                          <KpiIcon className="w-3.5 h-3.5 text-accent/60" />
                          <span className="text-[15px] md:text-lg font-bold text-prussian tracking-tight">{kpi.value}</span>
                        </div>
                        <p className="text-[10px] md:text-[11px] text-gray-400 font-medium">{kpi.label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Content */}
                <div className="p-5 md:p-7">
                  <div className="grid sm:grid-cols-3 gap-4 mb-5">
                    <div>
                      <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Output</p>
                      <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{cs.output}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-prussian/50 bg-prussian/[0.03] rounded-md">{t}</span>
                    ))}
                  </div>

                  <div className="p-3.5 md:p-4 bg-accent/[0.04] rounded-xl border border-accent/[0.06]">
                    <p className="text-[12px] md:text-[13px] text-accent font-semibold">{cs.value}</p>
                    <p className="text-[11px] text-prussian/35 mt-0.5">{cs.proves}</p>
                  </div>

                  {/* View details button */}
                  <button
                    onClick={() => setSelectedCase(i)}
                    className="mt-4 group/btn inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-semibold text-prussian/50 hover:text-accent transition-colors"
                  >
                    View full case study
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
          <p className="text-[13px] md:text-[14px] text-gray-400 mb-4">Want to see how I would approach your data challenges?</p>
          <button
            onClick={onBookCall}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 md:px-7 md:py-4 bg-accent hover:bg-accent-hover text-prussian font-semibold text-[14px] md:text-[15px] rounded-full transition-all duration-200 shadow-xl shadow-accent/15 active:scale-[0.97] md:hover:scale-[1.02]"
          >
            Let's Discuss Your Data Needs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
