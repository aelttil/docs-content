---
title: Controllo tramite API
---

## Chiavi API

La __chiave API__ permette di autenticarsi quando desiderate effettuare delle richieste sull'API. La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__, 
è un modo sicuro di connettersi alle API Shiva senza passare attraverso un'interfaccia grafica. Ogni uno di questi token è legato a un tenant e all'utente che l'ha creato.

La creazione di questo token si fa dal vostro conto. È possibile generare più chiavi e configurare per ognuna le autorizzazioni nel limite dei vostri diritti.

Per creare una chiave API, è sufficiente __fare clic sul vostro profilo__:

![](images/shiva_profil_001.png){:height="20%" width="20%"}

Nel menu del profilo, fare clic su __'Token di accesso personale'__

![](images/shiva_profil_003.png)

Avete allora sullo schermo l'insieme delle chiavi API che sono state create per questo utente in questo tenant. Fare clic su __'Nuovo token di accesso personale'__

![](images/shiva_profil_002.png){:height="50%" width="50%"}

Dovete quindi:

- Indicare il nome di questo nuovo token,
- Indicare una data di scadenza (massimo 12 mesi di validità),
- Scegliere i [permessi associati al token](permissions.md).

I dettagli riguardanti il vostro token vengono poi visualizzati. __Attenzione, non è più possibile accedervi a posteriori.__

Se non annotate queste informazioni, dovrete distruggere e ricreare il token.

![](images/shiva_profil_004.png){:height="50%" width="50%"}

Per una questione di sicurezza, è raccomandato creare più token ognuno con uno scopo specifico (un token per ogni applicazione o ogni processo aziendale) piuttosto che creare 1 token con tutti i diritti.

Vedrete poi il nuovo token creato e la sua futura data di scadenza.

![](images/shiva_profil_005.png){:height="70%" width="70%"}

## Accesso al portale API
La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

![](images/shiva_api_001.png){:height="70%" width="70%"}

L'accesso alle API richiede autenticazione. Una volta autenticati, tutte le operazioni devono avere l'header
__'Authorization'__ con il bearer access token ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è dato direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina delle API).

## Le attività
Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è garantito attraverso la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione con successo dell'attività. L'identificativo unico di questa attività è ritornato nell'intestazione della risposta, sotto la chiave 'Location'.

![](images/shiva_api_002.png)

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

![](images/shiva_api_003.png)

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la sua data di esecuzione, così come il suo stato di avanzamento. Ecco il modello di un'attività:

    {
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}

L'oggetto **state** può assumere diverse forme a seconda dello stato dell'attività, vale a dire:

**waiting**, stato prima che l'operazione sia iniziata:

    waiting: {}

**running**, stato quando l'operazione è in corso:

    running: {
    status: string;
    startDate: Date;
    progression: number;
    };

**failed**, stato se l'operazione ha fallito:

    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };

**completed**, stato se l'operazione è terminata:

    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };

**Nota: l'Identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta che questa è completata.**

## Limiti API
### Perché dei limiti?
La console Cloud Temple stabilisce __limiti sul volume di richieste__ che un utente può inviare
all'API in un periodo determinato. L'introduzione di questi limiti di frequenza è una misura comune nella gestione delle API, adottata per vari motivi fondamentali:

- **Prevenzione degli abusi**: Questi limiti contribuiscono a tutelare l'integrità dell'API prevenendo utilizzi
abusivi o inappropriati che possono comprometterne il funzionamento.
- **Garanzia della qualità del servizio**: Regolando l'accesso all'API, assicuriamo una distribuzione equa
delle risorse, permettendo così a tutti gli utenti di godere di un'esperienza stabile e di alta qualità.

Prendiamo l'esempio di uno script mal progettato o inefficace che tenta chiamate ripetitive all'API,
rischiando di saturare le risorse e di degradare le prestazioni. Stabilendo delle soglie per le richieste,
preveniamo queste situazioni e garantiamo il mantenimento di __un servizio fluido e ininterrotto__ per tutta la nostra clientela.

### Quali sono i limiti di tasso per l'API della console Cloud Temple ?
Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console
per ogni prodotto.

I limiti sono definiti in __richieste al secondo (r/s) e per IP sorgente__. Oltrepassata la soglia limite, il sistema risponderà
con un codice di errore HTTP 429, segnalando che il limite di richieste consentite è stato superato.

Ecco i limiti definiti:

| Prodotto              | Soglia limite |
|----------------------|--------------|
| Console Cloud Temple | 60 r/s       |
| Identità (IAM)       | 60 r/s       |
| IaaS - Calcolo       | 60 r/s       |
| IaaS - Archiviazione | 20 r/s       |
| IaaS - Backup        | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Rete                 | 60 r/s       |
| Hosting              | 60 r/s       |

### Come funzionano i limiti di tasso?
Se il numero di richieste inviate a un endpoint API supera il limite consentito, l'endpoint API reagirà restituendo
__un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste permesso.
Quando ciò accade, l'endpoint API fornirà anche un oggetto JSON come risposta,
che conterrà informazioni dettagliate sul limite applicato:

    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Troppe Richieste"
        }
    }

### Come evitare di fare troppe richieste?
È consigliato limitare il numero di chiamate API effettuate dalla vostra automazione al fine di rimanere al di sotto
del limite di frequenza stabilito per il punto di terminazione.

Questa situazione si verifica spesso quando si eseguono molteplici richieste in parallelo,
tramite l'utilizzo di processi o thread multipli.

Esistono diversi metodi per migliorare l'efficienza della vostra automazione, inclusi l'impiego di meccanismi
di __memorizzazione nella cache__ e l'istituzione __di un sistema di ripetizione con attenuazione progressiva__. Questo metodo consiste
nel fare una breve pausa quando si incontra un errore di limite di frequenza, per poi riprovare la richiesta.
Se la richiesta fallisce nuovamente, il tempo di pausa viene aumentato progressivamente fino al successo della richiesta
o fino al raggiungimento di un numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- __L'attenuazione progressiva__ assicura che i primi tentativi siano eseguiti rapidamente, prevedendo al contempo maggiori ritardi in caso di fallimenti ripetuti.
- L'introduzione di __una variazione casuale__ nella pausa aiuta a prevenire che tutti i tentativi si verifichino simultaneamente.

È importante osservare che __le richieste fallite non influenzano il vostro limite di frequenza__.
Tuttavia, ripetere continuamente una richiesta potrebbe non essere una soluzione sostenibile a lungo termine,
poiché questo comportamento potrebbe essere modificato in futuro. Pertanto, vi raccomandiamo di non dipendere esclusivamente su questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sono buoni punti di partenza per implementare delle strategie di attenuazione.