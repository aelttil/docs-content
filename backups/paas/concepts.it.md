---
title: Concetti
---

## Obiettivi

La piattaforma __'PaaS'__ di Cloud Temple mira a consentire ai nostri clienti di operare i loro programmi di trasformazione digitale con facilità, indipendentemente dall'infrastruttura sottostante.

I servizi associati a questa piattaforma sono i seguenti:

- Contenitorizzazione in partnership con __REDHAT__ attraverso la piattaforma __'[OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift)'__,
- Archiviazione oggetti transazionali in partnership con __DELL__ attraverso la piattaforma __'[ECS](https://www.dell.com/en-us/dt/storage/ecs/index.htm?hve=explore+ecs)'__,
- Criptaggio in partnership con __THALES__.

Questi servizi saranno gradualmente aperti alla commercializzazione nel primo trimestre del 2024.
## Piattaforma di archiviazione oggetti

### Generalità

L'archiviazione oggetto, si distingue per la sua robustezza, la sicurezza rafforzata e la sua capacità di evoluzione, offrendo un accesso permanente ai vostri dati. Questo sistema è ideale per archiviare informazioni nel cloud, garantendo la loro disponibilità da qualsiasi posizione.

Risponde efficacemente alle necessità delle aziende che richiedono una gestione voluminosa e diversificata di file digitali.

Lanciato nel 2006 da Amazon Web Services (AWS), __Simple Storage Service (S3)__ è diventato lo standard de facto per l'archiviazione oggetto nel mondo del cloud.

L'archiviazione oggetto S3 è caratterizzata dalla sua __elasticità__, che regola automaticamente le capacità di archiviazione in base alle fluttuazioni del volume dei dati. Questa flessibilità consente agli utenti di manipolare i file senza preoccuparsi delle restrizioni di capacità, ottimizzando così il processo di archiviazione garantendo un accesso rapido ed efficiente alle informazioni.

La __sicurezza dei dati__ è garantita da strategie di protezione multicouche, che includono l'uso di chiavi di accesso criptate, il criptaggio dei dati in transito e a riposo, così come una gestione rigorosa dei diritti di accesso.

Inoltre, l'integrazione fluida dell'archiviazione oggetto S3 con altri servizi cloud arricchisce e semplifica l'esperienza degli sviluppatori grazie a un vasto ecosistema di strumenti e librerie che facilitano l'integrazione nelle applicazioni e nei flussi di lavoro esistenti.

### Casi d'uso

L'archiviazione oggetti Cloud Temple si presenta come una soluzione ideale per __l'archiviazione secondaria o gerarchizzata__, offrendo un'alternativa economica per archiviare __dati meno frequentemente accessibili__, come i backup di database o i file di grandi dimensioni, da un'archiviazione primaria più costosa.

Per lo sviluppo e il dispiegamento di applicazioni, l'archiviazione oggetti Cloud Temple facilita lo __sviluppo di applicazioni web, mobili e cloud di nuova generazione__.

Come base per __la creazione di un Data Lake__, l'archiviazione oggetti Cloud Temple permette alle aziende di tutti i settori di massimizzare il valore dei loro dati. Integra servizi HDFS ad alte prestazioni, offrendo capacità analitiche avanzate in loco per migliorare il processo decisionale riducendo al minimo i rischi e i tempi.

Basata sulla soluzione __Dell ECS (Elastic Cloud Storage)__, l'archiviazione oggetti Cloud Temple è arricchita da partnership strategiche con vari editori, come __Databricks__ e __ChapsVision__, aumentando così la portata delle sue soluzioni di archiviazione oggetto.

Nel campo dell'__Internet delle Cose (IoT)__, si distingue per la sua capacità di gestire un volume illimitato di oggetti, senza restrizioni sulla dimensione degli oggetti o dei metadati, rendendola la piattaforma ideale per l'archiviazione dei dati IoT.

L'archiviazione oggetti Cloud Temple offre anche una soluzione sicura per __l'archiviazione e la conservazione a lungo termine dei dati__, rispondendo ai requisiti di conservazione delle aziende.

È particolarmente adatta per l'hosting di __contenuti statici__, come immagini, script e fogli di stile CSS, ottimizzando le prestazioni delle applicazioni web alleggerendo i server delle applicazioni e migliorando il download dei contenuti agli utenti finali.

Infine, come componente essenziale delle __strategie di backup e recupero dopo disastri__ (DRaaS), l'archiviazione oggetti Cloud Temple consente un backup regolare e affidabile dei dati critici. La sua struttura distribuita su più siti assicura la disponibilità dei dati in ogni momento, riducendo così le interruzioni di attività e le potenziali perdite di dati.
## Piattaforma RedHat OpenShift
### Generalità

