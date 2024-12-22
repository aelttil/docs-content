---
title: Verantwortlichkeitsmatrix für IaaS
---

Hier ist das RACI-Modell, das die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                           |
|--------------|----------------------------------------------------------------------------------------|
| (R) Ausführen| __R__ealisiert den Prozess                                                             |
| (A) Genehmigen| __A__pprobiert die Durchführung des Prozesses                                          |
| (C) Konsultieren| __C__onsultiert während des Prozesses                                                 |
| (I) Informieren| __I__nformiert über die Ergebnisse des Prozesses (über Werkzeuge, das Portal oder die Nachrichtenübermittlung) |

## Definieren Sie Ihren Bedarf
| Aktivität                                                                                       | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definieren der globalen Architektur Ihrer Cloud Temple Plattform                                | __RA__      | __CI__            | 
| Festlegen der Anzahl der Tenants und der Anzahl der Verfügbarkeitszonen für jeden Tenant        | __RA__      | __CI__            | 
| Definieren Ihrer allgemeinen Strategie für Disaster Recovery oder Geschäftskontinuität          | __RA__      | __CI__            | 
| Korrektes Dimensionieren Ihrer Cloud Temple Plattform (Berechnung, Speicherung, Netzwerk, Backup,...) | __RA__      | __CI__            | 
| Abonnement der Dienste mit den notwendigen Informationen                                       | __RA__      | __I__             | 

## Erstmalige Implementierung Ihrer Cloud Temple Tenants

| Aktivität                                                                                                     | Kundenrolle | Cloud Temple-Rolle |
|---------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Implementierung der **physischen Datacenter** sicherstellen                                                    |             | __RA__             | 
| Implementierung der Infrastrukturen **Rechenleistung** sicherstellen                                          | __I__       | __RA__             | 
| Implementierung der Infrastrukturen **Speicher** sicherstellen                                                | __I__       | __RA__             | 
| Implementierung der Konnektivität zum **Backbone-Netzwerk(1)** sicherstellen                                  | __I__       | __RA__             | 
| Erwerb und Wartung der essentiellen Softwarelizenzen für den Betrieb der Cloud Temple-Plattform               |             | __RA__             | 
| Basis-Konfiguration Ihrer Cloud Temple-Mandanten implementieren                                                | __CI__      | __RA__             | 
| Die Ausgangskonfiguration für den Backup-Service implementieren                                                | __CI__      | __RA__             |
| *Falls abonniert:* Die Anfangskonfiguration des Netzwerks für die Internet- und Firewall-Dienste implementieren| __CI__      | __RA__             |
| Erforderliche Unterstützung anbieten, um die Kontrolle über Ihre Cloud Temple-Umgebungen zu übernehmen        | __I__       | __RA__             | 
| Die endgültigen Konfigurationsanpassungen des Dienstes nach dessen Bereitstellung durchführen                  | __RA__      | __C__              | 
| Ein externes Authentifizierungsrepository für die Cloud Temple-Konsole konfigurieren                          | __RA__      | __C__              | 
| Erstellen der Nutzer für jeden Mandanten in der Cloud Temple-Konsole und Zuweisen der Rechte                  | __RA__      |                    | 
| Die Übereinstimmung der gelieferten Plattform mit dem SecNumCloud-Standard validieren                         | __I__       | __RA__             |
| Die Übereinstimmung der gelieferten Plattform mit den erforderlichen Spezifikationen validieren               | __RA__      | __CI__             |

*(1) Das Backbone-Netzwerk bildet die zentrale Infrastruktur von Cloud Temple und stellt das Rückgrat dar, auf dem 
die kundenspezifischen Netzwerke basieren, welche in diese Hauptinfrastruktur integriert und unterstützt werden.*

## Ihr Informationsystem in die Cloud Temple-Umgebungen integrieren

