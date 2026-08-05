import { useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Database, TestTube, BarChart3, GitBranch, Cog, ExternalLink, Star, GitFork } from 'lucide-react';

interface CaseStudyDetailProps {
  caseStudy: number | null;
  onClose: () => void;
  onBookCall: () => void;
}

interface DetailData {
  title: string;
  tagline: string;
  cover: string;
  repo: {
    name: string;
    url: string;
    stars: number;
    forks: number;
    language: string;
  };
  context: string;
  problem: string;
  challenge: string;
  approach: { step: string; desc: string; icon: React.ElementType }[];
  architecture: string[];
  tools: { name: string; role: string }[];
  outcomes: string[];
  proves: string[];
  cta: string;
}

const DETAILS: Record<number, DetailData> = {
  0: {
    title: 'CRM Sales Analytics Platform',
    tagline: 'Portfolio analytics engineering project using Snowflake, dbt, SQL, Python, and Power BI to model CRM data and deliver sales reporting.',
    cover: '/images/case-crm-sales.webp',
    repo: {
      name: 'crm-sales-analytics-platform',
      url: 'https://github.com/marcellin-de/crm-sales-analytics-platform',
      stars: 1,
      forks: 0,
      language: 'Python',
    },
    context: 'A portfolio simulation showing how B2B CRM data can be organized for sales reporting. The project covers synthetic data generation, loading, transformation, dimensional modeling, testing, and BI delivery.',
    problem: 'Sales teams need clear pipeline, activity, and revenue metrics, but CRM data often becomes difficult to analyze when it is split across sources.',
    challenge: 'Building a clean analytics layer with staged dbt models, quality tests, and a star schema designed for BI reporting.',
    approach: [
      { step: 'Generate synthetic CRM data', desc: 'Created B2B sales data with Python, including accounts, contacts, deals, products, and sales activities, to simulate a realistic CRM workflow.', icon: Database },
      { step: 'Load into Snowflake', desc: 'Ingested raw CSV files into Snowflake as the cloud data warehouse, establishing a clean raw layer for downstream transformation.', icon: Layers },
      { step: 'Build dbt transformation models', desc: 'Developed a full dbt project with staging, intermediate, fact, dimension, and mart layers, each with clear documentation and column-level tests.', icon: GitBranch },
      { step: 'Design star schema', desc: 'Modeled a star schema optimized for BI: fact tables for deals and activities, dimension tables for accounts, products, and time.', icon: Database },
      { step: 'Add dbt quality tests', desc: 'Implemented tests for uniqueness, non-null values, accepted values, and referential integrity, ensuring data quality at every layer.', icon: TestTube },
      { step: 'Deliver Power BI dashboards', desc: 'Created interactive dashboards for pipeline visibility, revenue trends, deal velocity, and sales team performance.', icon: BarChart3 },
    ],
    architecture: ['Python (Data Generation)', 'Snowflake (Cloud Warehouse)', 'dbt (Transformation & Modeling)', 'Star Schema (Dimensional Design)', 'Power BI (BI & Dashboards)'],
    tools: [
      { name: 'Python', role: 'Synthetic data generation' },
      { name: 'Snowflake', role: 'Cloud data warehouse' },
      { name: 'dbt', role: 'Transformation, testing & modeling' },
      { name: 'SQL', role: 'Query language & transformations' },
      { name: 'Power BI', role: 'Dashboard & visualization' },
    ],
    outcomes: [
      'Built a complete dbt project with 5 model layers (staging, intermediate, fact, dimension, mart)',
      'Designed a star schema for efficient BI querying',
      'Added dbt tests for uniqueness, non-null and accepted values at every layer',
      'Created interactive Power BI dashboards for pipeline and revenue analytics',
      'Demonstrated full data engineering lifecycle in a single project',
    ],
    proves: [
      'Full-stack data workflow from ingestion to transformation, modeling, and BI',
      'dbt best practices: staged models, documentation, testing, marts',
      'Dimensional modeling with star schema design',
      'Practical data quality mindset',
    ],
    cta: 'Want to review this sales analytics project during a screening call?',
  },
  1: {
    title: 'Dagster Weather Platform',
    tagline: 'Portfolio data platform for hourly weather data with Python ingestion, Dagster orchestration, Great Expectations validation, and run monitoring.',
    cover: '/images/case-weather-dagster.webp',
    repo: {
      name: 'dagster-weather-platform',
      url: 'https://github.com/marcellin-de/dagster-weather-platform',
      stars: 1,
      forks: 0,
      language: 'Python',
    },
    context: 'A weather data platform built to demonstrate pipeline architecture with orchestration, automated quality checks, and run visibility.',
    problem: 'Weather data needs repeatable ingestion, validation, and monitoring before it can be used reliably downstream.',
    challenge: 'Designing an automated workflow with clear dependencies, validation steps, and failure visibility.',
    approach: [
      { step: 'Connect to weather API', desc: 'Built a Python-based ingestion layer that pulls weather data from public APIs with basic error handling and retry logic.', icon: Database },
      { step: 'Orchestrate with Dagster', desc: 'Configured Dagster as the orchestration engine for scheduling runs, managing dependencies between assets, and tracking pipeline health.', icon: Cog },
      { step: 'Validate with Great Expectations', desc: 'Integrated Great Expectations to validate data at every stage: schema checks, range validation, completeness, and freshness.', icon: TestTube },
      { step: 'Store in PostgreSQL', desc: 'Loaded cleaned and validated data into PostgreSQL, structured for downstream analytics consumption.', icon: Database },
      { step: 'Monitor runs', desc: 'Used Dagster run history and quality checks to make pipeline status easier to inspect.', icon: BarChart3 },
    ],
    architecture: ['Weather API (Source)', 'Python (Ingestion)', 'Dagster (Orchestration)', 'Great Expectations (Quality)', 'PostgreSQL (Storage)'],
    tools: [
      { name: 'Python', role: 'Data ingestion and processing' },
      { name: 'Dagster', role: 'Pipeline orchestration and scheduling' },
      { name: 'SQL', role: 'Data transformation' },
      { name: 'Great Expectations', role: 'Data quality validation' },
      { name: 'PostgreSQL', role: 'Data storage' },
    ],
    outcomes: [
      'Scheduled weather data pipeline with repeatable ingestion',
      'Quality checks before data reaches storage',
      'Dagster orchestration with asset-based architecture',
      'Run visibility for pipeline failures and validation issues',
    ],
    proves: [
      'Pipeline architecture and orchestration with Dagster',
      'Data validation engineering with Great Expectations',
      'Monitoring and observability basics',
      'Modern data engineering practices',
    ],
    cta: 'Want to review this orchestration and data quality project?',
  },
  2: {
    title: 'Marketing Performance Platform',
    tagline: 'Analytics project using Maven Fuzzy Factory e-commerce data, dlt, dbt, Dagster, Snowflake, and Metabase to analyze marketing KPIs.',
    cover: '/images/case-marketing-perf.webp',
    repo: {
      name: 'marketing-performance-analysis',
      url: 'https://github.com/marcellin-de/marketing-performance-analysis',
      stars: 1,
      forks: 0,
      language: 'Python',
    },
    context: 'A portfolio analytics project using the Maven Fuzzy Factory e-commerce dataset to model marketing performance, conversion behavior, and channel-level KPIs.',
    problem: 'Marketing teams need consistent campaign, session, and conversion metrics before they can compare ROI across channels.',
    challenge: 'Modeling multi-channel data into a clean analytics layer for attribution, conversion, and reporting analysis.',
    approach: [
      { step: 'Map marketing entities', desc: 'Mapped the dataset around sessions, campaigns, traffic sources, conversions, and revenue-related metrics.', icon: Database },
      { step: 'Build ingestion pipelines', desc: 'Created ingestion workflows to consolidate source data into a unified raw layer.', icon: Layers },
      { step: 'Transform with dbt', desc: 'Developed dbt models to clean, standardize, and structure marketing data, with proper attribution logic and performance calculations.', icon: GitBranch },
      { step: 'Design attribution logic', desc: 'Built attribution logic to compare channel contribution and conversion paths.', icon: BarChart3 },
      { step: 'Deliver Metabase dashboards', desc: 'Created dashboards for channel performance, KPI tracking, conversion trends, and reporting review.', icon: BarChart3 },
    ],
    architecture: ['Maven Dataset', 'dlt (Ingestion)', 'dbt (Transformation)', 'Attribution Model', 'Metabase (Dashboards)'],
    tools: [
      { name: 'dlt', role: 'Data ingestion' },
      { name: 'SQL', role: 'Transformation and analysis' },
      { name: 'dbt', role: 'Data modeling and testing' },
      { name: 'Dagster', role: 'Orchestration' },
      { name: 'Metabase', role: 'Dashboard and reporting' },
    ],
    outcomes: [
      'Unified marketing data model with multi-channel attribution',
      'Clear ROI tracking per channel and campaign',
      'Campaign and conversion reporting views',
      'Metabase dashboards for channel performance, ROI tracking, and conversion trends',
    ],
    proves: [
      'Analytics engineering with business-aligned modeling',
      'Multi-source data integration and standardization',
      'Attribution logic design and implementation',
      'Translating marketing questions into modeled metrics and BI-ready reporting',
    ],
    cta: 'Want to review this marketing analytics project?',
  },
  3: {
    title: 'Vehicle E-Commerce Analytics',
    tagline: 'End-to-end vehicle e-commerce analytics project using ingestion, dbt modeling, data quality checks, Snowflake, and BI reporting patterns.',
    cover: '/images/case-ecommerce-vehicle.webp',
    repo: {
      name: 'vehicle-ecommerce-analytics',
      url: 'https://github.com/marcellin-de/vehicle-ecommerce-analytics',
      stars: 1,
      forks: 0,
      language: 'Python',
    },
    context: 'A vehicle e-commerce analytics project that connects product, customer, and transaction data into a structured model for reporting and analysis.',
    problem: 'Vehicle marketplace data needs structured product, customer, and transaction models before teams can analyze behavior and sales trends.',
    challenge: 'Connecting product, customer, and transaction entities into a unified analytics model with segmentation, trend analysis, and dashboard-ready outputs.',
    approach: [
      { step: 'Map e-commerce data', desc: 'Analyzed product catalog, user behavior, transactions, and vehicle specifications.', icon: Database },
      { step: 'Build data pipelines', desc: 'Created Python pipelines to extract, clean and load e-commerce data into Snowflake for analysis.', icon: Layers },
      { step: 'Model with dbt', desc: 'Developed dbt models for customer segmentation, product performance, and sales trend analysis with proper testing.', icon: GitBranch },
      { step: 'Customer segmentation', desc: 'Built segmentation logic that classifies customers by behavior, purchase patterns, and value tiers.', icon: Database },
      { step: 'Deliver analytics', desc: 'Created Power BI dashboards for customer insights, product performance, sales trends, and inventory review.', icon: BarChart3 },
    ],
    architecture: ['E-commerce Platform (Source)', 'Python (Ingestion)', 'Snowflake (Warehouse)', 'dbt (Modeling)', 'Power BI (Dashboards)'],
    tools: [
      { name: 'Python', role: 'Data processing and feature engineering' },
      { name: 'SQL', role: 'Analysis and transformation' },
      { name: 'dbt', role: 'Data modeling and documentation' },
      { name: 'Snowflake', role: 'Cloud data warehouse' },
      { name: 'Power BI', role: 'Visualization and reporting' },
    ],
    outcomes: [
      'Customer segmentation model with behavior-based classifications',
      'Sales trend analysis with seasonal and product-level breakdowns',
      'Product performance dashboards for inventory review',
      'Unified analytics model connecting all e-commerce data sources',
    ],
    proves: [
      'End-to-end analytics from raw data to reporting outputs',
      'Customer segmentation and behavioral analytics',
      'Business intelligence with clear KPI structure',
      'Modern data stack with dbt + Snowflake + Power BI',
    ],
    cta: 'Want to review this e-commerce analytics project?',
  },
};

