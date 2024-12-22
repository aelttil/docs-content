---
title: Matrice di responsabilità IaaS
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli
Rievocazione dei diversi ruoli del RACI:

| Ruolo        | Descrizione                                                                            |
|--------------|----------------------------------------------------------------------------------------|
| (R) Realizza | __R__ealizza il processo                                                               |
| (A) Approva  | __A__pprova l'esecuzione del processo                                                  |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informato| __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

## Definizione del vostro bisogno
| Attività                                                                                        | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------|---------------|--------------------|
| Definire l'architettura globale della vostra piattaforma Cloud Temple                           | __RA__        | __CI__             |
| Definire il numero di tenant e il numero di zone di disponibilità per ogni tenant               | __RA__        | __CI__             |
| Definire la vostra strategia globale di ripresa o di continuità operativa                       | __RA__        | __CI__             |
| Dimensionare correttamente la vostra piattaforma Cloud Temple (calcolo, archiviazione, rete, backup,...) | __RA__ | __CI__ |
| Sottoscrivere ai servizi con le informazioni necessarie                                        | __RA__        | __I__              |

## Mise en œuvre initiale dei vostri tenant Cloud Temple

| Attività                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare l'implementazione dei **datacenter fisici**                                                        |               | __RA__             | 
| Assicurare l'implementazione delle infrastrutture **calcolo**                                                 | __I__         | __RA__             | 
| Assicurare l'implementazione delle infrastrutture **memorizzazione**                                          | __I__         | __RA__             | 
| Assicurare l'implementazione della connettività alla **rete backbone(1)**                                     | __I__         | __RA__             | 
| Acquisire e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple      |               | __RA__             | 
| Implementare la configurazione di base dei vostri tenants Cloud Temple                                        | __CI__        | __RA__             | 
| Implementare la configurazione iniziale per il servizio di backup                                             | __CI__        | __RA__             |
| *Se sottoscritti:* implementare la configurazione di rete iniziale per i servizi Internet e Firewall          | __CI__        | __RA__             |
| Offrire l'assistenza richiesta per la presa in mano dei vostri ambienti Cloud Temple                          | __I__         | __RA__             | 
| Effettuare gli aggiustamenti della configurazione finale del servizio dopo la sua consegna                    | __RA__        | __C__              | 
| Configurare un repository di autenticazione esterno per la console Cloud Temple                               | __RA__        | __C__              | 
| Creare gli utenti di ogni tenant nella console Cloud Temple e assegnare i diritti                             | __RA__        |                    | 
| Validare la conformità della piattaforma consegnata con il repertorio SecNumCloud                             | __I__         | __RA__             |
| Validare la conformità della piattaforma consegnata con le specificazioni richieste                           | __RA__        | __CI__             |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, offrendo una colonna vertebrale sulla quale 
si basano le reti clienti specifiche, le quali sono integrate e supportate da questa infrastruttura principale.*

## Integrare il vostro sistema informativo nei vostri ambienti Cloud Temple

| Attività                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------|
| Creare, installare, aggiornare le vostre macchine virtuali                                                                     | __RA__        |                   | 
| Installare e configurare i software e i middleware sulle vostre macchine virtuali                                              | __RA__        |                   | 
| Acquistare e detenere le licenze e i diritti di utilizzo <br/>per i sistemi operativi delle vostre macchine virtuali           | __RA__        |                   | 
| Configurare la rete per ciascuna delle vostre macchine virtuali                                                                | __RA__        |                   |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di backup coerente                                              | __RA__        | __C__             | 
| Assicurarsi che ogni macchina virtuale sia associata a un <br/>piano di ripresa delle attività o di continuità operativa coerente | __RA__        | __C__             | 
| Implementare una strategia di protezione antivirale sulle vostre macchine virtuali                                             | __RA__        |                   | 
| Mettere in atto una soluzione di metrologia e sorveglianza sulle vostre macchine virtuali                                      | __RA__        |                   | 
| Definire la politica di TAG delle vostre macchine virtuali                                                                     | __RA__        |                   | 