| Tätigkeit                                                                                                                    | Kundenrolle | Rolle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Erstellen, Installieren, Aktualisieren Ihrer virtuellen Maschinen                                                            | __RA__      |                    | 
| Installieren und Konfigurieren der Software und Middleware auf Ihren virtuellen Maschinen                                    | __RA__      |                    | 
| Kauf und Besitz der Lizenzen und Nutzungsrechte <br>für die Betriebssysteme Ihrer virtuellen Maschinen                       | __RA__      |                    | 
| Konfigurieren des Netzwerks für jede Ihrer virtuellen Maschinen                                                              | __RA__      |                    |
| Sicherstellen, dass jede virtuelle Maschine mit einem konsistenten Backup-Plan verknüpft ist                                 | __RA__      | __C__              | 
| Sicherstellen, dass jede virtuelle Maschine mit einem <br>konsistenten Notfallwiederherstellungs- oder Geschäftskontinuitätsplan verknüpft ist | __RA__      | __C__              | 
| Implementierung einer Antiviren-Schutzstrategie auf Ihren virtuellen Maschinen                                               | __RA__      |                    | 
| Einrichtung einer Lösung für Metrik und Überwachung auf Ihren virtuellen Maschinen                                           | __RA__      |                    | 
| Definieren der TAG-Richtlinie Ihrer virtuellen Maschinen                                                                     | __RA__      |                    | 

## Wiederkehrende Operationen
### Verwaltung von Zugängen und Identitäten
| Aktivität                                                                                                                             | Rolle Kunde | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gewährleistung der Zugänglichkeit des Cloud Temple Console Services und der zugehörigen API                                           |             | __RA__            |
| Gewährleistung der Zugänglichkeit des auf Ihren virtuellen Maschinen bereitgestellten Informationssystems                              | __RA__      |                   |
| Verwalten der physischen und logischen Berechtigungen des Cloud Temple Teams zu den Infrastrukturen SecNumCloud.                      |             | __RA__            |
| Verwalten der Zugänge und der zugehörigen Sicherheitspolitik im Zusammenhang mit der Schnittstelle der Cloud Temple Console und ihrer API  | __RA__      |                   |
| Verwalten der Zugänge und der zugehörigen Sicherheitspolitik für das Informationssystem<br/>, das innerhalb Ihrer Cloud Temple Mandanten gehostet wird | __RA__      |                   |

### Aufrechterhaltung in betrieblichem Zustand und in Sicherheitszustand

Die Aktivitäten zur Aufrechterhaltung eines betriebsfähigen und sicheren Zustands für die Infrastrukturen und Dienste, 
die von Cloud Temple im Rahmen seines IaaS-Angebots bereitgestellt werden, erfolgen mit dem Ziel der Konformität 
zur SecNumCloud-Qualifikation.

| Aktivität                                                                                                                | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Aufrechterhaltung eines betriebsfähigen Zustands der Infrastrukturen **physischer Rechenzentren**                        | __I__       | __RA__            | 
| Aufrechterhaltung eines sicheren Zustands der Infrastrukturen **physischer Rechenzentren**                               | __I__       | __RA__            | 
| Aufrechterhaltung eines betriebsfähigen Zustands der Infrastrukturen **Rechenleistung**                                  | __I__       | __RA__            | 
| Aufrechterhaltung eines sicheren Zustands der Infrastrukturen **Rechenleistung (2)**                                     | __RA__      | __CI__            | 
| Aufrechterhaltung eines betriebsfähigen Zustands der Infrastrukturen **Speicher**                                        | __I__       | __RA__            | 
| Aufrechterhaltung eines sicheren Zustands der Infrastrukturen **Speicher**                                               | __I__       | __RA__            | 
| Aufrechterhaltung eines betriebsfähigen Zustands der Infrastrukturen **Backbone-Netzwerke**                              | __I__       | __RA__            | 
| Aufrechterhaltung eines sicheren Zustands der Infrastrukturen **Backbone-Netzwerke**                                     | __I__       | __RA__            |
| Aufrechterhaltung eines betriebsfähigen Zustands der in den Kundentenants bereitgestellten virtuellen Maschinen **(3)** | __RA__      |                   |
| Aufrechterhaltung eines sicheren Zustands der in den Kundentenants bereitgestellten virtuellen Maschinen **(3)**         | __RA__      |                   |
| Aufrechterhaltung eines betriebsfähigen Zustands der in den Kundentenants deployten Middleware                           | __RA__      |                   |
| Aufrechterhaltung eines sicheren Zustands der in den Kundentenants deployten Middleware                                  | __RA__      |                   |

