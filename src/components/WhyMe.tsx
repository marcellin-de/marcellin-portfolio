import { ArrowRight, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhyMeProps {
  onBookCall: () => void;
}

const DIFF_POINTS = [
  { text: 'I build end-to-end data systems — from ingestion to dashboard — not isolated components', highlight: false },
  { text: 'I combine data engineering, analytics engineering and BI into one cohesive skill set', highlight: false },
  { text: 'Reliability, quality and documentation are built into my process — not afterthoughts', highlight: false },
  { text: 'I speak both technical and business — I translate data work into stakeholder value', highlight: true },
  { text: 'Already delivered measurable impact at SETRAG: 70% time reduction, 50+ users served', highlight: false },
  { text: 'I learn fast, communicate clearly and structure every project with rigor', highlight: false },
  { text: 'I treat data as a product — not just a pipeline output', highlight: true },
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
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            What I bring that others don't
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            Most data professionals specialize in one layer. I build the full system — and I make sure it actually works for the business.
          </p>
        </div>

        <div className="max-w-3xl">
          {/* Anchor quote */}
          <div ref={points.ref} className={`relative bg-surface rounded-2xl border border-gray-100/80 p-5 md:p-8 mb-8 md:mb-10 reveal-hidden ${points.isVisible ? 'reveal-visible' : ''}`}>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent/30 absolute top-4 right-4 md:top-6 md:right-6" />
            <p className="text-[17px] md:text-xl font-bold text-prussian leading-relaxed pr-6 md:pr-8">
              "I don't just build dashboards.
              <br className="hidden sm:block" />
              I build the data foundations
              <br className="hidden sm:block" />
              <span className="text-gradient">that make dashboards trustworthy.</span>"
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
              If this sounds like the kind of data profile your team needs, let's talk — or review my resume for a quick overview.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5">
              <button
                onClick={onBookCall}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 btn-primary text-prussian font-semibold text-[14px] md:text-[15px] rounded-full shadow-xl shadow-accent/15"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 border border-gray-200 text-prussian/75 font-semibold text-[14px] md:text-[15px] rounded-full transition-all duration-200 hover:bg-prussian/[0.02] active:scale-[0.97]"
              >
                Open Resume
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
      { num: 1, label: 'Understand the business problem', desc: 'Align with stakeholders on goals, constraints and success criteria.' },
      { num: 2, label: 'Identify data sources', desc: 'Map available systems, APIs, databases and data quality.' },
      { num: 3, label: 'Design the data flow', desc: 'Architect the pipeline from source to analytics layer.' },
    ],
  },
  {
    phase: 'Build',
    color: 'bg-accent',
    steps: [
      { num: 4, label: 'Ingest reliably', desc: 'Connect sources with error handling and retry logic.' },
      { num: 5, label: 'Transform & model', desc: 'Build staging, fact, dimension and mart layers with dbt.' },
      { num: 6, label: 'Add quality checks', desc: 'Implement tests for uniqueness, completeness and freshness.' },
      { num: 7, label: 'Orchestrate workflows', desc: 'Schedule and coordinate every step with Dagster or Airflow.' },
    ],
  },
  {
    phase: 'Deliver',
    color: 'bg-emerald-500',
    steps: [
      { num: 8, label: 'Monitor failures', desc: 'Alert on pipeline issues before stakeholders notice.' },
      { num: 9, label: 'Deliver dashboards', desc: 'Build BI layers that answer real business questions.' },
      { num: 10, label: 'Document & iterate', desc: 'Maintain data dictionaries and improve based on feedback.' },
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
            My data engineering approach
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            Every project follows a proven three-phase structure — from discovery to production.
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
