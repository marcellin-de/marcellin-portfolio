import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionProps {
  onBookCall: () => void;
}

const LINKEDIN_URL = 'https://www.linkedin.com/in/marcellindjambo';
const GITHUB_URL = 'https://github.com/marcellin-de';
export function About({ onBookCall: _onBookCall }: SectionProps) {
  const section = useScrollReveal();

  return (
    <section className="bg-surface section-mobile">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <div ref={section.ref} className={`max-w-2xl reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">About Me</p>
          <div className="space-y-4 text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
            <p>
              <span className="text-prussian font-semibold">I am Marcellin DJAMBO</span>, an early-career Data & Analytics Engineer based in Tunis, Tunisia. My focus is practical: building data pipelines, models, and dashboards that make reporting easier to use and trust.
            </p>
            <p>
              At SETRAG, I worked as a Data Analyst Intern from March 2025 to June 2025. I helped automate KPI tracking and recurring reporting for operational teams, contributing to a reduction of up to 70% in manual reporting time.
            </p>
            <p>
              I hold a Bachelor's Degree in Big Data and Data Analytics, and I am currently pursuing a Professional Master's in AI Engineering at Université Centrale Tunisie. My portfolio projects use Python, SQL, dbt, Snowflake, Dagster, Airflow, Power BI, Metabase, dlt, Airbyte, Great Expectations, Soda, Docker, and GitHub Actions.
            </p>
            <p>
              I speak French natively and English at a professional level. I am open to junior Data Engineer, Analytics Engineer, BI Developer, and Data Analyst roles, including entry-level, graduate, and internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecruiterSnapshot({ onBookCall }: SectionProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const section = useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!badgeRef.current) return;
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const infoCards = [
    { label: 'Name', value: 'Marcellin DJAMBO' },
    { label: 'Target Roles', value: 'Junior Data Engineer, Junior Analytics Engineer, BI Developer, Data Analyst' },
    { label: 'Core Strengths', value: 'SQL modeling, ELT pipelines, dbt, BI reporting, data quality, orchestration' },
    { label: 'Experience', value: 'Data Analyst Intern, SETRAG, Libreville, Gabon (March 2025 – June 2025)' },
    { label: 'Education', value: "Bachelor's in Big Data and Data Analytics; Master's in AI Engineering in progress" },
    { label: 'Proof', value: 'Up to 70% manual reporting time reduction at SETRAG; 7 data certifications; 6K+ LinkedIn community' },
  ];

  return (
    <section className="bg-prussian section-mobile relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-5 md:px-8 relative z-10">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-12 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">At a glance</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-white tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Recruiter Snapshot
          </h2>
          <p className="text-[14px] md:text-base text-white/35 leading-relaxed">
            A concise view of role fit, experience, education, and proof points.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Info grid */}
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {infoCards.map((card, i) => (
              <div
                key={card.label}
                className={`${card.label === 'Name' || card.label === 'Proof' ? 'col-span-2' : ''} bg-card-dark/50 backdrop-blur-sm rounded-xl border border-white/[0.06] p-3.5 md:p-5 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${(i + 1) * 50}ms` }}
              >
                <p className="text-[10px] md:text-[11px] text-white/25 uppercase tracking-wider font-semibold mb-1.5">{card.label}</p>
                <p className="text-[13px] md:text-[14px] text-white/75 leading-relaxed">{card.value}</p>
              </div>
            ))}
          </div>

          {/* LinkedIn badge - prominent centered */}
          <div className={`reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
              {/* Badge */}
              <div ref={badgeRef} className="w-full md:w-auto flex justify-center">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="light"
                  data-type="HORIZONTAL"
                  data-vanity="marcellindjambo"
                  data-version="v1"
                >
                  <a className="badge-base__link LI-simple-link" href="https://tn.linkedin.com/in/marcellindjambo?trk=profile-badge"></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <button
            onClick={onBookCall}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 bg-accent hover:bg-accent-hover text-prussian font-semibold text-[14px] md:text-[15px] rounded-full transition-all duration-200 shadow-xl shadow-accent/15 active:scale-[0.97] md:hover:scale-[1.02]"
          >
            Book an Intro Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ onBookCall }: SectionProps) {
  const section = useScrollReveal();
  const PROFILE_PHOTO = '/profile.jpg';

  return (
    <section className="relative bg-prussian section-mobile overflow-hidden grain">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[140px]" />
      </div>

      <div ref={section.ref} className={`max-w-[1120px] mx-auto px-5 md:px-8 relative z-10 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto">
          {/* Profile photo */}
          <div className="inline-block mb-6 md:mb-8">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/25 to-accent/5 blur-md" />
              <div className="absolute -inset-[1.5px] rounded-full bg-gradient-to-br from-accent/30 to-accent/10" />
              <img
                src={PROFILE_PHOTO}
                alt="Marcellin DJAMBO - Data & Analytics Engineer"
                loading="lazy"
                decoding="async"
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-prussian"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-prussian" />
            </div>
          </div>

          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-3 md:mb-4">Open to opportunities</p>
          <h2 className="text-[22px] md:text-[36px] font-extrabold text-white tracking-[-0.025em] mb-4 md:mb-5 leading-tight">
            Hiring for junior data roles?
            <br />
            <span className="text-gradient">Let’s discuss where I can contribute.</span>
          </h2>
          <p className="text-[14px] md:text-base text-white/40 mb-8 md:mb-10 max-w-md mx-auto">
            Open to junior, entry-level, graduate, and internship opportunities in data engineering, analytics engineering, BI, and data analysis.
          </p>

          <button
            onClick={onBookCall}
            className="btn-primary group inline-flex items-center justify-center gap-2.5 px-8 py-4 md:px-9 md:py-[18px] text-prussian font-semibold text-[15px] md:text-base rounded-full shadow-xl shadow-accent/20"
          >
            Book an Intro Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onBookCall }: SectionProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-prussian-dark border-t border-white/[0.04] safe-bottom">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
          <div className="text-center md:text-left">
            <p className="text-[14px] md:text-[15px] font-bold text-white tracking-tight">
              Marcellin<span className="text-accent">.</span>
            </p>
            <p className="text-[11px] md:text-[13px] text-white/40 mt-0.5">Early-career Data & Analytics Engineer, Tunis, Tunisia</p>
          </div>

          <div className="flex items-center gap-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/35 hover:text-accent transition-colors">LinkedIn</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/35 hover:text-accent transition-colors">GitHub</a>
            <button onClick={onBookCall} className="text-[13px] text-accent hover:text-accent-hover font-semibold transition-colors">Contact</button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-white/15">&copy; {year} Marcellin DJAMBO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
