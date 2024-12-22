---
title: Ospitalità fisica
---

Cloud Temple offre ai suoi clienti la possibilità di beneficiare di ospitalità fisica in un'area di disponibilità.

L'ospitalità è necessariamente fuori zona secnumcloud. Lo spazio dedicato all'ospitalità fisica del cliente è condiviso tra tutti i clienti.

Due opzioni sono possibili:

- __ospitalità fisica per 'U'__ in armadio condiviso e spazio condiviso,
- __ospitalità dedicata per rack__ di almeno 42 'U' in spazio condiviso.

La richiesta di ospitalità fisica è realizzata da __una richiesta di servizio__ che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e il numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il tipo di ospitalità desiderato (condiviso per 'U' o dedicato per rack)
    La quantità desiderata
    Il tipo di equipaggiamento e le sue caratteristiche (dimensioni, peso, consumo energetico, dissipazione termica, ...)

Il team di supporto Cloud Temple vi contatterà per finalizzare la richiesta.

## Ospitalità condivisa
### Ospitalità di dispositivi (rete, firewall, ...)


L'hosting condiviso è realizzato in un rack condiviso tra diversi clienti Cloud Temple. [La segmentazione](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) avviene per 'U' (unità di rack).
Un'unità di rack misura 1,75 pollici (ovvero 44,45 mm) di altezza. I rack di hosting condivisi dispongono di due catene elettriche distinte.

La massa massima degli equipaggiamenti per ogni unità di 'U' è di 25Kg. Oltre tale limite, è necessario ordinare un numero di 'U' in grado di sostenere la massa totale degli equipaggiamenti.

Per esempio, per un equipaggiamento di 34 Kg, sarà necessario sottoscrivere 2 unità di rack.

È possibile per ogni unità di rack richiedere di avere una o due prese elettriche tipo C13 a seconda delle esigenze.

Ogni presa elettrica è limitata a 150W sotto 220v per ogni 'U'.

Se desiderate per il vostro equipaggiamento beneficiare di una potenza di 1500W, su due alimentazioni, sarà necessario richiedere

1500 W / 150 W = 10 'U', ovvero 5 'U' (o 750 W) per catena elettrica.

La connettività di rete deve essere sottoscritta in parallelo in base al tipo di porta desiderata e la banda passante voluta, ecco le opzioni possibili per porta di rete:

- Rame 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Per queste unità operative, il raffreddamento avviene necessariamente dalla facciata anteriore del rack, verso la facciata posteriore, e **l'apparecchiatura ottiene la sua connettività di rete dalla facciata anteriore del rack.**

__*Nota:*__ *l'impegno minimo è di 12 mesi.*

| Riferimento                                         | Unità | SKU                                    | Impegno   |
| --------------------------------------------------- | ----- | -------------------------------------- | ----------|
| HOSTING IN BAIA - 1 U Condiviso - 150W (1 C13)      | 1 U   | csp:(regione):hosting:shared:basic:v1  | 12 mesi   |
| HOSTING IN BAIA - 1 U Condiviso - 300W (2 C13)      | 1 U   | csp:(regione):hosting:shared:premium:v1| 12 mesi   |

### Hosting di server
Le unità di opera **'Server'** sono previste per adattarsi alla dissipazione termica dei server e **fornire connettività di rete sul retro**, semplificando le operazioni di manutenzione e ottimizzando così il raffreddamento del rack.

**Sono obbligatorie per i server.**

| Riferimento                                                   | Unità | SKU                                         | Impegno   |
| ------------------------------------------------------------- | ----- | ------------------------------------------- | --------- |
| ALLOGGIAMENTO IN RACK - 1 U Condiviso - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1    | 12 mesi   |
| ALLOGGIAMENTO IN RACK - 1 U Condiviso - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1  | 12 mesi   |


## Hosting dedicato
L'ospitalità in rack dedicato si effettua in zona di ospitalità condivisa fuori secnumcloud. Il rack di ospitalità dedicato ha una dimensione di almeno 42 'U' o 42 unità di rack.
La profondità è di 1200 millimetri, di cui 1000 millimetri utilizzabili dalle apparecchiature. La larghezza è di 600 millimetri.

Viene fornito con il raffreddamento necessario, le porte di sicurezza anteriori e posteriori e 3 kW di energia su 2 catene elettriche da 16 ampere ciascuna.

È possibile richiedere livelli supplementari di energia per 2kW. __Il peso massimo delle apparecchiature integrabili nel rack dedicato è di 1000kg__.