*(2) Cloud Temple stellt regelmäßig die aktuellsten Betriebssystemversionen für Ihre Hypervisoren zur Verfügung. 
Dennoch, da Cloud Temple nicht über die Besonderheiten Ihrer Produktionsumgebungen und die Anforderungen Ihrer Arbeitslasten 
informiert ist, __liegt die Entscheidung, das Betriebssystem Ihrer Hypervisoren zu aktualisieren und damit einen Neustart auszulösen, 
bei Ihnen__. Diese Operation kann über die Cloud Temple-Konsole oder über die API durchgeführt werden.
Professionelle Dienstleistungen sind verfügbar, sollten Sie wünschen, dass Cloud Temple bestimmte Operationen übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Load Balancer (HAProxy) an und 
arbeitet mit Ihren Teams bei der Erstkonfiguration während der Implementierungsphase zusammen. Jedoch liegt die 
Verantwortung für die Aufrechterhaltung des betriebsfähigen und sicheren Zustands bei Ihnen während der aktuellen 
Betriebsphase. Professionelle Dienstleistungen sind verfügbar, sollten Sie wünschen, dass Cloud Temple bestimmte 
Operationen übernimmt.*

### Management von Änderungen, Vorfällen, Problemen und Kapazitäten
| Aktivität                                                                                                             | Rolle Kunde | Rolle Cloud Temple   |
|----------------------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Störungen in der Infrastruktur der **physischen Rechenzentren** verwalten                                             | __I__       | __RA__               |
| Probleme in der Infrastruktur der **physischen Rechenzentren** verwalten                                              |             | __RA__               |
| Kapazitäten in der Infrastruktur der **physischen Rechenzentren** verwalten                                           |             | __RA__               |
| Störungen in der Infrastruktur der **Rechenleistung** verwalten                                                       | __I__       | __RA__               |
| Probleme in der Infrastruktur der **Rechenleistung** verwalten                                                        |             | __RA__               |
| Kapazitäten in der Infrastruktur der **Rechenleistung** verwalten                                                     | __RA__      | __CI__               |
| Störungen in der Infrastruktur der **Speicherung** verwalten                                                          | __I__       | __RA__               |
| Probleme in der Infrastruktur der **Speicherung** verwalten                                                           |             | __RA__               |
| Kapazitäten in der Infrastruktur der **Speicherung** verwalten                                                        | __RA__      | __CI__               |
| Störungen in der Infrastruktur des **Backbone-Netzwerks** verwalten                                                   | __I__       | __RA__               |
| Probleme in der Infrastruktur des **Backbone-Netzwerks** verwalten                                                    |             | __RA__               |
| Kapazitäten in der Infrastruktur des **Backbone-Netzwerks** verwalten                                                 |             | __RA__               |
| Einen neuen virtuellen Rechner einrichten oder eine neue Anwendungsumgebung innerhalb eines Kunden-Tenants erstellen | __RA__      |                      |
| Die Konfiguration der bereitgestellten virtuellen Maschinen ändern                                                    | __RA__      |                      |
| Eine bereitgestellte virtuelle Maschine löschen                                                                       | __RA__      |                      |
| Die Entscheidung treffen, Ressourcen auf der Cloud Temple-Plattform hinzuzufügen, zu ändern oder zu entfernen        | __RA__      | __CI__               |
| Die Entscheidung umsetzen, die Ressourcen auf der Cloud Temple-Plattform zu ändern                                   | __I__       | __RA__               |
| Tags gemäß der definierten Politik den virtuellen Maschinen zuordnen                                                  | __RA__      |                      |

### Leistungsmanagement
| Aktivität                                                                                                                                                   | Kundenrolle | Cloud Temple Rolle   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Überwachung des einwandfreien Betriebs und der Zuverlässigkeit sämtlicher bei der Erbringung des SecNumCloud qualifizierten Dienstes beteiligten Geräte     | __I__       | __RA__              |
| Nachverfolgung der Leistung der physischen Ressourcen für Rechenleistung, Speicher und Netzwerk, die Ihren Mietern __(4)__ zur Verfügung gestellt werden   | __RI__      | __A__               |
| Überwachung der Leistung der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                         | __RA__      | __I__               |

*(4) Die Cloud Temple Plattform verfolgt einen Ansatz, der auf __die Bereitstellung dedizierter Infrastrukturen__ für die Bedürfnisse des __Rechenleistungs__ (mit physischen Blades), des __Speicher__ (über dedizierte LUNs auf SANs) 
und des __Netzwerks__ (einschließlich Firewalls und Load Balancer) ausgerichtet ist. Diese dedizierten Ressourcen werden dem Kunden zur Verfügung gestellt, deren Nutzung 
und die daraus resultierende Belastung direkt von der Art und Weise abhängen, wie sie verwendet werden. Daher ist es die Aufgabe des Kunden, Überwachungs- 
und Messtechniksysteme zu implementieren und zu verwalten, die für die Nachverfolgung eines optimalen Betriebs seines Informationssystems notwendig sind.*

