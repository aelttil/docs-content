---
title: Redhat Openshift
---

L'offerta RedHat Openshift di Cloud Temple si basa su un'architettura composta da Openshift e Openshift Data Foundation, distribuita in 3 zone di disponibilità nella regione FR1-PARIS.

## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma di contenitori aziendale che automatizza il dispiegamento, la gestione e il scaling delle applicazioni containerizzate. È una piattaforma costruita attorno a Docker, un sistema di containerizzazione che permette di impacchettare un'applicazione e le sue dipendenze in un contenitore virtuale, e a Kubernetes, un sistema di orchestrazione dei contenitori, che gestisce l'esecuzione e il coordinamento dei contenitori su un cluster di server.

### Principali funzionalità di Red Hat OpenShift:
- **Distribuzione e gestione automatizzate:** OpenShift semplifica il processo di distribuzione delle applicazioni automatizzando le routine di gestione quali lo scaling, la salute e la durata della vita dei contenitori. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per diversi linguaggi e servizi:** La piattaforma supporta un'ampia varietà di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come la messaggistica, il caching e i database, permettendo così agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e distribuzione continua (CD):** OpenShift integra strumenti di CI/CD che automatizzano il pipeline di sviluppo software, dal commit iniziale fino al deployment in produzione, promuovendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:
- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce il tempo di commercializzazione e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente il scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il dispiegamento e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni allo sviluppo di software.

### RedHat Openshift Data Foundation
La Fondazione OpenShift Data Foundation (ODF) è una soluzione integrata di gestione e archiviazione dei dati pensata per operare in maniera trasparente con l'ecosistema OpenShift. Offre un'infrastruttura dati persistente, sicura e altamente affidabile per applicazioni in container, sostenendo così gli ambienti di sviluppo moderni incentrati su container e microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità Chiave di OpenShift Data Foundation:

- **Archiviazione Persistente:** ODF fornisce uno strato di archiviazione persistente per i contenitori, fondamentale per le applicazioni aziendali come i database, i sistemi di gestione dei contenuti e le applicazioni che richiedono uno stato persistente.

- **Multicloud e Ibrido:** Progettato per il cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coesa attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e Orchestratura:** L'integrazione approfondita con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, il ridimensionamento e la gestione del ciclo di vita dell'archiviazione in base alle necessità delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e lo snapshot dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei Dati:** La soluzione integra caratteristiche di sicurezza avanzate, quali la cifratura dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:


- **Flessibilità Operativa :** ODF permette alle imprese di gestire efficacemente i loro dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze in continua evoluzione delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati :** Automatizzando numerose attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative di maggiore valore aggiunto.

- **Ottimizzazione dei Costi :** La capacità di ODF di adattarsi dinamicamente alle esigenze di archiviazione aiuta ad ottimizzare i costi evitando la sovraprovvigionamento e utilizzando più efficacemente le risorse disponibili.

- **Miglioramento delle Prestazioni :** ODF è progettato per fornire alte prestazioni per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione avanzata per la gestione dei dati che migliora l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali implementate su OpenShift. Offrendo storage persistente, automatizzato e sicuro, ODF gioca un ruolo cruciale nell'abilitazione delle imprese a sfruttare appieno il potenziale delle tecnologie container e del cloud ibrido.

## Architettura generale della piattaforma
### Generalità
La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, implementata nativamente su **tre zone di disponibilità distinte** all'interno della stessa regione di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma è composta da un piano di controllo e nodi di lavoro, tutti gestiti dall'infrastruttura di Cloud Temple. Il piano di controllo è distribuito equamente sulle tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da blade di calcolo, disposti in modo che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro, sono disponibili vari tipi di blade di calcolo che consentono un'adattabilità flessibile a diverse esigenze operative:

