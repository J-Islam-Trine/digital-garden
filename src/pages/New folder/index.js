import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';s

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            About me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.wrapper}>
      <HomepageHeader />
        {/* <HomepageFeatures /> */}
        <div className={styles.portfolio}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio sapien, tincidunt a turpis id, consectetur eleifend mauris. Donec enim nisl, tempor nec nibh at, finibus vehicula lacus. 
          </p>
        </div>
      </main>
    </Layout>
  );
}
