import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Créez ce fichier pour ajouter des styles personnalisés.
import {usePluralForm} from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout title="Welcome" description="Le site de la documentation officiel des produits Cloud Temple.">
      <main className={styles.container}>

      {/* Section: Documentation technique */}
      <section className={styles.section}>
      <h2><Translate id="homepage.title">Documentation Cloud Temple.</Translate></h2>
        <p>
        <Translate id="homepage.welcome">Bienvenue sur la documentation des produits et services Cloud de confiance.</Translate>
        </p>
        <p>
        <Translate id="homepage.description">Notre documentation vous guide pas à pas, des bases de la configuration aux cas d’usage avancés, pour tirer pleinement parti de nos services tout en respectant les plus hauts standards de conformité européenne.</Translate>
        </p>
        <a
          href="https://www.cloud-temple.com/produits/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          <Translate id="homepage.linktowebsite.title">Explorer nos solutions et produits</Translate>
          
        </a>
      </section>

        {/* Section: Getting Started */}
        <section className={styles.section}>
          <h2><Translate id="getting.started">Premiers pas.</Translate></h2>
          <div className={styles.cardContainer}>
          <Card
              title={<Translate id="homepage.card1.title" />}
              description={<Translate id="homepage.card1.description" />}
              link="/docs-content/docs/console/"
              linkText={<Translate id="homepage.card1.linkText" />}
            />
            <Card
              title={<Translate id="homepage.card2.title" />}
              description={<Translate id="homepage.card2.description" />}
              link="/docs-content/docs/console/orders/"
              linkText={<Translate id="homepage.card2.linkText" />}
            />
            <Card
              title={<Translate id="homepage.card3.title" />}
              description={<Translate id="homepage.card3.description" />}
              link="/docs-content/docs/iaas/quickstart_iaas_template"
              linkText={<Translate id="homepage.card3.linkText" />}
            />
            <Card
              title={<Translate id="homepage.card4.title" />}
              description={<Translate id="homepage.card4.description" />}
              link="/docs-content/docs/paas/s3/#lister-lensemble-des-bucket-s3-de-votre-tenant"
              linkText={<Translate id="homepage.card4.linkText" />}
            />

          </div>
        </section>

        {/* Section: Suivi des évolutions */}
        <section className={styles.section}>
          <h2>
            <Translate id="homepage.changeLog.title"></Translate>
          </h2>

          <p>
          <Translate id="homepage.changeLog.description"></Translate>
          </p>

          <div className={styles.changeLog}>
            <h3>Version 4.1.2 - 25/11/2024</h3>
            <ul>
              <li><strong>GÉNÉRAL</strong> : Modification de l'agencement des menus pour un tenant non SecNumCloud.</li>
              <li><strong>IAAS - MACHINES VIRTUELLES</strong> : Amélioration de l'affichage des messages des tâches VMware dans les interfaces.</li>
              <li><strong>SUPERVISION</strong> : Optimisation de l'affichage des services pour une meilleure prise en compte des éléments par page.</li>
            </ul>

            <h3>Version 4.1.1 - 18/11/2024</h3>
            <ul>
              <li><strong>IAAS - MACHINES VIRTUELLES</strong> : Ajout de la conversion automatique des unités pour l'édition de la mémoire des VMs.</li>
              <li><strong>IAAS - SAUVEGARDE</strong> : Introduction d'une fonctionnalité d'export CSV pour les rapports de sauvegarde.</li>
              <li><strong>OPENIAAS - MACHINES VIRTUELLES</strong> : Amélioration du processus de gestion de l'option de démarrage automatique.</li>
            </ul>

            <h3>Version 4.1.0 - 13/11/2024</h3>
            <ul>
              <li><strong>GÉNÉRAL</strong> : Possibilité d'envoyer des fichiers lors d'un feedback depuis la console.</li>
              <li><strong>IAAS - MACHINES VIRTUELLES</strong> : Ajout des activités de snapshots directement accessibles depuis les onglets de gestion des VMs.</li>
              <li><strong>IAAS - INFRASTRUCTURE</strong> : Filtrage amélioré des zones de disponibilité sur les pages calcul et stockage.</li>
              <li><strong>OPENIAAS - MACHINES VIRTUELLES</strong> : Validation automatique des politiques de sauvegarde lors du démarrage.</li>
              <li><strong>IAM</strong> : Renforcement des permissions avec désactivation de la suppression de propriétaires de tenants.</li>
            </ul>

            <h3>Version 4.0.0 - 18/10/2024</h3>
            <ul>
              <li><strong>GÉNÉRAL</strong> : Introduction d'un nouveau design de la console et refonte des pages infrastructure et sauvegarde.</li>
            </ul>

            <h3>Version 3.38.0 - 03/10/2024</h3>
            <ul>
              <li><strong>OPENIAAS - MACHINES VIRTUELLES</strong> : Lancement du module OpenIaaS pour la gestion avancée des machines virtuelles.</li>
            </ul>
            
            <a
              href="/docs-content/docs/getting_started/changes/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}

            >
              <Translate id="homepage.changeLog.linkText"></Translate>
            </a>
          </div>
        </section>


      </main>
    </Layout>
  );
}

// A reusable Card component for consistency
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