| Unità di opera Redhat Openshift 4 with Data Foundations - On Demand - 1 mese                                                | Unità                  | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                        | 1 piano dedicato       | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 core / 20 thread - 64 GB di ram - 512 GB FLASH 1500 iops)                        | 3 worker dedicati      | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 core / 40 thread - 128 GB di ram - 512 GB FLASH 1500 iops)                     | 3 worker dedicati      | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 core / 64 thread - 384 GB di ram - 512 GB FLASH 1500 iops)                  | 3 worker dedicati      | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 core / 96 thread - 768 GB di ram - 512 GB FLASH 1500 iops)                   | 3 worker dedicati      | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 core / 112 thread - 1.5 TB di ram - 512 GB FLASH 1500 iops)                      | 3 worker dedicati      | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 core / 64 thread - 512 GB di ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 worker dedicati + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift di Cloud Temple sono disponibili con pagamento on demand o con abbonamento di 12 mesi.

**Note**:

1. *Il mantenimento in condizione operativa e in sicurezza del piano di controllo è responsabilità di Cloud Temple nell’ambito di un servizio PaaS.*
   
2. *Al 15 giugno 2024, la versione 1 della piattaforma è volontariamente limitata a livello software per un piano di controllo a 30 worker nodes (indipendentemente dal tipo di worker) e ad uno storage persistente globale di 50 TB. Se questi limiti sono vincolanti per il vostro progetto, si prega di contattare il supporto.*
   
3. *Ogni worker node viene fornito con 512 GB di storage flash Block, che corrisponde a 1.5 TB per ogni unità di opera (1 worker per AZ).*

4. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza che sia necessario sottoscriverlo separatamente.*

5. *È possibile aggiungere successivamente dello storage block al cluster Openshift.*
   
6. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un maggior numero di nodi a una singola zona.*

### Offerta RedHat implementata nell'ambito della piattaforma Openshift Cloud Temple
La piattaforma è una Redhat Openshift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Distribuire una piattaforma Redhat Openshift all'interno del vostro tenant
### Assegnazione dei diritti di accesso
È indispensabile che l'amministratore del [tenant](../console/tenants.md) conceda il diritto di gestire la piattaforma Openshift all'utente amministratore Openshift per potervi accedere:

![](images/oshift_rights.png){:height="70%" width="70%"}

### Accesso all'ambiente Openshift all'interno di un tenant
Dopo l'assegnazione dei diritti, il modulo '__Openshift__' appare quindi nel menu della console Cloud Temple:

![](images/oshift_menu_001.png)

A questo punto vedrete comparire i cluster Openshift che sono distribuiti all'interno del vostro tenant.

Cliccate sul cluster che volete amministrare. Accederete all'ambiente di amministrazione del cluster:

![](images/oshift_menu_002.png)

Dopo l'autenticazione, potete amministrare il vostro cluster:

![](images/oshift_menu_003.png)

## Strategia di backup della vostra piattaforma PaaS Openshift
Il backup e il ripristino della piattaforma PaaS Openshift sono di responsabilità di Cloud Temple per la parte **ETCD** nell'ambito della gestione della piattaforma. **Il backup e il ripristino per la parte distribuzione e dati applicativi sono di responsabilità del Committente**.

