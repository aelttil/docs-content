---
title: Tenant
---

## Concetto di tenant
Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Una [Organizzazione](organisations.md) ha al minimo un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, si utilizzano più tenants per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Pre-produzione__
- Un tenant __Collaudo__
- Un tenant __Qualifica__

Ma è anche possibile organizzare le cose con una __visione applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con altri tenants. Per esempio, un cluster di Ipervisori e le reti L2 associate sono disponibili solo in 1 tenant.
Riguardo alle reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità della rete tra i tenants.

I permessi degli utenti sono da definire in ciascun tenant. Pertanto ogni organizzazione deve riflettere attentamente sui tenants desiderati. Questo punto è generalmente trattato in un workshop iniziale, al momento della creazione dell'organizzazione.

È possibile far evolvere l'architettura aggiungendo o eliminando tenants.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Un'area di archiviazione,
- Una rete VLAN.

## Creazione di un tenant
La creazione di un tenant è effettuata tramite una richiesta di servizio che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o in mancanza il sito fisico desiderato per il tenant

*__Nota__: Sarà possibile creare un tenant direttamente per il committente Q2 2024.*

| Numero di ordine                                             | Unità    | SKU                     |  
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIONE)* - Attivazione di un tenant              | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIONE)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(regione):iaas:az:v1 |


## Selezione di un tenant
La selezione del tenant si effettua dalla pagina principale della console Shiva:

![](images/shiva_tenant.png)

*__Nota:__ Le risorse di un tenant sono proprie e non possono essere combinate con altri tenants.*

## Autorizzazione di accesso a un tenant: IP autorizzate
L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti di qualificazione SecNumCloud. Questa restrizione garantisce un maggior livello di sicurezza consentendo l'accesso solo agli utenti provenienti da specifici range di IP, riducendo così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Ora è possibile visualizzare l'elenco degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a quest'elenco direttamente dalla scheda "Amministrazione > Accesso".

![](images/shiva_ip_access_management_01.png)

Per farlo, l'utente deve avere il diritto `console_public_access_read` per consultare gli IP autorizzati, e il diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico all'elenco.

È quindi possibile aggiungere un nuovo IP:

![](images/shiva_ip_access_management_02.png){:height="50%" width="50%"}

Nota: *La rimozione di un IP autorizzato si effettua tramite una richiesta di supporto nella console Cloud Temple.*

## Consumo di risorse all'interno di un tenant
È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una visione dettagliata dell'utilizzo dei vari servizi dispiegati. Questa funzionalità consente agli utenti di seguire in tempo reale il consumo delle loro risorse, identificare i servizi più richiesti e ottimizzare il loro utilizzo in funzione delle esigenze.

Nel menu della console, cliccate su "Rapporto di consumo" e selezionate il periodo di tempo desiderato. Potrete così visualizzare in dettaglio il consumo delle risorse cloud per il periodo definito, il che vi permetterà di analizzare l'uso dei servizi e di ottimizzare la vostra gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)