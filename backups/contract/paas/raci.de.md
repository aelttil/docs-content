---
title: Verantwortlichkeitsmatrix PaaS
---

Hier ist das RACI-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der PaaS-Plattformen von Cloud Temple definiert.

## Definition der verschiedenen Rollen
Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| (R) Realisieren | __R__ealisierung des Prozesses                                                              |
| (A) Genehmigen| __A__nnehmung der Durchführung des Prozesses                                              |
| (C) Konsultieren | __K__onsultiert während des Prozesses                                                     |
| (I) Informieren  | __I__nformiert über die Ergebnisse des Prozesses (über die Werkzeuge, das Portal oder die Nachrichten) |


## Initiale Einrichtung

| Aktivität                                                               | Kundenrolle | Rolle Cloud Temple |
| ----------------------------------------------------------------------- | ----------- | ------------------ |
| Definieren der globalen Architektur der OpenShift-Plattform             | K           | RA                 |
| Dimensionierung der OpenShift-Plattform (Anzahl der Knoten, Ressourcen) | K           | RA                 |
| Installieren und Konfigurieren der OpenShift-Plattform                  | I           | RA                 |
| Konfigurieren des Grundnetzwerks der OpenShift-Plattform                | I           | RA                 |
| Einrichten der Identitäts- und Zugriffsverwaltung für OpenShift         | K           | RA                 |
| Definieren der Strategie für Skalierung und hohe Verfügbarkeit          | K           | RA                 |

## Verwaltung von Projekten und Applikationen

| Aktivität                                          | Kundenrolle | Rolle Cloud Temple |
| -------------------------------------------------- | ----------- | ------------------ |
| Erstellen und Verwalten der OpenShift-Projekte    | RA          | C                  |
| Bereitstellen und Verwalten der Anwendungen in OpenShift | RA          | C                  |
| Konfigurieren der CI/CD-Pipelines                 | RA          | C                  |
| Verwalten der Containerbilder und Register        | RA          | C                  |

## Wartung und Aktualisierungen

| Aktivität                                                     | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ------------------- |
| Aktualisierung der OpenShift-Plattform                        | I           | RA                  |
| Sicherheitspatches für OpenShift anwenden                     | I           | RA                  |
| Aktualisierung der bereitgestellten Anwendungen               | RA          | I                   |
| Verwaltung der Aktualisierungen von Container-Images          | RA          | I                   |

## Überwachung und Leistung

| Aktivität                                             | Kundenrolle | Cloud Temple Rolle |
| ---------------------------------------------------- | ----------- | ----------------- |
| Überwachen der Leistung der OpenShift-Plattform      | I           | RA                |
| Überwachen der Leistung der Anwendungen              | RA          | I                 |
| Verwalten von Plattformbezogenen Warnmeldungen       | I           | RA                |
| Verwalten von Applikationsbezogenen Warnmeldungen    | RA          | I                 |

## Sicherheit

| Aktivität                                                           | Rolle Klient | Rolle Cloud Temple |
| ------------------------------------------------------------------- | ------------ | ------------------ |
| Verwaltung der Sicherheit der OpenShift-Plattform                   | I            | RA                 |
| Konfigurieren und Verwalten der Sicherheitsrichtlinien für Pods     | RA           | C                  |
| Verwaltung der SSL/TLS-Zertifikate für die Plattform                | I            | RA                 |
| Verwaltung der SSL/TLS-Zertifikate für Anwendungen                  | RA           | C                  |
| Implementierung und Verwaltung der rollenbasierten Zugriffskontrolle (RBAC) | C    | RA                 |

## Sicherung und Wiederherstellung nach Katastrophen

| Aktivität                                                             | Kundenrolle | Cloud Temple Rolle  |
| --------------------------------------------------------------------- | ----------- | ------------------- |
| Die Backup-Strategie für die OpenShift-Plattform definieren           | K           | RA                  |
| Implementierung und Verwaltung der Backups für die Plattform          | I           | RA                  |
| Die Backup-Strategie für die Anwendungen definieren                   | RA          | K                   |
| Implementierung und Verwaltung der Backups der Anwendungen            | RA          | I                   |
| Testen der Disaster Recovery-Prozeduren für die Plattform             | I           | RA                  |
| Testen der Disaster Recovery-Prozeduren für die Anwendungen           | RA          | K                   |

## Unterstützung und Problembehandlung


| Aktivität                                                        | Rolle Kunde | Rolle Cloud Temple   |
| ---------------------------------------------------------------- | ----------- | ------------------- |
| Bereitstellung von First-Level-Support für die OpenShift-Plattform | I           | RA                  |
| Bereitstellung von Second-Level- und Third-Level-Support für die OpenShift-Plattform | I           | RA                  |
| Lösung von Problemen im Zusammenhang mit der Plattform             | I           | RA                  |
| Lösung von Problemen im Zusammenhang mit Anwendungen                | RA          | C                   |

## Kapazitätsmanagement und Entwicklung

| Aktivität                                                | Rolle Kunde | Rolle Cloud Temple   |
| -------------------------------------------------------- | ----------- | -------------------- |
| Überwachung der Ressourcennutzung auf der Plattform      | I           | RA                   |
| Planung der Kapazitätserweiterung der Plattform          | C           | RA                   |
| Implementierung der Kapazitätsänderungen                 | I           | RA                   |
| Verwaltung der Entwicklung von Anwendungen und deren Ressourcen | RA      | C                    |

## Dokumentation und Konformität

| Aktivität                                                             | Kundenrolle | Cloud Temple Rolle |
|-----------------------------------------------------------------------|-------------|--------------------|
| Die Dokumentation der OpenShift-Plattform warten                      | I           | RA                 |
| Die Dokumentation der Anwendungen warten                              | RA          | I                  |
| Die Konformität der Plattform mit den Sicherheitsstandards sicherstellen | I           | RA                |
| Die Konformität der Anwendungen mit den Sicherheitsstandards sicherstellen | RA       | C                 |
| Audits der Plattform durchführen                                       | I           | RA                |
| Audits der Anwendungen durchführen                                     | RA          | C                 |