RedHat Openshift Platform Plus include l'**API Openshift Data Protection (OADP)** e mette a disposizione in modo nativo **Velero**. Qui potete trovare la documentazione completa sul tema (in inglese): [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/en/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple offre opcionalmente ai suoi clienti la soluzione **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/kubernetes-native-backup-and-restore.html)), una piattaforma specializzata nella gestione dei dati per gli ambienti Kubernetes. Progettata per soddisfare le necessità relative alla protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il recupero dai disastri. Kasten K10 si integra in modo nativo in ambienti Kubernetes, sia gestiti su cluster cloud che on-premise, e può adattarsi a diversi scenari d'uso, inclusa la migrazione di cluster tra diverse distribuzioni di Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei principali casi d'uso di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che si tratti di un passaggio a un'infrastruttura più robusta o per consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: quando si migra un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è effettuare il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), consentendo di creare snapshot delle applicazioni da migrare. Questi backup vengono poi memorizzati in modo sicuro con opzioni di cifratura e controllo degli accessi granulari, garantendo la sicurezza dei dati durante l'intero processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze nelle architetture e nelle configurazioni specifiche di ciascuna piattaforma. Kasten K10 semplifica questo processo fornendo uno strato di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati da un cluster sorgente a uno destinatario, prendendo in considerazione le specificità di ciascun ambiente. Ad esempio, oggetti Kubernetes come ConfigMaps, Secrets, PV, e CRDs (Custom Resource Definitions) possono essere migrati tenendo conto dei vincoli di ciascuna distribuzione Kubernetes, sia che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo significativamente il rischio di errori manuali. Inoltre, Kasten K10 permette una migrazione graduale o completa, a seconda delle necessità, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che desiderano migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo assicura una massima flessibilità e consente ai team DevOps di scegliere l'ambiente migliore in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che consente agli amministratori di gestire facilmente le operazioni di migrazione e backup senza necessità di una conoscenza approfondita di ciascuna piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che consentono di definire politiche di migrazione e backup periodiche, integrandosi con i pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base a finestre di manutenzione, effettuare test di convalida post-migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.

 - **Sicurezza e conformità**: nel contesto di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità alle normative (ISO, SOC, GDPR, ecc.) sono aspetti fondamentali. Kasten K10 assicura la cifratura dei dati in transito e a riposo, offrendo opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione indispensabile per le aziende che vogliono migrare in modo efficiente e sicuro i cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

La fatturazione avviene in base al numero di worker node.

| Unità di lavoro Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protezione dati Kubernetes e mobilità applicativa                 | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Attenzione, la volumetria disco necessaria al corretto funzionamento del vostro backup deve essere prevista nell'ambiente di ricezione del vostro backup, generalmente in storage S3. Non è inclusa nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è attivato per la gestione delle migrazioni, dei backup e del ripristino_

## Diritti e Permessi
Ecco le principali autorizzazioni implementate:

|       Gruppo       |         API         |                                                                                       Permessi delle Risorse                                                                                        |
|--------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |     ("")/Apps       |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare  |
|        Core        |         ("")        |                                                                                           Creare Secrets                                                                                           |
|config.kio.kasten.io|       Profili       |                                                                         Ottenere, Elenchi, Osservare, Creare, Aggiornare, Modificare, Eliminare                                                                         |
|config.kio.kasten.io|    Predefinizioni di Politica,    |                                                TransformSets, Associazioni di Blueprint, Contesti di Sicurezza di Storage, Associazioni di Contesti di Sicurezza di Storage Ottenere, Elenchi                                                |
|config.kio.kasten.io|         Tutte        |                                                                                     (*) Ottenere tutte le risorse, Elenchi                                                                                     |
|       Batch        |     CronJobs,       |                                                                      Jobs Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                      |
|   Autoscaling   |Autoscalatori di Pod Orizzontali|                                                                          Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                           |
|    Networking     |     Ingressi,       |                                                                 Politiche di Rete Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                 |
|       Policy       | Budget di Disturbo dei Pod  |                                                                          Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                          |
|       Route        |    (OpenShift)    |                                                                     Percorsi Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                     |
|       Build        |    (OpenShift)    |                                                    Configurazioni di Build, Builds, Log di Builds Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                    |
|       Image        |    (OpenShift)    |                                                     Flussi di Immagini, Tag dei Flussi di Immagini Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                      |
|        Apps        |    (OpenShift)    |                                                          Configurazioni di Distribuzione Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                         |
|      Template      |    (OpenShift)    |                                                      Template, Istanze di Template Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                       |
|   Autorizzazione   |        Ruoli,        |                                                                   Associazioni di Ruoli Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                   |
|        RBAC        |        Ruoli,        |                                                                   Associazioni di Ruoli Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                                   |
|      Progetto      |    (OpenShift)    |                                                                              Progetti Ottenere, Eliminare, Aggiornare, Modificare                                                                               |
|     Operatori      |   Abbonamenti,    |                                  Versioni del Servizio di Cluster, Fonti del Catalogo, Piani di Installazione, Gruppi di Operatori Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                  |
|    Cert-Manager    |    Certificati,     |                                             Richieste di Certificati, Emettitori, Emettitori del Cluster Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                              |
|      Logging       |    (OpenShift)    |                                                  Reindirizzatori di Log del Cluster, Log del Cluster Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                  |
|      Storage       |  Snapshot di Volumi  |                                                                         Ottenere, Elenchi, Osservare, Creare, Aggiornare, Modificare, Eliminare                                                                          |
|        Ceph        |       (Rook)       |                                      Cluster di Ceph, Piscine di Blocchi di Ceph, Filesystem di Ceph, Negozi di Oggetti di Ceph Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                      |
|       NooBaa       |   Negozi Secondari,   |                                                 Classi di Bucket, Account NooBaa Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                  |
|   OggettoBucket    |   Reclami di OggettoBucket,   |                                                             OggettiBucket Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                                             |
|        OCS         |    (OpenShift)    |                                               Gruppi di Storage, Consumatori di Storage Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                               |
|       Locale       |        Storage       |                                               Volumi Locali, Scoperte di Volume Locale Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                               |
|        CSI         |       Add-on        |                                              Nodi di Add-on CSI, Recinzioni di Rete Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                                              |
|      Metrichi      |         Pod,         |                                                                                               Ottenere Nodi                                                                                                |
|      Sicurezza     | Revisioni della Policy di Sicurezza dei Pod |                                                                                               Creare                                                                                                |
|       Custom       |     Risorse        |                            Risorse personalizzate varie legate a Kasten K10, Keycloak, ecc. Creare, Ottenere, Elenchi, Osservare, Aggiornare, Modificare, Eliminare                             |

