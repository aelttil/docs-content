---
title: Connettività Internet
---

Cloud Temple mette a disposizione dei suoi clienti blocchi di __indirizzi IP pubblici__ di almeno 8 IPv4 o 64 IPv6, dichiarati al RIPE, per consentire la vostra connettività Internet.

## Assegnazione di un indirizzamento internet pubblico Provider Aggregated (PA)
In questo contesto, usate indirizzi IP pubblici assegnati a Cloud Temple, che vi sono affittati per i vostri usi.

La creazione di una connettività internet e l'assegnazione degli indirizzi IP pubblici associati è realizzata da __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    La dimensione della subnet desiderata (minimo /29 in IPv4 e /64 in IPv6)
    Se non sono state già fornite, le informazioni RIPE (contatto amministrativo in particolare) saranno richieste dal supporto

La consegna dell'accesso internet avviene tramite il protocollo BGP4 in ritorno dalla richiesta di supporto, che fornirà le seguenti informazioni:

- *prefisso pubblico*
- *prefisso di interconnessione*
- *gateway any-cast*
- *Subnet IP*
- *AS locale*
- *AS di Cloud Temple*
- *i timer keepalive e il timer hold-time*
- *gli indirizzi dei route servers associati al vostro tenant*.

L'uso del protocollo BGP4 garantisce un routing efficace dei vostri flussi Internet verso il gateway attivo della vostra architettura, particolarmente negli scenari di dispiegamento multi-zone di disponibilità, come è il caso per dei cluster di firewall distribuiti tra due zone di disponibilità.

## Blocchi IPv4

### Offerta di indirizzi IPv4 versione 1
__*Questa offerta non è più disponibile dal 2 maggio 2024*__

La consegna degli IPv4 avviene __nel limite delle scorte disponibili__ per i nostri clienti, con un blocco minimo di 8 IPV4 (/29 o 255.255.255.248).

È possibile visualizzare i blocchi di indirizzi assegnati nel menu __*'IP pubblici'*__ del menu Reti nella barra verde a sinistra.

| Referenza                             | Unità  | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Rete - Gamma di IPv4 Pubblici dedicati | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offerta di indirizzi IPv4 in versione 2
La consegna di un IPv4 si effettua entro __i limiti delle scorte disponibili__ per i nostri clienti, per indirizzo IP.

È possibile visualizzare i blocchi di indirizzi assegnati nel menu __*'IP pubblici'*__ della sezione Rete nel pannello verde a sinistra.


| Riferimento                    | Unità | SKU                          |
| ------------------------------ | ----- | ---------------------------- |
| Rete - IPv4 Pubblico dedicato  | 1 IPv4 | csp:(regione):network:ipv4:v2 |


## Blocchi IPv6

__Al 1° maggio 2024, l'offerta di indirizzi IP Pubblici IPv6 non è ancora disponibile per la commercializzazione.__

L'obiettivo di commercializzazione è previsto per il secondo semestre del 2024.

| Riferimento                            | Unità  | SKU                           |
| -------------------------------------- | ------ | ----------------------------- |
| Rete - Blocco IPv6 Pubblici dedicati   | 64 IPv6| csp:(region):network:ipv6:v1 |

## Indirizzi IP pubblici Provider Independent (PI)
Se possedete un indirizzo Provider Independent, avete la possibilità di annunciarlo all'interno del Sistema Autonomo di Cloud Temple. Ciò vi consente di continuare ad utilizzare i vostri indirizzi IP all'interno dell'infrastruttura di Cloud Temple e di facilitare le vostre migrazioni.

Per farlo, effettuate __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il blocco di indirizzi IP PI che possedete e che desiderate annunciare
    Se non sono state già fornite, le informazioni RIPE associate saranno richieste dal supporto

Non c'è una fatturazione specifica per i clienti che utilizzano indirizzi Provider Independent.

## Gestione delle vostre connettività Internet
La gestione della connettività avviene tramite il menu **'Rete'** > **'Internet'**. Questo menu centralizza la gestione degli indirizzi IP, offrendo due categorie distinte:

