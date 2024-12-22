---
title: Memoria di massa
---

## Generalità sulla memoria di massa

Cloud Temple offre diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ è in grado di fornire il livello di prestazioni richiesto dagli ambienti dei nostri clienti grazie all'ampia
quantità di cache memoria integrata nei controller e alla possibilità di distribuire l'intero numero di IOPS
di un server su più SAN.

Viene inoltre utilizzata per consentire la replicazione dei vostri LUN di archiviazione a blocchi tra
le zone di disponibilità o per facilitare gli interventi sulle unità di storage.

## Archiviazione a blocchi
### Generalità
Il storage è principalmente di tipo FLASH NVME dedicato a carichi di lavoro professionali.
I dischi sono utilizzati dagli array di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di storage __'Mass Storage'__ offre dischi meccanici per le necessità di archiviazione in un contesto di efficienza economica. Diversi livelli di prestazioni sono disponibili:

| Riferimento                          | Unità | SKU                                          | 
|--------------------------------------|-------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To      | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To       | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To        | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archiviazione         | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilità dello storage è del 99,99% misurato mensilmente, intervallo di manutenzione incluso,*
- *Non ci sono restrizioni o quote sulla lettura o sulla scrittura,*
- *Non c'è fatturazione a IOPS,*
- *Non c'è impegno di performance sulla classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500Gio,*
- *Quando si utilizza un meccanismo di replica dello storage, le prestazioni devono essere identiche in entrambe le zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" come la compressione o la deduplicazione: quando si riservano 10Tio di storage, si dispone fisicamente di 10Tio utili di storage implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente cliente.*

### Utilizzo nell'ambito dell'offerta di calcolo vmware
Nell'ambito dell'utilizzo dello storage in modalità blocco sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, **dovete prendere in considerazione diverse considerazioni importanti**:

1. **File di swap (.VSWP) all'avvio delle macchine virtuali**: Quando una macchina virtuale si avvia, crea un file .VSWP delle dimensioni della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete sempre disporre nel vostro datastore di uno spazio libero equivalente alla somma delle dimensioni delle memorie delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 TiB di storage a blocchi e desiderate avviare 10 macchine virtuali di 64 GiB di memoria ciascuna, saranno necessari 640 GiB di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Spazio libero per gli snapshot di backup**: Il servizio di backup utilizza snapshot istantanei (snapshots). Dovete quindi sempre avere abbastanza spazio libero per consentire la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per effettuare il backup. In genere, si raccomanda di mantenere almeno il 10% di spazio libero per questa operazione.

3. **Gestione dei dischi dinamici**: Siate prudenti con l'uso dei dischi dinamici. Se non gestite la loro crescita, una mancanza di spazio fisico può portare a un blocco (freeze) della macchina virtuale nel migliore dei casi, o a un crash con corruzione nel peggiore dei casi. È cruciale monitorare attentamente lo spazio disponibile sui vostri datastores quando utilizzate questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi di avere sempre lo spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.

## Storage in modalità backup
Il deposito dedicato al backup delle vostre macchine virtuali viene auto-provvisionato dalla piattaforma [IBM Spectrum Protect Plus](backup.md) entro il limite della quota ordinata.

| Riferimento               | Unità | SKU                                      |
|---------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiviazione | 1 TiB | csp:(region):iaas:storage:blocco:backup:v1 |

## Deposito oggetto