## Limiti attuali dell'offerta Redhat Openshift in ambiente SecNumCloud
Ecco alcune limitazioni indotte dalla qualifica SecNumCloud:

### Piano di controllo dedicato
Le carichi di lavoro non possono essere eseguiti sul piano di controllo a causa delle restrizioni inerenti alla gestione delle risorse e alla sicurezza della piattaforma OpenShift su SecNumCloud.

### Divieto di dispiegare immagini con privilegi elevati (rootless)

Per conformarsi ai requisiti di sicurezza del repository SecNumCloud, è obbligatorio utilizzare contenitori senza privilegi (rootless).

Questo approccio rafforza la sicurezza generale prevenendo qualsiasi accesso privilegiato ai contenitori. Le applicazioni che richiedono contenitori con privilegi dovranno essere modificate, poiché il loro dispiegamento non sarà autorizzato.

Questa restrizione si estende anche agli Helm Charts e agli operatori che utilizzano immagini non rootless, rendendo il loro dispiegamento impossibile all'interno dell'infrastruttura.

### Restrizioni sui diritti dei ClusterRole
Nell'ambito della nostra offerta OpenShift, stiamo implementando una gestione rigorosa dei diritti di accesso a livello del cluster, secondo i requisiti SecNumCloud.

Questo approccio comporta una limitazione dei ClusterRoles per i nostri clienti, riducendo così certi aspetti della gestione globale del cluster. Sebbene questa misura possa inizialmente apparire vincolante, il suo scopo è di rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che ciò possa generare sfide tecniche, in particolare nella configurazione di impostazioni avanzate, e potenziali implicazioni relative all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è a disposizione per guidarvi e consigliarvi su questo argomento.

### Il contesto SCC non può essere modificato nell'ambiente SecNumCloud
Le Security Context Constraints (SCC) sono soggette a restrizioni severe e non possono essere modificate dagli utenti. Questa limitazione ha ripercussioni significative sul dispiegamento e l'esecuzione dei container.

In pratica, ciò significa che i parametri di esecuzione dei container, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da requisiti di sicurezza, mira a prevenire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Pertanto, le applicazioni che richiedono contesti di sicurezza specifici, specialmente quelle che necessitano di accessi privilegiati, possono incontrare ostacoli durante il dispiegamento.

