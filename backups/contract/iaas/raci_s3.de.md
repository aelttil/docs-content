---
title: Verantwortungsmatrix IaaS - S3 Objektspeicher
---

Dies ist die RACI-Matrix zur Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der S3 Cloud Temple Objektspeicherplattform.

## Definition der verschiedenen Rollen
Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                    |
|--------------|-------------------------------------------------|
| (R) Realisieren | __R__ealisiert den Prozess                    |
| (A) Genehmigen  | __A__pprobiert die Durchführung des Prozesses |
| (C) Konsultieren | __C__onsultiert während des Prozesses         |
| (I) Informieren  | __I__nformiert über die Ergebnisse des Prozesses |

## Definieren Sie Ihren Bedarf

| Aktivität                                                                          | Kundenrolle | Rolle Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validieren, dass der S3 Objektspeicher-Service den Anforderungen der Anwendung entspricht | __RA__      | __CI__            | 
| Den Dienst mit den erforderlichen Informationen abonnieren                       | __RA__      | __I__             | 

## Den Dienst in Betrieb nehmen

| Aktivität                                                                                   | Rolle des Kunden | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------|------------------|--------------------|
| Gewährleistung des operativen Betriebs der S3 Objektspeicherplattform                       | __I__            | __RA__             |
| Gewährleistung der Sicherheit der S3 Objektspeicherplattform                                | __I__            | __RA__             |
| Erstellung der Objekte                                                                      | __RA__           |                    |
| Erstellung von Zugangsschlüsseln und Zuweisung der zugehörigen Rechte                       | __RA__           |                    |

## Regelmäßige Operationen

| Aktivität                                                                          | Kundenrolle | Cloud Temple Rolle |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellung des operativen Betriebs der S3 Objektspeicherplattform              | __I__       | __RA__            | 
| Sicherstellung der Sicherheit der S3 Objektspeicherplattform                       | __I__       | __RA__            | 
| Sicherstellung der Zugänglichkeit des S3 Objektspeicherdienstes                    | __I__       | __RA__            |
| Aufbewahrung und Bereitstellung der Logs der S3 Objektspeicherplattform            |             | __RA__            |
| Überwachung des ordnungsgemäßen Funktionierens der S3 Objektspeicherplattform      | __I__       | __RA__            |
| Verfolgung des Lebenszyklus der Objekte                                            | __RA__      |                   | 
| Verfolgung des Lebenszyklus der Berechtigungen an den Objekten                     | __RA__      |                   |
| Verwaltung der logischen Sicherheit der Objekte                                    | __RA__      |                   |
| Management von Vorfällen bezüglich des S3 Objektspeicherdienstes                   | __I__       | __RA__            |
| Management von Problemen bezüglich des S3 Objektspeicherdienstes                   | __I__       | __RA__            |
| Kapazitätsmanagement bei dem S3 Objektspeicherdienst                               | __I__       | __RA__            |
| Management von Weiterentwicklungen beim S3 Objektspeicherdienst                    | __I__       | __RA__            |

## Verschlüsselungsmanagement
| Aktivität                                                                                 | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|---------------------|
| Verwaltung der Datenverschlüsselung vor der Bereitstellung auf dem S3 Objektspeicherdienst | __RA__      |                     |
| Verwaltung der Verschlüsselung im vom S3 Objektspeicherdienst zugewiesenen Speicherplatz  | __A__       | __R__               | 

## Geschäftskontinuität
| Aktivität                                                                                   | Rolle Kunde | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellung der Kontinuität des S3-Objektspeicherdienstes                                | __I__       | __RA__            |
| Sicherung der Daten                                                                         | __RA__      |                   |
| Regelmäßige Tests zur Wiederherstellung der Daten durchführen                               | __RA__      |                   |
| Den Geschäftskontinuitäts- und Wiederanlaufplan für die Anwendungen aufrechterhalten        | __RA__      |                   |

## Reversibilität
| Aktivität                                                                                   | Kundenrolle | Rolle Cloud Temple |
|----------------------------------------------------------------------------------------------|-------------|--------------------|
| Umsetzung des Reversibilitätsprojekts (Planung, Werkzeuge, Methoden, Ziele, ...)            | __RA__      |                    |
| Exportieren der Daten vom S3 Objektspeicherdienst                                           | __RA__      |                    |
| Löschen der Daten im S3 Objektspeicherdienst                                                | __RA__      |                    |
| Zerstörung der Speichermedien am Ende ihrer Lebensdauer oder bei Fehlern                    |             | __RA__             |