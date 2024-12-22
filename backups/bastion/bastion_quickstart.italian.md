---
title: Avvio rapido
---

Questa guida rapida vi mostra come richiedere la creazione di un'Appliance e come registrare una nuova sessione e connettersi ad essa.


## Prerequisiti

1. Avere sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Le apparecchiature da amministrare devono essere accessibili dalla rete dove è dispiegata l'Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nel caso di un dispiegamento dell'Appliance onpremise, i flussi corrispondenti devono essere aperti.

## Richiedere la creazione di un'Appliance
Prima di poter distribuire un'Appliance, è necessario richiedere una sottoscrizione ad un'Appliance tramite una richiesta al supporto.
Il supporto è accessibile nella console Shiva dall'icona del salvagente sulla barra in alto a destra della finestra.

![](images/shiva_support.png)


## Registrare un apparecchio
Per accedere regolarmente a un dispositivo da amministrare, è più appropriato creare una sessione, che richiederà solo il vostro nome utente e la vostra password ad ogni connessione.

Per questo, recatevi nella scheda "Dispositivi" del menu "Bastione", quindi, cliccate sul pulsante "Nuovo dispositivo".

![](images/creer_session.png)

Inserite poi le informazioni necessarie alla creazione del vostro dispositivo:

    - Nome del dispositivo;
    - Descrizione;
    - Apparecchiatura associata;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Configurazione della tastiera.

![](images/creer_session2.png)

Una notifica che indica la creazione del dispositivo dovrebbe apparire in alto a destra della pagina. La sessione si aggiunge quindi all'elenco dei vostri dispositivi.

Per creare un nuovo dispositivo, potete anche passare attraverso la scheda "Apparecchiature" cliccando sulla barra d'azione dell'Apparecchiatura alla quale desiderate associare un dispositivo.

![](images/creer_session3.png)

## Collegarsi a un dispositivo

Dirigetevi nella scheda "Attrezzature" della sezione "Bastione". Cliccate sulla barra delle azioni dell'attrezzatura che desiderate aprire, e cliccate sul pulsante "Apri".

![](images/ouvrir_session.png)

Ad ogni connessione all'attrezzatura, avrete solo bisogno di inserire le vostre informazioni di autenticazione.

![](images/ouvrir_session2.png)

Dopo aver inserito le vostre credenziali, apparirà una notifica che conferma l'inizio della connessione al vostro equipaggiamento e si aprirà la console per la vostra macchina virtuale.