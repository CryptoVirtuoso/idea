import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>如何收益</>,
    imageUrl: 'img/reimbursement.png',
    description: (
      <>
        111111111
      </>
    ),
  },
  {
    title: <>NFT介绍</>,
    imageUrl: 'img/nft.png',
    description: (
      <>
        2222222.
      </>
    ),
  },
  {
    title: <>通证经济</>,
    imageUrl: 'img/tokens.png',
    description: (
      <>
        333333.
      </>
    ),
  },
  {
    title: <>UGC计划</>,
    imageUrl: 'img/blogger.png',
    description: (
      <>
        4444444.
      </>
    ),
  },
  {
    title: <>竞技PK</>,
    imageUrl: 'img/competition.png',
    description: (
      <>
        4444444.
      </>
    ),
  },
  {
    title: <>社区</>,
    imageUrl: 'img/community.png',
    description: (
      <>
        4444444.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Muses-online')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