export default function CaseStudyDetail({ caseStudy, onClose, onBookCall }: CaseStudyDetailProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (caseStudy !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [caseStudy, handleKeyDown]);

  if (caseStudy === null) return null;
  const detail = DETAILS[caseStudy];
  if (!detail) return null;

  return (
    <div className="fixed inset-0 z-[90] animate-fadeIn" role="dialog" aria-modal="true" aria-label={detail.title}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-0 md:inset-4 md:rounded-2xl bg-white overflow-y-auto overflow-x-hidden">
        <div ref={overlayRef}>
          {/* Sticky header */}
          <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-xl border-b border-gray-100/80">
            <div className="max-w-[900px] mx-auto px-5 md:px-8 h-12 md:h-14 flex items-center justify-between">
              <button
                onClick={onClose}
                className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-medium text-prussian/60 hover:text-prussian transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Back to all case studies</span>
                <span className="sm:hidden">Back</span>
              </button>
              <button
                onClick={onBookCall}
                className="px-4 py-1.5 md:px-5 md:py-2 bg-accent hover:bg-accent-hover text-prussian text-[12px] md:text-[13px] font-semibold rounded-full transition-all active:scale-[0.97]"
              >
                Book an Intro Call
              </button>
            </div>
          </div>

          {/* Cover */}
          <div className="relative h-44 sm:h-56 md:h-72 overflow-hidden">
            <img src={detail.cover} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-prussian-dark/90 via-prussian/50 to-prussian/20" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 max-w-[900px] mx-auto">
              <p className="text-[10px] md:text-[11px] font-semibold text-[#d88700]/70 uppercase tracking-widest mb-1.5">Case Study</p>
              <h1 className="text-[22px] md:text-[32px] font-extrabold text-white tracking-[-0.02em] leading-tight">{detail.title}</h1>
              <p className="text-[13px] md:text-[15px] text-white/60 mt-1.5">{detail.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[900px] mx-auto px-5 md:px-8 py-8 md:py-14">
            <div className="flex flex-wrap items-center gap-3 mb-6 text-[12px] text-prussian/50">
              <a
                href={detail.repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#d88700] hover:text-[#b87300] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {detail.repo.name}
              </a>
              <span className="inline-flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {detail.repo.stars}</span>
              <span className="inline-flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {detail.repo.forks}</span>
              <span>{detail.repo.language}</span>
            </div>

            {/* Context */}
            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-10 md:mb-14">{detail.context}</p>

            {/* Problem & Challenge */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-14">
              <div>
                <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-2">The Problem</p>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">{detail.problem}</p>
              </div>
              <div>
                <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-2">The Challenge</p>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">{detail.challenge}</p>
              </div>
            </div>

            {/* My Approach */}
            <div className="mb-10 md:mb-14">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-4 md:mb-6">My Approach</p>
              <div className="space-y-3 md:space-y-4">
                {detail.approach.map((a, i) => (

                  <div key={a.step} className="flex items-start gap-3 md:gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <span className="text-[13px] md:text-[14px] font-bold text-[#d88700]">{i + 1}</span>
                      </div>
                      {i < detail.approach.length - 1 && <div className="w-px h-3 md:h-5 bg-accent/10 mt-1" />}
                    </div>
                    <div className="pt-1">
                      <p className="text-[13px] md:text-[15px] font-semibold text-prussian">{a.step}</p>
                      <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Architecture */}
            <div className="mb-10 md:mb-14">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-4">Data Architecture</p>
              <div className="flex flex-wrap items-center gap-2">
                {detail.architecture.map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 text-[12px] md:text-[13px] font-medium text-prussian bg-prussian/[0.04] rounded-lg">{item}</span>
                    {i < detail.architecture.length - 1 && <span className="text-[#d88700]/40 text-[11px] font-semibold uppercase tracking-wider">to</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-10 md:mb-14">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-4">Tools Used</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
                {detail.tools.map((t) => (
                  <div key={t.name} className="bg-surface rounded-xl border border-gray-100/80 p-3 md:p-4">
                    <p className="text-[13px] md:text-[14px] font-semibold text-prussian">{t.name}</p>
                    <p className="text-[11px] md:text-[12px] text-gray-500 mt-0.5">{t.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="mb-10 md:mb-14">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-4">Key Outcomes</p>
              <div className="space-y-2">
                {detail.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#d88700] flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">{o}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What This Proves */}
            <div className="bg-prussian rounded-2xl md:rounded-3xl p-5 md:p-8 mb-10 md:mb-14">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#d88700] uppercase tracking-widest mb-3">What This Proves</p>
              <div className="space-y-2">
                {detail.proves.map((p) => (
                  <div key={p} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-shrink-0" />
                    <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pb-4">
              <p className="text-[14px] md:text-[15px] text-gray-500 mb-4">{detail.cta}</p>
              <button
                onClick={onBookCall}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 md:px-7 md:py-4 bg-accent hover:bg-accent-hover text-prussian font-semibold text-[14px] md:text-[15px] rounded-full transition-all shadow-xl shadow-accent/15 active:scale-[0.97] md:hover:scale-[1.02]"
              >
                Discuss this project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