### Management der Datensicherung und der Wiederherstellung nach einem Backup

| Aktivität | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellung des operativen Betriebs auf den **Backup-Infrastrukturen** integriert in der Cloud Temple Plattform **(5)** |             | __RA__            |
| Sicherstellung der Sicherheit der **Backup-Infrastrukturen** integriert in der Cloud Temple Plattform                | __I__       | __RA__            |
| Störungsmanagement der **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                         | __I__       | __RA__            |
| Problemmangement der **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                         |             | __RA__            |
| Kapazitätsmanagement der **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                         | __AI__      | __RC__            |
| Sicherstellung des operativen Betriebs der ausgewählten Backup-Lösung innerhalb seiner Mandanten durch den Kunden **(6)**       | __RA__      |                   |
| Sicherstellung der Sicherheit der ausgewählten Backup-Lösung innerhalb seiner Mandanten durch den Kunden                  | __RA__      |                   |
| Störungsmanagement der ausgewählten Backup-Lösung innerhalb seiner Mandanten durch den Kunden                                            | __RA__      |                   |
| Problemmangement der ausgewählten Backup-Lösung innerhalb seiner Mandanten durch den Kunden                                            | __RA__      |                   |
| Kapazitätsmanagement der ausgewählten Backup-Lösung innerhalb seiner Mandanten durch den Kunden                                            | __RA__      | __CI__            |
| Management des Lebenszyklus der Backup-Richtlinien                                                                                      | __RA__      |                   |
| Sicherstellen, dass die Backup-Richtlinien kongruent zum Lebenszyklus der Daten sind                                              | __RA__      |                   |
| Sicherstellen, dass die Geschäftskontinuitäts- oder Wiederherstellungspläne kongruent zum Lebenszyklus der Daten sind               | __RA__      |                   |
| Durchführung periodischer Tests zur Bewertung der Wirksamkeit der Backup-Strategie                                                   | __RA__      |                   |
| Durchführung periodischer Tests zur Bewertung der Wirksamkeit der Strategie<br/> für Geschäftskontinuität oder Wiederherstellung          | __RA__      | __CI__            |

*(5) Ab dem 1. Januar 2024 ist die in der Cloud Temple Plattform integrierte Backup-Lösung IBM Spectrum Protect Plus.
Diese Lösung ist vollständig automatisiert und kann über die Cloud Temple Konsole oder die Cloud Temple API verwaltet werden.*

### Backup- und Wiederherstellungsmanagement für Dritt-Plattformen innerhalb eines Kundenmandanten


| Aktivität                                                                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung des fortlaufenden Betriebs der gewählten Backup-Lösung innerhalb der Mandanten des Kunden **(6)**                          | __RA__      |                    |
| Sicherstellung der fortlaufenden Sicherheit der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                | __RA__      |                    |
| Bearbeitung von Vorfällen bezüglich der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                        | __RA__      |                    |
| Bearbeitung von Problemen bezüglich der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                        | __RA__      |                    |
| Verwaltung der Kapazitäten der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                                 | __RA__      | __CI__             |
| Verwaltung des Lebenszyklus der Backup-Politiken                                                                                          | __RA__      |                    |
| Sicherstellen, dass die Backup-Politiken konsistent mit dem Lebenszyklus der Daten sind                                                   | __RA__      |                    |
| Sicherstellen, dass die Pläne für Betriebskontinuität oder Disaster Recovery konsistent mit dem Lebenszyklus der Daten sind               | __RA__      |                    |
| Durchführung von periodischen Tests zur Bewertung der Effektivität der Backup-Strategie                                                    | __RA__      |                    |
| Durchführung von periodischen Tests zur Bewertung der Effektivität der Strategie<br/> für Betriebskontinuität oder Disaster Recovery      | __RA__      | __CI__             |

*(6) Dies betrifft alle zusätzlichen Backup-Lösungen, die in den Umgebungen des Kunden eingesetzt und von diesem verwaltet werden. 
Cloud Temple bietet professionelle Dienstleistungen für diejenigen an, die bestimmte Operationen an Cloud Temple delegieren möchten.* 

