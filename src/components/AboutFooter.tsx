import { ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
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
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">About</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-5 md:mb-6 leading-tight">
            The person behind the pipelines
          </h2>
          <div className="space-y-4 text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
            <p>
              <span className="text-prussian font-semibold">I am Marcellin DJAMBO</span> \u2014 a Data & Analytics Engineer based in Tunis, Tunisia. I believe data systems should work for the people who rely on them, not just look impressive on paper.
            </p>
            <p>
              I specialize in building the full data journey: ingesting raw data through reliable pipelines, transforming it into documented and tested models with dbt, and delivering dashboards that drive real decisions. Clean data. Tested transformations. Trusted KPIs.
            </p>
            <p>
              With a Licence in Big Data & Data Analytics and currently pursuing a Master's in AI Engineering at Universit\u00e9 Centrale Tunisie, I combine academic foundations with hands-on production experience. I also hold 7 industry certifications covering dbt, SQL, Airflow, AWS and more.
            </p>
            <p>
              I speak French natively and English at a professional level. I am looking to join a team where data creates real value \u2014 where I can contribute to building reliable, scalable data systems that support better decisions every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecruiterSnapshot({ onBookCall }: SectionProps) {
  const [badgeRendered, setBadgeRendered] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);
  const section = useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (badgeRef.current && badgeRef.current.children.length > 1) {
        setBadgeRendered(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const infoCards = [
    { label: 'Name', value: 'Marcellin DJAMBO' },
    { label: 'Target Roles', value: 'Data Engineer \u00b7 Analytics Engineer \u00b7 BI Developer \u00b7 Data & Analytics Engineer' },
    { label: 'Core Strengths', value: 'ELT \u00b7 dbt \u00b7 Snowflake \u00b7 Airflow \u00b7 Power BI \u00b7 Data Quality' },
    { label: 'Experience', value: 'Data Analyst at SETRAG \u2014 Libreville, Gabon (2025)' },
    { label: 'Education', value: 'Mast\u00e8re IA Engineering (in progress) \u00b7 Licence Big Data (completed)' },
    { label: 'Proof', value: '50+ stakeholders \u00b7 70% time reduction \u00b7 7 certifications \u00b7 6K LinkedIn' },
  ];

  return (
    <section className="bg-prussian section-mobile relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-5 md:px-8 relative z-10">
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-12 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Quick Reference</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-white tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Recruiter Snapshot
          </h2>
          <p className="text-[14px] md:text-base text-white/35 leading-relaxed">
            Everything you need to evaluate my profile \u2014 in one place.
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

          {/* LinkedIn badge — prominent centered */}
          <div className={`reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-card-dark/40 backdrop-blur-sm rounded-2xl border border-white/[0.08] p-5 md:p-7">
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
                {/* Badge */}
                <div ref={badgeRef} className="w-full md:w-auto flex justify-center">
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="large"
                    data-theme="dark"
                    data-type="HORIZONTAL"
                    data-vanity="marcellindjambo"
                    data-version="v1"
                  >
                    <a className="badge-base__link LI-simple-link" href="https://tn.linkedin.com/in/marcellindjambo?trk=profile-badge">Marcellin DJAMBO</a>
                  </div>
                  {!badgeRendered && (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/250px-LinkedIn_icon.svg.png"
                        alt="LinkedIn"
                        className="w-10 h-10"
                      />
                      <p className="text-[14px] text-white/50 font-medium">Marcellin DJAMBO</p>
                      <p className="text-[12px] text-white/30">Data & Analytics Engineer</p>
                      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:text-accent-hover transition-colors font-medium">
                        <ExternalLink className="w-3 h-3" /> View LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-16 bg-white/[0.06]" />
                <div className="md:hidden w-12 h-px bg-white/[0.06]" />

                {/* Quick links */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-6 md:gap-2.5 text-center md:text-left">
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-wider font-semibold mb-1.5">Languages</p>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-1">
                      <span className="flex items-center justify-center md:justify-start gap-1.5 text-[13px] text-white/60">
                        <Globe className="w-3.5 h-3.5 text-accent/50" /> French - Native
                      </span>
                      <span className="flex items-center justify-center md:justify-start gap-1.5 text-[13px] text-white/60">
                        <Globe className="w-3.5 h-3.5 text-accent/50" /> English - Professional
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-wider font-semibold mb-1.5">Profiles</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-accent hover:text-accent-hover transition-colors font-medium">LinkedIn &rarr;</a>
                      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-accent hover:text-accent-hover transition-colors font-medium">GitHub &rarr;</a>
                    </div>
                  </div>
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
            Schedule an Intro Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ onBookCall }: SectionProps) {
  const section = useScrollReveal();
  const PROFILE_PHOTO = 'https://www.marcellin.tech/_next/image?url=%2Fassets%2Flogo.jpg&w=256&q=75';

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
                alt="Marcellin DJAMBO"
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-prussian"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-prussian" />
            </div>
          </div>

          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-3 md:mb-4">Ready to talk?</p>
          <h2 className="text-[22px] md:text-[36px] font-extrabold text-white tracking-[-0.025em] mb-4 md:mb-5 leading-tight">
            Your team deserves data systems it can trust.
            <br />
            <span className="text-gradient">Let's build them together.</span>
          </h2>
          <p className="text-[14px] md:text-base text-white/40 mb-8 md:mb-10 max-w-md mx-auto">
            30-minute intro call. No pressure. Just a conversation about your data challenges and how I can help.
          </p>

          <button
            onClick={onBookCall}
            className="btn-primary group inline-flex items-center justify-center gap-2.5 px-8 py-4 md:px-9 md:py-[18px] text-prussian font-semibold text-[15px] md:text-base rounded-full shadow-xl shadow-accent/20"
          >
            Book Your Intro Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="mt-4 text-[11px] text-white/20">Usually replies within 24 hours</p>
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
            <p className="text-[12px] md:text-[13px] text-white/25 mt-0.5">Data & Analytics Engineer - Tunis, Tunisia</p>
          </div>

          <div className="flex items-center gap-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/35 hover:text-accent transition-colors">LinkedIn</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/35 hover:text-accent transition-colors">GitHub</a>
            <button onClick={onBookCall} className="text-[13px] text-accent hover:text-accent-hover font-semibold transition-colors">Book a Call</button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-white/15">&copy; {year} Marcellin DJAMBO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
