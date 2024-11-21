---
title: Permissions utilisateurs
---

La console Shiva permet une gestion fine des droits des utilisateurs d'une organisation, avec une ségrégation par tenant.
Initialement, c'est le compte principal du commanditaire qui permet la configuration initiale des comptes et des permissions associées.
Par la suite, le droit __'iam_write'__ permet à un compte d'administrer les permissions des autres utilisateurs.

## Permissions disponibles pour les utilisateurs de votre organisation

Les permissions suivantes sont configurables pour chaque [utilisateur](accounts.md#affectation-des-permissions-à-un-utilisateur) et pour chaque [tenant](tenants.md#selection-dun-tenant) de votre organisation.

- Les permissions de type __'read'__ sont associés à la consultation sans possibilité de configuration
- Les permissions de type __'write'__ sont associés à la modification de configuration.
- __Ce sont des permissions, pas des rôles.__ À ce titre, il est nécessaire d'avoir la permission READ et WRITE pour modifier une configuration.

__VERSION : 20241007__

| Nom de la permission                          | Description de la permission                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultation des journaux logs et activités                                                                                    |
| activity_write                                | Gestion des journaux logs et activités                                                                                         |
| backup_iaas_opensource_read                   | Gestion des ressources de type backup - Offre OpenIaaS - consultation                                                          |
| backup_iaas_opensource_write                  | Gestion des ressources de type backup - Offre OpenIaaS - modification                                                          |
| backup_iaas_spp_read                          | Gestion des ressources de type backup - Offre Vmware - consultation                                                            |
| backup_iaas_spp_write                         | Gestion des ressources de type backup - Offre Vmware - modification                                                            |
| bastion_read                                  | Consultation des ressources de type bastion                                                                                    |
| bastion_write                                 | Gestion des ressources (appliances, sessions,...)  de type Bastion                                                             |
| bastion_console_access                        | Autorisation d'accès à la console (ssh/rdp) d'une ressource protégée par une appliance Bastion                                 |
| compute_iaas_opensource_console_access        | Offre OpenIaaS -Ouverture de la console d'une machine virtuelle                                                                |
| compute_iaas_opensource_infrastructure_read   | Offre OpenIaaS -Consultation de données avancées des ressources Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS -Gestion avancée des ressources Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Offre OpenIaaS -Consultation des ressources de type Machines Virtuelles                                                        |
| compute_iaas_opensource_management            | Offre OpenIaaS -Gestion des ressources de type Machines Virtuelles                                                             |
| compute_iaas_opensource_virtual_machine_power | Offre OpenIaaS -Gestion de l'alimentation d'une machine virtuelle                                                              |
| compute_iaas_vmware_console_access            | Offre Vmware - Ouverture de la console d'une machine virtuelle                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Consultation de données avancées des ressources VMware (règles affinité/anti-affinité, configuration drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Gestion avancée des ressources VMware                                                                           |
| compute_iaas_vmware_read                      | Offre Vmware - Consultation des ressources de type Machines Virtuelles                                                         |
| compute_iaas_vmware_management                | Offre Vmware - Gestion des ressources de type Machines Virtuelles                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Gestion de l'alimentation d'une machine virtuelle                                                               |
| console_public_access_read                    | Consultation des IPs autorisées à accéder à la console                                                                         |
| console_public_access_write                   | Ajout d'IPs autorisées à accéder à la console                                                                                  |
| compute_virtual_machine_power                 | Gestion de l'alimentation d'une machine virtuelle                                                                              |
| documentation_read                            | Consultation des ressources documentation de confluence                                                                        |
| housing_read                                  | Consultation des ressources de type colocation                                                                                 |
| iam_offline_access                            | Création et suppression d'Access Token Personnels (PAT)                                                                        |
| iam_read                                      | Consultation des droits utilisateurs                                                                                           |
| iam_write                                     | Gestion des droits utilisateurs                                                                                                |
| intervention_read                             | Consultation des changements et mises en production prévues sur la plateforme                                                  |
| inventory_read                                | Consultation des ressources de type Inventaire                                                                                 |
| inventory_write                               | Gestion des ressources de type Inventaire                                                                                      |
| monitoring_read                               | Consultation du monitoring                                                                                                     |
| monitoring_write                              | Gestion du monitoring                                                                                                          |
| metric_read                                   | Consultation des données de santé sur les machines virtuelles et hosts                                                         |
| network_read                                  | Consultation des ressources réseau                                                                                             |
| network_write                                 | Gestion des ressources réseau                                                                                                  |
| order_read                                    | Consultation des commandes infrastructures                                                                                     |
| order_write                                   | Création de commande infrastructure                                                                                            |
| object-storage_iam_management                 | Permet de gérer les compte de stockage sur le produit S3                                                                       |
| object-storage_read                           | Permet de voir les buckets et les configurations des buckets                                                                   |
| object-storage_write                          | Permet d'éditer les buckets et les configurations des buckets                                                                  |
| openshift_management                          | Permet de se connecter sur les plateforms Openshift (scopé au tenant)                                                          |
| Owner                                         | L'utilisateur a les droits d'administration d'un tenant                                                                        |
| support_management                            | consultation de l'ensemble des tickets support du tenant                                                                       |
| support_read                                  | Consultation de ses tickets support du tenant                                                                                  |
| support_write                                 | Création d'un ticket support sur le tenant                                                                                     |
| tag_read                                      | Consultation des tags, excepté les tags RTMS                                                                                   |
| tag_write                                     | Gestion des tags, excepté les tags RTMS                                                                                        |
| ticket_comment_read                           | Consultation des commentaires                                                                                                  |
| ticket_comment_write                          | Gestion des commentaires                                                                                                       |
| ticket_read                                   | Consultation des tickets                                                                                                       |
| ticket_write                                  | Gestion des tickets                                                                                                            |

**Notes** :

- *Il n'y a aucune limite quant au nombre d'owners (propriétaires) pouvant être définis sur le tenant. Cependant, l'interface de gestion (IHM) émet un avertissement lorsqu'il y a plus de 3 owners, afin d'inciter à limiter le nombre de propriétaires pour des raisons de sécurité et de gestion optimale des accès.*
- *Lors de l'ajout d'un nouveau propriétaire (owner), la mise à jour de ses permissions peut nécessiter un délai allant jusqu'à 60 minutes. Ce temps de propagation est normal et permet de s'assurer que les droits d'accès sont correctement appliqués à l'ensemble des services et ressources associés.*
- *Pour retirer un propriétaire (owner) du tenant, l'utilisateur doit soumettre une demande au support. Cette procédure permet de garantir que les modifications des droits d'accès sont effectuées de manière sécurisée et conforme aux bonnes pratiques de gestion des accès.*

## Permissions dépréciées

Les permissions suivantes ne sont plus disponibles :

| Nom de la permission                           | Date       | Description de la permission                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consultation des ressources de type backup                                                                     |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestion des ressources de type backup - modification                                                           |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Ouverture de la console d'une machine virtuelle                                                                |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consultation de données avancées des ressources VMware (règles affinité/anti-affinité, configuration drs, etc) |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestion avancée des ressources VMware                                                                          |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultation des ressources de type Machines Virtuelles                                                        |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestion des ressources de type Machines Virtuelles                                                             |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestion de l'alimentation d'une machine virtuelle                                                              |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestion des nouveaux droits pour soi-même                                                                      |

