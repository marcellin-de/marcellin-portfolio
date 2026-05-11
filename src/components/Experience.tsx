import { MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SETRAG_LOGO = 'https://mobile.setrag.ga/images/logo-setrag.png';
const UC_LOGO = 'https://cdn-flbag.nitrocdn.com/lHRvxOluTwiwfOjFRNeqQHYYVasaauTG/assets/images/optimized/rev-9ea3631/honoris.net/wp-content/uploads/2021/07/UC.png';

const LOGOS: Record<string, string> = {
  'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
  Python: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  'Power Automate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/1280px-Microsoft_Power_Automate.svg.png',
  ETL: '',
  DAX: '',
  Edureka: 'https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/D_uM6eCxnXQ/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDQ5LzA3OC8zNjAvYmtuQWpONGU3NjMxbDRMVllYUFJLeGxEOC85YTk0ZWEwZjM5NTFjNzkxNWQxZDNjZjA2NGVhYTI2Y2VhZmQ4ZWYzLnBuZw.jpg',
  DataCamp: 'https://brandingstyleguides.com/wp-content/guidelines/2024/03/dataCamp-2020-1.jpg',
  dltHub: 'https://avatars.githubusercontent.com/u/89419010?s=280&v=4',
  LinkedIn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/250px-LinkedIn_icon.svg.png',
  AWS: 'https://assets.aboutamazon.com/dims4/default/dd7f211/2147483647/strip/false/crop/960x720+0+0/resize/960x720!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F66%2Ff3%2Fcb7e8e804a1f991c96593cf465e1%2Faws-logo-white-on-si.jpg',
};

const TOOL_FALLBACKS: Record<string, string> = {
  'Power BI': '#F2C811',
  Python: '#3776AB',
  'Power Automate': '#0066FF',
  ETL: '#14213d',
  DAX: '#14213d',
};

const TOOLS_USED = ['Power BI', 'Python', 'Power Automate'];

const RESULTS = [
  'Recurring reporting time reduced by up to 70%',
  'Operational KPI monitoring became easier to review',
  'Dashboards gave teams clearer visibility into daily activity',
];

const EDUCATION = [
  {
    degree: "Professional Master's in AI Engineering",
    school: 'Université Centrale Tunisie',
    period: '2025–2027',
    status: 'In progress',
    logo: UC_LOGO,
  },
  {
    degree: "Bachelor's Degree in Big Data and Data Analytics",
    school: 'Université Centrale Tunisie',
    period: '2022–2025',
    status: 'Completed',
    logo: UC_LOGO,
  },
];

const CERTIFICATIONS = [
  { name: 'Analytics Engineering with dbt', issuer: 'Edureka', date: 'In progress' },
  { name: 'Data Engineer', issuer: 'DataCamp', date: 'In progress' },
  { name: 'Associate Data Engineer in SQL', issuer: 'DataCamp', date: 'In progress' },
  { name: 'dbt Fundamentals', issuer: 'DataCamp', date: 'In progress' },
  { name: 'dlt Fundamentals', issuer: 'dltHub', date: 'In progress' },
  { name: 'Data Engineering with Apache Airflow', issuer: 'LinkedIn', date: '2024' },
  { name: 'AWS Academy - Cloud Foundations', issuer: 'AWS', date: '2024' },
];

export function Experience() {
  const section = useScrollReveal();
  const certs = useScrollReveal(0.03);

  return (
    <section id="experience" className="bg-surface section-mobile">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div ref={section.ref} className={`max-w-2xl mb-8 md:mb-14 reveal-hidden ${section.isVisible ? 'reveal-visible' : ''}`}>
          <p className="text-[11px] md:text-[13px] font-semibold text-accent uppercase tracking-widest mb-2 md:mb-3">Experience & Credentials</p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-prussian tracking-[-0.025em] mb-3 md:mb-4 leading-tight">
            Early-career profile with hands-on delivery experience
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 leading-relaxed">
            Internship impact at SETRAG, a data and AI education path, and 7 certifications across the modern data stack.
          </p>
        </div>

        <div className="space-y-6">
          {/* ========== SETRAG ========== */}
          <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100/80 overflow-hidden card-lift">
            <div className="flex flex-col md:flex-row">
              {/* Left: logo column */}
              <div className="md:w-[180px] lg:w-[200px] flex-shrink-0 bg-prussian/[0.03] md:bg-prussian/[0.04] border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center py-6 md:py-0">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                  <img
                    src={SETRAG_LOGO}
                    alt="SETRAG"
                    className="w-full h-full object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Right: content */}
              <div className="flex-1 p-5 md:p-8 lg:p-9">
                {/* Title row */}
                <div className="mb-5 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-prussian">SETRAG</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-[13px] md:text-[14px] text-gray-500">
                    <span className="font-medium text-prussian">Data Analyst Intern</span>
                    <span className="text-gray-300">|</span>
                    <span>March 2025 – June 2025</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Libreville, Gabon</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-[14px] md:text-[15px] text-prussian font-medium leading-relaxed mb-6 md:mb-8">
                  During my internship, I helped automate recurring KPI reporting for operational teams, contributing to a reduction of up to 70% in manual reporting time.
                </p>

                {/* Challenge / Solution / Results */}
                <div className="grid sm:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-7">
                  <div>
                    <p className="text-[10px] md:text-[11px] font-semibold text-accent uppercase tracking-widest mb-1.5">Challenge</p>
                    <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                      Reporting workflows were manual and fragmented, making recurring KPI tracking slow for operational teams.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-semibold text-accent uppercase tracking-widest mb-1.5">Solution</p>
                    <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                      Structured KPI tracking, built Power BI dashboards, and automated repetitive reporting steps using Python and Power Automate.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-semibold text-accent uppercase tracking-widest mb-1.5">Results</p>
                    <div className="space-y-1.5">
                      {RESULTS.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="w-[14px] h-[14px] text-accent flex-shrink-0 mt-[3px]" />
                          <p className="text-[13px] text-gray-600 leading-snug">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100">
                  {TOOLS_USED.map((t) => {
                    const logo = LOGOS[t];
                    const color = TOOL_FALLBACKS[t];
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 bg-surface border border-gray-100 rounded-full text-[11px] md:text-[12px] font-medium text-prussian/60"
                      >
                        {logo ? (
                          <img src={logo} alt="" className="w-4 h-4 rounded object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-sm flex-shrink-0" style={{ backgroundColor: color, opacity: 0.15 }} />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ========== Education + Certifications ========== */}
          <div ref={certs.ref} className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Education */}
            <div className={`bg-white rounded-2xl border border-gray-100/80 p-5 md:p-7 reveal-hidden ${certs.isVisible ? 'reveal-visible' : ''}`}>
              <div className="flex items-center gap-2.5 mb-5">
                <img src={UC_LOGO} alt="Université Centrale" className="w-8 h-8 rounded-lg object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <h3 className="text-[15px] md:text-base font-bold text-prussian">Education</h3>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative pl-4 border-l-2 border-accent/20">
                    <p className="text-[13px] md:text-[14px] font-semibold text-prussian leading-snug">{edu.degree}</p>
                    <p className="text-[12px] text-gray-500 mt-0.5">{edu.school}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-gray-400">{edu.period}</span>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${edu.status === 'In progress' ? 'bg-accent/10 text-accent' : 'bg-prussian/5 text-prussian/50'}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={`bg-white rounded-2xl border border-gray-100/80 p-5 md:p-7 reveal-hidden ${certs.isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-lg">&#127942;</span>
                </div>
                <div>
                  <h3 className="text-[15px] md:text-base font-bold text-prussian">7 Certifications</h3>
                  <p className="text-[11px] text-gray-400">Credentials across dbt, SQL, Airflow, AWS, dlt, and data engineering</p>
                </div>
              </div>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => {
                  const certLogo = LOGOS[cert.issuer];
                  return (
                    <div key={cert.name} className="flex items-center gap-2.5 py-1.5">
                      {certLogo ? (
                        <img src={certLogo} alt={cert.issuer} className="w-6 h-6 rounded object-contain flex-shrink-0 bg-white" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      ) : (
                        <div className="w-6 h-6 rounded bg-gray-100 flex-shrink-0" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] md:text-[13px] font-medium text-prussian truncate">{cert.name}</p>
                        <p className="text-[11px] text-gray-400">{cert.issuer}</p>
                      </div>
                      <span className="text-[10px] text-gray-300 flex-shrink-0">{cert.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
