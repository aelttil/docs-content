---
title: Reti Private
---

## Architettura Rete Cloud Temple
L'offerta __*Rete Privata*__ consente una connettività di rete privata di livello 2 tra i vostri servizi. La capacità di scambio di ciascuna zona di disponibilità è di diverse centinaia di gigabit e aggiungiamo regolarmente capacità in base alle nostre esigenze. Illuminiamo personalmente la nostra rete ottica.

### La tecnologia VPLS
Il network globale Cloud Temple utilizza la tecnologia __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ è un VPN di livello 2 point-to-multipoint basato su Ethernet. Permette di collegare siti geograficamente
dispersi tra di loro attraverso una rete MPLS. Per i clienti, tutti i siti sembrano essere nello stesso
LAN Ethernet, anche se il traffico è trasportato dalla rete Cloud Temple.

__VPLS__, nella sua implementazione e configurazione, ha molto in comune con un VPN di livello 2. In VPLS, un pacchetto proveniente
da una rete cliente viene prima inviato a un dispositivo cliente (CE) (ad esempio, un router o uno switch Ethernet).
Viene poi inviato a un router di bordo del fornitore (PE) all'interno della rete del fornitorer di servizi.
Il pacchetto attraversa la rete del fornitore di servizi su un percorso a commutazione di etichette MPLS (LSP).
Arriva al router PE di uscita, che poi trasferisce il traffico verso il dispositivo CE nel sito cliente di destinazione.
La differenza sta nel fatto che, per __VPLS__, i pacchetti possono attraversare la rete del fornitore di
servizi in modo point-to-multipoint, il che significa che un pacchetto proveniente da un dispositivo CE può essere
trasmesso a tutti i router PE partecipanti a un'istanza di routing __VPLS__.

Il circuito __VPLS__ di un cliente può essere __esteso tra tutte le zone di disponibilità di una regione__.

Il protocollo __VPLS__ è __completamente trasparente__ per i clienti che percepiscono solamente i diversi VLAN nelle loro zone di disponibilità.

### La rete nell'offerta di virtualizzazione VMware
Le reti virtuali (vlan) dell'offerta di virtualizzazione VMware sono reti di tipo __'DVPortgroup'__. Un __'dvPortGroup'__, 
o __'Distributed Virtual Port Group'__, è un concetto specifico di VMware. Un dvPortGroup è un'entità che 
raggruppa diversi porti virtuali (vPorts) in un ambiente di rete virtuale distribuito per facilitare il loro utilizzo.

Localizzato all'interno di un __[tenant](../console/tenants.md)__, possono essere estesi tra le zone di disponibilità 
consentendo così di costruire architetture "attivo / attivo" con quorum.

La massima larghezza di banda utilizzabile dipende principalmente dal modello di lama utilizzato (10Gbps convergenti o 25 Gbps convergenti) e dalle capacità delle macchine virtuali.

È possibile attendersi una larghezza di banda di 10Gbps.

Le configurazioni disponibili sulla console Cloud Temple nell'ambito dell'offerta di virtualizzazione VMware sono le seguenti:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__*: 

- *La scelta dell'indirizzamento IP all'interno di queste reti è __libera.__*
- *__SRV-IO__ non è disponibile nell'offerta di rete associata alla virtualizzazione VMware.*
- *__QinQ__ è supportato sull'architettura Cloud Temple. QinQ, conosciuto anche come "VLAN stacking" o 802.1ad, è 
un protocollo di rete che permette l'incapsulamento di multiple etichette VLAN (Virtual Local Area Network) in un unico frame Ethernet.*


## Reti private regionali
La gestione delle reti private all'interno di una regione si effettua direttamente nella console Cloud Temple.

### All'interno di un tenant
La creazione di una rete virtuale avviene nel menu __*Network*__ sulla barra verde a sinistra dello schermo.

![](images/shiva_network_001.jpg)

Quindi cliccare sul pulsante __*Nuova rete*__

Dovete specificare il nome della vostra rete che sarà visualizzato. Per default, tutti i vostri cluster avranno accesso alla vostra nuova rete.
Tuttavia, nel sottomenu __*Opzioni Avanzate*__, potete specificare in modo più dettagliato l'ambito di propagazione all'interno del tenant tra i vostri diversi cluster.

![](images/shiva_network_002.jpg){:height="50%" width="50%"} 

L'insieme delle azioni possibili sulle vostre reti si trova nel menu __*Azioni*__ di ciascuna di esse:

- L'attivazione della condivisione di una rete tra tenant della stessa organizzazione.
- La disattivazione della condivisione di una rete tra tenant della stessa organizzazione.
- L'aggiunta di una condivisione di una rete tra tenant della stessa organizzazione.
- La rimozione di una condivisione di una rete tra tenant della stessa organizzazione.
- La visualizzazione grafica della propagazione di una rete su tutti i vostri cluster e ipervisor all'interno di un tenant.
- La rimozione di una propagazione all'interno di un tenant.
- La modifica di una propagazione all'interno di un tenant.
- La cancellazione di una rete.

![](images/shiva_network_003.jpg)

__*Nota:*__ *Non è possibile scegliere l'ID di vlan 802.1q.*

