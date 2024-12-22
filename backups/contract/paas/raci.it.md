---
title: Matrice di responsabilità PaaS
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'uso delle piattaforme PaaS di Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo        | Descrizione                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| (R) Realizza | __R__ealizza il processo                                                                |
| (A) Approva  | __A__pprova la realizzazione del processo                                               |
| (C) Consulta | __C__onsultato durante il processo                                                      |
| (I) Informato| __I__nformato dei risultati del processo (tramite gli strumenti, il portale o la posta) |


## Impostazione iniziale

| Attività                                                               | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------------------- | ------------- | ------------------ |
| Definire l'architettura globale della piattaforma OpenShift             | C             | RA                 |
| Dimensionare la piattaforma OpenShift (numero di nodi, risorse)         | C             | RA                 |
| Installare e configurare la piattaforma OpenShift                       | I             | RA                 |
| Configurare la rete di base della piattaforma OpenShift                 | I             | RA                 |
| Implementare la gestione delle identità e degli accessi per OpenShift   | C             | RA                 |
| Definire la strategia di scaling e di alta disponibilità                | C             | RA                 |

## Gestione dei progetti e delle applicazioni
| Attività                                           | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift              | RA            | C                  |
| Distribuire e gestire le applicazioni in OpenShift | RA            | C                  |
| Configurare i pipeline CI/CD                       | RA            | C                  |
| Gestire le immagini dei contenitori e i registri   | RA            | C                  |

## Manutenzione e aggiornamenti

| Attività                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------- | ------------- | ------------------ |
| Aggiornare la piattaforma OpenShift               | I             | RA                 |
| Applicare le correzioni di sicurezza a OpenShift  | I             | RA                 |
| Aggiornare le applicazioni distribuite            | RA            | I                  |
| Gestire gli aggiornamenti delle immagini di container | RA      | I                  |

## Monitoraggio e performance
| Attività                                                  | Ruolo Cliente | Ruolo Cloud Temple  |
| --------------------------------------------------------- | ------------- | ------------------- |
| Monitorare le prestazioni della piattaforma OpenShift     | I             | RA                  |
| Monitorare le prestazioni delle applicazioni              | RA            | I                   |
| Gestire gli avvisi legati alla piattaforma                | I             | RA                  |
| Gestire gli avvisi legati alle applicazioni               | RA            | I                   |

## Sicurezza
| Attività                                                        | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------- | ------------- | ------------------ |
| Gestire la sicurezza della piattaforma OpenShift                | I             | RA                 |
| Configurare e gestire le politiche di sicurezza dei pod         | RA            | C                  |
| Gestire i certificati SSL/TLS per la piattaforma                | I             | RA                 |
| Gestire i certificati SSL/TLS per le applicazioni               | RA            | C                  |
| Implementare e gestire il controllo di accesso basato sui ruoli (RBAC) | C      | RA                 |

## Backup e ripristino dopo un disastro
| Attività                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per la piattaforma OpenShift              | C             | RA                 |
| Implementare e gestire i backup della piattaforma                         | I             | RA                 |
| Definire la strategia di backup per le applicazioni                       | RA            | C                  |
| Implementare e gestire i backup delle applicazioni                        | RA            | I                  |
| Testare le procedure di ripristino post-disastro per la piattaforma       | I             | RA                 |
| Testare le procedure di ripristino post-disastro per le applicazioni      | RA            | C                  |

## Supporto e risoluzione dei problemi


| Attività                                                     | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------- | ------------- | ------------------- |
| Fornire supporto di livello 1 per la piattaforma OpenShift    | I             | RA                  |
| Fornire supporto di livello 2 e 3 per la piattaforma OpenShift| I             | RA                  |
| Risolvere i problemi relativi alla piattaforma                | I             | RA                  |
| Risolvere i problemi legati alle applicazioni                 | RA            | C                   |

## Gestione delle capacità ed evoluzione
| Attività                                                               | Ruolo Cliente | Ruolo Cloud Temple   |
| ---------------------------------------------------------------------- | ------------- | ------------------- |
| Monitorare l'utilizzo delle risorse della piattaforma                  | I             | RA                  |
| Pianificare l'evoluzione delle capacità della piattaforma              | C             | RA                  |
| Implementare i cambiamenti di capacità                                 | I             | RA                  |
| Gestire l'evoluzione delle applicazioni e delle loro risorse           | RA            | C                   |

## Documentazione e conformità
| Attività                                                      | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione della piattaforma OpenShift       | I             | RA                 |
| Mantenere la documentazione delle applicazioni                | RA            | I                  |
| Assicurare la conformità della piattaforma alle norme di sicurezza | I           | RA                |
| Assicurare la conformità delle applicazioni alle norme di sicurezza| RA          | C              |
| Realizzare audit della piattaforma                            | I             | RA                 |
| Realizzare audit delle applicazioni                           | RA            | C                  |