1. **Indirizzi IP Pubblici**: sono utilizzati per esporre i vostri servizi su Internet, facilitando così lo scambio di dati in entrata e in uscita.
2. **Indirizzi IP di Interconnessione**: questi indirizzi consentono ai vostri gateway di indirizzare il traffico verso la rete specifica di Cloud Temple, garantendo una connessione sicura ed efficiente.

Gli indirizzi IP pubblici consentono l'accesso a Internet, mentre gli indirizzi IP di interconnessione utilizzati con il protocollo BGP4 garantiscono connessioni sicure tra reti. Questi ultimi facilitano scambi affidabili e protetti tra il vostro tenant e la rete Cloud Temple. L'impiego congiunto di questi indirizzi migliora la gestione del traffico e rafforza la sicurezza e le prestazioni della rete.

Ecco l'interfaccia principale per la gestione degli indirizzi IP:

![](images/shiva_inet_001.png)

La scheda home corrisponde al vostro ASN interno dedicato al vostro tenant. Indica in particolare le informazioni importanti per la configurazione della vostra connettività BGP.

### Indirizzi IP pubblici

È possibile visualizzare e commentare i blocchi e gli indirizzi IP associati al proprio tenant tramite l'IPAM integrato nella console Cloud Temple:

![](images/shiva_inet_002.png)

L'ordinazione di indirizzi IP pubblici si effettua tramite il pulsante **'Ordinare degli IP pubblici'**:

![](images/shiva_inet_003.png){:height="70%" width="70%"}

La prenotazione e l'assegnazione di un indirizzo IP si effettuano tramite il pulsante **'Prenotare un indirizzo'**:

![](images/shiva_inet_004.png){:height="70%" width="70%"}

La modifica o la cancellazione della prenotazione si effettuano tramite i pulsanti **'Azioni'**:

![](images/shiva_inet_005.png){:height="30%" width="30%"}

Cancellare una prenotazione significa che la risorsa diventa disponibile per un altro utilizzo, ma resta assegnata e fatturata al cliente.

Su alcune righe, il pulsante **'Azioni'** non è disponibile, indicando così che gli indirizzi IP sono prenotati e quindi non disponibili per un utilizzo.

### Indirizzi IP di interconnessione
Allo stesso modo, è possibile visualizzare e commentare i blocchi di indirizzi IP di interconnessione. È possibile visualizzare le sottoreti di interconnessioni con la rete Cloud Temple e il loro utilizzo:

![](images/shiva_inet_008.png)

È possibile modificare facilmente, come per gli indirizzi pubblici, il loro utilizzo nella gestione IPAM integrata:

![](images/shiva_inet_007.png){:height="70%" width="70%"}

### Prenotazione della larghezza di banda internet

La larghezza di banda Internet può essere prenotata in incrementi di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del vostro gateway.

La fatturazione è calcolata sul 95° percentile per il periodo di fatturazione, di solito un mese. Quindi, potete occasionalmente sfruttare un burst oltre la vostra capacità prenotata.

| Riferimento                                 | Unità    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Rete - Larghezza di banda Internet prenotata | 100 Mbps | csp:(regione):network:trafic:internet:v1 |

__*Nota:*__
*Non ci sono __tariffe volumetriche__ come __'egress fees'. Si paga solo per la prenotazione della larghezza di banda.__*


## Anti-DDoS
Un attacco di negazione del servizio distribuito (DDoS) ha lo scopo di degradare o mettere offline un servizio sovraccaricandolo con traffico illegittimo.

La protezione Anti-DDoS di Cloud Temple vi protegge contro gli attori malevoli e __è attiva senza costi aggiuntivi contro gli attacchi volumetrici__: il filtraggio viene effettuato a monte dai nostri partner telecom.

## Andare oltre

- [Distribuire un firewall virtuale](quickstart_network.md#distribuire-un-firewall-opensource-pfsense-)