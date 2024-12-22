---
title: Convenzione di Servizio PaaS
---

**Indice dei contenuti**

- [1. Quadro](#1-quadro)
- [2. Acronimi](#2-acronimi)
- [3. Glossario](#3-glossario)
- [4. Oggetto della convenzione di servizio PaaS del Fornitore](#4-oggetto-della-convenzione-di-servizio-paas-del-fornitore)
- [5. Evoluzione della convenzione di servizio PaaS](#5-evoluzione-della-convenzione-di-servizio-paas)
- [6. Audit](#6-audit)
- [7. Descrizione del servizio](#7-descrizione-del-servizio)
- [8. Attuazione del servizio](#8-attuazione-del-servizio)
  - [8.1. Descrizione dei componenti tecnici](#81-descrizione-dei-componenti-tecnici)
    - [8.1.1. Piattaforma di servizio REDHAT OpenShift](#811-piattaforma-di-servizio-redhat-openshift)
    - [8.1.2. Infrastruttura software di gestione della piattaforma Redhat Openshift](#812-infrastruttura-software-di-gestione-della-piattaforma-redhat-openshift)
    - [8.1.3. Infrastruttura di backup associata](#813-infrastruttura-di-backup-associata)
    - [8.1.4. Attuazione di soluzioni di ripresa dell'attività o di continuità operativa](#814-attuazione-di-soluzioni-di-ripresa-dellattività-o-di-continuità-operativa)
- [10. Impegni e livelli di servizio](#10-impegni-e-livelli-di-servizio)
  - [10.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#101-impegni-di-disponibilità-della-piattaforma-redhat-openshift)
- [12. Modello di responsabilità condivise applicabile](#12-modello-di-responsabilità-condivise-applicabile)
  - [12.1. Responsabilità e obblighi del Fornitore](#121-responsabilità-e-obblighi-del-fornitore)
  - [12.2. Limitazione di responsabilità del Fornitore](#122-limitazione-di-responsabilità-del-fornitore)
  - [12.3. Limitazione di accesso](#123-limitazione-di-accesso)
- [13. Cancellazione dei dati alla fine del contratto](#13-cancellazione-dei-dati-alla-fine-del-contratto)
- [14. Diritto applicabile](#14-diritto-applicabile)



## 1. Quadro

|           |                        |
| --------- | ---------------------- |
| Riferimento | CT.AM.JUR.ANX.PAAS 2.0 |
| Data      | 13 marzo 2024           |

## 2. Acronimi

| Acronimo    | Descrizione                                                                                                  |
| ------------| ------------------------------------------------------------------------------------------------------------ |
| CAB         | Change Advisory Board – Comitato consultivo sui cambiamenti                                                  |
| CMDB        | Configuration Management Database – Base di dati di gestione delle configurazioni                            |
| COPIL       | Comitato di pilotaggio                                                                                       |
| COSTRAT     | Comitato strategico                                                                                          |
| DB          | Database (base di dati)                                                                                      |
| DRP         | Disaster Recovery Plan (Piano di ripresa dell'attività)                                                      |
| GTI         | Garanzia di Tempo d'Intervento                                                                               |
| GTR         | Garanzia di Tempo di Risoluzione                                                                             |
| GTE         | Garanzia di Tempo d'Escalation                                                                               |
| HYPERVISEUR | Sistema operativo che consente l'esecuzione di VM su una lama di calcolo                                      |
| ITIL        | Information Technology Infrastructure Library - Migliori pratiche per la gestione dei sistemi di informazione |
| IAAS        | Infrastructure as a Service                                                                                  |
| MCO         | Mantenimento in condizione operativa                                                                         |
| MOA         | Maestria d'Opera                                                                                             |
| MOE         | Maestria d'Opera (Costruzione)                                                                               |
| OS          | Operating system                                                                                             |
| PAQ         | Piano di Assicurazione della Qualità                                                                         |
| PAAS        | Platform as a Service                                                                                        |
| SDM         | Service Delivery Manager                                                                                     |
| RFC         | Request For Change – Richiesta di cambiamento                                                                |
| RGPD        | Regolamento Generale sulla Protezione dei Dati (personali)                                                   |
| RPO         | Recovery Point Objective – Aggiornamento dati ripristinati in caso di sinistro                               |
| RTO         | Recovery Time Objective – Tempo di ripristino del servizio in caso di sinistro                               |
| SLA         | Service Level Agreement – Accordo sui livelli di servizio                                                    |
| UO          | Unità d'Opera                                                                                                |
| VABF        | Validazione dell'Adeguata Funzionalità                                                                       |
| VABE        | Validazione dell'Adeguata Operabilità                                                                        |
| VM          | Virtual Machine (Macchina virtuale)                                                                          |
| VSR         | Validazione del Servizio Regolare                                                                            |
| SNC         | SecNumCloud                                                                                                  |

## 3. Glossario



Le seguenti espressioni utilizzate nel presente documento saranno interpretate in conformità con le definizioni a loro attribuite di seguito:

| Espressione                                             | Definizione                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                         | La denominazione "Secure Temple" si riferisce al servizio di Infrastruttura come Servizio (IaaS), qualificato SecNumCloud, offerto dalla società Cloud Temple.                                                                                                                                                                       |
| Regione                                                 | Una "regione" nel contesto del cloud computing designa un insieme geograficamente delimitato di aree di disponibilità cloud, <br/>fornendo servizi di rete, di calcolo e di archiviazione per ottimizzare la latenza, le prestazioni <br/>e la conformità normativa locale.                                                        |
| Zona di Disponibilità<br/>(AZ)<br/>(Availability zone) | Una sezione specifica e isolata dell'infrastruttura di cloud computing, concepita per assicurare l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.                                                                                                                               |
| Tenant                                                  | Un'istanza isolata riservata a un utente o gruppo di utenti, condividendo un'infrastruttura comune pur mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.                                                                                                                                                      |

| Espressione                 | Definizione                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                   | Un "incidente" designa ogni evento imprevisto che disturba il funzionamento normale di un sistema o compromette la sicurezza dei dati e delle infrastrutture.                                                                                                                                                                                                                                                                                                 |
| Problema                    | Un "problema" è una causa fondamentale di uno o più incidenti, identificata o sospetta, che richiede un'analisi e una risoluzione per prevenirne il ripetersi.                                                                                                                                                                                                                                                                                                |
| Modifica                    | Una "modifica" designa qualsiasi cambiamento apportato all'ambiente informatico, finalizzato a migliorare o correggere i sistemi, i processi o i servizi.                                                                                                                                                                                                                                                                                                      |
| Modifica standard           | Una "modifica standard" è un cambiamento pre-approvato, a basso rischio, ripetitivo e seguendo una procedura stabilita, nell'ambiente informatico.                                                                                                                                                                                                                                                                                                            |
| Mise en production          | azione o azioni di amministrazione per realizzare la modifica quando questa è approvata <br/>(la modifica, nel senso ITIL, concerne solo la gestione della modifica e non la sua realizzazione/concretizzazione).                                                                                                                                                                                                                                             |
| Richiesta di servizio       | richiesta di evoluzione soggetta a una procedura, la cui realizzazione: <br/> i) non modifica la CMDB,<br/>ii) la modalità operativa, i costi e i rischi sono noti e accettati in anticipo e non necessitano di misure di rollback specifiche<br/>iii) la realizzazione è soggetta a un accordo di livello di servizio e inclusa nella tariffa del contratto quando viene effettuata in orario lavorativo e nei giorni lavorativi. |
| Elemento di configurazione  | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come un software, un hardware o un documento,<br/>oggetto di gestione nell'ambito della gestione dei servizi IT.                                                                                                                                                                                                                                                        |
| Servizio                    | Un "servizio" è un mezzo per fornire valore ai CLIENTI facilitando i risultati desiderati senza che questi debbano gestire<br/>i costi e i rischi specifici.                                                                                                                                                                                                                                                                                                   |
| Evento                      | Un "evento" è qualsiasi occorrenza rilevabile o identificabile in un sistema informatico o rete che può avere importanza per la gestione dei servizi IT.                                                                                                                                                                                                                                                                                                      |
| Sinistro                    | Un "sinistro" designa un evento dannoso imprevisto che causa perdite materiali, finanziarie o di dati per un CLIENTE.                                                                                                                                                                                                                                                                                                                                      |
| Convenzione di servizio     | Questo documento, stabilito nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e ciò, in conformità con i requisiti del Riferimento SecNumCloud.                                                                                                                                                                                                                                                               |
| Disponibilità               | Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).                                                                                                                                                                                                                                                               |
| Supervisione                | Sorveglianza di un Sistema Informativo o di un Servizio, che comporta la raccolta di varie dati come misurazioni e allarmi. <br/>Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, prerogativa che spetta alle operazioni di Amministrazione.                                                                                                                                      |

## 4. Oggetto della convenzione di servizio PaaS del Fornitore
La presente Convenzione di Servizi stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al CLIENTE un'infrastruttura conforme alle specifiche dell'offerta "Platform as a Service – PaaS", debitamente qualificata SecNumCloud.

Oggetto della Convenzione di Servizi:

1. Specificare le esigenze di prestazione attese dal CLIENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Indicare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati.
3. Identificare le norme regolamentari applicabili specificatamente all'infrastruttura proposta.
4. Assicurare uniformità ed integrità nella valutazione della qualità dei servizi resi.
5. Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di performance quantitativi.

È stipulato che, nell'ipotesi in cui al Fornitore venisse ritirata la qualifica SecNumCloud, il presente Contratto potrà essere risolto di pieno diritto, senza incorrere in penalità, dal CLIENTE. In tale eventualità, il Fornitore si impegna a informare il CLIENTE di questa disqualifica mediante invio di una notifica ufficiale, tramite una lettera raccomandata con richiesta di ricevuta di ritorno.

Va notato che una modifica o un adeguamento della qualifica SecNumCloud non sarà interpretato come una revoca della qualifica iniziale.

## 5. Evoluzione della convenzione di servizio PaaS

Le modifiche o aggiunte apportate al presente contratto di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tal fine.
Queste proposte di cambiamento verranno esaminate all'interno del comitato strategico, unica istanza autorizzata a determinare gli aspetti che richiedono una formalizzazione scritta.

Si conviene che qualsiasi evoluzione del contratto, dopo la validazione, che altera le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un emendamento al contratto in vigore.

I fattori che possono indurre una revisione di questo contratto includono, senza limitarsi a:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Gli aggiustamenti apportati ai servizi dispiegati dal Fornitore.
- Le variazioni degli impegni presi e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del CLIENTE o del Fornitore.
- L'espansione o la riduzione dell'ambito di applicazione dei servizi ai quali il CLIENTE ha sottoscritto.

La gestione delle versioni e delle revisioni del contratto è registrata in preambolo del documento per facilitarne il tracciamento.

## 6. Audit
Il Fornitore si impegna a permettere al CLIENTE, o a qualsiasi revisore terzo designato da quest'ultimo, di consultare l'insieme dei documenti necessari all'attestazione del completo rispetto degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a tenere a disposizione del CLIENTE l'elenco di tutti i terzi che possono accedere ai dati e informarlo di ogni cambiamento di sub-appaltatori.**

Con l'accettazione del presente contratto di servizio, il CLIENTE conferisce la sua autorizzazione esplicita a:

1. __L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI)__ nonché all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Referenziale SecNumCloud.
2. __Un fornitore di audit in sicurezza dei sistemi informativi__, debitamente qualificato ed espressamente designato dal Fornitore, per condurre audit di sicurezza relativi al Servizio fornito dal Fornitore.

## 7. Descrizione del servizio
L'offerta di servizi fornita dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni,
le quali sono allineate con il principio di responsabilità condivisa dettagliato nelle norme stabilite dal quadro di riferimento SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift guidata dal Fornitore.

Si intende che il Fornitore impiegherà la sua competenza per realizzare le Prestazioni secondo le migliori pratiche professionali,
in conformità con le loro Specifiche e rispettando gli standard della sua certificazione ISO/IEC 27001 così come le direttive del Quadro di Riferimento SecNumCloud.

## 8. Implementazione del servizio
Si specifica che tutte le operazioni e tutti i componenti fisici coinvolti nella fornitura del servizio qualificato, oggetto del presente accordo, 
sono situati all'interno dell'Unione Europea. Ciò include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC).

### 8.1. Descrizione dei componenti tecnici

I servizi PaaS (Platform as a Service) comprendono tutti i componenti e servizi richiesti per il loro funzionamento ottimale nel rispetto della qualificazione SecNumCloud.

A tal proposito, le loro prestazioni e affidabilità sono intrinsecamente legate ai componenti tecnici e ai servizi dell'**infrastruttura IaaS** del Fornitore, come specificato nel documento [Convenzione di Servizio IaaS](../iaas/sla_iaas.md) del Fornitore.

#### 8.1.1. Piattaforma di servizio REDHAT OpenShift
Il servizio include la messa a disposizione all'interno di una regione, su 3 zone di disponibilità,

#### 8.1.2. Infrastruttura software di gestione della piattaforma Redhat Openshift
Il Fornitore mette a disposizione del CLIENTE la console di amministrazione e l’API necessaria per l’utilizzo dei suoi ambienti PaaS RedHat OpenShift. 
Si impegna inoltre a mantenerli in condizioni operative ottimali e ad assicurarne la sicurezza in modo continuo.

Nell'ambito specifico del servizio fornito, il Fornitore mette a disposizione del CLIENTE tutte le interfacce e le API della piattaforma RedHat OpenShift all'interno del tenant selezionato. Spetta al CLIENTE implementare le misure di sicurezza appropriate, come i firewall, i firewall applicativi web (WAF) ed altre misure di protezione, oltre a stabilire le regole di filtraggio associate per garantire l'accesso sicuro alla sua piattaforma in conformità con la sua politica di sicurezza.

Il Fornitore avverte il Cliente che un utilizzo anomalo della sua console di amministrazione, in particolare in caso di sovraccarico delle sue API di comando (hammering), 
può innescare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o a certi servizi del Fornitore. È importante sottolineare che questa situazione non rappresenta una indisponibilità del servizio ma una azione di protezione dell’Infrastruttura del Fornitore;
di conseguenza, il Cliente non può considerarla come una indisponibilità ai fini dei suoi calcoli.

Inoltre, il Fornitore precisa al Cliente che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una al secondo (Throttling). 
Se il Cliente invia richieste identiche a una frequenza maggiore, il loro rifiuto non deve essere interpretato come una indisponibilità del servizio.

#### 8.1.3. Infrastruttura di backup associata
Il Fornitore mette a disposizione del CLIENTE una piattaforma integrata di backup dedicata e gestita, destinata alla protezione dei dati dei suoi ambienti RedHat Openshift.
Il Fornitore garantisce il mantenimento in condizione operativa e di sicurezza di questa piattaforma integrata di backup.
Indipendentemente dal numero di aree di disponibilità sottoscritte dal CLIENTE, il Fornitore assicura che la piattaforma di 
backup del CLIENTE sarà situata al di fuori dell'area di disponibilità delle carichi di lavoro salvati.

Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei tenant SecNumCloud del CLIENTE.
La formulazione e l'applicazione di una politica di backup adeguata da parte del CLIENTE dipende dalla sottoscrizione a unità di opera specifiche.
Spetta quindi al CLIENTE assicurarsi la disponibilità delle risorse tecniche necessarie presso il Fornitore
per attuare la sua politica di backup o per adeguarla in funzione delle risorse disponibili.

Il Fornitore si impegna a notificare al CLIENTE in caso di vincoli di capacità e a fornire un'assistenza consulenziale per l'ottimizzazione delle risorse.
Gli obblighi del Fornitore si limiteranno all'attuazione dei bisogni espressi dal CLIENTE in materia di politica di backup, nell'ambito delle risorse sottoscritte.

#### 8.1.4. Attuazione di soluzioni per il recupero delle attività o la continuità operativa
Il Fornitore fornisce al CLIENTE l'insieme delle soluzioni tecniche necessarie a garantire una distribuzione ottimale delle sue risorse 
attraverso diverse aree di disponibilità. Spetta al CLIENTE la responsabilità di gestire in modo efficace questa distribuzione di risorse,
per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tale scopo.

In particolare, le applicazioni implementate sulla piattaforma RedHat OpenShift devono supportare i meccanismi di ridondanza proposti dal Fornitore al fine di poter beneficiare delle soluzioni di business continuity o disaster recovery associate.

## 10. Impegni e livelli di servizio
Il Fornitore si impegna a garantire una sorveglianza continua delle prestazioni e dell'integrità di sicurezza delle sue piattaforme e servizi, assicurando il loro funzionamento ottimale.

L'indisponibilità di un servizio, che è oggetto di un indicatore di prestazione, è riconosciuta non appena viene identificata dal sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del CLIENTE. L'inizio dell'indisponibilità è stabilito nel momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dalla completa ripristino del servizio, confermato sia dagli strumenti di supervisione del Fornitore, sia da un feedback dell'utente, assicurando così una ripresa effettiva delle operazioni e una misurazione fedele della durata dell'interruzione.

### 10.1. Impegni di disponibilità della piattaforma RedHat OpenShift
Il Fornitore si impegna a mantenere un livello di disponibilità e di performance conforme agli standard definiti per ogni periodo specificato.
Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a patto che il CLIENTE implementi i suoi sistemi attraverso
almeno due delle zone di disponibilità presenti nella regione di interesse.

In assenza del rispetto di queste condizioni da parte del CLIENTE, quest'ultimo non sarà in grado di richiedere l'applicazione degli SLAs in questione,
che sono specificatamente identificati da un asterisco (*). L'accessibilità agli SLAs avviene tramite l'interfaccia CLIENTE. ** Le misure si intendono calcolate mensilmente **:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilità della piattaforma RedHat OpenShift: tasso di disponibilità garantito del 99,9%, calcolato su una base 24h/24, 7g/7.

_**Osservazioni**_ :

- *In risposta a un attacco di tipo Distributed Denial of Service (DDoS), il Fornitore si riserva il diritto di aggiustare la sua configurazione di routing su internet per
limitare l'impatto di tale attacco e preservare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al CLIENTE è preso di mira, il Fornitore può ricorrere alla tecnica del blackholing
tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP interessato a livello dei suoi fornitori, al fine di proteggere le risorse del CLIENTE così come quelle degli altri clienti
e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il CLIENTE a adottare misure simili, come l'utilizzo di software firewall
per applicazioni web disponibili sul mercato, e a configurare con attenzione i propri gruppi di sicurezza tramite l'API di comando.*

- *Il Fornitore sottolinea l'importanza per il CLIENTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili le porte
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'intero Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 12. Modello di responsabilità condivise applicabile
### 12.1. Responsabilità e Obblighi del Fornitore

Il Fornitore si impegna a mettere a disposizione del CLIENTE interfacce utente in lingua francese e inglese, facilitando così l'accesso e la gestione dei servizi forniti.
Il CLIENTE, da parte sua, si impegna a rispettare i vincoli legali e regolamentari in vigore relativi ai dati che affida al Fornitore per il trattamento.

In caso di trasmissione di dati soggetti a esigenze legali specifiche, il Fornitore collaborerà con il CLIENTE per identificare e implementare
le misure di sicurezza necessarie, conformemente agli obblighi del Fornitore e nell'ambito della prestazione di servizi.

Il Fornitore prende inoltre l'impegno di esaminare e considerare le esigenze specifiche legate ai settori di attività del CLIENTE,
rispettando i limiti della sua responsabilità, per garantire un livello di sicurezza idoneo alle informazioni trattate.

Se un progetto è suscettibile di impattare la sicurezza del servizio offerto, il Fornitore si impegna ad informare il CLIENTE degli impatti potenziali,
delle misure correttive considerate e dei rischi residui, assicurando una totale trasparenza.

Il Fornitore garantisce che non utilizzerà i dati del CLIENTE a fini di test senza un'accordo preliminare ed esplicito del CLIENTE
e si impegna ad anonimizzare e proteggere la confidenzialità di tali dati durante il loro trattamento.

In caso di cambiamento del subappaltatore per l'hosting, il Fornitore informerà il CLIENTE in anticipo, assicurandosi che questa transizione non influenzi negativamente il servizio fornito.

Su richiesta del CLIENTE, il Fornitore fornirà l'accesso al suo regolamento interno, alla sua carta etica, alle sanzioni applicabili in caso di mancato rispetto della sua
politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e alle esigenze specifiche di sicurezza.

### 12.2. Limitazione di responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente l'ambito dell'intervento del Fornitore agli aspetti legati alla fornitura di una piattaforma RedHat OpenShift funzionante, che comprende:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari al corretto funzionamento della piattaforma,
- Il mantenimento delle condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- Il backup dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del CLIENTE, che rientrano nella sua responsabilità.

Esclude in particolare, ma non limitatamente a:

- L'aggiornamento dei sistemi operativi e dei software installati dal CLIENTE nei propri ambienti OpenShift negli spazi affittati,
- La sicurezza dei programmi, software e applicazioni installati all'interno dell'ambiente OpenShift dal CLIENTE,
- Il backup dei dati a livello applicativo,
- La configurazione delle politiche di backup.

### 12.3. Limitazione di accesso

Nell'ambito di questa convenzione di servizio, al Fornitore è formalmente vietato accedere ai tenant appartenenti al CLIENTE senza autorizzazione preventiva. 
È responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore, a seconda delle esigenze specifiche dell'hosting e, 
se del caso, dei servizi professionali di supporto, qualora questa opzione sia stata scelta dal CLIENTE.

Il CLIENTE riconosce che questi accessi sono concessi esclusivamente per le necessità legate alla prestazione dei servizi concordati, 
assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio del Fornitore è rigorosamente vietato. 
Nell'eventualità in cui una specifica esigenza tecnica richiedesse tale accesso, questo potrebbe essere stabilito 
solo dopo aver chiaramente notificato al CLIENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del CLIENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 13. Cancellazione dei dati al termine del contratto

Alla scadenza del contratto, sia che giunga a termine naturale sia che sia rescisso per qualunque motivo, il Prestatore si impegna a procedere con la cancellazione sicura di tutte le dati del Cliente, includendo i dati tecnici. Il Prestatore si assicurerà di comunicare al CLIENTE un preavviso formale, rispettando un termine di ventuno (21) giorni calendario. I dati del CLIENTE saranno poi eliminati entro un termine massimo di trenta (30) giorni successivi a tale notifica.

Per attestare tale cancellazione, il Prestatore rilascerà al Cliente un certificato che conferma l'eliminazione dei dati.

## 14. Diritto applicabile
Il diritto applicabile al presente contratto di servizio è il diritto francese.