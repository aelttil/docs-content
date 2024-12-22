---
title: Presentazione
---

## Caratteristiche generali

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è stata inizialmente concepita per fornire facilità di ripresa attività e continuità operativa nel settore industriale, bancario e assicurativo.
Le sue caratteristiche tecniche, in particolare gli aspetti di rete, la rendono una piattaforma ideata per carichi di lavoro che richiedono la massima disponibilità.

La piattaforma Cloud Temple è completamente automatizzata e si basa sui seguenti partner tecnologici:

- Il calcolo si basa sulle tecnologie __CISCO UCS__,
- L'archiviazione si basa sulle tecnologie __IBM Spectrum Virtualize__ e __IBM FlashSystem__ per l'archiviazione a blocchi, __DELL ECS__ per l'archiviazione oggetti,
- La rete si basa sulle tecnologie __JUNIPER__.

La piattaforma è del tipo __'VersaStack'__, alleanza tecnologica tra Cisco e IBM, che permette di integrare facilmente le matrici di compatibilità dei principali editori.

Benché sia completamente automatizzata tramite le sue API e il suo provider Terraform, la piattaforma Cloud Temple offre tuttavia un approccio unico:

- Le lame di calcolo sono dedicate al [tenant](../console/tenants.md) dell'[organizzazione](../console/organisations.md) del committente e non sono condivise tra i clienti.
- I volumi di archiviazione sono dedicati al [tenant](../console/tenants.md) dell'[organizzazione](../console/organisations.md) del committente e non sono condivisi tra i clienti.
- Gli stack software (virtualizzazione, backup, bilanciamento del carico, firewalling, ...) sono anch'essi dedicati e non sono condivisi.

La piattaforma Cloud Temple assicura così una __massima prevedibilità del comportamento dell'infrastruttura__ (il committente controlla i tassi di virtualizzazione e la pressione in Iops sull'archiviazione) nonché una __forte prevedibilità della fatturazione__, con tutti gli UO pagati a consumo mese per mese.

Questa infrastruttura è qualificata SecNumCloud dall'[ANSSI](https://www.ssi.gouv.fr/) che ne garantisce una gestione industriale con un alto livello di automazione e di sicurezza.

L'offerta IaaS comprende i seguenti elementi:

    - Risorse di calcolo (CPU, RAM) dedicate e su richiesta;
    - Risorse di archiviazione su richiesta (diverse classi di archiviazione disponibili);
    - Risorse di rete (accesso a Internet, rete privata);
    - Backup incrociati con ritenzione configurabile (opzione possibile di esternalizzazione);
    - Replicazione asincrona a livello di archiviazione o di macchine virtuali;

Tutte le risorse _IaaS_ possono essere gestite dalla [Console Shiva](../console/console.md).
È inoltre possibile adottare un approccio *"Infrastructure as Code"* per gestire le risorse Cloud, grazie alle API e al provider Terraform forniti da Cloud Temple.


## Vantaggi
| Vantaggio            | Descrizione                                                                                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale     | Ospitalità dei dati in Francia e conformità al RGPD.                                                                                             |
| Sicurezza            | Piattaforma altamente sicura, qualificata __SecNumCloud__, __HDS__ (Hosting dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.           |
| Alta disponibilità   | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, compresi i periodi di manutenzione.                                    |
| Resilienza           | Implementazione di piani di continuità operativa o di ripresa dell'attività secondo le necessità.                                                 |
| Automatizzazione     | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale                                      |
| Su domanda           | Risorse disponibili su richiesta                                                                                                                  |


## Piattaforme di acquisto

Sei un attore del Servizio Pubblico e desideri ordinare i servizi di Cloud Temple?

La nostra offerta è disponibile attraverso la piattaforma di acquisti pubblici [UGAP](https://cloudtour.capgemini.fr/partenaires/cloud-temple) così come il mercato [CAIH](https://www.caih-sante.org) per il settore medico.

[Per saperne di più](https://www.cloud-temple.com/cloud-souverain-disponible-via-lugap/)


