import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Créez ce fichier pour ajouter des styles personnalisés.
import {usePluralForm} from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout title="Welcome" description="Documentation officiel des produits Cloud Temple.">
      <main className={styles.container}>

      {/* Section: Documentation technique */}
      <section className={styles.section}>
      <h2><Translate id="homepage.title"></Translate></h2>
        <p>
        <Translate id="homepage.welcome"></Translate>
        </p>
        <p>
        <Translate id="homepage.description"></Translate>
        </p>
      </section>

        {/* Section: Getting Started */}
        <section className={styles.section}>
          <h2><Translate id="getting.started"></Translate></h2>
          <div className={styles.cardContainer}>

          <Card
            title={<Translate id="homepage.card1.title">Explore and master the console</Translate>}
            description={
              <Translate id="homepage.card1.description">
                Learn to manage your Cloud resources effortlessly with our intuitive and powerful console.
              </Translate>
            }
            link="/docs-content/docs/console/"
            linkText={<Translate id="homepage.card1.linkText">Discover the console</Translate>}
          />
          <Card
            title={<Translate id="homepage.card2.title">Provision your Cloud resources</Translate>}
            description={
              <Translate id="homepage.card2.description">
                Order your first instances, volumes, or services to get started on a secure and high-performance Cloud.
              </Translate>
            }
            link="/docs-content/docs/console/orders/"
            linkText={<Translate id="homepage.card2.linkText">Get started now</Translate>}
          />
          <Card
            title={<Translate id="homepage.card3.title">Deploy in just a few clicks</Translate>}
            description={
              <Translate id="homepage.card3.description">
                Launch your first virtual machine in a few simple steps and configure it to meet your specific needs.
              </Translate>
            }
            link="/docs-content/docs/iaas/quickstart_iaas_template"
            linkText={<Translate id="homepage.card3.linkText">Deploy</Translate>}
          />
          <Card
            title={<Translate id="homepage.card4.title">Set up an S3 Bucket</Translate>}
            description={
              <Translate id="homepage.card4.description">
                Create an S3-compatible bucket and integrate access credentials to simplify your storage workflows.
              </Translate>
            }
            link="/docs-content/docs/paas/s3/#lister-lensemble-des-bucket-s3-de-votre-tenant"
            linkText={<Translate id="homepage.card4.linkText">Create a Bucket</Translate>}
          />

          </div>
        </section>

        {/* Section: Invitation to Visit Website */}
        <section className={styles.section}>
          <h2>
            <Translate id="homepage.visitWebsite.title"></Translate>
          </h2>
          <p>
            <Translate id="homepage.visitWebsite.description"></Translate>
          </p>
          <a
            href="https://www.cloud-temple.com/produits/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <Translate id="homepage.visitWebsite.linkText"></Translate>
          </a>
        </section>
        
      </main>
    </Layout>
  );
}


function Card({ title, description, link, linkText }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className={styles.link}>
        {linkText}
      </a>
    </div>
  );
}