__RedHat OpenShift__ è una piattaforma di contenitorizzazione di applicazioni basata su __Kubernetes__, che automatizza il dispiegamento, la gestione e la scalabilità delle applicazioni in un ambiente cloud affidabile.

Concepita per gli sviluppatori e i team IT, offre un ambiente di sviluppo, test e produzione coerente e sicuro per le applicazioni cloud-native e le applicazioni tradizionali monolitiche.

__RedHat OpenShift__ facilita il lavoro degli ingegneri DevOps integrando strumenti di sviluppo, test automatizzati e processi di dispiegamento continuo (CI/CD) per accelerare il ciclo di vita dello sviluppo delle applicazioni. Supporta un'ampia gamma di linguaggi di programmazione e framework, permettendo agli sviluppatori di lavorare con le tecnologie che conoscono e preferiscono.

La piattaforma fornisce un'infrastruttura di contenitori altamente disponibile e sicura, aderendo alle migliori pratiche di sicurezza e offrendo funzionalità come autenticazione integrata, autorizzazione e controllo di accesso basato sui ruoli. __RedHat OpenShift__ permette anche una gestione precisa delle risorse, garantendo che le applicazioni dispongano delle risorse necessarie per funzionare ottimamente.

Con __RedHat OpenShift__, le aziende possono facilmente dispiegare le loro applicazioni in un ambiente cloud ibrido, godendo così della flessibilità di effettuare il dispiegamento on-premise o nel cloud.

### Casi d'uso

__RedHat OpenShift__ viene utilizzato in una varietà di casi d'uso, grazie alla sua flessibilità, sicurezza e un ampio ecosistema. Di seguito alcuni dei principali casi d'uso:

1. **Sviluppo di applicazioni cloud-native:** OpenShift è ideale per sviluppare e distribuire applicazioni progettate specificamente per il cloud, utilizzando architetture a microservizi, contenitori e servizi gestiti. Ciò consente agli sviluppatori di concentrarsi sulla creazione di funzionalità piuttosto che sulla gestione dell'infrastruttura.

2. **Modernizzazione delle applicazioni esistenti:** Le aziende utilizzano OpenShift per modernizzare le loro applicazioni monolitiche tradizionali, rifattorizzandole in microservizi o contenendole per migliorare scalabilità, resilienza e portabilità.

3. **Integrazione e dispiegamento continui (CI/CD):** OpenShift facilita l'istituzione di pipeline CI/CD, consentendo l'integrazione e il dispiegamento automatici del codice, riducendo gli errori umani e accelerando il ciclo di vita di sviluppo delle applicazioni.

4. **Automatizzazione delle operazioni IT:** Grazie alla sua stretta integrazione con Kubernetes, OpenShift consente una gestione automatizzata dei contenitori, inclusi il loro dispiegamento, scalabilità e gestione del ciclo di vita, liberando gli operatori IT da compiti ripetitivi.

5. **Sviluppo multi-cloud e ibrido:** OpenShift offre la flessibilità di distribuire applicazioni in ambienti on-premise, pubblici, privati o ibridi, consentendo alle aziende di scegliere l'approccio più adatto alle loro necessità senza essere vincolate a un unico fornitore cloud.

6. **Applicazioni a grande scala e ad alta disponibilità:** OpenShift è progettato per supportare applicazioni che richiedono alta disponibilità, grande scala e elevate prestazioni, grazie alla sua gestione efficace delle risorse e alla sua capacità di replicare applicazioni su più nodi.

7. **Sviluppo e dispiegamento di applicazioni IoT:** OpenShift può essere utilizzato per sviluppare e distribuire applicazioni IoT, beneficiando della sua capacità di gestire un gran numero di connessioni e dati in tempo reale.

8. **Big Data e applicazioni analitiche:** Con il suo supporto per soluzioni come Apache Spark su Kubernetes, OpenShift permette l'elaborazione di grandi quantità di dati e l'esecuzione di analisi complesse, facilitando così la presa di decisioni basata sui dati.

9. **Ambienti di sviluppo e test:** OpenShift offre ambienti isolati e riproducibili per lo sviluppo e il test delle applicazioni, riducendo i conflitti tra i team e migliorando la qualità del codice.

Questi casi d'uso illustrano la versatilità di OpenShift come piattaforma che non solo accelera lo sviluppo e il dispiegamento delle applicazioni, ma supporta anche la trasformazione digitale delle aziende attraverso diversi settori di attività.