### Verwaltung der Dokumentation und des Vertrags
| Aktivität                                                                                                                                                                     | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Die kommerzielle und vertragliche Verwaltung des Kunden sicherstellen, einschließlich der Erstellung von Angeboten, der Bearbeitung von Bestellungen und der Abrechnungsverwaltung | __I__       | __RA__             |
| Die vertragliche Nachverfolgung der Dienstleistung sicherstellen, einschließlich der Bestätigung von Angeboten, der Überwachung der Lieferungen und der Rechnungsstellung       | __RA__      | __I__              |
| Die Wartung und Verfügbarkeit des Inventars der von Cloud Temple bereitgestellten Ressourcen gewährleisten, im Zusammenhang mit dem Angebot SecNumCloud                        | __I__       | __RA__             |
| Die Wartung und Bereitstellung der technischen Dokumentation im Zusammenhang mit dem Angebot SecNumCloud sicherstellen                                                        | __I__       | __RA__             |
| Die Überwachung des Lebenszyklus der in Ihren Cloud Temple-Umgebungen bereitgestellten virtuellen Maschinen über Ihre CMDB (Configuration Management Database) sicherstellen  | __RA__      |                    | 
| Die Zugriffspolitik auf das Interface der Cloud Temple-Konsole oder auf die Cloud Temple-API aktuell halten                                                                   | __RA__      |                    |

### Log-Verwaltung
| Aktivität                                                                                                                                      | Kundenrolle | Rolle Cloud Temple   |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Aufbewahren und Bereitstellen der Logdateien der IaaS-Plattform Cloud Temple **(7)**                                                            |             | __RA__               |
| Aufbewahren und Bereitstellen der Logdateien des innerhalb Ihrer Cloud Temple Mandanten gehosteten Informationssystems                          | __RA__       |                      |

*(7) Ab dem ersten Januar 2024 beträgt die Aufbewahrungszeit der Logdateien der Plattform ein Jahr.*

## Verbindungen zum Kundennetzwerk (MPLS, dedizierte Glasfaser, IPSec, ...)

| Aktivität                                                                                                          | Rolle Kunde | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Eine Netzwerkverbindung von einem Operator zur Nutzung eines physischen Cloud Temple Datacenters (8) abonnieren     | __RA__      | __CI__             |
| Den IP-Adressierungsplan verwalten                                                                                 | __RA__      | __I__              |
| Störungen bei den Netzwerkverbindungen der Kunden zu Betreibern verwalten                                           | __RA__      |                    |
| Probleme bei den Netzwerkverbindungen der Kunden zu Betreibern verwalten                                             | __RA__      | __CI__             |
| Kapazitäten auf den Netzwerkverbindungen der Kunden zu Betreibern verwalten                                          | __RA__      | __CI__             |

*(8) Cloud Temple übernimmt die Verantwortung für das Netzwerk in Bezug auf seine Backbone-Infrastruktur, die Sammelpunkte sowie die Datacenter-Interkonnektionspunkte, um damit die Konnektivität zwischen diesen Punkten und seinem Backbone-Netzwerk zu gewährleisten. Im Rahmen des Angebots des physischen Bay-Hostings übernimmt Cloud Temple die Verantwortung ab der Ausrüstung am oberen Ende des Racks, gemeinhin als "Top of Rack" bezeichnet.*

## Reversibilität
| Aktivität                                                                                                                                                                                     | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Das Reversibilitätsprojekt planen und die Zielinfrastrukturen auswählen                                                                                                                        | __RA__      | __I__              |
| Die Übergangsoperationen durchführen, ob diese manuelle Extraktion, die Nutzung von API <br/> oder jede andere mit der Cloud Temple-Plattform kompatible Methode beinhalten.                    | __RA__      | __I__              |
| Die Daten übertragen, während man die Auswirkungen der Migration auf die Qualität des vom Informationssystem des Kunden bereitgestellten Dienstes kontrolliert.                                  | __RA__      |                    | 
| Das Abbauen der Konfigurationen des Privaten Clouds und die damit verbundenen Optionen des Kunden <br/> nach Beendigung des Vertrags durchführen.                                               | __I__       | __RA__             |
| Das sichere Löschen von Daten auf Speichermedien durchführen und eine Bescheinigung hierüber ausstellen                                                                                        | __I__       | __RA__             |