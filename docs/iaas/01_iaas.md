---
title: Présentation
---

## Caractéristiques générales

L'offre __IaaS (Infrastructure As A Service)__ de Cloud Temple a initialement été imaginée pour offrir des facilités de reprise d'activité et de continuité d'activité au monde de l'industrie, de la banque et de l'assurance.
Ses caractéristiques techniques, en particulier les aspects réseaux, en font une plateforme pensée pour les charges de travail nécessitant une disponibilité maximale.

La plateforme Cloud Temple est totalement automatisée et s'appuie sur les partenaires technologique suivant :

- Le calcul est basé sur les technologies __CISCO UCS__,
- Le stockage est basé sur les technologies __IBM Spectrum Virtualize__ et __IBM FlashSystem__ pour le stockage bloc, __DELL ECS__ pour le stockage objets,
- Le réseau est basé sur les technologies __JUNIPER__.

La plateforme est de type __'VersaStack'__, alliance technologique entre Cisco et IBM, et permet d'intégrer facilement les matrices de compatibilités des principaux éditeurs.

Bien qu'elle soit entièrement automatisée via ses APIs et son provider Terraform, la plateforme Cloud Temple offre cependant une approche singulière :

- Les lames de calcul sont dédiées au [tenant](../console/tenants.md) de [l'organisation](../console/organisations.md) du commanditaire et ne sont pas mutualisées entre les clients.
- Les volumes de stockage sont dédiés au [tenant](../console/tenants.md) de [l'organisation](../console/organisations.md) du commanditaire et ne sont pas mutualisés entre les clients.
- Les stacks logicielles (virtualisation, sauvegarde, load balancing, firewalling, ...) sont aussi dédiées et ne sont pas mutualisées.

La plateforme Cloud Temple permet ainsi une __prédictibilité maximale du comportement de l'infrastructure__ (le commanditaire est maitre des taux de virtualisation et de la pression en Iops sur le stockage) ainsi qu'une __prédictibilité forte de la facturation__, l'ensemble des UOs étant en paiement à la consommation au mois le mois.

Cette infrastructure est qualifiée SecNumCloud par [l'ANSSI](https://www.ssi.gouv.fr/) qui est ainsi le garant d'un pilotage de manière industrielle avec un très haut niveau d'automatisation et de sécurité.

L'offre IaaS comprend les éléments suivants :

    - Ressources de calcul (CPU, RAM) dédiées et à la demande ;
    - Ressources de stockage à la demande (plusieurs classes de stockage disponible)  ;
    - Ressources réseau (accès Internet, Réseau privé) ;
    - Sauvegardes croisées avec rétention configurable (externalisation possible en option) ;
    - Réplication asynchrone au niveau du stockage ou des machines virtuelles;

L'ensemble de vos ressources _IaaS_ sont pilotables depuis la [Console Shiva](../console/console.md). 
Il est également possible d'adopter une approche *"Infrastructure as Code"* pour piloter vos ressources Cloud, grâce aux APIs et au provider Terraform mis à votre disposition par Cloud Temple.


## Avantages
| Avantage            | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confiance numérique | Hébergement des données en France et conformité RGPD.                                                                                          |   
| Sécurité            | Plateforme hautement sécurisée, qualifiée __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ et __ISAE 3402 type II__. |  
| Haute disponibilité | Taux de disponibilité de la plateforme de 99,99%, mesuré mensuellement, plages de maintenance incluses.                                        |   
| Résilience          | Mise en place de plans de continuité ou de reprise d'activité selon les besoins.                                                               |
| Automatisation      | Plateforme entièrement automatisée pensée pour s'intégrer dans un programme de transformation numérique                                        |
| On demand           | Ressources disponible à la demande                                                                                                             |


## Plateformes d'achats

Vous êtes un acteur du Service Public et vous souhaitez commander les services de Cloud Temple ? 

Notre offre est disponible via la plateforme d'achats publics [UGAP](https://cloudtour.capgemini.fr/partenaires/cloud-temple) ainsi que le marché [CAIH](https://www.caih-sante.org) pour le monde médicale.

[En savoir plus](https://www.cloud-temple.com/cloud-souverain-disponible-via-lugap/)

