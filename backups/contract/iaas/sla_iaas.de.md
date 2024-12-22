---
title: Dienstvereinbarung IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **DIENSTVEREINBARUNG IaaS**
| **Empfänger :**                         | **AUFGEBENSTELLER**                                  |
| :-------------------------------------- | :--------------------------------------------------- |
| **Referenz des Dokuments**              | CT.AM.JUR.ANX - 20240403_v2.0.docx_Tag TT JJJJ       |
| **Ihre Ansprechpartner**                | *Vorname* *Nachname*                                 |
|                                         | Account Manager                                      |
|                                         | E-Mail : *vorname.nachname*@cloud-temple.com         |
| **Datum der letzten Aktualisierung**    | 03.04.2024                                           |
| **Datum der vertraglichen Validierung** | Tag TT JJJJ                                          |

----------------------------------------------------------------------------------

| **Version** | **Datum**    | **Aktion**                                   | **Autor**       |
| ----------- | ------------ | -------------------------------------------- | --------------- |
| v0.1        | 07.06.2022   | Initiale Ausarbeitung                        | Lorena ALCALDE  |
| v0.2        | 14.09.2022   | Erweiterung                                  | Lorena ALCALDE  |
| v1.0        | 30.12.2022   | Integration von Indikatoren                  | Lorena ALCALDE  |
| v1.1        | 23.01.2023   | Fußzeilenänderung                            | Lorena ALCALDE  |
| v1.2        | 22.05.2023   | Erweiterung                                  | Lorena ALCALDE  |
| v1.3        | 29.06.2023   | Erweiterung                                  | Lorena ALCALDE  |
| v1.4        | 06.11.2023   | Kapitaländerung und Erweiterung              | Lorena ALCALDE  |
| v1.5        | 30.11.2023   | Erweiterung                                  | Lorena ALCALDE  |
| v1.6        | 21.03.2024   | Erweiterung                                  | Lorena ALCALDE  |
| v2.0        | 29.03.2024   | Konformitätsanpassungen SNC                  | Nicolas ABRIOUX  |
| v2.0        | 03.04.2024   | Veröffentlichung                             | Lorena ALCALDE  |

----------------------------------------------------------------------------------