Da un punto di vista tecnico, ciò può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di dispiegamento per conformarsi ai SCC predefiniti. A livello operativo, questa costrizione può ridurre la flessibilità dei dispiegamenti e aumentare la complessità di gestione di alcune applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Charts o operatori che non rispettano gli SCC vigenti.

### Limitazioni degli Helm Charts che creano Custom Resource Definitions (CRD)

Per conformarsi alla qualificazione SecNumCloud, un'importante restrizione riguarda l'uso delle Custom Resource Definitions (CRD) e dei controller personalizzati. Questa misura, legata ai diritti sul cluster, mira a prevenire il dispiegamento di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operator e ai Helm Charts, con un impatto diretto sui diritti RBAC, poiché le CRD permettono di estendere l'API Kubernetes. Quindi, gli operator e Helm Charts devono passare attraverso una catena di certificazione presso i nostri servizi per garantirne la conformità e la sicurezza.

Le CRD personalizzate, in particolare quelle che rispondono a specifiche esigenze aziendali, possono essere rifiutate nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, progettata per proteggere l'integrità e l'affidabilità del cluster, autorizza solo le CRD provenienti da operator o da Helm Charts ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi sulle migliori pratiche da adottare in questo contesto.

### Nessun supporto per gli IP Dinamici per i runner
La piattaforma OpenShift SecNumCloud richiede che i runner siano configurati con indirizzi IP fissi. Questo requisito è motivato dalla necessità di autorizzare gli IP che amministrano la nostra console Cloud Temple, indispensabile per lo strumento di gestione dell'accesso alle API. Gli indirizzi IP autorizzati sono inoltre utilizzati per accedere all'API OpenShift e alle interfacce di amministrazione di OpenShift e di Shiva.

Di conseguenza, l'uso di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico

L'ambiente SecNumCloud Openshift offre opzioni di Load Balancing a diversi livelli per garantire una gestione sicura ed efficace del traffico. L'API del Load Balancer è accessibile tramite le porte 6443 e 443, con un controllo di sicurezza garantito da una whitelist gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico collegato al nostro backbone, ma non è accessibile per impostazione predefinita, rafforzando così la sicurezza degli accessi.

Per il Load Balancer privato, l’ambiente utilizza Ingress (nginx) come soluzione predefinita, il che consente di gestire il traffico interno in modo efficace. Inoltre, è disponibile un supporto TCP attraverso l’infrastruttura IaaS di Cloud Temple, offrendo così una flessibilità aggiuntiva per le applicazioni che necessitano di un bilanciamento del carico a questo livello.

Riguardo al Load Balancer pubblico, il supporto di livello 4 è fornito tramite Ingress, sebbene esistano attualmente alcune limitazioni con il comando "expose". Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile, continuando al contempo a evolversi per offrire una maggiore compatibilità e flessibilità.

## Prossime funzionalità
Le funzionalità future previste nell'ambiente SecNumCloud includono diversi miglioramenti: verrà applicato un certificato personalizzato a livello dello spazio dei nomi, e KubeVirt sarà integrato per una migliore gestione delle macchine virtuali.

Per quanto riguarda le connessioni TCP, sarà messa a disposizione una gamma di porte predefinita (da 30000 a 32767).

La console Cloud Temple sarà utilizzata per l'amministrazione dei nodi, con aggiornamenti previsti per l'interfaccia OpenShift. L'aggiunta di nodi sarà facilitata dal comando 'Order', mentre il loro ritiro avverrà attraverso un ticket presso i servizi professionali.

L'interconnessione dei flussi privati PaaS verso l'infrastruttura IaaS di Cloud Temple sarà inoltre possibile, migliorando la gestione dei flussi uscenti OpenShift.

È prevista l'integrazione OpenShift IAM con la console Cloud Temple, così come l'implementazione di Hapee (HAProxy) davanti al Load Balancer pubblico. Infine, il supporto delle GPU sarà disponibile in OpenShift grazie all'Openshift AI Operator e a watsonx.ai, consentendo applicazioni di intelligenza artificiale sulla piattaforma.