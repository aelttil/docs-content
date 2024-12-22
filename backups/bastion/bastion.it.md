---
title: Panoramica
---

## Cos'è il Bastion Cloud Temple?

Il Bastion Cloud Temple è un servizio gestito che fornisce connettività RDP o SSH sicura dalla console Cloud Temple alle tue infrastrutture fisiche e virtuali, che siano situate nel Cloud affidabile, in un Cloud pubblico o onpremise. La soluzione di Bastion consente di amministrare i tuoi dispositivi senza esporli a Internet. 

![](images/bastion.svg)

## I vantaggi
| Vantaggio              |                                                                                       Descrizione                                                                                       |  
|------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|  
| Gestione centralizzata |                                          Il Bastion Cloud Temple è accessibile direttamente dalla console Shiva.                                           |  
| Sicurezza              | Gli apparati amministrati tramite il Bastion non sono esposti a Internet, il che li protegge da potenziali analisi delle porte da parte di utenti malevoli.                            |  
| Infrastruttura come codice | Gli API consentono di gestire il Bastion Cloud Temple completamente "come codice" (creazione di sessioni, connessione, modifica ed eliminazione di sessioni).                           |  

## Riferimenti (SKU)
| Riferimento                                |   Unità   |        SKU        |  
|--------------------------------------------|:---------:|:-----------------:|
| AMMINISTRAZIONE - Bastion SSH & RDP         | 1 Sessione | cmp:bastion:session:std |

## Concetti
### L'Appliance Bastion

L'Appliance Bastion è una macchina virtuale distribuita in prossimità dei tuoi dispositivi. Questa Appliance consente di instradare un flusso sicuro e diretto dalla piattaforma Shiva verso i dispositivi da amministrare che si trovano nella stessa rete virtuale.

Il flusso è crittografato ed encapsulato in un tunnel VPN. La soluzione non richiede l'apertura di un flusso da Internet verso le tue infrastrutture. È sufficiente che l'Appliance abbia accesso all'indirizzo IP pubblico del modulo Bastion Shiva sulla porta 443.

Un'Appliance può essere utilizzata per effettuare una connessione rapida a un dispositivo. Ad ogni connessione, vanno specificati il protocollo desiderato, l'indirizzo IP della macchina e le tue credenziali. Per evitare di inserire queste informazioni ad ogni connessione, è possibile creare sessioni associate a dispositivi da amministrare regolarmente.

### Le Sessioni

Una sessione è una configurazione di connessione a un dispositivo tramite un Bastion. Consiste nel definire un dispositivo da amministrare e l'Appliance da utilizzare per instradare il flusso, consentendo così una connessione più rapida a tale dispositivo.

Questa soluzione è adatta nel caso di una connessione regolare a un dispositivo da amministrare. Le informazioni essenziali sono conservate, sono richieste solo le tue credenziali durante la connessione.
