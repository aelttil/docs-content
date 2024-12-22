---
title: Monitoraggio delle modifiche
---

## Versione 241206.1.44.0
- **COMPUTE** : Aggiunta di dettagli sul funzionamento di Extra Config nell'offerta IaaS di VMware.

## Versione 241126.1.43.0
- Dettagli aggiuntivi sulla documentazione relativa agli incidenti per evidenziare la pagina di stato degli incidenti.

## Versione 241031.1.42.0
- Modifica degli screenshot a seguito della revisione dell'IHM "Console".
- Modifica del nome di alcune schede, menu, pulsanti d'azione a seguito della revisione dell'IHM "Console".

## Versione 241001.1.41.0

- Ulteriori dettagli sulle limitazioni di Openshift in ambienti SecNumCloud.
- Documentazione iniziale sull'offerta OpenIaaS :
  - **IAM** - Aggiornamento del nome delle autorizzazioni per preparare la Mise en Production OpenIaaS.
  - **NETWORK** - Aggiornamento della documentazione di installazione di Fortinet per supportare le nuove autorizzazioni.
  - **CONSOLE / API** - Aggiornamento della gestione delle attività.
  - **STATO** : Dettagli sulla gestione degli incidenti e delle notifiche.
  - **COMPUTE** : Specificare che 16GB di RAM per gli hypervisor sono dedicati all'hypervisor e non disponibili per il cliente.
  - **OPENSHIFT** : Correzione di errori di battitura; aggiunta di dettagli.

## Versione 240924.1.40.0
- Correzione di un errore nella documentazione di backup sullo stato "held"
- Aggiunta di dettagli sugli SLA per il backup di macchine virtuali e dischi.
- Aggiunta della possibilità di autorizzare l'accesso alla console Shiva per un nuovo IP
- Modifica della tabella dei permessi; aggiunta dei diritti associati a Owner. iam_permission_manager diventa deprecato
- Nuovo permesso chiamato "bastion_console_access" che sarà ora necessario per connettersi a un dispositivo (in SSH/RDP).
- Visualizzazione del consumo di risorse all'interno di un tenant
- Correzioni di errori di battitura nella sezione di archiviazione blocco
- Aggiunta di dettagli sulla sezione S3
- Aggiunta di Veeam Kasten K10 per la migrazione e il backup OpenShift
- Aggiunta dell'elenco dei permessi OpenShift disponibili
- Aggiunta dei permessi e delle limitazioni OpenShift
- Correzione della procedura di installazione di pfSense
- Aggiunta del comando di una AZ nel menu ordine
- Aggiunta del comando di un cluster di archiviazione
- Modifica della documentazione sul comando di rete

## Versione 240709.1.39.1

- Aggiunta della guida per l'installazione di un firewall Fortinet sull'infrastruttura Cloud Temple

## Versione 240705.1.38.2
- Aggiunta del RACI PaaS nella parte contrattuale

## Versione 240701.1.38.1
- Aggiunta di una FAQ sull'offerta PaaS Openshift.

## Versione 240627.1.37.5
- Sezione Paas Openshift: Aggiunta di dettagli sulla versione implementata e sui limiti software attuali. 
- Sezione Paas Openshift: Aggiunta di un paragrafo sulla salvaguardia della piattaforma Openshift.

## Versione 240625.1.37.4

- Sezione Archiviazione / Blocco: Aggiunta di dettagli sul funzionamento dei datastores nell'offerta IaaS di VMware.
- Sezione Calcolo / Offerta vmware: Le proprietà di tipo vAPP di una macchina virtuale sono ora modificabili nelle proprietà avanzate della macchina virtuale.
- Sezione Backup: Modifica del comportamento del backup per le politiche di backup sospese ("held"); ora non è più possibile avviare una macchina con una politica di backup sospesa. Aggiunta di una domanda alle FAQ su questo punto.
- Sezione Backup: Ora la politica di ripristino predefinita è **TEST** al fine di limitare i rischi sulla produzione; 
- Sezione Backup: Ora è possibile cambiare il nome della vm ripristinata.

## Versione 240608.1.37.3

- Aggiunta della possibilità di cambiare il tipo di controller disco in una macchina virtuale dell'offerta IAAS-Vmware.
- Chiarimenti sul limite di 20 reti per azione di propagazione.
- Indicazione della durata di conservazione degli eventi nel console SHIVA (FAQ/Generale) : 6 mesi.

## Versione 240514.1.37.2

- Correzioni al DPA

## Versione 240514.1.37.1
- Aggiunta di un paragrafo sulla descrizione dei trattamenti al DPA.
- Aggiunta di WINSCP come client compatibile S3.

## Versione 240514.1.37.0
- Aggiunta del documento "Dati Personali" (DPA)

## Versione 240430.1.36.4
- Correzione di alcune informazioni sull'offerta di calcolo vmware e lo stoccaggio.

## Versione 240430.1.36.3
- L'offerta di [Calcolo v2](../iaas/compute.md/#offre-de-calcul-v2) non è più disponibile ed è sostituita dall'offerta di [Calcolo v3](../iaas/compute.md/#offre-de-calcul-v3).
- Aggiunta della descrizione dell'[abbonamento ai canali di notifica tematica](../console/accounts.md#abonnement-aux-notifications-thématiques).
- Aggiunta del [gestione degli accessi di rete ai tuoi bucket S3](../paas/s3.md#limitations-des-accès-à-vos-bucket-s3) ed arricchimento della [faq](../paas/s3.md#faq).
- L'offerta IPV4 v1 non è più disponibile ed è sostituita dall'offerta IPV4 v2.
- Aggiunta della descrizione della [gestione dell'accesso internet](../network/internet.md#gestion-de-vos-connectivités-internet) dalla console di Cloud Temple.
- Aggiunta della descrizione dell'uso di indirizzi *Provider Independent*.
- Aggiunta delle unità di lavoro RedHat Openshift.
- Aggiunta delle unità di lavoro del [hosting del tipo 'server'](../housing/housing.md).
- Aggiunta del monitoraggio delle [operazioni programmate e incidenti](../console/status.md) nella console di Cloud Temple.
- Aggiornamento delle [permessi](../console/permissions.md).