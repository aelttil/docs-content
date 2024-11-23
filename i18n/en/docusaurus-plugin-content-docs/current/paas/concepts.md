---
title: Concepts
---

## Objectifs

La plateforme __'PaaS'__ de Cloud Temple vise à permettre à nos clients d'opérer leurs programmes de transformation numérique en toute facilité, quelque soit l'infrastructure sous-jacente.

Les services associés à cette plateforme sont les suivants :

- Conteneurisation en partenariat avec __REDHAT__ via la plateforme __'[OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift)'__,
- Stockage objets transactionnel en partenariat avec __DELL__ via la plateforme __'[ECS](https://www.dell.com/en-us/dt/storage/ecs/index.htm?hve=explore+ecs)'__,
- Chiffrement en partenariat avec __THALES__.

Ces services seront progressivement ouvert à la commercialisation sur le premier trimestre 2024.
## Plateforme de stockage objets

### Généralités

Le stockage objet, se distingue par sa robustesse, sa sécurité renforcée et sa capacité d'évolution, 
offrant un accès permanent à vos données. Ce système est idéal pour archiver des informations dans le cloud, 
garantissant leur disponibilité depuis n'importe quel emplacement.

Il répond efficacement aux besoins des entreprises nécessitant une gestion volumineuse et diversifiée de fichiers numériques.

Lancé en 2006 par Amazon Web Services (AWS), __Simple Storage Service (S3)__ est devenu le standard de fait pour le stockage objet dans le monde du cloud.

Le stockage objet S3 se caractérise par son __élasticité__, ajustant automatiquement les capacités de stockage en fonction 
des fluctuations du volume de données. Cette flexibilité permet aux utilisateurs de manipuler les fichiers sans se 
préoccuper des contraintes de capacitée, optimisant ainsi le processus d'archivage tout en assurant un accès rapide et
efficace aux informations.

La __sécurité des données__ est assurée par des stratégies de protection multicouches, incluant l'emploi de clés 
d'accès cryptées, le chiffrement des données en transit et au repos, ainsi que la gestion rigoureuse 
des droits d'accès.

En outre, l'intégration fluide du stockage objet S3 avec d'autres services cloud enrichit et facilite l'expérience des développeurs
grâce à un vaste écosystème d'outils et de bibliothèques facilitant l'intégration dans les applications et les workflows existants.

### Cas d'usages

Le stockage objets Cloud Temple se présente comme une solution de choix pour __le stockage secondaire ou hiérarchisé__, 
offrant une alternative économique pour archiver __les données moins fréquemment accédées__, telles que les sauvegardes 
de bases de données ou les fichiers de grande taille, depuis un stockage primaire plus onéreux.

Pour le développement et le déploiement d'applications, le stockage objets Cloud Temple facilite le __développement des 
applications web, mobiles et cloud de nouvelle génération__.

En tant que fondement pour __la création d'un Data Lake__, le stockage objets Cloud Temple permet aux entreprises de tous 
secteurs de maximiser la valeur de leurs données. Il intègre des services HDFS performants, offrant des capacités 
d'analyse avancées sur site pour améliorer la prise de décision tout en minimisant les risques et les délais. 

Basé sur la solution __Dell ECS (Elastic Cloud Storage)__, le stockage objets Cloud Temple est enrichi par des partenariats stratégiques avec divers 
éditeurs, tels que __Databricks__ et __ChapsVision__, augmentant ainsi la portée de ses solutions de stockage objet.

Pour le domaine de __l'Internet des Objets (IoT)__, il se distingue par sa capacité à gérer un volume illimité d'objets, 
sans restriction sur la taille des objets ou des métadonnées, ce qui en fait la plateforme idéale pour le stockage des données IoT.

Le stockage objets Cloud Temple propose également une solution sécurisée pour __l'archivage et la conservation 
à long terme des données__, répondant aux besoins de rétention des entreprises.

Il est particulièrement adapté à l'hébergement de __contenus statiques__, comme les images, scripts et feuilles de style CSS, 
optimise les performances des applications web en déchargeant les serveurs d'application et en optimisant le téléchargement des contenus aux utilisateurs finaux.

Enfin, en tant que composante essentielle des __stratégies de sauvegarde et de reprise après sinistre__ (DRaaS), le stockage 
objets Cloud Temple permet une sauvegarde régulière et fiable des données critiques. 
Sa structure distribuée multi-sites assure la disponibilité des données en tout temps, réduisant ainsi les interruptions 
d'activité et les pertes de données potentielles.
## Plateforme RedHat OpenShift
### Généralités