# 2. **INHALTSVERZEICHNIS**
- [1. **DIENSTVEREINBARUNG IaaS**](#1-dienstvereinbarung-iaas)
- [2. **INHALTSVERZEICHNIS**](#2-inhaltsverzeichnis)
- [3. Präliminarien und Glossar](#3-präliminarien-und-glossar)
  - [3.1. Vorläufige Hinweise](#31-vorläufige-hinweise)
  - [3.2. Glossar](#32-glossar)
- [4. Akronymen](#4-akronymen)
- [5. Gegenstand des vorliegenden Servicevertrags](#5-gegenstand-des-vorliegenden-servicevertrags)
- [6. Audit](#6-audit)
- [7. Beschreibung des Dienstes](#7-beschreibung-des-dienstes)
  - [7.1. Geteiltes Verantwortungsmodell](#71-geteiltes-verantwortungsmodell)
  - [7.2. Detaillierte Präsentation des Dienstleistungsbereichs](#72-detaillierte-präsentation-des-dienstleistungsbereichs)
    - [7.2.1. Infrastrukturen Datacenter](#721-infrastrukturen-datacenter)
    - [7.2.2. Software-Infrastruktur zur Steuerung des Dienstes](#722-software-infrastruktur-zur-steuerung-des-dienstes)
    - [7.2.3. Recheninfrastrukturen](#723-recheninfrastrukturen)
    - [7.2.4. Speicherinfrastruktur](#724-speicherinfrastruktur)
    - [7.2.5. Globale Netzwerkinfrastruktur](#725-globale-netzwerkinfrastruktur)
    - [7.2.6. Backup-Infrastruktur](#726-backup-infrastruktur)
    - [7.2.7. Implementierung von Lösungen für die Notfallwiederherstellung oder Geschäftskontinuität](#727-implementierung-von-lösungen-für-die-notfallwiederherstellung-oder-geschäftskontinuität)
  - [7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell](#73-einschränkungen-der-dienste-im-qualifizierten-iaas-modell)
    - [7.3.1. Gemanagte Dienste im RUN-Modus](#731-gemanagte-dienste-im-run-modus)
    - [7.3.2. Konfiguration der Notfallvorsorge](#732-konfiguration-der-notfallvorsorge)
    - [7.3.3. Konfiguration der Datensicherung](#733-konfiguration-der-datensicherung)
  - [7.4. Implementierung des Dienstes](#74-implementierung-des-dienstes)
    - [7.4.1. Technische Voraussetzungen](#741-technische-voraussetzungen)
  - [7.5. Standort des Dienstes in Frankreich](#75-standort-des-dienstes-in-frankreich)
    - [7.5.1. Standort der Datacenter, die den Dienst hosten](#751-standort-der-datacenter-die-den-dienst-hosten)
    - [7.5.2. Standort der Cloud Temple Agenturen, die den Service betreiben](#752-standort-der-cloud-temple-agenturen-die-den-service-betreiben)
  - [7.6. Support](#76-support)
    - [7.6.1. Art der unterstützenden Unterlagen für den Service](#761-art-der-unterstützenden-unterlagen-für-den-service)
    - [7.6.2. Inanspruchnahme des technischen Support-Services](#762-inanspruchnahme-des-technischen-support-services)
    - [7.6.3. Prozess des Incident-Managements](#763-prozess-des-incident-managements)
    - [7.6.4. Priorisierungsprozess der Behandlungen](#764-priorisierungsprozess-der-behandlungen)
    - [7.6.5. Sprache und Lokalisierung des Supportdienstes](#765-sprache-und-lokalisierung-des-supportdienstes)
- [8. Verpflichtungen und Servicelevel](#8-verpflichtungen-und-servicelevel)
  - [8.1. Verfügbarkeitsverpflichtungen der Infrastruktur](#81-verfügbarkeitsverpflichtungen-der-infrastruktur)
  - [8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBERSchnittstelle](#82-verpflichtung-zur-verfügbarkeit-der-auftraggeberschnittstelle)
  - [8.3. Verpflichtung zur Verfügbarkeit des Supports](#83-verpflichtung-zur-verfügbarkeit-des-supports)
  - [8.4. Verpflichtung zur Verfügbarkeit des S3 Objektspeichers](#84-verpflichtung-zur-verfügbarkeit-des-s3-objektspeichers)
  - [8.5. Präzisierung bezüglich der Verpflichtung zur Datensicherung](#85-präzisierung-bezüglich-der-verpflichtung-zur-datensicherung)
- [9. Organisation der vertraglichen Beziehung](#9-organisation-der-vertraglichen-beziehung)
  - [9.1. Verantwortlichkeiten des Dienstleisters](#91-verantwortlichkeiten-des-dienstleisters)
  - [9.2. Haftungsbeschränkung des Dienstleisters](#92-haftungsbeschränkung-des-dienstleisters)
  - [9.3. Zugriffsbeschränkung](#93-zugriffsbeschränkung)
  - [9.4. Verantwortlichkeiten Dritter, die an der Bereitstellung des Secure Temple Dienstes teilnehmen](#94-verantwortlichkeiten-dritter-die-an-der-bereitstellung-des-secure-temple-dienstes-teilnehmen)
  - [9.5. Verantwortlichkeiten und Verpflichtungen des AUFTRAGGEBERS](#95-verantwortlichkeiten-und-verpflichtungen-des-auftraggebers)
  - [9.6. Rechte des AUFTRAGGEBERS](#96-rechte-des-auftraggebers)
  - [9.7. Löschung von Daten am Ende des Vertrags](#97-löschung-von-daten-am-ende-des-vertrags)
- [10. Lebenszyklus dieser Dienstleistungsvereinbarung](#10-lebenszyklus-dieser-dienstleistungsvereinbarung)
  - [10.1. Eintritt in Kraft des Dienstleistungsvertrags](#101-eintritt-in-kraft-des-dienstleistungsvertrags)
  - [10.2. Änderungen der Dienstleistungsvereinbarung](#102-änderungen-der-dienstleistungsvereinbarung)
    - [10.2.1. Entwicklungen initiiert vom AUFTRAGGEBER](#1021-entwicklungen-initiiert-vom-auftraggeber)
    - [10.2.2. Änderungen initiiert durch den Dienstleister](#1022-änderungen-initiiert-durch-den-dienstleister)
  - [10.3. Reversibilität](#103-reversibilität)
- [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes](#11-verfügbarkeit-kontinuität-und-wiederherstellung-des-dienstes)
  - [11.1. Verwaltung von Incidents und Unterbrechungen](#111-verwaltung-von-incidents-und-unterbrechungen)
    - [11.1.1. Zwischenfälle](#1111-zwischenfälle)
      - [11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Dienstleistungsvereinbarung behandelt werden](#11111-arten-von-vorfällen-die-im-rahmen-dieser-dienstleistungsvereinbarung-behandelt-werden)
      - [11.1.1.2. Behandlung von Vorfällen](#11112-behandlung-von-vorfällen)
      - [11.1.1.3. Benachrichtigungsstufe von Sicherheitsvorfällen](#11113-benachrichtigungsstufe-von-sicherheitsvorfällen)
  - [11.2. Wartung des Dienstes](#112-wartung-des-dienstes)
    - [11.2.1. Art der Wartung](#1121-art-der-wartung)
    - [11.2.2. Fernzugriffe von Cloud Temple auf den Zuständigkeitsbereich des AUFTRAGGEBERS](#1122-fernzugriffe-von-cloud-temple-auf-den-zuständigkeitsbereich-des-auftraggebers)
    - [11.2.3. Fernzugriffe Dritter, die an der Erbringung der Dienstleistung im Zuständigkeitsbereich des AUFTRAGGEBERS mitwirken](#1123-fernzugriffe-dritter-die-an-der-erbringung-der-dienstleistung-im-zuständigkeitsbereich-des-auftraggebers-mitwirken)
- [12. Verfahren zur Datenlöschung am Ende des Vertrags](#12-verfahren-zur-datenlöschung-am-ende-des-vertrags)
- [13. Anwendbares Recht](#13-anwendbares-recht)
  - [13.1. Allgemein](#131-allgemein)
  - [13.2. Einhaltung des anwendbaren Rechts und der geltenden Vorschriften](#132-einhaltung-des-anwendbaren-rechts-und-der-geltenden-vorschriften)
  - [13.3. DSGVO](#133-dsgvo)
  - [13.4. Schutz in Bezug auf das außereuropäische Recht](#134-schutz-in-bezug-auf-das-außereuropäische-recht)
- [14. UNTERSCHRIFTEN](#14-unterschriften)


----------------------------------------------------------------------------------


# 3. Präliminarien und Glossar

## 3.1. Vorläufige Hinweise
Das vorliegende Dokument formalisiert die Servicevereinbarung, die mit dem als \"*Secure Temple*\" bezeichneten IaaS-Dienst verbunden ist, welcher als SecNumCloud qualifiziert ist.

„Diese Servicevereinbarung ergänzt und ist eine Ergänzung zu den Allgemeinen Geschäfts- und Nutzungsbedingungen des Dienstanbieters. Es wird verstanden, dass die vertraglichen Dokumente konsistent untereinander interpretiert werden. Bei Widersprüchen oder Abweichungen zwischen den Begriffen der vertraglichen Dokumente gelten die Dokumente in der folgenden Reihenfolge vorrangig:

1. Allgemeine Geschäftsbedingungen und Nutzungsbedingungen (AGB)
2. Servicevereinbarung SecNumCloud IaaS
3. Servicevereinbarung SecNumCloud PaaS
4. Spezifische Einzelvereinbarung
5. Sicherheitsversicherungsplan (SVP)
6. Besondere Nutzungsbedingungen (BNU)

## 3.2. Glossar

Im Rahmen dieser Dienstleistungsvereinbarung werden der **AUFGEBENDE**, der **Dienstleister** und die **Parteien** im Vertrag identifiziert, dem diese Dienstleistungsvereinbarung beigefügt ist.

Die nachfolgenden in dieser Dienstleistungsvereinbarung verwendeten Ausdrücke werden gemäß den ihnen hierunter zugewiesenen Definitionen interpretiert:

-   **Änderung:** Jeder Zusatz, eine Änderung oder Entfernung, die den Dienst beeinflusst, die autorisiert, geplant oder übernommen wurde.

-   **Standardänderung:** Eine Änderung, die einem Verfahren unterliegt, dessen Modalitäten für die Implementierung und die Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

-   **Vertrag:** bezeichnet den vom AUFGEBENDEN beim Dienstleister abgeschlossenen Vertrag, um dem AUFGEBENDEN die Nutzung des Dienstes zu ermöglichen und dem diese Dienstleistungsvereinbarung angehängt ist.

-   **Dienstleistungsvereinbarung:** Dieses Dokument, erstellt im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäfts- und Nutzungsbedingungen (AGB), gemäß den Anforderungen des SecNumCloud-Referenzdokuments.

-   **Dienstanfrage:** Anfrage des AUFGEBENDEN an den Dienstleister im Rahmen des Dienstes, die die Operationen abdeckt, die nicht durch den AUFGEBENDEN über die AUFGEBENDEN-Schnittstelle durchgeführt werden können und die Unterstützungsanfragen im Rahmen des Dienstes. Dienstanfragen sind auf jene beschränkt, die im Rahmen des Vertrags oder dieser Dienstleistungsvereinbarung vorgesehen sind.

-   **Verfügbarkeit:** Die Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung optimaler Dienstleistungsleistungen sicherzustellen, im Einklang mit den Kriterien und Verpflichtungen, die in den Service Level Agreements (SLA) definiert sind.

-   **Technische Daten:** umfasst alle Daten, die zur Bereitstellung des Dienstes verarbeitet werden, insbesondere die Identität der Nutzer und Administratoren der technischen Infrastruktur, Protokolle der technischen Infrastruktur, Zugangskonfigurationen, Verzeichnisse, Zertifikate...

-   **Ereignis:** Ein "Ereignis" ist jede detektierbare oder identifizierbare Vorkommnis, das für das Management des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung von virtuellen Maschinen auf einem Rechenblade ermöglicht.

-   **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Sicherheit der Daten gefährdet.

-   **Sicherheitsvorfall:** Jedes Ereignis im Rahmen des Dienstes:

    -   Von vorsätzlich bösartiger Natur;
    -   Von zufälliger Natur, die die Integrität, Vertraulichkeit oder Nachverfolgbarkeit des Dienstes oder der Daten des AUFGEBENDEN beeinträchtigt;
    -   Die bestehende Sicherheitsmaßnahmen beeinträchtigt.
    Beeinträchtigungen der Verfügbarkeit nicht-bösartiger Herkunft werden nicht als Sicherheitsvorfall betrachtet (Hardware-Ausfall, Fehler, Fehlfunktion, Naturkatastrophe...).

-   **AUFGEBENDEN-Schnittstelle:** Vom Dienstleister dem AUFGEBENDEN zur Verfügung gestelltes Dienstverwaltungsinterface, umfassend eine Web-Verwaltungskonsole und eine API.

-   **Implementierung:** Administrationsaktion(en) der Durchführung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht dessen tatsächliche Umsetzung).

-   **Problem:** Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (risikobehaftete Situation).

-   **Region:** bezeichnet eine geografisch begrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste bereitstellen, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

-   **Dienst:** bezeichnet den vom Dienstleister dem AUFGEBENDEN bereitgestellten, als SecNumCloud qualifizierten IaaS-Dienst „Secure Temple“, der von den technischen Infrastrukturen des Dienstleisters bereitgestellt wird, wie in der Sektion „Beschreibung des Dienstes“ dieser Dienstleistungsvereinbarung beschrieben.

-   **Secure Temple:** bezeichnet den als SecNumCloud qualifizierten IaaS-Dienst, angeboten von der Gesellschaft Cloud Temple, wie in der auf der Website der ANSSI abrufbaren Bescheinigung definiert und in der Anlage dieser Dienstleistungsvereinbarung bereitgestellt.

-   **Katastrophe:** bezeichnet ein schwerwiegendes Ereignis natürlicher oder menschlicher Herkunft, sei es zufällig oder vorsätzlich, das bedeutende Verluste und Schäden für die betroffene Partei verursacht.

-   **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, die das Sammeln verschiedener Daten wie Messungen und Alarme beinhaltet. Diese Aktivität ist auf Beobachtung und Nachverfolgung beschränkt, ohne direkt in die überwachten Elemente einzugreifen, eine Befugnis, die den Administrationsoperationen zugehört.

-   **Mandant:** Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilt, während die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewährleistet sind.

-   **Verfügbarkeitszone (AZ) (Availability zone):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der konzipiert ist, um hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste durch geografische Verteilung der Ressourcen zu gewährleisten.

# 4. Akronymen


  | **Akronym**  | **Definition**                                                                           |
  | ------------ | :--------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Beratungsausschuss für Änderungen                               |
  | **CMDB**     | Configuration Management Database -- Konfigurationsmanagement-Datenbank                  |
  | **COPIL**    | Steuerungskomitee                                                                        |
  | **COSTRAT**  | Strategisches Komitee                                                                    |
  | **COPROJ**   | Projekt Komitee                                                                          |
  | **DB**       | Database (Datenbank)                                                                     |
  | **DRP**      | Disaster Recovery Plan (PRA) (Notfallwiederherstellungsplan)                            |
  | **GTE**      | Garantierte Eskalationszeit                                                              |
  | **GTI**      | Garantierte Interventionszeit                                                            |
  | **GTR**      | Garantierte Lösungszeit                                                                  |
  | **ITIL**     | Information Technology Infrastructure Library - Best Practices für IT-Service-Management |
  | **IaaS**     | Infrastructure as a Service                                                              |
  | **MCO**      | Betriebsbereitschaft erhalten                                                            |
  | **MOA**      | Auftraggeber                                                                             |
  | **MOE**      | Auftragnehmer                                                                            |
  | **MSP**      | Managed Services Provider                                                                |
  | **OS**       | Operating system (Betriebssystem)                                                        |
  | **PAQ**      | Qualitätsicherungsplan                                                                   |
  | **PaaS**     | Platform as a Service                                                                    |
  | **PAS**      | Sicherheitsversicherungsplan                                                             |
  | **PASSI**    | Anbieter für die Sicherheitsprüfung von Informationssystemen                             |
  | **RFC**      | Request For Change -- Änderungsanforderung                                               |
  | **RGPD**     | Datenschutz-Grundverordnung                                                              |
  | **RPO**      | Recovery Point Objective -- Aktualität der wiederhergestellten Daten im Notfall         |
  | **RTO**      | Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Notfall               |
  | **SDM**      | Service Delivery Manager                                                                 |
  | **SLA**      | Service Level Agreement -- Vereinbarung über Serviceleistungen                           |
  | **SNC**      | SecNumCloud                                                                              |
  | **SOC**      | Security Operation Center                                                                |
  | **TMA**      | Applikation-Drittwartung                                                                 |
  | **UO**       | Arbeits Einheit                                                                          |
  | **VABE**     | Validierung der Betriebseignung                                                          |
  | **VABF**     | Validierung der Betriebsfunktion                                                         |
  | **VM**       | Virtual Machine (Virtuelle Maschine)                                                     |
  | **VSR**      | Regelmäßige Dienstvalidierung                                                            |


# 5. Gegenstand des vorliegenden Servicevertrags

Die vorliegende Servicevereinbarung legt die Bedingungen und Konditionen fest, unter denen sich der Dienstleister verpflichtet, den Dienst an
den AUFTRAGGEBER zu liefern. Ihr Zweck ist es:

-   Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes zu präzisieren;

-   Die Verpflichtungen des Dienstleisters zu erläutern, um den vereinbarten Serviceniveau nachzukommen;

-   Die speziell auf den gelieferten Dienst anwendbaren regulatorischen Normen zu identifizieren;

-   Eine Uniformität und Integrität in der Bewertung der Dienstqualität zu gewährleisten;

-   Die Exzellenz der erbrachten Dienstleistungen zu garantieren, bewertet anhand von quantitativen Leistungsindikatoren.

Es wird festgelegt, dass für den Fall, dass der Dienstleister seine SecNumCloud-Qualifizierung verlieren sollte, der Vertrag vom
AUFTRAGGEBER ohne Verhängung von Strafen von Rechts wegen aufgelöst werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER
über diese Disqualifikation durch die Zusendung einer offiziellen Benachrichtigung mittels eines Einschreibens mit Rückschein zu informieren.

Es sollte beachtet werden, dass eine Modifikation oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der initialen
Qualifikation interpretiert wird.

# 6. Audit
Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder jedem von ihm benannten Drittauditor, der kein Konkurrent des Dienstleisters ist, Einsicht in alle für die vollständige Bestätigung der Einhaltung der Verpflichtungen, die mit den Bestimmungen des Artikels 28 der Allgemeinen Datenschutzverordnung (DSGVO) im Zusammenhang stehen, erforderlichen Unterlagen zu gewähren, um so die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Dienstleistungsvereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung an:

1.  Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI) sowie an die zuständige Qualifizierungseinheit, um die Überprüfung der Konformität des Dienstes und seines Informationssystems nach dem Referenzsystem SecNumCloud durchzuführen.
2.  Einen für die Sicherheitsauditierung von Informationssystemen ordnungsgemäß qualifizierten PASSI Dienstleister, der ausdrücklich vom Dienstleister benannt wird, um Sicherheitsaudits in Bezug auf den Dienst durchzuführen.

# 7. Beschreibung des Dienstes
## 7.1. Geteiltes Verantwortungsmodell
Der vom Anbieter angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die sich an das im SecNumCloud-Referenzrahmen vorgestellte Prinzip der geteilten Verantwortung halten:

-   Die Bereitstellung von Rechenressourcen (Compute);

-   Die Bereitstellung von Speicherplatz;

-   Der Zugang zu Netzwerk- und Internet-Konnektivitätsdiensten;

-   Das Angebot eines Backup-Dienstes für virtuelle Maschinen.

Das geteilte Verantwortungsmodell, das zwischen dem Anbieter und dem AUFTRAGGEBER im Rahmen des Dienstes angewendet wird, ist in §7.1 dargestellt.

Es wird verstanden, dass der Anbieter seine Expertise mobilisieren wird, um die Leistungen nach den besten beruflichen Praktiken zu erbringen und
den Anforderungen des SecNumCloud-Referenzrahmens entsprechend.

Der Dienst ist als SecNumCloud qualifiziert (siehe Bescheinigung im Anhang).

## 7.2. Detaillierte Präsentation des Dienstleistungsbereichs
| Compute                  | Rechenressource des Mandanten AUFTRAGGEBER                                                                         |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Storage                  | Produktionsdaten des Mandanten AUFTRAGGEBER                                                                         |
| S3 Objektspeicher        | Bereitstellung einer souveränen Multi-AZ Objektspeicherinfrastruktur, kompatibel mit den standardisierten S3-APIs. |
| Backup                   | Modulo-Abonnement für adäquaten Massenspeicher                                                                      |
| Netzwerkinfrastruktur    | Netzwerkressource des Mandanten AUFTRAGGEBER                                                                        |
| AUFTRAGGEBER-Konsole     | Der Dienst, der es dem AUFTRAGGEBER ermöglicht, auf seinen IaaS-Service zuzugreifen und ihn über die Shiva-Schnittstelle zu verwalten     |
| Unterstützung            | Der Support-Dienst, der die vorherigen Dienstleistungen begleitet und nur diese (*)                                 |

_(*) Im Rahmen des als SNC qualifizierten Dienstleistungsumfangs und der Verantwortlichkeiten des Dienstleisters in dieser Angelegenheit_

### 7.2.1. Infrastrukturen Datacenter
Das Leistungsangebot umfasst die Bereitstellung folgender qualifizierter Dienste für jede Verfügbarkeitszone:

-   Datacenter-Standort in Frankreich für die Region FR, der den neuesten technologischen Normen entspricht und ein Resilienzniveau bietet, das dem Tier-3-Level des Uptime Institute entspricht oder dieses übertrifft;
-   Bereitstellung von technischen Räumen innerhalb von Datacentern, die speziell für die Aufnahme der für die Produktion des Dienstes unerlässlichen technischen Ausrüstung vorgesehen sind, einschließlich Berechnung, Speicherung, Netzwerk, Verkabelung und andere erforderliche Komponenten;
-   Gesicherte Stromversorgung, gewährleistet durch zwei separate Stromkreise, die eine Servicekontinuität sicherstellen;
-   Bereitstellung von Klimatisierungsdiensten, die angepasst sind, um die Normen und Empfehlungen der Ausrüstungshersteller zu erfüllen und so eine optimale Umgebung für die technischen Geräte zu gewährleisten;
-   Kontinuierliche Überwachung und detaillierte Messtechnik, die eine genaue Überwachung und proaktive Verwaltung der Leistung und Sicherheit des bereitgestellten Dienstes ermöglichen.

Der Dienstleister gewährleistet die Bereitstellung von fortschrittlichen Brandmelde- und Löschdiensten, die darauf ausgelegt sind, einen Brandherd innerhalb der Anlagen effektiv zu identifizieren und zu neutralisieren. Diese Systeme sind entscheidend, um die Sicherheit der Ausrüstung und der Daten zu gewährleisten. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell handeln können, ohne die Computerausrüstung zu beschädigen. Dieser Dienst ist entscheidend, um Brandrisiken vorzubeugen, potenzielle Schäden zu minimieren und die Kontinuität des Betriebs zu gewährleisten.

Der AUFTRAGGEBER wird darüber informiert, dass alle implementierten Sicherheitsverfahren und -maßnahmen, einschließlich der jährlichen Umschalttests auf die Generatoren, wesentlich sind, um die Kontinuität und Integrität der bereitgestellten Dienstleistungen zu gewährleisten. Diese Praktiken sind darauf ausgerichtet, das Risiko eines Ausfalls zu minimieren und eine optimale Reaktionsfähigkeit im Falle eines Vorfalls zu gewährleisten. Mit der Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich zur vollen Kooperation, um ihre Implementierung zu erleichtern. Der AUFTRAGGEBER wird ebenfalls ermutigt, sich mit den bereitgestellten Sicherheitsempfehlungen vertraut zu machen und diese in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Software-Infrastruktur zur Steuerung des Dienstes

Der Dienstleister stellt dem AUFTRAGGEBER die Verwaltungskonsole und die erforderliche API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich außerdem, diese Verwaltungskonsole und die API in optimalem operationellem Zustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten.
Diese Verwaltungskonsole und die API werden gemeinsam unter dem Begriff „AUFTRAGGEBER-Schnittstelle“ bezeichnet.

Der Dienstleister warnt den AUFTRAGGEBER davor, dass eine anormale Nutzung der AUFTRAGGEBER-Schnittstelle, insbesondere im Falle einer Überlastung seiner Befehls-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen kann, die zur Sperrung des Zugangs zu den Befehls-APIs oder zum Dienst führen. Es sollte hervorgehoben werden, dass diese Situation nicht als Nichtverfügbarkeit des Dienstes gilt, sondern als ein Schutz des Dienstes und der Infrastruktur des Dienstleisters; der AUFTRAGGEBER darf sie daher nicht als Nichtverfügbarkeit in seinen Berechnungen betrachten.

Darüber hinaus informiert der Dienstleister den AUFTRAGGEBER darüber, dass vollkommen identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine pro Sekunde (Drosselung) begrenzt sind. Wenn der AUFTRAGGEBER identische Anfragen mit einer höheren Frequenz einreicht, kann deren Ablehnung nicht als Nichtverfügbarkeit des Dienstes interpretiert werden.

### 7.2.3. Recheninfrastrukturen
Die Dienstleistung beinhaltet die Bereitstellung der erforderlichen Ausrüstung für die Ausführung der Arbeitslasten in Form von virtuellen Maschinen in den vom SPONSOR abonnierten Verfügbarkeitsbereichen.

Dies beinhaltet:

- Die Bereitstellung der technischen Chassis, die für das einwandfreie Funktionieren der Rechenblades notwendig sind;
- Die Bereitstellung der Rechenblades in den vom SPONSOR spezifizierten Mengen und verteilt gemäß den von ihm gewählten Verfügbarkeitszonen. Es ist zu beachten, dass diese Rechenblades ausschließlich für den SPONSOR bestimmt sind;
- Die Zurverfügungstellung von Hypervisor-Betriebssystemen sowie die Gewährleistung des Betriebs und der Sicherheit der notwendigen Softwareinfrastruktur zur Steuerung dieser Betriebssysteme. Es ist hervorzuheben, dass, auch wenn der Anbieter für die operative Wartung und die allgemeine Absicherung des Dienstes verantwortlich ist, er keine spezifischen Kenntnisse über die Produktionsumgebungen des SPONSORS oder über die Anforderungen seiner Arbeitslasten hat. Daher liegt die Verantwortung für die Entscheidung zur Aktualisierung der Hypervisor-Betriebssysteme der Rechenblades, eine Aktion, die möglicherweise einen Neustart erfordern könnte, vollständig beim SPONSOR. Diese Operation kann über die SPONSOR-Schnittstelle durchgeführt werden.

Die Auswahl des Rechenblade-Modells, ausgewählt aus dem vom Anbieter bereitgestellten Katalog, obliegt der Verantwortung des SPONSORS.

### 7.2.4. Speicherinfrastruktur

Der Service umfasst die Bereitstellung einer geteilten Speicherinfrastruktur vom Typ SAN (Storage Area Network) für den AUFTRAGGEBER, die verschiedene Performance-Level bietet. Dieser Service umfasst:

- Die Implementierung und Aufrechterhaltung der operativen und Sicherheitsbedingungen des dedizierten SAN-Netzwerks;
- Die Installation und Verwaltung der gemeinsam genutzten Speicherarrays zwischen den Kunden, einschließlich ihrer Wartung in betrieblichen und Sicherheitsbedingungen, ihrer Überwachung und ihrer Metrologie;
- Die Einrichtung automatisierter Systeme für die Zuweisung von LUNs (Logical Unit Numbers), die für die Nutzung durch den AUFTRAGGEBER bestimmt sind, entsprechend den vom AUFTRAGGEBER abonnierten Mengen.

### 7.2.5. Globale Netzwerkinfrastruktur
Der Anbieter stellt im Rahmen des Dienstes ein globales Netzwerk bereit, das es dem AUFTRAGGEBER erleichtert, den Zugang zu seinen gehosteten 
Systemen zu ermöglichen. Dieser Dienst umfasst:

- Die Bereitstellung, die Aufrechterhaltung des betrieblichen und sicherheitstechnischen Zustands aller Glasfaserstrecken, die die verschiedenen Verfügbarkeitszonen miteinander verbinden;

- Die Bereitstellung, die Aufrechterhaltung des betrieblichen und sicherheitstechnischen Zustands der technischen Ausrüstungen, die für den einwandfreien Betrieb des Netzwerks und die Isolierung der verschiedenen Kunden nötig sind.

Die Netzwerkinterkonnektion des TENANT AUFTRAGGEBER, mit dem Internet oder privaten Netzwerken, sowie die Netzwerkausrüstung, Betreiberlinks und sonstige technische Komponenten, die diese Interkonnek­tion durchführen, sind nicht im Leistungsumfang des Dienstes enthalten. Diese Netzwerkinterkonnektion wird gemäß den im Vertrag vorgesehenen Bestimmungen umgesetzt.

### 7.2.6. Backup-Infrastruktur
Der Anbieter stellt dem AUFTRAGGEBER einen integrierten, dedizierten und verwalteten Sicherungsdienst zur Verfügung, der zum Schutz seiner
virtuellen Maschinen bestimmt ist. Der Anbieter gewährleistet den betrieblichen und sicherheitstechnischen Erhalt dieses Sicherungsdienstes.
Der Anbieter garantiert, dass die Sicherungen des AUFTRAGGEBERS außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten
lokalisiert sein werden, vorbehaltlich der Tatsache, dass der AUFTRAGGEBER den geeigneten Workload-Einheiten abonniert hat.

Diese Sicherungsleistung beschränkt sich auf die Sicherung der virtuellen Maschinen und die Konfigurationen der Topologie der IaaS-Umgebung
der Tenants des AUFTRAGGEBERS im Rahmen des Dienstes. Die Erstellung und Implementierung einer adäquaten Sicherungsrichtlinie durch den
AUFTRAGGEBER hängt von der Abonnierung spezifischer Workload-Einheiten ab. Es liegt daher in der Verantwortung des AUFTRAGGEBERS, sich zu vergewissern,
dass die erforderlichen technischen Ressourcen beim Anbieter verfügbar sind, um seine Sicherungsrichtlinie umzusetzen oder
diese an die verfügbaren Mittel anzupassen.

Der Anbieter verpflichtet sich, den AUFTRAGGEBER im Falle von Kapazitätsengpässen zu informieren und Beratungsunterstützung für
die Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom AUFTRAGGEBER geäußerten Bedürfnisse
im Bereich der Sicherungsrichtlinie, im Rahmen der abonnierten Ressourcen.

### 7.2.7. Implementierung von Lösungen für die Notfallwiederherstellung oder Geschäftskontinuität
Der Dienstleister stellt dem AUFTRAGGEBER alle technischen Lösungen zur Verfügung, die erforderlich sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen zu gewährleisten. Es obliegt dem AUFTRAGGEBER, diese Ressourcenverteilung wirksam zu verwalten, wofür er die Möglichkeit hat, die vom Dienstleister bereitgestellten Werkzeuge zu nutzen.

## 7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell
### 7.3.1. Gemanagte Dienste im RUN-Modus
Es ist wichtig zu beachten, dass folgende Punkte vom Service ausgeschlossen sind:

-   Die Unterbringung physischer Komponenten des AUFTRAGGEBERS;

-   Die Netzwerkinterkonnektion des AUFTRAGGEBER-Tenants, ins Internet oder zu privaten Netzwerken, einschließlich der Betriebsverbindungen;

-   Jeglicher Art von gemanagten Service oder Wartungsvertrag (TMA);

-   Jegliche Unterstützung auf den virtuellen Maschinen auf OS-Ebene und darüber im Verantwortungsstapel Iaa, selbst wenn es sich lediglich um einfache Überwachung handelt.

Dies schließt jedoch keineswegs aus, dass der AUFTRAGGEBER solche Dienste von dem MSP-Angebot des Dienstleisters in Anspruch nimmt, um im Modus gemanagter Dienste auf seine Tenants einzuwirken. Diese Dienste werden dann nicht durch das vorliegende Service-Level-Agreement und seine bipartiten Verpflichtungen/Klauseln abgedeckt.

### 7.3.2. Konfiguration der Notfallvorsorge
Standardmäßig stellt der Dienstleister die Einrichtung der IaaS-Ressourcen für den AUFTRAGGEBER bereit, indem er Ressourcen reserviert und die Bereitstellungen zum Verwenden der Verfügbarkeitszonen konfiguriert. Es obliegt dem AUFTRAGGEBER, die Verfügbarkeitszonen über die AUFTRAGGEBER-Schnittstelle auszuwählen.

### 7.3.3. Konfiguration der Datensicherung

Die Backup-Dienstleistung endet bei der Sicherung von virtuellen Maschinen und der Konfigurationen der Topologie, die das IaaS-Umfeld der Mieter des AUFTRAGGEBERS im Rahmen des Dienstes darstellen.

Die Bereitstellung des Backups und die Fertigstellung der Backup-Politik des AUFTRAGGEBERS unterliegt der Buchung von Speicherplatz auf dem Massenspeicher, der zur Erbringung des Dienstes benötigt wird. Es ist daher in der Verantwortung des AUFTRAGGEBERS, bei dem Dienstleister die technischen Mittel zu abonnieren, die zur Umsetzung der Backup-Politik in seinem IT-Bereich notwendig sind, oder die Backup-Politik an die eingesetzten Mittel anzupassen. Der Dienstleister verpflichtet sich, den AUFTRAGGEBER im Falle einer technischen Kapazitätsgrenze zu informieren.

Der Dienstleister wird die technischen und menschlichen Ressourcen für die Sicherung des gehosteten Systems im Rahmen der vom AUFTRAGGEBER abonnierten Ressourcen einsetzen.

Des Weiteren liegt es in der Verantwortung des AUFTRAGGEBERS, seine eigene Backup-Strategie zu definieren und die Backups der VMs selbst zu konfigurieren oder einen Dienstantrag beim Dienstleister zu stellen, damit die Konfiguration der Backups für physische Server eingerichtet wird, falls der AUFTRAGGEBER einen Managed-Service-Vertrag hat, der dem Dienstleister erlaubt, über das AUFTRAGGEBER-Interface zu agieren, welches die Verwaltungskonsole ist, die im Rahmen dieser Dienstleistungsvereinbarung bereitgestellt wird und Funktionen zur Konfiguration der Backups enthält.

Darüber hinaus ist der Dienst nur dazu verpflichtet, über das AUFTRAGGEBER-Interface die vom AUFTRAGGEBER klare spezifizierte Konfiguration umzusetzen.

Aus Flexibilitätsgründen des Angebots des Dienstleisters hat der AUFTRAGGEBER die Möglichkeit, eine Nicht-Backup-Politik für einige seiner VMs zu wählen. In diesem Fall liegt es in der Verantwortung des AUFTRAGGEBERS, diese Wahl zu treffen. Der Dienstleister wird die VMs, die mit der Politik "no backup" verbunden sind, nicht sichern. Der Dienstleister warnt den AUFTRAGGEBER, dass die Wahl der Politik "no backup" oder die Entscheidung für manuelle Backups den AUFTRAGGEBER im Falle eines Vorfalls auf den unteren Schichten oder auf Schichten, die in seinem Verantwortungsbereich im IaaS-Modell liegen, einer dauerhaften Datenverlust aussetzt. In einem solchen Fall ist es unmöglich, den Dienstleister für die Wiederherstellung der Daten verantwortlich zu machen, da nichts wiederhergestellt werden kann. Der Dienstleister empfiehlt, die VMs immer zu sichern.

Für alle Fragen, die das auf einer virtuellen Maschine installierte OS betreffen, und alle Software oder Programme, die „über dem OS“ ausgeführt werden, liegt es in der Verantwortung des AUFTRAGGEBERS, die Verwaltungs- und Überwachungsaufgaben innerhalb der Europäischen Union durchzuführen, wenn er garantieren möchte, dass alle Schichten des IT-Systems betrieben und verwaltet werden von der Europäischen Union. Die Verwaltungshandlungen außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Dienstleistungsvereinbarung sind im Abschnitt "Modell der geteilten Verantwortlichkeiten" dieser Dienstleistungsverträge angegeben.

## 7.4. Implementierung des Dienstes

### 7.4.1. Technische Voraussetzungen

Für die Implementierung des Dienstes erkennt der SPONSOR an, dass er Folgendes benötigt:

-   Mit einer Virtualisierung des Typs VMware in den vom Herausgeber unterstützten Versionen und vom Dienstleister im Rahmen des Dienstes bereitgestellt arbeiten;

-   Über den Dienstleister das Backup-Tool nutzen;

-   Feste IP-Adressen angeben, von denen der Dienstleister ihm erlauben wird, auf die SPONSOR-Schnittstelle zuzugreifen (Filterung durch Whitelisting). Änderungen an dieser IP-Liste müssen über Serviceanfragen vorgenommen werden (Liste nicht über die Administrationsinterface des Dienstes verwaltbar).

## 7.5. Standort des Dienstes in Frankreich
Es wird festgestellt, dass keine der Operationen und keine physischen Komponenten, die in der Erbringung des Dienstes, Gegenstand dieser Dienstleistungsvereinbarung, involviert sind, außerhalb der Europäischen Union gelegen sind.

Dies beinhaltet insbesondere die Unterstützung, die betriebliche Überwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst bereitstellt. Tatsächlich werden sämtliche Speicherungen, sämtliche Verwaltungsaufgaben, Überwachungen und Verarbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der Datacenter, die den Dienst hosten
In Ermangelung der Operationen der Mitarbeiter und der Agenturen des Dienstleisters sind sämtliche Produktionsaktivitäten (einschließlich der Speicherung und Verarbeitung von Daten) und technischen Komponenten, die den Service liefern, in den in Frankreich ansässigen Rechenzentren lokalisiert.

### 7.5.2. Standort der Cloud Temple Agenturen, die den Service betreiben

Die Mitarbeiter von Cloud Temple, die im Bereich des Service tätig sind, operieren von den Agenturen von Cloud Temple aus, die alle ausschließlich in Frankreich gelegen sind. Diese Agenturen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

DER AUFTRAGGEBER wird darüber informiert, dass die Mitarbeiter von Cloud Temple die Möglichkeit haben, aus der Ferne zu arbeiten. Dennoch garantiert der Dienstleister dasselbe Sicherheitsniveau in Bezug auf Fernzugriffe, insbesondere bezüglich der VPN-Zugänge. Diese Fernzugriffe werden gemäß den Anforderungen des Sicherheitsstandards SecNumCloud umgesetzt.

## 7.6. Support
### 7.6.1. Art der unterstützenden Unterlagen für den Service
Der Dienstleister bietet einen technischen Support-Service zur Unterstützung des AUFTRAGGEBERS bei der Verwaltung, Fehlerbehebung und Optimierung ihrer eingesetzten Ressourcen. Dieser Service umfasst ein breites Spektrum an Aktivitäten, von der Hilfe bei der anfänglichen Einrichtung der Dienste bis hin zu fortgeschrittenem technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Support-Services:

-   Unterstützung bei der anfänglichen Implementierung der Nutzung des Dienstes;
-   Unterstützung bei der Behebung von Vorfällen;
-   Unterstützung bei der Problemlösung;
-   Überwachung und Beratung bei der Optimierung der technischen Plattform.

Im Rahmen des Support-Services tritt der Dienstleister nicht an die Stelle des AUFTRAGGEBERS in der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt voll verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Dienstleisters gespeichert oder installiert hat. Der technische Support-Service wird in Übereinstimmung mit den Allgemeinen Geschäfts- und Nutzungsbedingungen bereitgestellt; der Dienstleister ist zu einer Mittelverpflichtung verpflichtet.

Der AUFTRAGGEBER verpflichtet sich, den technischen Support-Service auf vernünftige Weise zu nutzen und insbesondere davon abzusehen, nicht abonnierte Dienste vom Dienstleister zu verlangen oder die Teams des Dienstleisters dazu zu bringen, bei seinen eigenen Kunden oder bei Dritten, die nicht im Vertrag enthalten sind, zu intervenieren. Der Dienstleister behält sich das Recht vor, Serviceanfragen abzulehnen, die diese Kriterien nicht erfüllen.

Das Engagementniveau des Supports ist an die Unterzeichnung der damit verbundenen Support-Arbeitseinheiten gebunden.

### 7.6.2. Inanspruchnahme des technischen Support-Services
Der technische Support ist über ein Ticket-System über die COMMANDITAIRE-Konsole erreichbar und steht während der normalen Bürozeiten außer an Feiertagen zur Verfügung (8 Uhr - 18 Uhr; Montag -- Freitag; französischer Kalender und Arbeitszeiten). Für Notfälle, die außerhalb der Geschäftszeiten auftreten, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine Nummer erreicht werden, die dem COMMANDITAIRE bei der Einrichtung des Dienstes mitgeteilt wird.

Für jede Anforderung oder jeden Vorfall ist es zwingend erforderlich, ein Ticket beim Support des Dienstleisters zu erstellen. Die Initialisierung dieses Tickets, welche alle notwendigen Informationen enthält, ist wesentlich und markiert den Beginn der Bewertung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anforderung oder eine Incident-Mitteilung erhält, sei es über die Management-Konsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es wesentlich, dass der COMMANDITAIRE dem Dienstleister so viele Details wie möglich über das aufgetretene Problem zur Verfügung stellt. Dieses Vorgehen ist entscheidend, um eine angemessene Bewertung der Situation, deren Priorisierung und eine effiziente Diagnose zu ermöglichen.

Der Kunde erhält dann eine E-Mail-Bestätigung, die die Erstellung des Tickets und dessen eindeutige Nummer anzeigt. Der COMMANDITAIRE kann den Status und die Historie seiner Anforderungen und Vorfallsmeldungen direkt über die Management-Konsole einsehen.

### 7.6.3. Prozess des Incident-Managements
Bei der Meldung eines Vorfalls initiiert das technische Support-Team des Dienstleisters eine Untersuchung, um die Ursache des Problems zu ermitteln und eine Diagnose zu stellen. Der Kunde muss aktiv mit dem Dienstleister zusammenarbeiten, indem er alle notwendigen Informationen zur Verfügung stellt und die erforderlichen Tests durchführt. Der Dienstleister kann auf den Service des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstleisters als funktionsfähig eingestuft werden und der Vorfall ihm nicht zuzurechnen ist, wird der Kunde darüber informiert. Auf Anfrage des Kunden kann der Dienstleister professionelle Dienstleistungen anbieten, um die Ursache des Problems zu identifizieren, die nach vorheriger Vereinbarung in 30-Minuten-Intervallen abgerechnet werden.

Für den Fall, dass der Vorfall in der Verantwortung des Dienstleisters oder eines seiner Subunternehmer liegt, vervollständigt dieser die Diagnose und bemüht sich um die Wiederherstellung des Service ohne zusätzliche Kosten. Die Diagnose stützt sich auf den Austausch zwischen den Parteien und die Daten des Dienstleisters, wobei diese Elemente durch Übereinstimmung der Parteien als beweiskräftig angesehen werden.

### 7.6.4. Priorisierungsprozess der Behandlungen
Die Bestimmung der Prioritätsstufe eines Dossiers beruht auf einer Matrixanalyse, die die Auswirkungen des Vorfalls und seinen Grad an
Kritikalität bewertet:

-   Die Auswirkungsniveaus sind wie folgt definiert:

| Auswirkungsniveau | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Auswirkung I1     | Der oder die Dienste des Anbieters sind unterbrochen                                                               |
| Auswirkung I2     | Der oder die Dienste des Anbieters sind beeinträchtigt                                                             |
| Auswirkung I3     | Der oder die Dienste des Anbieters sind momentan stabil, zeigen aber Anzeichen einer möglichen langfristigen Abnahme |

-   Die Kritikalitätsniveaus sind wie folgt definiert:

| Kritikalitätsniveau | Beschreibung                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Kritikalität C1      | Der oder die Dienste des Anbieters verschlechtern sich in besorgniserregender Geschwindigkeit      |
| Kritikalität C2      | Der oder die Dienste des Anbieters verschlechtern sich allmählich im Laufe der Zeit                |
| Kritikalität C3      | Der oder die Dienste des Anbieters weisen ein oder mehrere Unbequemlichkeiten ohne gravierende Folgen auf |

-   Basierend auf einer eingehenden Analyse der Situation, die die bestimmenden Elemente der Auswirkung und der Kritikalität berücksichtigt, wird dem Ticket entsprechend der nachstehenden Entscheidungsmatrix eine Priorität zugewiesen:

| Auswirkungsniveau <br/> \ Kritikalitätsniveau | Auswirkung I1     | Auswirkung I2     | Auswirkung I3     |
| --------------------------------------------- | ----------------- | ----------------- | ----------------- |
| Kritikalität C1                               | Priorität **P1**  | Priorität **P2**  | Priorität **P3**  |
| Kritikalität C2                               | Priorität **P2**  | Priorität **P3**  | Priorität **P4**  |
| Kritikalität C3                               | Priorität **P3**  | Priorität **P4**  | Priorität **P5**  |

Die Service-Level-Verpflichtungen für jede Prioritätsstufe sind im folgenden Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Lokalisierung des Supportdienstes

Der Support wird vom Dienstleister für den AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann ebenfalls in englischer Sprache angeboten werden.

Die Betriebstätigkeiten des Supportdienstes des Dienstleisters für das qualifizierte Infrastrukturserviceangebot SecNumCloud befinden sich in der Europäischen Union.

# 8. Verpflichtungen und Servicelevel

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheitsintegrität seiner technischen Infrastruktur, die den Service bereitstellt, zu gewährleisten und deren optimalen Betrieb zu sichern.

Die Nichtverfügbarkeit eines Dienstes, für den ein Leistungsindikator besteht, wird sofort bei dessen Identifikation durch das Überwachungssystem des Dienstleisters oder nach einer Benachrichtigung durch einen Benutzer des AUFTRAGGEBERS anerkannt. Der Beginn der Nichtverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Zählung der Ausfallzeit zu garantieren.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungswerkzeuge des Dienstleisters oder durch eine Benutzerantwort, wodurch eine effektive Wiederaufnahme der Operationen und eine treue Messung der Dauer der Unterbrechung sichergestellt wird.

## 8.1. Verfügbarkeitsverpflichtungen der Infrastruktur
Der Dienstleister verpflichtet sich dazu, ein Verfügbarkeits- und Leistungsniveau beizubehalten, das den für jede spezifizierte Periode festgelegten Standards entspricht. Die Service-Level-Agreements (SLAs) gelten unter der Voraussetzung, dass der AUFTRAGGEBER seine Systeme mindestens in zwei der Verfügbarkeitszonen einsetzt, die in der betroffenen Region präsent sind.

Falls diese Bedingungen vom AUFTRAGGEBER nicht eingehalten werden, ist dieser nicht in der Lage, die Anwendung der betroffenen SLAs zu beanspruchen, welche speziell durch ein Sternchen (\*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die AUFTRAGGEBERSchnittstelle. Die Messungen verstehen sich monatlich berechnet:

- **SLA 1 (\*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeitsrate von 99,99%, berechnet auf eine Basis 24/7.
- **SLA 2 (\*) : IC-INFRA_SNC-02** – Verfügbarkeit des Speicherplatzes: garantierte Verfügbarkeitsrate von 99,99%, berechnet auf eine Basis 24/7.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Datensicherung: garantierte Verfügbarkeitsrate von 99,99%, berechnet auf eine Basis 24/7.
- **SLA 4 (\*) : IC-INFRA_SNC-04** – Verfügbarkeit der Netzwerkinfrastruktur: garantierte Verfügbarkeitsrate von 99,99%, berechnet auf eine Basis 24/7.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: garantierte Verfügbarkeitsrate von 99,99%, berechnet auf eine Basis 24/7.

_**Bemerkungen**_:

- *Als Antwort auf einen verteilten Denial-of-Service-Angriff (DDoS) behält sich der Dienstleister das Recht vor, seine Internetrouting-Konfiguration anzupassen, 
um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine dem AUFTRAGGEBER gehörende IP-Adresse gezielt wird, kann der Dienstleister auf die blackholing-Technik 
mittels der BGP-Community zurückgreifen, um jeglichen Verkehr zur anvisierten IP-Adresse bei seinen Anbietern zu blockieren, mit dem Ziel, die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER 
und die des Dienstleisters zu schützen. Der Dienstleister empfiehlt dem AUFTRAGGEBER nachdrücklich, ähnliche Maßnahmen zu ergreifen, wie zum Beispiel die Nutzung von auf dem Markt verfügbaren Web Application Firewalls, 
und die eigenen Sicherheitsgruppen sorgfältig über die API zur Befehlsgestaltung zu konfigurieren.*

- *Der Dienstleister betont auf die Notwendigkeit für den AUFTRAGGEBER, die Öffnung von Verkehrsflüssen zu minimieren, indem insbesondere der Zugang zu den Administrationsports 
**SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) von der gesamten Internet (Subnetz 0.0.0.0/0) vermieden, sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) unterlassen wird.*

## 8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBERSchnittstelle
-   SLA 6: IC-INFRA_SNC-06 -- Zugang zur Administrationskonsole des Dienstes: eine garantierte Verfügbarkeit von 97%, kontinuierlich sichergestellt, 24 Stunden am Tag, 7 Tage die Woche.
-   SLA 7: IC-INFRA_SNC-07 -- Zugang zu den Steuerungs-APIs des Dienstes: eine Verfügbarkeit von 99,9%, berechnet auf einer Basis von 24 Stunden täglich, 7 Tage die Woche.

## 8.3. Verpflichtung zur Verfügbarkeit des Supports
- **SLA 8      : IC-INFRA_SNC-08** – Hier sind die Leistungsverpflichtungen des technischen Supports des Dienstleisters für Vorfälle, ausgenommen geplante Wartungen:

| Priorität        | Garantie für die Reaktionszeit (GTI) | Leistungsziel |
| ---------------- | ------------------------------------ | ------------- |
| Priorität **P1** | 30 Min.                              | 95%           |
| Priorität **P2** | 2 Std                                | 90%           |
| Priorität **P3** | 4 Std                                | 90%           |
| Priorität **P4** | 24 Std                               | 85%           |
| Priorität **P5** | 48 Std                               | 85%           |

- **SLA 9      : IC-INFRA_SNC-09** – Hier sind die Leistungsverpflichtungen des technischen Supports des Dienstleisters für Diensteanfragen:

|                    | Garantie für die Reaktionszeit (GTI) | Leistungsziel |
| ------------------ | ------------------------------------ | ------------- |
| Diensteanfrage     | 4 Std                                | 90%           |

*Nota*:

- *Die Frist für die Garantie der Reaktionszeit (GTI) wird berechnet ab dem Zeitpunkt, zu dem der AUFTRAGGEBER das Ticket eröffnet bis zum Zeitpunkt der ersten Intervention des Supports des Dienstleisters.*
- *Die Untersuchung von Vorfällen, die AUFTRAGGEBER betreffen, wird keine Ferninterventionen auf den gehosteten Servern des AUFTRAGGEBERS umfassen. Diese Unterstützung wird auf die Erklärung der verfügbaren Metriken bezogen auf die Umgebung des AUFTRAGGEBERS beschränkt, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Auf der Grundlage der Ergebnisse dieser Analyse können Empfehlungen vorgeschlagen werden.*

## 8.4. Verpflichtung zur Verfügbarkeit des S3 Objektspeichers

- **SLA 10      : IC-INFRA_SNC-10** – Hier finden Sie die Verfügbarkeitsverpflichtungen für S3-Objektspeicher:

| Indikator         | Verpflichtung                                        | Verfügbarkeitsziel       |
| ----------------- | ---------------------------------------------------- | ------------------------ |
| IC-INFRA-SNC-10.1 | Haltbarkeit der Objektspeicherung in einer Region    | 99,9999999% pro Jahr     |
| IC-INFRA-SNC-10.2 | Verfügbarkeit der S3-Objektspeicher-API              | 99,99%                   |
| IC-INFRA-SNC-10.3 | Maximale Zugriffslatenz für ein Objekt in einer Region | 150 ms                   |

Anmerkungen:

- Der Objektspeicherdienst ist speziell für die Objektspeicherung konzipiert und muss ausschließlich zu diesem Zweck verwendet werden, **was die Verwendung im Blockmodus eindeutig ausschließt**. Der Rückgriff auf den Blockmodus auf Umwegen, einschließlich der Verwendung von *"FUSE" in einem Linux-Umfeld*, stellt einen Verstoß gegen die in dieser Servicevereinbarung festgelegten Nutzungsbedingungen dar. Kein Vorfall, Fehlfunktion oder Schaden, der aus dieser nicht bestimmungsgemäßen Verwendung resultiert, wird von den in dieser Vereinbarung definierten Service Level Agreements (SLA) abgedeckt.
- Die Haltbarkeitsgarantie setzt die Nutzung der Dienste gemäß den aktuellen Best Practices und Standards voraus und schließt ausdrücklich jegliche Datenmodifikation aus, sei sie absichtlich oder unbeabsichtigt, die aus Maßnahmen des AUFTRAGGEBERS resultiert.

## 8.5. Präzisierung bezüglich der Verpflichtung zur Datensicherung
Die für den AUFTRAGGEBER eingesetzte Backup-Strategie ist von der Unterzeichnung der entsprechenden Werkseinheiten abhängig.

Der Dienstleister verpflichtet sich zur Bereitstellung einer Backup-Lösung, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Richtlinien anzuwenden.

Es wird klargestellt, dass der Umfang der Verantwortlichkeit des Dienstleisters sich auf die Bereitstellung eines Backup-Dienstes beschränkt und es liegt am AUFTRAGGEBER, über die Schnittstelle AUFTRAGGEBER die korrekte Durchführung der assoziierten Richtlinien zu überwachen.

Es wird weiterhin darauf hingewiesen, dass die Verwaltung der Speicherkapazitäten des für die Backups gewidmeten Speicherraumes in der Verantwortung und Zuständigkeit des AUFTRAGGEBERS liegt. Der Dienstleister stellt die Nutzungsraten über die Konsole zur Verfügung.

*Beispiel: Nichtsicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist dafür verantwortlich, die korrekte Durchführung der Backup-Richtlinien zu überprüfen / zu überwachen. Falls der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert ist, liegt es an ihm, die Ursache zu überprüfen. Der AUFTRAGGEBER kann den Support des Dienstleisters je nach abonniertem Support-Level zur Unterstützung anfragen.*

**Das SLA 8: IC-INFRA_SNC-08 und SLA 9**, wird ausschließlich im Falle eines Vorfalls des Backup-Dienstes anwendbar sein.

# 9. Organisation der vertraglichen Beziehung
## 9.1. Verantwortlichkeiten des Dienstleisters
Der Dienstleister verpflichtet sich:

- seinen AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Fall von Kapazitätsgrenzen der technischen Ressourcen, die den Service bereitstellen).

- den AUFTRAGGEBER formell und innerhalb einer Frist von einem Monat über jegliche juristische, organisatorische oder technische Veränderungen zu informieren, die Auswirkungen auf die Compliance des Services bezüglich des Schutzes gegen außereuropäische Gesetze haben können (19.6 des Referenzdokuments SNC v3.2).

- dem AUFTRAGGEBER Schnittstellen und Dienstleistungsschnittstellen zur Verfügung zu stellen, die mindestens in französischer Sprache sind.

- spezifische sektorale Anforderungen in Betracht zu ziehen, die mit den vom AUFTRAGGEBER im Rahmen der Bereitstellung des Services anvertrauten Informationen verbunden sind, im Rahmen der Verantwortlichkeiten des Dienstleisters.

- ohne formelle und schriftliche Genehmigung des AUFTRAGGEBERS keine Informationen, die mit der Dienstleistung zusammenhängen, an Dritte weiterzugeben.

- alle erforderlichen Informationen für die Durchführung von Compliance-Audits gemäß den Bestimmungen des Artikels 28 der DSGVO bereitzustellen.

- dem AUFTRAGGEBER durch diese Servicevereinbarung über jedes Sicherheitsereignis zu berichten, das den Service oder die Nutzung des Services durch den AUFTRAGGEBER (einschließlich der Daten des AUFTRAGGEBERS) beeinträchtigt.

- einen qualifizierten Anbieter für die Auditierung der Informationssystemsicherheit (PASSI), der vom Dienstleister beauftragt wurde, zu erlauben, den Service sowie sein Informationssystem gemäß dem Kontrollplan des SecNumCloud des Dienstleisters zu auditieren. Darüber hinaus verpflichtet sich der Dienstleister, alle notwendigen Informationen bereitzustellen, um die Compliance-Audits gemäß den Bestimmungen des Artikels 28 der DSGVO, die vom AUFTRAGGEBER oder einem beauftragten Dritten durchgeführt werden, erfolgreich zu leiten.

- dem AUFTRAGGEBER, in seiner Funktion als Auftragsverarbeiter, gemäß Artikel 28 der Allgemeinen Datenschutzverordnung (DSGVO), Unterstützung und Beratung zu bieten, indem der AUFTRAGGEBER alarmiert wird, sobald eine von ihm erteilte Anweisung eine Verletzung der Datenschutzregeln darstellen könnte.

- schriftlich zu benachrichtigen, wenn ein Projekt das Sicherheitsniveau des Services beeinflusst oder beeinflussen könnte, den AUFTRAGGEBER über die potenziellen Auswirkungen, die ergriffenen Abmilderungsmaßnahmen sowie über die verbleibenden Risiken, die ihn betreffen, zu informieren.

- alle erforderlichen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen, die für den Service gelten, sowie die spezifischen Sicherheitsanforderungen des AUFTRAGGEBERS, die von diesem definiert und im Vertrag vorgesehen sind, einzuhalten. Auf Anfrage des AUFTRAGGEBERS ermöglicht das Dokumentationsmodul der AUFTRAGGEBER-Schnittstelle einen sicheren Austausch dieser Dokumente.

- auf Anfrage des AUFTRAGGEBERS die Beurteilungselemente hinsichtlich der Risiken, die mit der Unterstellung der Daten des AUFTRAGGEBERS unter das Recht eines Nichtmitgliedstaats der Europäischen Union verbunden sind, bereitzustellen.

Auf formelle und schriftliche Anfrage des AUFTRAGGEBERS verpflichtet sich der Dienstleister:

1. Dem AUFTRAGGEBER die Hausordnung und den Verhaltenskodex des Dienstleisters zugänglich zu machen;

2. Dem AUFTRAGGEBER die bei Verstoß gegen die Sicherheitspolitik fälligen Sanktionen zugänglich zu machen;

3. Dem AUFTRAGGEBER alle ihn betreffenden Ereignisse in den Serviceprotokollen zur Verfügung zu stellen;

4. Am Ende des Vertrags verpflichtet sich der Dienstleister, die Daten und technischen Daten in Bezug auf den AUFTRAGGEBER gemäß der "Verfahrensweise zur Datenlöschung am Ende des Vertrags", die in dieser Servicevereinbarung beschrieben ist, zu löschen.

5. Ein sicheres Löschen aller Daten des AUFTRAGGEBERS durch vollständiges Überschreiben aller Medien, die im Rahmen des Service seine Daten gespeichert haben, zu gewährleisten.

6. Die vollständige Liste der Dritten bereitzustellen, die berechtigt sind, auf die Infrastrukturen zuzugreifen, die die Daten tragen.

Der Dienstleister wird die vollständige Liste der berechtigten Dritten, die Zugang zu den datentragenden Infrastrukturen haben, ständig aktualisieren und dem AUFTRAGGEBER zur Verfügung stellen und diesen über jegliche Änderungen bezüglich der Subunternehmer informieren. Der Dienstleister und all seine Tochtergesellschaften verpflichten sich, die grundlegenden Werte der Europäischen Union, nämlich Menschenwürde, Freiheit, Demokratie, Gleichheit, Rechtsstaatlichkeit sowie die Achtung der Menschenrechte zu respektieren. Der vom Dienstleister erbrachte Service entspricht den geltenden Gesetzen bezüglich Grundrechte und den Werten der Europäischen Union in Bezug auf die Achtung der Menschenwürde, Freiheit, Gleichheit, Demokratie und den Rechtsstaat.

## 9.2. Haftungsbeschränkung des Dienstleisters
Aufgrund der Gesamtheit der Definitionen und Bedingungen, die in diesem Dienstleistungsvertrag genannt werden, sind die Haftungen des Anbieters wie folgt begrenzt:

1. Das Modell der geteilten Verantwortung, das im Abschnitt „Modell der geteilten Verantwortungen“ dieses Dienstleistungsvertrags beschrieben wird, begrenzt die Einbeziehung des Anbieters in die Betriebsschichten, die "oberhalb" der Bereitstellung von Rechen-, Netzwerk-, Speicher- und Backup-Ressourcen liegen. Dies umfasst insbesondere, jedoch nicht ausschließlich:

   - Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Applikationen usw.);

   - Die Aktualisierung der Betriebssysteme und anderer Software, die vom AUFTRAGGEBER auf seinen Maschinen in seinen Tenants installiert ist;

   - Die Sicherheit der Programme, Software und Applikationen, die auf den virtuellen Maschinen installiert sind;

   - Die Aktualisierung der virtuellen Maschinen;

   - Die Datensicherung auf Anwendungsebene.

2. Der Anbieter kann keine Verpflichtungen zur Sicherung der Tenants des AUFTRAGGEBERS übernehmen, ohne dass der AUFTRAGGEBER zuvor die entsprechenden Arbeitskomponenten abonniert hat.

3. Der Anbieter kann keinen Anspruch auf das Eigentum an den vom AUFTRAGGEBER übertragenen und generierten Daten erheben. Tatsächlich sind diese Eigentum des AUFTRAGGEBERS.

4. Der Anbieter betont, dass er die übertragenen und generierten Daten des AUFTRAGGEBERS keinesfalls nutzen kann, ohne die vorherige Zustimmung des AUFTRAGGEBERS.

5. Der Anbieter entbindet sich jeglicher Verantwortung für physische Komponenten, die vom Anbieter gehostet und infogermanagt werden, aber das direkte Eigentum des AUFTRAGGEBERS oder eines Dritten sind, mit dem der AUFTRAGGEBER vertragliche Vereinbarungen hat. Das Hosting physischer Kundenkomponenten ist nicht Teil des Dienstes und daher vom Rahmen dieses Dienstleistungsvertrags ausgeschlossen. Es ist Sache des AUFTRAGGEBERS, das Niveau der Adhärenz oder Abhängigkeit zu bewerten, das diese Komponenten in Bezug auf den IaaS-Dienst mit SecNumCloud-Qualifikation einführen.

## 9.3. Zugriffsbeschränkung
Im Rahmen des Dienstes ist es dem Dienstleister ausdrücklich untersagt, ohne vorherige Genehmigung auf die Tenants zuzugreifen, die dem AUFTRAGGEBER gehören. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Dienstleisters je nach den spezifischen Anforderungen des Hostings und gegebenenfalls der professionellen Supportdienste, falls diese Option vom AUFTRAGGEBER gewählt wurde, die notwendigen Zugänge zu gewähren.

Der AUFTRAGGEBER erkennt an, dass diese Zugänge ausschließlich für die Bedürfnisse im Zusammenhang mit der vereinbarten Dienstleistung gewährt werden und somit eine sichere Verwaltung entsprechend den Vereinbarungsbedingungen sicherstellen.

Der Fernzugriff durch Dritte, die an der Dienstleistungserbringung des Dienstleisters beteiligt sind, ist strengstens untersagt. In dem Fall, dass eine spezifische technische Anforderung einen solchen Zugriff erforderlich machen würde, darf dieser nur eingerichtet werden, nachdem der AUFTRAGGEBER klar benachrichtigt, eine detaillierte Begründung geliefert und dessen schriftliche Zustimmung erhalten wurde.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 9.4. Verantwortlichkeiten Dritter, die an der Bereitstellung des Secure Temple Dienstes teilnehmen
Der Dienstleister beherrscht die Liste der Drittpartner, die an der Bereitstellung des Dienstes beteiligt sind. Diese Dritten sind Herausgeber, Anbieter (des Dienstleisters) und andere Lieferanten, die an der Bereitstellung des Dienstes teilnehmen. Der Dienstleister wendet die folgenden Maßnahmen auf diese Dritten an:

-   Der Dienstleister fordert von den Dritten, die an der Umsetzung des Dienstes teilnehmen, in ihrem Beitrag zum Dienst ein Sicherheitsniveau, das zumindest gleichwertig zu dem ist, das er selbst in seiner eigenen Sicherheitspolitik für den Dienst Secure Temple zu halten verpflichtet ist;

-   Der Dienstleister vertraglich bindet mit jedem Drittteilnehmer an der Umsetzung des Dienstes Klauseln für Audits, die es einer Qualifizierungsorganisation ermöglichen zu überprüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten, und dem Dienstleister erlauben, seine Verpflichtungen in diesem Dienstleistungsabkommen zu erfüllen.

-   Der Dienstleister implementiert ein Verfahren, um regelmäßig die von den Dritten im Rahmen der Dienstumsetzung eingeführten Maßnahmen zu kontrollieren, um den Anforderungen des Dienstleisters zu entsprechen und seine Verpflichtungen in diesem Dienstleistungsabkommen zu erfüllen.

-   Der Dienstleister implementiert ein Verfahren zur Überwachung von Änderungen, die von den Dritten, die an der Umsetzung des Dienstes teilnehmen, durchgeführt werden könnten und die das Sicherheitsniveau des Informationssystems des Dienstes beeinflussen könnten.

## 9.5. Verantwortlichkeiten und Verpflichtungen des AUFTRAGGEBERS
Zur Erinnerung, der Anbieter stellt dem AUFTRAGGEBER eine Plattform zur Ausführung von virtuellen Maschinen zur Verfügung, deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt. Jede virtuelle Maschine kann nicht ohne eine zugehörige Backup-Politik funktionieren. Der Anbieter definiert über seine Schnittstellen automatische Backup-Politiken. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Backup-Politiken zu aktivieren und somit die virtuellen Maschinen in Betrieb zu nehmen.

Der AUFTRAGGEBER ermächtigt die ANSSI und die Qualifizierungsstelle SNC, den Dienst und die technische Infrastruktur, die den Dienst bereitstellt, zu prüfen.

## 9.6. Rechte des AUFTRAGGEBERS
Zu jedem Zeitpunkt während der Vertragsbeziehung kann der AUFTRAGGEBER eine Beschwerde über den qualifizierten Dienst bei der ANSSI einreichen.

Zu jedem Zeitpunkt kann der AUFTRAGGEBER vom Dienstleister verlangen, dass ihm die Geschäftsordnung und der Ethikkodex zugänglich gemacht werden.

## 9.7. Löschung von Daten am Ende des Vertrags
Am Ende des Vertrages, egal ob dieser abgelaufen ist oder aus irgendeinem Grund gekündigt wurde, verpflichtet sich der Dienstleister, ein sicheres Löschen aller Daten des AUFTRAGGEBERS, einschließlich der technischen Daten, vorzunehmen. Der Dienstleister wird sicherstellen, dem AUFTRAGGEBER eine formelle Ankündigung mit einer Frist von einundzwanzig (21) Kalendertagen zu übermitteln. Die Daten des AUFTRAGGEBERS werden dann innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um den Nachweis dieser Löschung zu erbringen, wird der Dienstleister dem AUFTRAGGEBER ein Zertifikat übergeben, das die Löschung der Daten bestätigt.

# 10. Lebenszyklus dieser Dienstleistungsvereinbarung
## 10.1. Eintritt in Kraft des Dienstleistungsvertrags
Die vorliegende Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Erhebung, Handhabung, Speicherung und Verarbeitung von Daten im Rahmen der Vorverkaufsaktivitäten, der Implementierung, der Einstellung des Service, werden unter Einhaltung der geltenden Gesetzgebung durchgeführt.

## 10.2. Änderungen der Dienstleistungsvereinbarung
Die Änderungen oder Ergänzungen dieser Dienstleistungsvereinbarung resultieren ausschließlich aus den Anfragen, die von den hierfür ernannten Steuerungsgremien gestellt wurden. Diese Änderungsvorschläge werden von den Parteien geprüft, die berechtigt sind, zu bestimmen, welche Aspekte eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Dienstleistungsvereinbarung, nach deren Validierung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung einer Ergänzung zum laufenden Vertrag erfordert.

Faktoren, die eine Überprüfung dieser Dienstleistungsvereinbarung veranlassen können, umfassen, aber sind nicht beschränkt auf:

-   Die Entwicklung der technischen Infrastruktur, die den IaaS-Service bereitstellt;
-   Die Anpassungen der vom Dienstleister bereitgestellten Services zur Erbringung des Service;
-   Die Veränderungen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen;
-   Die organisatorischen Umstrukturierungen innerhalb des AUFTRAGGEBERS oder des Dienstleisters;
-   Die Erweiterung oder Reduzierung des Anwendungsbereichs des Service.

Die Verwaltung der Versionen und Revisionen der Dienstleistungsvereinbarung ist im Vorwort des Dokuments verzeichnet, um die Nachverfolgung zu erleichtern.

### 10.2.1. Entwicklungen initiiert vom AUFTRAGGEBER
Die Änderungen des Dienstleistungsabkommens können insbesondere folgende Ursachen haben:

-   Eine Entwicklung der vom Dienstleister verwalteten Infrastruktur;

-   Eine Änderung der vom Dienstleister implementierten Services;

-   Eine Änderung der Service-Level-Zusagen durch den Dienstleister.

### 10.2.2. Änderungen initiiert durch den Dienstleister

Jede Änderung der Dienstleistungsvereinbarung bedarf der Zustimmung des SPONSORS. Es wird darauf hingewiesen, dass jede genehmigte Änderung oder Ergänzung, die die finanziellen Bestandteile des Vertrags ändert, die Unterzeichnung einer Zusatzvereinbarung zu diesem erfordern kann.

## 10.3. Reversibilität
Des Weiteren verpflichtet sich Cloud Temple, eine Überarbeitung dieser Dienstleistungsvereinbarung (insbesondere die Beendigung) ohne Strafzahlung für den AUFTRAGGEBER im Falle des Verlustes der SecNumCloud-Qualifikation zu ermöglichen.

Die Dienste beinhalten keine Verpflichtung zur Reversibilität (d.h., dem Kunden Hilfe zu leisten, damit er sein System zu einem anderen Dienstanbieter migrieren kann) mit Ausnahme der Bereitstellung einer SCHNITTSTELLE für den AUFTRAGGEBER durch den Dienstanbieter, die es dem AUFTRAGGEBER ermöglicht, seine Daten zu sichern und zu wiederherstellen, einschließlich insbesondere der Konfigurationsdaten seiner Informationssysteme über eine der folgenden technischen Modalitäten nach Wahl des AUFTRAGGEBERS: die Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Dienstanbieter bereitgestellten Dienstes verwendbaren Formaten oder über die Einrichtung technischer Schnittstellen, die den Datenzugriff auf ein dokumentiertes und verwendbares Schema (API) ermöglichen.

Der AUFTRAGGEBER, als alleiniger Herr über sein System, muss alles in seiner Macht Stehende tun, um diese Operation zu erleichtern, sofern erforderlich (was insbesondere bedeutet, dass er eine gründliche Dokumentation zu diesem Zweck erstellt) und Pläne zur Reversibilität ausarbeitet. Für den Fall, dass der AUFTRAGGEBER zusätzliche Dienstleistungen benötigt, kann der Dienstanbieter eine Beratungsmission in diesem Zusammenhang im Rahmen eines zu verhandelnden spezifischen Vertrags vorschlagen.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes
## 11.1. Verwaltung von Incidents und Unterbrechungen
### 11.1.1. Zwischenfälle
#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Dienstleistungsvereinbarung behandelt werden

-   Schäden

-   Ausfälle und Fehlfunktionen

-   Sicherheitsvorfälle:

-   Beeinträchtigung der Verfügbarkeit des Dienstes

-   Beeinträchtigung der Vertraulichkeit des Dienstes

-   Beeinträchtigung der Integrität des Dienstes

#### 11.1.1.2. Behandlung von Vorfällen
-   Fristen

-   Nachträgliche Maßnahmen

-   Sicherheitsvorfälle dokumentierende Unterlagen archivieren.

-   Benachrichtigung über Verletzungen des Schutzes personenbezogener Daten (online): <https://notifications.cnil.fr/notifications/index>

#### 11.1.1.3. Benachrichtigungsstufe von Sicherheitsvorfällen
Der AUFTRAGGEBER ist verantwortlich für die Auswahl der Schweregrade von Sicherheitsvorfällen, über die er informiert werden möchte, zum Beispiel durch deren Formalisierung in einem für den Dienst anwendbaren Vorgehensstandard (Standard Operating Procedure (SOP)).

Standardmäßig wird der AUFTRAGGEBER informiert über:

-   Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der in dem Prozess für die Priorisierung der Behandlung in dieser Dienstvereinbarung definierten Auswirkungsskala);

-   Verstöße gegen den Schutz personenbezogener Daten, für die der AUFTRAGGEBER für die Verarbeitung verantwortlich ist;

-   Verstöße gegen den Schutz personenbezogener Daten, für die der Dienstleister verantwortlich ist und die personenbezogene Daten des AUFTRAGGEBERS betreffen.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung
Die gewährleistete Wartung beinhaltet die Implementierung:

-   Des Plans zur Aufrechterhaltung der betrieblichen Bedingungen des Dienstes, um gute Verfügbarkeitsindikatoren zu gewährleisten, wie sich der Dienstleister oben verpflichtet hat;

-   Des Plans für Betriebskontinuität und Notfallwiederherstellung (PCA/PRA), falls vom AUFTRAGGEBER abonniert, ausgelöst entsprechend den möglicherweise auftretenden Zwischenfällen.

### 11.2.2. Fernzugriffe von Cloud Temple auf den Zuständigkeitsbereich des AUFTRAGGEBERS
Der Dienstleister verpflichtet sich im Rahmen dieser Servicevereinbarung, keinen Zugang zu den Mandanten und zum Interface-Bereich des AUFTRAGGEBERS zu haben.

Es wird Sache des AUFTRAGGEBERS sein, dem Personal des Dienstleisters die notwendigen Zugänge zu gewähren. Der AUFTRAGGEBER erkennt an, dass die Zugänge im Rahmen der Bereitstellung von Webhosting-Diensten und schließlich des Managed Service (falls vom AUFTRAGGEBER abonniert) verwendet werden.

### 11.2.3. Fernzugriffe Dritter, die an der Erbringung der Dienstleistung im Zuständigkeitsbereich des AUFTRAGGEBERS mitwirken

Kein Fernzugriff von dritten Teilnehmern, die an der Bereitstellung des Dienstes beteiligt sind, ist erlaubt.

Sollte aus technischen Gründen ein solcher Fall notwendig werden, dann würde dieser Typ von Zugriff nur nach Benachrichtigung des AUFTRAGGEBERS mit Begründung und Erlangung seiner schriftlichen Zustimmung erfolgen.

# 12. Verfahren zur Datenlöschung am Ende des Vertrags
Am Ende des Vertrages, gleich aus welchem Grund, ob aufgrund des Ablaufs der Vertragszeit oder aus einem anderen Grund, wird der Dienstleister das sichere Löschen aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des AUFTRAGGEBERS, gewährleisten. Der Dienstleister wird eine formelle Ankündigung mit einer Frist von einundzwanzig (21) Tagen geben. Die Daten des AUFTRAGGEBERS werden innerhalb einer maximalen Frist von dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Dienstleister stellt dem AUFTRAGGEBER ein Datenlöschzertifikat zur Verfügung.

# 13. Anwendbares Recht
## 13.1. Allgemein
Das anwendbare Recht und das für dieses Dienstleistungsabkommen maßgebliche Recht ist das französische Recht.

## 13.2. Einhaltung des anwendbaren Rechts und der geltenden Vorschriften
Der Dienstleister verpflichtet sich zu den folgenden Punkten:

-   Die Identifizierung der anwendbaren rechtlichen und gesetzlichen Einschränkungen im Rahmen der Dienstleistung;

-   Die Einhaltung der für die an den Dienstleister übertragenen Daten geltenden rechtlichen und gesetzlichen Einschränkungen;

-   Die Einhaltung des Gesetzes über Informatik und Freiheiten und der DSGVO;

-   Die Implementierung von Schutzmaßnahmen für personenbezogene Daten;

-   Die Einführung eines Prozesses zur rechtlichen und gesetzlichen Überwachung;

-   Verfügen und Aufrechterhalten angemessener Beziehungen oder eine Überwachung mit den sektoralen Behörden in Verbindung mit der Art der im Rahmen der Dienstleistung verarbeiteten Daten. Dies schließt insbesondere die ANSSI, das CERT-FR und die CNIL ein.

## 13.3. DSGVO

Als Auftragnehmer im Sinne von Artikel 28 der Allgemeinen Datenschutzverordnung (DSGVO) verpflichtet sich der Dienstleister:

- Die Transparenz und Nachvollziehbarkeit zu gewährleisten;

- Einen Datenschutzbeauftragten (DPO) zu benennen, der beauftragt ist, Maßnahmen zum Schutz personenbezogener Daten zu definieren und umzusetzen;

- Unterstützung und Beratung für den AUFTRAGGEBER zu bieten, indem er diesen warnt, falls eine Weisung von ihm als Verstoß gegen die Datenschutzvorschriften gilt, sofern der Dienstleister die Möglichkeit hat, dies zu erkennen;

- Eine Sicherheitsgarantie für die verarbeiteten Daten aufgrund der Qualifikation SecNumCloud zu bieten.

## 13.4. Schutz in Bezug auf das außereuropäische Recht
Im Falle der Inanspruchnahme einer Drittfirma durch den Dienstleister im Rahmen des Service - einschließlich eines Subunternehmers -, dessen gesetzlicher Sitz, Hauptverwaltung oder Hauptniederlassung sich in einem Nichtmitgliedstaat der Europäischen Union befindet oder zu einer Drittfirma gehört oder von einer außerhalb der Europäischen Union ansässigen Drittfirma kontrolliert wird, verpflichtet sich der Dienstleister, dass diese besagte Drittfirma keinen Zugang zu den vom Service 'Secure Temple' verarbeiteten Daten hat.

Zur Erinnerung, die besagten Daten sind jene, die vom DIENSTLEISTER durch den AUFGEBER überließt werden, sowie alle technischen Daten, die Informationen über die AUFGEBER enthalten.

Für die Zwecke dieses Artikels wird der Begriff der Kontrolle als jener verstanden, der im Abschnitt II des Artikels L233-3 des Handelsgesetzbuches erwähnt wird.

# 14. UNTERSCHRIFTEN
Geschehen in __________________, den
___________________________

Für Cloud Temple, den DIENSTLEISTER

Für _________________________, den AUFTRAGGEBER