## Operazioni ricorrenti

### Gestione degli accessi e delle identità
| Attività                                                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------|
| Assicurare l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                    |               | __RA__            |
| Assicurare l'accessibilità del sistema informativo distribuito sulle vostre macchine virtuali                                       | __RA__        |                   |
| Gestire le autorizzazioni fisiche e logiche dei team Cloud Temple alle infrastrutture SecNumCloud.                                  |               | __RA__            |
| Amministrare gli accessi e la politica di sicurezza associata all'interfaccia della console Cloud Temple e alla sua API              | __RA__        |                   |
| Amministrare gli accessi e la politica di sicurezza associata al sistema informativo<br/> ospitato all'interno dei vostri tenant Cloud Temple | __RA__      |                   |

### mantenimento delle condizioni operative e di sicurezza

Le attività volte a mantenere in condizioni operative e sicure le infrastrutture e i servizi offerti da Cloud Temple, nell'ambito della sua offerta IaaS, sono realizzate con l'obiettivo di conformità alla qualifica SecNumCloud.

| Attività                                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare il mantenimento in condizione operativa delle infrastrutture **data center fisici**                      | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **data center fisici**                  | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **calcolo**                                | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **calcolo (2)**                         | __RA__        | __CI__             | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **memorizzazione**                         | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **memorizzazione**                      | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **reti backbone**                          | __I__         | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **reti backbone**                       | __I__         | __RA__             |
| Assicurare il mantenimento in condizione operativa delle macchine virtuali distribuite nei tenant del cliente **(3)** | __RA__       |                    |
| Assicurare il mantenimento in condizione di sicurezza delle macchine virtuali distribuite nei tenant del cliente **(3)** | __RA__       |                    |
| Assicurare il mantenimento in condizione operativa dei middleware distribuiti nei tenant del cliente                | __RA__        |                    |
| Assicurare il mantenimento in condizione di sicurezza dei middleware distribuiti nei tenant del cliente             | __RA__        |                    |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor. 
Tuttavia, poiché Cloud Temple non è informato delle specificità dei vostri ambienti di produzione e delle esigenze 
relative ai vostri carichi di lavoro, __la decisione di procedere all'aggiornamento del sistema operativo dei vostri hypervisor, 
causando così un riavvio, spetta a voi__. Questa operazione può essere realizzata attraverso la console Cloud Temple o tramite API.
Servizi professionali sono disponibili se desiderate che Cloud Temple prenda in carico alcune operazioni.*

*(3) Cloud Temple offre pacchetti di licenze per firewall (Fortinet, Stormshield) e bilanciatori di carico (HAProxy), e 
lavora in collaborazione con i vostri team per la configurazione iniziale durante la fase di implementazione. Tuttavia, 
la responsabilità del mantenimento in condizione operativa e sicura spetta a voi durante la fase di esercizio 
corrente. Servizi professionali sono disponibili se desiderate che Cloud Temple prenda in carico alcune operazioni.*

### Gestione dei cambiamenti, degli incidenti, dei problemi e delle capacità

| Attività                                                                                                                   | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Gestire gli incidenti sulle infrastrutture **datacenter fisici**                                                            | __I__         | __RA__             |
| Gestire i problemi sulle infrastrutture **datacenter fisici**                                                               |               | __RA__             |
| Gestire le capacità sulle infrastrutture **datacenter fisici**                                                              |               | __RA__             |
| Gestire gli incidenti sulle infrastrutture di **calcolo**                                                                   | __I__         | __RA__             |
| Gestire i problemi sulle infrastrutture di **calcolo**                                                                      |               | __RA__             |
| Gestire le capacità sulle infrastrutture di **calcolo**                                                                     | __RA__        | __CI__             |
| Gestire gli incidenti sulle infrastrutture di **archiviazione**                                                             | __I__         | __RA__             |
| Gestire i problemi sulle infrastrutture di **archiviazione**                                                                |               | __RA__             |
| Gestire le capacità sulle infrastrutture di **archiviazione**                                                               | __RA__        | __CI__             |
| Gestire gli incidenti sulle infrastrutture di **rete backbone**                                                             | __I__         | __RA__             |
| Gestire i problemi sulle infrastrutture di **rete backbone**                                                                |               | __RA__             |
| Gestire le capacità sulle infrastrutture di **rete backbone**                                                               |               | __RA__             |
| Implementare una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant del cliente       | __RA__        |                    |
| Modificare la configurazione delle macchine virtuali distribuite                                                            | __RA__        |                    |
| Eliminare una macchina virtuale distribuita                                                                                 | __RA__        |                    |
| Prendere la decisione di aggiungere, modificare o ritirare risorse sulla piattaforma Cloud Temple                          | __RA__        | __CI__             |
| Eseguire la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                             | __I__         | __RA__             |
| Applicare i tag alle macchine virtuali conformemente alla politica definita                                                 | __RA__        |                    |

