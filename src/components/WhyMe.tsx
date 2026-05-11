import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhyMeProps {
  onBookCall: () => void;
}

const DIFF_POINTS = [
  { text: 'I can contribute across the data workflow: ingestion, transformation, modeling, and BI.', highlight: false },
  { text: 'My SETRAG internship gave me practical exposure to operational reporting, KPI tracking, and automation.', highlight: false },
  { text: 'I use SQL, dbt, data quality checks, and documentation to keep analytics work maintainable.', highlight: false },
  { text: 'I communicate in French and English and can connect technical work with stakeholder needs.', highlight: true },
  { text: 'I am open to junior, entry-level, graduate, and internship opportunities depending on team needs.', highlight: false },
  { text: 'I learn quickly and document my work so others can review, reuse, and improve it.', highlight: false },
  { text: 'I share my learning through GitHub projects, certifications, and a 6K+ LinkedIn community.', highlight: true },
];

const RESUME_URL = 'https://drive.google.com/file/d/1LJ6laD9ofPpLWuqR_E4IFP4qwAEX-yK9/view';

export function WhyMe({ onBookCall }: WhyMeProps) {
  const section = useScrollReveal();
  const points = useScrollReveal(0.05);
  const cta = useScrollReveal(0.1);

  return (
    <section id="why-me" className="bg-white section-mobile">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-14 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Why Me</p>
          <p className="text-[14px] md:text-base font-semibold text-prussian mb-2">Why I fit junior data roles</p>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            I bring hands-on project work, internship impact, and a clear understanding of how data work supports operational teams.
          </p>
        </div>

        <div className="max-w-3xl">
          {/* Anchor quote */}
          <div ref={points.ref} className={`relative bg-surface rounded-2xl border border-gray-100/80 p-5 md:p-8 mb-8 md:mb-10 reveal-hidden ${points.isVisible ? 'reveal-visible' : ''}`}>
            <p className="text-[17px] md:text-xl font-bold text-prussian leading-relaxed pr-6 md:pr-8">
              "I am early-career, but I think in systems: source data, models, quality checks, dashboards, and the people who use them."
            </p>
          </div>

          {/* Points */}
          <div className="space-y-2.5 md:space-y-3 mb-8 md:mb-10">
            {DIFF_POINTS.map((p, i) => (
              <div
                key={p.text}
                className={`flex items-start gap-3 reveal-hidden ${points.isVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${(i + 1) * 50}ms` }}
              >
                <CheckCircle2 className={`w-[18px] h-[18px] md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${p.highlight ? 'text-accent' : 'text-accent/40'}`} />
                <p className={`text-[14px] md:text-[15px] leading-relaxed ${p.highlight ? 'text-prussian font-medium' : 'text-gray-600'}`}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={cta.ref} className={`reveal-hidden ${cta.isVisible ? 'reveal-visible' : ''}`}>
            <p className="text-[13px] md:text-[14px] text-gray-400 mb-5 leading-relaxed">
              For a quick screen, you can review my resume or book a short intro call.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5">
              <button
                onClick={onBookCall}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 btn-primary text-prussian font-semibold text-[14px] md:text-[15px] rounded-full shadow-xl shadow-accent/15"
              >
                Book an Intro Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 border border-gray-200 text-prussian/75 font-semibold text-[14px] md:text-[15px] rounded-full transition-all duration-200 hover:bg-prussian/[0.02] active:scale-[0.97]"
              >
                View Resume
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const APPROACH_PHASES = [
  {
    phase: 'Discover',
    color: 'bg-blue-500',
    steps: [
      { num: 1, label: 'Understand the business problem', desc: 'Align with stakeholders on goals, constraints, and success criteria.' },
      { num: 2, label: 'Identify data sources', desc: 'Map available systems, APIs, databases, and data quality issues.' },
      { num: 3, label: 'Design the data flow', desc: 'Design the pipeline from source systems to the analytics layer.' },
    ],
  },
  {
    phase: 'Build',
    color: 'bg-accent',
    steps: [
      { num: 4, label: 'Ingest reliably', desc: 'Connect sources with basic error handling and retry logic.' },
      { num: 5, label: 'Transform & model', desc: 'Build staging, fact, dimension, and mart layers with dbt.' },
      { num: 6, label: 'Add quality checks', desc: 'Implement tests for uniqueness, completeness, and freshness.' },
      { num: 7, label: 'Orchestrate workflows', desc: 'Schedule and coordinate workflow steps with Dagster or Airflow.' },
    ],
  },
  {
    phase: 'Deliver',
    color: 'bg-emerald-500',
    steps: [
      { num: 8, label: 'Monitor workflows', desc: 'Monitor pipeline issues before they affect reporting.' },
      { num: 9, label: 'Deliver dashboards', desc: 'Build BI reports that answer real business questions.' },
      { num: 10, label: 'Document & iterate', desc: 'Maintain documentation and improve based on feedback.' },
    ],
  },
];

export function Approach() {
  const section = useScrollReveal();

  return (
    <section className="bg-surface section-mobile">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-14 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Method</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            My project approach
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            I use a practical three-phase structure to understand the problem, build the data workflow, and deliver usable reporting.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {APPROACH_PHASES.map((phase, pi) => (
            <div
              key={phase.phase}
              className={`reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${pi * 100}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-2 h-2 rounded-full ${phase.color}`} />
                <h3 className="text-[13px] md:text-[15px] font-bold text-prussian uppercase tracking-wider">
                  {phase.phase}
                </h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
                {phase.steps.map((step) => (
                  <div
                    key={step.num}
                    className="bg-white rounded-xl border border-gray-100/80 p-4 md:p-5 hover:shadow-md hover:shadow-prussian/5 transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-prussian/[0.06] flex items-center justify-center text-[11px] font-bold text-prussian/60">
                        {step.num}
                      </span>
                      <p className="text-[13px] md:text-[14px] font-semibold text-prussian leading-snug">
                        {step.label}
                      </p>
                    </div>
                    <p className="text-[11px] md:text-[12px] text-gray-400 leading-relaxed pl-8">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
