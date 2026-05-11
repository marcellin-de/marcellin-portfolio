import React from 'react';
import AWS from '../components/technologies/AWS';
import Airbyte from '../components/technologies/Airbyte';
import Airflow from '../components/technologies/Airflow';
import BigQuery from '../components/technologies/BigQuery';
import DBT from '../components/technologies/DBT';
import DLT from '../components/technologies/DLT';
import Dagster from '../components/technologies/Dagster';
import Databricks from '../components/technologies/Databricks';
import Docker from '../components/technologies/Docker';
import Fivetran from '../components/technologies/Fivetran';
import Git from '../components/technologies/Git';
import GitHubActions from '../components/technologies/GitHubActions';
import GreatExpectations from '../components/technologies/GreatExpectations';
import Looker from '../components/technologies/Looker';
import Metabase from '../components/technologies/Metabase';
import PowerBI from '../components/technologies/PowerBI';
import PowerAutomate from '../components/technologies/PowerAutomate';
import Python from '../components/technologies/Python';
import Snowflake from '../components/technologies/Snowflake';
import Spark from '../components/technologies/Spark';
import SQL from '../components/technologies/SQL';
import Redshift from '../components/technologies/Redshift';
import PostgreSQL from '../components/technologies/PostgreSQL';
import MongoDB from '../components/technologies/MongoDB';
import Postman from '../components/technologies/Postman';
import Soda from '../components/technologies/Soda';

// Map canonical and lowercase names to React components used in this repo.
export const TechnologyComponents: Record<string, React.ComponentType<any>> = {
    'aws': AWS,
    'airbyte': Airbyte,
    'airflow': Airflow,
    'bigquery': BigQuery,
    'dbt': DBT,
    'dlt': DLT,
    'dagster': Dagster,
    'databricks': Databricks,
    'docker': Docker,
    'fivetran': Fivetran,
    'git': Git,
    'github actions': GitHubActions,
    'githubactions': GitHubActions,
    'great expectations': GreatExpectations,
    'greatexpectations': GreatExpectations,
    'looker': Looker,
    'metabase': Metabase,
    'power bi': PowerBI,
    'powerbi': PowerBI,
    'power automate': PowerAutomate,
    'powerautomate': PowerAutomate,
    'python': Python,
    'snowflake': Snowflake,
    'spark': Spark,
    'sql': SQL,
    'redshift': Redshift,
    'postgresql': PostgreSQL,
    'postgres': PostgreSQL,
    'mongo': MongoDB,
    'mongodb': MongoDB,
    'postman': Postman,
    'soda': Soda,
};

function normalizeName(name?: string) {
    if (!name) return '';
    return name.trim().toLowerCase();
}

export function renderTechnologyIcon(name?: string, props: any = {}) {
    if (!name) return null;
    const key = normalizeName(name);
    const lookup = TechnologyComponents[key];
    if (lookup) {
        const C = lookup;
        return <C {...props} />;
    }

    // Fallback to public/technologies SVG by normalized filename, e.g. "power bi" -> power-bi.svg
    const fileName = key.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const src = `/technologies/${fileName}.svg`;
    const className = props.className || 'w-6 h-6 object-contain';
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className={className} loading="lazy" decoding="async" />
    );
}

export default renderTechnologyIcon;