Il Cloud Temple object storage si basa sulla tecnologia [DELL ECS](https://www.dell.com/en-us/dt/storage/ecs/).

Troverete la descrizione di questo storage nella sezione PaaS: [stockage objet]().

## Replica dello storage in modalità blocco
### Principi
Per consentire l'implementazione dei vostri piani di ripresa delle attività, quando non è possibile essere in situazione di continuità operativa con meccanismi applicativi e la replica delle macchine virtuali non è adatta, Cloud Temple propone __meccanismi di replica dello storage in modalità blocco tra le zone di disponibilità di una regione__.

Questi meccanismi di replica sono applicati sui LUN di storage dei vostri ambienti, in complemento ai backup.
La scelta dell'uso di un meccanismo di replica su un ambiente __dipende da molti fattori inclusi la criticità, la perdita di dati tollerata o ancora la performance mirata__ per l'applicazione. 

Cloud Temple propone due tipi di meccanismi dispiegati in una configurazione attivo/passivo: 

- La replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrono.
Quando un host scrive sul volume primario, la conferma del completamento dell'I/O è ricevuta prima che l'operazione 
di scrittura termini per la copia sul volume secondario. Se una operazione di failover è iniziata, l'applicazione  
deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario.
Se le operazioni di I/O sul volume primario sono messe in pausa per un breve periodo, 
il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è paragonabile a un processo 
di backup continuo in cui gli ultimi aggiornamenti sono sempre assenti.
Quando si usa Global Mirror per scopi di ripresa post-disastro, dovete considerare come intendete gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia a distanza che crea una copia sincrona 
dei dati di un volume primario verso un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono nessuna conferma 
che l'operazione di scrittura sia completata fintanto che i dati non sono scritti sul volume secondario. Questo assicura che entrambi i volumi contengano dati identici quando 
l'operazione di copia è completata. Dopo che l'operazione di copia iniziale è terminata, la funzione Metro Mirror 
mantiene costantemente una copia completamente sincronizzata dei dati sorgente sul sito destinatario. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".
Il piano di ripresa delle attività è attivato in caso di disastro o come parte di una richiesta di test del PRA.
Il sito passivo prende poi il comando dal sito attivo.

### Replica asincrona
Quando i vostri carichi di lavoro necessitano di tempi di ripresa dell'attività brevi e non è accettabile 
o adatto utilizzare meccanismi di tipo replica applicativa / replica di macchine virtuali, 
è possibile replicare un'unità logica di storage SAN tra due zone di disponibilità della stessa regione.

Questa offerta permette di ottenere un __RPO di 15Min__ e un __RTO inferiore a 4H__. Consente una ripartenza molto più rapida rispetto 
all'implementazione di un ripristino da backup.

In un volume di storage in replica asincrona (__Global Mirror__), i controllori di virtualizzazione SAN delle 
due zone di disponibilità lavorano in concertazione per realizzare le operazioni di scrittura su entrambi i siti.
Il sito master non attende l'acknowledgment di scrittura del sito slave.

Le fasi di un'operazione di scrittura sono le seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN della sua zona di disponibilità,
2. Il controller SAN locale chiede al controller SAN della zona distante di eseguire l'operazione di scrittura,
3. Il controller SAN locale non attende l'acknowledgment del SAN distante e procede quindi con la scrittura localmente,
4. Fornisce __acknowledgment__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito distante non accedono direttamente all'unità logica Global Mirror__: è necessaria una richiesta di servizio.


| SLA        | Descrizione                                                                                                                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min  | In caso di disastro sul datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura     |
| RTO < 4H   | In caso di disastro sul datacenter principale, la ripresa dell'attività è garantita entro 4 ore a seconda della complessità degli ambienti.      |

In caso di attivazione del PRA (Piano di Recupero Attività), il team di Cloud Temple esegue un'operazione di presentazione dell'unità logica __'Global Mirror'__ agli hypervisor distanti per consentire loro di accedere ai dati. L'implementazione di questa soluzione richiede di aver riservato nel sito 'standby' delle risorse di calcolo e della RAM per riprendere l'attività in caso di disastro.

L'uso di questa tecnologia necessita anche di raddoppiare lo spazio su disco: è necessario avere esattamente lo stesso spazio sul sito distante che sul sito locale.

L'uso di questo meccanismo può influenzare la performance dell'applicazione fino al 10%. __Solo le classi di storage 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__


| Riferimento                         | Unità  | SKU                                                |
|-------------------------------------|--------|----------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 TiB  | csp:(region):iaas:storage:license:globalmirror:v1 |

*__Nota__*:

- *Essendo l'offerta asincrona, è possibile che in caso di disastro alcune operazioni su disco non siano state scritte sul sito distante. Può quindi esserci un rischio sulla coerenza dei dati, da mitigare nell'analisi di rischio del piano di recupero attività.*
- *La replica dello storage in modalità blocco è trasparente per le macchine virtuali e le applicazioni.*
- *In questo contesto, è importante privilegiare gli scenari di replica applicativa o eventualmente di replica di macchine virtuali.*
- *Il calcolo e la memoria, sul sito di ripresa, possono essere ridotti per ottimizzare i costi se uno stato degradato è accettabile per il business durante l'azione del piano di recupero attività.*

### Replica sincrona
__Dal 1° gennaio 2024, il meccanismo di replicazione sincrona non è più commercializzato__

Nel caso di applicazioni ad alta criticità, che non tollerano alcuna perdita di dati, si consiglia di adottare 
un sistema di replicazione sincrona (o metro-replicazione) SAN tra le due zone di disponibilità. 
Questo piano consente di ottenere un RPO nullo (del tipo 'ultimo scrittura su disco').

In un volume di storage in metro-replicazione, i controller di virtualizzazione SAN lavorano in concerto per realizzare le operazioni di scrittura su entrambi i siti simultaneamente.

Le fasi di un'operazione di scrittura sono le seguenti:

1.	Un ipervisore desidera eseguire un'operazione di scrittura su un volume Metro-Mirror: invia la sua richiesta al controller SAN del suo sito.
2.	Il controller SAN locale chiede al controller SAN del sito remoto di realizzare l'operazione di scrittura.
3.	Quando la scrittura è realizzata, il controller SAN remoto fornisce conferma.
4.	Il controller SAN locale esegue quindi la scrittura localmente e fornisce conferma all'ipervisore che ha emesso la richiesta.
5.	Gli ipervisori del sito remoto non accedono direttamente alla LUN Metro Mirror.

![](images/schemas/replication_metro.png)

| SLA                            | Descrizione                                                                                                                                                          |   
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO = ultima scrittura su disco| In caso di disastro sul datacenter principale, la quantità massima di dati persi è quella dell'ultima scrittura su disco, ovvero un RPO vicino a zero.                 |
| RTO < 4H                       | In caso di disastro sul datacenter principale, il ripristino delle attività è garantito entro 4 ore a seconda della complessità degli ambienti.                       |

In caso di attivazione del PRA, il team di Cloud Temple esegue un'operazione di presentazione della LUN metro-mirror agli ipervisori remoti per consentire l'accesso ai dati.

L'implementazione di questa soluzione richiede quindi di avere riservato sul sito standby risorse di calcolo e RAM per riprendere l'attività in caso di disastro.
L'uso di questa tecnologia richiede anche il raddoppio dello spazio su disco: è necessario avere lo stesso spazio sul sito remoto che sul sito locale.

Da notare che l'uso di questo meccanismo può incidere sulle prestazioni dell'applicazione fino al 30 %. __Solo la classe di storage 500 Iops/To è supportata__.


| Riferimento                                           | Unità  | SKU                                               |  
|-------------------------------------------------------|--------|---------------------------------------------------|
| STORAGE - Metro Replicazione SAN inter-datacenter     | 1 TiB  | csp:(region):iaas:storage:licence:metromirror:v1  |

*__Nota__*:

- *La replicazione dello storage in modalità blocco è trasparente per le macchine virtuali e le applicazioni,*
- *A tal riguardo, è importante privilegiare gli scenari di replicazione applicativa o eventualmente di replicazione della macchina virtuale,*
- *Il calcolo e la memoria sul sito di ripresa possono essere ridotti per ottimizzare i costi 
se una situazione degradata è accettabile per il business durante l'azione del piano di continuità operativa.*

## Replicazione asincrona delle vostre macchine virtuali in ambiente VMware
La replica asincrona delle vostre macchine virtuali è un meccanismo che consiste nel trasferire a livello dell'ipervisore sorgente le operazioni di scrittura sul sito standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo dell'intero storage attivo sul sito standby, solo le scritture vengono inviate a intervalli regolari al sito in stand-by.
Questo intervallo dipende dal volume di scrittura (dalle ore a ogni 24 ore).

La replica delle macchine virtuali si basa sul meccanismo degli snapshot istantanei dell'ipervisore. In quanto tale, questa soluzione presenta gli stessi svantaggi, in particolare la sensibilità al volume di scritture della macchina virtuale, il processo di snapshot istantaneo essendo un meccanismo ricorsivo per la chiusura dello snapshot istantaneo.

L'esempio tipico di macchina che non supporta il meccanismo di replica delle macchine virtuali è un server FTP che riceve flussi in tempo reale da telecamere di sorveglianza. __La macchina trascorre il suo tempo a scrivere e non sarà capace di chiudere uno snapshot istantaneo senza mettere in pausa il sistema operativo per un periodo significativo di tempo (diverse decine di minuti)__. Se l'ipervisore non riesce a chiudere lo snapshot istantaneo, è esattamente quello che farà, senza possibilità di intervento tranne che corrompere la macchina virtuale.

![](images/schemas/replication_vsphere.png)


| SLA             | Descrizione                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di disastro sul data center principale, la quantità massima di dati persi è quella dell'ultima spinta delle scritture sul sito standby. |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale fermata sul sito remoto                                                                                       |


In caso di necessità, o in presenza di un guasto in una macchina sul sito principale, si attiva la macchina speculare sul sito standby. La ripresa dell'attività richiede di avere riservato sul sito standby del calcolo e della RAM in standby. È
necessario avere lo stesso spazio di storage sul sito passivo che sul sito attivo.


| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PCA - Replica VMware inter-AZ | 1 vm  | csp:(regione):iaas:vmware:licenza:replica:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in funzione del tasso di cambiamento sulla macchina virtuale.*