---
title: Matrice di responsabilità IaaS - Archiviazione Oggetto S3
---

Di seguito è riportato il RACI per la condivisione delle responsabilità tra il cliente e Cloud Temple per l’utilizzo della piattaforma di Archiviazione Oggetti S3 di Cloud Temple.

## Definizione dei diversi ruoli

Vi ricordiamo qui i diversi ruoli del RACI:

| Ruolo       | Descrizione                                    |
|-------------|------------------------------------------------|
| (R) Realizza| __R__ealizza il processo                      |
| (A) Approva | __A__pprova l'esecuzione del processo         |
| (C) Consulta | __C__onsultato durante il processo            |
| (I) Informato | __I__nformato sui risultati del processo     |

## Definire il vostro bisogno

| Attività                                                                          | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------|---------------|--------------------|
| Validare che il prodotto di Archiviazione Oggetto S3 corrisponda alle necessità dell'applicazione | __RA__         | __CI__            |
| Sottoscrivere al servizio con le informazioni necessarie                          | __RA__         | __I__             |

## Implementare il servizio

| Attività                                                                                   | Ruolo Cliente | Ruolo Cloud Temple  |
|------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare il mantenimento in condizioni operative della piattaforma di Archiviazione Oggetti S3 | __I__         | __RA__             |
| Assicurare il mantenimento della sicurezza della piattaforma di Archiviazione Oggetti S3   | __I__         | __RA__             |
| Creare gli oggetti                                                                         | __RA__        |                    |
| Creare le chiavi di accesso e assegnare i diritti associati                                | __RA__        |                    |

## Operazioni ricorrenti


| Attività                                                                               | Ruolo Cliente | Ruolo Cloud Temple   |
|----------------------------------------------------------------------------------------|---------------|----------------------|
| Assicurare il mantenimento in condizioni operative della piattaforma di Archiviazione Oggetto S3 | __I__       | __RA__               | 
| Assicurare il mantenimento in condizione sicurezza della piattaforma di Archiviazione Oggetto S3  | __I__       | __RA__               | 
| Assicurare l'accessibilità del servizio di Archiviazione Oggetto S3                             | __I__       | __RA__               |
| Conservare e mettere a disposizione i registri della piattaforma di Archiviazione Oggetto S3      |             | __RA__               |
| Supervisionare il buon funzionamento della piattaforma di Archiviazione Oggetto S3                | __I__       | __RA__               |
| Seguire il ciclo di vita degli oggetti                                                            | __RA__      |                      | 
| Seguire il ciclo di vita dei diritti sugli oggetti                                                | __RA__      |                      |
| Gestire la sicurezza logica degli oggetti                                                         | __RA__      |                      |
| Gestire gli incidenti sul servizio di Archiviazione oggetti S3                                    | __I__       | __RA__               |
| Gestire i problemi sul servizio di Archiviazione oggetti S3                                       | __I__       | __RA__               |
| Gestire la capacità sul servizio di Archiviazione oggetti S3                                      | __I__       | __RA__               |
| Gestire le evoluzioni sul servizio di Archiviazione oggetti S3                                    | __I__       | __RA__               |

## Gestione della cifratura

| Attività                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------|---------------|-------------------|
| Gestire la cifratura dei dati prima del dispiegamento sul servizio di Archiviazione Oggetti S3 | __RA__      |                   |
| Gestire la cifratura sullo spazio di archiviazione allocato dal servizio di Archiviazione Oggetti S3 | __A__       | __R__             |

## Continuità operativa
| Attività                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------|---------------|-------------------|
| Assicurare la continuità operativa del servizio di storage oggetti S3                          | __I__         | __RA__            |
| Assicurare il backup dei dati                                                                  | __RA__        |                   |
| Effettuare test periodici di ripristino dei dati                                               | __RA__        |                   | 
| Mantenere il piano di continuità operativa e di ripresa delle attività per le applicazioni     | __RA__        |                   | 

## Reversibilità

| Attività                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------|---------------|--------------------|
| Implementare il progetto di reversibilità (pianificazione, strumenti, metodi, obiettivi,...) | __RA__       |                    |
| Esportare i dati dal servizio di Archiviazione Oggetti S3                                 | __RA__       |                    |
| Eliminare i dati sul servizio di Archiviazione Oggetti S3                                 | __RA__       |                    |
| Distruggere i supporti di memorizzazione a fine vita o difettosi                          |               | __RA__             | 

The original content and the translated content have been compared silently, and no URLs or filenames have been changed in the process.