### Gestione della performance
| Attività                                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire la sorveglianza del corretto funzionamento e dell'affidabilità di tutte le attrezzature coinvolte nella fornitura del servizio qualificato SecNumCloud | __I__         | __RA__            |
| Monitorare la performance delle risorse fisiche di calcolo, archiviazione e rete messe a disposizione dei vostri tenant __(4)__                            | __RI__        | __A__             |
| Supervisionare le prestazioni delle macchine virtuali che supportano i vostri ambienti                                                           | __RA__        | __I__             |

*(4) La piattaforma Cloud Temple adotta una filosofia centrata sulla __fornitura di infrastrutture dedicate__ per le esigenze di __calcolo__ (con lame fisiche), di __archiviazione__ (tramite LUN dedicate sui SAN) 
e di __rete__ (includendo firewall e bilanciatori di carico). Queste risorse dedicate sono messe a disposizione del cliente, la cui utilizzazione 
e il carico risultante dipendono direttamente dall'uso che ne fa. Spetta quindi al cliente mettere in atto e gestire i sistemi di supervisione 
e di metrologia necessari per assicurare il monitoraggio del funzionamento ottimale del proprio sistema informativo.*

### Gestione del backup e del ripristino dell'attività sulla backup integrata

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare il mantenimento in condizione operativa sulle infrastrutture di **backup** integrate alla piattaforma Cloud Temple **(5)**       |               | __RA__             |
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture di **backup** integrate alla piattaforma Cloud Temple           | __I__         | __RA__             |
| Gestire gli incidenti sulle infrastrutture di **backup** integrate alla piattaforma Cloud Temple                                           | __I__         | __RA__             |
| Gestire i problemi sulle infrastrutture di **backup** integrate alla piattaforma Cloud Temple                                              |               | __RA__             |
| Gestire le capacità sulle infrastrutture di **backup** integrate alla piattaforma Cloud Temple                                             | __AI__        | __RC__             |
| Assicurare il mantenimento in condizione operativa sulla soluzione di backup scelta all'interno dei suoi tenants dal cliente **(6)**       | __RA__        |                    |
| Assicurare il mantenimento in condizione di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenants dal cliente            | __RA__        |                    |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenants dal cliente                                           | __RA__        |                    |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenants dal cliente                                               | __RA__        |                    |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenants dal cliente                                             | __RA__        | __CI__             |
| Gestire il ciclo di vita delle politiche di backup                                                                                         | __RA__        |                    |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                        | __RA__        |                    |
| Assicurarsi che i piani di continuità operativa o di ripristino dell'attività siano coerenti con il ciclo di vita del dato                 | __RA__        |                    |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                               | __RA__        |                    |
| Effettuare test periodici per valutare l'efficacia della strategia<br/> di ripristino dell'attività o di continuità operativa              | __RA__        | __CI__             |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus. 
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e del ripristino dell'attività per le piattaforme terziarie all'interno di un tenant cliente
| Attività                                                                                                                                     | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------|
| Assicurare il mantenimento in condizioni operative sulla soluzione di backup scelta all'interno dei propri tenant dal cliente **(6)**          | __RA__        |                   |
| Assicurare il mantenimento in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei propri tenant dal cliente             | __RA__        |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                             | __RA__        |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                               | __RA__        |                   |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                              | __RA__        | __CI__            |
| Gestire il ciclo di vita delle politiche di backup                                                                                          | __RA__        |                   |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                         | __RA__        |                   |
| Assicurarsi che i piani di continuità operativa o di ripresa dell'attività siano coerenti con il ciclo di vita del dato                     | __RA__        |                   |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                                  | __RA__        |                   |
| Eseguire test periodici per valutare l'efficacia della strategia<br/> di ripresa dell'attività o di continuità operativa                    | __RA__        | __CI__            |

