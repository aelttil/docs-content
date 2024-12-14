import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Créez ce fichier pour ajouter des styles personnalisés.
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';


export default function Home() {
  return (
    <Layout title="Welcome" description="Le site de la documentation officiel des produits Cloud Temple.">
      <main className={styles.container}>

      {/* Section: Documentation technique */}
      <section className={styles.section}>
      <h2><Translate id="homepage.documentation.title">Documentation Cloud Temple.</Translate></h2>
        <p>
          Bienvenue sur la documentation des produits et services Cloud de confiance.
        </p>
        <p>
          Notre documentation vous guide pas à pas, des bases de la configuration aux cas d’usage avancés, pour tirer pleinement parti de nos services tout en respectant les plus hauts standards de conformité européenne.
        </p>
        <a
          href="https://www.cloud-temple.com/produits/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Explorer nos solutions et produits
        </a>
      </section>

        {/* Section: Getting Started */}
        <section className={styles.section}>
          <h2>Getting started</h2>
          <div className={styles.cardContainer}>
          <Card
            title="Explorez et maîtrisez la console"
            description="Apprenez à gérer vos ressources Cloud en toute simplicité grâce à notre console intuitive et puissante."
            link="/docs-content/docs/console/"
            linkText="Découvrir la console"
            className={styles.linkText}
          />
          <Card
            title="Provisionnez vos ressources Cloud"
            description="Commandez vos premières instances, volumes ou services pour débuter sur un Cloud sécurisé et performant."
            link="/docs-content/docs/console/orders/"
            linkText="Commencez dès maintenant"
            className={styles.linkText}
          />
          <Card
            title="Déployez en quelques clics"
            description="Lancez votre première machine virtuelle en quelques étapes simples et configurez-la pour vos besoins spécifiques."
            link="/docs-content/docs/iaas/quickstart_iaas_template"
            linkText="Déployer"
            className={styles.linkText}
          />
          <Card
            title="Configurez un Bucket S3"
            description="Créez un Bucket compatible S3 et intégrez-y des identifiants d'accès pour simplifier vos workflows de stockage."
            link="/docs-content/docs/paas/s3/#lister-lensemble-des-bucket-s3-de-votre-tenant"
            linkText="Créer un Bucket"
            className={styles.linkText}
          />

          </div>
        </section>

        {/* Section: Suivi des évolutions */}
        <section className={styles.section}>
          <h2>Suivi des évolutions</h2>
          <p>
            Retrouvez les dernières évolutions et nouvelles fonctionnalités. 
            Explorez les améliorations apportées pour optimiser vos environnements, enrichir vos capacités de gestion, et faciliter vos opérations.
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
              Voir toutes les versions
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