| Riferimento                                 | Unità  | SKU                          | 
|---------------------------------------------|--------|------------------------------|
| RETE - Regione FR1 - VLAN privato inter AZ  | 1 vlan | csp:(region):network:vlan:v1 |

#### Visualizzazione della propagazione delle vostre reti

Potete facilmente nel menu __*Azioni*__ visualizzare per una rete la sua propagazione verso i vostri diversi cluster all'interno dello stesso tenant.
Selezionate l'opzione *"Visualizzare la propagazione"*:

![](images/shiva_network_004.jpg) 

#### Modifica della propagazione
La modifica della propagazione all'interno di un tenant è realizzata tramite l'opzione *"Propagare"* :
scegliete poi i cluster che devono essere integrati in questa propagazione.

![](images/shiva_network_005.jpg){:height="50%" width="50%"} 

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Cancellazione di una rete
L'eliminazione di una rete all'interno di un tenant viene effettuata tramite l'opzione *"Elimina rete"*:

![](images/shiva_network_006.jpg){:height="50%" width="50%"}

### Condivisione di rete tra tenants

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. Puoi scegliere di __condividere una rete tra più tenant__ per motivi tecnici o per ragioni di connettività.
È quindi possibile condividere una rete tra i tuoi __[tenant](../console/tenants.md)__ all'interno della stessa organizzazione.

Per fare ciò, è sufficiente attivare la condivisione come mostrato di seguito.

![](images/shiva_network_vn_share_enabled.png)

Una volta attivata la condivisione, è sufficiente aggiungere una condivisione come mostrato di seguito.

![](images/shiva_network_vn_shared.png){:style="width:200px"}

Quindi, selezionare il tenant destinatario. Attenzione, l'elenco dei tenant è dinamico.
Dipende dalla tua organizzazione e dai tuoi diritti.

![](images/shiva_network_vn_shared_tenant.png)

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal tuo secondo tenant.

![](images/shiva_network_vn_shared_with_me.png) 

## Connessione privata esterna
L'offerta di rete Cloud Temple consente ai clienti di collegare le loro proprie infrastrutture IPSEC, MPLS o Fibra ai loro tenant.

Cloud Temple propone a questo scopo:

- La possibilità di ospitare un'attrezzatura di rete nell'area comune (non qualificata Secnumcloud),
- Porte di connettività 1Gbps o 10Gbps.

La creazione di una connettività esterna è realizzata da una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    L’area di disponibilità o, in mancanza, il sito fisico desiderato per questa connettività
    Il numero e per ciascuno, il tipo di porta di connettività attesa (fibra, rame, 1Gbps, 10Gbps...)
    La rete del vostro tenant che deve accogliere questa connettività
    Il numero eventuali 'U' d'ospitalità desiderato

## Circuiti dedicati
Cloud Temple offre la possibilità di beneficiare di una fibra dedicata tra due infrastrutture di hosting dedicate (racks).

Questo servizio è tipicamente utilizzato quando si desidera ospitare 2 infrastrutture non-cloud (ad esempio, due IBM AS/400), in due rack distinti in due datacenter fisici distinti.
Si può voler collegare direttamente questi due rack in modo privato senza transitare attraverso l'infrastruttura backbone di Cloud Temple e utilizzare solo il backbone di trasmissione ottica.

In questo contesto, possiamo fornire una connettività in fibra ottica tra i vostri due rack. La consegna è sistematicamente su due percorsi ottici diversificati.

Ecco i diversi tipi di consegna possibili:

- Ethernet in fibra 1Gbps
- Ethernet in fibra 10Gbps
- Canale di fibre 8Gbps
- Canale di fibre 16Gbps

La creazione di una connettività dedicata viene realizzata tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e il numero di telefono per finalizzare la configurazione
    Il nome dei tenants
    Gli identificativi dei due rack dedicati
    La larghezza di banda desiderata
    La rete del vostro tenant che dovrà ospitare questa connettività

Sarete contattati dal supporto per affinare la vostra richiesta.

| Riferimento                                                                               | Unità     | SKU                                | Impegno     |
|-------------------------------------------------------------------------------------------|-----------|------------------------------------|-------------|
| RETE - Collegamento dedicato inter AZ 1G ethernet (due collegamenti via due percorsi diversificati) | 1 forfait | csp:(region):network:epl:1g:v1     | 36 mesi     |
| RETE - Collegamento dedicato inter AZ 10G ethernet (due collegamenti via due percorsi diversificati)| 1 forfait | csp:(region):network:epl:10g:v1    | 36 mesi     |
| RETE - Collegamento dedicato inter AZ 8G canal di fibre (due collegamenti via due percorsi diversificati)| 1 forfait | csp:(region):network:fcpl:8g:v1    | 36 mesi     |
| RETE - Collegamento dedicato inter AZ 16G canal di fibre (due collegamenti via due percorsi diversificati)| 1 forfait | csp:(region):network:fcpl:16g:v1   | 36 mesi     |

## Approfondimenti
- [Distribuire un firewall virtuale open source](quickstart_network.md#distribuire-un-firewall-open-source-pfsense-)