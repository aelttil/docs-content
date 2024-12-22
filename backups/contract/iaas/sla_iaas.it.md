---
title: Convenzione di Servizio IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **CONVENZIONE DI SERVIZI IaaS**
| **Destinatari :**                    | **COMMITTENTE**                                  |
| :----------------------------------- | :----------------------------------------------- |
| **Riferimento del documento**        | CT.AM.JUR.ANX - 20240403_v2.0.docx_Giorno GG AAAA |
| **I vostri interlocutori**           | *Nome* *Cognome*                                 |
|                                      | Account Manager                                  |
|                                      | e-mail : *nome.cognome*@cloud-temple.com         |
| **Data dell'ultimo aggiornamento**   | 03/04/2024                                       |
| **Data della convalida contrattuale**| Giorno GG AAAA                                   |


----------------------------------------------------------------------------------

| **Versione** | **Data**   | **Azione**                                  | **Autore**      |
| ------------ | ---------- | ------------------------------------------- | --------------- |
| v0.1         | 07/06/2022 | Redazione iniziale                          | Lorena ALCALDE  |
| v0.2         | 14/09/2022 | Arricchimento                               | Lorena ALCALDE  |
| v1.0         | 30/12/2022 | Integrazione indicatori                     | Lorena ALCALDE  |
| v1.1         | 23/01/2023 | Modifica al piè di pagina                   | Lorena ALCALDE  |
| v1.2         | 22/05/2023 | Arricchimento                               | Lorena ALCALDE  |
| v1.3         | 29/06/2023 | Arricchimento                               | Lorena ALCALDE  |
| v1.4         | 06/11/2023 | Modifica al capitale e Arricchimento        | Lorena ALCALDE  |
| v1.5         | 30/11/2023 | Arricchimento                               | Lorena ALCALDE  |
| v1.6         | 21/03/2024 | Arricchimento                               | Lorena ALCALDE  |
| v2.0         | 29/03/2024 | Aggiustamenti conformità SNC                | Nicolas ABRIOUX  |
| v2.0         | 03/04/2024 | Pubblicazione                               | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **INDICE DEI CONTENUTI**
- [1. **CONVENZIONE DI SERVIZI IaaS**](#1-convenzione-di-servizi-iaas)
- [2. **INDICE DEI CONTENUTI**](#2-indice-dei-contenuti)
- [3. Preliminare e Glossario](#3-preliminare-e-glossario)
  - [3.1. Preliminare](#31-preliminare)
  - [3.2. Glossario](#32-glossario)
- [4. Acronimi](#4-acronimi)
- [5. Oggetto del presente Contratto di servizio](#5-oggetto-del-presente-contratto-di-servizio)
- [6. Audit](#6-audit)
- [7. Descrizione del Servizio](#7-descrizione-del-servizio)
  - [7.1. Modello di responsabilità condivisa](#71-modello-di-responsabilità-condivisa)
  - [7.2. Presentazione dettagliata del perimetro del Servizio](#72-presentazione-dettagliata-del-perimetro-del-servizio)
    - [7.2.1. Infrastrutture Datacenters](#721-infrastrutture-datacenters)
    - [7.2.2. Infrastruttura software di gestione del Servizio](#722-infrastruttura-software-di-gestione-del-servizio)
    - [7.2.3. Infrastrutture di calcolo](#723-infrastrutture-di-calcolo)
    - [7.2.4. Infrastruttura di archiviazione](#724-infrastruttura-di-archiviazione)
    - [7.2.5. Infrastruttura di rete globale](#725-infrastruttura-di-rete-globale)
    - [7.2.6. Infrastruttura di backup](#726-infrastruttura-di-backup)
    - [7.2.7. Implementazione di soluzioni di ripresa dell'attività o di continuità operativa](#727-implementazione-di-soluzioni-di-ripresa-dellattività-o-di-continuità-operativa)
  - [7.3. Limitazioni dei servizi nel modello IaaS qualificato](#73-limitazioni-dei-servizi-nel-modello-iaas-qualificato)
    - [7.3.1. Servizi gestiti in RUN](#731-servizi-gestiti-in-run)
    - [7.3.2. Configurazione del backup](#732-configurazione-del-backup)
    - [7.3.3. Configurazione del backup](#733-configurazione-del-backup)
  - [7.4. Attuazione del servizio](#74-attuazione-del-servizio)
    - [7.4.1. Prerequisiti tecnici](#741-prerequisiti-tecnici)
  - [7.5. Localizzazione del servizio in Francia](#75-localizzazione-del-servizio-in-francia)
    - [7.5.1. Localizzazione dei Datacenter che ospitano il Servizio](#751-localizzazione-dei-datacenter-che-ospitano-il-servizio)
    - [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio](#752-localizzazione-delle-agenzie-cloud-temple-che-operano-il-servizio)
  - [7.6. Supporto](#76-supporto)
    - [7.6.1. Natura del supporto che accompagna il servizio](#761-natura-del-supporto-che-accompagna-il-servizio)
    - [7.6.2. Richiesta del servizio di assistenza tecnica](#762-richiesta-del-servizio-di-assistenza-tecnica)
    - [7.6.3. Processo di gestione degli Incidenti](#763-processo-di-gestione-degli-incidenti)
    - [7.6.4. Processo di prioritarizzazione dei trattamenti](#764-processo-di-prioritarizzazione-dei-trattamenti)
    - [7.6.5. Lingua e localizzazione del servizio di supporto](#765-lingua-e-localizzazione-del-servizio-di-supporto)
- [8. Impegni e livelli di servizio](#8-impegni-e-livelli-di-servizio)
  - [8.1. Impegni di disponibilità dell'infrastruttura](#81-impegni-di-disponibilità-dellinfrastruttura)
  - [8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE](#82-impegno-di-disponibilità-dellinterfaccia-committente)
  - [8.3. Impegno di disponibilità del supporto](#83-impegno-di-disponibilità-del-supporto)
  - [8.4. Impegno di disponibilità dello storage oggetto S3](#84-impegno-di-disponibilità-dello-storage-oggetto-s3)
  - [8.5. Chiarimento riguardo l'impegno della backup](#85-chiarimento-riguardo-limpegno-della-backup)
- [9. Organizzazione della relazione contrattuale](#9-organizzazione-della-relazione-contrattuale)
  - [9.1. Responsabilità del Fornitore](#91-responsabilità-del-fornitore)
  - [9.2. Limitazione delle responsabilità del Fornitore](#92-limitazione-delle-responsabilità-del-fornitore)
  - [9.3. Limitazione d'accesso](#93-limitazione-daccesso)
  - [9.4. Responsabilità dei terzi coinvolti nella fornitura del servizio Secure Temple](#94-responsabilità-dei-terzi-coinvolti-nella-fornitura-del-servizio-secure-temple)
  - [9.5. Responsabilità e obblighi del COMMITTENTE](#95-responsabilità-e-obblighi-del-committente)
  - [9.6. Diritti del COMMISSIONARIO](#96-diritti-del-commissionario)
  - [9.7. Cancellazione dei dati al termine del Contratto](#97-cancellazione-dei-dati-al-termine-del-contratto)
- [10. Ciclo di vita della presente Convenzione di servizio](#10-ciclo-di-vita-della-presente-convenzione-di-servizio)
  - [10.1. Entrata in vigore della Convenzione di servizio](#101-entrata-in-vigore-della-convenzione-di-servizio)
  - [10.2. Evoluzioni della Convenzione di servizio](#102-evoluzioni-della-convenzione-di-servizio)
    - [10.2.1. Evoluzioni innescate dal COMMITTENTE](#1021-evoluzioni-innescate-dal-committente)
    - [10.2.2. Evoluzioni iniziate dal Fornitore](#1022-evoluzioni-iniziate-dal-fornitore)
  - [10.3. Reversibilità](#103-reversibilità)
- [11. Disponibilità, continuità e ripristino del servizio](#11-disponibilità-continuità-e-ripristino-del-servizio)
  - [11.1. Gestione degli Incidenti e delle Interruzioni](#111-gestione-degli-incidenti-e-delle-interruzioni)
    - [11.1.1. Incidenti](#1111-incidenti)
      - [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio](#11111-tipi-di-incidenti-trattati-nellambito-di-questa-convenzione-di-servizio)
      - [11.1.1.2. Gestione degli incidenti](#11112-gestione-degli-incidenti)
      - [11.1.1.3. Livello di notifica degli Incidenti di sicurezza](#11113-livello-di-notifica-degli-incidenti-di-sicurezza)
  - [11.2. Manutenzione del Servizio](#112-manutenzione-del-servizio)
    - [11.2.1. Natura della manutenzione](#1121-natura-della-manutenzione)
    - [11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE](#1122-accessi-remoti-di-cloud-temple-sul-perimetro-del-committente)
    - [11.2.3. Accessi remoti di terzi coinvolti nella fornitura del servizio nell'ambito del COMMITTENTE](#1123-accessi-remoti-di-terzi-coinvolti-nella-fornitura-del-servizio-nellambito-del-committente)
- [12. Procedura di cancellazione dei dati al termine del Contratto](#12-procedura-di-cancellazione-dei-dati-al-termine-del-contratto)
- [13. Diritto applicabile](#13-diritto-applicabile)
  - [13.1. In generale](#131-in-generale)
  - [13.2. Rispetto del diritto e delle regolamentazioni applicabili](#132-rispetto-del-diritto-e-delle-regolamentazioni-applicabili)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protezione rispetto al diritto extra-europeo](#134-protezione-rispetto-al-diritto-extra-europeo)
- [14. FIRME](#14-firme)


----------------------------------------------------------------------------------


# 3. Preliminare e Glossario

## 3.1. Preliminare
Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificato SecNumCloud sotto la denominazione di « *Tempio Sicuro* ».

"La presente convenzione di servizio completa e si integra con le condizioni generali di vendita e utilizzo del Fornitore. È 
inteso che i documenti contrattuali si interpretino in modo coerente fra loro. In caso di contraddizione o divergenza tra i 
termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nell'ordine seguente:

1. Condizioni Generali di Vendita e Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud PaaS
4. Convenzione specifica particolare
5. Piano di Assicurazione Sicurezza (PAS)
6. Condizioni Particolari di Utilizzo (CPU)

## 3.2. Glossario
Nel presente Contratto di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto a cui è allegato il presente Contratto di servizio.

Le espressioni di seguito utilizzate nel presente Contratto di servizio saranno interpretate in conformità con le definizioni a esse attribuite di seguito:

-   **Cambiamento:** Qualsiasi aggiunta, modifica o eliminazione che impatti il Servizio, autorizzata, pianificata o gestita.

-   **Cambiamento standard:** Cambiamento che segue una procedura, le cui modalità di messa in produzione e gli impatti (inclusi quelli finanziari) sono noti e accettati in anticipo dalle Parti. Verrà quindi integrato nel catalogo dei cambiamenti standard e, a seconda dei casi, può avere un GTI e un GTR.

-   **Contratto:** Indica il contratto sottoscritto dal COMMITTENTE con il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, a cui è allegato il presente Contratto di servizio.

-   ***Contratto di servizio:*** Questo documento, stabilito nell'ambito di un contratto specifico o dei Termini e Condizioni Generali di Vendita e Uso (CGVU), e in conformità con i requisiti del Riferimento SecNumCloud.

-   **Richiesta di servizio:** Richiesta del COMMITTENTE al Fornitore nell'ambito del Servizio, copre le operazioni non eseguibili dal COMMITTENTE tramite l'interfaccia COMMITTENTE e le richieste di supporto nell'ambito del Servizio. Le richieste di servizio sono limitate a quelle previste dal Contratto o dal presente Contratto di servizio.

-   **Disponibilità:** Capacità di assicurare la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Dati tecnici:** Comprende l'insieme dei dati gestiti per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, registri dell'infrastruttura tecnica, configurazione degli accessi, directory, certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può avere importanza per la gestione del Servizio.

-   **Hypervisor:** Sistema operativo che permette l'esecuzione di macchine virtuali su una lama di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che disturba il normale funzionamento del Servizio o comprometta la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento all'interno del perimetro del Servizio:

    -   Di natura intenzionalmente dannosa;
    -   Di natura accidentale che pregiudichi l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che pregiudichi le misure di sicurezza esistenti.
    Le pregiudiziali alla Disponibilità di origine non dannosa non sono considerate un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che include una console di amministrazione web e un'API.

-   **Messa in produzione:** Azione(i) di gestione realizzazione del Cambiamento quando questo è approvato (il cambiamento, nel senso di ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

-    **Problema:** Causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione a rischio).

-   **Regione:** Designa un insieme geograficamente delimitato di aree di disponibilità cloud, fornendo servizi di rete, calcolo e stoccaggio per ottimizzare la latenza, le prestazioni e la conformità regolamentare locale.

-   **Servizio:** Indica il servizio IaaS qualificato SecNumCloud "Tempio Sicuro", fornito al COMMITTENTE dal Fornitore tramite infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" del presente Contratto di servizio.

-   **Tempio Sicuro (Secure Temple):** Indica il servizio IaaS qualificato SecNumCloud, offerto dalla società Cloud Temple, come definito nell'attestato consultabile sul sito dell'ANSSI e fornito in allegato al presente Contratto di servizio.

-   **Sinistro:** Indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla Parte colpita.

-   **Supervisione:** Sorveglianza di un Sistema Informativo o di un Servizio che implica la raccolta di varie dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant:** Una istanza isolata riservata a un utente o gruppo di utenti, condividendo un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availibility zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per assicurare l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronimi
  | **Acronimo** | **Definizione**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo per i cambiamenti                           |
  | **CMDB**     | Configuration Management Database -- Database di gestione delle configurazioni           |
  | **COPIL**    | Comitato direttivo                                                                       |
  | **COSTRAT**  | Comitato strategico                                                                      |
  | **COPROJ**   | Comitato di Progetto                                                                     |
  | **DB**       | Database (base di dati)                                                                  |
  | **DRP**      | Disaster Recovery Plan (Piano di ripristino delle attività)                              |
  | **GTE**      | Garanzia di Tempo di Escalation                                                          |
  | **GTI**      | Garanzia di Tempo di Intervento                                                          |
  | **GTR**      | Garanzia di Tempo di Risoluzione                                                         |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices per la gestione dei sistemi informativi |
  | **IaaS**     | Infrastructure as a Service                                                              |
  | **MCO**      | Manutenzione in condizioni operative                                                     |
  | **MOA**      | Maestranza Committente                                                                   |
  | **MOE**      | Maestranza Esecutrice                                                                    |
  | **MSP**      | Managed Services Provider                                                              |
  | **OS**       | Operating system (sistema operativo)                                                     |
  | **PAQ**      | Piano di Assicurazione della Qualità                                                     |
  | **PaaS**     | Platform as a Service                                                                    |
  | **PAS**      | Piano di Assicurazione della Sicurezza                                                   |
  | **PASSI**    | Prestatore di Servizi di Revisione della Sicurezza dei Sistemi Informativi              |
  | **RFC**      | Request For Change -- Richiesta di cambiamento                                          |
  | **RGPD**     | Regolamento Generale sulla Protezione dei Dati (personali)                               |
  | **RPO**      | Recovery Point Objective -- Aggiornamento dei dati ripristinati in caso di disastro     |
  | **RTO**      | Recovery Time Objective -- Tempo di ripristino del servizio in caso di disastro         |
  | **SDM**      | Service Delivery Manager                                                                 |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di servizio                              |
  | **SNC**      | SecNumCloud                                                                              |
  | **SOC**      | Security Operation Center                                                                |
  | **TMA**      | Terza Manutenzione Applicativa                                                           |
  | **UO**       | Unità Operativa                                                                          |
  | **VABE**     | Validazione dell'Adeguatamento alla Buona Operatività                                    |
  | **VABF**     | Validazione dell'Adeguatamento al Buon Funzionamento                                    |
  | **VM**       | Virtual Machine (Macchina virtuale)                                                      |
  | **VSR**      | Validazione del Servizio Regolare                                                        |

# 5. Oggetto del presente Contratto di servizio

Il presente Contratto di servizio stabilisce i termini e le condizioni secondo i quali il Fornitore si impegna a fornire il Servizio al
COMMITTENTE. Il suo scopo è quello di:

-   Specificare le aspettative di performance richieste dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari specificamente applicabili al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata tramite indicatori di performance quantitativi.

Si stabilisce che, nell'ipotesi in cui al Fornitore venisse revocata la qualifica di SecNumCloud, il Contratto potrà essere risolto
di diritto, senza incorrere in penalità, dal COMMITTENTE. In tal caso, il Fornitore si impegna ad informare il COMMITTENTE
della suddetta disqualifica mediante l'invio di una notifica ufficiale, per mezzo di una lettera raccomandata con richiesta di ricevuta di ritorno.

Si osserva che una modifica o un adeguamento della qualifica di SecNumCloud non sarà interpretato come una revoca della
qualifica iniziale.

# 6. Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che quest'ultimo avesse designato, di consultare l'insieme dei documenti necessari all'attestazione del completo rispetto degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

Con l'accettazione della presente Convenzione di servizio, il COMMITTENTE conferisce la sua autorizzazione esplicita a:

1. L'Agenzia Nazionale per la Sicurezza dei Sistemi di Informazione (ANSSI) e all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema di informazione al referenziale SecNumCloud.
2. Un fornitore di audit di sicurezza dei sistemi di informazione, debitamente qualificato PASSI e espressamente designato dal Fornitore, per condurre audit di sicurezza relativi al Servizio.

# 7. Descrizione del Servizio
## 7.1. Modello di responsabilità condivisa
Il Servizio offerto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano al
principio di responsabilità condivisa presentato nel referenziale SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La messa a disposizione di spazi di archiviazione;

-   L’accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condiviso applicato tra il Fornitore e il COMMITTENTE nel contesto del Servizio è presentato in §7.1.

È inteso che il Fornitore mobiliterà la sua competenza per realizzare le Prestazioni secondo le migliori pratiche professionali e
conformemente alle esigenze del referenziale SecNumCloud.

Il Servizio è qualificato SecNumCloud (vedere attestazione in Appendice).

## 7.2. Presentazione dettagliata del perimetro del Servizio

| Compute               | Risorsa di calcolo del Tenant COMMANDITAIRE                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Dati di produzione del Tenant COMMANDITAIRE                                                                          |
| Stoccaggio oggetti S3 | messa a disposizione di un'infrastruttura di stoccaggio oggetti sovrano multi AZ compatibile con le API S3 standard. |
| Backup                | Modulo sottoscrizione al mass-storage adeguato                                                                       |
| Infrastruttura di rete| Risorsa di rete del Tenant COMMANDITAIRE                                                                             |
| Console COMMANDITAIRE | Il servizio che permette al COMMANDITAIRE di accedere al suo servizio IaaS e di amministrarlo tramite l'interfaccia Shiva |
| Supporto              | Il servizio di supporto che accompagna i servizi precedenti e solo quelli (*)                                        |

_(*) Nel limite del perimetro del Servizio qualificato SNC e delle responsabilità del Fornitore in materia_

### 7.2.1. Infrastrutture Datacenters
Il Servizio comprende la messa a disposizione, per ogni Zona di disponibilità, delle prestazioni qualificate di seguito:

- Sito datacenter situato in Francia per la Regione FR, conforme agli ultimi standard tecnologici, che offre un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
- Messa a disposizione di sale tecniche all'interno di datacenter dedicati all'accoglienza delle attrezzature tecniche indispensabili alla produzione del servizio, inclusi calcolo, stoccaggio, rete, cablaggio e altri componenti necessari;
- Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, assicurando una continuità di servizio;
- Fornitura di servizi di climatizzazione, regolati per rispettare le norme e le raccomandazioni dei produttori di apparecchiature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
- Supervisione continua e metrologia dettagliata, consentendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di rilevazione e spegnimento incendi, progettati per identificare e neutralizzare efficacemente ogni inizio di incendio nelle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle attrezzature e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di spegnimento in grado di agire rapidamente senza danneggiare l'equipaggiamento informatico. Questo servizio è fondamentale per prevenire i rischi di incendio, minimizzare i danni potenziali e assicurare la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e le misure di sicurezza messe in atto, compresi i test annuali di commutazione sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare il rischio di avarie e garantire una reattività ottimale in caso di Incidente. Accettando queste condizioni, il cliente riconosce l'importanza di queste misure e si impegna a cooperare pienamente per facilitarne la realizzazione. Il COMMITTENTE è inoltre incoraggiato a prendere atto delle raccomandazioni di sicurezza fornite e ad integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio
Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessarie all'utilizzo del Servizio. Si impegna altresì a mantenere tale console di amministrazione e l'API in condizioni operative ottimali e a garantire la sicurezza in modo continuativo.
Questa console di amministrazione e l'API sono designate in maniera collettiva con il termine "interfaccia COMMITTENTE".

Il Fornitore avvisa il COMMITTENTE del fatto che un utilizzo anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può scatenare delle misure di sicurezza automatiche che portano al blocco dell'accesso alle API di comando o al Servizio. Si deve sottolineare che questa situazione non costituisce un'indisponibilità del Servizio, ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una al secondo (Throttling). Se il COMMITTENTE inoltra richieste identiche a una frequenza superiore, il loro rigetto non potrà essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo


Il Servizio include la fornitura, nelle aree di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie per
l'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo comprende:

- La fornitura dei chassis tecnici necessari per il corretto funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le aree di disponibilità di sua scelta. È importante notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, così come la garanzia del mantenimento in condizione operativa e sicura dell'infrastruttura software necessaria al pilotaggio di questi sistemi operativi. È necessario evidenziare che, anche se il Fornitore è responsabile della manutenzione operativa e della sicurezza globale del Servizio, non possiede conoscenze specifiche riguardo agli ambienti di produzione del COMMITTENTE né alle esigenze legate ai suoi carichi di lavoro. Pertanto, la responsabilità di decidere dell'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione che può richiedere un riavvio, spetta interamente al COMMITTENTE. Questa operazione può essere effettuata tramite l’Interfaccia COMMITTENTE.

La scelta del modello di lame di calcolo, selezionato dal catalogo proposto dal Fornitore, è di responsabilità del
COMMITTENTE.

### 7.2.4. Infrastruttura di archiviazione
Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), che offre vari
livelli di prestazione. Questo servizio include:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle cabine di memorizzazione condivise tra i clienti, inclusi il loro mantenimento in condizioni operative e di sicurezza, la loro supervisione e la loro metrologia;
- L'istituzione di sistemi automatizzati per l'assegnazione dei LUN (Logical Unit Numbers) di memorizzazione dedicati all'uso del COMMITTENTE, in conformità con i volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale
Il Fornitore implementa, nell'ambito del Servizio, una rete globale che facilita al COMMISSIONARIO l'accessibilità ai propri sistemi
ospitati. Questo servizio comprende:

-   La fornitura, la manutenzione operativa e la sicurezza di tutte le connessioni in fibra ottica
    che interconnettono le diverse Aree di disponibilità;

-   La fornitura, la manutenzione operativa e la sicurezza delle attrezzature tecniche necessarie per il corretto
    funzionamento della rete e per l'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMISSIONARIO, a Internet o a reti private, e le attrezzature di rete, collegamenti operativi e altri
componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Tale interconnessione di rete è implementata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup
Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore assicura il mantenimento in condizioni operative e di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro
salvati, a condizione che il COMMITTENTE abbia sottoscritto alle Unità di opera adeguate.

Questa prestazione di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei Tenants del COMMITTENTE nell'ambito del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a unità di opera specifiche. È quindi onere del COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il Fornitore per implementare la propria politica di backup o
adeguarla in funzione delle risorse disponibili.

Il Fornitore si impegna a notificare al COMMITTENTE in caso di vincoli di capacità e a fornire un'assistenza consulenziale per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore si limiteranno alla realizzazione dei bisogni espressi dal COMMITTENTE
in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripresa dell'attività o di continuità operativa

Il Fornitore fornisce al COMMITTENTE l'insieme delle soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso varie Zone di disponibilità. È responsabilità del COMMITTENTE gestire efficacemente questa distribuzione di risorse, per la quale ha la possibilità di utilizzare gli strumenti del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato
### 7.3.1. Servizi gestiti in RUN
È importante notare che sono esclusi dal Servizio:

- L'ospitalità di componenti fisici del COMMISSARIO;

- L'interconnessione di rete del Tenant COMMISSARIO, a Internet o a reti private, incluse le connessioni degli operatori;

- Ogni servizio di tipo gestito, o TMA;

- Ogni assistenza sulle macchine virtuali a livello OS e superiore nella pila di responsabilità IaaS, anche se si tratta di semplice supervisione.

Ciò nonostante, non è assolutamente escluso che il COMMISSARIO possa ricorrere a tali servizi presso l'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenants. Questi servizi non saranno quindi regolati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartiti.

### 7.3.2. Configurazione del backup
Di default, il Fornitore fornisce l'implementazione delle risorse IaaS al COMMITTENTE riservando risorse e configurando i deployment per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

### 7.3.3. Configurazione del backup
Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia che rappresentano l'ambiente IaaS dei Subscription Clients del COMMITTENTE nell'ambito del Servizio.

L'erogazione del servizio di backup e l'attuazione della politica di backup del COMMITTENTE sono soggette alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. Pertanto, è responsabilità del COMMITTENTE sottoscrivere dal Fornitore le risorse tecniche necessarie per attuare la politica di backup sul suo perimetro informatico, o di adeguare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limite di capacità tecnica.

Il Fornitore metterà in atto le risorse tecniche e umane necessarie al backup del sistema ospitato nei limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, per i perimetri non coperti dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM o inoltrare una Richiesta di servizio al Fornitore affinché la configurazione dei backup per i server fisici sia implementata se il COMMITTENTE dispone di un contratto di servizio gestito che permetta al Fornitore di agire tramite l'interfaccia COMMITTENTE, che è il pannello di amministrazione messo a disposizione nell'ambito di questo Contratto di servizio e che dispone di funzionalità per configurare i backup.

Per di più, questo servizio si impegnerà a tradurre tramite l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per motivi di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup ad alcune delle sue VM. In tal caso, è responsabilità del COMMITTENTE assumersi tale scelta. Il Fornitore non eseguirà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che optare per la politica "no backup" o scegliere di effettuare un backup manuale espone il COMMITTENTE al rischio di perdita permanente dei dati in caso di Incidente sui livelli bassi o su quelli dipendenti dalla sua responsabilità nel modello IaaS. In tale situazione, sarà impossibile attribuire al Fornitore la responsabilità di recuperare i dati poiché non vi sarà nulla da ripristinare. Il Fornitore raccomanda di effettuare sempre il backup delle VM.

Per ogni questione riguardante il sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra l'OS", spetta al COMMITTENTE realizzare le operazioni di amministrazione e supervisone all'interno dell'Unione Europea se si desidera garantire che tutta la verticalità dei livelli del SI siano operati e gestiti dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito del presente Contratto di servizio sono indicate nella sezione "Modello di responsabilità condivise" di questo Contratto di Servizio.

## 7.4. Attuazione del servizio
### 7.4.1. Prerequisiti tecnici
Per l'attuazione del Servizio, il COMMITTENTE riconosce che dovrà:

- Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nell'ambito del Servizio;

- Utilizzare tramite il Fornitore lo strumento di backup;

- Dichiarare degli IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia COMMITTENTE (Filtraggio per lista bianca). Le modifiche di questa lista di IP dovranno essere realizzate tramite delle Richieste di servizio (lista non amministrabile dall'interfaccia di amministrazione del Servizio).

## 7.5. Localizzazione del servizio in Francia

È specificato che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, di cui il presente Contratto di servizio costituisce l'oggetto, è situato al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione di sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Pertanto, ogni archiviazione, ogni attività di amministrazione, supervisione e ogni trattamento viene effettuato in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio


In assenza delle operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (che comprendono la memorizzazione e il trattamento dei dati) e componenti tecnici che forniscono il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio
I collaboratori di Cloud Temple che intervengono nel perimetro delServizio operano dalle agenzie di Cloud Temple, tutte situate esclusivamente in Francia. Queste agenzie sono ubicat in Francia, a Tours, Lione, Caen e Parigi La Défense.

IL COMITTENTE è informato della possibilità dei dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza per quanto riguarda gli accessi a distanza, in particolare per gli accessi VPN. Questi accessi remoti sono implementati conformemente ai requisiti del referenziale SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio
Il Fornitore fornisce un servizio di assistenza tecnica volto ad assistere il COMMITTENTE nella gestione, nella risoluzione dei problemi e nell'ottimizzazione delle
loro risorse dispiegate. Questo servizio copre una vasta gamma di attività, dall'aiuto alla configurazione iniziale dei servizi
fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di assistenza:

-   Assistenza all'implementazione iniziale dell'uso del Servizio;
-   Assistenza nella risoluzione di incidenti;
-   Assistenza nella risoluzione di problemi;
-   Monitoraggio e consulenza sull'ottimizzazione della base tecnica.

Nell'ambito del servizio di assistenza, il Fornitore non sostituisce il COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane interamente responsabile per la configurazione, l'esercizio delle proprie VM e dei propri Tenants, e per la gestione di tutti gli elementi (dati e applicazioni inclusi) che ha immagazzinato o installato sulle infrastrutture del Fornitore. Il servizio di assistenza tecnica è fornito in accordo con le Condizioni Generali di Vendita e di Utilizzo, il Fornitore essendo tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di assistenza tecnica in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Fornitore e dal coinvolgere le squadre del Fornitore presso i propri clienti o terze parti non incluse nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità d'opera di supporto associate.

### 7.6.2. Richiesta del servizio di assistenza tecnica
Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console SPONSOR e disponibile durante le ore lavorative standard esclusi i giorni festivi (8:00 - 18:00; Lunedì -- Venerdì; calendario e orari francesi). Per le emergenze che occorrono al di fuori dell'orario di lavoro, in particolare gli incidenti che influenzano significativamente la produzione, il servizio di reperibilità può essere contattato tramite un numero comunicato allo SPONSOR all'inizio del Servizio.

Per ogni richiesta o Incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprendendo tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia che avvenga attraverso la console di gestione oppure in seguito a una chiamata telefonica, un ticket viene automaticamente creato. Durante la dichiarazione di un Incidente, è essenziale che lo SPONSOR fornisca al fornitore il massimo dei dettagli sul problema
incontrato. Questa procedura è cruciale per permettere una valutazione adeguata della situazione, la sua priorità e una diagnosi efficace.

Il Cliente riceve quindi una conferma tramite e-mail, indicando la creazione del ticket e il suo numero univoco. Lo SPONSOR può consultare
lo stato e la cronologia delle sue richieste e dichiarazioni di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Durante la segnalazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie e svolgendo i test richiesti. Il Fornitore può accedere al Servizio del Cliente per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono ritenuti funzionali e l'Incidente non è imputabile a esso, il Cliente verrà informato. Su richiesta del Cliente, il Fornitore può offrire Servizi Professionali per identificare l'origine del problema, fatturabili previo accordo per periodi di 30 minuti.

Nel caso in cui l'Incidente sia di responsabilità del Fornitore o di uno dei suoi subappaltatori, quest'ultimo completa la diagnosi e si impegna nel ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, elementi considerati probanti di comune accordo tra le Parti.

### 7.6.4. Processo di prioritarizzazione dei trattamenti
La determinazione del livello di priorità di un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

-   I livelli di impatto sono definiti nel modo seguente:

| Livello di impatto | Descrizione                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Impatto I1         | Uno o più servizi del Fornitore sono interrotti                                                                       |
| Impatto I2         | Uno o più servizi del Fornitore sono degradati                                                                        |
| Impatto I3         | Uno o più servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine     |

-   I livelli di Criticità sono definiti nel modo seguente:

| Livello di criticità | Descrizione                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| Criticità C1         | Uno o più servizi del Fornitore si degradano a una velocità preoccupante                             |
| Criticità C2         | Uno o più servizi del Fornitore si deteriorano progressivamente nel tempo                            |
| Criticità C3         | Uno o più servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative   |

-   Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'Impatto e la Criticità, viene attribuita una priorità al ticket conformemente alla matrice decisionale di seguito:

| Livello di impatto <br/> \ Livello di criticità | Impatto I1       | Impatto I2       | Impatto I3       |
| ----------------------------------------------- | ---------------- | ---------------- | ---------------- |
| Criticità C1                                    | Priorità **P1**  | Priorità **P2**  | Priorità **P3**  |
| Criticità C2                                    | Priorità **P2**  | Priorità **P3**  | Priorità **P4**  |
| Criticità C3                                    | Priorità **P3**  | Priorità **P4**  | Priorità **P5**  |

Gli impegni del livello di servizio corrispondente a ciascun livello di priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere anche fornito in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta del servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizio
Il Fornitore si impegna a garantire una sorveglianza continua della performance e dell'integrità sicura della sua infrastruttura tecnica che fornisce il Servizio, assicurando il loro funzionamento ottimale.

L'indisponibilità di un servizio, che fa oggetto di un indicatore di performance, è riconosciuta non appena viene identificata dal sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal completo ripristino del servizio, confermato sia dagli strumenti di supervisione del Fornitore sia da un riscontro dell'utente, assicurando così una ripresa effettiva delle operazioni e una misurazione fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura
Il Fornitore si impegna a mantenere un livello di disponibilità e di performance conforme agli standard definiti per ogni periodo specificato. Gli accordi sul livello di servizio (Service Level Agreements, SLA) si applicano a condizione che il COMMITTENTE implementi i propri sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione di riferimento.

In caso di mancato rispetto di queste condizioni da parte del COMMITTENTE, quest'ultimo non sarà in grado di richiedere l'applicazione degli SLA in questione, i quali sono specificatamente identificati con un asterisco (\*). L'accessibilità agli SLA avviene tramite l'interfaccia del COMMITTENTE. Le misure sono calcolate mensilmente:

- **SLA 1 (\*) : IC-INFRA_SNC-01** – Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su base 24 ore al giorno, 7 giorni alla settimana.
- **SLA 2 (\*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su base 24 ore al giorno, 7 giorni alla settimana.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su base 24 ore al giorno, 7 giorni alla settimana.
- **SLA 4 (\*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su base 24 ore al giorno, 7 giorni alla settimana.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso a Internet: tasso di disponibilità garantito del 99,99%, calcolato su base 24 ore al giorno, 7 giorni alla settimana.

_**Osservazioni**_:

- *In risposta ad un attacco di negazione del servizio distribuito (DDoS), il Fornitore si riserva il diritto di adeguare la sua configurazione di routing internet per limitare l'impatto di tale attacco e preservare la propria infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE viene preso di mira, il Fornitore può ricorrere alla tecnica del blackholing attraverso la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP interessato già dai suoi fornitori, al fine di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'utilizzo di software firewall per applicazioni web disponibili sul mercato, e a configurare con attenzione i propri gruppi di sicurezza attraverso l'API di comando.*

- *Il Fornitore sottolinea la necessità per il COMMITTENTE di minimizzare le aperture dei flussi, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'intero Internet (sottorete 0.0.0.0/0), nonché i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata continuamente, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su una base di 24 ore su 24, 7 giorni su 7.

## 8.3. Impegno di disponibilità del supporto 


- **SLA 8      : IC-INFRA_SNC-08** – Ecco gli impegni del supporto tecnico del Fornitore per gli incidenti, esclusi i lavori di manutenzione programmata:

| Priorità        | Garanzia del tempo di intervento (GTI) | Obiettivo di performance |
| --------------- | --------------------------------------- | ----------------------- |
| Priorità **P1** | 30min                                    | 95%                     |
| Priorità **P2** | 2h                                       | 90%                     |
| Priorità **P3** | 4h                                       | 90%                     |
| Priorità **P4** | 24h                                      | 85%                     |
| Priorità **P5** | 48h                                      | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Ecco gli impegni del supporto tecnico del Fornitore per le richieste di servizio:

|                    | Garanzia del tempo di intervento (GTI) | Obiettivo di performance |
| ------------------ | --------------------------------------- | ----------------------- |
| Richiesta di servizio | 4h                                     | 90%                     |

*Nota* : 

- *Il termine per la Garanzia del Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L’investigazione di incidenti riguardanti i COMMITTENTI non comprenderà interventi da remoto sui server ospitati dal COMMITTENTE. L'assistenza sarà limitata alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di performance riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite delle raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage oggetto S3

- **SLA 10      : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage di oggetti S3:

| Indicatore         | Impegno                                                | Obiettivo di disponibilità |
| ------------------ | ------------------------------------------------------ | -------------------------- |
| IC-INFRA-SNC-10.1 | Durata dello storage di un oggetto in una regione       | 99.9999999% / anno         |
| IC-INFRA-SNC-10.2 | Disponibilità dell'API Storage di Oggetti S3            | 99.99%                     |
| IC-INFRA-SNC-10.3 | Latenza massima di accesso a un oggetto in una regione | 150 ms                     |

Note:

- Il Servizio di Storage di Oggetti è specificamente progettato per lo storage di oggetti e deve essere utilizzato a questo solo scopo, **escludendo categoricamente il suo impiego in modalità blocco**. Ricorrere alla modalità blocco tramite metodi non convenzionali, che includono ad esempio l'uso di *"FUSE" in un ambiente Linux*, costituisce una violazione ai termini di utilizzo stabiliti. Nessun incidente, malfunzionamento o danno derivante da questo utilizzo non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questa convenzione di servizi.
- La garanzia di durabilità è condizionata all'uso dei servizi conformemente alle migliori pratiche e agli standard attuali e esclude esplicitamente qualsiasi modifica dei dati, sia essa intenzionale o accidentale, risultante da azioni intraprese dal COMMISSARIO.

## 8.5. Chiarimento riguardo l'impegno della backup

La strategia di backup adottata per il COMMITTENTE, è condizionata dalla sottoscrizione alle unità di lavoro adeguate.

Il Fornitore si impegna nella messa a disposizione di una soluzione di backup che permetterà al COMMITTENTE di applicare le politiche di backup desiderate.

È precisato che l'ambito dell'intervento del Fornitore si limita alla messa a disposizione di un servizio di backup ed è responsabilità del COMMITTENTE supervisionare tramite l'interfaccia COMMITTENTE la corretta esecuzione delle politiche associate.

È precisato che la gestione della capacità di stoccaggio dello spazio dedicato ai backup, rimane a carico e responsabilità del COMMITTENTE. Il Fornitore rende disponibile il tasso di utilizzo tramite la console.

*Esempio: Mancato backup di una macchina virtuale:*

*Il COMMITTENTE ha l'obbligo di verificare/supervisionare la corretta esecuzione delle politiche di backup, nel caso in cui il COMMITTENTE rilevi che una macchina virtuale non è stata salvata, spetta a lui verificarne la causa, il COMMITTENTE potrà richiedere l'assistenza del Supporto del Fornitore in base al livello di supporto sottoscritto per essere assistito.*

**Lo SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà applicabile esclusivamente in caso di Incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale
## 9.1. Responsabilità del Fornitore
Il Fornitore si impegna:

- a informare adeguatamente il suo COMMITTENTE (ad esempio, in caso di limite di capacità delle risorse tecniche che erogano il Servizio).

- a informare formalmente il COMMITTENTE e entro un mese, di qualsiasi cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio con i requisiti di protezione contro le leggi extraeuropee (19.6 dell'allegato SNC v3.2).

- a fornire al COMMITTENTE interfacce e interfacce di servizio che sono almeno in lingua francese.

- a studiare e prendere in considerazione i requisiti settoriali specifici legati ai tipi di informazioni affidate dal COMMITTENTE nel contesto dell'erogazione del servizio e nei limiti delle responsabilità del Fornitore.

- a non rivelare alcuna informazione relativa all'assistenza a terzi, se non con autorizzazione formale e scritta del COMMITTENTE.

- a rendere disponibili tutte le informazioni necessarie per la realizzazione di audit di conformità secondo le disposizioni dell'articolo 28 del GDPR.

- a rendere conto al COMMITTENTE, attraverso il presente Contratto di servizio, di ogni Incidente di sicurezza che impatti il Servizio o l'utilizzo da parte del COMMITTENTE del Servizio (inclusi i dati del COMMITTENTE).

- a consentire un fornitore di audit di sicurezza dei sistemi di informazione (PASSI) qualificato, incaricato dal Fornitore, di audire il servizio e il proprio sistema di informazione, in conformità con il piano di controllo SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per condurre in modo efficace gli audit di conformità alle disposizioni dell'articolo 28 del GDPR, effettuati dal COMMITTENTE o da un terzo incaricato.

- a fornire, in qualità di subappaltatore, in conformità all'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consulenza al COMMITTENTE avvisandolo non appena un'istruzione emessa da quest'ultimo possa costituire una violazione delle normative sulla protezione dei dati.
 
- a notificare per iscritto, quando un progetto impatta o può impattare il livello di sicurezza del Servizio, il COMMITTENTE dei potenziali impatti, delle misure di mitigazione adottate, così come dei rischi residui che lo riguardano.

- a documentare e implementare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, così come le necessità di sicurezza specifiche del COMMITTENTE, definite da quest'ultimo e previste nel Contratto. Su richiesta del COMMITTENTE, il modulo Documentazione dell'interfaccia COMMITTENTE permetterà una condivisione sicura di questi documenti.

- a fornire, su richiesta del COMMITTENTE, gli elementi di valutazione dei rischi relativi alla sottomissione dei dati del COMMITTENTE al diritto di uno stato non membro dell'Unione Europea.


Su richiesta formale e scritta del COMMITTENTE, il Fornitore si impegna a:

1. Rendere accessibile al COMMITTENTE il regolamento interno e il codice etico del Fornitore;

2. Rendere accessibile al COMMITTENTE le sanzioni previste in caso di infrazione alla politica di sicurezza;

3. Fornire al COMMITTENTE tutti gli eventi che lo riguardano nei registri del Servizio;

4. Al termine del Contratto il Fornitore si impegna a eliminare i dati e i Dati tecnici relativi al COMMITTENTE, conformemente alla "procedura di cancellazione dei dati al termine del Contratto" descritta nel presente Contratto di servizio.

5. a garantire una cancellazione sicura dell'intero dei dati del COMMITTENTE tramite riscrittura completa di qualsiasi supporto che abbia ospitato i suoi dati nell'ambito del Servizio.

6. a fornire l'elenco completo dei terzi autorizzati ad accedere alle infrastrutture che ospitano i dati.

Il Fornitore manterrà aggiornata e renderà disponibile al COMMITTENTE la lista esauriente dei terzi autorizzati ad accedere alle infrastrutture che ospitano i dati, informandolo di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione europea, ovvero la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei Diritti dell'uomo. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione europea relativi al rispetto della dignità umana, alla libertà, all'uguaglianza, alla democrazia e allo stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore
In considerazione delle definizioni e delle condizioni menzionate nel presente Contratto di servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione "Modello di responsabilità condivise" del presente Contratto di servizio, limita infatti il coinvolgimento del Fornitore nei livelli operativi che "superano" la fornitura di risorse di calcolo, rete, archiviazione e backup. Questo esclude in particolare, senza limitazione:

    -   La gestione di ciò che è installato sulle macchine virtuali (OS, middlewares, applicazioni, ecc.);

    -   L'aggiornamento degli OS e altri software installati dal COMMITTENTE sui suoi dispositivi nei suoi Tenants;

    -   La sicurezza dei programmi, software e applicazioni installati sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;

    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può assumere impegni per il backup dei Tenants del COMMITTENTE senza che il COMMITTENTE stesso abbia previamente sottoscritto alle unità di lavoro adeguate.

3.  Il Fornitore non può rivendicare la proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi dati appartengono al COMMITTENTE.

4.  Il Fornitore sottolinea che non può in nessun caso sfruttare i dati trasmessi e generati dal COMMITTENTE senza la previa validazione da parte di esso.
   
5.  Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma di proprietà diretta del COMMITTENTE o di terzi con cui il COMMITTENTE ha contrattato. L'hosting di componenti fisici dei clienti non fa parte del Servizio e quindi è escluso dal campo di applicazione del presente Contratto di servizio. Spetta al COMMITTENTE valutare il livello di aderenza o dipendenza che questi componenti introducono rispetto al Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione d'accesso
Nell'ambito del Servizio, è formalmente vietato al Fornitore accedere ai Tenant appartenenti al COMMISSARIO senza previa autorizzazione. Spetta al COMMISSARIO fornire gli accessi necessari al personale del Fornitore, a seconda delle specifiche esigenze dell'hosting e, se applicabile, dei servizi professionali di supporto, nel caso in cui questa opzione sia stata scelta dal COMMISSARIO.

Il COMMISSARIO riconosce che questi accessi sono concessi esclusivamente per le necessità legate alla fornitura dei servizi convenuti, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terze parti coinvolte nella fornitura del servizio da parte del Fornitore è strettamente proibito. Nel caso in cui una specifica esigenza tecnica richiedesse tale accesso, esso potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMISSARIO, fornito una giustificazione dettagliata e ottenuto il suo accordo scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMISSARIO, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi coinvolti nella fornitura del servizio Secure Temple

Il Fornitore controlla l'elenco dei partner terzi che partecipano alla fornitura del Servizio. Tali terzi sono editori, fornitori (del Fornitore) e altri fornitori che partecipano alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore esige dai terzi che partecipano all'implementazione del servizio, nel loro contributo al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

-   Il Fornitore stipula, con ciascun terzo che partecipa all'implementazione del servizio, clausole di audit che consentono a un ente di qualificazione di verificare che questi terzi rispettino le esigenze legali e gli standard SNC, permettendo al Fornitore di rispettare i suoi impegni nel presente Contratto di servizio.

-   Il Fornitore implementa una procedura per controllare regolarmente le misure messe in atto dai terzi che partecipano all'implementazione del servizio per rispettare le esigenze imposte al Fornitore per il rispetto dei suoi impegni nel presente Contratto di servizio.

-   Il Fornitore implementa una procedura di monitoraggio delle modifiche effettuate dai terzi che partecipano all'implementazione del servizio che potrebbero influenzare il livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

A titolo di promemoria, il Fornitore fornisce al COMMISSIONARIO una piattaforma per l'esecuzione di macchine virtuali, la cui configurazione è di responsabilità del COMMISSIONARIO. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce attraverso le sue interfacce delle politiche di backup automatiche. Ma è a carico del COMMISSIONARIO attivare queste politiche di backup e quindi attivare le macchine virtuali.

Il COMMISSIONARIO autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che fornisce il Servizio.

## 9.6. Diritti del COMMISSIONARIO
In qualsiasi momento durante il rapporto contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può richiedere al Fornitore di rendere accessibile il suo regolamento interno e il suo codice etico.

## 9.7. Cancellazione dei dati al termine del Contratto
Alla fine del contratto, sia che esso giunga alla sua naturale scadenza sia che venga rescisso per qualsiasi motivo, il Fornitore si impegna a procedere con la cancellazione sicura di tutti i dati del COMMITTENTE, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni civili. I dati del COMMITTENTE saranno poi eliminati entro un massimo di trenta (30) giorni da tale notifica.

Per attestare questa cancellazione, il Fornitore fornirà al COMMITTENTE un certificato che conferma la distruzione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio
La presente Convenzione di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, l'immagazzinamento e il trattamento dei dati realizzati nell'ambito della pre-vendita, dell'attuazione, della cessazione del Servizio, sono eseguiti nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio
Le modifiche o aggiunte apportate al presente Contratto di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Queste proposte di cambiamento saranno esaminate dalle Parti, autorizzate a determinare gli aspetti che necessitano di una formalizzazione scritta.

È convenuto che qualsiasi evoluzione del Contratto di servizio, dopo convalidazione, che altera le condizioni finanziarie stabilite inizialmente, richiederà la redazione e la firma di un emendamento al Contratto in corso.

I fattori che possono indurre una revisione di questo Contratto di servizio includono, senza limitarsi a:

-   L'evoluzione dell'infrastruttura tecnica che fornisce il Servizio IaaS;
-   Gli adeguamenti apportati ai servizi implementati dal Fornitore per erogare il Servizio;
-   Le variazioni degli impegni assunti e delle sanzioni applicabili;
-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;
-   L'espansione o la riduzione dell'ambito di applicazione del Servizio.

La gestione delle versioni e delle revisioni del Contratto di servizio è registrata nel preambolo del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni innescate dal COMMITTENTE
Le modifiche alla Convenzione di servizio possono avere, in particolare, come origine:

-   Un'evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni nei livelli di servizio da parte del Fornitore.

### 10.2.2. Evoluzioni iniziate dal Fornitore
Tutte le modifiche dell'Accordo di servizio sono soggette all'accettazione del COMMITTENTE. Si intende che qualsiasi modifica o integrazione
validata che modifica gli elementi finanziari del Contratto, potrebbe comportare la firma di un emendamento allo stesso.

## 10.3. Reversibilità
Inoltre, Cloud Temple si impegna a consentire una revisione del presente Contratto di servizio (che prevede in particolare la sua risoluzione) senza penali per il COMMITTENTE in caso di perdita della qualifica SecNumCloud.

I Servizi non comprendono un obbligo di reversibilità (ossia, l'assistenza al Cliente affinché possa migrare il suo sistema verso un altro Fornitore) ad eccezione della messa a disposizione del COMMITTENTE da parte del Fornitore dell'interfaccia COMMITTENTE che permette al COMMITTENTE di salvare e recuperare i propri dati inclusi in particolare i dati di configurazione del loro sistema informativo attraverso una delle seguenti modalità tecniche a scelta del COMMITTENTE: la messa a disposizione di file seguendo uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore oppure tramite l'implementazione di interfacce tecniche che permettono l'accesso ai dati secondo uno schema documentato ed utilizzabile (API).

Il COMMITTENTE, unico padrone del suo sistema, deve fare tutto il possibile per facilitare questa operazione all'occorrenza (ciò implica, in particolare, che egli predisponga una documentazione accurata a tale scopo) e l'elaborazione di piani di reversibilità. Nel caso in cui il COMMITTENTE avesse bisogno di una prestazione complementare, il Fornitore può proporre una missione di consulenza a questo riguardo nell'ambito di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio
## 11.1. Gestione degli Incidenti e delle Interruzioni

### 11.1.1. Incidenti
#### 11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio
-   Sinistri

-   Guasti e malfunzionamenti

-   Incidenti di sicurezza:

-   Che impattano la disponibilità del servizio

-   Che impattano la riservatezza del servizio

-   Che impattano l'integrità del servizio

#### 11.1.1.2. Gestione degli incidenti
-   Scadenze

-   Azioni a posteriori

-   Archiviare i documenti che dettagliano gli incidenti di sicurezza.

-   Notifica di violazione di dati personali (online): <https://notifications.cnil.fr/notifications/index>

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza
Il COMMITTENTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, per esempio attraverso la loro formalizzazione in un PSA applicabile al Servizio.

Di default, il COMMITTENTE viene informato:

- Degli incidenti di sicurezza con impatto (impatto I1 e I2 secondo la scala di impatto definita nel processo di priorizzazione dei trattamenti del presente Contratto di servizio);

- Delle violazioni di dati personali per le quali il COMMITTENTE è responsabile del trattamento;

- Delle violazioni di dati personali per le quali il Fornitore è responsabile del trattamento e che comprendono dati personali del COMMITTENTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione garantita consiste nell'implementazione:

-   Del piano per il mantenimento in condizioni operative del Servizio per assicurare buoni indicatori di disponibilità come si impegna il Fornitore in precedenza;

-   Del piano di continuità operativa/recupero di attività (PCA/PRA) se sottoscritto dal COMMITTENTE, attivato secondo gli eventuali incidenti che potrebbero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE

Il Fornitore è vietato, nell'ambito del presente Contratto di servizio, ogni accesso ai Tenant e allo spazio dell'interfaccia del
COMMITTENTE.

Sarà responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore. Il COMMITTENTE riconosce che gli accessi saranno utilizzati nell'ambito dell'hosting e, in ultima analisi, della gestione dell'informazione (se sottoscritta dal COMMITTENTE).

### 11.2.3. Accessi remoti di terzi coinvolti nella fornitura del servizio nell'ambito del COMMITTENTE
Nessun accesso remoto da parte di terzi che partecipano alla fornitura del Servizio è autorizzato.

Qualora un'esigenza tecnica rendesse questo scenario necessario, tale tipo di accesso sarà realizzato solo dopo notifica al COMMITTENTE con giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati al termine del Contratto
Alla fine del Contratto, indipendentemente dal fatto che il Contratto sia giunto a termine o per qualsiasi altra ragione, il Fornitore assicurerà la cancellazione sicura di tutti i dati trattati nell'ambito del Servizio, inclusi i Dati tecnici del COMMISSARIO. Il Fornitore fornirà un preavviso formale rispettando un periodo di ventuno (21) giorni. I dati del COMMISSARIO saranno cancellati entro un massimo di trenta (30) giorni dalla notifica. Il Fornitore fornirà un certificato di distruzione dei dati al COMMISSARIO.

# 13. Diritto applicabile
## 13.1. In generale
Il diritto applicabile e a cui è soggetta la presente Convenzione di servizio è il diritto francese.

## 13.2. Rispetto del diritto e delle regolamentazioni applicabili
Il Fornitore si impegna sui seguenti punti:

- L'identificazione delle costrizioni legali e regolamentari applicabili nell'ambito del Servizio;

- Il rispetto delle costrizioni legali e regolamentari applicabili ai dati affidati al Fornitore;

- Il rispetto della Legge informatica e libertà e del RGPD;

- L'attuazione di mezzi di protezione dei dati personali;

- L'attuazione di un processo di vigilanza legale e regolamentare;

- Di disporre e mantenere relazioni appropriate o una vigilanza con le autorità settoriali in relazione alla natura dei dati trattati nell'ambito dei Servizi. Ciò include, in particolare, l'ANSSI, il CERT-FR e la CNIL.

## 13.3. RGPD
Agendo in qualità di subappaltatore ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

- A garantire trasparenza e tracciabilità;

- A nominare un DPO incaricato di definire e implementare le misure di protezione dei dati personali;

- A fornire assistenza e consulenza al COMMITTENTE, avvertendolo se un'istruzione dello stesso costituisca una violazione delle norme sulla protezione dei dati personali qualora il Fornitore sia in grado di identificarla;

- A garantire la sicurezza dei dati trattati (a causa della qualificazione SecNumCloud).

## 13.4. Protezione rispetto al diritto extra-europeo
In caso di ricorso da parte del Prestatario, nell'ambito del Servizio, al servizio di una società terza - incluso un subappaltatore - avente la sua sede statutaria, amministrazione centrale o principale stabilimento all'interno di uno Stato non membro dell'Unione Europea o appartenente o essendo controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Prestatario si impegna che detta società terza non disporrà di alcun accesso ai dati operati dal servizio 'Tempio Sicuro'.

Per ricordo, i dati menzionati sono quelli che sono affidati al Prestatario dal COMMITTENTE così come tutte le Dati tecnici comprensivi di informazioni sui COMMITTENTI.

Per le necessità del presente articolo, la nozione di controllo è intesa come quella menzionata al paragrafo II dell'articolo L233-3 del codice di commercio.

# 14. FIRME
Fatto a ________________, il
_______________________

Per Cloud Temple, il FORNITORE

Per _________________, il COMMITTENTE