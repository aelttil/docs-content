---
title: Suivi des changements
---

## Version 241031.1.42.0

- Modification des captures d'écrans suite à la refonte de l'IHM "Console".
- Modification des nommages de certains onglets, menus, boutons d'actions suite à la refont de l'IHM "Console".

## Version 241001.1.41.0

- Précisions complémentaires sur les limitations d'Openshift en environnement SecNumCloud.
- Documentation initiale sur l'offre OpenIaaS :
  - **IAM** - Mise a jour du nom des permissions pour preparer la MEP OpenIaaS.
  - **NETWORK** - Mise a jour de la documentation d'installation fortinet pour supporter les nouvelles permissions.
  - **CONSOLE / API** - Mise a jour du pilotage des activités.
  - **STATUT** : Précisions sur la gestion des incidents et des notifications.
  - **COMPUTE** : Précision que 16Go de ram hyperviseurs sont dédiés à l'hyperviseur et non utilisable par le client.
  - **OPENSHIFT** : Correction de typos; ajout de précisions.

## Version 240924.1.40.0

- Correction d'une erreur dans la documentation de backup sur le statut "held"
- Ajout de précisions sur les SLA pour le backup de machines virtuelles et de disques.
- Ajout de la possibilité d'autoriser l'accès à la console Shiva pour une nouvelle IP
- Modification de la table des permissions ; ajout des droits associés à Owner. iam_permission_manager passe en déprécié
- Nouvelle permission nommée "bastion_console_access" qui sera désormais nécessaire pour se connecter à une appliance (en SSH/RDP).
- Visualisation de la consommation de ressources au sein d'un tenant
- Corrections de fautes de frappe sur la partie stockage bloc
- Ajout de précisions sur la partie S3
- Ajout de Veeam Kasten K10 pour la migration et la sauvegarde OpenShift
- Ajout de la liste des permissions OpenShift disponibles
- Ajout des permissions et limitations OpenShift
- Correction de la procédure d'installation de pfSense
- Ajout de la commande d'une AZ dans le menu order
- Ajout de la commande d'un cluster de stockage
- Modification de la documentation sur la commande de réseau

## Version 240709.1.39.1

- Ajout du guide d'installation d'un firewall Fortinet sur l'infrastructure Cloud Temple

## Version 240705.1.38.2

- Ajout du RACI PaaS dans la partie contractuelle

## Version 240701.1.38.1

- Ajout d'une FAQ sur l'offre PaaS Openshift.

## Version 240627.1.37.5

- Section Paas Openshift : Ajout de précisions sur la version déployée et sur les softs limites actuelles. 
- Section Paas Openshift : Ajout d'un paragraphe sur la sauvegarde de la plateforme Openshift.

## Version 240625.1.37.4

- Section Stockage / Bloc : Ajout de précisions sur le fonctionnement des datastores dans l'offre IaaS de VMware.
- Section Compute / Offre vmware : Les propriétés de type vAPP d'une machine virtuelle sont désormais modifiables dans les propriétés avancées de la machine virtuelle.
- Section Backup : Modification du comportement de la sauvegarde pour les politiques de sauvegarde suspendues ("held"); désormais, il n'est plus possible de démarrer une machine qui a une politique de sauvegarde suspendue. Ajout d'une question à la FAQ sur ce point.
- Section Backup : Désormais la politique de restauration par défaut est **TEST** afin de limiter les risques sur la production; 
- Section Backup : Il est maintenant possible de changer le nom de la vm restaurée.

## Version 240608.1.37.3

- Ajout de la possibilité de changer le type de contrôleur disque dans une machine virtuelle de l'offre IAAS-Vmware.
- Précision sur la limite à 20 réseaux par action de propagation.
- Indication de la durée de stockage des événements dans la console SHIVA (FAQ/Générale) : 6 mois.
  
## Version 240514.1.37.2
- Corrections au DPA

## Version 240514.1.37.1
- Ajout d'un paragraphe sur la description des traitements au DPA.
- Ajout de WINSCP comme client compatible S3.

## Version 240514.1.37.0

- Ajout du document "Données à Caractère Personnel" (DPA)

## Version 240430.1.36.4

- Correction de quelques informations sur l'offre de calcul vmware et le stockage.

## Version 240430.1.36.3

- L'offre de [Calcul v2](../iaas/compute.md/#offre-de-calcul-v2) n'est plus commercialisée et est remplacée par l'offre de [Calcul v3](../iaas/compute.md/#offre-de-calcul-v3).
- Ajout de la description de [l'abonnement aux canaux de notification thématique](../console/accounts.md#abonnement-aux-notifications-thématiques).
- Ajout de la [gestion des accès réseaux à vos buckets S3](../paas/s3.md#limitations-des-accès-à-vos-bucket-s3) et enrichissement de la [faq](../paas/s3.md#faq).
- L'offre IPV4 v1 n'est plus commercialisée et est remplacée par l'offre IPV4 v2.
- Ajout de la description de la [gestion des accès internet](../network/internet.md#gestion-de-vos-connectivités-internet) depuis la console Cloud Temple.
- Ajout de la description de l'usage des adresses *Provider Independant*.
- Ajout des unités d'oeuvre RedHat Openshift.
- Ajout des unités d'oeuvre de [hosting de type 'serveur'](../housing/housing.md).
- Ajout du suivi des [opérations planifiés et incidents](../console/status.md) dans la console Cloud Temple.
- Mise a jour des [permissions](../console/permissions.md).