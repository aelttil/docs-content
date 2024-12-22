---
title: Reti
---

## Prodotto Private Network

L'offerta di rete __Cloud Temple__ è descritta nella sezione [Reti](../network/private_network.md).

## Offerta di firewalling virtuale

Dal 1° gennaio 2024, Cloud Temple propone nel suo catalogo di unità di lavoro due tecnologie di firewall : __Stormshield__ e __Fortinet__.

La messa a disposizione di un cluster di firewall si fa richiedendo supporto tecnico direttamente nella console di Cloud Temple. I clusters sono forniti con una tecnologia UTM (antivirus, prevenzione di intrusione e filtraggio web).

La messa a disposizione di un cluster di firewall avviene tramite una richiesta di servizio che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e il numero di telefono per finalizzare la configurazione
    Il nome del tenant
    le zone di disponibilità per ciascuno dei nodi
    Il blocco IPv4 assegnato da utilizzare se il cluster deve avere accesso a internet
    L'SKU desiderata (il modello di firewall)
    
Il cluster di firewall viene consegnato preconfigurato dai team di supporto di Cloud Temple.

### Offerta Stormshield

L'offerta di firewall virtuale __Stormshield EVA__ è disponibile sull'infrastruttura Cloud Temple. Di default, l'offerta consiste in due nodi Attivo / Passivo, con la possibilità di avere 1 nodo per zona di disponibilità.
L'offerta __Stormshield EVA__ è certificata dall'__ANSSI__.

| Riferimento                                                                                         | Unita'    | SKU                          | 
|-----------------------------------------------------------------------------------------------------|-----------|------------------------------|
| FIREWALL UTM - STORMSHIELD virtuale EVA1 - 1 Vcpu - 2Go RAM - 50 SSLVPN Users Max - 100 Tunnels     | 1 Cluster | csp:(region):licence:fw:eva1 |
| FIREWALL UTM - STORMSHIELD virtuale EVA2 - 2 Vcpu - 3Go RAM - 512 SSLVPN Users Max - 150 Tunnels    | 1 Cluster | csp:(region):licence:fw:eva2 |
| FIREWALL UTM - STORMSHIELD virtuale EVA3 - 4 Vcpu - 6Go RAM - 512 SSLVPN Users Max - 200 Tunnels    | 1 Cluster | csp:(region):licence:fw:eva3 |
| FIREWALL UTM - STORMSHIELD virtuale EVA4 - 4 Vcpu - 8Go RAM - 1024 SSLVPN Users Max - 250 Tunnels   | 1 Cluster | csp:(region):licence:fw:eva4 |


### Offerta Fortinet

L'offerta di firewall virtuale __Fortigate VM__ è disponibile sull'infrastruttura Cloud Temple. Di default, l'offerta è composta da due nodi 'attivi / Passivi', con la possibilità di avere 1 nodo per zona di disponibilità.

| Riferimento                                    | Unita'    | SKU                          | 
|------------------------------------------------|-----------|------------------------------|
| FIREWALL UTM - Fortigate Virtuale VM02V - senza vdom | 1 Cluster | csp:(region):licence:fw:ftg2 |
| FIREWALL UTM - Fortigate Virtuale VM04V - senza vdom | 1 Cluster | csp:(region):licence:fw:ftg4 |
| FIREWALL UTM - Fortigate Virtuale VM08V - senza vdom | 1 Cluster | csp:(region):licence:fw:ftg8 |

### Esempio di performance

Forniamo qui un indicazione delle performance accessibili con l'offerta di virtualizzazione VMware, senza attivazione SRV-IO, 
utilizzando un lama di calcolo del tipo __'standard:v2'__, munita di 2 processori da 2.4Ghz di tipo Intel Silver 4314 o equivalente.

Un'applicazione virtuale __Fortigate VM16__, dotata di 128Go di ram e di 16 vCPU, può raggiungere il debito di __9 Gbits__ tra 2 zone di disponibilità con un MSS di 1350 e 100 connessioni simultanee in parallelo.

*__Attenzione__* : 

*La latenza garantita tra le zone di disponibilità è inferiore a 4 millisecondi, quindi la performance __non può essere raggiunta con un'unica sessione TCP__.*
*Il massimo debito raggiungibile su una connessione TCP è regolato dalla seguente formula:*

__DEBITO MAX = TCP WINDOWS SIZE / RTT__, in cui RTT è il tempo di risposta ping / 1000.

*Dovrete quindi __multiplexare i vostri trasferimenti in TCP__ o utilizzare un protocolma non connesso come UDP per raggiungere la performance massima.*

## Micro segmentazione

Dal 1° gennaio 2024, l'offerta di microsegmentazione delle macchine virtuali non è aperta alla commercializzazione.