La baia è dotata di 'PDU' (unità di distribuzione dell'energia) adatti alla potenza sottoscritta e monitorati. C’è un 'PDU' per catena elettrica.

| Riferimento                                                  | Unità      | SKU                                        | Impegno    |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| OSPITALITÀ IN BAIA - Rack 42 U Dedicato incluso 3Kw di energia | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mesi    |
| ENERGIA - 2 Kw supplementari                                 | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mesi    |

### Connettività di rete per l’ospitalità fisica
La connettività di rete deve essere sottoscritta in aggiunta all'hosting fisico in base al tipo di porta richiesta e alla larghezza di banda desiderata, ecco le opzioni possibili per porta di rete:

- Rame 1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

È anche possibile richiedere una connettività nell'area meet me room dei vari data center per ricevere la vostra connettività operatore.
Questa connettività è necessariamente in fibra ottica con velocità di 1Gbps o 10Gbps.

| Riferimento                                                              | Unità     | SKU                                    | Impegno  |
| ----------------------------------------------------------------------- | --------- | -------------------------------------- | -------- |
| RETE - 1 porta - 1 Gbps - fibra o rame                                  | 1 porta   | csp:(regione):hosting:condiviso:port1g:v1  | 36 mesi  |
| RETE - 1 porta - 10 Gbps - fibra                                        | 1 porta   | csp:(regione):hosting:condiviso:port10g:v1 | 36 mesi  |
| RETE - Connessione privata link in meet me room di una AZ - 1 porta 1Gbps  | 1 pacchetto | csp:(regione):hosting:mmr:v1:1g         | 36 mesi  |
| RETE - Connessione privata link in meet me room di una AZ - 1 porta 10Gbps | 1 pacchetto | csp:(regione):hosting:mmr:v1:10g        | 36 mesi  |

### Servizi 'Hands & Eyes'
Oltre ai servizi di hosting fisico e di connettività di rete, è possibile richiedere servizi professionali di assistenza per il proprio hosting fisico.

Vengono operati dai tecnici del datacenter o dagli ingegneri specialisti in datacenter di Cloud Temple.

Ecco le principali unità d'opera 'Hands & Eyes' disponibili. Sono progettate per affrontare le seguenti questioni:

- Accompagnamento di un interventore esterno preventivamente identificato,
- Verificare lo stato di un'apparecchiatura (stato dei LED, funzionamento, ...),
- Scattare foto a un'apparecchiatura del cliente preventivamente identificata,
- Premere un contatto,
- Riavviare l'attrezzatura,
- Collegare un terminale di accesso per il controllo a distanza,
- Sostituire un connettore senza modificare il cablaggio.

| Riferimento                                                                               | Unità   | SKU                              | GTI        |
| ----------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hands & Eyes datacenter - Orario lavorativo (8h - 19h; Lunedì al venerdì)                 | 1 ora   | csp:(region):hosting:ho:std:v1   | 2 ore      |
| Hands & Eyes datacenter - Orario lavorativo (8h - 19h; Lunedì al venerdì) - URGENTE       | 1 ora   | csp:(region):hosting:ho:fast:v1  | 30 minuti  |
| Hands & Eyes datacenter - Fuori orario lavorativo (notte, weekend e giorni festivi)       | 1 ora   | csp:(region):hosting:hno:std:v1  | 2 giorni   |
| Hands & Eyes datacenter - Fuori orario lavorativo (notte, weekend e giorni festivi) - URGENTE | 1 ora | csp:(region):hosting:hno:fast:v1 | 2 ore      |

È inoltre possibile beneficiare di un ingegnere datacenter di Cloud Temple per trattare le seguenti questioni:

- Installazione in rack (con le attrezzature di protezione e sollevamento adeguate),
- Cablaggio (secondo il piano di cablaggio consegnato in precedenza),
- Modifica del cablaggio o spostamento di un'apparecchiatura esistente,
- Assistenza alla connettività di rete dell'operatore.

| Riferimento                                                                  | Unità  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingegnere Datacenter - Orario lavorativo (8h - 19h; Lunedì al venerdì)       | 1 atto | csp:(region):hosting:ho:std:v1  | 2 giorni |
| Ingegnere Datacenter - Orario lavorativo (8h - 19h; Lunedì al venerdì) - URGENTE | 1 atto | csp:(region):hosting:ho:fast:v1 | 4 ore |

__Nota:__

- *Ogni richiesta deve essere inviata tramite l'apertura di un ticket d'intervento nella console Cloud Temple*,
- *In caso di richiesta urgente, chiamare il servizio di reperibilità dopo l'apertura del ticket d'intervento nella console Cloud Temple*,
- *Ogni ora iniziata è dovuta.*