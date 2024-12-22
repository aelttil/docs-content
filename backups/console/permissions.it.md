---
title: Permessi utenti
---

La console Shiva consente una gestione dettagliata dei diritti degli utenti di un'organizzazione, con una segregazione per tenant.
Inizialmente, è il conto principale del committente che consente la configurazione iniziale dei conti e dei relativi permessi.
Successivamente, il diritto __'iam_write'__ permette a un conto di amministrare i permessi degli altri utenti.

## Permessi disponibili per gli utenti della vostra organizzazione
I permessi seguenti sono configurabili per ogni [utente](accounts.md#affectation-des-permissions-à-un-utilisateur) e per ogni [tenant](tenants.md#selection-dun-tenant) della vostra organizzazione.

- I permessi di tipo __'read'__ sono associati alla consultazione senza possibilità di configurazione
- I permessi di tipo __'write'__ sono associati alla modifica della configurazione.
- __Sono permessi, non ruoli.__ Di conseguenza, è necessario avere i permessi READ e WRITE per modificare una configurazione.

__VERSIONE: 20241007__

| Nome del permesso                             | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consultazione dei registri log e attività                                                                                     |
| activity_write                                | Gestione dei registri log e attività                                                                                          |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                     |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                          |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                       |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                            |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                   |
| bastion_write                                 | Gestione delle risorse (apparecchiature, sessioni,...) di tipo Bastion                                                       |
| bastion_console_access                        | Autorizzazione di accesso alla console (ssh/rdp) di una risorsa protetta da un'apparecchiatura Bastion                       |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                           |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra                                                |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                             |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                     |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                          |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                      |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                             |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione DRS, ecc)|
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                      |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                       |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali                                                            |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                        |
| console_public_access_read                    | Consultazione degli IP autorizzati all'accesso alla console                                                                  |
| console_public_access_write                   | Aggiunta di IP autorizzati all'accesso alla console                                                                           |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                          |
| documentation_read                            | Consultazione delle risorse documentali di confluence                                                                         |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                |
| iam_offline_access                            | Creazione e rimozione di Token di Accesso Personali (PAT)                                                                     |
| iam_read                                      | Consultazione dei diritti utente                                                                                              |
| iam_write                                     | Gestione dei diritti utente                                                                                                   |
| intervention_read                             | Consultazione dei cambiamenti e implementazioni previste sulla piattaforma                                                    |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                     |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                |
| monitoring_write                              | Gestione del monitoraggio                                                                                                     |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                               |
| network_read                                  | Consultazione delle risorse di rete                                                                                           |
| network_write                                 | Gestione delle risorse di rete                                                                                                |
| order_read                                    | Consultazione degli ordini infrastruttura                                                                                     |
| order_write                                   | Creazione di un ordine infrastruttura                                                                                         |
| object-storage_iam_management                 | Permette di gestire gli account di archiviazione del prodotto S3                                                              |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                    |
| object-storage_write                          | Permette di editare i bucket e le configurazioni dei bucket                                                                   |
| openshift_management                          | Permette di connettersi sulle piattaforme Openshift (limitato al tenant)                                                      |
| Proprietario                                  | L'utente ha i diritti di amministrazione di un tenant                                                                         |
| support_management                            | consultazione dell'insieme dei ticket di supporto del tenant                                                                  |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                        |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                 |
| tag_read                                      | Consultazione dei tag, esclusi i tag RTMS                                                                                     |
| tag_write                                     | Gestione dei tag, esclusi i tag RTMS                                                                                          |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                    |
| ticket_comment_write                          | Gestione dei commenti                                                                                                         |
| ticket_read                                   | Consultazione dei ticket                                                                                                      |
| ticket_write                                  | Gestione dei ticket                                                                                                           |

**Note** :

- *Non c'è limite al numero di proprietari (owners) che possono essere definiti sul tenant. Tuttavia, l'interfaccia di gestione (IHM) emette un avviso quando c'è più di 3 owners, per incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.*
- *Quando si aggiunge un nuovo proprietario (owner), l'aggiornamento dei suoi permessi può richiedere un ritardo fino a 60 minuti. Questo tempo di propagazione è normale e permette di assicurarsi che i diritti di accesso siano correttamente applicati a tutti i servizi e risorse associati.*
- *Per ritirare un proprietario (owner) dal tenant, l'utente deve presentare una richiesta di supporto. Questa procedura garantisce che le modifiche dei diritti di accesso siano effettuate in maniera sicura e conforme alle buone pratiche di gestione degli accessi.*

## Permessi deprecati
Le seguenti autorizzazioni non sono più disponibili:

| Nome dell'autorizzazione                           | Data       | Descrizione dell'autorizzazione                                                                                |
| --------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATO**)                        | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                     |
| backup_write (**DEPRECATO**)                        | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                               |
| compute_console_access (**DEPRECATO**)              | 07/10/2024 | Apertura della console di una macchina virtuale                                                                |
| compute_infrastructure_read (**DEPRECATO**)         | 07/10/2024 | Consultazione dei dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione DRS, ecc) |
| compute_infrastructure_write (**DEPRECATO**)        | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                         |
| compute_read (**DEPRECATO**)                        | 07/10/2024 | Consultazione delle risorse di tipo Macchine Virtuali                                                          |
| compute_management (**DEPRECATO**)                  | 07/10/2024 | Gestione delle risorse di tipo Macchine Virtuali                                                               |
| compute_virtual_machine_power (**DEPRECATO**)       | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                           |
| iam_manage_permissions (**DEPRECATO**)              | 07/10/2024 | Gestione dei nuovi diritti per sé stessi                                                                       |

