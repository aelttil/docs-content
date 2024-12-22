---
title: Implementare un firewall opensource pfSense
---
Questa guida vi aiuterà a implementare il vostro __firewall opensource pfSense__ nel Cloud di Fiducia in soli pochi minuti.

## Prerequisiti
I prerequisiti per questa guida sono i seguenti:

1. Avere sottoscritto l'offerta Cloud Temple: dovete disporre della vostra organizzazione, del vostro tenant e dei vostri accessi,
2. Avere i diritti sul modulo compute.

Questo documento descrive i passaggi da seguire per distribuire un firewall virtuale pfSense.

## Distribuire un firewall opensource pfSense
[pfSense](https://www.pfsense.org) è un progetto open source basato su freeBSD che consente l'implementazione di un firewall virtuale.

Un firewall pfSense si amministra tramite un'interfaccia web, pertanto è necessario disporre di un secondo sistema con interfaccia grafica avente un indirizzo IP nella stessa rete LAN del firewall per poterlo configurare.

Avremo bisogno di un insieme di due VM:

- la prima sarà la macchina sulla quale implementeremo il firewall
- la seconda sarà la macchina da cui amministreremo il firewall.

### Richiedere una consegna di accesso internet
Il primo passo consiste nel recuperare [le informazioni di accesso a internet qui](https://docs.cloud-temple.com/network/internet/#gestion-de-vos-connectivites-internet). È necessario disporre delle seguenti informazioni:

- prefisso pubblico
- prefisso di interconnessione
- gateway any-cast
- gamma IP
- AS locale 
- AS di Cloud Temple
- timer keepalive e il timer hold-time
- gli indirizzi dei route servers

### Installazione e configurazione della rete delle interfacce
Potete quindi distribuire la vostra vm pfSense:

1. __Installazione del firewall__ dal template pfSense in shiva:
    - [(Distribuire tramite la console)](../iaas/quickstart_iaas_template.md#déployer-une-machine-virtuelle-depuis-un-template)
    - [(Distribuire tramite Terraform)](../iaas/quickstart_iaas.md#déployer-une-machine-virtuelle-via-terraform).
2. __Configurazione delle interfacce LAN e WAN__ del firewall: l'interfaccia WAN deve essere nel vostro vLAN Internet, il suo IP sarà preso dall'intervallo di IP che vi è stato comunicato dal CDS così come il default GW.
3. __Installazione della seconda macchina__ di gestione.
4. __Configurazione dell'interfaccia__ della VM di gestione: questa macchina deve essere nella stessa rete in cui è stata configurata l'interfaccia LAN del firewall.

### Accesso al Firewall

Una volta che entrambe le VM sono correttamente installate, il secondo passo consiste nell'accedere al firewall per iniziare la sua configurazione.

- accedere all'interfaccia web del firewall dalla vm di gestione:

![](images/pfsense/pfsense_webui.png)
- login predefinito:
    - nome utente: *admin*
    - password: *pfsense* (ricordarsi di cambiare la password preimpostata)

![](images/pfsense/pfsense_home_page.png)
### Configurazione del firewall
Questa fase consiste nella configurazione dei neighbors BGP del FW.

- come primo passo, ricordarsi di autorizzare il Flusso BGP su TCP 179 in __'Firewall > Regole'__ :

![](images/pfsense/pfsense_bgp_rule.png)

- Andare in __'servizi > FRR BGP'__ per iniziare la configurazione della vostra sessione BGP :

![](images/pfsense/pfsense_frr_package.png)

- Selezionate le prime due opzioni e inserite il numero del vostro AS locale e i times come vi sono stati comunicati dal CDS.

![](images/pfsense/pfsense_general_conf.png)

### Configurazione dei neighbors BGP
In Neighbors, cliccate su +Add per iniziare a creare i vostri vicini BPG.

- Per ogni vicino: inserite il suo indirizzo IP in __'General Options > Name/address'__
   
![](images/pfsense/pfsense_neighbor_conf.png)

  - inserite il remote AS (corrispondente al numero di AS di cloud temple) nelle opzioni base come segue:
    
![](images/pfsense/bgp_basic_options.png)

  - e infine in Advanced options, fate questo:
     
![](images/pfsense/ebgp_conf.png)

  - spuntate la casella che definisce il tipo del vostro vicino. Nel nostro caso, si tratta di ``un server di route``:
     
![](images/pfsense/route_server_neighbor.png)

  - alla fine, non dimenticate di salvare le modifiche cliccando su __'save'__ :
  
![](images/pfsense/neighbors_overview.png) 

### Verifica dello stato della sessione bgp con i neighbors 

Nello Status, potete vedere lo stato della sessione BGP che avete appena configurato

![](images/pfsense/pfsense_bgp_status.png)

Assicuratevi che lo __Stato BGP__ sia __established__.

### Annunciare il proprio prefisso pubblico
Per annunciare il suo prefisso pubblico, potete creare rotte in /32 e effettuare la redistribuzione in statico:

- in __*System > Routing > Percorsi Statici*__ : create i vostri percorsi statici in /32 impostando il Gateway su Null4 - 127.0.0.1
- in __*Services > Pacchetto FRR > BGP > Distribuzione di Rete*__ : attivate la ``redistribuzione`` in locale selezionando IPV4 in ``Ridistribuisci`` rotte statiche FRR.