*(6) Questo riguarda ogni soluzione di backup supplementare messa in atto negli ambienti del cliente e gestita da quest'ultimo. 
Cloud Temple propone servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Temple.* 

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------------------|
| Garantire la gestione commerciale e contrattuale del cliente, inclusa la preparazione dei preventivi, l'elaborazione degli ordini e la gestione della fatturazione  | __I__        | __RA__             |
| Garantire il follow-up contrattuale della prestazione, inclusa la convalida dei preventivi, il monitoraggio delle consegne e il controllo della fatturazione        | __RA__       | __I__              |
| Assicurare la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                                 | __I__        | __RA__             |
| Assicurare la manutenzione e la messa a disposizione della documentazione tecnica relativa all'offerta SecNumCloud                                                   | __I__        | __RA__             |
| Garantire il monitoraggio del ciclo di vita delle macchine virtuali dispiegate nei vostri ambienti Cloud Temple<br/> tramite il vostro CMDB (Database di Gestione della Configurazione) | __RA__      |                    |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                       | __RA__       |                    |

### Gestione dei registri
| Attività                                                                                                                | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Conservare e rendere disponibili i log della piattaforma IaaS Cloud Temple **(7)**                                      |               | __RA__             |
| Conservare e rendere disponibili i log del sistema informativo<br/> ospitato nei vostri tenant di Cloud Temple          | __RA__        |                    |

*(7) Dal primo gennaio 2024, il periodo di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete del cliente (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------|---------------|-------------------|
| Sottoscrivere una connettività di rete operatore per accedere a un datacenter fisico Cloud Temple (8) | __RA__        | __CI__            |
| Gestire il piano di indirizzamento IP                                                                | __RA__        | __I__             |
| Gestire gli incidenti sui collegamenti di rete degli operatori clienti                                | __RA__        |                   |
| Gestire i problemi sui collegamenti di rete degli operatori clienti                                   | __RA__        | __CI__            |
| Gestire le capacità sui collegamenti di rete degli operatori clienti                                  | __RA__        | __CI__            |

*(8) Cloud Temple assume la responsabilità della rete riguardante la sua infrastruttura backbone, i suoi punti di raccolta nonché 
i punti di interconnessione datacenter, garantendo così la connettività tra questi punti e la sua rete backbone. 
Nell'offerta di hosting in baia fisica, Cloud Temple assume la responsabilità a partire dall'attrezzatura situata in cima al rack, comunemente chiamato "top of rack".*

## Reversibilità
| Attività                                                                                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture target                                                                                                                  | __RA__        | __I__              |
| Implementare le operazioni di transizione, che si tratti di estrazione manuale, uso di API <br/>o qualunque altro metodo terzo compatibile con la piattaforma Cloud Temple.                    | __RA__        | __I__              |
| Trasferire i dati controllando le ripercussioni della migrazione sulla qualità del servizio fornito <br/>dal sistema informativo del cliente.                                                   | __RA__        |                    |
| Procedere allo smantellamento delle configurazioni del Cloud Privato e delle opzioni associate al cliente, <br/>in seguito alla risoluzione del contratto.                                     | __I__         | __RA__             |
| Eseguire la cancellazione sicura dei dati sui dispositivi di memorizzazione e fornire un certificato                                                                                           | __I__         | __RA__             |