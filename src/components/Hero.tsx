import { ArrowRight, MapPin, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface HeroProps {
  onBookCall: () => void;
}

const PROFILE_PHOTO = '/profile.jpg';
const LINKEDIN = 'https://www.linkedin.com/in/marcellindjambo';
const GITHUB = 'https://github.com/marcellin-de';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function AnimatedCounter({ target, suffix = '', prefix = '', label, desc }: { target: number; suffix?: string; prefix?: string; label: string; desc: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="group cursor-default">
      <p className="text-[32px] md:text-[44px] font-extrabold text-prussian tracking-[-0.03em] leading-none group-hover:text-accent transition-colors duration-300">
        {prefix}{count}{suffix}
      </p>
      <p className="text-[13px] md:text-sm font-semibold text-prussian/70 mt-1.5">{label}</p>
      <p className="text-[12px] md:text-[13px] text-gray-400 mt-0.5 leading-snug">{desc}</p>
    </div>
  );
}

export default function Hero({ onBookCall }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 50); return () => clearTimeout(t); }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100svh] flex items-center bg-black overflow-hidden safe-top grain">
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-prussian/50 blur-[120px] animate-float" />
          <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-accent/[0.03] blur-[100px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-[1120px] mx-auto px-5 md:px-8 pt-20 pb-12 md:pt-28 md:pb-24 w-full">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center gap-8 lg:gap-16">
            {/* Profile photo */}
            <div className={`flex-shrink-0 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative">
                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-lg" />
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-accent/40 to-accent/10" />
                <img
                  src={PROFILE_PHOTO}
                  alt="Marcellin DJAMBO profile photo"
                  className="relative w-24 h-24 md:w-[160px] md:h-[160px] rounded-full object-cover border-[3px] border-black/40"
                />
                {/* Status dot with ping */}
                <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1">
                  <span className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-400 animate-ping-slow" />
                  <span className="relative block w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-500 border-[3px] border-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`flex-1 max-w-2xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Availability */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill rounded-full mb-5 md:mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] md:text-[12px] font-medium text-white/60">Available for new opportunities</span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-[11px] text-white/25 mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Tunis, Tunisia</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> FR / EN</span>
              </div>

              {/* Headline */}
              <h1 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-4 md:mb-5">
                Dashboards are only useful
                <br />
                <span className="text-gradient">when the data behind them is reliable.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-[14px] md:text-[17px] text-white/50 leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
                I help build analytics workflows that turn raw data into clean models, tested transformations, and decision-ready KPIs for clearer reporting.
              </p>

              {/* Value flow pills */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] md:text-[13px] mb-5 md:mb-7">
                <span className="glass-pill px-2.5 py-1 rounded-full text-white/40">Ingest data</span>
                <span className="glass-pill px-2.5 py-1 rounded-full text-white/40">Model data</span>
                <span className="px-2.5 py-1 rounded-full bg-accent/[0.08] border border-accent/[0.12] text-accent/70">Report KPIs</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto btn-primary group inline-flex items-center justify-center gap-2.5 px-6 py-4 md:px-7 md:py-4 text-prussian font-semibold text-[15px] rounded-full"
                >
                  Schedule a Recruiter Intro
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-1.5">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all duration-200" aria-label="LinkedIn profile">
                    <LinkedInIcon className="w-[18px] h-[18px]" />
                  </a>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all duration-200" aria-label="GitHub profile">
                    <GitHubIcon className="w-[18px] h-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ===== PROOF / METRICS ===== */}
      <section className="bg-white">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            <AnimatedCounter target={50} suffix="+" label="Stakeholders supported" desc="Operational teams supported through KPI dashboards and recurring reporting" />
            <AnimatedCounter target={70} suffix="%" label="Reporting time reduced" desc="Up to 70% reduction on recurring reporting workflows" />
            <AnimatedCounter target={7} suffix="" label="Certifications" desc="dbt, SQL, Airflow, AWS, dlt, and data engineering" />
            <div className="group cursor-default">
              <p className="text-[32px] md:text-[44px] font-extrabold text-prussian tracking-[-0.03em] leading-none group-hover:text-accent transition-colors duration-300">6K+</p>
              <p className="text-[13px] md:text-sm font-semibold text-prussian/70 mt-1.5">LinkedIn community</p>
              <p className="text-[12px] md:text-[13px] text-gray-400 mt-0.5 leading-snug">Data professionals following my work and portfolio projects</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