__RedHat OpenShift__ est une plateforme de conteneurisation d'applications basée sur __Kubernetes__, qui automatise le déploiement, 
la gestion et la mise à l'échelle des applications dans un environnement cloud de confiance. 

Conçue pour les développeurs et les équipes IT, elle offre un environnement de développement, de test et de production 
cohérent et sécurisé pour les applications cloud-native et les applications traditionnelles monolithiques.

__RedHat OpenShift__ facilite le travail des ingénieurs DevOps en intégrant des outils de développement, des tests automatisés, et des processus de 
déploiement continu (CI/CD) pour accélérer le cycle de vie du développement des applications. Elle prend en charge une 
vaste gamme de langages de programmation et de frameworks, permettant aux développeurs de travailler avec les 
technologies qu'ils connaissent et apprécient.

La plateforme fournit une infrastructure de conteneurs hautement disponible et sécurisée, en s'appuyant sur les 
meilleures pratiques de sécurité et en offrant des fonctionnalités telles que l'authentification intégrée, l'autorisation, 
et le contrôle d'accès basé sur les rôles. __RedHat OpenShift__ permet également une gestion fine des ressources, 
garantissant que les applications disposent des ressources nécessaires pour fonctionner de manière optimale.

Avec __RedHat OpenShift__, les entreprises peuvent facilement déployer leurs applications dans un environnement de 
cloud hybride, bénéficiant ainsi de la flexibilité de déployer sur site ou dans le cloud.

### Cas d'usages

__RedHat OpenShift__ est utilisé dans une variété de cas d'usage, en raison de sa flexibilité, de sa sécurité et de son écosystème étendu. 
Voici quelques-uns des principaux cas d'usage :

1. **Développement d'applications cloud-native :** OpenShift est idéal pour développer et déployer des applications conçues 
spécifiquement pour le cloud, utilisant des architectures microservices, des conteneurs, et des services gérés. 
Cela permet aux développeurs de se concentrer sur la création de fonctionnalités plutôt que sur la gestion de l'infrastructure.

2. **Modernisation des applications existantes :** Les entreprises utilisent OpenShift pour moderniser leurs 
applications monolithiques traditionnelles, en les refactorisant en microservices ou en les conteneurisant pour 
améliorer l'évolutivité, la résilience et la portabilité.

3. **Intégration et déploiement continus (CI/CD) :** OpenShift facilite la mise en place de pipelines CI/CD, 
permettant l'intégration et le déploiement automatiques du code, réduisant ainsi les erreurs humaines 
et accélérant le cycle de vie de développement des applications.

4. **Automatisation des opérations IT :** Grâce à son intégration étroite avec Kubernetes, OpenShift permet une 
gestion automatisée des conteneurs, y compris leur déploiement, leur mise à l'échelle et leur gestion du cycle de vie, 
libérant ainsi les opérateurs IT des tâches répétitives.

5. **Développement multi-cloud et hybride :** OpenShift offre la flexibilité de déployer des applications dans des 
environnements on-premise, publics, privés ou hybrides, permettant aux entreprises de choisir l'approche la plus
adaptée à leurs besoins sans être enfermées dans un seul fournisseur cloud.

6. **Applications à grande échelle et à haute disponibilité :** OpenShift est conçu pour supporter des applications 
nécessitant une haute disponibilité, une grande échelle et une performance élevée, grâce à sa gestion efficace des 
ressources et à sa capacité à répliquer des applications sur plusieurs nœuds.

7. **Développement et déploiement d'applications IoT :** OpenShift peut être utilisé pour développer et déployer des
applications IoT, bénéficiant de sa capacité à gérer un grand nombre de connexions et de données en temps réel.

8. **Big Data et applications analytiques :** Avec son support pour des solutions comme Apache Spark sur Kubernetes, 
OpenShift permet le traitement de grandes quantités de données et l'exécution d'analyses complexes, facilitant ainsi 
la prise de décision basée sur les données.

9. **Environnements de développement et de test :** OpenShift offre des environnements isolés et reproductibles pour 
le développement et le test d'applications, réduisant les conflits entre les équipes et améliorant la qualité du code.

Ces cas d'usage illustrent la polyvalence d'OpenShift comme plateforme permettant non seulement d'accélérer 
le développement et le déploiement d'applications, mais aussi de soutenir la transformation numérique des entreprises à travers différents secteurs d'activité.
